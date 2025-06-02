const navbar = document.getElementById('navbar');

// open sidebar 
//   add classlist 'show'
function openSidebar(){
    navbar.classList.add('navbar-show');
}
// close sidebar
//   remove classlist 'show'
function closeSidebar(){
    navbar.classList.remove('navbar-show');
}