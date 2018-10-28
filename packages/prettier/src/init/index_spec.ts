import { dependencies } from './../utility/dependencies';
import { Schema as AddOptions } from './schema.d';
import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import * as fs from 'fs';

const collectionPath = path.join(__dirname, '../collection.json');

let runner: SchematicTestRunner;
let inputTree: Tree;

const defaultOptions: AddOptions = {
  singleQuote: true,
  printWidth: 120,
  skipInstall: false,
  skipScripts: false,
  hook: true,
  defaultCollection: true
};

describe('ng-add', () => {
  beforeEach(() => {
    runner = new SchematicTestRunner('@mace/prettier-schematics', collectionPath);
    inputTree = Tree.empty();
    inputTree.create(
      '/angular.json',
      fs.readFileSync(path.join(__dirname, '../test/angular.json'), 'utf8')
    );
  });

  it('add prettier config files', () => {
    const tree = runner.runSchematic('ng-add', defaultOptions, inputTree);

    expect(tree.files).toEqual(jasmine.arrayContaining(['/.prettierignore', '/.prettierrc']));
  });

  it('have a prettier-config alias', () => {
    const tree = runner.runSchematic('prettier-config', defaultOptions, inputTree);

    expect(tree.files).toEqual(jasmine.arrayContaining(['/.prettierignore', '/.prettierrc']));
  });

  it('set default collection', () => {
    const inputTree = Tree.empty();
    expect(() => {
      runner.runSchematic('ng-add', { ...defaultOptions, defaultCollection: false }, inputTree);
    }).not.toThrow();
  });

  it('defaultCollection=false permit to run without any angular.json', () => {
    const tree = runner.runSchematic('ng-add', defaultOptions, inputTree);

    const confText = tree.readContent('/angular.json');
    const config = JSON.parse(confText);

    expect(config.cli.defaultCollection).toBe('@mace/prettier-schematics');
  });

  describe('(on package.json)', () => {
    let testTree: UnitTestTree;

    beforeEach(() => {
      inputTree.create(
        '/package.json',
        fs.readFileSync(path.join(__dirname, '../test/package.json'), 'utf8')
      );
    });

    it('add hook', () => {
      const tree = runner.runSchematic('ng-add', defaultOptions, inputTree);

      const packageJsonText = tree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.scripts['precommit']).toEqual('lint-staged');
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

      expect(packageJson.devDependencies.prettier).toContain(dependencies.prettier);
    });
  });
});
