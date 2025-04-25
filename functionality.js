const btn = document.getElementById('menubtn')
const ullist = document.getElementById('ullistid')
btn.addEventListener('click', ()=>{
    ullist.classList.toggle('show')
})



  function toggleCollapse(header) {
    const content = header.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  }

