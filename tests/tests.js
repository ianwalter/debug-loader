const { test } = require('@ianwalter/bff')
const execa = require('execa')

test('debug-loader', async ({ expect }) => {
  const { stdout } = await execa('webpack')
  expect(stdout.split('\nHash:')[0]).toMatchSnapshot()
})
