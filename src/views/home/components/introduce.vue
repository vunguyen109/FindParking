<template>
  <section class="introduce">
  <h1>
    GIỚI THIỆU
  </h1>
  <div class="Intro">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos quos cum ipsam deserunt accusantium consequuntur fugiat accusamus illum fuga quisquam, adipisci, eligendi magnam delectus blanditiis porro labore reprehenderit? Ea facere numquam eaque porro doloremque modi recusandae quis repellat dolores sequi dicta corporis, inventore eum animi, saepe atque quia ut aliquid veritatis, provident cum possimus.
  </div>
  
  <img class="image1" src="@/assets/banner1.png">
  </img>

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

}

.Intro{
  margin-left: 10px ;
  margin-right: 10px;
  margin-bottom: 50px;
  font-size: 24px;
  color: black;

}
.image1{
  width: 80%;
  margin: auto;
  }
</style>
