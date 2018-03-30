var util = require('util');
var events = require('events');

module.exports = MyEmitter;
util.inherits(MyEmitter, events.EventEmitter);

function MyEmitter(maxEvents) {
    var self = this;

    process.nextTick(function() {
        var count = 0;
        self.emit('start');

        var t = setInterval(function() {
            self.emit('event', count++);
            if (maxEvents == count) {
                self.emit('end');
                clearInterval(t);
            }         
        }, 1000);
    });
}