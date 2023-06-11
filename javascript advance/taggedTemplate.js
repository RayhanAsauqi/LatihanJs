// //Tagged Templates

// const nama = "Rayhan Alsauqi";
// const umur = 20;

// function coba(strings, ...values) {
//   //   let result = "";
//   //   strings.forEach((str, i) => {
//   //     result += `${str} ${values[i] || ""}`;
//   //   });
//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, Nama saya  ${nama}, Umur saya ${umur} tahun.`;
// console.log(str);

//Highlight

const nama = "Rayhan Alsauqi";
const umur = 20;
const email = "reyhanalsauqi12@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class='hl'>${values[i] || ""} </span>`,
    ""
  );
}

const str = highlight`Halo, Nama saya  ${nama}, Umur saya ${umur} tahun email saya: ${email}`;

document.body.innerHTML = str;

//library

//1.Translation & Internationalization :
//https://github.com/skolmer/es2015-i18n-tag

//Styled Components
//https://www.styled-components.com/docs/basics#getting-started

function simpleArraySum(ar) {
  // Write your code here
  const jml = [1, 2, 3, 4, 10, 11];
  return ar;
}
