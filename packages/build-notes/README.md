# `@angular-buddies/build-notes`

**Your buddy who notes for you all the informations you may need about your project**

Generate complete reports about your project when you need it.

> A tool from the [Angular Buddies](https://github.com/angular-buddies/angular-buddies) project.

![](https://user-images.githubusercontent.com/7578400/47621207-c8c48d80-daf4-11e8-9092-cc29c1b71a89.gif)

## Quick Start

1.  **Install**

`npm i -D @angular-buddies/build-notes`

2.  **Configure**

```javascript
// angular.json or workspace.json

{
  "$schema": "../../node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "projects": {
    "<your-project>": {
      "architect": {
        "<target-name>": {
          "builder": ".:npm",
          "options": {
            "withDev": false,             // true if you want to include devDependencies
            "path": "description.json"    // path to the file to generate
          }
        }
      }
    }
  }
}
```

3.  **Run**

With [@angular/cli](https://www.npmjs.com/package/@angular/cli#installation):\
`ng run <your-project>:<target-name> options...`

With [@angular-devkit/architect-cli](https://www.npmjs.com/package/@angular-devkit/architect-cli):\
`architect <your-project>:<target-name> options...`

## Angular Devkit Architect Builders

See [builders.json](https://github.com/angular-buddies/angular-buddies/blob/master/packages/build-notes/builders.json)

### npm

TODO
