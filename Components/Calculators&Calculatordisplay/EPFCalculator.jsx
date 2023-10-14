import React from "react"
import MathJaxComponent from "../MathJax";

export default function EPFCalculator({userInp}){

    let primes = {}

   let tmp = userInp;

    for(let i = 2; i <= userInp; i++){
        //console.log(i)
        if(tmp % i == 0){
            if(i in primes){
                primes[i] += 1;
            }
            else{
                primes[i] = 1;
            }

            tmp = tmp/i;
            i = 1;

        }
        
        if(tmp == 1){
            break;
        }

    }

    const returnPrimes = 
    <div>
        {Object.keys(primes).map((key) => (
        <div key={key}>
            Prime: {key}, Frequency: {primes[key]}
        </div>
        )
    )}
    </div>

function findPhi(){
    let answer = 1;
    for (let key in primes) {
        //console.log(`Element ${key} occurs ${countMap[key]} times`);
        answer *= (Math.pow(key,primes[key]) - Math.pow(key,primes[key] - 1));
      }
    return answer;
}




    return(
        <div>
            <p>The primes and their frequency are:</p>
            {returnPrimes}
            <p>This will give the answer to <MathJaxComponent mathExpression={`$\\phi$(${userInp})`}/> as: </p>
            <h3>{findPhi()}</h3>
        </div>
    )
}