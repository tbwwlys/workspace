let x = 1, y = 2;
// 快速优雅的交换
[x, y] = [y, x];
console.log(x,y);

let arr = [1, 3, 11, 3, 5, 9];

const bubbleSort = arr => {
    console.time('冒泡排序耗时');
    const length = arr.length;
    
    for(let i = 0; i < length -1; i++) {
        let isSorted = true; // 本轮有序吗？
        for(let j = 0; j < length-i-1; j++) {
            
            if(arr[j] > arr[j + 1]) {
                // temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSorted = false;
            }
        }
        if(isSorted) {
            break;
        }
    }
    console.timeEnd('冒泡排序耗时');
    return arr;
    
}
bubbleSort(arr);
console.log(arr);