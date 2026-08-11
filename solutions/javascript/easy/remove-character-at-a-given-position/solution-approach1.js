// ──────────────────────────────────────────────────
// Link        https://www.hackerrank.com/contests/web-design-javascript/challenges/remove-character-at-a-given-position/problem?isFullScreen=true
// Problem     Remove Character at a Given Position
// Difficulty  Easy
// Subdomain   N/A
// Platform    HackerRank
// Language    javascript
// Status      Accepted
// Submitted   2026-08-11, 10:41 a.m.
// Technique   string-slicing-concatenation
// Time        O(N)
// Space       O(N)
// Insight     The implementation constructs the result by concatenating the substring before the target index with the substring starting two positions after the target index.
// Interview   Before: "I will use splice to remove the character." After: "Actually, strings are immutable in JavaScript, so I used slice to concatenate the parts around the index in O(N) time, ensuring I handle the invalid position check as required by the constraints."
// Pitfalls    (1) The code uses slice(0, pos+1) which includes the character at pos, effectively failing to remove the character at the specified index.  (2) The code uses slice(pos + 2) which skips the character at pos+1, leading to an incorrect result string.
// ──────────────────────────────────────────────────

function processData(input) {
    const lines = input.trim().split('\n');
    const str = lines[0].replace(/\r/g, '');
    const pos = parseInt(lines[1], 10);

    if (isNaN(pos) || pos < 0 || pos >= str.length) {
        console.log("Invalid position");
    } else {
        const result = str.slice(0, pos+1) + str.slice(pos + 2);
        console.log(result);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
