import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"
import LagrangeCalcDisplay from "../../Components/Calculators&Calculatordisplay/LagrangeInterpolCalcDisp"

export default function LagrangeInterpolation(){

    const LagrangeInterpolationContent =  
 
`
The interpolation theorem states: 
For any $n \\geq 0$ Also let $x_0, x_1,\\ldots, x_n$ be distinct values, and $y_0,  y_1,\\ldots, y_n \\in \\mathbb{R}$. The polynomial $p_n$ defined under
\[
    p_n(x) = \\sum_{i = 0}^{n}L_iy_i
\]
is called the Lagrange Interpolation Polynomial.

We can further expand this to as following:
\[
    p_n(x) = \\sum_{i = 0}^{n}L_if(x_i)
\]
where f(x_i) is the function we want to interpolate using the interpolation points $x_i$.\[\]

This polynomial will be an approximation (or exact) of a function that we want to find, with the interpolation points. 
We will take a deep dive into the different parts of this theorem. 

We define $L_i$ as: 

\[

    L_i = \\prod_{j = 0 \\\\ j \\neq i}^{n} \\frac{x-x_j}{x_i-x_j}

\]

In other words, this means that $L_i$ is the product of $\\frac{x-x_j}{x_i-x_j}$, for $j = 0, \\ldots, n$, however exclude when $j = i$. 
    \[\]

Now lets look at an example with both cases, that is, for $y_i$ and then for $f(x_i)$, also where the polynomial is exact, and an approximation. \[\]

Let us be in the interval $[-1,1]$ and let the interpolation points be $x_0 = -1, x_1 = 0, x_2 = 1$ and let their respective $y_i$ values be $y_0 = 3, y_1 = 1, y_2 = 3$.

We want to find the Lagrange Interpolation polynomial og degree $2$ for the set of the points $\\{(-1,3), (0,1), (1,3) \\}$. That is, we want to find $p_2(x)$.

\[

    p_2(x) = \\sum_{i = 0}^{2}L_iy_i = L_0y_0 + L_1y_1 + L_2y_2

\]

All we need to find for this example is $L_0, L_1, L_2$.

\[
    L_0 =  \\prod_{j = 0 \\\\ j \\neq 0}^{2} \\frac{x-x_j}{x_i-x_j} = \\frac{x-x_1}{x_0-x_1} \\cdot \\frac{x-x_2}{x_0-x_2} = \\frac{x - 0}{-1-0} \\cdot \\frac{x-1}{-1-1} = \\frac{x^2-x}{2}  \\\\
    L_1 =  \\prod_{j = 0 \\\\ j \\neq 1}^{2} \\frac{x-x_j}{x_i-x_j} = \\frac{x-x_0}{x_1-x_0} \\cdot \\frac{x-x_2}{x_1-x_2} = \\frac{x + 1}{0 + 1} \\cdot \\frac{x - 1}{0-1} = 1 - x^2 \\\\
    L_2 =  \\prod_{j = 0 \\\\ j \\neq 2}^{2} \\frac{x-x_j}{x_i-x_j} = \\frac{x-x_0}{x_2-x_0} \\cdot \\frac{x-x_1}{x_2-x_1} = \\frac{x + 1}{1 + 1} \\cdot \\frac{x-0}{1-0} = \\frac{x^2+x}{2}
\]
    
Now that we have found the $L_i$'s, we can calculate $p_2(x)$. 

\[

    p_2(x) = \\sum_{i = 0}^{2}L_iy_i = L_0y_0 + L_1y_1 + L_2y_2 \\\\
    = (\\frac{x^2-x}{2}) \\cdot 3 +  (1 - x^2) \\cdot 1  + (\\frac{x^2+x}{2}) \\cdot 3 \\\\
    = \\frac{3x^2 - 3x + 2 - 2x^2 + 3x^2+ 3x}{2} = 2x^2 + 1

\]


Thus, $p_2(x) = 2x^2 + 1$. This example used points rather than a function, (the points are from the  $2x^2 + 1$, meaning the interpolation polynomial was exact.) \[\]

Now another example where the $p_n(x)$ is not exact, and we use a function rather than $y_i$'s.

Let us be in the interval $[-2,2]$ and let the interpolation points be $x_0 = -2, x_1 = 0, x_2 = 2$ and let the function we want to find an interpolation polynomial to be $3e^{2x}$.

We want to find the Lagrange Interpolation polynomial og degree $2$ for the function $3e^{2x}$.

Again as before we start by finding $L_0, L_1, L_2$, it is up to $L_2$ again since it is of degree $2$ (had it been degree $3$ we would need to calculate $L_0, L_1, L_2, L_3$).
From the formula above and the interpolation points we have been giving, we get:
\[
    L_0  = \\frac{x-x_1}{x_0-x_1} \\cdot \\frac{x-x_2}{x_0-x_2} = \\frac{x - 0}{-2-0} \\cdot \\frac{x-2}{-2-2} = \\frac{x^2-2x}{8}  \\\\
    L_1 = \\frac{x-x_0}{x_1-x_0} \\cdot \\frac{x-x_2}{x_1-x_2} = \\frac{x + 2}{0 + 2} \\cdot \\frac{x - 2}{0-2} = \\frac{4-x^2}{4} \\\\
    L_2  = \\frac{x-x_0}{x_2-x_0} \\cdot \\frac{x-x_1}{x_2-x_1} = \\frac{x + 2}{2 + 2} \\cdot \\frac{x-0}{2-0} = \\frac{x^2 + 2x}{8}
\]

We also want to quickly calculate $f(x_i)$ for $i = 0,1,2$. 

\[
    f(x_0) = f(-2) = 3e^{-4} \\\\
    f(x_1) = f(0) = 3e^0 = 3 \\\\
    f(x_2) = f(2) = 3e^{4}
\]

    
We can now calculate $p_2(x)$ for the function $3e^{2x}$ over the interval $[-2,2]$. 

\[

    p_2(x) = \\sum_{i = 0}^{2}L_if(x_i) = L_0f(x_0) + L_1f(x_1) + L_2f(x_2) \\\\
    = ( \\frac{x^2-2x}{8}) \\cdot 3e^{-4}  +  (\\frac{4-x^2}{4}) \\cdot 3  + (\\frac{x^2 + 2x}{8}) \\cdot 3e^{4}\\\\
    = 19.73x^2 + 40.93x + 3 \\ \\ ^{(1)}
\]


Vannet, et menneske i live beholder, 
Vannet, H og O sammenkobler. 
Følelser som en stein har, vannet
vi mennesker aldri fordrar. 

`

    return(
        <div>
        <h3>In this section we will take a look at The Lagrange Interpolation Theorem.</h3>
        <MathJaxComponent mathExpression={LagrangeInterpolationContent}/>
        <LagrangeCalcDisplay />
        <TestYourSelf themeInput = "LagrangeInterpolation" />
       <div className="underText" 
            style={{fontSize : "10px",
            marginBottom : "10px",
            borderTop:"1px solid rgb(217, 217, 217)"}}>
         <p>(1) Convert 3e^4 and 3e^(-4) to decimal numbers and calculate the polynomial.</p>
        </div>
        </div>
    )
}