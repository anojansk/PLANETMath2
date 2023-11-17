import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function Lhopital(){


    const LhopitalContent1=  
 
`

Finding limits of a function is not always straight forward. L'hoptals rule can be applied to find the limit
of a fraction that contains two functions, that is
\[
    \\lim_{x \\to a} \\frac{f(x)}{g(x)}.
]\

The way to be able to use L'hopital is to see if both the numerator and denomiator converges to zero. If this is the case
l'hoptals rule can ble applied. $\\\\$$\\\\$

Given that the function $f(x)$ and $g(x)$ are differentiable $\\forall x \\neq a$ and $g'(x) \\neq 0$, then l'hopitals rule states: 

\[
    \\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}.
]\


Example:

\[
    \\lim_{x \\to 2} \\frac{x^2-4}{x-2} = \\lim_{x \\to 2} \\frac{2x}{1} = 4.
]\

By substituting $x$ with $2$ both the numerator and denominator becomes $0$. We end up with $[\\frac{0}{0}]$. Thus being able to
use L'hopital. After differantiating both the numerator and denominator seperately, we simply find the limit. 
`
const LhopitalContent2=  
 
`
There are others situations where l'hopital can be used. Instead of $\\frac{0}{0}$, we can also get
\[
   \\frac{\\infty}{\\infty},\\frac{-\\infty}{\\infty},\\frac{\\infty}{-\\infty}
]\
At the same time, $x$ does not have to converge to a constant $a$, but can tend towards $\\infty$ or $-\\infty$. If $x$ tends to $\\infty$ or $-\\infty$, 
then $f$ and $g$ has to be differentiable to infinity, and $g'(x)$ cannot be zero somewhere here. 
Limit can also be onesided, that is $x \\rightarrow a^+$ or $x \\rightarrow a^-$.

Examples:$\\\\$

$1.$ Find $\\lim_{x \\to \\infty} \\frac{2x^2 + 3x}{3x^2 - 5x}$  $\\\\$
$2.$ Find $\\lim_{x \\to \\infty} \\frac{-2x^2 + 6x - 3}{3x^2 + 4x}$  $\\\\$

\[

    1.  \\lim_{x \\to \\infty} \\frac{2x^2 + 3x}{3x^2 - 5x} = \\lim_{x \\to \\infty} \\frac{4x + 3}{6x - 5} \\\\
    = \\lim_{x \\to \\infty} \\frac{4}{6} = \\frac{2}{3}  \\\\
]\

\[

    2. \\lim_{x \\to \\infty} \\frac{-2x^2 + 6x - 3}{3x^2 + 4x} = \\lim_{x \\to \\infty} \\frac{-4x + 6}{6x + 4} \\\\
     = \\lim_{x \\to \\infty} \\frac{-4}{6} = \\frac{-2}{3}

]\

For the first example, when $x$ tends to $\\infty$ both the numerator and denominator also tends to infininty, meaning we have a 
$\\frac{\\infty}{\\infty}$ situation, meaning we can use, l'hopital. However, as shown, it can be used again, leaving us with the result after 
l'hopital is used a second time. For the second example, we have a $\\frac{-\\infty}{\\infty}$ scenario. We know that l'hopital can be used, and in
this example it is also used twice. \[\]
Some other useful tips: 

If you find that the limit of the functions tends towards $[0 \\cdot \\infty]$, you rewrite the product as:
\[
    \\lim_{x \\to a} {f(x) \\cdot g(x)} = \\lim_{x \\to a} \\frac{g(x)}{\\frac{1}{f(x)}}.
 ]\

 Example: 

 \[
    
 ]\


 Another tip is the situation where we end up with $[\\infty - \\infty]$ we want to rewrite it, to end up with
 either $[\\frac{\\infty}{\\infty}]$ or $[\\frac{0}{0}]$.

 Example: 

 \[


 ]\

 Lastly, if we end up with $[1^{\\infty}],[0^0]$ or $[\\infty^0]$ we want to rewrite it as 

 \[

    a^b = e^{b \\cdot (ln \\ a)},

 ]\

 and use l'hopital on the exponent. 

$\\\\$
 Example: Find $\\lim_{x \\to \\infty} ({2x^2+2})^{\\frac{1}{17x}}$ $\\\\$ In this situation we have
 $[\\infty^0]$. Thus, need to use the formula above. 
\[
    \\lim_{x \\to \\infty} ({2x^2+2})^{\\frac{1}{17x}} =  \\lim_{x \\to \\infty} e^{ln{(2x^2+2)} \\cdot {\\frac{1}{17x}}}
]\

Now we use l'hopital on the exponent, that is

\[

    \\lim_{x \\to \\infty} ln{(2x^2+2)} \\cdot {\\frac{1}{17x}} = \\lim_{x \\to \\infty} \\frac{ln{(2x^2+2)}}{\\frac{1}{\\frac{1}{17x}}} 
    = \\lim_{x \\to \\infty} \\frac{ln{(2x^2+2)}}{17x} 

]\
 
This gives an $[\\frac{\\infty}{\\infty}]$ situation, hence we'll use l'hoptital again. 

\[

    \\lim_{x \\to \\infty} \\frac{ln{(2x^2+2)}}{17x} =  \\lim_{x \\to \\infty} \\frac{ln{(2x^2+2)}}{17x} 
    = \\lim_{x \\to \\infty} \\frac{\\frac{1 \\cdot 4x}{(2x^2+2)}}{17}  = \\lim_{x \\to \\infty}  \\frac{2x}{17(x^2 + 1)} 
    \\\\ =  \\lim_{x \\to \\infty}  \\frac{2}{34x} = 0.

]\

This means \[
    \\lim_{x \\to \\infty} ({2x^2+2})^{\\frac{1}{17x}}  = e^0 = 1.
]\
`

    return(
        <div>
        <h3>In this section we will take a look at L'hopital and some of its variants.</h3>
        <MathJaxComponent mathExpression={LhopitalContent1}/>
        <h3>Other variants of l'hopitals rule</h3>
        <MathJaxComponent mathExpression={LhopitalContent2}/>
        <TestYourSelf themeInput = ""/>
        </div>
    )
}