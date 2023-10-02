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

\[\]


     Now, lets look at another example, but this time with $\\mathbb{Z}_{31}^{+}$ and let $ g = 14 $
     
     Alice wants to send a message $m = 22$ to Bob, but need to encrypt the message first, again they agree upon using the ElGamal algorithm. 
    Before she starts encrypting the message she chooses $r \\leftarrow {0,1, \\ldots , n-1}$ uniformly random and ends up with $ r = 8$. And meanwhile Bob finds 
    $ x \\leftarrow {0,1, \\ldots , n-1}$ and ends up with $x = 12$ Alice knows Bobs chosen key (that is, $x = 12$). Alice is generating the
    cipher text that will be sent to Bob.$\\\\$
\[
 c = (p,q) = (g \\cdot r, m + e_k \\cdot r) = (g \\cdot r, m + (g \\cdot x) \\cdot r) = (14 \\cdot 8 \\ (mod \\ 31) , ( 22 + (14 \\cdot 12) \\cdot 8 \\ (mod \\ 31)) = (19,2)
\]

The cipher text that Alice sends to bob is $c = (19,10)$ $\\\\$
Now Bob have to decrypt the ciphertext Alice sent. He uses the decryption algorithm: 
\[

    D(p,q) = q \\cdot p^{-x} = 2 + 19 \\cdot (-12)\\ (mod \\ 31) = 22 = m. ^\{(2)\}


\]
\[\]
     

    3. We want to show that the ElGamal algorithm is correct, that is, $D(E(m,e_k),d_k) = m.$ $\\\\$
    To show this we need to seperate the different variables and algorithms. 
    We know the following: $\\\\$
    $e_k = g^x$, $d_k = x$ and, $\\\\$
    $E = (p,q) =  (g^r, m \\cdot (g^x)^r)$, $D = q \\cdot p^{-x}$ 
$\\\\$ Some algebra will show us: 

\[

    D(E(m,e_k),d_k) = D((p, q),x) = D((g^r, m \\cdot (g^x)^r),x) = m \\cdot (g^x)^r \\cdot (g^r)^{-x} 
    = m \\cdot g^{rx} \\cdot g^{-rx} = m \\cdot g^{rx-rx} = m

\]

Bobs decryption of Alice's encrypted message will display him the message and not something else. 

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
    