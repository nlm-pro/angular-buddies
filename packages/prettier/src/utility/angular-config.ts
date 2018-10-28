import { Tree, SchematicsException, Rule } from '@angular-devkit/schematics';
import { WorkspaceSchema } from '@angular-devkit/core/src/workspace';
import { parseJson, JsonParseMode } from '@angular-devkit/core';
import * as merge from 'deepmerge';

export function updateWorkspace(override: Partial<WorkspaceSchema>): Rule {
  return (host: Tree) => {
    const possibleFiles = ['/angular.json', '/.angular.json'];
    const path = possibleFiles.filter(path => host.exists(path))[0];

    const configBuffer = host.read(path);

    if (configBuffer === null) {
      throw new SchematicsException(`Could not find an angular workspace config file.`);
    }
    const content = configBuffer.toString();

    const workspace = (parseJson(content, JsonParseMode.Loose) as {}) as WorkspaceSchema;

    host.overwrite(path, JSON.stringify(merge(workspace, override), null, 2));
  };
}
