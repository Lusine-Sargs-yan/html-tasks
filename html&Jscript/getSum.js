const arr = [1, 2, 3, 4, 5];
const getSumOfArray = (arr) => {
    return arr.reduce((acc, elem) => acc + elem, 0);
};
console.log(getSumOfArray(arr));
