const faker = require("faker");

module.exports = () => {
  const data = { blogs: [], tagList: [], articles: [] };
  for (let i = 0; i < 1000; i++) {
    data.blogs.push({
      id: "blog" + Number(i + 1),
      title: faker.name.title(),
      technology: faker.lorem.sentence(),
      time: faker.time.recent(),
      thumbnail: faker.image.avatar(),
      text: faker.lorem.paragraph(),
    });
  }
  for (let i = 0; i < 20; i++) {
    data.tagList.push({
      id: faker.datatype.uuid(),
      title: faker.name.title(),
    });
  }
  for (let i = 0; i < 5; i++) {
    data.articles.push({
      id: "article" + Number(i + 1),
      title: faker.name.title(),
      technology: faker.lorem.sentence(),
      time: faker.time.recent(),
      thumbnail: faker.image.avatar(),
      text: faker.lorem.sentence(),
    });
  }
  return data;
};
