
// console.log(permutation('abc'))

const isPermutationExisted = (s, inputStr) => {
    const permutation = (str) => {
        let ans = []
        str  = str.split('').sort((a, b) => {
            return a > b ? 1 : -1
        }).join('');
        console.log(str,typeof str)
        //深度优先
        // 递归  
        // dfs('', str) // 当时的状态，开始 是控制符串， 可选的是整个字符串
    
        // curr 已选择的字符 store 待选择的字符
        // 
        const dfs = (curr, store) => {
            // 退出条件
            if(!store.length) {
                return ans.push(curr)
            }
            for(let i = 0; i < store.length; i++) {
                // 在store选择时排除重复的内容
                if(i > 0 && store[i] == store[i - 1]) continue
                dfs(curr+store[i], store.slice(0, i) + store.slice(i+1))
            }
        }
        dfs('', str)
        return ans
    }
    const res = permutation(s)
    return res//res.includes(inputStr)
}
console.log(isPermutationExisted('abb'))
