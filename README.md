# Primordials

## Install
`npm i --save @dwlib/primordials`

## Usage
```javascript
// CJS
const primordials = require('@dwlib/primordials');
const Primordial = require('@dwlib/primordials/<FunctionName>');
// ESM
import initialized, * as primordials from '@dwlib/primordials';
import Primordial from '@dwlib/primordials/<FunctionName>';
import PromiseThen from '@dwlib/primordials/PromiseThen';

PromiseThen(initialized, () => {
  const WeakRefDeref = primordials.WeakRefDeref;
});
```
