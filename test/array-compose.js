/**
 * Dependencie(s)
 */

const test = require('tape')
const compose = require('..')


test('should compose 2 arrays together', assert => {
  assert.plan(1)
  assert.equal(
    compose(['hello'], ['world']),
    'helloworld'
  )
})

test('should compose 2 arrays of different size', assert => {
  assert.plan(1)
  assert.equal(
    compose(['hello', 'world'], ['everybody']),
    'helloeverybodyworld'
  )
})


test('should compose an array with an other one with bigger length', assert => {
  assert.plan(1)
  assert.equal(
    compose(['hello'], ['everybody', 'in', 'the', 'world']),
    'helloeverybodyintheworld'
  )
})


test('should return initial array if compose with empty array', assert => {
  assert.plan(1)
  assert.equal(
    compose(['hello'], []),
    'hello'
  )
})


test('should return initial array if nothing to compose with', assert => {
  assert.plan(1)
  assert.equal(
    compose(['hello']),
    'hello'
  )
})
