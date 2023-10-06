import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TYMini from "../../Components/TestYourSelf/TestYourSelf"
import DHCalculator from "../../Components/Calculators&Calculatordisplay/DHCalculator"
import DHCalculatorDisplay from "../../Components/Calculators&Calculatordisplay/DHCalculatorDisplay"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"


export default function DH(){

    
        const DHContent =  `
 
The Diffie-Hellman (DH) protocol is a cyptographic protocol that allows Alice and Bob generate a shared value. 

\[\]
Cyclic group: 

We define a cyclic group as following: 

$\\\\$ A group G is cyclic if $\\exists$ an elemeng $g \\in G$ such that {$G = {g^n | n \\in \\mathbb{Z}}$}
 \[\]
    What this means is that we can generate the group G by finding integers $n \\in \\mathbb{Z}$ and use $a$ as exponent to make all elements in $G$. 
    and we use elements $g$ in $G$ to do so. Here is an example:}

    
\[\]
We will first read through the protocol informaly and then introduce the necessary formulas and calculations.
The protocol intention is for Alice to send Bob a encrypted message using Symmetric Cryptography. 
In Symmetric Cryptography the two parts that are included need a shared key they can use to encrypt/decrypt the message. Therefore the 
DH-protocol is used to generate this shared key. 
\[\]

Informally: $\\\\$

1. Alice wants to send Bob a message. She chooses a number uniformly random from a set and use exponents to get a new value. 
2. Alice sends this value to Bob. Now Bob does the same, he chooses a number uniformly random from the same set
 (the numbers chosen from A and B does not have to be the same.) and also uses exponents to get a new value. 
 Bob calculates the common key, while sending his value to Alice.
3. Alice uses the recived value and also calculates the common key. They will now carry a key that are the same and 
an eavesdropper Eve cannot get this key, using the information that Alice and Bob shared with eachother. 
\[\]

Now lets look at this with more calucations: $\\\\$
Pre information: let G is a cyclic group and let g be a generator of the group. Both Alice and Bob knows G and g. \[\]

1. Alice wants to send a message m_A to Bob. Alice now chooses uniformly random a number $r_A$ from the set $r_A \\leftarrow {0, 1, \\ldots , n-1}.$$\\\\$
The new value $k_A = g^{r_A}$.\[\]

2. Bob recives $k_A$. First he chooses a number $r_B$ (as Alice) uniformly random: $r_B \\leftarrow {0, 1, \\ldots , n-1}.$$\\\\$
His new value $k_B = g^{r_B}$.\[\]

Where $g$ is the same in both Alice and Bob's case. He sends $k_B$ to Alice.
But also, he calculates the shared key, which is $S_B = k_A^{r_b}$.  $\\\\$
 \[\]
3. Alice recives $k_B$ and also calculates the shared key, which will be $S_A = k_B^{r_a}$ \[\]

4. Now that Alice and Bob have the same key $(S_A = S_B).$ \[\]
Before going to an example, two question might occur. $\\\\$
$1.$ How do we know that that the shared key is the same? That is, is $S_A = S_B$?$\\\\$
$2$. Why cant Eve use the information $k_A$ and $k_B$ to also find the shared key?\[\]

To answer the first one, we use som basic algebra. $\\\\$
$S_A = (k_A^{r_B}) = (g^{r_A})^{r_B} = (g^{r_B})^{r_A} = k_B^{r_A} = S_B$.$\\\\$
This shows that both $S_A$ and $S_B$ are indeed the same. \[\]

Why cant eve use the information she recieved to find $S_A$ (or $S_B$)?$\\\\$
The only information Eve has seen is $K_A$ and $K_B$, where,
$k_A = (g^{r_A})$ and $k_B = (g^{r_B})$, Eves interest is to find either $r_A$ or $r_B$
with either of these she can find the shared key, however with only $k_A$ and $k_B$ it very difficult.
 (Forklar kort eller henvis til log hard.)

\[\]
Now, lets look at an example:

Let us use $Z_7^{*}$ and let the generator be $g = 5$ (If you need a quick remainder on group theory click here).
Now assume Alice chooses an integer uniformly random and she ends up with $r_A = 3$$\\\\$
She now calculates $k_A =  g^{r_A} = 5^3 \\ (mod \\ 7) \\rightarrow 6$ $\\\\$
Alice sends $k_A = 6$ to Bob. 

\[\]

Now Bob chooses a number uniformly random, lets assume $r_b = 5$. $\\\\$
He now calculates $k_B =  g^{r_B} = 5^5 \\ (mod \\ 7) \\rightarrow 3$ $\\\\$
Bob calcuates the secret key which is $S_B = k_A^{r_b} = 6^5 \\ (mod \\ 7) \\rightarrow 6$ ,
 he also sends $k_B = 3$ to Alice. \[\]

Alice now uses $k_B = 3$ to calculate the shared key: $\\\\$
$S_A = k_B^{r_a} = 5^3 \\ (mod \\ 7) \\rightarrow 6$ \[\]

Now both Alice and Bob have a shared key $(S_A = S_B = 6)$


\[\]
Now, lets look at another example, but this time with $\\mathbb{Z}_9^{+}$

This time let the generator be $g = 4$.
Now again assume Alice chooses an integer uniformly random and she ends up with $r_A = 8$$\\\\$
She now calculates $k_A =  g \\cdot {r_A} = 4 \\cdot 8 \\ (mod \\ 9) \\rightarrow 5$ $\\\\$
Alice sends $k_A = 5$ to Bob. 

\[\]

Now Bob chooses a number uniformly random, lets assume $r_B = 2$. $\\\\$
He now calculates $k_B =  g \\cdot {r_B} = 4 \\cdot 2 \\ (mod \\ 9) \\rightarrow 8$ $\\\\$
Bob calcuates the secret key which is $S_B = k_A \\cdot {r_B} = 5 \\cdot 2 \\ (mod \\ 9) \\rightarrow 1$ ,
 he also sends $k_B = 8$ to Alice. \[\]

Alice now uses $k_B = 8$ to calculate the shared key: $\\\\$
$S_A = k_B \\cdot {r_A} = 8 \\cdot 8 \\ (mod \\ 9) \\rightarrow 1$ \[\]

Now both Alice and Bob have a shared key $(S_A = S_B = 1)$

 `
    
    
        return(
            <>
            <h3>In this section we will take a look at the Diffie-Hellman key exchange protocol.</h3>
            <MathJaxComponent mathExpression={DHContent}/>
            <DHCalculatorDisplay />
            <TestYourSelf themeInput = "DH" />
            </>
        )
    }
