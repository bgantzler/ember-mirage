# Changelog

## Release (2025-03-07)

ember-mirage 0.4.2 (patch)

#### :bug: Bug Fix
* `ember-mirage`
  * [#54](https://github.com/bgantzler/ember-mirage/pull/54) Fix Mirage logging Qunit integration ([@nickschot](https://github.com/nickschot))

#### Committers: 1
- Nick Schot ([@nickschot](https://github.com/nickschot))

## Release (2025-03-07)

ember-mirage 0.4.1 (patch)

#### :bug: Bug Fix
* `ember-mirage`
  * [#56](https://github.com/bgantzler/ember-mirage/pull/56) Add optional peer dependency on ember-qunit ([@nickschot](https://github.com/nickschot))
  * [#55](https://github.com/bgantzler/ember-mirage/pull/55) Widen @ember/test-helpers range to allow v3, v4 and v5 as well ([@nickschot](https://github.com/nickschot))

#### Committers: 1
- Nick Schot ([@nickschot](https://github.com/nickschot))

## Release (2024-11-18)

ember-mirage 0.4.0 (minor)

#### :rocket: Enhancement
* `ember-mirage`, `test-app`
  * [#39](https://github.com/bgantzler/ember-mirage/pull/39) Support auto discovery for mirage and ember-data entities via import.meta.glob ([@enspandi](https://github.com/enspandi))

#### :bug: Bug Fix
* `ember-mirage`, `test-app`
  * [#39](https://github.com/bgantzler/ember-mirage/pull/39) Support auto discovery for mirage and ember-data entities via import.meta.glob ([@enspandi](https://github.com/enspandi))

#### Committers: 1
- Andreas Minnich ([@enspandi](https://github.com/enspandi))

## Release (2024-11-14)

ember-mirage 0.3.3 (patch)

#### :bug: Bug Fix
* `ember-mirage`
  * [#47](https://github.com/bgantzler/ember-mirage/pull/47) Explicitly define a wide peer range to include alpha releases of miragejs ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 1
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-11-14)

ember-mirage 0.3.2 (patch)

#### :bug: Bug Fix
* `ember-mirage`
  * [#44](https://github.com/bgantzler/ember-mirage/pull/44) Widen peer range for miragejs ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### :memo: Documentation
* [#43](https://github.com/bgantzler/ember-mirage/pull/43) Update migration docs with path cleanup, latest on progress ([@acorncom](https://github.com/acorncom))

#### :house: Internal
* `ember-mirage`, `test-app`
  * [#45](https://github.com/bgantzler/ember-mirage/pull/45) Update base workflows and lockfile for pnpm 9, set `packageManager` ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 2
- David Baker ([@acorncom](https://github.com/acorncom))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-07-17)

ember-mirage 0.3.1 (patch)

#### :bug: Bug Fix
* `ember-mirage`, `test-app`
  * [#38](https://github.com/bgantzler/ember-mirage/pull/38) put the repository reference in the right package ([@mansona](https://github.com/mansona))
* `test-app`
  * [#36](https://github.com/bgantzler/ember-mirage/pull/36) fix github backlink from npm ([@mansona](https://github.com/mansona))

#### :memo: Documentation
* [#40](https://github.com/bgantzler/ember-mirage/pull/40) Added Information for Custom Inflector ([@jrjohnson](https://github.com/jrjohnson))
* [#37](https://github.com/bgantzler/ember-mirage/pull/37) docs: tiny correction ([@aklkv](https://github.com/aklkv))
* [#35](https://github.com/bgantzler/ember-mirage/pull/35) docs: formatting & init script ([@aklkv](https://github.com/aklkv))
* [#33](https://github.com/bgantzler/ember-mirage/pull/33) docs: correct import path for startMirage ([@aklkv](https://github.com/aklkv))

#### :house: Internal
* [#41](https://github.com/bgantzler/ember-mirage/pull/41) update release-plan ([@mansona](https://github.com/mansona))
* [#10](https://github.com/bgantzler/ember-mirage/pull/10) Configure renovate ([@NullVoxPopuli](https://github.com/NullVoxPopuli))

#### Committers: 4
- Alexey Kulakov ([@aklkv](https://github.com/aklkv))
- Chris Manson ([@mansona](https://github.com/mansona))
- Jon Johnson ([@jrjohnson](https://github.com/jrjohnson))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)

## Release (2024-03-06)

ember-mirage 0.3.0 (minor)

#### :rocket: Enhancement
* `ember-mirage`
  * [#30](https://github.com/bgantzler/ember-mirage/pull/30) swap from ember-inflector to active-inflector ([@mansona](https://github.com/mansona))
* Other
  * [#11](https://github.com/bgantzler/ember-mirage/pull/11) Pass additional options into the makeServer function ([@cah-brian-gantzler](https://github.com/cah-brian-gantzler))

#### :memo: Documentation
* [#27](https://github.com/bgantzler/ember-mirage/pull/27) Update readme and migration guide ([@mansona](https://github.com/mansona))

#### :house: Internal
* `ember-mirage`
  * [#32](https://github.com/bgantzler/ember-mirage/pull/32) reset addon version to what is deployed on npm ([@mansona](https://github.com/mansona))
* `test-app`
  * [#31](https://github.com/bgantzler/ember-mirage/pull/31) update addon blueprint to v2.14 with ember-cli-update ([@mansona](https://github.com/mansona))
  * [#23](https://github.com/bgantzler/ember-mirage/pull/23) Move files that import test dependencies out of modules that may be imported by an app in development ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#22](https://github.com/bgantzler/ember-mirage/pull/22) make embroider fully strict ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#20](https://github.com/bgantzler/ember-mirage/pull/20) Update ember dependencies ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#19](https://github.com/bgantzler/ember-mirage/pull/19) Upgrade lint deps ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#18](https://github.com/bgantzler/ember-mirage/pull/18) Add embroider app ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#17](https://github.com/bgantzler/ember-mirage/pull/17) Renamed some of the files and changed imports to be clearer on intent ([@cah-brian-gantzler](https://github.com/cah-brian-gantzler))
  * [#15](https://github.com/bgantzler/ember-mirage/pull/15) Removed all the extra models/serializers from the sample app ([@cah-brian-gantzler](https://github.com/cah-brian-gantzler))
  * [#14](https://github.com/bgantzler/ember-mirage/pull/14) v2 Addon conversion ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#9](https://github.com/bgantzler/ember-mirage/pull/9) Add first sample-app ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#6](https://github.com/bgantzler/ember-mirage/pull/6) To pnpm monorepo ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
* Other
  * [#28](https://github.com/bgantzler/ember-mirage/pull/28) start using release-plan for deployment ([@mansona](https://github.com/mansona))
  * [#16](https://github.com/bgantzler/ember-mirage/pull/16) use test:ember script for local test command ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#12](https://github.com/bgantzler/ember-mirage/pull/12) Ignore .eslintcache ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#8](https://github.com/bgantzler/ember-mirage/pull/8) Add index.js to the files list ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
  * [#7](https://github.com/bgantzler/ember-mirage/pull/7) Add GH Workflows ([@NullVoxPopuli](https://github.com/NullVoxPopuli))
* `ember-mirage`, `test-app`
  * [#26](https://github.com/bgantzler/ember-mirage/pull/26) Reset blueprint to latest v2 ([@mansona](https://github.com/mansona))

#### Committers: 3
- Brian Gantzler ([@cah-brian-gantzler](https://github.com/cah-brian-gantzler))
- Chris Manson ([@mansona](https://github.com/mansona))
- [@NullVoxPopuli](https://github.com/NullVoxPopuli)
