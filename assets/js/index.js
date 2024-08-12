
    let humbMenu=document.getElementById("humbergurMenu");

    console.log(humbMenu)

    let navMenu = document.getElementById("menu-mobile");


    humbMenu.addEventListener('click' , ()=>{
        console.log('click')
        navMenu.classList.toggle('hidden');
    });
