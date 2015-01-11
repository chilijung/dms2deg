# Coordinate format conversion

This will convert decimal degrees in to degrees, minutes, seconds.

## Install

```
npm install dms2deg
```

## Usage 

```js
var assert = require('assert');
var dms2deg = require('dms2deg').dms2deg;
var deg2dms = require('dms2deg').deg2dms;

it('should convert dms to deg', function(cb) {
  assert.equal('25.033493', dms2deg('25 2\' 0.574799999999982\" N'));
  assert.equal('-25.033493', dms2deg('25 2\' 0.574799999999982\" S'));
  cb();
})

it('should convert deg to dms, north to south', function(cb) {
  assert.equal('25 2\' 0.574799999999982\" N', deg2dms('25.033493', 'ns'));
  assert.equal('25 2\' 0.574799999999982\" S', deg2dms('-25.033493', 'ns'));
  cb();
})

it('should convert deg to dms, north to south', function(cb) {
  assert.equal('121 33\' 50.76359999997749\" E', deg2dms('121.564101', 'ew'));
  assert.equal('121 33\' 50.76359999997749\" W', deg2dms('-121.564101', 'ew'));
  cb();
})
```

## Information

from [wikipedia](http://en.wikipedia.org/wiki/Geographic_coordinate_conversion)

Informally, specifying a geographic location usually means giving the location's latitude and longitude. The numerical values for latitude and longitude can occur in a number of different formats:[2]
 
 - degrees minutes seconds: 40° 26′ 46″ N 79° 58′ 56″ W
 - degrees decimal minutes: 40° 26.767′ N 79° 58.933′ W
 - decimal degrees: 40.446° N 79.982° W

There are 60 minutes in a degree and 60 seconds in a minute. Then to convert from a degrees minutes seconds format to a decimal degrees format, one may use the formula
![img1](https://raw.githubusercontent.com/chilijung/dms2deg/master/img/img1.png)
To convert back from decimal degree format to degrees minutes seconds format,
![img2](https://raw.githubusercontent.com/chilijung/dms2deg/master/img/img2.png)

## License

MIT
