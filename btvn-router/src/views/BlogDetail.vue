<template>
  <div>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="blogDetail">
      <div class="blog-detail-img">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <div class="blog-detail-content">
        <div class="blog-detail-inner">
          <div class="blog-detail-title">{{ blog.title }}</div>
          <div class="blog-detail-address">
            {{ blog.address }}<span>{{ blog.time }}</span>
          </div>
          <div class="blog-detail-tags">#technology#tech#carrer</div>
          <div class="blog-detail-content-inner">
            <p>
              Commodo labore ut nisi laborum amet eu qui magna ullamco ut
              labore. Aliquip consectetur labore consectetur dolor exercitation
              est minim quis. Magna non irure qui ex est laborum nulla excepteur
              qui. Anim Lorem dolore cupidatat pariatur ex tempor. Duis ea
              excepteur proident ex commodo irure est. Nisi commodo qui pariatur
              enim sint laborum consequat enim in officia. Officia fugiat
              incididunt commodo et mollit aliqua non aute. Enim dolor eiusmod
              aliqua amet ipsum in enim eiusmod. Quis exercitation sit velit
              duis. Est Lorem labore consectetur minim sit eu eiusmod mollit
              velit. Consectetur voluptate ex amet id eiusmod laborum irure.
              Aliquip ad qui id exercitation irure amet commodo nisi quis.
              Occaecat minim incididunt eiusmod nostrud veniam quis culpa. Nisi
              ipsum et consequat id deserunt excepteur. Cillum non pariatur
              culpa ut occaecat laboris eu. Ullamco ad Lorem et elit laboris eu
              qui irure nulla qui culpa et. Cupidatat sunt ipsum proident aute
              exercitation do tempor aliqua cupidatat quis non exercitation.
              Adipisicing do minim dolore nulla mollit. Adipisicing incididunt
              irure ipsum et in esse ipsum elit tempor. Aliquip mollit sunt qui
              irure. Irure ullamco Lorem excepteur dolor qui ea ad quis. Enim
              fugiat cillum enim ad occaecat sint qui elit labore mollit sunt
              laborum fugiat consequat. Voluptate labore sunt duis eu deserunt.
              Occaecat do ut ut labore cillum enim dolore ad enim enim id.
              Aliquip do veniam ad excepteur ad cillum qui deserunt nostrud sunt
              aliqua duis sunt occaecat. Laborum incididunt commodo ullamco
              proident quis.
            </p>
          </div>
        </div>
        <div class="blog-detail-author container">
          <h2 class="about-content">About the author</h2>
          <div class="about-author row">
            <div class="col-12 col-sm-4 left-author">
              <img :src="blog.thumbnail" alt="" />
            </div>
            <div class="col-12 col-sm-8 right-author">
              <div class="name-author">Arthur Black</div>
              <div class="tag-author">@arthurblack</div>
              <div class="about-author-text">
                Ipsum adipisicing culpa est nisi consequat ex amet magna culpa
                veniam tempor irure ea. Reprehenderit labore do tempor eiusmod
                in consectetur ex sunt id mollit commodo ipsum deserunt quis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlogDetail",
  async created() {
    await axios
      .get("http://localhost:3000/blogs/" + this.$route.params.id)
      .then((response) => {
        this.blog = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      blog: 0,
      loading: false,
    };
  },
  computed: {
    activeBlog() {
      return 1;
    },
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  font-family: "Open Sans", sans-serif;
}
.blog-detail-img {
  width: 100%;
  overflow: hidden;
}
.blog-detail-img img {
  width: 95%;
  margin: auto;
  height: 80vh;
  object-fit: cover;
}
.blog-detail-content {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
}
.blog-detail-inner {
  width: 50%;
  padding: 50px 0px;
  margin: auto;
}
.blog-detail-content-inner {
  padding-top: 30px;
}
ul {
  list-style: none;
  display: flex;
  text-align: center;
}
.blog-detail-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 42px;
  line-height: 52.08px;
}
.blog-detail-address {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
  padding-top: 20px;
  padding-bottom: 20px;
}
.blog-detail-tags {
  font-size: 16px;
  font-weight: normal;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}
.blog-detail-content {
  padding-top: 20px;
}
.blog-detail-content p {
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  color: #000000;
}

.blog-detail-author {
  width: 50%;
  margin: auto;
  padding-bottom: 30px;
}
.about-author {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.left-author {
  width: 35%;
}
.left-author img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.right-author {
  padding-left: 30px;
  text-align: left;
}
.name-author {
  font-family: "Libre Baskerville", serif;
  font-style: bold;
  font-size: 33px;
  line-height: 41px;
}
.tag-author {
  font-size: 16px;
  line-height: 22px;
  color: rgba(28, 28, 28, 0.5);
}
.about-author-text {
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
}
.about-content {
  text-align: left;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 27.24px;
  color: rgba(28, 28, 28, 0.5);
  text-transform: uppercase;
  padding-bottom: 20px;
}
</style>
