import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function NI(){

const NIContent = `
Specifically, we will look at the Trapezoidal Rule and Simpsons Rule.  These are methods to integrate a function $f(x)$ that generally would be difficult ot integrate. 
For instance the function 
\[
    f(x) = \\frac{x^4 \\cdot e^x \\cdot cos(x)}{1 + x^2}
]\

Intgrating this function would be difficult using regular integration methods, however, using Newton-Cotes formulae is another way to solve the integration. 
The idea is: 
\[
     \\int_{a}^{b} f(x) \\ dx  ≈  \\int_{a}^{b} p_n(x) \\ dx

]\

By using Lagrange Interpolation Theorem to give us the polynomial. This can be integrated, as integrating polynomials are relatively simple. 


From *SECTION* Lagrange Interpolation Theorem we know how to calculate $p_n(x)$, that is: 

\[
    p_n(x) = \\sum_{i = 0}^{n}L_if(x_i).
\]

Where $L_i$ is


\[

    L_i = \\prod_{j = 0 \\\\ j \\neq i}^{n} \\frac{x-x_j}{x_i-x_j}

\]

However, we need to integrate $p_n(x)$ and this will give us: 
\[
    p_n(x) = \\sum_{i = 0}^{n}z_if(x_i)
\]

Where $z_i$ is 
\[
    z_i = \\int_{a}^{b} L_i(x) \\ dx , \\ i = 0, 1,..., n

]\



For $n = 1$ we get the Trapezium Rule. Which states:

\[  
p_1(x) = \\sum_{i = 0}^{n}z_if(x_i)

]\


For $p_1(x)$ where $a = x_0$ and $b = x_1$ we have the Lagrange Interpolation that gives: 
\[
p_1(x) = L_0(x)f(a) + L_1(x)f(b) \\\\
= \\frac{x-b}{a-b}f(a) + \\frac{x-a}{b-a}f(b) \\\\
= \\frac{1}{b-a}( (b-x)f(a) + (x-a)f(b) )

]\

Now that we know $p_1(x)$ we need to integrate it. This is the last step. 
\[
     \\int_{a}^{b} p_1(x) \\ dx  = \\int_{a}^{b} \\frac{1}{b-a}( (b-x)f(a) + (x-a)f(b) ) \\ dx\\\\
     =

]\





`


    return(
        <div>
        <h3>In this section we will take a look at Numerical Integrations.</h3>
        <MathJaxComponent mathExpression={NIContent}/>
       <TestYourSelf themeInput={"NI"}/>
        </div>
    )
}