### rad-deg-converter

[![Discord](https://img.shields.io/discord/519837781866840122?color=%237289DA&label=WaZaBiX%27s%20guild&logo=Discord)](https://discord.gg/ES52WDg)
[![npm](https://img.shields.io/npm/v/rad-deg-converter?logo=npm)](https://www.npmjs.com/package/rad-deg-converter)
[![NPM](https://img.shields.io/npm/l/rad-deg-converter?logo=github)](https://github.com/wazabix-BM/rad-deg-converter/blob/master/LICENSE.md)
[![npm](https://img.shields.io/npm/dt/rad-deg-converter?logo=npm)](https://www.npmjs.com/package/rad-deg-converter)

> Simple JS library to convert degrees to radians or conversely from radians to degrees

# Install

```sh
npm i rad-deg-converter
```

# API

* __*Constructor*__

<code>Conversion</code>

* __*Functions__*

<code><b>.toDeg ()</b></code>
<code><b>.toRad ()</b></code>

# Usage

> The one and only constructor that composes this library returns a callback function that takes the value of the angle as a parameter

```js
const {
    Conversion
} = require ('rad-deg-converter');

new Conversion ('25deg', (value) => {
    console.log (value.this.toRad ());

    // Expected output: 0.4363323129985824
});

new Conversion ('2rad', (value) => {
    console.log (value.this.toDeg ());

    // Expected output: 114.59155902616465
});
```