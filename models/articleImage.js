const connection = require("../db-config");

const db = connection.promise();

const findArticleImage = async (id) => {
  try {
    const articleimage = await db.query(
      "SELECT * FROM articleimage WHERE id_pages = ?",
      [id]
    );
    return articleimage[0].map((articleImage) => ({
      component: "articleImage",
      data: articleImage,
    }));
  } catch (error) {
    console.error(error);
  }
};

const updateArticleImage = async (data) => {
  try {
    console.log("article image modele");
    console.log(data);
    const articleImage = await db.query(
      "UPDATE articleImage SET ? WHERE id_articleImage = ?",
      [data, data.id_articleImage]
    );

    console.log(articleImage);
    return articleImage[0];
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findArticleImage,
  updateArticleImage,
};
