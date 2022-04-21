const {Command} = require('@oclif/core');

class World extends Command {
  static description = 'Say hello world';

  static examples = [
    `$ docker-desktop hello world
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static strict = false;

  static flags = {};

  static args = [];

  async run() {
    this.log('hello world! (./src/commands/hello/world.ts)');
  }
}

module.exports = World;
