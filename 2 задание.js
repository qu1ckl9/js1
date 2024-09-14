let x = "qwerty";
let res;

if (typeof x === 'symbol') {
    res = "Тип x - символ";
} else if (isFinite(x)) {
    res = "x - число";
} else if (typeof x === "string") {
    res = "x - строка";
} else if (typeof x === "boolean") {
    res = "x - логическое";
} else {
    res = "Тип x не определен";
}

console.log(res);