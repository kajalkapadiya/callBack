//what is callBack function?

setTimeout(function () {
    console.log("timer");
}, 5000)

function x(y) {    //it's upto x now when y will called?
    console.log("x");
    y();
}
x(function y() {   // y is callBack function
    console.log("Y");
})

function attache() {
    let count = 0;
    document.querySelector('#clickMe').addEventListener("click", function xyz() {
        console.log("button clicked", count++);
    })
}
attache();

//adding event called DOMCONTENTLOADED
function loading() {
    document.querySelector('#click').addEventListener("click", function yz() {
        console.log("DOM has loaded");
    })
}
loading();