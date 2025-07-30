window.onload = function () {
  const translations = {
    "Français": {
      days: [
        "Jours"
      ],
      hours: [
        "Heures"
      ],
      minuts: [
        "Min"
      ],
      sec: [
        "Sec"
      ],
      sold:[
        "Les Produit en sold"
      ],
      plus: [
        "Plus"
      ],
      price: [
        "Price"
      ],
    },
    "العربية": {
      days: [
        "الأيام"
      ],
      hours: [
        "الساعات"
      ],
      minuts:[
        "الدقائق"
      ],
      sec: [
        "الثوان"
      ],
      sold:[
        "المنتجات المخفضة"
      ],
      plus: [
      "المزيد"
      ],
      price: [
      "السعر"
      ],
  }
};

  function applyLanguage(lang) {
    document.getElementById('currentLangLabel').textContent = lang;
    document.getElementById('currentLangLabelMobile').textContent = lang;


    // Headings
    const days = document.querySelectorAll('[id^="days"]');
    const hours = document.querySelectorAll('[id^="hours"]');
    const minuts = document.querySelectorAll('[id^="minutes"]');
    const sec = document.querySelectorAll('[id^="seconds"]');
    const sold = document.querySelectorAll('[id^="Les_Produit_en_sold"]');
    const plus = document.querySelectorAll('[id^="plus"]');
    const price = document.querySelectorAll('[id^="price"]');

    if (days) {
      days.forEach(element => element.textContent = translations[lang].days[0]);
    }
    if (hours) {
      hours.forEach(element => element.textContent = translations[lang].hours[0]);
    }
    if (minuts) {
      minuts.forEach(element => element.textContent = translations[lang].minuts[0]);
    }
    if (sec) {
      sec.forEach(element => element.textContent = translations[lang].sec[0]);
    }
    if (sold) {
      sold.forEach(element => element.textContent = translations[lang].sold[0]);
    }
    if (plus) {
      plus.forEach(element => element.textContent = translations[lang].plus[0]);
    }
    if (price) {
      price.forEach(element => element.textContent = translations[lang].price[0]);
    }


    if(lang=='العربية'){
      const arElements = document.querySelectorAll('[id^="ar"]');

      // Select all elements with ID starting with 'fr'
      const frElements = document.querySelectorAll('[id^="fr"]');

      // Remove "hidden" class from all elements with ID starting with 'ar'
      arElements.forEach(element => element.classList.remove("hidden"));

      // Add "hidden" class to all elements with ID starting with 'fr'
      frElements.forEach(element => element.classList.add("hidden"));
    }else{
      const arElements = document.querySelectorAll('[id^="ar"]');

      // Select all elements with ID starting with 'fr'
      const frElements = document.querySelectorAll('[id^="fr"]');

      // Remove "hidden" class from all elements with ID starting with 'ar'
      arElements.forEach(element => element.classList.add("hidden"));

      // Add "hidden" class to all elements with ID starting with 'fr'
      frElements.forEach(element => element.classList.remove("hidden"));
    }



    // Set direction
    document.documentElement.setAttribute("dir", lang === "العربية" ? "rtl" : "ltr");

    // Store selection
    localStorage.setItem("selectedLanguage", lang);

    // Hide dropdown
    const langMenu = document.getElementById("langMenu");
    if (langMenu) langMenu.classList.add("hidden");

    const langMenuMobile = document.getElementById("langMenuMobile");
    if (langMenuMobile) langMenuMobile.classList.add("hidden");

    const test = document.getElementById("test");
    function hideLangMenu(event) {
      if (!test.contains(event.target)) {
        langMenu.classList.add("hidden");
      }
    };



    const testMobile = document.getElementById("test-mobile");
    function hideLangMenuMobile(event) {
      if (!testMobile.contains(event.target)) {
        langMenuMobile.classList.add("hidden");
      }
    };

    document.getElementById("langBtn").onclick = function(e) {
      e.stopPropagation();
      document.getElementById("langMenu").classList.toggle("hidden");
    };

    document.getElementById("langBtnMobile").onclick = function(e) {
      e.stopPropagation();
      document.getElementById("langMenuMobile").classList.toggle("hidden");
    };

    window.addEventListener("scroll", () => {
      langMenu.classList.add("hidden");
      langMenuMobile.classList.add("hidden");
    });
  }

  document.addEventListener("click", function(e) {

    if (!document.getElementById("test").contains(e.target)) {
      document.getElementById("langMenu").classList.add("hidden");
    }
    if (!document.getElementById("test-mobile").contains(e.target)) {
      document.getElementById("langMenuMobile").classList.add("hidden");
    }
});

  window.changeLanguage = applyLanguage;
  window.toggleLangMenu = function () {
    const menu = document.getElementById("langMenu");
    if (menu) menu.classList.toggle("hidden");

    const menuMobile = document.getElementById("langMenuMobile");
    if (menuMobile) menuMobile.classList.toggle("hidden");
  };

  const savedLang = localStorage.getItem("selectedLanguage") || "Français";
  applyLanguage(savedLang);
};



//sidebar
const sidebarBtn = document.getElementById('sidebarOpenBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('sidebarCloseBtn');

sidebarBtn.onclick = function() {
  sidebar.classList.remove('translate-x-full');
};
closeBtn.onclick = function() {
  sidebar.classList.add('translate-x-full');
};
window.addEventListener("scroll", () => {
    sidebar.classList.add('translate-x-full');
});

document.addEventListener("click", function(e) {

  if (!sidebarBtn.contains(e.target)) {
    sidebar.classList.add('translate-x-full');
  }

});
