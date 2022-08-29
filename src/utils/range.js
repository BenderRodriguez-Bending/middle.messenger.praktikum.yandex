export function range(start = 0, end, step = 1, isRight = false) {
    let result = [];
    if (end === undefined){
        end = start;
        start = 0;
    }

    for (let n = Math.abs(start); n < Math.abs(end); n += Math.abs(step === 0 ? 1 : step)) {
        if (step === 0){
            result.push(start);
        }else {
            result.push(n);
        }
    }

    if (start < 0 || end < 0 || step < 0){
        result = result.map(item => item !== 0 ? -Math.abs(item) : item);
    }

    if (isRight){
        result = result.reverse();
    }

    return result;
}