# google-images

This module for Node.js helps searching images using Google Images. It provides just one method, *search*, don't you need just that?

# Installation
Install from NPM:

```npm install google-images```

# Usage

```
var client = require('google-images');

client.search('Michael Jackson', function (err, images) { ... });

client.search({ for:'Michael Jackson', callback: function (err, images) { ... } });

client.search({ for:'Michael Jackson', page: 2, callback: function (err, images) { ... } });

client.search('Michael Jackson', { page: 2, callback: function (err, images) { ... } });

client.search('Michael Jackson', { page: 2, rawQuery: { safe: 'off', tbs: ['isz:lt', 'islt:qsvga'] } }, callback: function (err, images) { ... } });


```

# Changes

* removed coffescript source
* added custom parameters support in query (rawQuery param)
* re-writed usage examples in javascript

# License 

(The MIT License)

Copyright (c) 2011 Vadim Demedes &lt;sbioko@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.