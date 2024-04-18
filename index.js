let arr = [1, 2, 3, 4, 5];


// polyfill for map
Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        temp.push(cb(this[index], index, this));
    }

    return temp;
}

// console.log("map : " + arr.map((r, i) => r + i));
// console.log("myMap : " + arr.myMap((r, i) => r + i));


// polyfill for filter
Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let index = 0; index < this.length; index++) {
        if (cb(this[index], index, this)) {
            temp.push(this[index]);
        }
    }
    return temp;
}

// console.log("filter : " + arr.filter((r) => r % 2 === 0));
// console.log("myFilter : " + arr.myFilter((r) => r % 2 === 0));

// polyfill for forEach
Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
        cb(this[index], index, this);
    }
}

// arr.forEach(el => {
//     console.log("forEach :" + el);
// });

// arr.myForEach(el => {
//     console.log("myForEach :" + el);
// });

// polyfill for reduce
Array.prototype.myReduce = function (cb, initValue) {
    let accumlator = initValue;

    for (let index = 0; index < this.length; index++) {
        accumlator = accumlator ? cb(accumlator, this[index], index, this) : this[index];
    }

    return accumlator;
}
