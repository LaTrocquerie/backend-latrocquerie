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

module.exports = {
  findArticleImage,
};
