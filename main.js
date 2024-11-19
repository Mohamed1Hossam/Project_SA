function searchBrand() {
    var keyword = document.getElementById("searchInput").value.toLowerCase();

    var Brands = {
        "bmw": "https://autozone-cargallery.github.io/BMW.html",
        "audi": "https://autozone-cargallery.github.io/Audi/Audi.html",
        "mercedes": "https://autozone-cargallery.github.io/Mercedes.html",
        "alfa romeo": "https://autozone-cargallery.github.io/Alfa-Romeo/Alfa.html",
        "ford": "https://autozone-cargallery.github.io/Ford.html",
        "kia": "https://autozone-cargallery.github.io/Desoky/Kia.html",
        "nissan": "https://autozone-cargallery.github.io/Nissan%20cars%20shop/Nissan%20cars.html",
        "dodge": "https://autozone-cargallery.github.io/Dodge.html",
        "chevrolet": "https://autozone-cargallery.github.io/Cars/Chevy%20cars/Chevrolet.html",
        "lamborghini": "https://autozone-cargallery.github.io/Cars/Lamborgini%20Cars/Lamborghini.html",
        "toyota": "https://autozone-cargallery.github.io/Toyota/Touota.html",
        "volvo": "https://autozone-cargallery.github.io/Volvo.html",
        "bmw 3 series": "https://autozone-cargallery.github.io/BMW/BMW%203%20Series.html" ,
        "bmw 5 series": "https://autozone-cargallery.github.io/BMW/BMW%205%20Series.html" ,
        "bmw 7 series": "https://autozone-cargallery.github.io/BMW/BMW%207%20Series.html" ,
        "bmw m8": "https://autozone-cargallery.github.io/BMW/BMW%20M8.html" ,
        "bmw x6": "https://autozone-cargallery.github.io/BMW/BMW%20X6.html" ,
        "bmw x7": "https://autozone-cargallery.github.io/BMW/BMW%20X7.html" ,
        "mercedes cla": "https://autozone-cargallery.github.io/Mercedes/Mercedes%20CLA.html" ,
        "mercedes a class": "https://autozone-cargallery.github.io/Mercedes/Mercedes%20A%20Class.html" ,
        "mercedes b class": "https://autozone-cargallery.github.io/Mercedes/Mercedes%20B%20Class.html" ,
        "mercedes c class": "https://autozone-cargallery.github.io/Mercedes/Mercedes%20C%20Class.html" ,
        "mercedes e class": "https://autozone-cargallery.github.io/Mercedes/Mercedes%20E%20Class.html" ,
        "mercedes s class": "https://autozone-cargallery.github.io/Mercedes/Merccedes%20S%20Class.html" ,
    };
    if (Brands.hasOwnProperty(keyword)) {
        window.location.href = Brands[keyword];
    } else {
        alert("Check spelling or else this brand doesn't exist on website....");
    }

}

//-------------------------------------------------------Mohamed hossam part start here-----------------------------------------------------------------------------------------//
let addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var carName = this.getAttribute("onclick");
        addToCart(carName);
    });
});

function addToCart(carName) {
    alert("You Bought " + carName);
}

document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["/Cars/BMW/3/1.png", "/Cars/BMW/3/2.png", "/Cars/BMW/3/3.png", "/Cars/BMW/3/4.jpg"],
        ["/Cars/BMW/5/1.jpg", "/Cars/BMW/5/2.jpg", "/Cars/BMW/5/3.jpg", "/Cars/BMW/5/4.jpg", "/Cars/BMW/5/5.jpg", "/Cars/BMW/5/6.jpg", "/Cars/BMW/5/7.jpg", "/Cars/BMW/5/8.jpg"],
        ["/Cars/BMW/7/1.jpg", "/Cars/BMW/7/2.jpg", "/Cars/BMW/7/3.jpg", "/Cars/BMW/7/4.jpg", "/Cars/BMW/7/5.jpg", "/Cars/BMW/7/6.jpg", "/Cars/BMW/7/7.jpg", "/Cars/BMW/7/8.jpg", "/Cars/BMW/7/9.jpg"],
        ["/Cars/BMW/BMW M8 Gran Coupe/1.jpg", "/Cars/BMW/BMW M8 Gran Coupe/2.jpg", "/Cars/BMW/BMW M8 Gran Coupe/3.jpg", "/Cars/BMW/BMW M8 Gran Coupe/4.jpg", "/Cars/BMW/BMW M8 Gran Coupe/5.jpg", "/Cars/BMW/BMW M8 Gran Coupe/6.jpg", "/Cars/BMW/BMW M8 Gran Coupe/7.jpg", "/Cars/BMW/BMW M8 Gran Coupe/8.jpg", "/Cars/BMW/BMW M8 Gran Coupe/9.jpg", "/Cars/BMW/BMW M8 Gran Coupe/10.jpg"],
        ["/Cars/BMW/X6/2024-bmw-x6-110-1675791921.jpg", "/Cars/BMW/X6/2024-bmw-x6-113-1675791922.jpg","/Cars/BMW/X6/P90495591_highRes_the-new-bmw-x6-m-com.jpg"],
        ["/Cars/BMW/X7/2023-bmw-x7-xdrive-40i144-641c5b4169eb2.jpg", "/Cars/BMW/X7/2023-bmw-x7-xdrive-40i147-641c5b438a1cc.jpg", "/Cars/BMW/X7/2023-bmw-x7-xdrive-40i128-641c5b39edaad.jpg", "/Cars/BMW/X7/2023-bmw-x7-xdrive-40i132-641c5b3c33cbc.jpg", "/Cars/BMW/X7/2023-bmw-x7-xdrive-40i101-641c5b2d70bc9.jpg", "/Cars/BMW/X7/2023-bmw-x7-xdrive-40i115-641c5b31db5bb.jpg"],
        ["/Cars/Mercedes/CLA/1.jpg", "/Cars/Mercedes/CLA/2.webp", "/Cars/Mercedes/CLA/3.jpg", "/Cars/Mercedes/CLA/4.jpg"],
        ["/Cars/Mercedes/A_Class/3.jpg", "/Cars/Mercedes/A_Class/4.jpg", "/Cars/Mercedes/A_Class/5.jpg", "/Cars/Mercedes/A_Class/6.jpg", "/Cars/Mercedes/A_Class/1.jpg", "/Cars/Mercedes/A_Class/2.jpg", "/Cars/Mercedes/A_Class/7.jpg", "/Cars/Mercedes/A_Class/8.jpg"],
        ["/Cars/Mercedes/B_Class/640px-Mercedes-Benz_B-Class.jpg", "Cars/Mercedes/B_Class/2.jpg", "Cars/Mercedes/B_Class/Mercedes-Benz_B-Class_at_the_Frankfurt_Motor_Show_IAA_2011_(6147726918).jpg"],
        ["/Cars/Mercedes/C_Class/1.jpg", "/Cars/Mercedes/C_Class/2.jpg", "/Cars/Mercedes/C_Class/3.jpg", "/Cars/Mercedes/C_Class/4.jpg", "/Cars/Mercedes/C_Class/5.jpg", "/Cars/Mercedes/C_Class/6.jpg", "/Cars/Mercedes/C_Class/7.jpg", "/Cars/Mercedes/C_Class/8.jpg"],
        ["/Cars/Mercedes/E_Class/4.jpg", "/Cars/Mercedes/E_Class/5.jpg", "/Cars/Mercedes/E_Class/6.jpg", "/Cars/Mercedes/E_Class/7.jpg", "/Cars/Mercedes/E_Class/1.jpg", "/Cars/Mercedes/E_Class/2.jpg", "/Cars/Mercedes/E_Class/3.jpg", "/Cars/Mercedes/E_Class/8.jpg", "/Cars/Mercedes/E_Class/9.jpg"],
        ["/Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-101-1642184014.jpg", "/Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-102-1642184016.jpg", "/Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-103-1642184013.jpg", "/Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-114-1642184019.jpg", "/Cars/Mercedes/S_Class/2022-mercedes-benz-s500-4matic-124-1642184029.jpg"],
        // Add more sets of image URLs as needed
    ];
    if (document.getElementById("BMW")) {
        for (let i = 0; i < imageSets.length; i++) {
            const images = imageSets[i];
            const imageViewer = document.getElementById(`image-viewer-${i + 1}`);
            const backwardButton = imageViewer.querySelector(".backward-btn");
            const forwardButton = imageViewer.querySelector(".forward-btn");
            const imageElement = imageViewer.querySelector(".current-image");

            let currentIndex = 0;

            function showImage(i) {
                currentIndex = (i % images.length + images.length) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.src = images[currentIndex];
            }

            backwardButton.addEventListener("click", function () {
                currentIndex--;
                showImage(currentIndex);
            });

            forwardButton.addEventListener("click", function () {
                currentIndex++;
                showImage(currentIndex);
            });

            // Show the initial image
            showImage(currentIndex);
        }
    } else {
        for (let i = 6; i < imageSets.length; i++) {
            const images = imageSets[i];
            const imageViewer = document.getElementById(`image-viewer-${i + 1}`);
            const backwardButton = imageViewer.querySelector(".backward-btn");
            const forwardButton = imageViewer.querySelector(".forward-btn");
            const imageElement = imageViewer.querySelector(".current-image");

            let currentIndex = 0;

            function showImage(i) {
                currentIndex = (i % images.length + images.length) % images.length;
                imageElement.src = images[currentIndex];
                imageElement.src = images[currentIndex];
            }

            backwardButton.addEventListener("click", function () {
                currentIndex--;
                showImage(currentIndex);
            });

            forwardButton.addEventListener("click", function () {
                currentIndex++;
                showImage(currentIndex);
            });

            // Show the initial image
            showImage(currentIndex);
        }


    }
});
//-------------------------------------------------------Mahmoud part start here-----------------------------------------------------------------------------------------//
function searchCars() {

    var input, filter, carSections, i, h2, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    var carSections = document.querySelectorAll(".individual-car");
    for (i = 0; i < carSections.length; i++) {
        h2 = carSections[i].querySelector("h2");
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            carSections[i].style.display = "";
        } else {
            carSections[i].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Bought Successfully!');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const spans = document.querySelectorAll('td');

    spans.forEach(span => {
        span.addEventListener('mouseover', function () {
            this.style.color = '#007bff';
        });

        span.addEventListener('mouseout', function () {
            this.style.color = '';
        });
    });
});


function f() {
    console.log("Submit button clicked!");

    const Name = document.getElementById("name").value;
    const E_mail = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    localStorage.setItem("Name", Name);
    localStorage.setItem("E_mail", E_mail);
    localStorage.setItem("message", message);


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";


    alert("Submitted successfully!");
}

//-------------------------------------------------------Mohamed Harby part start here-----------------------------------------------------------------------------------------//
function Buy_Alert() {
    var Buy_confirm;
    if (confirm("are you sure you want to buy this car ?")) {
        Buy_confirm = "You have bought this car !";
    }
    else {
        Buy_confirm = "Keep looking and you may find a car that suits you better"
    }
    document.getElementById("buy_confirm").innerHTML = Buy_confirm;
}

function Comment_alert() {
    alert("Thank you for your Comment, have a nice day!")
}

//-------------------------------------------------------Mohamed Desoky part start here-----------------------------------------------------------------------------------------//


function toggleCarsSection() {
    var carsSections = document.getElementsByClassName("cars-container");
    for (var i = 0; i < carsSections.length; i++) {
        var carsSection = carsSections[i];
        if (carsSection.style.display === "none" || carsSection.style.display === "") {
            carsSection.style.display = "flex";
        } else {
            carsSection.style.display = "none";
        }
    }
}

//-------------------------------------------------------Mohamed Samy part start here-----------------------------------------------------------------------------------------//
function buy() {
    alert("Audi A3 is added to cart")
}

//-------------------------------------------------------Mohamed Hussein part start here-----------------------------------------------------------------------------------------//


function scrollToDiv(className) {
    var targetDiv = document.querySelector('.' + className);
    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
}
let addButton = document.querySelectorAll(".my-button");
addButton.forEach(function (button) {
    button.addEventListener("click", function () {
        var carName = this.getAttribute("data-car-name");
        addToCart(carName);
    });
});