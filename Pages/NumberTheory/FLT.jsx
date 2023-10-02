
import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TYMini from "../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function FLT(){

    const FLTContent = `
Fermats little theorem states: 
	Let $p$ be a prime and let $a$ be an integer such that $p \\nmid a$ then,
    
    \[
    a^{(p-1)} ≡ 1 \\ (mod \\ p)
    \]


Lets deep dive into this formula, this formula states that for an integer $a$ if $p$ does not divide $a$, in other words $p \\neq a \\cdot n$, where $n$ is also another integer then the formula above holds.


Another way of writing the formula above is:
	If $p$ is a prime then, 
    \[
    a^p ≡ a \\ (mod \\ p)
    \]

In this case $p \\mid a$. If $p \\nmid a$, then this is fermat's little theorem but with $a$ multiplied on both sides og the equation. If $p$ does divide $a$ then $a^p ≡ 0 ≡ a \\ (mod \\ p)$,
hence it works for both cases either, when $p \\mid a$ or when $p \\nmid a$. 

Now lets look at a few examples:\[\]

$1.$ Find the congruence of $18^{13} \\ (mod \\ 13)$
To find out if we can use FLT, we have to check is $p \\nmid a$. Since $p = 13$ and $a = 18$, we have $gcd(13,18) = 1$, hence $p \\nmid a$. 
From FLT we therefore know 18^13 ≡ 1 (mod 13).\[\]

$2.$ Lets find the congruence of 

$2^{137} \\ (mod \\ 17)$
To find this we have to see if we can apply fermat's little theorem we first have to see 
if $gcd(2,17) = 1$, which is true. Further, need to rewrite $2^{137}$ such that a factor can be simplified. How can we simplify it? If we can write a part
of $2^{128}$ such that we get $2^{16}$ then we can simplfy it to 1 because of Fermat's little theorem. 


\[
2^{137} = 2^{(16 \\cdot \\ 8+9)} = 2^{(16 \\cdot 8)} \\cdot 2^9 = (2^{16})^8  \\cdot 2^9 ≡ 1^8 \\cdot 2^9 \\ (mod \\ 17)
 ≡ 512 \\ (mod \\ 17) ≡ 2 \\ (mod \\ 17)
\]


$3.$ What is the rest of
\[ 
    
    \\frac{5^{3197}}{7^{2 \\cdot 13}}

\]
This can be written as 

\[
5^{3197} ≡ \\ ? \\ (mod \\ 637)
\]

First we need to check if $gcd(5,637) = 1$, this is true, therefore Fermats little theorem can be used. 
Now we want to find a way to rewrite $3197$ such that we can simplify a factor that contains the power of $637-1$. 
\[
5^{3197} ≡ 5^{636 \\cdot 5} \\cdot 5^6 \\ (mod \\ 637) \\\\ ≡ (5^{636})^5 \\cdot 5^6  \\ (mod \\ 637)\\\\ ≡ 1^3 \\cdot 5^6 \\ (mod \\ 637)
 ≡ 15625 \\ (mod \\ 637)  \\\\ ≡ 337 \\ (mod \\ 637)


\]
 

`

    return(
        <div>
            <h3>In this section we will take a look at Fermat's little theorem and two corrollarrys that relates to this theorem. </h3>
		<MathJaxComponent mathExpression={FLTContent} />
        <TestYourSelf themeInput = "FLT" />
		</div>
    )
}


