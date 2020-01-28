const logger = require('./logger.js'); // represents the logging module that will write into the text-file
const Ticker = require('./ticker.js');

const ONE_MINUTE_MS = 60000;

const main = function () {

    // Ticker is an auxiliary object specially designed to keep track of the number of hits in the span of a defined
    // duration. If it gets invoked sufficient times in said span, its triggering function will be invoked (in this
    // case, if 10 hits are recorded in the span of 1 minute, the email will be sent)
    let ticker = new Ticker(10, ONE_MINUTE_MS, () => sendEmail());


    // although this would be a BAD approach in a real-life scenario, since we must absolutely not touch the original
    // logging function, we will now append the newly-defined email-sending capabilities to the original 'logError' in
    // the logger module

    const originalLogError = logger.logError; // save original function
    delete logger['logError']; // delete the function to override
    logger.logError = (error) => {
        originalLogError(error);
        ticker.hit();
    }; // add new function with the same name as deleted function, but with the new desired logic
    module.exports = logger; // re-export the module for changes to take effect


    // simulate logging errors at regular intervals in order to see the action
    setInterval(() => logger.logError("error"),5000);
};

if (require.main === module) {
    main();
}


function sendEmail() {
    console.log("Email sent!");
}
