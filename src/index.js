module.exports = function multiply(first, second) {
  // your solution
  let arrayFirst = [];
  let arraySecond = [];
  let tempArray = [];
  let resultArray = [];
  let newItem = 0;
  let inMemory = 0;
  let inMemory2 = 0;
  let resultString = '';
  let rs = 0;
  
  if (+first >= +second)
  {
    arrayFirst = Array.from(first.toString());
    arraySecond = Array.from(second.toString());
  }
  else
  {
    arrayFirst = Array.from(second.toString());
    arraySecond = Array.from(first.toString());
  }

  for (let i = arraySecond.length - 1; i >= 0; i--)
  {
    for (let j = arrayFirst.length - 1; j >= 0; j--)
    {
        tempArray.push((arrayFirst[j] * arraySecond[i] + inMemory) % 10);
        inMemory = Math.trunc((arrayFirst[j] * arraySecond[i] + inMemory) / 10);
    }
    if (inMemory != 0) {
        tempArray.push(inMemory);
     }
    inMemory = 0; 
    if (resultArray.length != 0)
        { 
            for (let k = 0; k < tempArray.length; k++)
                {
                    let n = k + rs;
                    if (n < resultArray.length){
                        newItem = (resultArray[n] + tempArray[k] + inMemory2)%10;
                        inMemory2 = Math.trunc((resultArray[n] + tempArray[k] + inMemory2) / 10);
                        resultArray.splice(n, 1, newItem);
                    }
                    else {
                        newItem = (tempArray[k] + inMemory2)%10;
                        inMemory2 = Math.trunc((tempArray[k] + inMemory2) / 10);
                        resultArray.push(newItem);
                        if (inMemory2 != 0) {
                            resultArray.push(inMemory2);
                        }  
                    }
                }
        }
               
    else 
        {
            for (let k = 0; k < tempArray.length; k++)
                {
                    resultArray[k] = tempArray[k];
                }
        }
    rs++; //rs - rank shift
    tempArray.length = 0;
    inMemory2 = 0;
    
  }
    resultArray.reverse();
    for (let k = 0; k < resultArray.length; k++ )
    {
        resultString += resultArray[k];
    }
    
    return resultString;
}
