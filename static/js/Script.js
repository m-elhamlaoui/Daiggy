// for side bar 
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar-menu");
    if (sidebar.style.right === "-250px") {
        sidebar.style.right = "0";
    } else {
        sidebar.style.right = "-250px";
    }
}

// for select in  products.html
function redirectToCategory() {
    var selectedCategory = document.getElementById("categorySelect").value;
    if (selectedCategory) {
        window.location.href = "/products/" + selectedCategory;
    } else {
        alert("Veuillez sélectionner une catégorie.");
    }
}

