var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/upload', (req,res) =>{
  res.render('upload')
});

//处理文件上传
router.post('/upload', (req, res) => {
  //创建 form 对象
  const form = new formidable.IncomingForm({
    multiples: true ,
    //设置上传文件的保存目录
    uploadDir: __dirname + '/../public/images',
    //保持文件后缀
    keepExtensions: true
  });
  //解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log(fields);// text  radio  checkbox  select
    // console.log(files); // file

    //服务器保存该图片的访问 URL
    // /images/8ad3d5e36012212ba7642c000.jpg
    let url = '/images/' + files.portrait.newFilename;// 将来将此数据保存在数据库中

    res.send(url);
  });
});

module.exports = router;
