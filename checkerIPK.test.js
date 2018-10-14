const {HitungNilaiAkhir, CalcIPK, checkLulus} = require('./checkerIPK')
//kalo ga ngerti es 6 sederhananya gini nih kalo di breakdown kodingan di bawah :
// test('Hitung Nilai Akhir, uts 70 uas 70 => 70', sometest);
//
// function sometest () {
//   expect(HitungNilaiAkhir(70,70)).toBe(70);
// }

test('Hitung Nilai Akhir, uts 70 uas 70 => 70', () => {
  expect(HitungNilaiAkhir(70,70)).toBe(70);
})

test('Hitung Nilai Akhir, uts 60 uas 80 => 66', () => {
  expect(HitungNilaiAkhir(60,80)).toBe(66);
})

test('Hitung IPK, Nilai Akhir 10 => E', () => {
  expect(CalcIPK(10)).toBe("E");
})

test('Hitung IPK, Nilai Akhir 40 => D', () => {
  expect(CalcIPK(40)).toBe("D");
})

test('Hitung IPK, Nilai Akhir 65 => C', () => {
  expect(CalcIPK(65)).toBe("C");
})

test('Hitung IPK, Nilai Akhir 75 => B', () => {
  expect(CalcIPK(75)).toBe("B");
})

test('Hitung IPK, Nilai Akhir 90 => A', () => {
  expect(CalcIPK(90)).toBe("A");
})

test('Hitung IPK, uts 60 uas 80 => C', () => {
  expect(CalcIPK(HitungNilaiAkhir(60,80))).toBe("C");
})

test('Hitung kelulusan nilai akhir : 30 => Tidak Lulus', ()=> {
  expect(checkLulus(30)).toBe("Tidak Lulus");
})

test('Hitung kelulusan nilai akhir : 50 => Lulus', ()=> {
  expect(checkLulus(50)).toBe("Lulus");
})

test('Hitung kelulusan uts 60, uas 80 => Lulus', ()=> {
  expect(checkLulus(HitungNilaiAkhir(80,60))).toBe("Lulus");
})

test('Hitung kelulusan uts 10, uas 10 => Tidak Lulus', ()=> {
  expect(checkLulus(HitungNilaiAkhir(10,10))).toBe("Tidak Lulus");
})

test('Hitung Nilai Akhir, uts abc uas 90 => Input Uts atau Uas bukan angka!', () => {
  expect(HitungNilaiAkhir("abc","90")).toBe("Input Uts atau Uas bukan angka!");
})

test('Hitung Nilai Akhir, uts 90 uas abc => Input Uts atau Uas bukan angka!', () => {
  expect(HitungNilaiAkhir("90","abc")).toBe("Input Uts atau Uas bukan angka!");
})

test('Hitung Nilai Akhir, uts abc uas abc => Input Uts atau Uas bukan angka!', () => {
  expect(HitungNilaiAkhir("abc","abc")).toBe("Input Uts atau Uas bukan angka!");
})

test('Hitung IPK, Nilai Akhir 101 => Undefined', () => {
  expect(CalcIPK(101)).toBe("Undefined");
})

test('Hitung IPK, Nilai Akhir -1 => Undefined', () => {
  expect(CalcIPK(-1)).toBe("Undefined");
})

test('Hitung kelulusan nilai akhir : 101 => Undefined', () => {
  expect(checkLulus(101)).toBe("Undefined");
})

test('Hitung kelulusan nilai akhir : -1 => Undefined', () => {
  expect(checkLulus(-1)).toBe("Undefined");
})
