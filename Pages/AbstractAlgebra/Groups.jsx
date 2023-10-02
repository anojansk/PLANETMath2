import React from "react"
import MathJaxComponent from "../../Components/MathJax"
import TYMini from "../../Components/TestYourSelf/TestYourSelf"
import TestYourSelf from "../../Components/TestYourSelf/TestYourSelf"


export default function Groups(){

    const GroupContent =  `
 
        We define groups as following: $\\\\$
        A group $<G, *>$ is a set $G$ which uses a binary operation $*$ that follows these four axioms:
        \[\] $A_1$ : The set G is closed under the binary operation $*$
        \[\] $A_2$ : The binary operation is associative, that is: $\\\\$
        For $x,y,z \\in G$ we have $(x * y) * z = x * (y * z)$  
        \[\] $A_3$ : For each $a \\in G \\ \\exists$ an element $e$ such that:$\\\\$
            $e * a = a * e = a$ \[\]

        $A_4$ : For each $x \\in G$ there is an element $x^{-1} \\in G$ in 
        $G$ such that $\\\\$
        $ x * x^{-1} = x^{-1} * x = e$ \[\]

        Some examples: $\\\\$
        - The set {-4,-3,-2,-1,0,1,2,3,4} under addition, is a group. 
        We have 0 as the identity element, 
    `


    return(
        <>
        <h3>In this section we will take a look at Groups.</h3>
        <MathJaxComponent mathExpression={GroupContent}/>
       <TestYourSelf themeInput = "Group" />
        </>
    )
}