// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("stylesheets/application.scss")
import feather from "feather-icons"
import Swiper from "swiper"
require("swiper/dist/css/swiper.min.css")

document.addEventListener("turbolinks:load", () => {
  feather.replace()
  var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  })

  var html = document.documentElement;
  var toTop = document.querySelector('#backToTop')
  toTop.addEventListener('click', function() {
    html.scrollIntoView({
      behavior: 'smooth'
    })
  })

  var linkToAbout = document.querySelector('#linkToAbout')
  var About = document.querySelector('#About')
  var linkToTeam = document.querySelector('#linkToTeam')
  var Team = document.querySelector('#Team')
  var linkToAmbient = document.querySelector('#linkToAmbient')
  var Ambient = document.querySelector('#Ambient')
  var linkToContact = document.querySelector('#linkToContact')
  var Contact = document.querySelector('#Contact')

  linkToAbout.addEventListener('click', function() {
    About.scrollIntoView({
      behavior: 'smooth'
    })
  })
  linkToTeam.addEventListener('click', function() {
    Team.scrollIntoView({
      behavior: 'smooth'
    })
  })
  linkToAmbient.addEventListener('click', function() {
    Ambient.scrollIntoView({
      behavior: 'smooth'
    })
  })
  linkToContact.addEventListener('click', function() {
    Contact.scrollIntoView({
      behavior: 'smooth'
    })
  })

  var videoBtn = document.querySelector('.mainBtn')

  modalInit()

  function modalInit() {
    let modal = document.querySelector('.modal')
    let modalclose = document.querySelector('.modal-content.back')
    let video = document.getElementById('video')
    videoBtn.addEventListener('click', function() {
      html.classList.add("is-clipped")
      modal.classList.add("is-active")
    })
    modalclose.addEventListener('click', function() {
      closeModal()
    })
    document.addEventListener('keydown', function (event) {
        var e = event || window.event
        if (e.keyCode === 27) {
          closeModal()
        }
    })
  }

  function closeModal() {
    let modal = document.querySelector('.modal')
    modal.classList.remove("is-active")
    html.classList.remove("is-clipped")
  }

})


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
