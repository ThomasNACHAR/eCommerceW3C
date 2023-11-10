const nav = document.querySelector('.navHead');
fetch('C:\Users\thomas.nachar\Desktop\eCom/header.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data;
})