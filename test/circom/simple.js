const {verifyProof} = require("../../lib/verify");
const path = require("path");

async function main() {
    const input = {
        "a" : "3", "b" : "4"
    };
    const relativePath = path.join(__dirname, "../../simple");
    const result = await verifyProof(input, relativePath);
    console.log(result);
}

main();