document.getElementById('animalForm').addEventListener('submit', function (event) {
    event.preventDefault();
    calculate();
})

function calculate() {
    const buffalo =Number(document.getElementById('Buffalo').value || 0);
    const cows =Number(document.getElementById('Cows').value || 0);
    const chicken =Number(document.getElementById('Chicken').value || 0);

    const totalLegs = (buffalo * 4) + (cows * 4) + (chicken * 2);

    document.getElementById('result').textContent = `Total animal legs: ${totalLegs}`;
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const captions = [
        document.getElementById("caption1"),
        document.getElementById("caption2"),
        document.getElementById("caption3")
    ];
    const thumbs = document.getElementsByClassName("thumb");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        captions[i].style.display = "none";
        thumbs[i].classList.remove("active-thumb");
    }
    slides[slideIndex - 1].style.display = "block";
    captions[slideIndex - 1].style.display = "block";
    thumbs[slideIndex - 1].classList.add("active-thumb");
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoSlide, 3000);
}

autoSlide();