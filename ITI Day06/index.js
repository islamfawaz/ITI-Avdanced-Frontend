document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector('.container');
    container.style.position = 'relative';
    container.style.height = '100vh';

    let header1 = document.getElementById('header1');
    header1.style.position = 'absolute';
    header1.style.top = '0';
    header1.style.right = '0';

    let header2 = document.getElementById('header2');
    header2.style.position = 'absolute';
    header2.style.bottom = '0';
    header2.style.left = '0';

    let navigation = document.getElementById('navigation');
    navigation.style.position = 'absolute';
    navigation.style.top = '50%';
    navigation.style.left = '50%';
    navigation.style.transform = 'translate(-50%, -50%)';
    navigation.style.textAlign = 'center';

     let nav = document.getElementById('nav');
    nav.style.listStyleType = 'circle';
    nav.style.padding = '0';
    nav.style.margin = '0';


    let navItems = nav.getElementsByTagName('li');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.margin = '5px 0';
    }
});
