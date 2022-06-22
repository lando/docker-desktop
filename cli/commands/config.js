const {BaseCommand} = require('../lib/command');
const {loadHelpClass} = require('@oclif/core');

class ConfigCommand extends BaseCommand {
  static description = 'Say hello';
  static examples = [
    `$ docker-desktop config --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ];

  static flags = {
    ...BaseCommand.globalFlags,
  };

  async run() {
    const Help = await loadHelpClass(this.config);
    const help = new Help(this.config, this.config.pjson.helpOptions);
    await help.showHelp(['config']);
  }
}

module.exports = ConfigCommand;
