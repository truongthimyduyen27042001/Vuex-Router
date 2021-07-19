<template>
  <div class="secret-inner">
    <Slidebar />
    <slot />
  </div>
</template>
<script>
import Slidebar from "../components/Sliderbar.vue";
export default {
  components: {
    Slidebar,
  },
};
</script>

<style>
.secret-inner {
  display: flex;
}
</style>
