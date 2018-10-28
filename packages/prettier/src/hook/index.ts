import {
  Rule,
  Tree,
  chain,
  noop,
  mergeWith,
  apply,
  url,
  template
} from '@angular-devkit/schematics';
import { dependencies } from '../utility/dependencies';
import { addToPackageJson, installNodeDeps } from '../utility/package';
import { Schema as HookConfig } from './schema';

function addElmtsToPackageJson(): Rule {
  return (host: Tree) => {
    addToPackageJson(host, 'devDependencies', 'lint-staged', `^${dependencies.lintStaged}`);
    addToPackageJson(host, 'devDependencies', 'husky', `^${dependencies.husky}`);
    addToPackageJson(host, 'scripts', 'precommit', 'lint-staged');
    return host;
  };
}

export function hook(options: HookConfig): Rule {
  return chain([
    addElmtsToPackageJson(),
    mergeWith(
      apply(url('../hook/files'), [
        template({
          ...options
        })
      ])
    ),
    options.skipInstall ? noop() : installNodeDeps()
  ]);
}
