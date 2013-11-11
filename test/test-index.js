var path = require('path'),
    helpers = require('yeoman-generator').test,
    rimraf = require('rimraf');

describe('flowtime generator', function() {

  var temp = path.join(__dirname, 'temp');

  beforeEach(function(done) {
    helpers.testDirectory(temp, function(err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('flowtime:app', [
        '../../app'
      ]);

      done();
    }.bind(this));
  });

  afterEach(function(done) {
    rimraf(temp, function(err) {
      done(err);
    });
  });

  it('create expected files', function(done) {
    // cancel npm install and bower install
    this.app.removeAllListeners('end');
    this.app.run({}, function() {
      helpers.assertFiles([
        'Gruntfile.coffee',
        'bower.json',
        'package.json',
        'coffee/index.coffee',
        'jade/index.jade',
        'stylus/index.stylus'
      ]);
      done();
    });
  });

});
