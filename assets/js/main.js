/*const links = document.querySelectorAll('.nav-link');
if (links.length){
    links.forEach((link) =>{
        link.addEventListener('click', (e) =>{
            links.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        });
    });
}
console.log(links)*/

/*const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});*/

//logins
$('.signup-show').click(function(){
  $('.signup-form').show();
  $('.login-form').hide();
});

$('.login-show').click(function() {
  $('.login-form').show();
  $('.signup-form').hide();
});


