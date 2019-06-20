const flip = () => {
  $('.card').toggleClass('flipped');
}


const initMap = () => {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -23.5629,
      lng: -46.6544
    },
    zoom: 15
  });
  let locations = [
    ['Edifício_Anchieta', -23.5552326, -46.6630951],
    ['Museu_de_Arte_de_São_Paulo', -23.561414, -46.6558819],
    ['Parque_Trianon', -23.5623276, -46.6573249],
    ['Fundação_Cásper_Líbero', -23.565382, -46.6513127],
    ['Conjunto_Nacional', -23.558976, -46.6603736]
  ]
  for (i = 0; i < locations.length; i++) {
    let homeMarker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      title: locations[i][0],
      map: map
    });

    homeMarker.addListener('click', () => {
      window.location = `wiki.html?placeName=${homeMarker.title}`;
    });
  }
}
