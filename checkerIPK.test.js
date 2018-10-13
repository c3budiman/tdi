const {HitungNilaiAkhir, CalcIPK} = require('./checkerIPK')

test('Hitung Nilai Akhir, uts 70 uas 70 => 70', () => {
  expect(HitungNilaiAkhir(70,70)).toBe(70);
})

test('Hitung Nilai Akhir, uts 60 uas 80 => 66', () => {
  expect(HitungNilaiAkhir(60,80)).toBe(66);
})

test('Hitung IPK, Nilai Akhir 10 => E', () => {
  expect(CalcIPK(10)).toBe("E");
})

test('Hitung IPK, Nilai Akhir 42 => D', () => {
  expect(CalcIPK(42)).toBe("D");
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

test('Hitung IPK, Nilai Akhir Out Of Range => Undefined', () => {
  expect(CalcIPK(101)).toBe("Undefined");
})
