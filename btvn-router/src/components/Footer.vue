<template>
  <footer class="footer" style="color: #fff">
    <div class="footer-title"><h3>want to connect ?</h3></div>
    <div class="footer-content">
      Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi qui..
    </div>
    <div class="footer-icon">
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
      <a href="#"><i class="fab fa-facebook-f"></i></a>
    </div>
  </footer>
</template>
<script>
export default {};
</script>

<style>
:root {
  --hover-color: #6893ff;
  --difference-color: #fafafa;
}
.footer {
  width: 100%;
  margin: auto;
  background-color: #1c1c1c;
  padding-top: 80px;
  padding-bottom: 80px;
}
.footer-title h3 {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 33px;
  line-height: 40.92px;
  cursor: pointer;
}
.footer-content {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  width: 332px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
}
.footer-icon {
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  line-height: 34.5px;
  color: #fff;
}
.footer-icon i {
  color: #fff;
}
@media screen and (max-width: 996px) {
  .footer-icon {
    font-size: 20px;
  }
}
@media screen and (max-width: 350px){
  .footer-title{
    width: 50%;
    margin: auto;
  }
  .footer-content{
    width: 50%;
  }
  .footer-icon{
    width: 50%;
  }
}
</style>
