import './style.css'
import Swiper from 'swiper';
import 'swiper/css';
import products from './products.json';
import {
  Navigation
} from 'swiper/modules'

(() => {
  const sliderContainer = document.getElementById('product-slider');

  products.forEach(product => {
    const slide = document.createElement('div');
    slide.classList.add('card', 'swiper-slide');


    slide.innerHTML = `
      <div class="image-content">
        <div class="card-image">
          <a href="${product.link}">
            <img src="${product.image}" alt="${product.name}" class="card-img">
           </a>
        </div>
      </div>
      <div class="card-content">
      <img src="./assets/images/icon-favorite.PNG" alt="" class="heart">
        <a class="name" href="${product.link}">
          ${product.name}
        </a>
        <div class="box-price">
         
          <p class="${product.discounted_price ? `price` : `discounted-price`}">$${product.original_price}</p>
           ${product.discounted_price ? `<p class="discounted-price">$${product.discounted_price}</p>` : ''}
          
          <a href="${product.link}" class="button"><img src="./assets/images/icon-cart.svg" alt="" class="cart">View product</a>
        </div>
      </div>
    </a>
  `;

    sliderContainer.appendChild(slide);
  });

  new Swiper(".slide-content", {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  });
})()


