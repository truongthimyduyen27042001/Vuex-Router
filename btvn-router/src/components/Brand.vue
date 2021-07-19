<template>
  <div class="brand">
    <div @click="$router.push('/')" class="logo-nav">
      <div class="logo-box"></div>
      <div class="logo-brand">nu<span>ntium</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Brand",
};
</script>

<style scoped>
.logo-nav {
  position: relative;
  display: flex;
  cursor: pointer;
}
.logo-box {
  width: 58px;
  height: 57px;
  background: #1c1c1c;
}
.logo-brand {
  font-size: 30px;
  line-height: 37px;
  font-family: "Libre Baskerville", serif;
  display: flex;
  align-items: center;
  color: #ffffff;
  transform: translateX(-42px);
}
.logo-brand span {
  color: black;
}
</style>
