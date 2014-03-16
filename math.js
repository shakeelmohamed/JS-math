function factorial(n) {
    var result = 1;
    for(var i=1; i<=n; i++){
        result = result * i;
    }
    return result;
}

function combination(n, r) {
    if(!n || n<r || !r || n < 0 || r < 0) {
        throw new Error("GO AWAY, invalid values");
    }
    var num = factorial(n);
    var denom = factorial(r)*factorial(n-r);
    return num/denom;
}
