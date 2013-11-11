#!/usr/bin/env node

/*!
 * generator-flowtime Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/generator-flowtime
 * Released under the MIT license.
 */

var path = require('path'),
    util = require('util'),
    yeoman = require('yeoman-generator');

util.inherits(FlowtimeGenerator, yeoman.generators.Base);

function FlowtimeGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function() {
    this.installDependencies({
      bower: false,
      npm: true,
      skipInstall: false,
      callback: function() {
        this.spawnCommand('grunt', ['bower:install']);
      }.bind(this)
    });
  });

  this.pkg = require(path.join(__dirname, '..', 'package.json'));
}

FlowtimeGenerator.prototype.app = function() {
  this.mkdir('slide');

  this.mkdir('coffee');
  this.copy('coffee/index.coffee', 'coffee/index.coffee');

  this.mkdir('jade');
  this.copy('jade/index.jade', 'jade/index.jade');

  this.mkdir('stylus');
  this.copy('stylus/index.stylus', 'stylus/index.stylus');

  this.copy('_bower.json', 'bower.json');
  this.copy('_package.json', 'package.json');

  this.copy('Gruntfile.coffee', 'Gruntfile.coffee');
};

module.exports = FlowtimeGenerator;
