const Animal = require('./Animal.js');

class Lion extends Animal {
    constructor() {
        super("roar");
    }
}

module.exports = Lion;