if (window.isAuthenticated) {
  document.querySelectorAll('.favorite-btn').forEach(btn => { 
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const icon = this.querySelector('.fa-heart');
      const productId = this.dataset.productId;
      const alertMsg = document.getElementById(`alert-msg-${productId}`);

      // استرجاع اللغة من localStorage
      const lang = localStorage.getItem('selectedLanguage') || 'Français';

      // الرسائل حسب اللغة
      const messages = {
        'Français': {
          added: "Ajouté aux favoris",
          removed: "Produit retiré des favoris",
          not_logged: "Veuillez vous connecter d'abord",
          error: "Une erreur s'est produite ! Réessayez"
        },
        'العربية': {
          added: "تمت الإضافة إلى المفضلة",
          removed: "تمت إزالة المنتج من المفضلة",
          not_logged: "يجب تسجيل الدخول أولاً",
          error: "حدث خطأ! حاول مرة أخرى"
        }
      };

      fetch(window.FAVORITE_URL, {
        method: "POST",
        headers: {
          "X-CSRFToken": window.CSRF_TOKEN,
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `product_id=${productId}`
      })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.action === 'added') {
          icon.classList.remove('text-customBlue');
          icon.classList.add('text-red-500');
          alertMsg.classList.remove("hidden");
          alertMsg.textContent = messages[lang].added;
          setTimeout(() => { alertMsg.classList.add("hidden"); }, 2000);
        } else if (data.success && data.action === 'removed') {
          icon.classList.remove('text-red-500');
          icon.classList.add('text-customBlue');
          alertMsg.classList.remove("hidden");
          alertMsg.textContent = messages[lang].removed;
          setTimeout(() => { alertMsg.classList.add("hidden"); }, 2000);
        } else if (data.msg === "not_logged_in") {
          alertMsg.classList.remove("hidden");
          alertMsg.textContent = messages[lang].not_logged;
          setTimeout(() => { alertMsg.classList.add("hidden"); }, 2000);
        }
      })
      .catch(() => {
        alertMsg.classList.remove("hidden");
        alertMsg.textContent = messages[lang].error;
        setTimeout(() => { alertMsg.classList.add("hidden"); }, 2000);
      });
    });
  });
}else{

  document.addEventListener('DOMContentLoaded', function() {
    // استرجاع اللغة من localStorage
    const lang = localStorage.getItem('selectedLanguage') || 'Français';
    const messages = {
        'Français': "Veuillez vous connecter d'abord",
        'العربية': "يجب عليك تسجيل الدخول أولا"
    };

    document.querySelectorAll('.fa-heart, .fa-shopping-cart').forEach(function(icon) {
        icon.addEventListener('click', function(e) {
            // تحقق أن المستخدم غير مسجل الدخول!
            if (!window.isAuthenticated) {
                e.preventDefault();
                let alertMsg = null;

                // 1. جرب الأقرب للكارد نفسه
                let card = icon.closest('.relative.bg-dark') || icon.closest('.relative');
                if (card) {
                    alertMsg = card.querySelector('p[id^="alert-msg-"]');
                }

                // 2. إذا ما وجد، جرب الفورم (لصفحة التفاصيل)
                if (!alertMsg && icon.closest('form')) {
                    alertMsg = icon.closest('form').querySelector('p[id^="alert-msg-"]');
                }

                // 3. إذا فيه data-product-id
                if (!alertMsg && icon.dataset.productId) {
                    alertMsg = document.getElementById('alert-msg-' + icon.dataset.productId);
                }

                // 4. وأخيرًا ابحث عن أول رسالة (احتياطي فقط)
                if (!alertMsg) {
                    alertMsg = document.querySelector('p[id^="alert-msg-"]');
                }

                // عرض الرسالة
                if (alertMsg) {
                    alertMsg.textContent = messages[lang] || messages['Français'];
                    alertMsg.classList.remove('hidden');
                    setTimeout(function() {
                        alertMsg.textContent = '';
                        alertMsg.classList.add('hidden');
                    }, 2000);
                }
            }
        });
    });
});

}