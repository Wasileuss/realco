// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.info__button, .icon-menu')) {
		const container = document.querySelector('.info__container');
        container.style.paddingTop = '0';
        container.style.paddingBottom = '0';
        container.style.fontSize = '0';
        container.style.height = '0';
        container.style.transitionProperty = 'all';
        container.style.transitionDuration = '0.5s';
	}
	
}

// showMore ==============================================

document.addEventListener("DOMContentLoaded", function () {
	const itemsToShow = 2;
	const showMoreItem = document.querySelectorAll(".showmore-item");
	const showMoreBtn = document.querySelector(".showmore-button");

	let itemsShown = itemsToShow; // Початкова кількість показаних елементів

	function toggleItems() {
		if (window.innerWidth <= 650) {
            showMoreItem.forEach((item, index) => {
				if (index < itemsShown) {
					item.style.display = "grid";
				} else {
					item.style.display = "none";
				}
			});
		} else {
            showMoreItem.forEach(item => {
				item.style.display = "grid";
			});
		}

		// Перевіряємо, чи всі елементи вже видимі, і змінюємо текст кнопки відповідно
		if (itemsShown === showMoreItem.length) {
			showMoreBtn.textContent = "Show less";
		} else {
			showMoreBtn.textContent = "Show more";
		}
	}

	toggleItems(); // Викликаємо перевірку вікна при завантаженні сторінки

	showMoreBtn.addEventListener("click", function () {
		if (itemsShown === showMoreItem.length) {
			// Якщо всі елементи вже видимі, ховаємо їх по одному, починаючи з останнього
			itemsShown = itemsToShow;
			toggleItems();
		} else {
			// Якщо ще є елементи, які не відображені, показуємо наступний елемент
			itemsShown++;
			toggleItems();
		}
	});

	window.addEventListener("resize", toggleItems); // Викликаємо перевірку вікна при зміні розміру вікна
});

// View all ==============================================

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.post__item');
    var showAllBtn = document.querySelector('.blog__button');
    var isAllShown = false;
  
    function updateVisibility() {
        var visibleCount = window.innerWidth >= 992 ? 3 : (window.innerWidth >= 767 ? 2 : 1);
        var i = 0;
        elements.forEach(function(element) {
            if (i < visibleCount || isAllShown) {
            element.classList.add('post__item--active');
            } else {
            element.classList.remove('post__item--active');
            }
            i++;
        });
    }
  
    updateVisibility();
  
    window.addEventListener('resize', updateVisibility);
  
    showAllBtn.addEventListener('click', function() {
        isAllShown = !isAllShown;
        if (isAllShown) {
            elements.forEach(function(element) {
            element.classList.add('post__item--active');
            });
            showAllBtn.textContent = 'Hide';
        } else {
            updateVisibility();
            showAllBtn.textContent = 'View all';
        }
    });
});

// Netlify forms ==============================================

// const handleSubmit = (event) => {
//     event.preventDefault();
  
//     const myForm = event.target;
//     const formData = new FormData(myForm);
    
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString(),
//     })
//       .then(() => console.log("Form successfully submitted"))
//       .catch((error) => alert(error));
//   };
  
//   document
//     .querySelector("form")
//     .addEventListener("submit", handleSubmit);