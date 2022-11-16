import Vue from 'vue';

const ConstPlugin = {
   install(Vue, options) {
      Vue.prototype.$CONST = {
         LOCATION_DATA: [
            {
                id : "001",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 1",
                coordinates: [108.2096, 16.059945],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 1,
              },
              {
                id : "002",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 2",
                coordinates: [108.22175, 16.03750],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 2,
              },
              {
                id : "003",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 3",
                coordinates: [108.21448, 16.03494],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 3,
              },
              {
                id : "004",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 4",
                coordinates: [108.24039,16.06273],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 4,
              },
              {
                id : "005",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 5",
                coordinates: [108.23816,16.07032],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 5,
              },
              {
                id : "006",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 6",
                coordinates: [108.17594,16.05958],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 6,
              },
              {
                id : "007",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 7",
                coordinates: [108.19877,16.01279],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 7,
              },
              {
                id : "008",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 8",
                coordinates: [108.23181,16.02088],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 8,
              },
              {
                id : "009",
                image: "https://bilparking.com.vn/sites/default/files/thu-vien/Baiviet/B%C3%A3i%20%C4%91%E1%BB%97%20xe%20truy%E1%BB%81n%20th%E1%BB%91ng.jpg",
                name:"bãi đỗ xe số 9",
                coordinates: [108.24460,16.03458],
                address: "xxx-yyy-zzzz",
                introduce: "xxxxxxxxxxxxxxxxxx",
                slot: 9,
              },
         ]
      };
   },
};

Vue.use(ConstPlugin);
