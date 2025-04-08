const parseString = (input:string| string[]): string | string[] => {
    if(Array.isArray(input)){
      return input.join('');
    } else {
      return input.split('');
    }
  }



  type parseStrIO = {
    (input: string): string[],
    (input: string[]): string
  }
  
  export const parseStr: parseStrIO = (input: any) => {
    if(Array.isArray(input)){
      return input.join("");
    }else{
      return input.split("");
    }
  }
  
  const inputStr = "jason";
  const inputArray = ["j", "a", "s", "o", "n"];
  const outputArray = parseStr(inputStr);
  const outputStr = parseStr(inputArray);
  
  console.log(inputStr, " ==> ", outputArray);
  console.log(inputArray, " ==> ", outputStr);
  console.log("TS detects an array: ", outputArray.includes('a'));
  console.log("TS detects an string: " , outputStr.toUpperCase());