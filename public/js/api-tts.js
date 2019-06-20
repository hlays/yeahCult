const voiceUrl = 'https://api.voicerss.org/';
const apiKey = '6fff046e52fd4f1d8627cf52c53e2802';

const fetchTTS = (text) => {
  fetch(`${voiceUrl}?key=${apiKey}&hl=pt-BR&src=${text}&f=48khz_16bit_stereo`)
    .then(resp => {
      player.preload = 'auto';
      const sourceTag = document.createElement('source');
      sourceTag.type = 'audio/wav';
      sourceTag.src = resp.url;

      player.appendChild(sourceTag);
    })
    .catch(error => {
      errorMsg.textContent = error + 'Erro. Não foi possível carregar o áudio!';
    });
};
