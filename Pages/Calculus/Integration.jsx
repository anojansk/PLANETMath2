import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function Integration(){


    const LhopitalContent1=  
 
`
    In this first part, we are going to take a look at definite integrals and indefinite integrals. 

    Indefinite integrals: 
    \[
        
        \\int f(x) \\ dx = F(x) + C 
        
    \]
    Where, $C$ is a constant. 

    Here are some other integration rules: 

    \[
        
        \\int b \\ dx = bx + C \\\\
        \\int x^n \\ dx = \\frac{1}{n+1} x^{n+1} + C  \\\\
        \\int c \\cdot f(x) \\ dx = c \\cdot \\int f(x) dx \\\\
        \\int (f(x) + g(x)) \\ dx = \\int f(x) \\ dx +  \\int g(x) \\ dx = F(x) + G(x) + C  \\\\
        \\int (f(x) - g(x)) \\ dx = \\int f(x) \\ dx -  \\int g(x) \\ dx = F(x) - G(x) + C  \\\\
        \\int c \\cdot (f(x) - g(x)) \\ dx = c \\cdot \\int (f(x) - g(x)) \\ dx  = c \\cdot ( \\int (f(x) \\ dx -  \\int g(x)) \\ dx) = c \\cdot (F(x) - G(x) + C)  \\\\

    \]


    \[\]

    Definite integrals: 
        - For definite integrals we are limited within some values $a$ and $b$. 

        \[
        
            \\int_{a}^{b} f(x) \\ dx = F(a) - F(b)
            
        \]

Examples: 

    
    



`
const LhopitalContent2=  
 
`
The following formula shows a method called Partial Integration, to integrate certain functions. 

\[

    \\int F(x)G'(x) \\ dx = F(x)G(x) - \\int F'(x)G(x) \\ dx 

]\

Examples:
 
\[
    \\int x^2 \\cdot cos(x) \\ dx  
]\

Let $F(x) = x^2$ and $G'(x) = cos(x)$. This means $F'(x) = 2x$ and $G(x) = sin(x)$
This leaves us with: 

\[

    \\int x^2 \\cdot cos(x) \\ dx  = x^2 \\cdot sin(x) - \\int 2x \\cdot sin(x) \\ dx 

]\

To solve this we need to use the same technique again. Let $F(x) = 2x, F'(x) = 2, G'(x) = sin(x),
G(x) = -cos(x)$.

This leaves us with 

\[

    \\int x^2 \\cdot cos(x) \\ dx  = x^2 \\cdot sin(x) - \\int 2x \\cdot sin(x) \\ dx \\\\
    = x^2 \\cdot sin(x) - [ 2x \\cdot (-cos(x)) - \\int 2 \\cdot (-cos(x)) \\  dx \\\\
        = x^2 \\cdot sin(x) - [ 2x \\cdot (-cos(x)) - (2 \\cdot (-sin(x))) + C = x^2sin(x) + 2xcos(x) - 2sin(x) + C
]\


The git

`

const LhopitalContent3=  
 
`
Sometimes we have functions that looks like this, 
\[

    f(x) = \\frac{}{}

]\

`

    return(
        <div>
        <h3>In this section we will take a look at an introduction to Integrals.</h3>
        <MathJaxComponent mathExpression={LhopitalContent1}/>
        <h3>Integration with substitution and partial integration</h3>
        <MathJaxComponent mathExpression={LhopitalContent2}/>
        <h3>Partial fraction decomposition</h3>
        <MathJaxComponent mathExpression={LhopitalContent3}/>
        <TestYourSelf themeInput = "Lhopital"/>
        </div>
    )
}