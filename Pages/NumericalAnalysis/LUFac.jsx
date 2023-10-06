import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"

export default function LUFac(){

const LUFacContent = `
In this section we are going to look at LU Factorisation. 

This is a method to factorise a matrix, and by doing this we can solve linear systems, as we will take a look 
at further down. 

We can write the matrix $A$ as 
\[

    A =    
       \\begin{pmatrix}
       a & b \\\\ 
       c & d \\\\
       \\end{pmatrix}

    = 
    \\begin{pmatrix}
    1 & 0 \\\\ 
    m & 1 \\\\
    \\end{pmatrix}

    \\cdot 

    \\begin{pmatrix}
    u & v \\\\ 
    0 & w \\\\
    \\end{pmatrix}

    = L \\cdot U
\] 

We can see that $a = u$, $b  = v$, $c = mu$ and $d = mv + w$. 

For $A = \\mathbb{R}^{3 x 3}$

\[

    A =    
       \\begin{pmatrix}
       a & b & c\\\\ 
       d & e & f\\\\
       g & h & i\\\\
       \\end{pmatrix}

    = 

    \\begin{pmatrix}
    1 & 0 & 0        \\\\ 
    l_{21} & 1 & 0  \\\\
    l_{31} & l_{32} & 1\\\\
    \\end{pmatrix}

    \\cdot 

    \\begin{pmatrix}
    u_{11} & u_{12} & u_{13}\\\\ 
    0 & u_{22} & u_{23}\\\\
    0 & 0 & u_{33} \\\\
    \\end{pmatrix}

    \\\\

    =   
    \\begin{pmatrix}
    u_{11} & u_{12} & u_{13}\\\\ 
    l_{21}u_{11} & l_{21}u_{12} + u_{22} & l_{21}u_{13} + u_{23}\\\\
    l_{31}u_{11} & l_{31}u_{12} + l_{32}u_{22} & l_{31}u_{13} + l_{32}u_{23} + u_{33} \\\\
    \\end{pmatrix}

\] 
Lets look at an example. Our goal is to use LU factorisation on the $3x3$ matrix $A$. Let $A$ be:
\[

    A =    
       \\begin{pmatrix}
       2 & 2 & 3\\\\ 
       4 & 3 & 14\\\\
       6 & 5 & 20\\\\
       \\end{pmatrix}

\] 

\[

A =    
\\begin{pmatrix}
2 & 2 & 3\\\\ 
4 & 3 & 14\\\\
6 & 5 & 20\\\\
\\end{pmatrix}

=
\\begin{pmatrix}
u_{11} & u_{12} & u_{13}\\\\ 
l_{21}u_{11} & l_{21}u_{12} + u_{22} & l_{21}u_{13} + u_{23}\\\\
l_{31}u_{11} & l_{31}u_{12} + l_{32}u_{22} & l_{31}u_{13} + l_{32}u_{23} + u_{33} \\\\
\\end{pmatrix}


\] 

This gives us some equations to work with, and solving these backwards will help us find the different values. 
\[

    u_{11} = 2, \\\\ u_{12} = 2, \\\\u_{13} = 3 \\\\
    l_{21}u_{11}  = 4,\\\\ l_{21}u_{12} + u_{22} = 3, \\\\ l_{21}u_{13} + u_{23} = 14 \\\\
    l_{31}u_{11} = 6, \\\\  l_{31}u_{12} + l_{32}u_{22} = 5, \\\\ l_{31}u_{13} + l_{32}u_{23} + u_{33} = 20

\]

Solving the different equations to find the different values: 
\[
u_{11} = 2,  u_{12} = 2,  u_{13} = 3,  u_{22} = -1,  u_{23} = 8, 
u_{33} = 3,  l_{21} = 2,  l_{31} = 3,  l_{32} = 1

\]

We can there factorise $A = L \\cdot U$ as: 

\[

    A =    
       \\begin{pmatrix}
       2 & 2 & 3\\\\ 
       4 & 3 & 14\\\\
       6 & 5 & 20\\\\
       \\end{pmatrix}

    =  L \\cdot U
    =
    \\begin{pmatrix}
    1 & 0 & 0\\\\ 
    2 & 1 & 0\\\\
    3 & 1 & 1\\\\
    \\end{pmatrix}

    \\cdot 

    \\begin{pmatrix}
    2 & 2 & 3\\\\ 
    0 & -1 & 8\\\\
    0 & 0 & 3\\\\
    \\end{pmatrix}

    
\] 

The interesting thing we can do with the factorisation is to solve different linear systems. 

\[   
\\begin{pmatrix}
2 & 2 & 3\\\\ 
4 & 3 & 14\\\\
6 & 5 & 20\\\\
\\end{pmatrix}
\\cdot
\\begin{pmatrix}
x \\\\ 
y \\\\
z \\\\
\\end{pmatrix}
=
\\begin{pmatrix}
13 \\\\ 
50 \\\\
72 \\\\
\\end{pmatrix}

\]

\[

\\begin{pmatrix}
1 & 0 & 0\\\\ 
2 & 1 & 0\\\\
3 & 1 & 1
\\end{pmatrix}
\\cdot
\\begin{pmatrix}
2 & 2 & 3   \\\\ 
0 & -1 & 8  \\\\
0 & 0 & 3  
\\end{pmatrix}
\\begin{pmatrix}
x \\\\ 
y \\\\
z 
\\end{pmatrix}
=
\\begin{pmatrix}
13 \\\\ 
50 \\\\
72 
\\end{pmatrix}

\]
`


    return(
        <div>
        <h3>In this section we will take a look at The Lagrange Interpolation Theorem.</h3>
        <MathJaxComponent mathExpression={LUFacContent}/>
       <TestYourSelf themeInput={"LUFac"}/>
        </div>
    )
}