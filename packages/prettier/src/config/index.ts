import { Rule, apply, url, template, mergeWith } from '@angular-devkit/schematics';
import { Schema as ConfigOptions } from './schema';

export function config(options: ConfigOptions): Rule {
  return mergeWith(
    apply(url('../config/files'), [
      template({
        ...options
      })
    ])
  );
}
