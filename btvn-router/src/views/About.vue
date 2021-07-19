<template>
  <div class="about">
    <div class="headline">
      <div class="logo-nav">
        <div class="logo-box">
          <p>nu</p>
        </div>
        <p>ntium</p>
      </div>
      <div class="headline-text">
        A publishing company that focuses on the essentials.
      </div>
    </div>
    <!-- phan about -->
    <div class="about-inner container-fluid">
      <!-- about1 -->
      <div class="about-small row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-5 about-small-text">
          <h2 class="about-small-title">
            We tell stories that drives the heart
          </h2>
          <p class="about-small-descript">
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-7 about-small-img">
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </div>
      <!-- about2 -->
      <div class="about-small row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 about-small-img">
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 about-small-text">
          <h2 class="about-small-title">
            We tell stories that drives the heart
          </h2>
          <p class="about-small-descript">
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
      </div>
      <!-- about3 -->
      <div class="about-small about-small-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 about-small-text">
          <h2 class="about-small-title">
            We tell stories that drives the heart
          </h2>
          <p class="about-small-descript">
            Laboris consectetur sunt nulla eiusmod voluptate eiusmod dolor nisi
            qui dolor cillum fugiat ad. Id sit mollit labore sunt sit culpa qui
            minim pariatur et officia elit id. Tempor cupidatat veniam esse ad
            veniam dolore excepteur tempor dolor consectetur ut id.
          </p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 about-small-img">
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1622495808414-bcb3a2bd40ff?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- <div class="headline">
      <div class="logo-nav">
        <div class="logo-slogan">
          Because we are you.
          <div>Human.</div>
        </div>
      </div>
      <div class="headline-text pt-4" style="width: 434px">
        A publishing company that focuses on the essentials.
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  },
};
</script>
<style scoped>
.headline {
  width: 100%;
  height: 571px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Libre Baskerville", serif;
}
.logo-nav {
  position: relative;
  display: flex;
  cursor: pointer;
  font-size: 42px;
}
.logo-box {
  width: 94px;
  height: 78px;
  background: #1c1c1c;
  color: #fff;
  font-size: 42px;
  text-align: right;
}
.logo-brand {
  font-size: 42px;
  line-height: 50.08px;
  font-weight: 700;
  display: flex;
  align-items: center;
  color: #ffffff;
  transform: translateX(-60px);
}
.headline-text {
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
}
.about-inner {
  padding: 80px 70px;
  background-color: #1c1c1c;
  color: rgba(255, 255, 255, 1);
  width: 90%;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.about-inner:before {
  width: 8px;
  height: 1016px;
  background: #fff;
  top: 0;
  right: 15%;
  position: absolute;
  content: "";
}
.about-inner:after {
  width: 8px;
  height: 1016px;
  background-color: #fff;
  bottom: 0;
  left: 15%;
  position: absolute;
  content: "";
}
.about-small {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-small-text {
  text-align: left;
}
.about-small-text:nth-child(2) {
  padding-left: 10px;
}
.about-small-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 42px;
  line-height: 52.08px;
}
.about-small-descript {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
}
.about-small-img img {
  width: 569px;
  height: 419px;
  object-fit: contain;
}
/* about2 */
.about-small:nth-child(2) {
  display: flex;
  flex-direction: column;
  transform: translateY(-100px);
}
.about-small-text {
  margin: auto;
}
/* about-3 */
.about-small-3 .about-small-text {
  height: auto;
}
.about-small:nth-child(3) {
  flex-direction: column;
}
.logo-slogan:nth-child(1) {
  width: 427px;
  font-weight: 400;
  font-family: "Libre Baskerville", serif;
  font-size: 42px;
  line-height: 52.08px;
}
.about-small-3 .about-small-img img {
  width: 350px;
  height: 350px;
  object-fit: contain;
  margin-left: 20px;
}
.about-small-3 .about-small-img {
  display: flex;
  margin-left: 450px;
}
/* responsive */
@media screen and (max-width: 1255px) {
  .about-small {
    flex-direction: column;
  }
  .about-small-text {
    padding-left: 10px;
  }
  .about-small:nth-child(2) {
    transform: translateX(0px);
  }
  .about-inner:before {
    display: none;
  }
  .about-inner:after {
    display: none;
  }
}
@media screen and (max-width: 996px) {
  .about-small-3 .about-small-img {
    margin: auto;
  }
  .about-small-3 .about-small-img img {
    height: 419px;
    object-fit: contain;
  }
  .about-small-3 .about-small-img img:nth-child(2) {
    display: none;
  }
  .about-small-3 .about-small-img img:nth-child(3) {
    display: none;
  }
  .about-small-text {
    padding-top: 20px;
  }
}
@media screen and (max-width: 776px) {
  .about-small {
    margin-bottom: 30px;
  }
  .about-small-img {
    overflow: hidden;
  }
  .about-small-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media screen and (max-width: 576px) {
  .logo-nav {
    font-size: 30px;
  }
  .logo-box {
    font-size: 30px;
    width: 60px;
    height: 50px;
  }
  .headline-text {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
