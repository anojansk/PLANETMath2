import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TYMini from "../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function CRT(){

	const CRTContent = `
	
   Given positive integers $n_1, \\ldots, n_k$,  we have $\\text{gcd}(n_i, n_j) = 1$ for $i \\neq j$. This gives us the linear system:
   
   
       \[
    \\begin{align*}
    x &\\equiv a_1 \\ (\\text{mod} \\ n_1) \\\\    
    x &\\equiv a_2 \\ (\\text{mod} \\ n_2) \\\\
    &\\vdots \\\\
    x &\\equiv a_k \\ (\\text{mod} \\ n_k)
    \\end{align*}
    \]

    This system has a solution that is a unique solution for $x$ modulo $N$ where $N = n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$.

    This is a way to solve a system of linear congruences. Firstly, find if $\\text{gcd}$ between all $n_1,\\ldots,n_k$ are $1$; when this is shown, CRT can be used. 
    Start by rewriting each linear congruence of the form $ax \\equiv b \\ (\\text{mod} \\ m) (a > 1)$ to $x \\equiv b' \\  (\\text{mod} \\ m)$. 
    Then find $N_1, N_2,\\ldots, N_k$, where $N_1 = N/n_1, N_2 = N/n_2, \\ldots , N_k = N/n_k$
    
    
    (Remember that $N = n_1 \\cdot n_2 \\cdot \\ldots \\cdot n_k$). Each $N_k$ is, in other words, the product of all the integers $n_i$, 
    but the factor $n_k$ is removed. This means that $\\text{gcd}(N_k, n_k) = 1$ because all the $n_i$'s are relatively prime to each other,
     this is shown when we check the condition of $\\text{gcd}(n_i,n_j) = 1$ for $i \\neq j$ before using CRT).
    
    
    Then the solution to the system is:
    $X = a_1N_1x_1 + a_2N_2x_2 + \\ldots + a_kN_kx_k$.
    Where each $x_i$ for $i = 1,\\ldots,k$ is the solution for $(N_k x_i \\equiv 1 \\ (\\text{mod} \\ n_k)$.
    In words, $x_i$ is the solution for the linear congruence $a_k$ (from the original system) modulo $N_k$.
    
    Here is an example:
    
   \\begin{align*}
    10x &\\equiv 2 \\ (\\text{mod} \\ 3) \\\\
    14x &\\equiv 3 \\ (\\text{mod} \\ 5) \\\\
    23x &\\equiv 6 \\ (\\text{mod} \\ 7)
    \\end{align*}
    
    
    Firstly, we need to check the condition to use the CRT, that is, if $\\text{gcd}(3,5) = \\text{gcd}(5,7) = \\text{gcd}(3,7) = 1$.
    This is true; hence we can use the CRT.
    Now the terms have to be rewritten such that $ax \\equiv b \\ (\\text{mod} \\ m) \\rightarrow x \\equiv b' \\ (\\text{mod} \\ m)$
    
    
    \\begin{align*}
    10x &\\equiv 2 \\ (\\text{mod} \\ 3) \\rightarrow  x ≡ 2 \\ (\\text{mod} \\ 3 )\\\\
    14x &\\equiv 3 \\ (\\text{mod} \\ 5) \\rightarrow  x ≡ 2 \\ (\\text{mod} \\ 5 )\\\\
    23x &\\equiv 6 \\ (\\text{mod} \\ 7) \\rightarrow  x ≡ 3 \\ (\\text{mod} \\ 7 )
    \\end{align*}
    
    Now we need to find our $N_i's$. To do this we find $n$.
    $n = n_1 \\cdot n_2 \\cdot n_3 = 3 \\cdot 5 \\cdot 7 = 105$
    
    This gives us,
    
    
    \\begin{align*}
      (N_1 = n/n_1 = 105/3 = 35)\\\\
      (N_2 = n/n_2 = 105/5 = 21)\\\\
      (N_3 = n/n_3 = 105/7 = 15)
    
      \\end{align*}

    Further we use the $N_i's$ to find $x_1, x_2$, and $x_3$.
     
    
    \\begin{align*}
    35x_1 &\\equiv 1 \\ (\\text{mod} \\ 3) \\\\
    21x_2 &\\equiv 1 \\ (\\text{mod} \\ 5) \\\\
    15x_3 &\\equiv 1 \\ (\\text{mod} \\ 7)
    \\end{align*}
    
    Answer for these three linear congruences are $x_1 = 2, x_2 = 1, x_3 = 1$.
    
    Lastly we use the formula above to find $X$. \n\n
    
    \[X = a_1N_1x_1 + a_2N_2x_2 + \\ldots + a_kN_kx_k$.\]
    
    [X = 2 \\cdot 35 \\cdot 2 + 2 \\cdot 21 \\cdot 
    1 + 3 \\cdot 15 \\cdot 1 = 227.\]
    
    Take the answer modulo 105 and we get the solution
    
    $X = 269 \\equiv 59 \\ (\\text{mod} \\ 105)$.
    
    What this tells us is that the system that we started with has a solution $X$ that satisfies all the linear congruences. This can be easily checked:
    
    \\begin{align*}
    10 \\cdot 17 = 170 \\equiv 2 \\ (\\text{mod} \\ 3)\\\\
    14 \\cdot 17 = 238 \\equiv 3 \\ (\\text{mod} \\ 5)\\\\
    23 \\cdot 17 = 391 \\equiv 6 \\ (\\text{mod} \\ 7)
    \\end{align*}
   `

   const explanation = `Assume x1 = 1, x2 = 20, x3 = 34, then answer as:
   1 20 34`
    
	return(
		<div>
         <h3>In this chapter we will take a look at the Chinese Remainder Theorem.</h3>
		<MathJaxComponent mathExpression={CRTContent} />
      <TestYourSelf 
            themeInput = "CRT"
            explanation = {explanation}
       />
		</div>
	)

}