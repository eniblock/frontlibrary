# xdevtech-frontlibrary

Angular Librairy base on Material and Fuse 9

## Build

Run `ng build` to build the library. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## deploy

* Make sure you updated the package version in [xdev-lib](projects/xdev-lib/package.json).
* Create a github PAT -> https://github.com/settings/tokens/new?scopes=write:packages
* Run
  ```sh
  earthly --push --secret token=<yourPAT> +deploy
  ```
