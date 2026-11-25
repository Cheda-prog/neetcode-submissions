class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        // test case of string of size one 
        //let returner : Array<number>=  [];

        // start on both ends if 2 nums less decrease R 
        // if both nums more increase 
        let L = 0; 
        let  R = numbers.length -1; 
        let  temp = 0;


        while(true){
            temp = numbers[L] + numbers[R];
            //console.log(numbers[L] + "  " + numbers[R]);
            if(temp < target)
            {
                L++;
            }else if (temp > target)
            {
                R--;
            }else{
                return [L+1 , R+1];
            }
        }

       // return returner;
    }
}
