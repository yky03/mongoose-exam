//book schema
//schema는 document의 구조가 어떻게 생겼는지 알려주는 역할을 한다.
//SchemaType 8가지 : String , Number, Date, Buffer, Boolean, Mixed, Objectid, Array
//사용 메뉴얼 : http://mongoosejs.com/docs/schematypes.html
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema); //collection name : book

# port number
PORT=4500
# MongoDB URI & User/Password
MONGO_URI=mongodb://localhost:27017
# mlab의 경우
# MONGO_URI=mongodb://<userid>:<password>@<database>:<port>/<db-name>