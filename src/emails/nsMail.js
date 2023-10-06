var request = require('postman-request');

let APIKey = '';

module.exports = {
    setApiKey(key) {
        APIKey = key;
        return true;
    },
    send(data) {
        return new Promise( (resolve, reject) => {const body = JSON.stringify(data);
        request.post({
            headers: {
              'content-type' : 'application/json',
              'Authorization': 'Bearer ' + APIKey,
            },
            url:     'https://api.notisend.ru/v1/email/messages',
            body  
            }, function(error, response, body){
                if (error) {
                    reject({error});
                }
                resolve(response);
            });
        });
    }
};

//DELETE RECIPENT FROM SERVICE