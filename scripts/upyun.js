
const upyun = require('upyun');
let fs = require('fs');
let walk = require('walk');
let path = require('path');
let cfg = require('../ftpconfig');

const service = new upyun.Service(cfg.service, cfg.operate, cfg.password);
const client = new upyun.Client(service);

var __dirname = '../public';
let root = path.join(__dirname);
var files = [];
var dirs = [];


console.log('开始上传');
// getFileList(root);

function getFileList(path) {
  console.log(`读取文件目录...${path}`);
  var walker  = walk.walk(path, { followLinks: false });
  walker.on('file', function(roots, stat, next) {
      let root = roots.replace(/\.\./g, '');
      root = root.replace(/\\/g, '/');
      root = root.replace('/public', '');
      files.push({
        name: stat.name,
        remote: root + '/' + stat.name,
        loacte: roots + '/' + stat.name
      })
      next();
  });

  walker.on('directory', function(roots, stat, next) {
      dirs.push(roots + '/' + stat.name);
      next();
  });
  walker.on('end', function() {
    uploadFile(files);
  });

}

function uploadFile(file) {
  file.forEach((item, index) => {
    console.log(`开始上传第${index+1}个文件：${item.name}`);
    client.putFile(item.remote, fs.readFileSync(item.loacte)).then((res) => {
      // console.log;
      if (res) {
        console.log(`第${index+1}个文件：${item.name}，上传成功`);
      } else {
        console.log(`第${index+1}个文件：${item.name}，上传失败,errmsg: ${res}`);
      }
    })
  });
}







