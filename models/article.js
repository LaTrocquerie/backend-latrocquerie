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

// UPDATE UN ARTICLE

const updateArticle = async (data) => {
  try {
    const article = await db.query(
      "UPDATE article SET ? WHERE id_article = ?",
      [data, data.id_article]
    );

    return article[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findArticle,
  updateArticle,
};
