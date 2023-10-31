let link = "https://my-site.com/about";

if (!link.endsWith("/") && link.includes("my-site")) {
  link += "/";
}
console.log(link);

// let link = "https://someone.com/about";

// if (!link.endsWith("/") && link.includes("my-site")) {
//   link += "/";
// }
// console.log(link);
