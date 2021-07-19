<template>
  <div class="slider-dashboard">
    <div class="slidebar" style="width: 90%">
      <div class="logo-nav" style="cursor: pointer"  @click="$router.push('/')">
        <div class="logo-box"></div>
        <div class="logo-brand">nu<span>ntium</span></div>
      </div>
      <ul class="web-list">
        <li>
          <i class="fas fa-chart-line"></i>
          <p>Dashboard</p>
        </li>
        <li>
          <i class="fas fa-user"></i>
          <p>Profile</p>
        </li>
        <li>
          <i class="fas fa-pen"></i>
          <p>Write a Post</p>
        </li>
        <li>
          <i class="fas fa-angle-double-right"></i>
          <p>All Posts</p>
        </li>
        <li>
          <i class="fas fa-cube"></i>
          <p>Resources</p>
        </li>
        <li>
          <i class="fas fa-cog"></i>
          <p>Setting</p>
        </li>
        <li>
          <i class="fas fa-sign-out-alt"></i>
          <p>Log Out</p>
        </li>
      </ul>
    </div>
    <button class="btn-setting-slider" data-left="-230px">
      <i class="fas fa-cog"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Sliderbar",
  data() {
    return {
      activeSliderbar: true,
    };
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.slider-dashboard {
  transition: 0.5s ease-in;
  width: 25%;
  display: flex;
}
.slidebar {
  width: 100%;
  height: 100vh;
  background-color: #1e2731;
  padding-top: 20px;
}
.logo-nav {
  position: relative;
  display: flex;
  height: 10%;
}
.logo-box {
  width: 50px;
  height: 48px;
  background: #fff;
}
.logo-brand {
  font-size: 30px;
  line-height: 37px;
  font-family: "Libre Baskerville", serif;
  display: flex;
  align-items: center;
  color: #1e2731;
  transform: translateX(-42px);
}
.logo-brand span {
  color: #fff;
}
.web-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-top: 50px;
}
.web-list-small {
  display: flex;
  margin: auto;
}
.web-list li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  padding: 20px 0px 20px 50px;
}
.web-list li:hover {
  background-color: #545a61;
}
.web-list li p {
  margin-bottom: 0rem !important;
  cursor: pointer;
}
.web-list li i {
  padding-right: 20px;
  cursor: pointer;
}
.btn-setting-slider {
  padding: 10px;
  background-color: #1e2731;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  border-radius: 0px 5px 5px 0px;
  border: transparent;
  display: none;
}
#btn-setting-color > i {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}
/* responsive */
@media screen and (max-width: 1255px) {
  .slider-dashboard {
    transform: translateX(-86%);
  }
  .btn-setting-slider {
    display: block;
  }
}
@media screen and (max-width: 996px) {
  .slider-dashboard {
    transform: translateX(-90%);
  }
}
</style>
