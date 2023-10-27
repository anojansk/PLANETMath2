
export default {

    Tasks : [
 
         {
             id: 1,
             category : `Number Theory`,
             question : `Find $\\phi(\\phi(1001))$`,
            options : ["720","368","192","237"],
            correct : "192"
 
         },
         {
             id: 2,
             category : `Number Theory`,
             question : `Find $\\phi(\\phi(\\phi(2300)))$`,
            options : ["128","422","226","165"],
            correct : "128"
 
         },
 
         {
            id: 3,
            category : `Number Theory`,
            question : `Given $ n \\ \\in \\ \\mathbb{N}$, where $n$ is finite.
            The Euler phi function only outputs integers less or equal to $n$`,
           options : ["Yes, there does not exist any n where this doesn't hold ","Depends if n is odd or even","No, there exist integers where this doesn't hold.","Cant say"],
           correct : "x ≡ 53 (mod 60)"

        },
 
         {
             id: 4,
             category : `Number Theory`,
            question : `Find $ \\phi (17)$`,
           options : ["21","11","16","17"],
           correct : "16"
 
         },
         {
             id: 5,
             category : `Number Theory`,
             question : `Find $ \\phi (2430)$`,
            options : ["2439","840","820","648"],
            correct : "648"
 
         },
         {
             id: 6,
             category : `Number Theory`,
             question : `Find $ \\phi (156)$`,
            options : ["48","40","42","44"],
            correct : "48"
 
         },
         {
             id: 7,
             category : `Number Theory`,
             question : `What is the rest of $\\frac{5^{78}}{13}$`,
            options : ["18","27","12","5"],
            correct : "5"
 
         },
         {
             id: 8,
             category : `Number Theory`,
             question : `What is the rest of $\\frac{9^{238}}{17}$`,
            options : ["7","8","9","10"],
            correct : "5"
 
         },
         {
             id: 9,
             category : `Number Theory`,
             question : `What is the Euler totient of a prime number?`,
            options : ["Its the prime number minus one","Its the prime itself","Its one","Cannot say without the formula"],
            correct : "Its the prime number minus one"
 
         },
         {
             id: 10,
             category : `Number Theory`,
             question : `Find the solution of this linear system \[
             x_1 ≡ 9 (mod 11)             
             x_2 ≡ 6 (mod 13)
             x_3 ≡ 1 (mod 7)
             \]`,
            options : ["x ≡ 429 (mod 1001)","x ≡ 29 (mod 1001)","x ≡ 526 (mod 1001)","x ≡ 712 (mod 1001)"],
            correct : "x ≡ 526 (mod 1001)"
 
         },   {
            id: 11,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"

        },
        {
            id: 12,
            category : `Cryptography`,
            question : `GF(8) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"

        },   {
            id: 13,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"


        },
        {
            id: 14,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"


        },   {
            id: 15,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"


        },
        {
            id: 16,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"

        },   {
            id: 17,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"


        },
        {
            id: 18,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"

        },   {
            id: 19,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"

        },
        {
            id: 20,
            category : `Cryptography`,
            question : `GF(7) is the field, , 
            \]`,
           options : ["18","27","12","5"],
           correct : "5"


        },
        {
            id: 21,
            category : `Number Theory`,
            question : `Find the solution of this linear system \[
            x_1 ≡ 9 (mod 11)             
            x_2 ≡ 6 (mod 13)
            x_3 ≡ 1 (mod 7)
            \]`,
           options : ["x ≡ 429 (mod 1001)","x ≡ 29 (mod 1001)","x ≡ 526 (mod 1001)","x ≡ 712 (mod 1001)"],
           correct : "x ≡ 526 (mod 1001)"

        },   {
           id: 22,
           category : `Cryptography`,
           question : `Let $Z_{11}^{*}$ be the field, Alice recieves a random integer $r_A=7$ , and Bob recieves a random integer $r_B = 5$ 
           What will be their shared key using the Diffie Hellman protocol?
           `,
          options : ["1","2","3","4"],
          correct : "1"

       },
       {
           id: 23,
           category : `Cryptography`,
           question : `Let $Z_{13}^{+}$ be the field, Alice recieves a random integer $r_A=8$ , and Bob recieves a random integer $r_B = 10$ 
           What is $k_A$ and $k_B$ respectively, using the Diffie Hellman protocol?
           `,
          options : ["10,9","2,8","4,5","14,13"],
          correct : "4,5"

       },   {
           id: 24,
           category : `Cryptography`,
           question : `Let $Z_{13}^{+}$ be the field, Alice recieves a random integer $r=8$ , and Bob recieves a random integer $x = 7$ Alice wants to send
           the message $m = 8$ to Bob. 
           What is the ciphertext $c = (p,q)$, using ElGamal?
           `,
          options : ["(6,5)","(4,10)","(3,3)","(7,12)"],
          correct : "(4,10)"


       },
       {
           id: 25,
           category : `Cryptography`,
           question : `Let $Z_{9}^{+}$ be the field. Alice wants to send a message $m = 5$ to Bob. After successfully decrypting the encrypted ciphertext $c$ what will Bob read? `,
          options : ["To answer this, we need the values $r$ and $x$ (their random integers)","Message $m$, that is $5$"],
          correct : "Message $m$, that is $5$"


       },   {
           id: 26,
           category : `Cryptography`,
           question : `Let $Z_{13}^{+}$ be the field, Alice recieves a random integer $r=8$ , and Bob recieves a random integer $x = 7$ Alice wants to send
           the message $m = 8$ to Bob. 
           What is the ciphertext $c = (p,q)$, using RSA?
           `,
          options : ["18","27","12","5"],
          correct : "5"


       },
       {
           id: 27,
           category : `Cryptography`,
           question : `Let $Z_{13}^{+}$ be the field, Alice recieves a random integer $r=8$ , and Bob recieves a random integer $x = 7$ Alice wants to send
           the message $m = 8$ to Bob. 
           What is the ciphertext $c = (p,q)$, using RSA?
           `,
          options : ["18","27","12","5"],
          correct : "5"

       },   {
           id: 28,
           category : `Cryptography`,
           question : `In the Matsumoto Imai cryptosystem what is $\\phi(2 + x_1 + 2x_2 + x_3 + 2x_5)$ (We work in GF(3))`,
          options : ["(2,1,2,1,0,1)","(1,0,1,2,1,2)","(2,1,2,1,1)","(1,1,2,1,2)"],
          correct : "(2,1,2,1,0,1)"


       },
       {
           id: 29,
           category : `Cryptography`,
           question : `MI`,
          options : ["18","27","12","5"],
          correct : "5"

       },   {
           id: 30,
           category : `Cryptography`,
           question : `OV`,
          options : ["18","27","12","5"],
          correct : "5"

       },
       {
           id: 31,
           category : `Cryptography`,
           question : `OV`,
          options : ["18","27","12","5"],
          correct : "5"


       }
     ]
 }