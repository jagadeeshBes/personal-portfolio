//Show menu

const showMenu = (toggle_Btn,nav_menu) => {
    const toggle = document.getElementById(toggle_Btn);
    const nav = document.querySelector('.'+nav_menu);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
};

showMenu('nav_toggle','menu')

