numbers = [
  {
    name: "Ten",
    digit: 10
  },
  {
    name: "hundreds",
    digit: 100
  },
  {
    name:"thousand",
    digit: 1000
  },
  { 
      name: "Ten-Thousand", 
      digit: 10000 
  },
  {
    name: "Hundred Thousand",
    digit: 100000
  },
  {
    name: "One Million",
    digit: 1000000
  },
  {
    name: "Ten Million",
    digit: 10000000
  }
];



const calculate = () => {
  //     numbers.filter()
  //     if (number ===  numbers[i].) {
  //     return number[i]
  //   }

  let result = 
  numbers[0].name
  document.getElementById("result").innerHTML = numbers[0].name;
  console.log(result);



  return numbers;
};



console.log(calculate(1000));
console.log("Number: ", numbers[0].name);
