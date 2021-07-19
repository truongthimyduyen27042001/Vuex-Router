<template>
  <div class="blogs">
    <div class="blog-intro">
      <div class="blog-img">
        <img src="../assets/home2.jpg" alt="" />
      </div>
    </div>
    <div class="blog-content">
      <div class="content">
        <h2>Editor's Picks</h2>
      </div>
      <!-- test pagination -->
      <div class="container blog-list">
        <div v-if="loading" class="loading">Loading...</div>
        <div
          v-else
          class="blog-small container"
          v-for="(blog, index) in displayedUsers"
          :key="index"
          @click="$router.push('/blogs/' + blog.id)"
        >
          <div class="row gx-2">
            <div class="left-blog-small col-12 col-md-12 col-lg-5">
              <img :src="blog.thumbnail" alt="hinhanh" />
            </div>
            <div class="right-blog-small col-12 col-md-12 col-lg-7">
              <h3 class="technology">{{ blog.technology }}</h3>
              <h2 class="blog-small-title">
                {{ blog.title }}
              </h2>
              <h4 class="address">
                {{ blog.address }} ,
                <span class="time">{{ blog.time }}</span>
              </h4>
              <p class="blog-small-text">
                {{ blog.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="pagi">
        <b-pagination
          v-model="page"
          :total-rows="count"
          :per-page="pageSize"
          prev-text="Prev"
          next-text="Next"
        ></b-pagination>
      </div>
      <!-- end test pagination -->
    </div>
    <div class="blog-load">
      <div class="blog-article">
        <div class="blog-article-small container">
          <h3 class="technology">INTERIOR</h3>
          <h2 class="blog-small-title">Laborum Ullamco Sunt id ut Sunt</h2>
          <h4 class="address">
            Bessie Hawkins ,
            <span class="time">May 7, 2019 (10 mins read)</span>
          </h4>
          <p class="blog-small-text">
            Proident aliquip velit qui commodo officia qui consectetur dolor
            ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur.
            Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do
            enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla
            consequat velit magna.
          </p>
        </div>
      </div>
    </div>
    <div class="recent-posts container-fluird">
      <div class="row">
        <div class="articles col-12 col-sm-8 col-md-8 col-lg-8">
          <div
            class="article-inner row"
            v-for="article in articles"
            :key="'article' + article.id"
          >
            <div class="left-blog-small col-12 col-md-4 col-lg-4">
              <img :src="article.thumbnail" />
            </div>
            <div class="right-blog-small col-12 col-md-8 col-lg-8">
              <h3 class="technology">{{ article.technology }}</h3>
              <h2 class="blog-small-title">{{ article.title }}</h2>
              <h4 class="address">
                {{ article.address }} ,
                <span class="time">{{ article.time }}</span>
              </h4>
              <p class="blog-small-text">
                {{ article.text }}
              </p>
            </div>
          </div>
        </div>
        <div class="tags col-12 col-sm-4 col-lg-4">
          <div class="tag-content">tags</div>
          <ul class="tag-list" v-for="tag in tagList" :key="'tag-' + tag.id">
            <li>{{ tag.title }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "Blogs",
  async created() {
    // this.loading = true;
    // const response = await axios.get("http://localhost:3000/blogs");
    const responseTag = await axios.get("http://localhost:3000/tagList");
    const responseArticle = await axios.get("http://localhost:3000/articles");
    // this.blogs = response.data;
    this.tagList = responseTag.data;
    this.articles = responseArticle.data;
    // this.exampleItems = response.data;
    this.loading = true;
    await axios
      .get("http://localhost:3000/blogs")
      .then((response) => {
        this.blogs = response.data;
        this.count = response.data.length;
        this.loading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      blogs: [],
      tagList: 0,
      articles: 0,
      exampleItems: [],
      blogdemo: 0,
      loading: true,
      search: "",
      // test
      currentUser: null,
      currentIndex: -1,
      page: 1,
      count: 40,
      pageSize: 5,
      perPage: 5,
      pages: [],
    };
  },
  methods: {
    // onChangePage(blogs) {
    //   this.blogs = blogs;
    // },
    paginate(blogs) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return blogs.slice(from, to);
    },
  },
  computed: {
    displayedUsers() {
      return this.paginate(this.blogs);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300;1,500;1,700;1,900&display=swap");

* {
  padding: 0px !important;
  margin: 0px !important;
  font-family: "Open Sans", sans-serif;
}
.blog-intro {
  width: 100%;
  overflow: hidden;
}
img {
  cursor: pointer;
}
.content {
  cursor: pointer;
  margin-bottom: 30px;
}
.blog-img {
  width: 100vw;
  position: relative;
}
.blog-img img {
  width: 100%;
  height: 70vh;
  object-fit: cover;
}
.content {
  position: relative;
  padding-top: 40px;
}
.content:after {
  content: "";
  position: absolute;
  width: 190px;
  background: #1c1c1c;
  height: 2px;
  transform: translateX(-95px);
  margin-top: 20px;
}
.blog-list {
  width: 70%;
  margin: 50px auto !important;
}
.blog-small {
  margin-bottom: 4rem !important;
}
.card-footer {
  margin-bottom: 40px !important;
}
.content h2 {
  font-size: 42px;
  line-height: 57px;
  text-align: center;
  font-weight: 700;
  color: #1c1c1c;
  cursor: pointer;
}
#blog-list {
  margin-top: 50px;
}
.blog-small {
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-blog-small img {
  width: 250px;
  object-fit: contain;
}
.right-blog-small {
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.technology {
  font-weight: 400;
  font-size: 20px;
  line-height: 27.24px;
  font-style: normal;
  text-transform: uppercase;
  color: rgba(28, 28, 28, 0.5);
  cursor: pointer;
}
.blog-small-title {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 33px;
  line-height: 40.92px;
  padding-bottom: 10px;
  cursor: pointer;
}

.address {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 21.79px;
  color: rgba(28, 28, 28, 0.5);
}
.blog-small-text {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.card-footer {
  background-color: transparent;
  border: transparent;
}
.blog-load {
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
}
.blog-article {
  width: 100%;
}
.blog-article {
  width: 100%;
  height: 80vh;
  background-size: contain;
  background: linear-gradient(
      0deg,
      rgba(28, 28, 28, 0.1),
      rgba(28, 28, 28, 0.1)
    ),
    url("../assets/home3.jpg");
  position: relative;
}
.blog-article-small {
  background-color: #fff;
  padding: 30px;
  width: 509px;
  position: absolute;
  left: 754px;
  top: 50px;
  text-align: left;
}
.recent-posts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px !important;
}
.articles {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.article-inner {
  margin-bottom: 40px !important;
}
.articles .left-blog-small img {
  width: 100%;
  object-fit: contain;
}
.articles .right-blog-small {
  padding-left: 20px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.articles .right-blog-small .technology {
  font-weight: 400;
  font-size: 20px;
  color: rgba(28, 28, 28, 0.5);
  line-height: 27.24px;
}
.articles .right-blog-small .blog-small-title {
  font-size: 33px;
  line-height: 40.92px;
}
.tag-content {
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 27.24px;
  text-align: center;
  color: rgba(28, 28, 28, 1);
}
ul {
  list-style: none;
}
.tag-list {
  padding-top: 10px;
}
.tag-list li {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 45px;
  color: rgba(0, 0, 0, 1);
}
/* pagination  */
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
/* test pagination */
.pagi {
  display: flex;
  justify-content: center;
  margin-bottom: 30px !important;
}
/* end test pagination */
/* responsive */
@media screen and (max-width: 1255px) {
  .blog-article-small {
    top: auto;
    left: auto;
  }
}
@media screen and (max-width: 996px) {
  .blog-article-small {
    display: none;
  }
  .left-blog-small img {
    width: 100%;
  }
  .right-blog-small {
    margin-top: 50px;
  }
}
@media screen and (max-width: 776px) {
  .left-blog-small img {
    width: 250px;
  }
  .right-blog-small {
    text-align: center;
    margin-top: 20px;
  }
  .article-inner {
    margin-bottom: 50px;
  }
  .article-inner .left-blog-small img {
    width: 200px;
  }
  .article-inner .right-blog-small .technology {
    font-size: 15px;
    line-height: 18px;
  }
  .article-inner .blog-small-title {
    font-size: 20px;
    line-height: 24px;
  }
}
@media screen and (max-width: 440px) {
}
</style>
