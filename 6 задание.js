let arr = [4, 5, 5, 5];
let x = true;
for (let i = 0; i < arr.length; i++) {
    if (arr[0] !== arr[i])
    {x = false};
};
console.log(x)