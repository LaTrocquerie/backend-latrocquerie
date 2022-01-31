const res = require("express/lib/response");
const connection = require("../db-config");

const db = connection.promise();

const findArticle = async (id) => {
  try {
    const article = await db.query("SELECT * FROM article WHERE id_pages = ?", [
      id,
    ]);
    return article[0].map((article) => ({
      component: "article",
      data: article,
    }));
  } catch (error) {
    console.error(error);
  }
};

const updateArticle = async (body) => {
  console.log(body);
  db.query("UPDATE article SET ? WHERE id_article = ?", [body]);
  return "Article correctement mis à jour";

  // return article.forEach((element) => console.log(element));

  // .then((result) => {
  //   res.send("Article correctement mis à jour !");
  // })
  // .catch((error) => {
  //   console.error(error);
  // });
};

module.exports = {
  findArticle,
  updateArticle,
};
