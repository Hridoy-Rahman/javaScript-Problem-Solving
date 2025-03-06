
function outerFunction() {

  let count = 0;  // Outer function variable
  
  return function innerFunction() {

    count++;  

    console.log(`Count: ${count}`);

  };

}

const counter = outerFunction();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

