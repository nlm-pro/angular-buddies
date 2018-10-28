# Schematics

## prettier-init

Initialize your project to allow the use of prettier.

_You'll never need to run this schematic if you use `ng add`._

> **Alias** : `ng-add`
>
> **The following schematics are also run when using this one:**\
> [`prettier-config`](#prettier-config)
>
> **Options**
>
> <details>
>  <summary>skip-install</summary>
>  <p>
>    <code>--skip-install</code>don't have
>  </p>List of
>  <p>
>    Do not run npm / yarn install after adding the required dependencies.
>  </p>
> </details>
> <details>
>  <summary>skip-scripts</summary>
>  <p>
>    <code>--skip-scripts</code>
>  </p>
>  <p>
>    Do not generate the scripts helping to run prettier on your workspace
>  </p>
> </details>
> <details>
>  <summary>hook</summary>
>  <p>
>    <code>--hook</code>
>  </p>
>  <p>
>    Also run the prettier-hook schematic in order to add the associated pre-commit hook.
>  </p>
>  <p>
>    Default: true
>  </p>
> </details>
>
> \
> :heavy_plus_sign: all [`prettier-config`](#prettier-config) and [`prettier-hook`](#prettier-hook) options

## prettier-config

Generate prettier config files.

> **Options**
>
> <details>
>  <summary>single-quote</summary>
>  <p>
>    <code>--single-quote boolean</code>
>  </p>
>  <p>
>    Set <a href="https://prettier.io/docs/en/options.html#quotes">single-quote</a> Prettier rule value.
>  </p>
>  <p>
>    Default: true
>  </p>
> </details>
> <details>
>  <summary>print-width</summary>
>  <p>
>    <code>--print-width number</code>
>  </p>
>  <p>
>    Set <a href="https://prettier.io/docs/en/options.html#print-width">print-width</a> Prettier rule value.
>  </p>
>  <p>
>    Default: 120
>  </p>
> </details>

## prettier-hook

Generate a git pre-commit hook (thanks to husky and lint-staged) which auto-format your staged files with prettier before any commit.

> **Options**
>
> <details>
>  <summary>skip-install</summary>
>  <p>
>    <code>--skip-install</code>
>  </p>
>  <p>
>    Do not run npm / yarn install after adding the required dependencies.
>  </p>
> </details>
