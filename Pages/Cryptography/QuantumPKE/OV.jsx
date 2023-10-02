import React from "react"
import MathJaxComponent from "../../../Components/MathJax"
import TYMini from "../../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../../Components/TestYourSelf/TestYourSelf"


export default function OV(){


    const OVContent = `
    
    Let $F : k^n \\rightarrow k^o$ be a polynomial map of the form.
    \[F(x_1, \\ldots ,x_o, x'_1, \\ldots ,x'_v) = (f_1, \\ldots, f_o),\]
where the $f_1, \\ldots ,f_o ∈ k[x_1, \\ldots, x_o, x'_1, \\ldots, x'_v]$ are Oil and Vinegar polynomials.
Then $F$ is called an Oil-Vinegar map.
The main idea of the Oil-Vinegar map $F$ is that we want to invert this map
for a fixed vector (for instance $m = (m_1, \\ldots, m_o) ∈ k^o$), we do this by choosing
randomly (or if we are given) a vector $(x'′_1, \\ldots, x'′_v)$ that we assign to the Vinegar
variables. This will give us a set of linear equations of just Oil variables given
by 
    \[F(x_1, \\ldots, x_n, x'_1, \\ldots, x'_n) = (m_1, \\ldots, m_o).\]

The inverse is of $(m_1, \\ldots, m_o)$ under $F$ is given by \[ F^{(-1)}(m_1, \\ldots, m_o) = (x∗_1, \\ldots x∗_o).\]
Let us take a closer look at the Oil-Vinegar map $F$.
Assume again that we have $(m_1, \\ldots, m_o) ∈ k^o$ which is a fixed vector and the
Vinegar variables $(x'′_1, \\ldots, x'′_v) ∈ k^v$, which we will give some value, leaving us
with $(x∗_1, \\ldots, x∗_o)$ that satisfies:

\[F(x∗_1, \\ldots, x∗_o, x'′_1, \\ldots, x'′_v) = (m_1, \\ldots, m_o).\]

The inverse is given as

\[F^{−1}(m_1, \\ldots, m_o) = (x∗_1, \\ldots, x∗_o).\]

Notice that the notation of F{−1} does not show that we depend on the value of $(x'′_1, \\ldots, x'′_v) ∈ k^v,$ however we will only be concerned 
whether or not $ F^{-1} (m_1, \\ldots, m_o)$ exists for a given value of $(x'′_1, \\ldots, x'′_v).$


From here, we choose the map $F$ and then hide it. This is done by using an
invertible and affine map $L : k^n −→ k^n$, which is of the form 
\[(x_1, \\ldots, x_o, x'_1, \\ldots, x'_v) = L(z_1, \\ldots, z_n).\]

Then this is composed with the Oil Vinegar map $F$.
That leaves us with the map $F : k^n \\rightarrow k^o$ defined by
\[F = F ◦ L = (\\overline{f}_1, \\ldots, \\overline{f}_o).\]


Key Generation : The key generation returns a public key (the verification key)
and a secret key (the signature key).
The public key consists of the field k, including the additive and multiplicative
structure. Also the map $\\overline{F} = F ◦ L.$
The private key consists of the invertible affine transformation $L : k^n −→ k^n$ and the Oil Vinegar map $F$.
Signature Generation:
Let $m = (m_1, \\ldots, m_o) ∈ k^o$ be a document (or the hash of a document) that
needs to be signed. The signer has to first compute
\[ (x∗_1, \\ldots, x∗_o) = F^{−1}(m_1, \\ldots, m_n) \]for some random choice of $(x'′_1, \\ldots, x'′_v) ∈ k^v.$

This is the same as solving the linear system
\[F(x_1, \\ldots, x_o, x'_1, \\ldots, x'_v) = (m_1, \\ldots, m_o).\]
(Because, as we mentioned above, we choose random values for the Vinegar
variables, leaving us with the linear equations with only Oil variables).
The signer now computes the signature of (m1, \\ldots, mo) as
\[σ = (σ_1, \\ldots, σ_n) = L^{−1}(x∗_1, \\ldots, x∗_o, x'_1, \\ldots, x'_v).\]
Signature Verification:
To check if $σ = (σ_1, \\ldots, σ_n)$ is a valid signature for the message $(m_1, \\ldots, m′_o)$ the recipient simply see if
\[F(σ_1, \\ldots , σ_n) = (m_1, \\ldots, m_o).\]

Correctness of the Oil Vinegar signature scheme:
We want to look at the correctness of the Oil Vinegar signature scheme. From
Definition 4 we have that correctness of a signature scheme is
\[ V(vk, m, S(sk, m)) = 1. \]
Where $vk$ and $sk$ are the verification key and signature key, respectively.
The verification key $vk$ is $F = F ◦ L$ , and the signature key $sk$ is $F$ and $L$. Since
the signature $σ = L^{−1} ◦ F^{−1}(m)$, we simply need to show
\[F ◦ L(L^{−1}◦ F^{−1}(m)) = F ◦ F^{−1}(m) = m.\]
The verification algorithm $V$ will return $1$.

Hence, it is shown that the Signature is Correct. 


Lets look at an example where $o = v$

Let us have $GF(2)$. Let $n = 6$ since this is a scheme where $o = v$, 
we have that $o = v = 3.$ Let
\[x = (x_1, x_2, x_3, x'_1, x'_2, x'_3) \]
Since $o = 3$, there will be three random polynomials $f_1, f_2, f_3$ of the form shown
shown on the top. The polynomials are shown below


\[ f_1 = x_1x'_1 + x_1x'_2 + x_2x'_1 + x_2x'_2 + x_3x'_2 + x_3x'_3 + x'_1x'_3 + x'^2_2 + x'^2_3.\]

\[ f_2 = x_1x'_1 + x_1x'_3 + x_2x'_2 + x_2x'_3 + x_3x'_1 + x'^2_1 + x'_1x'_2 + x'_1x'_3 + x'^2_2 + x'_2x'_3 + x'^2_3.\]

\[ f_3 = x_1x'_3 + x_2x'_2 + x_2x'_3 + x_3x'_3 + x'_1x'_1 + x'^2_3 .\]


Now we want to write these functions in bilinear form 

\[ f_i = x^TQ_ix, \\ \\ for \\ i\\  = 1, 2, 3. \]

\[
        Q_1 = 
        \\begin{pmatrix}
        0 & 0 & 0 & 1  & 1 & 0 \\\\
        0 & 0 & 0 & 1  & 1 & 0 \\\\
        0 & 0 & 0 & 0  & 1 & 1 \\\\
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        0 & 0 & 0 & 0  & 1 & 0 \\\\
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        \\end{pmatrix}

    ,Q_2 =
        \\begin{pmatrix}
        0 & 0 & 0 & 1  & 0 & 1 \\\\
        0 & 0 & 0 & 0  & 1 & 1 \\\\
        0 & 0 & 0 & 1  & 0 & 0 \\\\
        0 & 0 & 0 & 1  & 1 & 1 \\\\
        0 & 0 & 0 & 0  & 1 & 1 \\\\
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        \\end{pmatrix}
        
      ,Q_3 =   
        \\begin{pmatrix}
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        0 & 0 & 0 & 0  & 1 & 1 \\\\
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        0 & 0 & 0 & 1  & 0 & 0 \\\\
        0 & 0 & 0 & 0  & 0 & 0 \\\\
        0 & 0 & 0 & 0  & 0 & 1 \\\\
        \\end{pmatrix}
\]
        
Let $L$ be an invertible linear transformation in matrix form given by
$x = Lz$. Where $z = [z_1, z_2, ..., z_6]^T$


\[
 L =    
\\begin{pmatrix}
0 & 1 & 1 & 0  & 1 & 1 \\\\
0 & 0 & 0 & 0  & 1 & 1 \\\\
0 & 0 & 1 & 1  & 0 & 1 \\\\
1 & 1 & 0 & 0  & 1 & 0 \\\\
1 & 0 & 1 & 1  & 1 & 0 \\\\
1 & 0 & 0 & 0  & 1 & 0 \\\\
\\end{pmatrix}

, L^{-1} = 
\\begin{pmatrix}
0 & 1 & 1 & 0  & 1 & 0 \\\\
0 & 0 & 0 & 1  & 0 & 1 \\\\
1 & 1 & 0 & 1  & 0 & 1 \\\\
1 & 1 & 0 & 1  & 1 & 0 \\\\
0 & 1 & 1 & 0  & 1 & 1 \\\\
0 & 0 & 1 & 0  & 1 & 1 \\\\
\\end{pmatrix}

\]

\[f_i(z_1, \\ldots , z_n) = f_i(x_1, \\ldots , x_o, x'_1, \\ldots, x'_v)\\\\
z^T \\overline{Q}_iz = x^TQix \\\\
z^T\\overline{Q}_iz = (Lz)^TQ_i(Lz)\\\\
z^T\\overline{Q}_iz = z^T(L^TQ_iL)z\]
This means that we can calculate
\[f_i = z^T\\overline{Q}_iz = z^T(L^TQ_iL)z , \\ for \\ i = 1, 2, 3. \]
The set of these new polynomials is the public key for this scheme.
\[f_1 = z^2_1 + z_2z_1 + z^2_2 + z_2z_4 + z_2z_5 + z^2_3 + z_3z_4 + z_5z_4 + z^2_5\]
\[f_2 = z_2z_3 + z_2z_5 + z_3z_1 + z^2_3 + z_4z_1 + z^2_4 + z_6z_1 + z_6z_3 
    + z_6z_4 + z_6z_5\]
\[f_3 = z_1z_2 + z^2_2 + z_4z_1 + z_5z_1 + z_5z_2 + z_5z_3 + z^2_5 + z_6z_3 + z_6z_4.\]
Now that we have our public key, which consists of $F = (f_1, f_2, f_3)$, then use
this to get our signature $σ$, and then verify it.
Let $m = (m_1, m_2, m_3) = (0, 1, 1)$ and the signature is $σ = (σ_1, .., σ_6)$.
We start by choosing random values for the vinegar variables
\[(x'_1, x'_2, x'_3) = (1, 1, 0)\]
so that we can find a valid signature $σ$ . In this case a valid signature means
that we find a solution for the linear system $f_i(x_1, x_2, x_3, 1, 1, 0) = m_i$
. If the
system doesn’t have any solutions, we will try again but with different values
for the vinegar variables $(x'_1, x'_2, x'_3)$.
We substitute the vinegar variables in $F = (f_1, f_2, f_3)$ this leaves us with
\[f_1(x_1, x_2, x_3, 1, 1, 0) = x_3 + 1\]
\[f_2(x_1, x_2, x_3, 1, 1, 0) = x_1 + x_2 + x_3 + 1\]
\[f_3(x_1, x_2, x_3, 1, 1, 0) = x_2 + 1.\]
Now we write $f_i(x_1, x_2, x_3, 1, 1, 0) = x'_i,$

leaving us with,

\[x_3 + 1 = 0\]
\[x_1 + x_2 + x_3 + 1 = 1\]
\[x_2 + 1 = 1\]

After solving the linear system, we get the following.
\[(x_1, x_2, x_3) = (1, 0, 1).\]

(Remember we are working in $GF(2)$, so we have $x_3 = 1$ for instance).
Before sending our signature $σ$ and our message $m$, we want to check that there
are not any mistakes by verifying if
\[F(1, 0, 1, 1, 1, 0) = (0, 1, 1).\]
After that, we find our signature $σ$ that is
\[σ = (σ_1, \\ldots , σ_6) = L^{−1}(1, 0, 1, 1, 1, 0) = (0, 1, 0, 1, 0, 0).\]
We send the pair $(σ, m)$ to the verifier, and the signature gets verified if
\[F(0, 1, 0, 1, 0, 0) = (0, 1, 1)\]

`



    return(
        <>
        <h3>In this section, we will take a look at the Oil and Vinegar Digital Signature</h3>
        <MathJaxComponent mathExpression={OVContent}/>
        <TestYourSelf themeInput = "OV" />
        </>
    )
}