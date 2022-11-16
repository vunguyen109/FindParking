<template>
  <section class="location_list">
	<h1 class="TD">
    Danh sách địa điểm
  </h1>

  <div class="box">
  <div class="container-3">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" id="search" placeholder="Search..." />
  </div>
  </div>

<div class="location">
  <div class="text">
    <div>
      <p class = "gray" >Sân bay Đà Nẵng</p>
      <p class = "black">Bãi đỗ xe trong nhà</p>
    </div>
    <div>
      100.000 VNĐ
    </div>
    <div>
      <button class="btn">Đặt ngay</button>
    </div>
  </div>

  <div class="text">
    <div>
      <p class = "gray" >Sân bay Đà Nẵng</p>
      <p class = "black">Bãi đỗ xe ngoài trời</p>
    </div>
    <div>
      95.000 VNĐ
    </div>
    <div>
      <button class="btn">Đặt ngay</button>
    </div> 
  </div>

  <div class="text">
    <div>
      <p class = "gray" >Lotte Mart</p>
      <p class = "black">Bãi đỗ xe ngoài trời</p>
    </div>
    <div>
      80.000 VNĐ
    </div>
    <div>
      <button class="btn">Đặt ngay</button>
    </div> 
  </div>

  <div class="text">
    <div>
      <p class = "gray" >Hải Châu</p>
      <p class = "black">Bãi đỗ xe ngoài trời</p>
    </div>
    <div>
      75.000 VNĐ
    </div>
    <div>
      <button class="btn">Đặt ngay</button>
    </div> 
  </div>

  <div class="text">
    <div>
      <p class = "gray" >Hải Châu</p>
      <p class = "black">Bãi đỗ xe trong nhà</p>
    </div>
    <div>
      100.000 VNĐ
    </div>
    <div>
      <button class="btn">Đặt ngay</button>
    </div> 
  </div>

  <div class="center">
  <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#" class="active">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
  </div>
</div>

</div>


  </section>
</template>

<script>
export default {
  name: "location_list",
  data() {
    return {
    };
  },

  mounted() {
  },

  methods: {
    
  }
};
</script>
<style lang="scss" scoped>
.location_list {
	height: 50vh;
	background-color: #ffffff;

}
.TD{
  font-family:'Times New Roman', Times, serif;
  text-align: center;
  }
.text{
  margin-bottom: 20px;
  font-size: 20px;
  color:#00B661;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  font-family: 'Times New Roman', Times, serif;
}
.location{
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  justify-content: space-around;
  column-gap: 20px;
  font-family: 'Times New Roman', Times, serif;
  margin: 10px auto;
}
.gray{
  color: #65737e;
}
.black{
  color: black;
}
.btn{
  height: 35px;
  font-size: 15px;
  border-color: white;
  border-radius: 10px;
  background: #00B661;
  align-items: center;
  color: white;
}
.center {
  text-align: center;
}

.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
  border: 1px solid #ddd;
  margin: 0 4px;
  font-size: 15px;
}

.pagination a.active {
  background-color: #4CAF50;
  color: white;
  border: 1px solid #4CAF50;
}

.pagination a:hover:not(.active) {background-color: #ddd;}
.box{
  margin: 10px auto;
  width:1010px;
  height: 50px;
}
.container-3{
  width: 500px;
  vertical-align:middle;
  white-space: nowrap;
  position: relative;
  
}
 
.container-3 input#search{
  width: 1010px;
  height: 40px;
  background: #dadada;
  border: 1px;
  font-size: 10pt;
  float: left;
  color: #262626;
  padding-left: 35px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: #fff;
}
.container-3 input#search::-webkit-input-placeholder {
   color: #65737e;
}
 
.container-3 input#search:-moz-placeholder { /* Firefox 18- */
   color: #65737e;  
}
 
.container-3 input#search::-moz-placeholder {  /* Firefox 19+ */
   color: #65737e;  
}
 
.container-3 input#search:-ms-input-placeholder {  
   color: #65737e;  
}
.container-3 .icon{
  position: absolute;
  top: 50%;
  margin-left: 17px;
  margin-top: 17px;
  z-index: 1;
  color: #4f5b66;
 
   -webkit-transition: all .55s ease;
  -moz-transition: all .55s ease;
  -ms-transition: all .55s ease;
  -o-transition: all .55s ease;
  transition: all .55s ease;
}
.container-3 input#search:focus, .container-3 input#search:active{
    outline:none; 
}
 
.container-3:hover .icon{
  margin-top: 16px;
  color: #cbd1d6;
 
  -webkit-transform:scale(1.5); /* Safari and Chrome */
  -moz-transform:scale(1.5); /* Firefox */
  -ms-transform:scale(1.5); /* IE 9 */
  -o-transform:scale(1.5); /* Opera */
   transform:scale(1.5);
  }
</style>
