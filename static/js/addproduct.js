    const container = document.getElementById('sizes-container');

    function createSizeInput() {
      const input = document.createElement('input');
      input.type = 'text';
      input.name = 'sizes[]';
      input.placeholder = 'Ex: M';
      input.className = 'size-input w-24 border border-[#2B82C3] rounded-full px-4 py-2 text-center focus:outline-none focus:ring-2 focus:ring-[#2B82C3]';
    
      let delayTimer = null;
    
      input.addEventListener('input', () => {
        clearTimeout(delayTimer); // reset timer if still typing
        if (input.value.trim() !== '') {
          delayTimer = setTimeout(() => {
            const inputs = Array.from(container.querySelectorAll('.size-input'));
            const lastInput = inputs[inputs.length - 1];
            if (input === lastInput) {
              const newInput = createSizeInput();
              container.appendChild(newInput);
              newInput.focus();
            }
          }, 400); // 2 seconds after stop typing
        }
      });
    
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && input.value === '') {
          const inputs = Array.from(container.querySelectorAll('.size-input'));
          const index = inputs.indexOf(input);
          if (inputs.length > 1) {
            input.remove();
            if (index > 0) inputs[index - 1].focus();
          }
        }
      });
    
      return input;
    }
    
    // Setup for the initial field
    const firstInput = document.querySelector('.size-input');
    
    firstInput.addEventListener('input', () => {
      // same delayed behavior as others
      let delayTimer;
      clearTimeout(delayTimer);
      if (firstInput.value.trim() !== '') {
        delayTimer = setTimeout(() => {
          const inputs = Array.from(container.querySelectorAll('.size-input'));
          const lastInput = inputs[inputs.length - 1];
          if (firstInput === lastInput) {
            const newInput = createSizeInput();
            container.appendChild(newInput);
            newInput.focus();
          }
        }, 400);
      }
    });
    
    firstInput.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && firstInput.value === '') {
        e.preventDefault(); // prevent deletion of first input
      }
    });


    
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