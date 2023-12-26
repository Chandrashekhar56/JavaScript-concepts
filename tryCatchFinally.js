const test = () => {
    try {
        let a = 10;
        let result = a / 0;
        return result; 
    } catch (e) {
        return e;
    }
    finally
    {
        return 'pahle apna logic dekh kar';
    }
};

let res = test();
console.log(res);
