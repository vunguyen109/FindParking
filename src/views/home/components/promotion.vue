<template>
  <section class="promotion">
	<h1>
    KHUYẾN MÃI
  </h1>
  <div class="KM">
    <div class="KM">
      <img src="@/assets/KM1.png"></img>
    <div class="text">
      <p>Bãi đỗ xe sân bay</p>
      <p class="linethrough">500.000VND</p>
      <p>250.000VND</p>
      <button class="btn2"><p class="colortxt2">Đặt ngay</p></button>
    </div>
    </div>

    <div class="KM">
      <img src="@/assets/KM2.png"></img>
      <div class="text">
        <p>Bãi đỗ xe Lê Duẩn</p>
        <p class="linethrough">300.000VND</p>
        <p>150.000VND</p>
        <button class="btn2"><p class="colortxt2">Đặt ngay</p></button>
      </div>
    </div>

    <div class="KM">
      <img src="@/assets/KM3.png"></img>
      <div class="text">
        <p>Bãi đỗ xe Bạch Đằng</p>
        <p class="linethrough">300.000VND</p>
        <p>150.000VND</p>
        <button class="btn2"><p class="colortxt2">Đặt ngay</p></button>
      </div>
    </div>
    
    </div>
    <button class="btn1"><p class="colortxt">Xem thêm</p></button>
  </section>
</template>

<script>
export default {
  name: "promotion",  
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
.promotion {
	height: 35vh;
//	background-color: #00B661;

}
.text{
  
  font-size: 15px;
  color:black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.KM{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;

  column-gap: 10px;
  background-color: white;
}
.linethrough{
  text-decoration-line: line-through;
}
.btn1{
  height: 35px;
  font-size: 18px;
  border-color: #00B661;
  border-radius: 10px;
  background: none;
  
}
.colortxt{
  color:#00B661;
}
.colortxt2{
  color:white;
}
.btn2{
  height: 35px;
  font-size: 18px;
  border-color: white;
  border-radius: 10px;
  background: #00B661;
  
}
</style>
