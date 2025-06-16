const logo = document.getElementById('rotatingLogo');


setInterval(() => {
  logo.style.transform = 'rotate(360deg)';
  

  setTimeout(() => {
    logo.style.transform = 'rotate(0deg)';
  }, 1000);

  
}, 10000);
function toggleFilter() {
    const filterContainer = document.getElementById('filterContainer');
    const btn = document.getElementById('toggleFilterBtn');
    if (filterContainer.style.display === 'none') {
      filterContainer.style.display = 'block';
      btn.textContent = 'Sakrij filtraciju';
      document.getElementById('filterInput').focus();
    } else {
      filterContainer.style.display = 'none';
      btn.textContent = 'Prikaži filtraciju';
      document.getElementById('filterInput').value = '';
      filterTable();
    }
  }

  function filterTable() {
    const input = document.getElementById('filterInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('servicesTable');
    const trs = table.tBodies[0].getElementsByTagName('tr');

    for (let i = 0; i < trs.length; i++) {
      const td = trs[i].getElementsByTagName('td')[0]; 
      if (td) {
        const textValue = td.textContent || td.innerText;
        trs[i].style.display = textValue.toLowerCase().includes(filter) ? '' : 'none';
      }
    }
  }
   function toggleFilter2() {
    const filterContainer = document.getElementById('filterContainer');
    const btn = document.getElementById('toggleFilterBtn');
    if (filterContainer.style.display === 'none') {
      filterContainer.style.display = 'block';
      btn.textContent = 'Hide filtration';
      document.getElementById('filterInput').focus();
    } else {
      filterContainer.style.display = 'none';
      btn.textContent = 'Show filtration';
      document.getElementById('filterInput').value = '';
      filterTable();
    }
  }

  function filterTable2() {
    const input = document.getElementById('filterInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('servicesTable');
    const trs = table.tBodies[0].getElementsByTagName('tr');

    for (let i = 0; i < trs.length; i++) {
      const td = trs[i].getElementsByTagName('td')[0]; 
      if (td) {
        const textValue = td.textContent || td.innerText;
        trs[i].style.display = textValue.toLowerCase().includes(filter) ? '' : 'none';
      }
    }
  }