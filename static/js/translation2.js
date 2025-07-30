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
        Sizes:[
          "Sizes offred"
        ],
        Select_Size: [
          "Select Size:"
        ],
        Quantity: [
          "Quantity:"
        ],
        Back_to_Home: [
            "← Back to Home"
        ],
        Description:[
            "Description"
        ],
        price2:[
            "Price"
        ],
        delete :[
            "Delete"
        ],
        Subtotal1 :[
            "Subtotal"
        ],
        Quantity2 :[
            "Quantity"
        ],
        size :[
            "Select Size"
        ],
        Price3 :[
            "Price"
        ],
        Product :[
            "Product"
        ],
        update :[
            "Update"
        ],
        Order_Summary :[
            "DeleOrder Summary"
        ],
        Items :[
            "Items"
        ],
        Sub_Total2 :[
            "Sub Total"
        ],
        Shipping :[
            "Shipping"
        ],
        Coupon :[
            "Coupon Code"
        ],
        Discount :[
            "Coupon Discount"
        ],
        Total :[
            "Total"
        ],
        Proceed_to_Checkout :[
            "Proceed to Checkout"
        ],
        Clear_Shopping_Cart :[
            "Clear Shopping Cart"
        ],
        Apply_Coupon:[
            "Apply Coupon"
        ],
        clearmobile:[
            "Clear"
        ],
        cartmobile:[
            "Cart"
        ],
        input :[
          "Coupon Code"
        ],
        ConfirmAll:[
          "Confirm Deletion"
        ],
        AreYouSureAll:[
          "Are you sure? you want to delete All products?"
        ],
        yesAll:[
          "Yes"
        ],
        cancelAll:[
          "Cancel"
        ],
        Confirm:[
          "Confirm Deletion"
        ],
        AreYouSure:[
          "Are you sure? you want to delete All products?"
        ],
        yes:[
          "Yes"
        ],
        cancel:[
          "Cancel"
        ],
        Required:[
          "Size Required"
        ],
        Please:[
          "Please select a size before adding to the cart"
        ],
        ok:[
          "OK"
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
        Sizes:[
          "المفاسات الموجودة"
        ],
        Select_Size: [
          "اختر مقاس:"
        ],
        Quantity: [
          "الكمية:"
        ],
        Back_to_Home: [
            "← الرجوع"
        ],
        Description:[
            "التفاصيل"
        ],
        price2:[
            "السعر"
        ],
        delete :[
            "حذف"
        ],
        Subtotal1 :[
            "المجموع"
        ],
        Quantity2 :[
            "الكمية"
        ],
        size :[
            "المقاس"
        ],
        Price3 :[
            "السعر"
        ],
        Product :[
            "المنتج"
        ],
        update :[
            "تحديث"
        ],
        Order_Summary :[
            "ملخص الطلب"
        ],
        Items :[
            "العناصر"
        ],
        Sub_Total2 :[
            "المجموع الفرعي"
        ],
        Shipping :[
            "الشحن"
        ],
        Coupon :[
            "الخصم"
        ],
        Discount :[
            "التخفيض"
        ],
        Total :[
            "المجموع"
        ],
        Proceed_to_Checkout :[
            "انتفل الى الدفع"
        ],
        Clear_Shopping_Cart :[
            "حذف جميع العناصر"
        ],
        Apply_Coupon:[
            "ارفع كود الخصم"
        ],
        clearmobile:[
            "حذف الكل"
        ],
        cartmobile:[
            "السلة"
        ],
        input :[
          "كود الخصم"
        ],
        ConfirmAll:[
          "تأكيد الحذف"
        ],
        AreYouSureAll:[
          "هل أنت متأكد؟ هل تريد حذف كافة المنتجات؟"
        ],
        yesAll:[
          "نعم"
        ],
        cancelAll:[
          "لا"
        ], 
        Confirm:[
          "تأكيد الحذف"
        ],
        AreYouSure:[
          "هل أنت متأكد؟ هل تريد حذف هذا المنتج "
        ],
        yes:[
          "نعم"
        ],
        cancel:[
          "لا"
        ],
        Required:[
          "الحجم مطلوب"
        ],
        Please:[
          "الرجاء تحديد المقاس قبل إضافته إلى سلة التسوق"
        ],
        ok:[
          "نعم"
        ],
      }
    };
  
    function applyLanguage(lang) {
    //   document.getElementById('currentLangLabel').textContent = lang;
  
      // for page Product.html
      const days = document.getElementById('days');
      const hours = document.getElementById('hours');
      const minuts = document.getElementById('minutes');
      const sec = document.getElementById('seconds');
      const Sizes = document.getElementById('offred');
      const Select_Size = document.getElementById('sizes');
      const Quantity = document.getElementById('quant');
      const Back_to_Home = document.getElementById('back');
      const Description = document.getElementById('description');
      const price2 = document.getElementById('price2');
      
      const Required = document.getElementById('Required');
      const Please = document.getElementById("Please");
      const ok = document.getElementById("modalOkBtn");

      if (Required) {
        Required.textContent = translations[lang].Required[0];
      }
      if (Please) {
        Please.textContent = translations[lang].Please[0];
      }
      if (ok) {
        ok.textContent = translations[lang].ok[0];
      }


      if (days) {
        days.textContent = translations[lang].days[0];
      }
      if (hours) {
        hours.textContent = translations[lang].hours[0];
      }
      if (minuts) {
        minuts.textContent = translations[lang].minuts[0];
      }
      if (sec) {
        sec.textContent = translations[lang].sec[0];
      }
      if (Sizes) {
        Sizes.textContent = translations[lang].Sizes[0];
      }
      if (Select_Size) {
        Select_Size.textContent = translations[lang].Select_Size[0];
      }
      if (Quantity) {
        Quantity.textContent = translations[lang].Quantity[0];
      }
      if (Back_to_Home) {
        Back_to_Home.textContent = translations[lang].Back_to_Home[0];
      }
      if (price2) {
        price2.textContent = translations[lang].price2[0];
      }



    //   variable for elements page CaretPosition.html
      const delet = document.getElementById('dele');
      const Subtotal1 = document.querySelectorAll('[id^="subtotaal1"]');
      const Quantity2 = document.querySelectorAll('[id^="Quantity2"]');
      const size = document.getElementById('[id^="size"]');
      const Price3 = document.querySelectorAll('[id^="price3"]');
      const Product = document.getElementById('product');
      const update = document.getElementById('update');

      const Order_Summary  = document.getElementById('order');
      const Items = document.querySelectorAll('[id^="items"]');
      const Sub_Total2 = document.querySelectorAll('[id^="sub2"]');
      const Shipping = document.querySelectorAll('[id^="shipping"]');
      const Coupon = document.querySelectorAll('[id^="Coupon"]');
      const Discount = document.querySelectorAll('[id^="discount"]');
      const Total = document.querySelectorAll('[id^="total"]');
      const Proceed_to_Checkout = document.querySelectorAll('[id^="proceed"]');
      const Clear_Shopping_Cart = document.getElementById('clearCartBtn');
      const Apply_Coupon = document.querySelectorAll('[id^="apply"]');
      const clearmobile = document.getElementById('clearmobile');
      const cartmobile = document.getElementById('cartmobile');
      const code = document.querySelectorAll('[id^="EnterCode"]');
      const ConfirmAll = document.getElementById("ConfirmAll");
      const AreYouSureAll = document.getElementById("AreYouSureAll");
      const yesAll = document.getElementById("confirmDelete_all");
      const cancelAll = document.getElementById("cancelDelete_all_products");
      const Confirm = document.getElementById("Confirm");
      const AreYouSure = document.getElementById("AreYouSure");
      const yes = document.getElementById("confirmDelet");
      const cancel = document.getElementById("cancelDelete");

      if (ConfirmAll) {
        ConfirmAll.textContent = translations[lang].ConfirmAll[0];
      }
      if (AreYouSureAll) {
        AreYouSureAll.textContent = translations[lang].AreYouSureAll[0];
      }
      if (yesAll) {
        yesAll.textContent = translations[lang].yesAll[0];
      }
      if (cancelAll) {
        cancelAll.textContent = translations[lang].cancelAll[0];
      }
      if (Confirm) {
        Confirm.textContent = translations[lang].Confirm[0];
      }
      if (AreYouSure) {
        AreYouSure.textContent = translations[lang].AreYouSure[0];
      }
      if (yes) {
        yes.textContent = translations[lang].yes[0];
      }
      if (cancel) {
        cancel.textContent = translations[lang].cancel[0];
      }

      if (code) {
        code.forEach(element => element.placeholder = translations[lang].input[0]);
      }
      if (delet) {
        delet.textContent = translations[lang].delete[0];
      }
      if (Subtotal1) {
        Subtotal1.forEach(element => element.textContent = translations[lang].Subtotal1[0]);
      }
      if (Quantity2) {
        Quantity2.forEach(element => element.textContent = translations[lang].Quantity2[0]);
      }
      if (size) {
        size.textContent = translations[lang].size[0];
      }
      if (Price3) {
        Price3.forEach(element => element.textContent = translations[lang].Price3[0]);
      }
      if (Product) {
        Product.textContent = translations[lang].Product[0];
      }
      if (update) {
        update.textContent = translations[lang].update[0];
      }
      if (Order_Summary) {
        Order_Summary.textContent = translations[lang].Order_Summary[0];
      }
      if (Items) {
        Items.forEach(element => element.textContent = translations[lang].Items[0]);
      }
      if (Sub_Total2) {
        Sub_Total2.forEach(element => element.textContent = translations[lang].Sub_Total2[0]);
      }
      if (Shipping) {
        Shipping.forEach(element => element.textContent = translations[lang].Shipping[0]);
      }
      if (Coupon) {
        Coupon.forEach(element => element.textContent = translations[lang].Coupon[0]);
      }
      if (Discount) {
        Discount.forEach(element => element.textContent = translations[lang].Discount[0]);
      }
      if (Total) {
        Total.forEach(element => element.textContent = translations[lang].Total[0]);
      }
      if (Proceed_to_Checkout) {
        Proceed_to_Checkout.forEach(element => element.textContent = translations[lang].Proceed_to_Checkout[0]);
      }
      if (Clear_Shopping_Cart) {
        Clear_Shopping_Cart.textContent = translations[lang].Clear_Shopping_Cart[0];
      }
      if (Apply_Coupon) {
        Apply_Coupon.forEach(element => element.textContent = translations[lang].Apply_Coupon[0]);
      }
      if (clearmobile) {
        clearmobile.textContent = translations[lang].clearmobile[0];
      }
      if (cartmobile) {
        cartmobile.textContent = translations[lang].cartmobile[0];
      }



  
      // Set direction
      document.documentElement.setAttribute("dir", lang === "العربية" ? "rtl" : "ltr");
  
      // Store selection
      localStorage.setItem("selectedLanguage", lang);
  
      // Hide dropdown
      const langMenu = document.getElementById("langMenu");
      if (langMenu) langMenu.classList.add("hidden");
    }
  
    window.changeLanguage = applyLanguage;
    window.toggleLangMenu = function () {
      const menu = document.getElementById("langMenu");
      if (menu) menu.classList.toggle("hidden");
    };
  
    const savedLang = localStorage.getItem("selectedLanguage") || "Français";
    applyLanguage(savedLang);
  };