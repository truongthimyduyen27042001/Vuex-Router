<template>
  <div id="nav">
    <div
      class="nav-res"
      :style="
        activeMenu ? 'transform: translate(0px)' : 'transform: translate(100%)'
      "
    >
      <button
        class="btn-mobile mobile-nav-close"
        id="menu-item-small"
        @click="activeMenu = false"
      >
        <i class="fas fa-times"></i>
      </button>
      <ul class="list-nav-res">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/blogs">Blogs</router-link></li>
        <li><router-link to="/auth/login">Login</router-link></li>
      </ul>
    </div>
    <div class="left-nav">
      <div class="logo-nav">
        <div class="logo-box"></div>
        <div class="logo-brand" @click="$router.push('/')">
          nu<span>ntium</span>
        </div>
      </div>
      <div class="list-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blogs">Blogs</router-link>
      </div>
    </div>
    <div class="right-nav">
      <button
        type="button"
        @click="activeMenu = true"
        class="btn btn-outline-success"
      >
        Menu
      </button>
      <!-- seatch -->
      <div class="search">
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="search"
        />
      </div>
      <button
        type="button"
        @click="$router.push('/auth/login')"
        class="btn btn-outline-success login"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      activeMenu: false,
      search: "",
    };
  },
};
</script>

<style>
#nav {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.logo-nav {
  position: relative;
  display: flex;
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
.left-nav {
  display: flex;
}
.list-nav {
  display: flex;
  align-items: center;
  transform: translateX(-42px);
}

.list-nav a {
  margin-right: 20px;
  transition: 0.2s ease-in;
}
.list-nav a:hover {
  text-decoration: none !important;
  color: #42b992 !important;
}
.list-nav a:first-child {
  margin-left: 20px;
}
.right-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  padding-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search input:focus {
  box-shadow: none !important;
}
.right-nav button {
  padding: 10px 40px;
  height: fit-content;
}
.right-nav svg {
  margin-right: 20px;
}
.right-nav button {
  padding: 5px 20px;
}
.right-nav button:nth-child(1) {
  margin-right: 10px;
  display: none;
}
.right-nav button:focus {
  box-shadow: none !important;
}
/* Nav response */
.nav-res {
  width: 350px;
  height: 100vh;
  background: gray;
  position: fixed;
  z-index: 200;
  top: 0;
  right: 0;
  padding-top: 50px;
  transition: 0.5s ease-in;
}
.nav-res button {
  border: none;
  color: #3d4451;
  background-color: transparent;
  font-size: 1.2rem;
  display: flex;
  outline: none;
  position: absolute;
  right: 10%;
}
.list-nav-res {
  list-style: none;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
.list-nav-res li {
  font-weight: bold;
  margin-bottom: 0.8em;
}
/* response */
@media screen and (max-width: 992px) {
  .left-blog-small img {
    width: 150px;
  }
  .list-nav {
    display: none;
  }
  .right-nav {
    display: inline-flex;
  }
  .right-nav button:nth-child(1) {
    display: block;
  }
  .search {
    display: none !important;
  }
}
@media screen and (max-width: 767px) {
}
@media screen and (max-width: 500px) {
  .login {
    display: none !important;
  }
  .nav-res {
    width: 60%;
  }
}
@media screen and (max-width: 320px) {
  .left-nav {
    display: none;
  }
}
</style>
