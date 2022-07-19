
let str = "";
let numbers = [];
let operations = [];


function display(id) {
    console.log(numbers, operations)
    if (id === "AC") {
        str = "";
        numbers = [];
        operations = [];
        document.querySelector(".screen").innerHTML = 0;
    }
    else {

        if (id !== "+" && id !== "-" && id !== "*" && id !== "/" && id !== "=" && id !== "AC") {
            str += id;
            document.querySelector(".screen").innerHTML = str;
        }
        if (id === "+" || id === "-" || id === "*" || id === "/" || id === "=" || id === "AC") {
            let arr = str.split(id);
            numbers.push(Number(arr[0]))
            operations.push(id);
            str = "";
        }

        if (operations.length > 1 || numbers.length === 2) {

            let currOperator = operations[0];

            if (currOperator === "+") {
                let res = Number(numbers[0]) + Number(numbers[1])
                numbers = [res]
                operations.shift();
                document.querySelector(".screen").innerHTML = res;
                console.log(numbers, operations)
            }
            if (currOperator === "-") {
                let res = Number(numbers[0]) - Number(numbers[1])
                numbers = [res]
                operations.shift();
                document.querySelector(".screen").innerHTML = res;
                console.log(numbers, operations)
            }
            if (currOperator === "*") {
                let res = Number(numbers[0]) * Number(numbers[1])
                numbers = [res]
                operations.shift();
                document.querySelector(".screen").innerHTML = res;
                console.log(numbers, operations)
            }
            if (currOperator === "/") {
                let res = Number(numbers[0]) / Number(numbers[1])
                numbers = [res]
                operations.shift();
                document.querySelector(".screen").innerHTML = res;
                console.log(numbers, operations)
            }
            if (currOperator === "=") {
                let res = Number(numbers[0])
                numbers = [res]
                operations.shift();
                document.querySelector(".screen").innerHTML = res;
                console.log(numbers, operations)
            }
        }
    }
}

