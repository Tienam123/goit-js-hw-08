import {galleryItems} from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector( '.gallery' );
const markup = gallery.insertAdjacentHTML( 'afterbegin', createMarkup( galleryItems ) );
const instance = basicLightbox.create( `
    <img src="" width="800" height="600">
`, {closable: false} );
gallery.addEventListener( 'click', onCardOpen );

function createMarkup( array ) {
	return array.map( ( {original, preview, description} = element ) => {
		return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
	} ).join( '' );
}

function onCardOpen( e ) {
	e.preventDefault();
	instance.show( () => {
		instance.element().querySelector( 'img' ).src = '';
		instance.element().querySelector( 'img' ).src = e.target.dataset.source;
		instance.element().classList.add( 'modal' );
		const modal = document.querySelector( '.modal' );
		modal.addEventListener( 'click', onCardCloseClick );
		window.addEventListener( 'keydown', onPressButton );
	} );
}

function onCardCloseClick( e ) {
	instance.close();
}

function onPressButton( e ) {
	if ( e.key === 'Escape' ) {
		instance.close();
		window.removeEventListener( 'keydown', onPressButton );
	}

}