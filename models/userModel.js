const db = require('./db');

module.exports = {
	validate: function (user, callback) {
		var sql = "select * from user where uname='" + user.uname + "' and password='" + user.password + "'";
		db.getResults(sql, function (results) {
			if (results.length > 0) {

				var i = results[0].type;
				console.log(i);
				callback(i);
			} else {
				callback(false);
			}
		});
	},
	getById: function (Sid, callback) {

		var sql = "select * from post where pid='" + Sid + "'";
		db.getResults(sql, function (results) {
			//console.log(results.username);
			callback(results);
		});



	},
	getAll: function (callback) {
		var sql = "select * from post";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	getAllPost: function (callback) {
		var sql = "select * from post";
		db.getResults(sql, function (results) {
			callback(results);
		});
	},
	insert: function (newPost, callback) {
		var sql = "INSERT INTO post (ptitle, rname, rprice, rtype, rdesc, tag) VALUES ( '" + newPost.pTitle + "','" + newPost.rName + "','" + newPost.rPrice + "','" + newPost.rType + "', '" + newPost.rDesc + "','" + newPost.rTag + "')";
		db.execute(sql, function (err) {
			
			if (err) {
				callback(false);
			} else {
				callback(true);
			}

		});
	},

	update: function (Uid, user, callback) {


		var sql = "UPDATE post SET ptitle='" + user.pTitle + "', rname='" + user.rName + "', rprice='" + user.rPrice + "' , rtype='" + user.rType + "', rdesc='" + user.rDesc + "', tag='" + user.rTag + "' where pid='" + Uid + "'";
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}

		});

	},
	delete: function (Eid, callback) {

		var sql = "DELETE FROM post WHERE pid='" + Eid + "'";
		db.execute(sql, function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});

	},

	search: function (key, callback) {
		var sql = "SELECT * FROM post WHERE ptitle LIKE '" + key + "%' ";
		console.log(sql);
		db.getResults(sql, function (results) {

			console.log("dataset length " + results.length);
			if (results.length > 0) {
				callback(results);
			} else {
				callback(false);
			}
		});
	},

}