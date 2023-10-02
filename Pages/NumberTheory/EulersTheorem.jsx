import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TYMini from "../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function ET(){

	const ETContent = `
	
    In the prevoius section we learned about the <link>Euler Phi Function. Now we can use this for Eulers theorem. 

    Eulers theorem states: 
        If  $n \\geq 1$ and $gcd(a,n) = 1$ then, 
       \[a^ \\phi(n)  \\  ≡  \\ 1 \\ (mod \\ n) \]
    
    This tells us that an integer $a$ to the power of the Euler Phi-Function of $n$ is congruent to one modulo $n$. 
    
    Lets look at a few examples: 
    \[\]
    
    1. 
    Find $ \\phi(24)$ and solve \[11^8  \\  ≡  \\ \\ ? \\ (mod \\ 24)\]
    This question is self explanatory, however it is to see if we can make the connection between the phi-function and congruence. 
    \[ \\phi(24) =  \\phi(2^3  \\cdot    3) = 4  \\cdot    2 = 8 \]
    
    To solve $11^8  \\  ≡  \\ ? \\ (mod \\ 24)$, we need to check if $gcd(11,24) = 1$, which is true. Therefore Eulers theorem can be used and we get: 
    
    \[11^8  \\  ≡  \\ 11^{\\phi(24)}  \\  ≡  \\ 1 \\ (mod \\ 24)\]
    
    2. Use eulers theorem and show \[3^{343}  \\  ≡  \\ 87 \\ (mod \\ 140)\]
    Hint (140 = 2^2  \\cdot    5  \\cdot    7)
    
    To solve this we need can start to find $ \\phi(140)$, from the hint we know the prime factorization. Hence;
    \[ \\phi(140) = 2  \\cdot 4  \\cdot  6 = 48\]
    
    Since $gcd(3,140) = 1$, we know that: 
    
    \[3^{48}  \\  ≡  \\ 1 \\ (mod \\ 140)\] we can try to find a way to express $343$ into $48$ such that we can simply the term. 
    
    \[3^{343}  \\  ≡  \\ 3^{(48 \\cdot   7 + 7)} \\  ≡ 
     \\ 3^{(48 \\cdot   7) } \\cdot    3^7  \\\\  ≡  \\ (3^48)^7  \\cdot    3^7  \\  ≡  \\ 1^7  \\cdot    3^7
     \\  ≡  \\ 3^7 \\ (mod \\ 140) \]
    
    Now we can easily use a calculator to find $3^7 = 2187$. 
    Hence \[2187  \\  ≡  \\ 87 \\ (mod \\ 140)\]
    
    This means the rest we get by taking $3^{343 }/ 140$ is $87$. 

   `
    
	return(
		<div>
         <h3>In this chapter we will take a look at the Eulers Theorem.</h3>
		<MathJaxComponent mathExpression={ETContent} />
      <TestYourSelf themeInput = "ET" />
		</div>
	)

}