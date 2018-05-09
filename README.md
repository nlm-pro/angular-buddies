# Prettier-schematics

> [@angular/cli](http://github.com/angular/cli) schematics for [Prettier](http://github.com/prettier/prettier).

## Install

This package permit to add Prettier dependencies, scripts and default configuration to your Angular CLI workspace in just one command.

> `ng add @mace/prettier-schematics`

### With npm or yarn

You can also install prettier-schematics with npm or yarn, for example if you want to use it as a global package.

For this, use (with the `-g` option for a global install) :

> `npm i @mace/prettier-schematics`

Then, use the `prettier-config` alias, in order to run the same schematic used by `ng add` :

> `ng g prettier-config --collection=@mace/prettier-schematics`).

### Options

<details>
  <summary>skip-install</summary>
  <p>
    <code>--skip-install</code>
  </p>
  <p>
    Do not run npm / yarn install after adding the required dependencies.
  </p>
</details>
<details>
  <summary>skip-scripts</summary>
  <p>
    <code>--skip-scripts</code>
  </p>
  <p>
    Do not generate the scripts helping to run prettier on your workspace
  </p>
</details>

## Scripts

Once you installed prettier-schematics, you can simply run prettier on all your workspace files using :

`npm run prettify`

## Misc

See my current [TO-DO List](TODO.md) for more informations on upcoming features.
