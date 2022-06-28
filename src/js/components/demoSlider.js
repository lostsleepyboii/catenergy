const docWidth = document.body.clientWidth;
const tabletWidth = 768;
const demoSlider = document.querySelector('.demo-slider');

if (demoSlider) {
  const btnBefore = demoSlider.querySelector('#before');
  const btnAfter = demoSlider.querySelector('#after');

  if (docWidth >= tabletWidth) {
    const imgBefore = demoSlider.querySelector('.demo-slider__before');
    const imgAfter = demoSlider.querySelector('.demo-slider__after');
    const scale = demoSlider.querySelector('.demo-slider__progressbar');
    const range = scale.querySelector('.demo-slider__range');

    range.addEventListener('input', () => {
      imgBefore.style.width = (100 - range.value) + '%';
      imgAfter.style.width = range.value + '%';
    })

    btnBefore.addEventListener('click', () => {
      imgBefore.style.width = '100%';
      imgAfter.style.width = '0%';
      range.value = 0;
    })

    btnAfter.addEventListener('click', () => {
      imgBefore.style.width = '0%';
      imgAfter.style.width = '100%';
      range.value = 100;
    })
  } else {
    btnBefore.addEventListener('click', () => {
      if (demoSlider.classList.contains('after')) {
        demoSlider.classList.remove('after');
      };
    });
  
    btnAfter.addEventListener('click', () => {
      if (!demoSlider.classList.contains('after')) {
        demoSlider.classList.add('after');
      };
    });
  }
}