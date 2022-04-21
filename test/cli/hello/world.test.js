const {expect, test} = require('@oclif/test');

describe('hello world', () => {
  test
  .stdout()
  .command(['hello:world'])
  .it('runs hello world cmd', ctx => {
    expect(ctx.stdout).to.contain('hello world!');
  });
});
