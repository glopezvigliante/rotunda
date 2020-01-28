const Lion = require('./lion.js');
const Tiger = require('./tiger.js');

const main = function () {
    let lion = new Lion();
    let tiger = new Tiger();

    lion.speak("I'm a lion");
    tiger.speak("Lions suck");


    // the following code will fail - uncomment for testing purposes only

    // const Animal = require('./animal');
    // let animal = new Animal("random sound");
    // animal.speak("I am an abstract animal");
};

if (require.main === module) {
    main();
}