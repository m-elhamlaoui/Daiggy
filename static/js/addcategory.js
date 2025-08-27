 // for images
 const previewInputs = document.querySelectorAll('.preview-uploader');
  
 previewInputs.forEach(input => {
   input.addEventListener('change', function () {
     const file = this.files[0];
     const container = this.parentElement;

     if (file && file.type.startsWith('image/')) {
       const reader = new FileReader();

       reader.onload = function (e) {
         // Remove existing span (label)
         const existingText = container.querySelector('span');
         if (existingText) existingText.remove();

         // Add preview image
         const img = document.createElement('img');
         img.src = e.target.result;
         img.className = 'w-full h-full object-cover rounded-xl';
         container.appendChild(img);
       };

       reader.readAsDataURL(file);
     }
   });
 });


 // for title add product
 const title = "jouter un nouveau produit";
 const element = document.getElementById("typed-title");
 let index = 0;

 function typeCharacter() {
   if (index < title.length) {
     element.innerHTML += title.charAt(index);
     index++;
     setTimeout(typeCharacter, 75); // Adjust speed here
   }
 }

 // Optional: delay before typing starts
setTimeout(typeCharacter, 300);