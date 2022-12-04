var express = require('express');
var router = express.Router();

var db = require('./../models/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //chức năng trả về chi tiết 1 record
  //phương thức request: get
  //tiếp nhận id của reord trong url
  //lấy ra record theo id từ table
  //trả về chi tiết record dạng json    
     let sql = 'SELECT * FROM users '    
     db.query(sql, (err, d) => {
        res.json(d);
     });   
});
router.get('/:id', function(req, res, next) {
  //chức năng trả về chi tiết 1 record
  //phương thức request: get
  //tiếp nhận id của reord trong url
  //lấy ra record theo id từ table
  //trả về chi tiết record dạng json
     let id=req.params.id;      
     let sql = 'SELECT * FROM users WHERE userId = ?'    
     db.query(sql, id, (err, d) => {
        res.json(d[0]);
     });   
});
router.get('/orderHistory/:id', function(req, res, next) {
  //chức năng trả về chi tiết 1 record
  //phương thức request: get
  //tiếp nhận id của reord trong url
  //lấy ra record theo id từ table
  //trả về chi tiết record dạng json
     let id=req.params.id;      
     let sql = 'SELECT orders.*, parkings.*FROM ( orders INNER JOIN parkings ON orders.parkingId = parkings.id ) WHERE orders.userId = ?'    
     db.query(sql, id, (err, d) => {
        res.json(d);
     });   
});
router.post('/cancel/:id', function(req, res) { 
  //chức năng xóa 1 record trong table
  //phương thức request: delete
  //tiếp nhận id trong url
  //thực hiện xóa record
  //trả về thông báo json đã xóa
  let id = req.params.id;
 let sql = 'DELETE FROM orders WHERE orderId = ?'
 db.query(sql, id , (err, d) => {
     if (err) throw err;
     res.json({thongbao: 'Đã xóa thành công',success: true});
 }); 
});
router.post('/login', function(req, res, next) {
  //chức năng thêm mới record vào table
  //phương thức request: post
  //tiếp nhận dữ liệu gửi trong body request
  //thực hiện chèn record mới vào table 
  //trả về thông báo đã chèn dạng json 
  let name = req.body.username;  
        let sql = 'SELECT * FROM users WHERE name = ?'    
        db.query(sql, req.body.username, (err, d) => {
          if (d.length > 0) {
            if(req.body.password == d[0].password){
              res.json({result:d[0],success: true});
             }
             else {
               res.json({success: false})
             }
          }else {
            res.json({success: false})
          }
          
        });
});
router.post('/active/:id', function(req, res, next) {
   //chức năng cập nhật record trong table 
   //phương thức request: put
   //tiếp nhận dữ liệu gửi trong body request
   //thực hiện cập nhật record vào table 
   //trả về thông báo json đã cập nhật
   let data = req.body;
  let id = req.params.id;
  let sql = 'UPDATE  users  SET  ?  WHERE userId = ?';
  db.query(sql, [data, id], (err, d) => {
      if (err) throw err;
      res.json({thongbao: 'Đã cập nhật thông tin',success: true});
  });
});
router.post('/register', function(req, res, next) {
  //chức năng thêm mới record vào table
  //phương thức request: post
  //tiếp nhận dữ liệu gửi trong body request
  //thực hiện chèn record mới vào table 
  //trả về thông báo đã chèn dạng json 
  let data = req.body;  
 let sql = 'INSERT INTO users SET ?';
 db.query(sql, data, (err, d) => {
     if (err) throw err;
     res.json({success: true})
 });

});
router.post('/delete/:id', function(req, res) { 
  //chức năng xóa 1 record trong table
  //phương thức request: delete
  //tiếp nhận id trong url
  //thực hiện xóa record
  //trả về thông báo json đã xóa
  let id = req.params.id;
 let sql = 'DELETE FROM users WHERE userId = ?'
 db.query(sql, id , (err, d) => {
     if (err) throw err;
     res.json({thongbao: 'Đã xóa thành công',success: true});
 }); 
});
module.exports = router;
