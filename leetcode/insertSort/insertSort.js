



const insert = (arr) => {
    let len = arr.length;
    let temp;
    for(let i = 1; i < len; i++) {
        let j = i;
        temp = arr[j];
        while(j > 0 && arr[j -1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr
}
console.log(insert([3,4,5,1,2,6]))


const itn = (arr) => {
    const len = arr.length;
    let temp;
    for(let i = 1; i < len; i++) {
        let j = i;
        temp = arr[j];
        while(j > 0 && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
}
console.log(itn([3,4,5,1,2,6]))