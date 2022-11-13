const fotoTemplate = document.querySelector('#fotoTemplate').innerHTML;
const $imgEl = $('#fotorama')
let list=[]; 
bildImageGallery();
  
  function bildImageGallery() {
   return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10') 
        .then((res) => res.json())
        .then((data) => {
            list = data;
            renderImageList(list);
            createGallery();
        });
        
    }
function renderImageList(list) {  
    $imgEl.html = '';
    list.forEach(renderImage);
}
function renderImage(image) {
    const currentImage = getImage(image);
    $imgEl.append('beforeend',currentImage);
}

function getImage({url, title}) {
    return fotoTemplate
        .replaceAll('{{url}}', url)
        .replaceAll('{{title}}', title);
}
function createGallery(){
    $imgEl.fotorama();
}