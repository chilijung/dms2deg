var dms2deg = function(dms) {

  var reg = /^([+-]?)(\d{1,3})\*?\s+(\d{1,2})'?\s+([0-9]*\.?[0-9]*)"?\s+([NSEW])?/igm;
  var res = reg.exec(dms);
  
  var d = res[2];
  var m = res[3];
  var s = res[4];
  var sign = res[5] || 'N';

  if(sign === 'N' || sign === 'E')
    sign = +1
  else
    sign = -1

  var deg = (Math.round(d) + m / 60 + s / 3600) * sign;

  return deg;

}

var deg2dms = function (deg, side) {

  var m, d, s;

  if(side === 'ns') {
    // north to south
    if(deg < 0){
      var sign = 'S';
      var num = -deg;

    }else {
      var sign = 'N'
      var num = deg;

    }
  }else if(side === 'ew') {
    // east to west
    if(deg < 0){
      var sign = 'W';
      var num = -deg;

    }else {
      var sign = 'E'
      var num = deg;

    }
  }

  m = num % 1;
  d = num - m;
  m *= 60;
  s = m % 1;
  m = m - s;
  s *= 60;

  return d + ' ' + m + '\' ' + s + '\" ' + sign;
  

}


module.exports = {
  dms2deg: dms2deg,
  deg2dms: deg2dms
}