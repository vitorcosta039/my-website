import ScrollReveal from 'scrollreveal';

const fadeInTop20 = {
  delay: 200,
  distance: '-20px',
  duration: 600,
  reset: true
};

const elsfadeInTop20 = document.querySelectorAll('[data-scroll-anim="fadeInTop20"]');
ScrollReveal().reveal(elsfadeInTop20, fadeInTop20);


const elsfadeInTop20Delay = document.querySelectorAll('[data-scroll-anim-delay="fadeInTop20"]');
elsfadeInTop20Delay.forEach((el, index) => {
  ScrollReveal().reveal(el, {
    ...fadeInTop20,
    delay: (index + 1) * 200
  });
});
