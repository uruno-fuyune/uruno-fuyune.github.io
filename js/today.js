const element = document.getElementById("today");

function UpdateDate() {
    const date = new Date();

    const months = [
        "JAN", "FEB", "MAR", "APR",
        "MAY", "JUNE", "JULY", "AUG",
        "SEPT", "OCT", "NOV", "DEC"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    element.textContent = `${month}.${day},${year}`;
}

function ResizeText() {
    const width = element.clientWidth;

    element.style.fontSize = `${width * 0.1}px`;
}

const observer = new ResizeObserver(ResizeText);
observer.observe(element);

UpdateDate();
ResizeText();