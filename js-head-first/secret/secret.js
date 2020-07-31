function getSecret(file, secretPassword){
  superSecretFile.opened = superSecretFile.opened + 1;
  if (secretPassword == file.password) {
    return file.contents;
  } 
  else {
    return "Invalid password! No secret for you.";
  }
}
function setSecret(file, secretPassword, secret){
  if (secretPassword == file.password) {
    superSecretFile.opened = 0
    file.contents = secret;
  } 
}
var superSecretFile = {
  level: "classidied",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
};
var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, superSecretFile.password, "Dr. Evel's next meeting is in Philadelphia.");
var secret = getSecret(superSecretFile, 2);
console.log(secret);