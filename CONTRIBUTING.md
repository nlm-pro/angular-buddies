## Testing

### Running tests locally

To run tests, use:

```shell
$ npm run test
```

When executed from this repository's root folder, this command will run all packages' tests.

> It is automatically run before any git push. Don't use `--no-verify`!

From a `packages/foo` folder, it will only run the "foo" package's tests.

### Schematics

In order to test the schematics in dry-run, you can simply go the the associated package folder, and run the npm script `schematics` as follow:

```schell
cd packages/<schematics package>
npm run schematics -- .:<schematic name>
```

## Lint

`npm run prettify` will format all the code base thanks to prettier.
