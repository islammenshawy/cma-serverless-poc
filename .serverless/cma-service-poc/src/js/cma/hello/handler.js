'use strict';

/* eslint-disable no-param-reassign */

module.exports.hello = (event, context, callback) =>  {
  console.log('JavaScript HTTP trigger function processed a request.');

    const response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "My Header Value"
        },
        body: JSON.stringify({ "message": "Hello World!" })
    };

    callback(null, response);

  //context.res = response;
  //context.done();
};
