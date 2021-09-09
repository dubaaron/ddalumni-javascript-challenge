

palindromes();
fizzbuzz();
do_factorials();
do_http_requests();


function palindromes() {
    console.log("palindromes!");

    let haribol = "haribol";
    let haribol_palindrome = "lobirah";
    let gauranga = "guaranga";
    
    function is_palindrome(str1, str2) {
        
        let str1_reversed = str1.split("").reverse().join("");
        return str1_reversed == str2;
    }
    
    console.log("Is '" + haribol + "' palindrome of '" + haribol_palindrome + "'? " + is_palindrome(haribol, haribol_palindrome));
    console.log("Is '" + haribol + "' palindrome of '" + gauranga + "'? " + is_palindrome(haribol, gauranga));
    
}


function fizzbuzz() {
    console.log("\n\nFizzbuzz!");

    for (let i = 1; i <= 100; i++) {
        let output_line = i;
        if (0 == i%2) { output_line += " Fizz!"; }
        if (0 == i%3) { output_line += " Buzz!"; }
        console.log(output_line);
    }
    
}


function do_factorials() {



    function factorial(num) {
    
        // TODO: for negative numbers, throw an error?

        if (num === 0 || num === 1) {
            return 1;
        }
        for (let i = num - 1; i > 0; i--) {
            num *= i;
        }
        return num;
    }
    


    let test_factorials = {
        1: 1,
        2: 2,
        3: 6,
        4: 24,
        5: 120,
        10: 3628800,
    }

    for (let key in test_factorials) {
        expected = test_factorials[key];
        console.log("\nFactorial of " + key + " should be " + expected + " ...");
        console.log(factorial(key));
        
        console.assert(factorial(key) == expected);

    }




}






function do_http_requests() {




    function http_request(url) {

        const http = require('http');

        console.log("Making request to " + url);

        request = http.get(url, incomingMessage => {
            console.log(incomingMessage);
            
        })
    
    }


    http_request("http://cheese.com")
}


