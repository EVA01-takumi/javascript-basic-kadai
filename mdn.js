const toy = new Date();
 const year = toy.getFullYear();
 const month = toy.getMonth() + 1;
 const day = toy.getDate();
  
console.log(`${year}年${month}月${day}日`);



/*
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるので +1 する
const day = today.getDate();
console.log(`${year}年${month}月${day}日`); // 例: 2025年2月23日
*/