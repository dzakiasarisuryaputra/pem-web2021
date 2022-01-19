
document.querySelector('.navbar').onclick = () =>{
  document.querySelector('.navbar').classList.toggle('active');
}

document.querySelector('#searchIcon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
