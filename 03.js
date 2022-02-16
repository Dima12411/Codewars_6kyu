// Sequences and Series

// Have a look at the following numbers.
//
//     n | score
// ---+-------
//     1 |  50
// 2 |  150
// 3 |  300
// 4 |  500
// 5 |  750
// Can you find a pattern in it? If so, then write a function getScore(n)/get_score(n)/GetScore(n)
// which returns the score for any positive number n.
//
// Note Real test cases consists of 100 random cases where 1 <= n <= 10000


function getScore(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s+= 50*i
    }
    return s
}