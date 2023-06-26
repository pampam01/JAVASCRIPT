// cara membuat dan memakainya seperti satic class filed


class MAthSUm{
    static sum(... values){
        let result = 0;
        for(const value of values){
            result += value;
        }

        return result;
    }
}

console.log(MAthSUm.sum(1,1,1,1,1));