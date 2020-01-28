const Animal = require('./Animal.js');

class Tiger extends Animal {
    constructor() {
        super("grrr");
    }
}

module.exports = Tiger;