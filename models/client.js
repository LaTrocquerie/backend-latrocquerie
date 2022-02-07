const connection = require("../db-config");

const db = connection.promise();

const findClient = async (id) => {
  try {
    const clients = await db.query("SELECT * FROM clients WHERE id_pages = ?", [
      id,
    ]);
    const clientsDetail = [];
    for (let i = 0; i < clients[0].length; i++) {
      const detailsProvisoire = await db.query(
        "SELECT * FROM clients_details WHERE id_clients = ?",
        [clients[0][i].id_clients]
      );
      const clientsProvisoire = {
        component: "client",
        data: {
          ...clients[0][i],
          details: detailsProvisoire[0],
        },
      };
      clientsDetail.push(clientsProvisoire);
    }
    return clientsDetail;
  } catch (error) {
    console.error(error);
  }
};

// UPDATE UN CLIENT

const updateClientDetail = async (detail) => {
  return await db
    .query("UPDATE clients_details SET ? WHERE id_clients_details = ?", [
      detail,
      detail.id_clients_details,
    ])
    .then((res) => res)
    .catch((err) => console.log(err));
};

const udpateClient = async (data) => {
  try {
    const details = [...data.details];
    delete data.details;
    const client = await db.query("UPDATE clients SET ? WHERE id_clients = ?", [
      data,
      data.id_clients,
    ]);

    const arr = await Promise.all(
      details.map(async (detail) => await updateClientDetail(details))
    );
    console.log(arr);
    console.log(client);
    return client;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  findClient,
  udpateClient,
};
