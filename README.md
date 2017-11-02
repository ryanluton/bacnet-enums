# bacnet-enums  &nbsp; &nbsp; &nbsp; [![Dependency Status](https://david-dm.org/ryanluton/bacnet-enums.svg)](https://david-dm.org/ryanluton/bacnet-enums) [![devDependency Status](https://david-dm.org/ryanluton/bacnet-enums/dev-status.svg)](https://david-dm.org/ryanluton/bacnet-enums#info=devDependencies)

BACnet Enumerations for js

Decided to put together this module after copying and pasting the same enumerations across multiple node projects. Feel free to contribute. While this is not complete yet, there will always be room for both vendor specific enumerations, as well as improvements // suggestions. --enjoy

**Currently implemented:**
- [Application Tag](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/application-tag.ts)
- [Days of Week](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/days-of-week.ts)
- [Error Code](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/error-code.ts)
- [Event State](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/event-state.ts)
- [Event Type](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/event-type.ts)
- [Object Type](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/object-type.ts)
- [Polarity](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/polarity.ts)
- [Property Id](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/property-id.ts)
- [Property State](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/property-state.ts)
- [Reliability](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/reliability.ts)
- [Restart Reason](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/restart-reason.ts)
- [Services Supported](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/services-supported.ts)
- [Units Id](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/units-id.ts)
- [Vendor Id](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/vendor-id.ts)
- [Write Priority](https://github.com/ryanluton/bacnet-enums/blob/master/src/enums/write-priority.ts)

## Getting Started
Install the module with NPM: `npm install bacnet-enums --save`

Install the module with YARN: `yarn add bacnet-enums`

## Examples

```javascript
// Import as a commonJS module 
const bacnetEnums = require('bacnet-enums');

// ES6 imports
// import everything
import * as bacnetEnums from 'bacnet-enums';

// import specific enums
import { ObjectType } from 'bacnet-enums';

const type = ObjectType[8];
console.log(type); // device

const device = ObjectType['device'];
console.log(device); // 8
```

## Documentation

_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2016 Ryan Luton. Licensed under the MIT license.
