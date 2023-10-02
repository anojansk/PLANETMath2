import React from "react"
import MathJaxComponent from "../../../Components/MathJax"
import TYMini from "../../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../../Components/TestYourSelf/TestYourSelf"


export default function RSA(){

    const RSAContent =  `
 

The algorithm goes as following:

Alice and Bob wants to communicate with eachother. 
Bob picks two distinct primes $p$ and $q$, and multiplies them together: 
			
					\[n = pq\]

Together with this he chooses an exponent $e$, such that; 


        \[ gcd(e,(p-1)(q-1)) = 1.\]

In other words find an $e$ such that the $gcd$ between $e$ and the 
product of $p-1$ and $q-1$ is $1$.  

From here Bob sends Alice the keypair $(n,e)$. 

Alice now writes her message as $m$ (in the case that the message is greater than $n$, she will break the message $m$ into blocks, where each is less than $n$).

Alice now computes 
				\[c ≡ m^e \\ (mod \\ n) \]

After calculating $c$ she sends this to Bob. 

Since Bob knows $p$ and $q$ he calculates $(p-1)(q-1)$ and sends Alice a decryption exponent $d$ where,

	\[de ≡ 1 \\ (mod \\ (p-1)(q-1)) \]

Given that Alice has found a exponent $d$, she calculates $m$, 

	\[m ≡ c^d \\ (mod \\ n) \]


Bob can herefrom read the message. 


Here is an example:

Let $p = 17$, $q = 31$ this means, 
$n = 17\\cdot31 = 527$.

Let $e$ (the exponent component) be a number such that,

\[gcd(e, 16\\cdot30) = 1 \\rightarrow gcd(e,480) 
= 1 \\rightarrow e = 7\]

There are many choices you can choose between here to find $e$. 

Now the values of $n$ and $e$ are sent to Alice those are $527$ and $7$

For simplicity lets say Alice sends a message $m$ : The number 46.

Alice then computes, 
\[c ≡ m^e (mod \\ n) \\\\
    \\rightarrow c ≡ 46^7 \\ (mod \\ 527) \\\\ ≡ 364 (mod \\ 527)\]

Bob now calculates, $7d ≡ 1 \\ (mod \\ 480)$.

By the use of the extended euclidian algorithm (Link coming soon)

\[
7a + 480b = 1 \\\\

480 = 68 \\cdot 7 + 4 \\\\
7 = 1 \\cdot 4 + 3 \\\\
4 = 1 \\cdot 3 + 1 \\\\
3 = 1 \\cdot 3 + 0
\]
This means: 
\[
1 = 4 + (-1) \\cdot 3\\\\
  = 4 + (-1)(7 - 1 \\cdot 4) = 2 \\cdot 4 + (-1) \\cdot 7\\\\
  = 2 \\cdot (480 - 68 \\cdot 7) + (-1) \\cdot 7 = 2 \\cdot 480 + (-137) \\cdot 7 \]

Meaning the solution to the equations: 
$7d ≡ 1 \\ (mod \\ 480)$, is true for $d = -137 \\ (mod \\ 480) = 343 
\\  (mod \\ 480)$

Now that we have found  $d = 343$, 

Bob can compute $c^d \\ (mod \\ n)$
\[ c = 364, d = 343, n = 527. \] 




    `


    return(
        <>
        <h3>In this section we will take a look at the RSA algorithm.</h3>
        <MathJaxComponent mathExpression={RSAContent}/>
       <p> For this we need a bigger <a href="https://www.omnicalculator.com/math/power-modulo">calculator</a>,
        and after inserting the values, we get the answer 
       which is 46. This is the message we started with.</p>
       <TestYourSelf themeInput = "RSA" />
        </>
    )
}