<template>
  <section class="promotion">
	<h1 class="TD">
    KHUYẾN MÃI
  </h1>
  <div class="KM">
    <div class="KM__item">
      <img src="@/assets/KM1.png"/>
    <div class="text">
      <p>Bãi đỗ xe sân bay</p>
      <p class="linethrough">500.000VND</p>
      <p>250.000VND</p>
      <button class="btn2"><p class="colortxt2">Đặt ngay</p></button>
    </div>
    </div>

    <div class="KM__item">
      <img src="@/assets/KM2.png"/>
      <div class="text">
        <p>Bãi đỗ xe Lê Duẩn</p>
        <p class="linethrough">300.000VND</p>
        <p>150.000VND</p>
        <button class="btn2"><p class="colortxt2">Đặt ngay</p></button>
      </div>
    </div>

    <div class="KM__item">
      <img src="@/assets/KM3.png"/>
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
	//height: 30vh;
//	background-color: #00B661;

}
.text{

  font-size: 15px;
  color:black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.KM{
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  column-gap: 20px;
  background-color: white;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 10px;
  &__item {
    width: 30%;
    display: flex;
    justify-content: space-around;
    column-gap: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 14px 8px #e5bcbc;
    padding: 10px;
    img {
      width: 60%;
      border-radius: 5px;
    }
  }
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
  margin-left: 45% ;
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
  align-items: center;
}
.TD{
  font-family:'Times New Roman', Times, serif;
  text-align: center;
  margin-top: 5px;
  }
  
@media (max-width: 800px) {
  .KM{
  &__item {
    
    flex-direction: column;
    row-gap: 10px;
    img {
      width: 100%;
      height: 130px;
    }
    p {
      margin: 0;
    }
  }
}
}
</style>
