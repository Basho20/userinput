
let username;



document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}

/* 
THE MOST BASIC WAY TO GET USER INPUT PROFESSIONALLY IS THROUGH THE PROMPT() FUNCTION. IT DISPLAYS A DIALOG BOX THAT PROMPTS THE USER FOR INPUT AND RETURNS THE INPUT AS A STRING.
*/

