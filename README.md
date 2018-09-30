# dynamic-style

[![Greenkeeper badge](https://badges.greenkeeper.io/KayleePop/dynamic-style.svg)](https://greenkeeper.io/)
[![Travis badge](https://travis-ci.org/KayleePop/dynamic-style.svg?branch=master)](https://travis-ci.org/KayleePop/dynamic-style)
[![standard badge](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![npm](https://img.shields.io/npm/v/dynamic-style.svg)](https://www.npmjs.com/package/dynamic-style)

Extremely simple dynamic style loader with promise API

## Goals
- Simple and readable source code
- Small API
- Fully tested

## Install

`$ npm install dynamic-style`

## Usage

```js
const loadStyle = require('dynamic-style')

// url is set as <link href="${url}" rel="stylesheet">
await loadStyle('https://url.com/file.css')
```
