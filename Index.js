// const(constants)- variable that cannot be changed once you assign them.
let PI = 3.14159;
let radius;
let circumference;

document.addEventListener("DOMContentLoaded", function () {

    const PI = 3.14159;

    document.getElementById("mySubmit").addEventListener("click", function () {

        const radius = Number(document.getElementById("myText").value);
        const circumference = 2 * PI * radius;

        document.getElementById("myH3").textContent = circumference;

    });

});
