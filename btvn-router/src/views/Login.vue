<template>
  <div class="login-inner">
    <div class="login-title">
      <h1>Welcom back!</h1>
      <h4>Sign in to get the most out of nutium</h4>
    </div>
    <form
      action=""
      v-on:submit.prevent="
        $router.push({
          path: '/dashboard',
        })
      "
    >
      <input type="text" placeholder="Username" required />
      <input type="password" placeholder="Password" required />
      <div class="more">
        <div class="remember-me">
          <input type="checkbox" />
          <span>Remember me</span>
        </div>
        <div class="forgot"><a href="#">Forget Password?</a></div>
      </div>
      <button type="submit" class="btn btn-outline-success">Success</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
* {
  padding: 0px;
  margin: 0px;
}
.login-inner {
  width: 40%;
  margin: auto;
  padding-top: 80px;
}
.login-title h1 {
  font-family: "Libre Baskerville", serif;
  font-size: 33px;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
}
.login-title h4 {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 400;
}
form {
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
  padding-top: 20px;
}
form input {
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  background: #f8f8f8;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}
form input:focus-visible {
  outline: none !important;
}
.more {
  display: flex;
  justify-content: space-between;
}
.remember-me {
  text-align: left;
}
.remember-me span {
  margin-left: 10px;
  color: rgba(28, 28, 28, 0.5);
}
.forgot a {
  color: rgba(28, 28, 28, 0.5) !important;
}
</style>
