# generator-flowtime

[![Build Status](https://travis-ci.org/sasaplus1/generator-flowtime.png)](https://travis-ci.org/sasaplus1/generator-flowtime)
[![Dependency Status](https://gemnasium.com/sasaplus1/generator-flowtime.png)](https://gemnasium.com/sasaplus1/generator-flowtime)

Yeoman generator for slide template with flowtime.js

## Installation

```sh
$ npm install -g yo generator-flowtime
```

### scaffolding

```sh
$ mkdir flowtime && cd $_
$ yo flowtime
```

### run

```sh
$ grunt
```

1. start server at `localhost:3000`
1. compile Jade, Stylus and CoffeeScript
1. start watching for files, and start livereload
  1. recompile for file when file updated
  1. reload browser when file updated

### create zip archive for slide

```sh
$ grunt archive
```

## appended keys for slide

- Enter
  - move to next page
  - similar to down key
- Shift-Enter
  - move to previous page
  - similar to up key

## Contributors

- [natrem](https://github.com/natrem)

## License

The MIT license. Please see LICENSE file.
