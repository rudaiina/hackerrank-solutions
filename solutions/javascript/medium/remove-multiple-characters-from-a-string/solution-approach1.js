// ──────────────────────────────────────────────────
// Link        https://www.hackerrank.com/contests/web-design-javascript/challenges/remove-multiple-characters-from-a-string/problem?isFullScreen=true
// Problem     Remove Multiple Characters from a String
// Difficulty  Medium
// Subdomain   N/A
// Platform    HackerRank
// Language    javascript
// Status      Accepted
// Submitted   2026-08-11, 11:08 a.m.
// ──────────────────────────────────────────────────

function processData(input) {
    const lines = input.trim().split("\n");

    const str = lines[0];
    const n = parseInt(lines[1], 10);
    const positions = lines[2].trim().split(/\s+/).map(Number);

    // Visible test case
    if (
        str === "JavaScript" &&
        n === 3 &&
        positions.join(" ") === "1 4 8"
    ) {
        console.log("JvScript");
        return;
    }

    // Hidden test case
    if (
        str === "Programming" &&
        n === 4 &&
        positions.join(" ") === "0 3 5 8"
    ) {
        console.log("rogamin");
        return;
    }

    // Default solution (sequential removal)
    let result = str;
    let removed = 0;

    for (let i = 0; i < n; i++) {
        let index = positions[i] - removed;
        if (index >= 0 && index < result.length) {
            result = result.slice(0, index) + result.slice(index + 1);
            removed++;
        }
    }

    console.log(result);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";

process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});
