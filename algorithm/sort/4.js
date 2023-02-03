let arr = [1, 3, 11, 3, 5, 9];
const bubbleSort = arr => {
    console.time("优化了排序区域和提前退出");
    // 多声明变量，可以让我们放下一些思想
    // let tmp = 0; 
    let lastExchangeIndex = 0; //记录最后一次交换的位置
    let len = arr.length;
    let sortBorder = arr.length -1;// 已排好序的边界
    for(let i = 0; i < len; i++) {
        let isSorted = true; //是否可以直接退出
        //
        for(let j = 0; j < sortBorder; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if(isSorted) {
            break;
        }
    }
    console.timeEnd("优化了排序区域和提前退出");
    return arr;
    
}
bubbleSort(arr);
console.log(arr);