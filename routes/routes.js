/**
 * Created by ty on 17/3/2.
 */
var index = require("./components/index");
var users = require("./components/users");

module.exports = function(app){
	app.get('/', index.showAll);
	app.use('/users', users);
};