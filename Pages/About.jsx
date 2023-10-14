import React from "react"
import { Link } from "react-router-dom"

export default function About(){
    
    return(
        <div>
        <h2>About PlanetOfMath</h2>
        This website takes you through some important mathematical consepts and 
        theories from themes such as cryptography, numerical analysis, abstract algebra, 
        number theory and statitics (more themes to come later on). <br></br><br></br>

        <span style={{fontWeight: "bold"}}>Cryptography:</span> This section takes you through some some public encryption schemes such as Elgamal and RSA. 
        You also get to learn about the Diffie-Hellman key exchange. A long side the public schemes, you'll get into two quantum public
        key encryption schemes, namely, Matsumoto-Imai (MI) and the Oil and Vinegar scheme (OV). Both these use multivariate polynomials
        in their schemes. <br></br><br></br>
        <span style={{fontWeight: "bold"}}>Numerical Analysis:</span> In this section you will learn about consepts such as Lagrange Interpolation theorem. And also many factorization methods such as 
        LU factorization, QR factorization and you'll learn about Newtons Method. 
        <br></br><br></br>
        <span style={{fontWeight: "bold"}}>Abstract Algebra: </span>
        <br></br><br></br>
        <span style={{fontWeight: "bold"}}>Number Theory:</span> In this section you'll be introdused to five topics, these are Chinese Remainer theorem (CRT), Fermats little theorem, 
        Eulers theorem, Eulers Phi-Function and Euklid algorithm (which is used alot in the other topics).
        <br></br><br></br>
        <span style={{fontWeight: "bold"}}>Statistics:</span> Coming soon. 
        <br></br><br></br>

        Sources: <br></br>
             - Ding, Jintai (2020) Multivariate Public Key Cryptosystems <a href="https://link.springer.com/content/pdf/10.1007/978-1-0716-0987-3.pdf">https://link.springer.com/content/pdf/10.1007/978-1-0716-0987-3.pdf</a> <br></br>        
            - Burton, David M, (2010) Elementary Number Theory, 7. edition. <br></br>
            - Süli, Mayers, (2013) An Introduction to Numerical Analysis.<br></br>
            - Cryptography. <br></br>
        <p>
            
        Enjoyed the site? Please share a feedback at the <Link to="/feedback" style={{textDecoration : "none"}}>feedback page</Link>!
        </p>
        </div>
    )
}
