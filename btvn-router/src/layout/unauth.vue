<template>
  <div class="unauth-inner">
    <Brand />
    <slot />
  </div>
</template>

<script>
import Brand from "../components/Brand.vue";
export default {
  components: {
    Brand,
  },
};
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
}
.unauth-inner {
  width: 100vw;
  height: 100vh;
  padding: 20px;
}
</style>
