db.produk.find({
  $and: [
    {stok_liter: {$lte: 1000}},
    {jenis: "Pertalite"}
  ]
});
