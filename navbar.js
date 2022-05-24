const nav = document.querySelector('.navigation')
fetch('navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})