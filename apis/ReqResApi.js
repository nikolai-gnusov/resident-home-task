const https = require('https');
const querystring = require('querystring');

class ReqResAPI {
    baseUrl = "";
    prefix = "";

    constructor() {
        this.baseUrl = 'reqres.in';
        this.prefix = "/api/";
    }

    get(route, params) {
        return this.dataReadRequest_(route, params, 'GET')
    }

    delete(route, params) {
        return this.dataReadRequest_(route, params, 'DELETE')
    }

    post(route, params) {
        return this.dataUpdateRequest_(route, params, 'POST');
    }

    put(route, params) {
        return this.dataUpdateRequest_(route, params, 'PUT');
    }

    patch(route, params) {
        return this.dataUpdateRequest_(route, params, 'PATCH');
    }

    dataReadRequest_(route, params, method) {

        let options = {
            hostname: this.baseUrl,
            port: 443,
            path: this.configureGetRequest_(route, params),
            method: method
        };

        return new Promise ((resolve, reject) => {
            let req = https.request(options, (res) => {
                let data = [];

                res.on('data', chunk => {
                    data.push(chunk);
                });

                res.on('end', () => {
                    try {
                        let respData = JSON.parse(Buffer.concat(data).toString());
                        resolve(respData);
                    }
                    catch (e) {
                        resolve(null);
                    }
                });
            });

            req.end();
        });
    }

    dataUpdateRequest_(route, params, method) {
        let postData = querystring.stringify({
            params
        });

        let options = {
            hostname: this.baseUrl,
            port: 443,
            path: this.prefix+route,
            method: method,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': postData.length
            }
        };

        return new Promise ((resolve, reject) => {
            let req = https.request(options, (res) => {
                let data = [];

                res.on('data', chunk => {
                    data.push(chunk);
                });

                res.on('end', () => {
                    resolve(JSON.parse(Buffer.concat(data).toString()));
                });
            });

            req.write(postData);
            req.end();
        });
    }

    configureGetRequest_(route, params) {
    let path = this.prefix+route;
        if (params) {
            path+="?";
            for (const [key, value] of Object.entries(params)) {
                path+=""+key+"="+value+"&";
            }
        }
        return path;
    }

}

module.exports = new ReqResAPI();