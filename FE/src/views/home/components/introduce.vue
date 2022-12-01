<template>
  <section class="introduce">
  <h1 class = "TD">
    GIỚI THIỆU
  </h1>
  <div class="test">
  <div class="Intro">
    <p>
      Bạn đang gặp khó khăn khi tìm kiếm bãi đỗ xe, bạn đang đau đầu không biết nên đậu xe chỗ nào
      .Đừng để việc đậu xe trong thành phố trở thành rắc rối với bạn. Hãy để Website của chúng tôi giúp bạn tìm chỗ đậu xe ! <br> Với VHParking, chỉ cần đậu xe và đi. Nhanh chóng, thuận tiện và làm cho cuộc sống dễ dàng hơn. Chúng tôi sẽ đáp ứng nhu cầu của các bạn về vấn đề bãi đỗ xe. Xin chân thành cám ơn vì đã chọn chúng tôi!
    </p>
    <hr>
    <p class="US">
      <!-- You are having trouble finding a parking space, you are having a headache not knowing where to park your car. Don't let parking in the city be a problem for you. Let our Website help you find parking when you need the perfect location in your neighborhood. With VHParking.com, just park and go. Fast, convenient and at your finger tips to make life easier. We promise to meet your needs and desires about parking. Thank you very much for choosing us! -->
    </p>
    </div>
  
  
  <img class="img" src="@/assets/banner1.png"/>
</div>
  </section>
</template>

<script>
export default {
  name: "introduce",
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
.introduce {
	background-color: #ffffff;
  margin-top: 30px;
} 
.test{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
}
.Intro{
  margin-left: 10px ;
  margin-right: 10px;
  margin-bottom: 50px;
  font-size: 24px;
  color: #095d36;
  font-family:'Times New Roman', Times, serif;
  text-align: center;
}
.US{
  color:#383838;
  font:italic;
  font-size: 20px;
}
.img{
  width: 80%;
  
  }
.TD{
  font-family:'Times New Roman', Times, serif;
  text-align: center;
  margin-bottom: 10px;
  }
</style>
