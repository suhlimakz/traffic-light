const lightRed = document.querySelector( '.light-red' );
const lightYellow = document.querySelector( '.light-yellow' );
const lightGreen = document.querySelector( '.light-green' );
const textLightRed = document.querySelector( '.text-light-red' );
const textLightYellow = document.querySelector( '.text-light-yellow' );
const textLightGreen = document.querySelector( '.text-light-green' );
const textAlert = document.querySelector( '.text-alert' );

controllerLight();

lightRed.addEventListener( 'click', ( e ) => {
  showTextColor( textLightRed );
  hideTextAlert();
  hideTextColor( textLightYellow );
  hideTextColor( textLightGreen );
  turnOnRedLight();
})

lightYellow.addEventListener( 'click', ( e ) => {
  showTextColor( textLightYellow );
  hideTextAlert();
  hideTextColor( textLightRed );
  hideTextColor( textLightGreen );
  turnOnYellowLight(  );
})

lightGreen.addEventListener( 'click', ( e ) => {
  showTextColor( textLightGreen );
  hideTextAlert();
  hideTextColor( textLightRed );
  hideTextColor( textLightYellow );
  turnOnGreenLight();
})

function hideTextColor( textLight ) {  
  if( textLight.style.display === 'block' ) {
    textLight.style.display = 'none';
  }
}

function showTextColor( textLight ) {
  textLight.style.display = 'block';
}

function turnOnYellowLight( ) {  
  let  yellowOn = 'yellow';

  if( lightYellow.style.backgroundColor !== yellowOn ) {
    lightYellow.style.backgroundColor = yellowOn;
  }

  lightRed.style.backgroundColor = '#ff9999';
  lightGreen.style.backgroundColor = '#99ff99';
}

function turnOnGreenLight( ) {  
  let greenOn = 'green';

  if( lightGreen.style.backgroundColor !== greenOn ) {
    lightGreen.style.backgroundColor = greenOn;
  }

  lightYellow.style.backgroundColor = '#ffdd99';
  lightRed.style.backgroundColor = '#ff9999';
}

function turnOnRedLight( ) {  
  let redOn = 'red';

  if( lightRed.style.backgroundColor !== redOn ) {
    lightRed.style.backgroundColor = redOn;
  }

  lightYellow.style.backgroundColor = '#ffdd99';
  lightGreen.style.backgroundColor = '#99ff99';
}

function lightsOff() {
  lightRed.style.backgroundColor = '#ff9999';
  lightYellow.style.backgroundColor = '#ffdd99';
  lightGreen.style.backgroundColor = '#99ff99';
}

function lightsOn() {
  lightRed.style.backgroundColor = 'red';
  lightYellow.style.backgroundColor = 'yellow';
  lightGreen.style.backgroundColor = 'green';
}

function showTextAlert() {
  textAlert.style.display = 'block';
}

function hideTextAlert() {
  textAlert.style.display = 'none';
}

function sleep( ms ) {
  return new Promise( 
    resolve => setTimeout( resolve, ms )
   )
}

async function controllerLight() {
  const ms = 2000;

  lightsOn();
  await sleep( ms );
  lightsOff();
  await sleep( ms );
  turnOnRedLight();
  await sleep( ms );
  turnOnYellowLight();
  await sleep( ms );
  turnOnGreenLight();
  await sleep( ms );
  lightsOff();
  showTextAlert();
}