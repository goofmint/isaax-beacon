Bleacon = require('bleacon');
Bleacon.startScanning();

const options = {
  uuid: process.env.BEACON_UUID,
  proximity: ''
};

Bleacon.on('discover', function(bleacon) {
   if (bleacon.uuid == options.uuid &&  bleacon.proximity != options.proximity) {
     console.log(`ステータスが変わりました -> ${bleacon.proximity}`);
     options.proximity = bleacon.proximity;
   }
});

console.log('Started.')
