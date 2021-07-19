<template>
  <div class="dashboard">
    <div class="nav-login">
      <div class="nav-login-inner">
        <i class="fas fa-search"></i>
        <i class="fas fa-bell"></i>
        <img
          src="https://images.unsplash.com/photo-1625144778908-a0cac2794cd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=538&q=80"
          alt=""
        />
      </div>
    </div>
    <div class="dash-board">
      <div class="title"><h2>Dashboard</h2></div>
      <div class="customize">
        <button type="button" class="btn btn-outline-success">customize</button>
      </div>
    </div>
    <div class="dash-board-box">
      <div class="box-small total">
        <div class="box-title"><h4>Total Pots</h4></div>
        <div class="box-amount">
          <i class="fas fa-pen"></i>
          <div class="amount"><h4>214</h4></div>
        </div>
        <div class="box-small box-time">
          <p>This month</p>
        </div>
      </div>
      <div class="box-small total total-views">
        <div class="box-title"><h4>Total Views</h4></div>
        <div class="box-amount">
          <i class="fas fa-eye"></i>
          <div class="amount"><h4>130K</h4></div>
        </div>
        <div class="box-time">
          <p>This month</p>
        </div>
      </div>
      <div class="total most-articles">
        <div class="box-title"><h4>Most Viewed Article</h4></div>
        <div class="content">The most awesome article man has ever written</div>
      </div>
    </div>
    <div class="dash-board-views">
      <div class="title"><h2>Total Views</h2></div>
      <div class="dash-board-views-img">
        <img src="../assets/views.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.dashboard {
  padding: 20px 30px;
  width: 100%;
  height: 100vh;
}
.customize button {
  padding: 5px 10px;
}
.customize button:focus {
  box-shadow: none !important;
}

.nav-login {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-login-inner i {
  padding-right: 20px;
  cursor: pointer;
}
.nav-login img {
  width: 40px;
  object-fit: contain;
  border-radius: 50%;
  cursor: pointer;
}
.dash-board {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 15px;
}
.dash-board-box {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.title h2 {
  text-align: left;
}
.total {
  padding: 5px 20px;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  cursor: pointer;
}
.box-title h4 {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
}
.box-amount {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 25px !important;
  font-weight: 700 !important;
}

.box-amount i {
  transform: translateY(-5px);
  padding-right: 10px;
}
.box-time p {
  margin-bottom: 0px !important;
}
.most-articles .content {
  font-size: 25px;
  font-weight: 700;
  line-height: 25px;
}
.dash-board-views .title{
  padding-top: 20px;
  padding-bottom: 20px;
}
.dash-board-views-img {
  height: 55vh;
  overflow: hidden;
}
.dash-board-views-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}
/* responsive */
@media screen and (max-width: 1255px) {
  .dash-board-box {
    flex-direction: column;
  }
  .box-small {
    margin-bottom: 20px;
  }
}
</style>
