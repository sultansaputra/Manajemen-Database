//Buatlah database no sql dengan model wide-coloumn dan masukkan min 5 data


db.bbm_wideColumn.insertMany([
  {
    name: "Pertalite",
    jenis: "Bensin",
    oktan: 90,
    harga: 10000,
    subsidi: true,
    keterangan: "Bensin subsidi RON 90"
  },
  {
    name: "Pertamax",
    jenis: "Bensin",
    oktan: 92,
    harga: 12400,
    subsidi: false,
    distribusi: ["SPBU", "Pertashop"],
    keterangan: "BBM non-subsidi RON 92"
  },
  {
    name: "Pertamax Turbo",
    jenis: "Bensin",
    oktan: 98,
    harga: 14500,
    kendaraan_sport: true,
    keterangan: "Cocok untuk mobil performa tinggi"
  },
  {
    name: "Dexlite",
    jenis: "Solar",
    cetane: 51,
    harga: 13020,
    subsidi: false,
    emisi: "Euro 4",
    keterangan: "Solar kualitas menengah"
  },
  {
    name: "Pertamina Dex",
    jenis: "Solar",
    cetane: 53,
    harga: 15000,
    emisi: "Euro 5",
    kendaraan_komersial: true,
    keterangan: "Solar kualitas tinggi"
  }
])

