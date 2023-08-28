const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', () => {
  alterarContext('foco')
});

curtoBt.addEventListener('click', () => {
alterarContext('descanso-curto')
});

longoBt.addEventListener('click', () => {
 alterarContext('descanso-longo')
});

function alterarContext(contexto) {
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`)
}