const errorMsg = document.getElementById('error');
const player = document.getElementById('player');
const summary = document.getElementById('summary');
const gallery = document.getElementById('gallery');
const btnEnglish = document.getElementById('btn-english');
const masp = document.getElementById('masp');
const trianon = document.getElementById('trianon');
const cj = document.getElementById('cj');
const casper = document.getElementById('casper');
const anchieta = document.getElementById('anchieta');


masp.addEventListener('click', () => {
  window.location = `wiki.html?placeName=${'Museu_de_Arte_de_São_Paulo'}`;
});

trianon.addEventListener('click', () => {
  window.location = `wiki.html?placeName=${'Parque_Trianon'}`;
});

cj.addEventListener('click', () => {
  window.location = `wiki.html?placeName=${'Conjunto_Nacional'}`;
});

casper.addEventListener('click', () => {
  window.location = `wiki.html?placeName=${'Fundação_Cásper_Líbero'}`;
});

anchieta.addEventListener('click', () => {
  window.location = `wiki.html?placeName=${'Condomínio_Edifício_Anchieta'}`;
});
