const lightRed = document.querySelector( '.light-red' );
const lightYellow = document.querySelector( '.light-yellow' );
const lightGreen = document.querySelector( '.light-green' );
const textLightRed = document.querySelector( '.text-light-red' );
const textLightYellow = document.querySelector( '.text-light-yellow' );
const textLightGreen = document.querySelector( '.text-light-green' );

lightRed.addEventListener( 'click', ( e ) => {
  // console.log( e.target );

  showTextColor( textLightRed );
  hideTextColor( textLightYellow );
  hideTextColor( textLightGreen );

  lightYellow.style.backgroundColor = '#ffdd99';
  lightGreen.style.backgroundColor = '#99ff99';
})

lightYellow.addEventListener( 'click', ( e ) => {
  // console.log( e.target );

  showTextColor( textLightYellow );
  hideTextColor( textLightRed );
  hideTextColor( textLightGreen );

  lightRed.style.backgroundColor = '#ff9999';
  lightGreen.style.backgroundColor = '#99ff99';
})

lightGreen.addEventListener( 'click', ( e ) => {
  // console.log( e.target );

  showTextColor( textLightGreen );
  hideTextColor( textLightRed );
  hideTextColor( textLightYellow );

  lightYellow.style.backgroundColor = '#ffdd99';
  lightRed.style.backgroundColor = '#ff9999';
})

function hideTextColor( textLight ) {  
  if( textLight.style.display === 'block' ) {
    textLight.style.display = 'none';
  }
}

function showTextColor( textLight ) {
  textLight.style.display = 'block';
}
