const main = function () {

    // process script input
    if(process.argv.length < 4) {
        console.error("Not enough parameters provided! Program will exit now.");
        console.info("Required arguments: <URL_FORMAT> <URL>");
        process.exit(1);
    }

    const URL_FORMAT = process.argv[2] ? process.argv[2] : null;
    const URL = process.argv[3] ? process.argv[3] : null;


    // declare basic decomposing function
    let decompose = array => array.split(new RegExp('[/?]')).filter(value => value);

    // decompose URL-format-template into individual params
    let urlTemplateParts = decompose(URL_FORMAT);

    // decompose raw URL into individual params
    let urlParts = decompose(URL);


    // based on decomposed URL format, process given URL
    let result = {};

    urlParts.forEach((part, partIndex) => {
        if(partIndex > urlTemplateParts.length - 1){
            // if we have exceeded the amount of decomposed URL-template-parts, that must mean they are additional
            // request-params that must be parsed individually
            part.split('&').forEach(queryParam => {
                let splitParam = queryParam.split("="); // split key and value
                result[splitParam[0]] = splitParam[1];
            });
        } else if(urlTemplateParts[partIndex].includes(':')){
            // if we are iterating over decomposed URL-template-parts, store only the variable parts, skipping constants
            // variables are easily identifiable because they start with ':'
            result[urlTemplateParts[partIndex].replace(":",'')] = part; // trim ':' when storing in result object
        }
    });


    // print results with expected JSON format
    console.log(JSON.stringify(result,null, 2));
};

if (require.main === module) {
    main();
}