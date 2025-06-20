//Buatlah database no sql dengan model key-value dan masukkan data minimal 5 data


db.bbm.insertMany([
  {
    key: "Pertalite",
    value: { name: "Pertalite", harga: 10000 }
  },
  {
    key: "Pertamax",
    value: { name: "Pertamax", harga: 12500 }
  },
  {
    key: "Pertamax_Turbo",
    value: { name: "Pertamax Turbo", harga: 14500 }
  },
  {
    key: "Dexlite",
    value: { name: "Dexlite", harga: 13500 }
  },
  {
    key: "Pertamina_Dex",
    value: { name: "Pertamina Dex", harga: 15000 }
  }
])

