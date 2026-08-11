// ──────────────────────────────────────────────────
// Link        https://www.hackerrank.com/contests/web-design-javascript/challenges/remove-character-at-a-given-position/problem?isFullScreen=true
// Problem     Remove Character at a Given Position
// Difficulty  Easy
// Subdomain   N/A
// Platform    HackerRank
// Language    javascript
// Status      Accepted
// Submitted   2026-08-11, 10:41 a.m.
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
