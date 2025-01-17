# react-simple-query-builder/material

[![npm](https://img.shields.io/npm/v/react-simple-query-builder/material.svg)](https://www.npmjs.com/package/react-simple-query-builder/material)

This packages provides [Material-UI v4](https://v4.mui.com/) widgets (deprecated)

## Installation

Peer dependencies that needs to be installed:
```
npm i @material-ui/core @material-ui/lab @material-ui/icons @material-ui/pickers --save
```

Install:
```
npm i react-simple-query-builder/material --save
```

## Usage

Use `MaterialConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from 'react-simple-query-builder/material'; // for TS example
import { Query, Builder, Utils as QbUtils } from 'react-simple-query-builder/material';
import { MaterialConfig, MaterialWidgets } from 'react-simple-query-builder/material';
import 'react-simple-query-builder/material/css/styles.css';
const InitialConfig = MaterialConfig;
// <<<
```
