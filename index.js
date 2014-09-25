var Path = require('path');
var Url = require('url');
var FireUrl = {};

function normalize (str) {
    return str
    .replace(/[\/]+/g, '/')
    .replace(/\/\?/g, '?')
    .replace(/\/\#/g, '#')
    .replace(/\:\//g, '://');
}

FireUrl.join = function () {
    var joined = [].slice.call(arguments, 0).join('/');
    return normalize(joined);
};

FireUrl.dirname = function ( url ) {
    var dirname = Path.dirname(url);
    if ( dirname === '.' )
        return '';
    return normalize(dirname);
};

FireUrl.extname = function ( url ) {
    return Path.extname(url);
};

FireUrl.basename = function ( url ) {
    if ( FireUrl.dirname(url) === '' ) {
        var basename = Path.basename(url);
        return basename.substring(0,basename.length-1);
    }

    var extname = FireUrl.extname(url);
    return Path.basename(url,extname);
};

//
var _ = {};
var prop;
for ( prop in Url ) {
    _[prop] = Url[prop];
}
for ( prop in FireUrl ) {
    _[prop] = FireUrl[prop];
}
module.exports = _;
