const connection = require("../db-config");

const db = connection.promise();

const findProduct = async (id) => {
  try {
    const products = await db.query(
      "SELECT * FROM products WHERE id_pages = ?",
      [id]
    );
    const productsDetail = [];
    for (let i = 0; i < products[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM products_details WHERE id_products = ?",
        [products[0][i].id_products]
      );
      const productsProvisoire = {
        component: "product",
        data: {
          ...products[0][i],
          details: detailsProvisoire[0],
        },
      };
      productsDetail.push(productsProvisoire);
    }
    return productsDetail;
  } catch (error) {
    console.error(error);
  }
};

// UPDATE UN PRODUIT

const updateProductDetail = async (detail) => {
  return await db
    .query("UPDATE products SET ? WHERE id_products_details = ?", [
      detail,
      detail.id_products_details,
    ])
    .then((res) => res)
    .catch((err) => console.log(err));
};

const updateProduct = async (data) => {
  try {
    const details = [...data.details];
    delete data.details;
    const products = await db.query(
      "UPDATE products SET ? WHERE id_products = ?",
      [data, data.id_products]
    );

    const arr = await Promise.all(
      details.map(async (detail) => await updateProductDetail(details))
    );
    console.log(arr);
    console.log(products);
    return products;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findProduct,
  updateProduct,
};
