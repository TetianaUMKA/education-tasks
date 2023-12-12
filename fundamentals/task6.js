let link = "https://my-site.com/about";

if (!link.endsWith("/")) {
  link += "/";
}
console.log(link);

let userName = "pokrovka";
let newUserName = "";
if (!userName.startsWith("@")) {
  newUserName = "@" + userName;
}
console.log(newUserName);
