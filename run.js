const readline = require('readline');
const {HitungNilaiAkhir, CalcIPK} = require('./checkerIPK')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log('------------------------------------------------------')
console.log('Program Checker IPK with vanilla node.js and testing')
console.log('------------------------------------------------------')

rl.question('Nama : ', (nama) => {
  rl.question('NPM : ', (npm) => {
    rl.question('Nilai UTS: ', (uts) => {
      rl.question('Nilai UAS: ', (uas) => {
        console.log('')
        console.log(`Dear ${nama} (${npm}), `);
        console.log(`Nilai Akhir ${HitungNilaiAkhir(uts,uas)}`);
        console.log(`IPK : ${CalcIPK(HitungNilaiAkhir(uts,uas))}`);
        rl.close();
      });
    });
  });
});
