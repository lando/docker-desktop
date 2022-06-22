const debug = require('debug')('docker-desktop:@lando/docker-desktop:hooks:bootstrap');

module.exports = async({id, argv, config}) => {
  // load bootstrap config?
  // what is this exactly?
  // we need a factory function to load the correct class?
  // additional hooks?
  // pre-command modifier?
  // pre-command-THING modifier???
  const test = options.config._commands.get('config');
  test.description = 'whateve444r';
  options.config._commands.set('config', test);
  console.log(options.config._commands.get('config'));
  debug('bootstrapping...');
  await options.config.runHook('test', options);
};

/*
  // config levels
    // CLI CONFIG
      * default installed version
      * supported versions?
      *ok

    // MANIFEST?


    // CONTROLLER CONFIG
    // INSTALLER CONFIG


  // separate controllers from installers?
  // controller config
    //



  dockerdesktop.getVersion();
  dockerdestkop.isInstalled();
  dockerdesktop.load(dockerdesktop.getVersion(), {construtor opts})

  .load{
    load the version specified9
    if does not exist then fallback to closest?
  }




*/
