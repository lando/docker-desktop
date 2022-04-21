const {Command} = require('@oclif/core');

class World extends Command {
  static description = 'Say hello world'

  static examples = [
    `$ oex hello world
hello world! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = []

  async run() {
    this.log('hello world! (./src/commands/hello/world.ts)');
  }
}

module.exports = World;
