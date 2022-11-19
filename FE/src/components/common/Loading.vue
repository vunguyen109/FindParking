<template>
  <div class="loading" v-if="showLoading">
    <div class="loading-area">
      <section clas="loading_vn">
        <div class="preloader" :style="cssVars">
          <span class="rot-1"></span>
          <span class="rot-2"></span>
          <span class="rot-3"></span>
          <span class="rot-4"></span>
          <span class="rot-5"></span>
          <span class="rot-6"></span>
          <span class="rot-7"></span>
          <span class="rot-8"></span>
        </div>
      </section>
      <span v-text="text"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLoading: {
      default: false,
      type: Boolean
    },
    text: {
      // default: "Đang gửi dữ liệu...",
      type: String
    },
    color: {
      type: String,
      default: '#41b883',
    },
    scale: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color,
        '--scale': this.scale,
      }
    }
  }
};
</script>

<style scoped>
.loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  background-color: rgba(38, 50, 56, 0.3);
}

.loading-area {
  padding: 10px;
}

.close-button {
  width: 2em;
  height: 2em;
  cursor: pointer;
}

.preloader {
  position: relative;
  width: 125px;
  height: 125px;
  margin: auto;
  transform: scale(var(--scale));
}

.preloader>span {
  position: absolute;
  background-color: transparent;
  height: 22px;
  width: 22px;
  border-radius: 12px;
  animation-name: f_fadeG;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}

.rot-1 {
  left: 0;
  top: 51px;
  animation-delay: 0.45s;
}

.rot-2 {
  left: 15px;
  top: 15px;
  animation-delay: 0.6s;
}

.rot-3 {
  left: 51px;
  top: 0;
  animation-delay: 0.75s;
}

.rot-4 {
  right: 15px;
  top: 15px;
  animation-delay: 0.9s;
}

.rot-5 {
  right: 0;
  top: 51px;
  animation-delay: 1.05s;
}

.rot-6 {
  right: 15px;
  bottom: 15px;
  animation-delay: 1.2s;
}

.rot-7 {
  left: 51px;
  bottom: 0;
  animation-delay: 1.35s;
}

.rot-8 {
  left: 15px;
  bottom: 15px;
  animation-delay: 1.5s;
}

@keyframes f_fadeG {
  0% {
    background-color: var(--color);
  }

  100% {
    background-color: transparent;
  }
}
</style>
