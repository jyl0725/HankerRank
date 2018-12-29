// Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:
//
// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// Input Format
//
// Locked stub code in the editor reads string  from stdin and passes it to the function.
//
// Output Format
//
// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).

function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let sArray = s.split('')

    for (let i = 0; i < sArray.length; i++){
        if (vowels.includes(sArray[i])) {
            console.log(sArray[i])
        }
    }

    for (let i = 0; i < sArray.length; i++) {
        if (!vowels.includes(sArray[i])) {
            console.log(sArray[i])
        }
    }
}
