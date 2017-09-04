const request = require('request');
const _ = require('lodash');
const Promise = require('Promise');

//Class for differents helpers to clean and retrieve data
var Module = (function () {
      var getUserById = function (id) {
        // public
        return new Promise((resolve, reject) => {
            request.get("http://www.mocky.io/v2/5808862710000087232b75ac", function(err, res, body) {
                if (!err && res.statusCode === 200) {
                    // process input
                    let usersParsed = JSON.parse(body);
                    let user = _.find(usersParsed.clients, {'id': id});
                    if (user){
                        return resolve(user)
                    }
                    else{
                        return reject("User doesn't exist");
                    }
                    
                }
                else{
                    return reject("Server Error")
                }
            });
        })
      };

      var getUserByName = function (name) {
        return new Promise((resolve, reject) => {
            request.get("http://www.mocky.io/v2/5808862710000087232b75ac", function(err, res, body) {
                if (!err && res.statusCode === 200) {
                    // process input
                    let usersParsed = JSON.parse(body);
                    //I need the name capitalize
                    let nameCapitalize = _.startCase(name);
                    let user = _.find(usersParsed.clients, {'name': nameCapitalize});
                    if (user){
                        return resolve(user)
                    }
                    else{
                        return reject("User doesn't exist");
                    }
                }
                else{
                    return reject("Server Error")
                }
            });
        })
      };


    var getPoliciesByUserId = function (userid) {
        return new Promise((resolve, reject) => {
            request.get("http://www.mocky.io/v2/580891a4100000e8242b75c5", function(err, res, body) { 
                if (!err && res.statusCode === 200) {
                    // process input
                    let policiesParsed = JSON.parse(body);
                    let policies = _.filter(policiesParsed.policies, {'clientId': userid});
                    if (policies){
                        return resolve(policies);
                    }
                    else{
                        return reject("policies doesn't exist");
                    }
                }
                 else{
                    return reject("Server Error")
                }
            });
        })
      };

      var getUserByPolicieId = function (policiesId) {
        return new Promise((resolve, reject) => {
            request.get("http://www.mocky.io/v2/580891a4100000e8242b75c5", function(err, res, body) { 
                if (!err && res.statusCode === 200) {
                    // process input
                    let policiesParsed = JSON.parse(body);
                    let policie = _.find(policiesParsed.policies, {'id': policiesId});
                    if (policie){
                        return resolve(policie);
                    }
                    else{
                        return reject("policies doesn't exist");
                    }
                }
                 else{
                    return reject("Server Error")
                }
            });
        })
      };
      
      return {
        getUserById: getUserById,
        getUserByName: getUserByName,
        getPoliciesByUserId: getPoliciesByUserId,
        getUserByPolicieId: getUserByPolicieId
      };
    
    })();

  module.exports = Module; 