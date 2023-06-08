# react-simple-query-builder/bootstrap

[![npm](https://img.shields.io/npm/v/react-simple-query-builder/bootstrap.svg)](https://www.npmjs.com/package/react-simple-query-builder/bootstrap)

This packages provides [Bootstrap](https://reactstrap.github.io/) widgets

## Installation

Peer dependencies that needs to be installed:
```
npm i bootstrap reactstrap @popperjs/core @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome --save
```

Install:
```
npm i react-simple-query-builder/bootstrap --save
```

## Usage

Use `BootstrapConfig`. 
Don't forget to import Bootstrap CSS: `bootstrap/dist/css/bootstrap.min.css`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from 'react-simple-query-builder/bootstrap'; // for TS example
import { Query, Builder, Utils as QbUtils } from 'react-simple-query-builder/bootstrap';
import { BootstrapConfig, BootstrapWidgets } from 'react-simple-query-builder/bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-simple-query-builder/bootstrap/css/styles.css';
const InitialConfig = BootstrapConfig;
// <<<
```
