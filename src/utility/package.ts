import { Tree } from '@angular-devkit/schematics/src/tree/interface';

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
