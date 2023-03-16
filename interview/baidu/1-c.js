const permutation = (str) => {
    const ans = []
    str = str.split('').sort((a, b) => {
        return a > b ? 1 : -1;
    }).join('');
    const dfs = (curr, store) => {
        if(!store.length) {
            return ans.push(curr)
        }
        for(let i = 0; i < store.length; i++) {
            if(i > 0 && store[i] == store[i -1]) continue
            dfs(curr + store[i], store.slice(0, i) + store.slice(i+1))
        }
    }
    dfs('', str)
    return ans
}
console.log(permutation('acb'))
const a = 'abc';
console.log(a.slice(0, 1))
