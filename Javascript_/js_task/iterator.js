const obj = {
    [Symbol.iterator]: () => {
        let i = 0;
        return {
            next : () => {value : i++},
        };
    },
};

for(let v of iterator){
    console.log(v);
}