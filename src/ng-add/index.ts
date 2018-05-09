import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  chain,
  url,
  template,
  mergeWith,
  Source,
  noop
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addToPackageJson } from '../utility/package';
import { Schema as AddOptions } from './schema';

const prettierVersion = '1.12.1';

function installNodeDeps(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

function addPrettierToPackageJson(): Rule {
  return (host: Tree) => {
    addToPackageJson(host, 'devDependencies', 'prettier', `^${prettierVersion}`);
    return host;
  };
}

function applyFiles(options: AddOptions): Source {
  return apply(url('./files'), [
    template({
      // TODO
      ...(options as object)
    })
  ]);
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

export function ngAdd(options: AddOptions): Rule {
  return chain([
    mergeWith(applyFiles(options)),
    addPrettierToPackageJson(),
    options.skipInstall ? noop() : installNodeDeps(),
    options.skipScripts ? noop() : addPrettierTask()
  ]);
}
