import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema as ConfigOptions } from './schema';
import { getFileContent } from '@schematics/angular/utility/test';

const collectionPath = path.join(__dirname, '../collection.json');

const defaultOptions: ConfigOptions = {
  singleQuote: true,
  printWidth: '120'
};

describe('config', () => {
  let runner: SchematicTestRunner;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
  });

  it('add prettier config files', () => {
    const tree = runner.runSchematic('prettier-config', defaultOptions, Tree.empty());

    expect(tree.files).toEqual(['/.prettierignore', '/.prettierrc']);
  });

  it('should set Prettier options values', () => {
    const tree = runner.runSchematic('prettier-config', defaultOptions, Tree.empty());
    const prettierRc = getFileContent(tree, '/.prettierrc');

    expect(prettierRc).toContain(`"printWidth": ${defaultOptions.printWidth}`);
    expect(prettierRc).toContain(`"singleQuote": ${defaultOptions.singleQuote}`);
  });
});
