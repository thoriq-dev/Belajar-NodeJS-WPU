// Synchronous
// const getUserSync = (id) => {
//   //   let nama = "";
//   //   if (id === 1) {
//   //     nama = "Thoriq";
//   //   } else {
//   //     nama = "Fikri";
//   //   }

//   // Menggunakan Operator Ternary
//   const nama = id === 1 ? "Thoriq" : "Fikri";
//   return { id, nama };
// };
// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const passwordWifi = "Minta Password Wifi";
// console.log(passwordWifi);

// Asynchronous

// const getUser = (id, callBack) => {
//   const time = id === 1 ? 3000 : 2000;
//   setTimeout(() => {
//     const nama = id === 1 ? "Thoriq" : "Fikri";
//     callBack({ id, nama });
//   }, time);
// };

// const userSatu = getUser(1, (hasil) => {
//   console.log(hasil);
// });

// const userDua = getUser(2, (hasil) => {
//   console.log(hasil);
// });

// const passwordWifi = "Minta Password Wifinya";
// console.log(passwordWifi);
// console.log("Proses Selesai");

// Contoh Lain Asynchronous

// function tanyaKabar(nama) {
//   console.log("Apa Kabar", nama);
// }

// function katakanHallo(nama) {
//   console.log("Hello", nama);
// }

// katakanHallo("Thoriq");
// tanyaKabar("Fikri");

// Contoh Asynchronous Callback Menggunakan Anonymous
// function cekTahun(callback) {
//   setTimeout(function () {
//     callback(new Date().getFullYear());
//   }, 2000);
// }

// // cekTahun(function (tahun) {
// //   console.log("Sekarang adalah Tahun: ", tahun);
// // });

// // Contoh Asynchronous Callback Menggunakan Naming
// function tampilkanTahun(tahun) {
//   console.log("Sekarang adalah tahun: ", tahun);
// }

// cekTahun(tampilkanTahun);

// function cekTanggal() {
//   return setImmediate(function () {
//     return new Date().getDate();
//   });
// }
// const tanggal = cekTanggal();
// console.log("Sekarang tanggal: ", tanggal);

// function getAllUsers(url, callback) {
//   fetchAllUsers(url, function (error, response) {
//     processData(response.data, function (error1, data1) {
//       if (error1) {
//         return callback(error1);
//       }

//       processData1(data1, function (error2, data2) {
//         if (error2) {
//           return callback(error2);
//         }

//         processData2(data2, function (error3, data3) {
//           if (error3) {
//             return callback(error3);
//           }

//           processData3(data3, function (error4, data4) {
//             if (error4) {
//               return callback(error4);
//             }

//             callback(null, data4);
//           });
//         });
//       });
//     });
//   });
// }

// getAllUsers("https://localhost:3000/api/v1/users/", function (error, hasil) {
//   if (error) {
//     // Handle error
//     console.log(error);
//   } else {
//     // Proses data
//     console.log(hasil);
//   }
// });

// getAllUsers(url)
//   .then((users) => {
//     // do something with
//     return users;
//   })
//   .then((results) => {
//     // ...
//   })
//   .then((result) => {
//     // ...
//   })
//   .catch((error) => {
//     console.error(error);
//   });

async function processUsers() {
  const users = await getAllUsers();

  const resultA = await processUser1(users);
  const resultB = await processUser2(resultA);
  const resultC = await processUser3(resultB);
  const finalResult = await createToken(users, resultC);

  return finalResult;
}
