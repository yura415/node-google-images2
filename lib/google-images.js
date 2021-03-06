(function() {
  "use strict";

  var fs, generateInfo, request;

  request = require('request');

  fs = require('fs');

  generateInfo = function(item) {
    var info;
    info = {
      width: item.width,
      height: item.height,
      unescapedUrl: item.unescapedUrl,
      url: item.url,
      writeTo: function(path, callback) {
        var stream;
        stream = fs.createWriteStream(path);
        stream.on('close', function() {
          return typeof callback === "function" ? callback() : void 0;
        });
        return request(item.url).pipe(stream);
      }
    };
    return info;
  };

  exports.search = function(query, options) {
    var callback;
    if (typeof query === 'object') {
      options = query;
      query = options["for"];
      if (options.callback != null) {
        callback = options.callback;
      }
    }
    if (typeof query === 'string' && typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (typeof query === 'string' && typeof options === 'object') {
      if (options.callback != null) {
        callback = options.callback;
      }
    }
    if (options.page == null) {
      options.page = 0;
    }
    var raw = '';
    if(options.rawQuery) {
      for(var k in options.rawQuery) {
        if(!options.rawQuery.hasOwnProperty(k)) continue;
        var v = options.rawQuery[k];
        raw += "&" + k + "=" + (typeof v === 'array' ? v.join(',') : v);
      }
    }
    return request("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + (query.replace(/\s/g, '+')) + "&start=" + options.page + raw, function(err, res, body) {
      var images, item, items, _i, _len;
      items = JSON.parse(body).responseData.results;
      images = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        images.push(generateInfo(item));
      }
      if (callback) {
        return callback(false, images);
      }
    });
  };

}).call(this);
