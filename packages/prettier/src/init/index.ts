import { Rule, Tree, chain, noop } from '@angular-devkit/schematics';
import { addToPackageJson, installNodeDeps } from '../utility/package';
import { Schema as InitOptions } from './schema';
import { config } from '../config';
import { dependencies } from '../utility/dependencies';
import { hook } from '../hook';
import { updateWorkspace } from '../utility/angular-config';

const defaultCollectionOverride = { cli: { defaultCollection: '@angular-buddies/prettier' } };

function addPrettierToPackageJson(): Rule {
  return (host: Tree) => {
    addToPackageJson(host, 'devDependencies', 'prettier', `^${dependencies.prettier}`);
    return host;
  };
}

function addPrettierTask(): Rule {
  return (host: Tree) => {
    /* TODO : this isn't a good solution as this will parse all projects in the workspace.
     * We may create a build architect instead, in order to either :
     * - override @angular-devkit/build-angular:tslint --fix option
     * - or add a new prettify build architect
     */
    addToPackageJson(
      host,
      'scripts',
      'prettify',
      'prettier --write ./**/*.{json,css,scss,md,js,ts}'
    );
    return host;
  };
}

export function init(options: InitOptions): Rule {
  return chain([
    config(options),
    addPrettierToPackageJson(),
    hook(options),
    options.hook || options.skipInstall ? noop() : installNodeDeps(),
    options.skipScripts ? noop() : addPrettierTask(),
    options.defaultCollection ? updateWorkspace(defaultCollectionOverride) : noop()
  ]);
}
