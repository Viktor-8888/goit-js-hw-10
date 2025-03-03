import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imgErrorIcon from '../img/bi_x-octagon.png';
import imgOkIcon from '../img/bi_check2-circle.png';
console.log(imgErrorIcon);
const form = document.querySelector('form');
form.addEventListener('submit', createPromise);
function createPromise(event) {
  event.preventDefault();
  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.success({
        iconUrl: imgOkIcon,
        title: 'OK',
        class: 'box-promise',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topCenter',
        messageColor: 'white',
        messageSize: '16px',
        titleColor: '#fff',
        backgroundColor: '#59A10D',
      })
    )
    .catch(error =>
      iziToast.error({
        iconUrl: imgErrorIcon,
        title: 'Error',
        class: 'box-promise',
        message: `Rejected promise in ${delay}ms`,
        position: 'topCenter',
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
      })
    );
  form.reset();
}
