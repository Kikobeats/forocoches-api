# forocoches-api

![Last version](https://img.shields.io/github/tag/Kikobeats/forocoches-api.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/forocoches-api/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/forocoches-api)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/forocoches-api.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/forocoches-api)
[![Dependency status](https://img.shields.io/david/Kikobeats/forocoches-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/forocoches-api)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/forocoches-api.svg?style=flat-square)](https://david-dm.org/Kikobeats/forocoches-api#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/forocoches-api.svg?style=flat-square)](https://www.npmjs.org/package/forocoches-api)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Programatic access for forocoches site.

## Install

```bash
$ npm install forocoches-api --save
```

## Usage

```js
const forocoches = require('forocoches-api')

const stream = forocoches({
  key: process.env.API_KEY,
  pages: 2 // number of pages to retrieve
})
```

## API

### forocoches(options)

#### options

##### key

*Required*<br>
Type: `string`<br>

API Key credentials.

##### pages

Type: `number`<br>
Default: `1`

Number of pages to retrieve

## License

MIT © [Kiko Beats](https://github.com/Kikobeats).
