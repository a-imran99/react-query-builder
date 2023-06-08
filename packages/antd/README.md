# react-simple-query-builder/antd

[![npm](https://img.shields.io/npm/v/react-simple-query-builder/antd.svg)](https://www.npmjs.com/package/react-simple-query-builder/antd)

This packages provides [Ant Design](https://ant.design/) widgets.

## Installation

Peer dependencies that needs to be installed:
```
npm i antd @ant-design/icons --save
```

Install:
```
npm i react-simple-query-builder/antd --save
```

## Usage

Use `AntdConfig`. 
Only for antd v4 - please import `antd/dist/antd.css`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from 'react-simple-query-builder/antd'; // for TS example
import { Query, Builder, Utils as QbUtils } from 'react-simple-query-builder/antd';
import { AntdConfig, AntdWidgets } from 'react-simple-query-builder/antd';
//import "antd/dist/antd.css"; // only for v4
import 'react-simple-query-builder/antd/css/styles.css';
const InitialConfig = AntdConfig;
// <<<
```
