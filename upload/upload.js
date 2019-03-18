let fs = require('fs');
// let walk = require('walk');
let path = require('path');
let ftpClient = require('ftp');

var __dirname = '../public';
let root = path.join(__dirname);
var files = [];
var dirs = [];

let c = new ftpClient();
let connectConfig = {
  host: 'v0.ftp.upyun.com',
  post: '21',
  user: 'wuzhihao2/new-blog',
  password: 'wuzhihao2'
}
c.connect(connectConfig);

// fs.readdir('../public', function (err, files) {
//   if (err) {
//     throw err;
//   }
//   console.log(files);
// });
// getFileList(root);

function getFileList(path) {

	var walker  = walk.walk(path, { followLinks: false });
 
	walker.on('file', function(roots, stat, next) {
	    files.push(roots + '/' + stat.name);
	    next();
	});
 
	walker.on('directory', function(roots, stat, next) {
	    dirs.push(roots + '/' + stat.name);
	    next();
	});
	walker.on('end', function() {
	    console.log("files "+files);
		console.log("dirs "+dirs);
	});

}

var walk = function (dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
      if (err) return done(err);
      var pending = list.length;
      if (!pending) return done(null, results);
      list.forEach(function (file) {
          file = path.resolve(dir, file);
          fs.stat(file, function (err, stat) {
              if (stat && stat.isDirectory()) {
                  walk(file, function (err, res) {
                      results = results.concat(res);
                      if (!--pending) done(null, results);
                  });
              } else {
                  results.push(file);
                  if (!--pending) done(null, results);
              }
          });
      });
  });
};

c.on('ready', function () {
   
  var tpath = path.resolve(__dirname);
  walk(tpath, function (err, results) {
      if (err) throw err;
      results.forEach(function (filename) {
          (function (filename) {
              var spath = '根据filename 获取文件名';
              c.put(filename, spath, function (err) {
                  if (err) throw err;
                  console.dir("上传文件" + spath);
                  c.end();
              });
          })(filename)
      });
  });



});
