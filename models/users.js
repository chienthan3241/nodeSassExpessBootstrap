var mongoose = require('mongoose');
var schema = mongoose.Schema;
var userSchema = new schema({name: String, email: String}, {collection: 'usercollection'});
module.exports = mongoose.model('users', userSchema);
