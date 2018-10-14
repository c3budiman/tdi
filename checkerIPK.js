function HitungNilaiAkhir(nilaiuts, nilaiuas) {
  return (nilaiuts*0.7)+(nilaiuas*0.3)
}

function CalcIPK(nilai_akhir) {
  if (nilai_akhir >= 0 && nilai_akhir < 40) {
    return ("E")
  } else if (nilai_akhir >= 40 && nilai_akhir < 60) {
    return ("D")
  } else if (nilai_akhir >= 60 && nilai_akhir < 70) {
    return ("C")
  } else if (nilai_akhir >= 70 && nilai_akhir < 85) {
    return ("B")
  } else if (nilai_akhir >= 85 && nilai_akhir <= 100) {
    return ("A")
  } else {
    return ("Undefined")
  }
}

function checkLulus(nilai_akhir) {
  if (nilai_akhir >= 0 && nilai_akhir < 40) {
    return ("Tidak Lulus")
  } else if (nilai_akhir >= 40 && nilai_akhir <= 100) {
    return ("Lulus")
  } else {
    return ("Undefined")
  }
}

module.exports = {HitungNilaiAkhir, CalcIPK, checkLulus}
