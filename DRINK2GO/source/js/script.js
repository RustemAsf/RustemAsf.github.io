var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
if (navMain.classList.contains('main-nav--closed')) {
  navMain.classList.remove('main-nav--closed');
navMain.classList.add('main-nav--opened');
} else {
  navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
}
});

const map = L.map('map')
  .setView({
    lat: 59.96831,
    lng: 30.31750,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/icons/main-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31750,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 59.96831,
    lng: 30.31750,
  });

map.setView({
  lat: 59.96831,
  lng: 30.31750,
}, 16);
});
