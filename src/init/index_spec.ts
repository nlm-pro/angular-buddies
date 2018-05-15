import { Schema as AddOptions } from './schema.d';
import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');
const defaultOptions: AddOptions = {
  skipInstall: false,
  skipScripts: false
};
let runner: SchematicTestRunner;
let inputTree: Tree;

describe('ng-add', () => {
  beforeEach(() => {
    runner = new SchematicTestRunner('@mace/prettier-schematics', collectionPath);
    inputTree = Tree.empty();
  });

  it('add prettier config files', () => {
    const tree = runner.runSchematic('ng-add', defaultOptions, inputTree);

    expect(tree.files).toEqual(['/.prettierignore', '/.prettierrc']);
  });

  it('have a prettier-config alias', () => {
    const tree = runner.runSchematic('prettier-config', defaultOptions, inputTree);

    expect(tree.files).toEqual(['/.prettierignore', '/.prettierrc']);
  });

  describe('(on package.json)', () => {
    let testTree: UnitTestTree;

    beforeEach(() => {
      inputTree.create(
        '/package.json',
        JSON.stringify({
          name: 'test',
          version: '0.0.0',
          license: 'MIT',
          scripts: {
            ng: 'ng',
            start: 'ng serve',
            build: 'ng build',
            test: 'ng test',
            lint: 'ng lint',
            e2e: 'ng e2e'
          },
          private: true,
          dependencies: {
            '@angular/common': '5.2.10'
          }
        })
      );
    });

    it('add prettify script', () => {
      testTree = runner.runSchematic('ng-add', defaultOptions, inputTree);

      const packageJsonText = testTree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.scripts.prettify).toEqual(
        'prettier --write ./**/*.{json,css,scss,md,js,ts}'
      );
    });

    it('do not add prettify script when skipScript option is true', () => {
      const options: AddOptions = { ...defaultOptions, skipScripts: true };
      testTree = runner.runSchematic('ng-add', options, inputTree);

      const packageJsonText = testTree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.scripts.prettify).toBeUndefined();
    });

    it('add prettier dependency', () => {
      testTree = runner.runSchematic('ng-add', defaultOptions, inputTree);

      const packageJsonText = testTree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.devDependencies.prettier).toBeTruthy();
    });
  });
});
