import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { SchematicContext, Rule } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function addToPackageJson(
  host: Tree,
  type: string,
  key: string,
  value: string,
  override = false
) {
  if (host.exists('package.json')) {
    const sourceText = host.read('package.json')!.toString('utf-8');
    const json = JSON.parse(sourceText);
    if (!json[type]) {
      json[type] = {};
    }

    if (override || !json[type][key]) {
      json[type][key] = value;
    }

    host.overwrite('package.json', JSON.stringify(json, null, 2));
  }

  return host;
}

export function installNodeDeps(): Rule {
  return (_: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}
