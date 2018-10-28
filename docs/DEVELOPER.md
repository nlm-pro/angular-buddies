# Developer documentation

## Testing

### Running tests locally

To run tests, use:

```shell
$ npm run test
```

When executed from this repository's root folder, this command will run all packages' tests.

> It is automatically run before any git push thanks to [Husky][husky]. Don't use `--no-verify`!

From a `packages/foo` folder, it will only run the "foo" package's tests.

### Schematics

In order to test the schematics in dry-run, you can simply go the the associated package folder, and run the npm script `schematics` as follow:

```schell
cd packages/<schematics package>
npm run schematics -- .:<schematic name>
```

## Coding Rules

### Format

`npm run prettify` will format all the code base thanks to prettier. However, you shouldn't need to use it as we use [Husky][husky] and [lint-staged][lint-staged] in order to set a commit hook which will automatically format your staged files.

## Commit Messages

In order to help you follow our Commit Messages Guidelines, we use:

* a commit hook thanks to [Commitlint](http://marionebl.github.io/commitlint/#/) and [Husky][husky]
* a commit message creation helper ([Commitlint prompt-cli](http://marionebl.github.io/commitlint/#/guides-use-prompt))
  * **you should always use `npm run commit` instead of `git commit`**

[husky]: https://github.com/typicode/husky
[lint-staged]: https://github.com/okonet/lint-staged
