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
    \\int_{a}^{b} f(x) \\ dx  ≈     \\int_{a}^{b} p_1(x) \\ dx  = \\frac{b-a}{2} (f(a) + f(b))

]\

Further, we will take a look at Simpsons Rule: $\\\\$
In this case $ n = 2 $. Where $x_0 = a$, $x_1 = (a+b)/2$ and $x_2 = b$. 
Simpsons rule therefore states: 
    \[

        \\int_{a}^{b} f(x) \\ dx  ≈   \\int_{a}^{b} p_2(x) \\ dx  =  \\frac{b-a}{6} (f(a) + 4f(\\frac{a+b}{2}) + f(b))


    ]\

Example with Trapezoid Rule:
Lets look at an interval $x \\in [0,1] $ meaning $x_0 = 0$ and $x_1 = 1$ and we want to integrate the function
$f(x) = x^2 + 3x + 1$ $\\\\$
By using the Trapeziodal Rule we get: 

\[

    \\int_{0}^{1} x^2 \\ dx  ≈  \\int_{0}^{1} p_1(x) \\ dx  =  \\frac{1-0}{2} (f(0) + f(1)) \\\\
    = \\frac{1}{2}(1 + 5) = 3


]\


Example with Simpsons Rule: 
Lets look at an interval $x \\in [0,1] $ meaning $x_0 = 0$, $x_1 = 0.5$ and $x_2 = 1$  and we want to integrate the function.
$f(x) = \\frac{x^3}{3} - 2x^2 + 5x + 4$ $\\\\$
By using the Trapeziodal Rule we get: 

\[

    \\int_{0}^{1} p_2(x) \\ dx  =  \\frac{1-0}{6} (f(0) + 4f(\\frac{0 + 1}{2}) + f(1)) \\\\
    = \\frac{1}{6}(4 + 4\\cdot \\frac{49}{8} + 10) = 6.417 \\\\ 
    \\int_{0}^{1}  3x^3 - 2x^2 + 5x + 4 \\ dx = \\frac{79}{12} = 6.583
]\


`



const NIContent2 = `
Our goal by using Newton-Cotes formula is to minimise the error from
the estimated integration and the actual integration.

To find the error we simply substract the value of the estimated integration
from the value of the actual integration. $\\\\$

In our example above, the error would be: 

\[

    E = \\lvert \\int_{0}^{1} f(x) \\ dx    - \\int_{0}^{1} p_2(x) \\ dx \\rvert \\\\
    = \\lvert 6.583-6.417 \\rvert = 0.166

]\
`



    return(
        <div>
        <h3>In this section we will take a look at Numerical Integrations.</h3>
        <MathJaxComponent mathExpression={NIContent}/>
        <h3>Error estimates</h3>
        <MathJaxComponent mathExpression={NIContent2}/>
       <TestYourSelf themeInput={"NI"}/>
        </div>
    )
}