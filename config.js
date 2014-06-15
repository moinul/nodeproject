/**
 * Created by moinul on 6/15/2014.
 */

var convict = require('convict');

//Schema
var conf = convict({
    env: {
        doc: "The App Environment.",
        format: ["production", "development", "test"],
        default: "development",
        env: "NODE_ENV"
    },
    port: {
        doc: "The port to bind.",
        format: "int",
        default: 3000,
        env: "PORT"
    },
    ip: {
        doc: "The IP address to bind.",
        format: "ipaddress",
        default: "127.0.0.1",
        env: "IP_ADDRESS"
    },
    database: {
        host: {
            default: "someplace:cool",
            env: "DB_HOST"
        }
    }
});

// load environment dependent configuration
var env = conf.get('env');
conf.loadFile('./config/' + env + '.json');

// perform validation
conf.validate();

module.exports = conf;
