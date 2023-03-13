var moveZeroes = function(nums) {
    if(nums.length === 0) {
        return
    }
    let j= 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[j++] = nums[i]
        }
    } 
    for(let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }
}