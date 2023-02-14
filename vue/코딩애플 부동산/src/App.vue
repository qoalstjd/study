<template>
  <div>
    <div class="menu">
      <a v-for="(a, i) in menus" :key="i">{{ a }}</a>
    </div>

    <div v-for="(d, i) in products" :key="i">
      <img :src="d.image" alt="" class="roomImg" />
      <h4>{{ d.title }}</h4>
      <p>{{ d.price }}원</p>
      <button @click="d.on = true">상세보기</button>
      <div class="blackBg" v-if="d.on === true">
        <div class="whiteBg">
          <h4>{{ d.title }}</h4>
          <p>{{ d.content }}</p>
          <button @click="d.on = false">닫기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import oneroom from "./assets/oneroom";
export default {
  name: "App",
  data() {
    return {
      menus: ["Home", "Shop", "About"],
      products: oneroom,
      // title, image, content, price
    };
  },
  methods: {},
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}

.blackBg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
}
.whiteBg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: #fff;
  padding: 10px;
}
.roomImg {
  width: 100%;
}

/* 동적 UI 만드는법
0. HTML CSS로 디자인해두기
1. UI의 현재 상태를 데이터로 저장해둠
2. 데이터에 따라 UI가 어떻게보일지 작성 */
</style>
