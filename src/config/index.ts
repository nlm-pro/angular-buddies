import { Rule, apply, url, template, mergeWith, Source } from '@angular-devkit/schematics';
import { Schema as ConfigOptions } from './schema';

function applyFiles(options: ConfigOptions): Source {
  return apply(url('../config/files'), [
    template({
      // TODO
      ...(options as object)
    })
  ]);
}

export function config(options: any): Rule {
  return mergeWith(applyFiles(options));
}
