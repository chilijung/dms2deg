var assert = require('assert');
var dms2deg = require('./').dms2deg;
var deg2dms = require('./').deg2dms;

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

