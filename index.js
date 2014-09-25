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
