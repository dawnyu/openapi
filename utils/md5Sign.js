const md5 = require( 'crypto-js/md5')
module.exports = getSign = (params = {}, secret, signMethod = 'md5') => {
  let keys = Object.keys(params)
  keys = keys.sort()
  let query = []
  keys.forEach(key => query.push(key + '' + params[key]))
  console.log(query)
	let bytes = encryptMD5(query.join(''))
	let sixty = parseInt(bytes,16)
	console.log(sixty)
  return parseInt(bytes,16)
}

const encryptMD5 = (str) => {
  return md5(str2UTF8(str))
}

function str2UTF8(str){
	var bytes = new Array() 
	var len,c
	len = str.length;
	for(var i = 0; i < len; i++){
		c = str.charCodeAt(i);
		if(c >= 0x010000 && c <= 0x10FFFF){
			bytes.push(((c >> 18) & 0x07) | 0xF0)
			bytes.push(((c >> 12) & 0x3F) | 0x80)
			bytes.push(((c >> 6) & 0x3F) | 0x80)
			bytes.push((c & 0x3F) | 0x80);
		}else if(c >= 0x000800 && c <= 0x00FFFF){
			bytes.push(((c >> 12) & 0x0F) | 0xE0)
			bytes.push(((c >> 6) & 0x3F) | 0x80)
			bytes.push((c & 0x3F) | 0x80);
		}else if(c >= 0x000080 && c <= 0x0007FF){
			bytes.push(((c >> 6) & 0x1F) | 0xC0)
			bytes.push((c & 0x3F) | 0x80)
		}else{
			bytes.push(c & 0xFF)
		}
  }
  console.log(bytes)
  return bytes
}
