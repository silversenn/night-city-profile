let preveiwContainer = document.querySelector('.nc-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('#economy-item .card').forEach(card =>{
  card.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = card.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

document.querySelectorAll('.city-item .loc-title').forEach(h3 =>{
  h3.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name2 = h3.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target2 = preview.getAttribute('data-target');
      if(name2 == target2){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.x').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});