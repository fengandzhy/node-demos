//1. 安装 mongoose
//2. 导入 mongoose
const mongoose = require('mongoose');

//设置 strictQuery 为 true
mongoose.set('strictQuery', true);

//3. 连接 mongodb 服务                        数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/bilibili');

//4. 设置回调
// 设置连接成功的回调  once 一次   事件回调函数只执行一次
mongoose.connection.once('open', async () => {
    //5. 创建文档的结构对象
    //设置集合中文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true // 该属性必须不能为空
        },
        author: String,
        price: Number
    });

    //6. 创建模型对象  对文档操作的封装对象
    let BookModel = mongoose.model('books', BookSchema);

    //7. 新增
    try {
        const newBook = await BookModel.create({
            name: '西游记',
            author: '吴承恩',
            price: 19.9
        });
        // 如果没有出错，则输出插入后的文档对象
        console.log(newBook);
    } catch (err) {
        // 判断是否有错误
        console.log(err);
    }
});

// 设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败');
});

//设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭');
});
