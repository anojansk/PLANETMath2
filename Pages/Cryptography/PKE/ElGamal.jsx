import React from "react"
import MathJaxComponent from "../../../Components/MathJax"
import TYMini from "../../../Components/TestYourSelf/TestYourSelf"
import ElGamalCalculatorDisplay from "../../../Components/Calculators&Calucatordisplay/ElGamalCalculatorDisplay"
import TestYourSelf from "../../../Components/TestYourSelf/TestYourSelf"


export default function ElGamal(){

    
    const ElGamalContent =  
 
    `
 
    The ElGamal protocol is a cyptographic protocol (public key encryption) that allows
    Alice to send a encrypted message to Bob, that Bob later can decrypt. \[\]

    Before deep diving into the protocol, here is a quick look at the things we will cover: $\\\\$
    1. The protocol itself $\\\\$
    2. Examples both with $\\mathbb{Z}^{+}$ and $\\mathbb{Z}^{*}$. where $D$ is the decryption algorithm, $\\\\$  $E$ the encryption algorithm, and $m$ is the message. $\\\\$
    3. Show that ElGamal is correct, that is $D(E(m)) = m$ $\\\\$
   
    
    \[\]

    The ElGamal protocol goes as following: $\\\\$
    Pre information: let $G$ is a cyclic group and let $g$ be a generator of the group. Both Alice and Bob knows $G$ and $g$. \[\]
    
    The encryption algorithm $E$ takes an encryption key $e_k = g^x$ where $x$ is chosen uniformly random and a message $m$ 
    as input and outputs a pair $c = (p,q)$ where 
    $p = g^r$ and $q = m \\cdot e_k^r $ where $r$ is a unformly random integer
    from the set $ {0, 1, \\ldots , n -1} $.
     
    And the decryption algorithm $D$ takes a 
    decryption key $d_k$ and a cipher text $c = (p,q) = (g^r, m \\cdot e_k^r)$ and outputs $\\\\$
    $D(c,d_k) = D((g^r, m \\cdot e_k^r), x) = $ Here we can see that $x$ is the decryption key. 
    
    \[\]
    

    2. Now that we have our descriptions of $E, D, e_k, d_k, m, p$ and $q$ we can finally look at the protocol by using examples.$\\\\$
    (In this first example we use the field $\\mathbb{Z}_{13}^{*}$), generator $g = 8$.$\\\\$
    Alice wants to send a message $m = 11$ to Bob, but need to encrypt the message first, they agree upon using the ElGamal algorithm. 
    Before she starts encrypting the message she chooses $r \\leftarrow {0,1, \\ldots , n-1}$ uniformly random and ends up with $ r = 2$. And meanwhile Bob finds 
    $ x \\leftarrow {0,1, \\ldots , n-1}$ and ends up with $x = 7$ Alice knows Bobs chosen key (that is, $x = 7$). Alice is generating the
    cipher text that will be sent to Bob.$\\\\$
\[
 c = (p,q) = (g^r, m \\cdot e_k^r) = (g^r, m \\cdot (g^x)^r) = (8^{2} \\ (mod \\ 13) , (11 \\cdot (8^7)^{2} \\ (mod \\ 13)) = (12,2)
\]

The cipher text that Alice sends to bob is $c = (12,2)$ $\\\\$
Now Bob have to decrypt the ciphertext Alice sent. He uses the decryption algorithm: 
\[

    D(p,q) = q \\cdot p^{-x} = 2 \\cdot 12^{-7}\\ (mod \\ 13) = 11 = m. ^\{(1)\}


\]

Bob has now been able to decrypt the cipher text that Alice sent, and read her initial message. 

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

\[\]
    
`

            return(
                <div>
                <h3>In this section we will take a look at ElGamal encryption protocol.</h3>
                <MathJaxComponent mathExpression={ElGamalContent}/>
                <ElGamalCalculatorDisplay/>
               <TestYourSelf themeInput = "ElGamal" />
               <div className="underText" 
                    style={{fontSize : "10px",
                    marginBottom : "10px",
                    borderTop:"1px solid rgb(217, 217, 217)"}}>
               <p>(1) To be able to decrypt
                 the ciphertext we used <a href="https://www.wolframalpha.com/widgets/view.jsp?id=978d7097ff2a699194ad4282bd27b1dc">Wolfram Alpha</a></p>
                 <p>(2) To find this we use the Euclidian algorithm.</p>
                </div>
                </div>
            )
        }
    