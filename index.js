
const dgram = require('dgram');
const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
const client = dgram.createSocket('udp4');
const util = require('util');

client.bind(function(){client.setBroadcast(true);});
const os = require('os');
var message = util.format("UserName: %s, HostName: %s", os.userInfo().username, os.hostname());
setInterval(function(){
client.send(message,0,message.length,8888,"192.168.1.255",function(err, result){
        if(!err){
                console.log('Message Delivered', new Date());
        }
});
},1000);
client.on('message',function(err, result){
console.log(arguments);
});
