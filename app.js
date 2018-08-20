Bleacon = require('bleacon');
Bleacon.startScanning();

const options = {
  uuid: '0000000092dc1001b000001c4de26f4c',
  proximity: ''
};

Bleacon.on('discover', function(bleacon) {
   if (bleacon.proximity != options.proximity) {
     console.log(`ステータスが変わりました -> ${bleacon.proximity}`);
     options.proximity = bleacon.proximity;
   }
});

console.log('Started.')
