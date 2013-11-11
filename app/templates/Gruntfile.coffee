module.exports = (grunt) ->

  grunt.initConfig
    bower:
      install:
        options:
          cleanup: true
          layout: (type, component) ->
            require('path').join '..', 'slide/', type
    coffee:
      compile:
        files:
          'slide/index.js': 'coffee/*.coffee'
    compress:
      main:
        options:
          archive: 'slide.zip'
          mode: 'zip'
        files: [
          dest: '.'
          src: 'slide/**'
        ]
    connect:
      server:
        options:
          base: 'slide/'
          livereload: 35729
          port: 3000
    jade:
      compile:
        files:
          'slide/index.html': 'jade/*.jade'
    stylus:
      compile:
        files:
          'slide/index.css': 'stylus/*.{styl,stylus}'
    esteWatch:
      options:
        dirs: ['jade/**', 'stylus/**', 'coffee/**']
        livereload:
          enabled: true
          extensions: ['jade', 'styl', 'stylus', 'coffee']
          port: 35729
      jade: (filepath) -> 'jade'
      styl: '<%= esteWatch.stylus %>'
      stylus: (filepath) -> 'stylus'
      coffee: (filepath) -> 'coffee'

  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compress'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-este-watch'

  grunt.registerTask 'default', ['connect', 'jade', 'stylus', 'coffee', 'esteWatch']
  grunt.registerTask 'archive', ['compress']

  return
