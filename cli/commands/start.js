const {BaseCommand} = require('../lib/command');

class StartCommand extends BaseCommand {
  static description = 'Provides information about your Docker Desktop installation';

  static examples = ['$ docker-desktop stop'];

  async run() {
    const {args, flags} = await this.parse(StartCommand);
    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.js)`);
    this.debug('whatver it is something to do22222');
    this.warn('whatver it is something to do');
    this.error('whatver it is something to do');
  }
}

module.exports = StartCommand;
