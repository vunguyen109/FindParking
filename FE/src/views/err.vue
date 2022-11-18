<template>
  <div>
    <header-app />
    <div class="err">
      <div class="err__img">
        <img src="../assets/404_err.png" alt="">
      </div>
      <div class="err__content">
        <div class="err__content__text">
          <span>{{ $t("COMMON.ERR.CONTENT")[0] }}</span>
          <span>{{ $t("COMMON.ERR.CONTENT")[1] }}</span>
          <span>{{ $t("COMMON.ERR.CONTENT")[2] }}</span>
        </div>
        <div class="err__content__button">
          <button @click="revertHomePage()" class="err__content__button__revert" role="button">
            {{ $t("COMMON.ERR.REVER_ERR") }}
          </button>
        </div>
      </div>
    </div>
    <footer-app />
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
export default {
  name: "Err",
  data() {
    return {};
  },
  components: {
    "header-app": Header,
    "footer-app": Footer,
  },
  methods: {
    revertHomePage() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.err {
  background-image: url("../assets/background_err.png");
  display: flex;
  align-items: center;
  justify-content: center;

  &__img {
    width: 50%;

    img {
      width: auto;
    }
  }

  &__content {
    width: 50%;

    &__text {
      margin-bottom: 30px;
      margin-right: 30px;

      span {
        font-size: 18px;
      }
    }

    &__button {
      &__revert {
        width: 200px;
        font-size: 16px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        margin: 20px;
        height: 55px;
        text-align: center;
        border: none;
        background-size: 300% 100%;
        border-radius: 50px;
        -moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
        background-image: linear-gradient(to right, #e2be5b, #e43603, #fa7199, #e85a19);
        box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);

        &:hover {
          background-position: 100% 0;
          -moz-transition: all .4s ease-in-out;
          -o-transition: all .4s ease-in-out;
          -webkit-transition: all .4s ease-in-out;
          transition: all .4s ease-in-out;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .err {
    &__img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .err {
    display: block;

    &__img {
      width: 100%;

      img {
        width: 100%;
      }
    }

    &__content {
      width: 80%;
      margin: auto;

      &__text {
        margin: 30px 0 30px 0;

        span {
          font-size: 16px;
        }
      }

      &__button {
        &__revert {
          margin: 0;
          margin-bottom: 50px;
          font-size: 14px;
          width: 170px;
          height: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    .err {
      &__content {
        &__text {
          span {}
        }

        &__button {
          &__revert {
            font-size: 14px;
            width: 170px;
            height: 50px;
          }
        }
      }
    }
  }
}
</style>