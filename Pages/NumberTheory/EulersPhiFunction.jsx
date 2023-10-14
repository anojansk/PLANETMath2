import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"
import EPFCalcDisplay from "../../Components/Calculators&Calculatordisplay/EPFCalcDisplay"

export default function EPF(){

	const EPFContent = `
	

The Euler phi function simply says the number of integers that are relative prime to a chosen integer $n$. 

That is, for any $n \\geq 1$ where $i = 1,..n-1$, $ \\phi (n)$ gives the number of integers, where $gcd(i,n) = 1$. \[\]

Lets look at an example. $\\\\$

\[ \\phi (16) = 8\] because,
\[gcd(1,16) = gcd(3,16) = gcd(5,16) = gcd(7,16) = gcd(9,16) = gcd(11,16) = gcd(13,16) = gcd(15,16) = 1.\] There are eight integers that are relatively prime to $16$.

Now for a number such as $16$ it is easy to count, however what if the numbers are greater? $71, 245, 600?$ How do we find $ \\phi (71),  \\phi (245),  \\phi (600)?$ 
Counting the way we did with  \\phi (16) will take way too much time. Luckily, we have a few rules we can apply to find the answers. \[\]

Rule 1:$\\\\$
	If n is a prime then \[ \\phi (n) = n - 1. \]

This states that the number of integers relatively prime to $n$ (given that $n$ is a prime) is $n-1$. Which makes sense, because a prime number can only be divided by itself, and a since we check $gcd(i,n)$ for $i = 1,...,n-1$, 
the gcd between them all will be $1$. 

An example is 
\[
    1+1 (Show \\ example)
\]

Rule 2: $\\\\$
	If $p$ is a prime and $k > 0$:
		\[ \\phi (p^k) = p^k - p^{(k-1)} = p^k (1- \\frac{1}{p}) \]

This rule states that if we take a prime $p$ to the power of an integer $k>0$, then the number of integers that are relatively prime to $p^k$ is $p^k-p^{(k-1)}$.\[\]
An example: $\\\\$ Lets look at  $\\phi (169)$. Finding  $\\phi (169)$ by checking every if every integer until $168$ is 
relatively prime to $169$ is unreasonable. Also $169$ is not a prime, hence the two methods we learned above won't work. However, $169 = 13^2$, now we learned a rule we can apply. Since 13 is a prime, we can see that: 
\[ \\phi (169) =  \\phi (13^2) = 13^2 - 13^1 = 169 - 13 = 156. \]
There are 156 integers from $1-168$ that are relatively prime to $169$. \[\]

Now lets look at an example where we might to combine the rules.  We want to find:$\\\\$ 

\[\\ \\phi (5040) \]
In this case we have to do the same as above and factorize the 5040. 
\[5040 =  2^4   \\cdot  3^2   \\cdot  5   \\cdot  7 \]
For $2^4$ we can use $p^k - p^{(k-1)}$ since $2$ is a prime. 
For $3^2$ we can use the same. 
For $5$ & $7$ we can use  $ \\phi (p) = p - 1 $ 
This will give us: 
\[ (2^4-2^3)   \\cdot  (3^2 - 3)   \\cdot  4   \\cdot  6 = 8   \\cdot  6   \\cdot  4   \\cdot  6 = 1152. \]

Is there a way to generalise this? Instead of thinking if we have to apply rule $1$, $2$ or having to count? Yes, there is. \[\]

Rule 3: $\\\\$
Let $n>1$ where $n$ can have the prime factorization 
 \[ p_1^{k_1}  \\cdot  p_2^{k_2}   \\cdot  \\ldots  \\cdot  p_r^{k_r} \]

Then, 
\[ \\phi (n) = (p_1^{k_1}-p_1^{(k_1-1)})   \\cdot  (p_2^{k_2}-p_2^{(k_2-1)})
      \\cdot \\  \\ldots \\  \\cdot  (p_r^{k_r}-p_r^{(k_r-1)}) 
= n(1- \\frac{1}{p_1})(1- \\frac{1}{p_2})  \\cdot \\ \\ldots \\  \\cdot (1- \\frac{1}{p_r}) \]

This states that given a integer $n$, to find the number of integers that a relatively prime to $n$, we want to factorize $n$ into a product of primes.
 After this we use the formula above to find  $\\phi (n)$.\[\]

Lets look at an example:$\\\\$
We want to find  $\\phi (2520)$
\[2520 = 2^3   \\cdot  3^2   \\cdot  5   \\cdot  7\]
Knowing this, we can use the formula above:
 \[\\phi (2520) = (2^3-2^2)   \\cdot  (3^2 - 3)   \\cdot  (5-1)  
     \\cdot  (7-1) = 4   \\cdot  6   \\cdot  4   \\cdot  6 = 576\]

Hence, the number of integers that are relatively prime to $2520$ is $576$.  

As you may notice, the formula we used is the general way rule that works for all integers. 


   `
    
	return(
		<div>
         <h3>In this section we will look at the Euler Phi-Function and some if its properties. .</h3>
		<MathJaxComponent mathExpression={EPFContent} />
		<EPFCalcDisplay />
      <TestYourSelf themeInput = "EPF" />
		</div>
	)

}