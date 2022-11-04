import Vue from 'vue';

const ConstPlugin = {
   install(Vue, options) {
      Vue.prototype.$CONST = {
         LOCATION_DATA: [
            {
                id : "001",
                name:"bãi đõ xe số 1",
                coordinates: [108.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "002",
                name:"bãi đõ xe số 2",
                coordinates: [107.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "003",
                name:"bãi đõ xe số 1",
                coordinates: [106.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "004",
                name:"bãi đõ xe số 1",
                coordinates: [105.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "005",
                name:"bãi đõ xe số 1",
                coordinates: [104.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "006",
                name:"bãi đõ xe số 1",
                coordinates: [103.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "007",
                name:"bãi đõ xe số 1",
                coordinates: [102.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "008",
                name:"bãi đõ xe số 1",
                coordinates: [101.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "009",
                name:"bãi đõ xe số 1",
                coordinates: [100.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
         ]
      };
   },
};

Vue.use(ConstPlugin);
