var express = require('express');
 var router = express.Router();
 var db = require('./../models/database'); 
 
 router.get('/', function(req, res, next) {     
    let sql = `SELECT parkings.*,users.name AS ownerName FROM parkings,users WHERE parkings.owner = users.userId`;
    
    db.query(sql, function(err, data) {
        if (err) throw err;
        
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                var getdata = new Promise(function(resolve, reject) {
                    var returnValue = data;
                    require("fs").readFile(element.image, function(err, data) {
                        returnValue[index].image = data;
                        resolve(returnValue);
                    });
                    
                });
                getdata.then(function(returnValue) {
                    if(index ==  data.length -1 ) {
                        res.json(returnValue);
                    }
                });
            }
        
    });   
 });
 router.get('/order/:id', function(req, res, next) {
    //chức năng trả về chi tiết 1 record
    //phương thức request: get
    //tiếp nhận id của reord trong url
    //lấy ra record theo id từ table
    //trả về chi tiết record dạng json
       let id=req.params.id;      
       let sql = 'SELECT * FROM orders WHERE parkingId = ?'    
       db.query(sql, id, (err, d) => {
          res.json(d);
       });   
});
 router.post('/order', function(req, res, next) {
    //chức năng thêm mới record vào table
    //phương thức request: post
    //tiếp nhận dữ liệu gửi trong body request
    //thực hiện chèn record mới vào table 
    //trả về thông báo đã chèn dạng json 
   let data = req.body; 
   let sql = 'INSERT INTO orders SET ?';
   db.query(sql, data, (err, d) => {
       if (err) throw err;
       res.json({thongbao: data ,success: true});
   });
});
router.post('/confirmOrder/:id', function(req, res, next) {
    //chức năng cập nhật record trong table 
    //phương thức request: put
    //tiếp nhận dữ liệu gửi trong body request
    //thực hiện cập nhật record vào table 
    //trả về thông báo json đã cập nhật
    let data = req.body; 
    console.log(data);
   let id = req.params.id;
   let sql = 'UPDATE  orders  SET  ?  WHERE orderId = ?';
   db.query(sql, [data, id], (err, d) => {
       if (err) throw err;
       res.json({thongbao: 'Đã cập nhật sách',success: true});
   });
});
 router.post('/add', function(req, res, next) {
     //chức năng thêm mới record vào table
     //phương thức request: post
     //tiếp nhận dữ liệu gửi trong body request
     //thực hiện chèn record mới vào table 
     //trả về thông báo đã chèn dạng json 
     var base64Data = req.body.image.data.replace(/^data:image\/jpeg;base64,/, "");
    require("fs").writeFile( "data/"+req.body.image.name, base64Data, 'base64', function(err) {
    console.log(err);
    });
    req.body.image = "data/"+req.body.image.name;
    let data = req.body; 
    let sql = 'INSERT INTO parkings SET ?';
    db.query(sql, data, (err, d) => {
        if (err) throw err;
        res.json({thongbao: data ,success: true});
    });
 });
 router.get('/:id', function(req, res, next) {
     //chức năng trả về chi tiết 1 record
     //phương thức request: get
     //tiếp nhận id của reord trong url
     //lấy ra record theo id từ table
     //trả về chi tiết record dạng json
        let id=req.params.id;      
        let sql = 'SELECT * FROM parkings WHERE id = ?'    
        db.query(sql, id, (err, d) => {
           res.json(d[0]);
        });   
 });
 router.post('/:id', function(req, res, next) {
     //chức năng cập nhật record trong table 
     //phương thức request: put
     //tiếp nhận dữ liệu gửi trong body request
     //thực hiện cập nhật record vào table 
     //trả về thông báo json đã cập nhật
    if (req.body.image){
        var base64Data = req.body.image.data.replace(/^data:image\/jpeg;base64,/, "");
     require("fs").writeFile( "data/"+req.body.image.name, base64Data, 'base64', function(err) {
     console.log(err);
     });
     req.body.image = "data/"+req.body.image.name;
    }
     let data = req.body; 
    let id = req.params.id;
    let sql = 'UPDATE  parkings  SET  ?  WHERE id = ?';
    db.query(sql, [data, id], (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã cập nhật sách',success: true});
    });
 });
 router.post('/delete/:id', function(req, res) { 
     //chức năng xóa 1 record trong table
     //phương thức request: delete
     //tiếp nhận id trong url
     //thực hiện xóa record
     //trả về thông báo json đã xóa
     let id = req.params.id;
    let sql = 'DELETE FROM parkings WHERE id = ?'
    db.query(sql, id , (err, d) => {
        if (err) throw err;
        res.json({thongbao: 'Đã xóa thành công',success: true});
    }); 
 });
 module.exports = router;

