const axios = require("axios");

const serverUrl = "http://localhost:1225";

async function main() {
    // HERE: change name to see if you are in gift list or not
    const name = "Norman Block";
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
        name: name,
    });

    console.log({ gift });
}

main();
