<template>
  <div>
    <Map></Map>
    <Introduce></Introduce>
    <Promotion></Promotion>
    <Location_list></Location_list>
    <Contract></Contract>
  </div>
</template>

<script>
import Map from "@/views/home/components/map.vue";
import Introduce from "@/views/home/components/introduce.vue";
import Promotion from "@/views/home/components/promotion.vue";
import Location_list from "@/views/home/components/location_list.vue";
import Contract from "@/views/home/components/contract.vue";
export default {
  data() {
    return {
      checkColor1: true,
      checkColor2: true,
      checkColor3: true,
      test: "abc",
      ttt: 1
    };
  },
  computed: {},
  methods: {},
  components: { 
    Map , 
  Introduce, 
  Promotion , 
  Location_list , 
  Contract 
  },
};
</script>

<style lang="scss" scoped>  
//
section {
  font-size: 60px;
  font-weight: 900;

}

@media screen and (max-width: 480px) {
  section {
    .ctn__main {
      &__items {
        max-width: 90%;
        gap: 0;
        &__desc {
          padding-bottom: 18px;
          h1 {
          }
        }
      }
    }
    .ctn__features {
      max-width: 90%;
      &__content {
        gap: 0;
        justify-content: center;
        &__items {
          width: 49.5%;
          border-right: 1px solid #5cc0fa;
          border-bottom: 1px solid #5cc0fa;
          display: block;
          &:last-child {
            border-bottom: none;
            border-right: none;
            p {
              padding-bottom: 0;
            }
          }
          &:first-child {
            img {
              padding: 0;
            }
          }
          &:nth-child(5) {
            border-bottom: none;
            p {
              padding-bottom: 0;
            }
          }
          &:nth-child(2) {
            border-right: none;
            img {
              padding: 0;
            }
          }
          &:nth-child(4) {
            border-right: none;
          }
          img {
            padding-top: 27px;
          }
          p {
            padding: 16px 0px;
          }
        }
      }
    }
    .ctn__plan {
      &__main {
        h1 {
          font-size: 24px;
          line-height: 28px;
          padding-bottom: 40px;
          padding-top: 45px;
        }
        &__items {
          max-width: 90%;
          margin: auto;
          justify-content: space-around;
          &__content {
            margin-bottom: 15px;
            .cover {
              width: 150px;
              height: 220px;
              &__sim {
                width: 130px;
                height: 200px;
                &__content {
                  &__desc {
                  }
                  &__capacity {
                  }
                  &__price {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
