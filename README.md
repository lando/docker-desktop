oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g docker-desktop
$ docker-desktop COMMAND
running command...
$ docker-desktop (--version)
docker-desktop/0.0.0 darwin-x64 node-v14.17.5
$ docker-desktop --help [COMMAND]
USAGE
  $ docker-desktop COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`docker-desktop hello PERSON`](#docker-desktop-hello-person)
* [`docker-desktop hello world`](#docker-desktop-hello-world)
* [`docker-desktop help [COMMAND]`](#docker-desktop-help-command)
* [`docker-desktop plugins`](#docker-desktop-plugins)
* [`docker-desktop plugins:install PLUGIN...`](#docker-desktop-pluginsinstall-plugin)
* [`docker-desktop plugins:inspect PLUGIN...`](#docker-desktop-pluginsinspect-plugin)
* [`docker-desktop plugins:install PLUGIN...`](#docker-desktop-pluginsinstall-plugin-1)
* [`docker-desktop plugins:link PLUGIN`](#docker-desktop-pluginslink-plugin)
* [`docker-desktop plugins:uninstall PLUGIN...`](#docker-desktop-pluginsuninstall-plugin)
* [`docker-desktop plugins:uninstall PLUGIN...`](#docker-desktop-pluginsuninstall-plugin-1)
* [`docker-desktop plugins:uninstall PLUGIN...`](#docker-desktop-pluginsuninstall-plugin-2)
* [`docker-desktop plugins update`](#docker-desktop-plugins-update)

## `docker-desktop hello PERSON`

Say hello

```
USAGE
  $ docker-desktop hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/lando/docker-desktop/blob/v0.0.0/dist/commands/hello/index.ts)_

## `docker-desktop hello world`

Say hello world

```
USAGE
  $ docker-desktop hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `docker-desktop help [COMMAND]`

Display help for docker-desktop.

```
USAGE
  $ docker-desktop help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for docker-desktop.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `docker-desktop plugins`

List installed plugins.

```
USAGE
  $ docker-desktop plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ docker-desktop plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `docker-desktop plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ docker-desktop plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ docker-desktop plugins add

EXAMPLES
  $ docker-desktop plugins:install myplugin 

  $ docker-desktop plugins:install https://github.com/someuser/someplugin

  $ docker-desktop plugins:install someuser/someplugin
```

## `docker-desktop plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ docker-desktop plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ docker-desktop plugins:inspect myplugin
```

## `docker-desktop plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ docker-desktop plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ docker-desktop plugins add

EXAMPLES
  $ docker-desktop plugins:install myplugin 

  $ docker-desktop plugins:install https://github.com/someuser/someplugin

  $ docker-desktop plugins:install someuser/someplugin
```

## `docker-desktop plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ docker-desktop plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ docker-desktop plugins:link myplugin
```

## `docker-desktop plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ docker-desktop plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ docker-desktop plugins unlink
  $ docker-desktop plugins remove
```

## `docker-desktop plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ docker-desktop plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ docker-desktop plugins unlink
  $ docker-desktop plugins remove
```

## `docker-desktop plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ docker-desktop plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ docker-desktop plugins unlink
  $ docker-desktop plugins remove
```

## `docker-desktop plugins update`

Update installed plugins.

```
USAGE
  $ docker-desktop plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
