
let currentItem = null;
const items = document.querySelectorAll('.swipe-item');

  items.forEach(item => {
    let startX = 0;

    // Start swipe
    item.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    // End swipe
    item.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;

      if (startX - endX > 50) {
        // Close previous swiped item
        if (currentItem && currentItem !== item) {
          currentItem.classList.remove('swiped');
          currentItem.querySelector('.delete-btn').classList.add('hidden');
          currentItem.querySelector('.update-btn').classList.remove('hidden');
        }

        // Swipe current
        item.classList.add('swiped');
        item.querySelector('.delete-btn').classList.remove('hidden');
        item.querySelector('.update-btn').classList.add('hidden');
        currentItem = item;
      }
    });

    // Prevent bubbling so clicking inside doesn’t close it
    item.addEventListener('click', e => {
      e.stopPropagation();
    });
  });

  // Clicking outside any item resets swiped state
  document.addEventListener('click', () => {
    if (currentItem) {
      currentItem.classList.remove('swiped');
      currentItem.querySelector('.delete-btn').classList.add('hidden');
      currentItem.querySelector('.update-btn').classList.remove('hidden');
      currentItem = null;
    }
  });

    // Delete triggers one product
    document.querySelectorAll('.delete-btn, .delete-icon').forEach(btn => {
        btn.addEventListener('click', (e) => {
          currentItem = e.target.closest('[data-id]'); 
          document.getElementById('modal').classList.remove('hidden');
        });
    });

    // Delete triggers All products
    document.querySelectorAll('#clearCartBtn, #clearCartBtnMobile').forEach(btn => {
      btn.addEventListener('click', () => {
        document.getElementById('modal_all_products').classList.remove('hidden');
      });
    });

    // Cencel Delete  All products
    document.getElementById('cancelDelete_all_products').onclick = () => {
      document.getElementById('modal_all_products').classList.add('hidden');
      if (currentItem) {
        currentItem.classList.remove('swiped');
        currentItem.querySelector('#clearCartBtn').classList.add('hidden');
      }
    };

    // confirm Delete  All products
    document.getElementById('confirmDelete_all').onclick = () => {
      if (currentItem) {
        const productId = currentItem.getAttribute('data-id');
        window.location.href = `/connexion/deleteeproduct/${productId}`;  // This will trigger the Django view
      }
      document.getElementById('modal_all_products').classList.add('hidden');
    };

 
    document.getElementById('cancelDelete').onclick = () => {
      document.getElementById('modal').classList.add('hidden');
      if (currentItem) {
        currentItem.classList.remove('swiped');
        currentItem.querySelector('.delete-btn').classList.add('hidden');
      }
    };

    document.getElementById('confirmDelete').onclick = () => {
      if (currentItem) {
        const productId = currentItem.getAttribute('data-id');
        window.location.href = `/connexion/deleteeproduct/${productId}`;  // This will trigger the Django view
      }
      document.getElementById('modal').classList.add('hidden');
    };
