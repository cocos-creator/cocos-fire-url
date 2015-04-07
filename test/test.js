var FireUrl = require('../index');

describe('FireUrl.normalize', function () {
    it('should work for simple case', function () {
        FireUrl.normalize('assets://\\foobar\\hello.fire')
        .should.eql('assets://foobar/hello.fire');
    });
});

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

describe('FireUrl.dirname', function () {
    it('should work for simple case', function () {
        FireUrl.dirname('assets://foo/bar/foobar.png')
        .should.eql('assets://foo/bar');
    });

    it('should support bare directory', function () {
        FireUrl.dirname('assets://foo/bar/')
        .should.eql('assets://foo');
    });

    it('should support root directory', function () {
        FireUrl.dirname('assets://foo/')
        .should.eql('assets://');
    });

    it('should be empty if we pass protocol', function () {
        FireUrl.dirname('assets://')
        .should.eql('');
    });
});

describe('FireUrl.basename', function () {
    it('should work for simple case', function () {
        FireUrl.basename('assets://foo/bar/foobar.png')
        .should.eql('foobar.png');
    });

    it('should support bare directory', function () {
        FireUrl.basename('assets://foo/bar/')
        .should.eql('bar');
    });

    it('should be protocol name', function () {
        FireUrl.basename('assets://')
        .should.eql('assets');
    });
});
