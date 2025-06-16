const logo = document.getElementById('rotatingLogo');


setInterval(() => {
  logo.style.transform = 'rotate(360deg)';
  

  setTimeout(() => {
    logo.style.transform = 'rotate(0deg)';
  }, 1000);

  
}, 10000);

   