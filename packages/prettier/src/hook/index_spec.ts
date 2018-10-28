import { dependencies } from './../utility/dependencies';
import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import * as fs from 'fs';
import { Schema as HookOptions } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

const defaultOptions: HookOptions = {
  skipInstall: false
};
let runner: SchematicTestRunner;
let inputTree: Tree;

describe('hook', () => {
  beforeEach(() => {
    runner = new SchematicTestRunner('@angular-buddies/prettier', collectionPath);
    inputTree = Tree.empty();
  });

  it('add lint-staged config file', () => {
    const tree = runner.runSchematic('prettier-hook', {}, inputTree);

    expect(tree.files).toEqual(['/.lintstagedrc']);
  });

  describe('(on package.json)', () => {
    let testTree: UnitTestTree;

    beforeEach(() => {
      inputTree.create(
        '/package.json',
        fs.readFileSync(path.join(__dirname, '../test/package.json'), 'utf8')
      );
    });

    it('add dependencies', () => {
      testTree = runner.runSchematic('prettier-hook', defaultOptions, inputTree);

      const packageJsonText = testTree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.devDependencies['lint-staged']).toContain(dependencies.lintStaged);
      expect(packageJson.devDependencies['husky']).toContain(dependencies.husky);
    });

    it('add hook script', () => {
      testTree = runner.runSchematic('prettier-hook', defaultOptions, inputTree);

      const packageJsonText = testTree.readContent('/package.json');
      const packageJson = JSON.parse(packageJsonText);

      expect(packageJson.scripts['precommit']).toEqual('lint-staged');
    });
  });
});
