function sum(num) {
    let arr = [1, 1, 2, 3, 5, 7] // this is array provide us the explosive sum (p(n)) upto 3 at first time but it will store all explosive sum which we want to know.
    if (num < 6 && num>0) {
        return arr[num];
    }
    else if (num > 5) {
       let c = [1];  // this array represented the formula for p(n) = p(n-d[i])+p(n-d[i])-p(n-d[i])-p(n-d[i])+...
       let y = [];// this one store the value p(n-d[i]) for every one in the p(n) recurrence 
       let f = 0;
        
        for (let g = 1; g <= (num ); g++) { //this for will perform partition recurrence 

            c.push((c[c.length - 1]) + g);

            c.push((c[c.length - 1]) + (2 * g + 1));
          
        } 
     
        for (let j = 6; j <= num; j++){// this loop help to find num-1, ... or j til equal to num;
            for (let r = 0; r < j ; r++){  // this loop find the value for every one of p(n) recurrence and push the value to store place y for specific j 
                    (j - c[r] >= 0 && r <= j) ? y.push(arr[(j - c[r])]) : y;
                r++
                    (j - c[r] >= 0 && r <= j) ? y.push(arr[(j - c[r])]) : y;
                r++;
                    (j - c[r] >= 0 && r <= j ) ? y.push((-1 * arr[(j - c[r])])) : y;
                r++;
                (j - c[r] >= 0 && r <= j) ? y.push((-1 * arr[(j - c[r])])) : y;
            }

            y.map((i) => f += i);  // this function will provide explosive sum for j
            console.log("explosive sum for " + j, "is " + f);
            arr.push(f);  // this will update the explosive sum sequence for numbers from 1 to the new j until j equal to the input num
            y = [];
            f = 0;
        }
        return arr[num]
    }
}
console.log(sum(15));