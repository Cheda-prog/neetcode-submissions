


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      

        s = s.toLowerCase().split(" ").join("");
        //let size = s.length;
        for(let i = 0 ; i < s.length; i++ )
        {   
            if(!isAlphanumeric(s[i]))
            {
             console.log(s);
                s = s.slice(0, i).concat(s.slice(i+1));
                 console.log(s);
                i--;
            }
        }


        //console.log(s);
        //s = s.toWellFormed();
        let L = 0, R =s.length -1;
        while(L <= R){

            if(s[L] != s[R]){
                console.log(s[L]+ "   " +  s[R]);
                return false;
            }
            L++;
            R--;
        }

        return true; 
    }
}


function isAlphanumeric(str: string): boolean {
  return /^[a-z0-9]+$/i.test(str);
}


