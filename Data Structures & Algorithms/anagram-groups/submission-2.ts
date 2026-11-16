class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let returner : string[][] =[]; 
        let map = new Map<string , number>
        // name  and index

        let size  = strs.length; 
        let index =0;
        let count = 0;
        let temp : string = "";
        for(let i =0 ; i < size; i++){
            temp = strs[i];
            temp = temp.split("").sort().join("");
            //console.log(temp);
            if(map.has(temp))
            {
                index = map.get(temp)!
                returner[index].push(strs[i]);
            }else{
                map.set( temp , count );
                let push = new Array<string>;
                push.push(strs[i]);
                returner.push(push);
                count++; 
            }

        }

        return returner;
    }
}
