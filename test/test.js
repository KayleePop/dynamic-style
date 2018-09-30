const test = require('muggle-test')
const assert = require('muggle-assert')
const loadStyle = require('../index.js')

test('simple style should load', async () => {
  // clear old style
  document.body.style = {}

  await loadStyle('fixtures/bodyColor.css')
  assert.equal(window.getComputedStyle(document.body).backgroundColor, 'rgb(255, 0, 0)')
})

test('loading nonexistant style should reject', async () => {
  await assert.rejects(
    loadStyle('nonexistant.js'),
    new Error('Failure loading url: nonexistant.js')
  )
})
