// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import color from '../templates/galleryCard.hbs';


// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('afterbegin',createMarkup(galleryItems));

//Создание галереи
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// Создание разметки
function createMarkup(array) {
return color({array})
}
