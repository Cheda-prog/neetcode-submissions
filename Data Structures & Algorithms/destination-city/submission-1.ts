class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    destCity(paths: string[][]): string {

        let returner : string = "";
        let map : Map<string , string> = new Map<string, string>();
        let found = false;

        // make a record and the itteratete through them 
        for(let i = 0; i < paths.length; i++ ){
            map.set(paths[i][0], paths[i][1]);
        }



        for(let i = 0; i < paths.length; i++ ){
            returner = paths[i][0];

            for(let j = 0; j < paths.length; j++)
            {
                if(map.has(returner)){   
                    returner = map.get(returner)!;
                }else
                {
                    break;
                    // didn't start from the start
                }

                if(j === paths.length)
                {
                     found = true;
                }
                if(found)
                 break;
            }
        }

        return returner;
    }
}
