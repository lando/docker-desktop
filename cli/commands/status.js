const {BaseCommand} = require('../lib/command');
const {Flags} = require('@oclif/core');
const pjson = require('./../../package.json');

class StatusCommand extends BaseCommand {
  static description = 'Provides information about your Docker Desktop installation';
  static examples = ['$ docker-desktop status'];
  // static usage = 'status';
  // static aliases = ['eeee', 'ffff']

  static flags = {
    ...BaseCommand.globalFlags,
    path: Flags.string({
      char: 'p',
      description: 'Shows just the specified key paths',
      multiple: true,
      env: 'DOCKER_DESKTOP_CONFIG_FILE',
      default: pjson.version,
      required: false,
      helpGroup: 'GLOBAL',
    }),
  };

  async run() {
    const {args, flags} = await this.parse(StatusCommand);
    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.js)`);
    this.debug('whatver it is something to do22222');
    this.warn('whatver it is something to do');
    this.error('whatver it is something to do');
  }
}

module.exports = StatusCommand;
