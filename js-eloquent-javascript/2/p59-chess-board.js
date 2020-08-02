const size = 7;

for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        row += " ";
      } else {
        row += "#";
      }
    } else {
      if (j % 2 === 0) {
        row += "#";
      } else {
        row += " ";
      }
    }
  }
  console.log(row);
}
/* for(let i = 0; i < size; i++){
  if(i % 2 ===0 ){
    console.log(" #".repeat(size/2));
  } else {
    console.log("# ".repeat(size/2));
  }
}  */