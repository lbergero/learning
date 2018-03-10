var emitter = require('./myEmitter');

var thisEmitter = new emitter(5);

thisEmitter.on('start', function() {
    console.log("starting");
});

thisEmitter.on('event', function(count) {
    console.log('eventing ' + count);
})

thisEmitter.on('end', function() {
    console.log('ending');
});

console.log("-----");