import React from "react"
import MathJaxComponent from "../../../Components/MathJax"
import TYMini from "../../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../../Components/TestYourSelf/TestYourSelf"


export default function MI(){

    const MIContent = `
    
    Let $k$ be a finite field of characteristic two, that is $k = GF(2)$ and cardinality $q$.
Let $g(x) \\in k[x]$ be any irreducible polynomial of degree $n$. We define the field
$K$ as $k[x]/p(x)$, a degree $n$ extension of $k$.
Definition: Let $\\phi : K\\rightarrow k^n$ be the standard k-linear isomorphism between
$K$ and $k^n$, then its function is given by:
\[
    \\phi (a_0 + a_1x + \\ldots + a_{n-1}x_{n-1}) = (a_0, a_1,  \\ldots , a_{n-1})
]

Hence,
\[
\\phi^{-1}(a_0, a_1,  \\ldots , a_{n-1}) = a_0 + a_1x +  \\ldots  + a_{n-1}x^{n-1}  = \\sum_{i=0}^{n-1} a_ix^i
\]
Now we have to pick $\\theta$ , which has to satisfy these two conditions $0 < \\theta < n$
and ,$gcd(q^{\\theta} + 1, q^n - 1) = 1$.
Now that $\\theta$ is chosen, and the conditions are satisfied, we can define our
map $F$ over $K$, which is invertible because of the conditions of $\\theta$.
$F(X) = X^{1+q \\theta }$
Assume that we have an integer $t$ such that:
$t(1 + q^{\\theta}) \\equiv 1 \\ mod \\ (q^n - 1)$
Then F^{-1} is given as:
$F^{-1}(X) = X^t$
Proposition 1 The inverse of $F(X)$ is $X^t$.
Proof
We know from number theory that
\[t(q^{\\theta} + 1) ≡ 1 \\ mod \\ (q^n - 1) = t(q^{\\theta} + 1) = k(q^n - 1) + 1\].
Therefore,
\[ X^{t(q^{\\theta}+1)} = X^{k(q^n-1)+1} = X^{k(q^n-1)}X.\]
We know that the degree of the extended field is $q^n$. Using this information
together with Fermat’s Little Theorem we have,

\[X^{t(q^{\\theta}+1)} = X^{k(q^n-1)+1} = X^{k(q^n-1)}X = X.\]
Because $X^{k(q^n-1)} = 1$.

Let $\\tilde{F}$ be the map over $k^n$ defined by:

\[
\\tilde{F}(x_1,  \\ldots , x_n) = \\phi \\circ F  \\circ  \\phi^{-1}(x_1,  \\ldots , x_n) 
= ( \\tilde{f}_1,  \\ldots ,\\tilde{f}_n)\]
where $\\tilde{f}_1,  \\ldots \\in \\tilde{f}_n ∈ k[x_1,  \\ldots , x_n].$
Now, let $L_1$ and $L_2$ be two invertible affine transformations over $k^n$.
$F(x_1,  \\ldots , x_n) = L_1  \\circ  \\tilde{F}  \\circ  L_2(x_1,  \\ldots , x_n) = (f_1
,  \\ldots , f_n$)
where $f_1
,  \\ldots , f_n \\in k[x_1,  \\ldots , x_n].$ This is for $i = 1,  \\ldots , n$. \[\]

This encryption can be
done by anyone since the map $F$ is the public key. \[\
]
Key Generation:  The key generation of the MI construction returns a public
and a private key.
The public key is the field $k$, including its additive and multiplicative structure.
It also includes the map $F(x_1,  \\ldots , x_n).$
The private key consists of the two invertible affine transformations $L_1$ and $L_2.$
It can also include $\\theta$; however, it is unimportant. Because $0 <  \\theta  < n$, and $n$
usually is not large, therefore hiding  $\\theta$  will not be necessary. $\\\\$
Encryption of MI: Given a plaintext $p = (p_1,  \\ldots , p_n)$, the encrypted plaintext (ciphertext) will
be $(c_1,  \\ldots , c_n) = f_i(p_1, \\ldots , p_n)$
for $i = 1,  \\ldots , n.$ $\\\\$
Decryption of MI: Since $(c_1,  \\ldots , c_n) = f_i(p_1, .., p_n)$ for $i = 1,  \\ldots , n$
we can decrypt the ciphertext like this:
\[\\overline{F}^{-1}(c_1,  \\ldots , c_n) = L_2^{-1}
 \\circ  \\tilde{F}^{-1} \\circ  L_1^{-1}(c_1,  \\ldots , c_n) = L_2^{-1}
 \\circ  \\phi  \\circ  F^{-1} \\circ  \\phi^{-1} \\circ  L_1^{-1}(c_1,  \\ldots , c_n).
\]
Usually the components of $F$ are of high degree; hence it is usual to decrypt the
ciphertext $(c_1,  \\ldots , c_n)$ like this: \[\]
$1.$ Compute $(c′_1,  \\ldots , c′_n) = L_1^{-1}(c_1,  \\ldots , c_n)$ $\\\\$
$2.$ Compute $(c′′_1,  \\ldots , c′′_n) = \\phi  \\circ  F^{-1}  \\circ  \\phi^{-1}(c′_1,  \\ldots , c′_n)$ $\\\\$
3. Compute $(p_1,  \\ldots , p_n) = L_2^{-1}(c′′_1,  \\ldots , c′′_n)$ \[\]




Even though the person who decrypts the ciphertext only knows $(L_1, L_2)$, he
still can find $F^{-1}$. Because $t$ will be known by solving the equation we showed above. $\\\\$

Correctness of MI: $\\\\$
We want to show the correctness of this MI scheme.
The correctness of a cryptographic scheme is defined as:
\[
    D(d_k, E(e_k, m)) = m\]
From the MI construction we know that the encryption key (or public key) is
[\F = (f_1, \\ldots , f_n)\].
This means,
\[
    \\overline{F}(m) = L_1  \\circ  \\tilde{F}  \\circ  L_2(m) = L_1  \\circ   \\phi   \\circ  F  \\circ   \\phi^{-1}
 \\circ  L_2(m)\]
and the decryption key (secret key) is $(L_1, L_2)$ and the decryption algorithm
is:
\[L_2^{-1} \\circ   \\phi   \\circ  F^{-1} \\circ   \\phi^{-1} \\circ  L^{-1}(c).\]
Where the ciphertext $c = (c_1,  \\ldots , c_n)$.
From the definition of correctness, we have:
\[
L_2^{-1}  \\circ   \\phi   \\circ F^{-1} \\circ  \\phi^{-1} \\circ  L_1^{-1}
(L_1  \\circ   \\phi   \\circ  F  \\circ   \\phi^{-1} \\circ  L_2(m)) \\\\
= L_2^{-1} \\circ   \\phi   \\circ  F^{-1} \\circ   \\phi^{-1} \\circ   \\phi   \\circ  F  \\circ   \\phi ^{-1}\\circ  L_2(m)\\\\
= L_2^{-1} \\circ   \\phi   \\circ  F^{-1}\\circ  F  \\circ   \\phi ^{-1}\\circ  L_2(m)\\\\
= L_2^{-1} \\circ   \\phi   \\circ   \\phi ^{-1}\\circ  L_2(m)\\\\
= L_2^{-1} \\circ  L_2(m)\\\\
= m
\]
We have therefore shown that the Matsumoto Imai cryptosystem is correct.

MI signature scheme
Until now, we looked at MI as an encryption scheme, but we want to introduce the algorithm
of the MI signature scheme as well. However, it is not very different from the
encryption scheme.$\\\\$
Key Generation The key generation is the same as in the encryption scheme.
Hence, the public and private keys are the same as above.
Note In the signature scheme, we use $s_k$ as the signature key and $v_k$ as the verification
 key but this is the same as the private and public key, respectively.$\\\\$
Signature Generation Let $m = (m_1,  \\ldots , m_n)$ be a the document (or the hash
value of the document) that needs to be signed.
The way the document gets signed is by doing the following.
\[
    \\sigma = ( \\sigma_1,  \\ldots ,  \\sigma_n) = \\overline{F}^{-1}(m).\]
To get the signature we need to calculate $\\overline{F}^{-1}(m)$. 
From the decryption algorithm of MI, we have:
\[
\\overline{F}^{-1}(m) = L_2^{-1} \\circ   \\phi   \\circ  F^{-1} \\circ   \\phi^{-1} \\circ  L_1^{-1}(m).\]
Signature Verification: 
The recipient has to check if
\[F( \\sigma ) = m\]
where,  $\\sigma  = ( \\sigma_1,  \\ldots ,  \\sigma_n)$ and $m = (m_1,  \\ldots , m_n)$$\\\\$
Correctness of MI signature scheme:
We want to check the correctness of the MI signature scheme just as we did
with the encryption scheme.
Correctness is defined as
\[V(v_k, m, S(s_k, m)) = 1.\]
Both the verification algorithm and signature algorithm are known, as shown
above. Hence we end up with the following.
\[
L_1  \\circ   \\phi   \\circ  F  \\circ   \\phi -1 \\circ  L_2(L_2^{-1} \\circ   \\phi   \\circ  F^{-1} \\circ   \\phi^{-1}\\circ  L_1^{-1}(m))\\\\
=L_1  \\circ   \\phi   \\circ  F  \\circ   \\phi -1 \\circ \\phi   \\circ  F^{-1} \\circ   \\phi^{-1}\\circ  L_1^{-1}(m)\\\\
= L_1  \\circ   \\phi   \\circ  F  \\circ  F^{-1} \\circ   \\phi^{-1}\\circ  L_1^{-1}(m)\\\\
= L_1  \\circ   \\phi   \\circ   \\phi^{-1}\\circ  L_1^{-1}(m)\\\\
= L_1  \\circ L_1^{-1}(m)\\\\
= m.
\]

The verification algorithm $V$ will therefore return $1$.
Hence the Matsumoto Imai signature scheme is correct.


Now we will look at a small example. Let $k = GF(2)$, with $q = 2$ elements.
Let $K$ be degree $5$ extension. Hence value of $n = 5$ and we choose $ \\theta = 4$ since
$1 <  \\theta < n.$
The field elements are {0, 1}. Now let $g(x) = x^5 + x^2 + 1.$
$x^5 + x^2 + 1.$is an irreducible polynomial in $k[x]$.
The map $F$ is given by $F(X) = X^{2^4}+1.$
Now, we find t by solving
\[(1 + 2^4)t ≡ 1 \\ mod \\ (2^5 - 1) \\rightarrow
17t ≡ 1 \\ mod \\ (31). \]
Solving this, gives $t = 11$.
Now we can find the inverse map as well, that is
\[ F^{-1}(X) = X^t = X^{11} \]
.
Now we need to define $L_1$ and $L_2$ such that we can hide $F$. We want $L_1$ and
$L_2$ be invertible maps.
Let $L_1$ and $L_2$ be given by:


\[
    L_1 =    
   \\begin{pmatrix}
   0 & 1 & 1 & 0  & 1  \\\\
   0 & 0 & 0 & 0  & 1  \\\\
   0 & 0 & 1 & 1  & 0  \\\\
   1 & 1 & 0 & 0  & 1  \\\\
   0 & 1 & 1 & 1  & 0  \\\\
   \\end{pmatrix}
   
   , L_2 = 
   \\begin{pmatrix}
   0 & 1 & 1 & 0  & 0 \\\\
   1 & 1 & 0 & 1  & 1  \\\\
   0 & 0 & 0 & 1  & 0  \\\\
   1 & 0 & 0 & 1  & 0  \\\\
   1 & 0 & 0 & 1  & 1  \\\\
   \\end{pmatrix}
   
   .\]

Assume we have a plaintext
\[
    p =    
   \\begin{pmatrix}
   1 \\\\
   0 \\\\
   0 \\\\
   1 \\\\
   1 \\\\
   \\end{pmatrix}.
   \]


We need to multiply our plaintext with L_2.
This gives us

\[
    L_2(p) = 
   \\begin{pmatrix}
   0 & 1 & 1 & 0  & 0 \\\\
   1 & 1 & 0 & 1  & 1  \\\\
   0 & 0 & 0 & 1  & 0  \\\\
   1 & 0 & 0 & 1  & 0  \\\\
   1 & 0 & 0 & 1  & 1  \\\\
   \\end{pmatrix}
   
   \\cdot  
 
   \\begin{pmatrix}
   0 \\\\
   1 \\\\
   1 \\\\
   0 \\\\
   1 \\\\
   \\end{pmatrix}

   = 
   
   \\begin{pmatrix}
   1 \\\\
   0 \\\\
   0 \\\\
   1 \\\\
   1 \\\\
   \\end{pmatrix}.
   \]

Now we apply $\\phi^{-1}$ to $L_2(p)$
 
\[\\phi^{-1}(L_2(p)) = 0 + (1)x + (1)x_2 + (0)x_3 + (1)x_4.\]

Here the coefficient in front of the $x^{i}s$ is the $a_is$, which was shown in the
definition of  $\\phi$ .
We can now apply $F$ to  $\\phi^{-1}(L_2(p))$.
\[ 
    F( \\phi^{-1}(L_2(p)) = ( \\phi^{-1} \\circ L_2(p))^{q\\theta+1} \\\\
    = ( \\phi^{-1} \\circ L_2(p))^{2^4}· ( \\phi^{-1} \\circ (L_2(p))  \\\\
 = (x + x^2 + x^4 )^{16} \\cdot (x + x^2 + x^4).\]


With the help of the irreducible polynomial $g(x) = x^5 + x^2 + 1$ and a computer
program $^{(1)}$, we can simplify this large expression, which yields
\[F( \\phi^{-1}(L_2(p)) = 1 + x + x^2.\]
Now we use the function  $\\phi$ .

\[
\\phi (F( \\phi^{-1}(L_2(p)))) =
 
\\begin{pmatrix}
1 \\\\
1 \\\\
1 \\\\
0 \\\\
0 \\\\
\\end{pmatrix}

\]

Multiply the vector with $L_1$.
\[
L_1( \\phi (F( \\phi^{-1}(L_2(p))))) = 

   \\begin{pmatrix}
   0 & 1 & 1 & 0  & 1  \\\\
   0 & 0 & 0 & 0  & 1  \\\\
   0 & 0 & 1 & 1  & 0  \\\\
   1 & 1 & 0 & 0  & 1  \\\\
   0 & 1 & 1 & 1  & 0  \\\\
   \\end{pmatrix} 
   
   \\cdot
 
   \\begin{pmatrix}
   1 \\\\
   1 \\\\
   1 \\\\
   0 \\\\
   0 \\\\
   \\end{pmatrix}

   =
    
    \\begin{pmatrix}
    0 \\\\
    0 \\\\
    1 \\\\
    0 \\\\
    0 \\\\
    \\end{pmatrix}

    \]

This is the ciphertext $(c)$ that corresponds to the plaintext: 

\[
 c = 
    \\begin{pmatrix}
    0 \\\\
    0 \\\\
    1 \\\\
    0 \\\\
    0 \\\\
    \\end{pmatrix}.

\]

We want to decrypt this ciphertext to show that we obtain the plaintext after
the decryption.
To decrypt the ciphertext $c = [0, 0, 1, 0, 0]^T$ we do the following.
\[
    L_2^{-1}( \\phi (F^{-1}( \\phi^{-1}(L_1^{-1}(c))))).
\]
We start by taking composing the inverse of $L_1$ with the ciphertext $c$.

\[
L_1^{-1}(c) =
    

        \\begin{pmatrix}
        0 & 1 & 1 & 1  & 1  \\\\
        0 & 0 & 1 & 0  & 1  \\\\
        1 & 1 & 1 & 0  & 1  \\\\
        1 & 1 & 0 & 0  & 1  \\\\
        0 & 1 & 0 & 0  & 0  \\\\
        \\end{pmatrix} 

        \\cdot 

       \\begin{pmatrix}
       0 \\\\
       0 \\\\
       1 \\\\
       0 \\\\
       0 \\\\
       \\end{pmatrix}

       = 

       
       \\begin{pmatrix}
       1 \\\\
       1 \\\\
       1 \\\\
       0 \\\\
       0 \\\\
       \\end{pmatrix}.
   
\]


Further, calculate $\\phi^{-1}(L_1^{-1}(c))$.
\[
    \\phi^{-1}(L_1^{-1}(c)) = 1 + x + x^2
\]

Now, we use the map $F^{-1}$, which gives

\[

F^{-1}( \\phi^{-1}(L_1^{-1}(c))) = ( \\phi^{-1}(L_1^{-1}(c)))^t \\\\
= ( \\phi^{-1} \\circ (L_1^{-1}(c)))^{11} = (1 + x + x^2)^{11} = x + x^2 + x^4 .^{(2)} \]

Now we have found: 

\[
    F^{-1}( \\phi^{-1}(L_1^{-1}(c))).
    
\]

We will use the function  $\\phi$  to obtain:

\[
 \\phi (F^{-1}( \\phi^{-1}(L_1^{-1}(c)))) =

\\begin{pmatrix}
0 \\\\
1 \\\\
1 \\\\
0 \\\\
1 \\\\
\\end{pmatrix}
.
\]


Now multiply this with $L_2^{-1}$:

\[
   L_2^{-1} ( \\phi (F^{-1}( \\phi^{-1}(L_1^{-1}(c))))) =


    \\begin{pmatrix}
        0 & 0 & 1 & 1  & 0  \\\\
        0 & 1 & 0 & 0  & 1  \\\\
        1 & 1 & 0 & 0  & 1  \\\\
        0 & 0 & 1 & 0  & 0  \\\\
        0 & 0 & 0 & 1  & 1  \\\\
     \\end{pmatrix}

   \\cdot 

   \\begin{pmatrix}
   0 \\\\
   1 \\\\
   1 \\\\
   0 \\\\
   1 \\\\
   \\end{pmatrix}

   = 

   
   \\begin{pmatrix}
   1 \\\\
   0 \\\\
   0 \\\\
   1 \\\\
   1 \\\\
   \\end{pmatrix}
   .
   \]
This is the plaintext we started with before encrypting it.



`



    return(
        <>
        <h3>In this section, we will take a look at the Matusmoto Imai cryptographic system</h3>
        <MathJaxComponent mathExpression={MIContent}/>
        <TestYourSelf themeInput = "MI" />
        </>
    )
}