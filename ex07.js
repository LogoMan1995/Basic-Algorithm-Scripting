// 7. Повторить строку 


function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
  
    return accumulatedStr;
  }

 

  function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return "";
    } else {
      return str.repeat(num);
    }
  }
  
  console.log(repeatStringNumTimes("abc", 3)); 