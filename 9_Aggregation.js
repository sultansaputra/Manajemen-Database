db.produk.aggregate([
  {
    $group: {
      _id: "$jenis",
      total_stok: { $sum: "$stok_liter" },
      rata_rata_harga: { $avg: "$harga" }
    }
  }
]);
