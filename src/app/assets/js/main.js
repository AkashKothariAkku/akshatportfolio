(function () {
	"use strict";
  
	// Helper functions
	function setBgImage(element) {
	  element.style.backgroundImage = "url(" + element.getAttribute("data-bg-image") + ")";
	}
  
	function setBgColor(element) {
	  element.style.backgroundColor = element.getAttribute("data-bg-color");
	}
  
	// Set background images and colors
	document.querySelectorAll("[data-bg-image]").forEach(function (element) {
	  setBgImage(element);
	});
  
	document.querySelectorAll("[data-bg-color]").forEach(function (element) {
	  setBgColor(element);
	});
  
	// Header sticky behavior on scroll
	let lastScrollTop = 0;
	window.addEventListener("scroll", function () {
	  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  
	  if (scroll > 300) {
		document.querySelector(".tj-header-area.header-sticky").classList.add("sticky");
		document.querySelector(".tj-header-area.header-sticky").classList.remove("sticky-out");
	  } else if (scroll < lastScrollTop) {
		if (scroll < 500) {
		  document.querySelector(".tj-header-area.header-sticky").classList.add("sticky-out");
		  document.querySelector(".tj-header-area.header-sticky").classList.remove("sticky");
		}
	  } else {
		document.querySelector(".tj-header-area.header-sticky").classList.remove("sticky");
	  }
  
	  lastScrollTop = scroll;
	});
  
	// Toggle menu bar and overflow behavior
	document.querySelector(".menu-bar").addEventListener("click", function () {
	  document.querySelector(".menu-bar").classList.toggle("menu-bar-toggeled");
	  document.querySelector(".header-menu").classList.toggle("opened");
	  document.body.classList.toggle("overflow-hidden");
	});
  
	// Close menu on link click
	document.querySelectorAll(".header-menu ul li a").forEach(function (element) {
	  element.addEventListener("click", function () {
		document.querySelector(".menu-bar").classList.remove("menu-bar-toggeled");
		document.querySelector(".header-menu").classList.remove("opened");
		document.body.classList.remove("overflow-hidden");
	  });
	});
  
	// Navigation behavior on scroll
	function onPageNav(switchName) {
	  const navSwitch = document.querySelectorAll(switchName);
	  const deductHeight = 60;
	  let navArr = [];
  
	  navSwitch.forEach(function (element, i) {
		let navSwitchHref = element.getAttribute("href");
		let tgtOff = document.querySelector(navSwitchHref).offsetTop - deductHeight;
		navArr.push({ switch: element, tgtOff: tgtOff });
	  });
  
	  window.addEventListener("scroll", function () {
		let scroll = window.pageYOffset || document.documentElement.scrollTop;
		for (let i = 0; i < navArr.length; i++) {
		  let tgtKey = navArr[i];
		  let tgtSwitch = tgtKey.switch;
		  let tgtOff = tgtKey.tgtOff;
		  if (scroll >= tgtOff) {
			navSwitch.forEach(function (element) {
			  element.parentElement.classList.remove("is-current");
			});
			tgtSwitch.parentElement.classList.add("is-current");
		  } else {
			tgtSwitch.parentElement.classList.remove("is-current");
		  }
		}
	  });
	}
  
	window.addEventListener("load", function () {
	  onPageNav(".side-navbar a");
	});
  
	// Initialize Isotope for portfolio grid
	const $grid = new Isotope(".portfolio-box", {
	  masonry: {
		columnWidth: ".portfolio-box .portfolio-sizer",
		gutter: ".portfolio-box .gutter-sizer",
	  },
	  itemSelector: ".portfolio-box .portfolio-item",
	  percentPosition: true,
	});
  
	// Filter portfolio items
	document.querySelector(".filter-button-group").addEventListener("click", function (event) {
	  if (event.target.tagName === "BUTTON") {
		document.querySelectorAll(".filter-button-group button").forEach(function (btn) {
		  btn.classList.remove("active");
		});
		event.target.classList.add("active");
  
		let filterValue = event.target.getAttribute("data-filter");
		$grid.isotope({ filter: filterValue });
	  }
	});
  
	// Initialize Owl Carousel for portfolio gallery
	const portfolioGallery = new OwlCarousel(".portfolio_gallery.owl-carousel", {
	  items: 2,
	  loop: true,
	  lazyLoad: true,
	  center: true,
	  autoplayHoverPause: true,
	  autoplay: false,
	  autoplayTimeout: 5000,
	  smartSpeed: 800,
	  margin: 30,
	  nav: false,
	  dots: true,
	  responsive: {
		0: { items: 1, margin: 0 },
		768: { items: 2, margin: 20 },
		992: { items: 2, margin: 30 },
	  },
	});
  
	// Initialize Owl Carousel for testimonials
	const testimonialCarousel = new OwlCarousel(".testimonial-carousel.owl-carousel", {
	  loop: true,
	  margin: 30,
	  nav: false,
	  dots: true,
	  autoplay: false,
	  active: true,
	  smartSpeed: 1000,
	  autoplayTimeout: 7000,
	  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } },
	});
  
	// Initialize Owl Carousel for posts gallery
	const postGallery = new OwlCarousel(".tj-post__gallery.owl-carousel", {
	  items: 1,
	  loop: true,
	  margin: 30,
	  dots: false,
	  nav: true,
	  navText: [
		'<i class="fal fa-arrow-left"></i>',
		'<i class="fal fa-arrow-right"></i>',
	  ],
	  autoplay: false,
	  smartSpeed: 1000,
	  autoplayTimeout: 3000,
	});
  
	// Initialize niceSelect for select dropdowns
	document.querySelectorAll("select").forEach(function (element) {
	  new niceSelect(element);
	});
  
	// Lightcase plugin for popup videos
	if (document.querySelectorAll(".popup_video").length > 0) {
	  document.querySelectorAll(".popup_video").forEach(function (element) {
		lightcase({
		  el: element,
		  transition: "elastic",
		  showSequenceInfo: false,
		  slideshow: false,
		  swipe: true,
		  showTitle: false,
		  showCaption: false,
		  controls: true,
		});
	  });
	}
  
	// Magnific Popup for modal popups
	if (document.querySelector(".modal-popup") !== null) {
	  document.querySelector(".modal-popup").addEventListener("click", function () {
		$.magnificPopup.open({
		  type: "inline",
		  fixedContentPos: false,
		  fixedBgPos: true,
		  overflowY: "auto",
		  closeBtnInside: true,
		  preloader: false,
		  midClick: true,
		  removalDelay: 300,
		  mainClass: "popup-mfp",
		  items: {
			src: "#test-popup",
		  },
		});
	  });
	}
  
	// WOW.js initialization for animations
	const wow = new WOW({
	  boxClass: "wow",
	  animateClass: "animated",
	  offset: 100,
	  mobile: true,
	  live: true,
	});
	wow.init();
  
	window.addEventListener("load", function () {
		let wow = new WOW({
		  boxClass: "wow",
		  animateClass: "animated",
		  offset: 100,
		  mobile: true,
		  live: true,
		});
		wow.init();
	  
		const svg = document.getElementById("preloaderSvg");
		const tl = gsap.timeline();
		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
	  
		tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		  delay: 1.5,
		  y: -100,
		  opacity: 0,
		});
		tl.to(svg, {
		  duration: 0.5,
		  attr: { d: curve },
		  ease: "power2.easeIn",
		}).to(svg, {
		  duration: 0.5,
		  attr: { d: flat },
		  ease: "power2.easeOut",
		});
		tl.to(".preloader", {
		  y: -1500,
		});
		tl.to(".preloader", {
		  zIndex: -1,
		  display: "none",
		});
	  
		if (document.getElementsByClassName("side-navbar").length > 0) {
		  function sidebar_animation() {
			let active_bg = document.querySelector(".side-navbar ul .active-bg");
	  
			document.querySelectorAll(".side-navbar ul li").forEach(function (element) {
			  element.addEventListener("mouseenter", function () {
				let element = this;
				activeSidebar(active_bg, element);
			  });
			});
	  
			document.querySelector(".side-navbar ul").addEventListener("mouseleave", function () {
			  let element = document.querySelector(".side-navbar ul li.is-current");
			  activeSidebar(active_bg, element);
			  element.closest("li").classList.remove("mleave");
			});
	  
			let observer = new MutationObserver(function (mutations) {
			  mutations.forEach(function (mutation) {
				if (
				  mutation.attributeName === "class" &&
				  mutation.target.classList.contains("is-current")
				) {
				  let element = document.querySelector(".side-navbar ul li.is-current");
				  activeSidebar(active_bg, element);
				}
			  });
			});
	  
			observer.observe(document.querySelector(".side-navbar ul"), {
			  attributes: true,
			  subtree: true,
			});
	  
			let initialElement = document.querySelector(".side-navbar ul li.is-current");
			activeSidebar(active_bg, initialElement);
		  }
	  
		  sidebar_animation();
	  
		  function activeSidebar(active_bg, e) {
			if (!e) {
			  return false;
			}
			let topOff = e.offsetTop;
			let height = e.offsetHeight;
			let menuTop = document.querySelector(".side-navbar ul").offsetTop;
			e.closest("li").classList.remove("mleave");
			e.closest("li").classList.add("mleave");
			active_bg.style.top = topOff - menuTop + "px";
			active_bg.style.height = height + "px";
		  }
		}
	  
		function service_animation() {
		  let active_bg = document.querySelector(".services-widget .active-bg");
		  let element = document.querySelector(".services-widget .current");
		  document.querySelectorAll(".services-widget .service-item").forEach(function (item) {
			item.addEventListener("mouseenter", function () {
			  let e = this;
			  activeService(active_bg, e);
			});
		  });
	  
		  document.querySelector(".services-widget").addEventListener("mouseleave", function () {
			element = document.querySelector(".services-widget .current");
			activeService(active_bg, element);
			element.closest(".service-item").classList.remove("mleave");
		  });
	  
		  activeService(active_bg, element);
		}
	  
		service_animation();
	  
		function activeService(active_bg, e) {
		  if (!e) {
			return false;
		  }
		  let topOff = e.offsetTop;
		  let height = e.offsetHeight;
		  let menuTop = document.querySelector(".services-widget").offsetTop;
		  e.closest(".service-item").classList.remove("mleave");
		  e.closest(".service-item").classList.add("mleave");
		  active_bg.style.top = topOff - menuTop + "px";
		  active_bg.style.height = height + "px";
		}
	  
		document.querySelectorAll(".services-widget .service-item").forEach(function (item) {
		  item.addEventListener("click", function () {
			document.querySelectorAll(".services-widget .service-item").forEach(function (el) {
			  el.classList.remove("current");
			});
			this.classList.add("current");
		  });
		});
	  
		function filter_animation() {
			let active_bg = document.querySelector(".portfolio-filter .button-group .active-bg");
			let element = document.querySelector(".portfolio-filter .button-group .active");
			document.querySelectorAll(".portfolio-filter .button-group button").forEach(function (btn) {
			  btn.addEventListener("click", function () {
				let e = this;
				activeFilterBtn(active_bg, e);
			  });
			});
			activeFilterBtn(active_bg, element);
		  }
		  filter_animation();
		  
		  function activeFilterBtn(active_bg, e) {
			if (!e) {
			  return false;
			}
			let leftOff = e.offsetLeft;
			let width = e.offsetWidth;
			let menuLeft = document.querySelector(".portfolio-filter .button-group").offsetLeft;
			e.closest("button").classList.remove("active");
			e.closest("button").classList.add("active");
			active_bg.style.left = leftOff - menuLeft + "px";
			active_bg.style.width = width + "px";
		  }
		  
		  function odometerAnimation() {
			let odometerElements = document.querySelectorAll(".odometer");
			if (odometerElements.length > 0) {
			  odometerElements.forEach(function (element) {
				element.innerHTML = element.getAttribute("data-count");
			  });
			}
		  }
		  
		  // Trigger odometer animation
		  odometerAnimation();

		})
	})()