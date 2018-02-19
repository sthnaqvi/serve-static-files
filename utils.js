/**
 * Created by Tauseef Naqvi on 15-02-2018.
 */

const colors = require('colors/safe');
const config = require('./config');

let logger;
let utc = config.utc || false;
logger = {
    info: console.log,
    request: function (req, res, error) {
        let date = utc ? new Date().toUTCString() : new Date();
        if (error) {
            logger.info(
                '[%s] "%s %s" Error (%s): "%s"',
                date, colors.red(req.method), colors.red(req.url),
                colors.red(error.status.toString()), colors.red(error.message)
            );
        }
        else {
            logger.info(
                '[%s] "%s %s" "%s"',
                date, colors.cyan(req.method), colors.cyan(req.url),
                req.headers['user-agent']
            );
        }
    }
};
exports.logMe = logger.request;