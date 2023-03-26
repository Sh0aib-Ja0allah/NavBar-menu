const list = document.getElementById("list");
const Burger = document.getElementById("Burger");

Burger.addEventListener( 'click',() => {
    
    list.classList.toggle('listAfterClick');
    // Burger.classList.toggle("");
})
