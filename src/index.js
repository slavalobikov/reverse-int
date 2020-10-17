module.exports = function reverse (n) {
    n = String(Math.abs(n));
    n = n.split('');
    let sub = [];
    let res = '';
    for(let i = 0; i < n.length; i++) {
        sub[i] = n[n.length-1-i];
        res += sub[i]
    }
    return Number(res);
}
