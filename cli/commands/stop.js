const {BaseCommand} = require('../lib/command');

class StopCommand extends BaseCommand {
  static description = 'Stops and closes Docker Desktop';
  static examples = ['$ docker-desktop stop'];
  // static usage = 'stop'

  static flags = {
    ...BaseCommand.globalFlags,
  };

  async run() {
    const {args, flags} = await this.parse(StopCommand);
    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.js)`);
    this.debug('whatver it is something to do22222');
    this.warn('whatver it is something to do');
    this.error('whatver it is something to do');
  }
}

module.exports = StopCommand;
