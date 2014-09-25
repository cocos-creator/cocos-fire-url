var FireUrl = require('../index');

describe('FireUrl.join', function () {
    it('should work for simple case', function () {
        FireUrl.join('http://www.google.com/', 'foo/bar', '?test=123')
        .should.eql('http://www.google.com/foo/bar?test=123');
    });

    it('should be able to join protocol', function () {
        FireUrl.join('http:', 'www.google.com/', 'foo/bar', '?test=123')
        .should.eql('http://www.google.com/foo/bar?test=123');
    });

    it('should remove extra slashes', function () {
        FireUrl.join('http:', 'www.google.com///', 'foo/bar', '?test=123')
        .should.eql('http://www.google.com/foo/bar?test=123');
    });

    it('should support anchors in urls', function () {
        FireUrl.join('http://', 'www.google.com///', 'foo/bar', '?test=123', '#faaaaa')
        .should.eql('http://www.google.com/foo/bar?test=123#faaaaa');
    });

    it('should support different protocol', function () {
        FireUrl.join('assets://', 'foo', '/bar', 'foobar.png')
        .should.eql('assets://foo/bar/foobar.png');
    });
});
