# Array compose

  [![Build Status](https://travis-ci.org/bredele/array-compose.svg?branch=master)](https://travis-ci.org/bredele/array-compose)
  [![NPM](https://img.shields.io/npm/v/array-compose.svg)](https://www.npmjs.com/package/array-compose)
  [![Downloads](https://img.shields.io/npm/dm/array-compose.svg)](http://npm-stat.com/charts.html?package=array-compose)
  [![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Compose two arrays together to return a string. Useful to rebuild tagged templates.

## Usage

```js
const compose = require('array-compose')

compose(['hello ', 'in '], ['everybody ', 'the ', 'world '])
// 'hello everybody in the world'


// the function engine is a tagged template
const name = 'foo'
function engine (chunks, ...data) {
  return compose(chunks, data)
}

engine`hello ${foo}`
// hello foo
```

## Installation

```shell
npm install array-compose --save
```

[![NPM](https://nodei.co/npm/array-compose.png)](https://nodei.co/npm/array-compose/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Bluff is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any array-compose related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
