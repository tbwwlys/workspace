var climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    let pre = 2;
    let prePre = 1;
    let result = 0;
    for(let i = 3; i <= n; i++) {
        result = pre + prePre;
        prePre = pre;
        pre = result;
    }
    return result;

};
console.log(climbStairs(3));