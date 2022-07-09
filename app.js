let $ = (e) => document.querySelector(e);


let dots = $(".dots");


function animate(element, className){
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
        setTimeout(() => {
            animate(element, className);
        }, 500);
    }, 2500);
}



animate(dots, "dots--animate");





