<template>
  <section class="contract">
	<p class="TD">Nếu bạn có bất kì câu hỏi nào, xin hãy liên hệ với chúng tôi !</p>

  <div class="img">
    <img src="@/assets/banner2.png"/>
  </div>

  <button class="btn">Liên hệ ngay</button>
  </section>
</template>

<script>
export default {
  name: "contract",
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
.contract {
	//height: 46vh;
	//background-color: #00B661;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;

}
.img{
  width: 80%;
  margin-left: auto;
  }
.TD{
  font-size: 22px;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.btn{
  height: 45px;
  width: 180px;
  font-size: 18px;
  border-color: white;
  border-radius: 10px;
  background: #00B661;
  align-items: center;
  color: white;;
}
</style>
