db.produk.bulkWrite([
  {
    insertOne: {
      document: { jenis: "Pertamax_turbo", harga: 15000000, stok: 1000}
    }
  },
  {
    updateOne: {
      filter: { jenis: "Pertalite" },
      update: { $set: { harga: 9000 } }
    }
  },
  {
    deleteOne: {
      filter: { jenis: "Pertamax" }
    }
  }
]);
