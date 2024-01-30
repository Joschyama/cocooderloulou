let randomElement;
let scoreid = document.getElementById('score');
let scoretextid = document.getElementById('scoretext')
let scorenum = 0;
function randomImage() {
    fetch('database.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            randomElement = data[randomIndex];
            console.log("Random Element:", randomElement);
            const randomElementParagraph = document.getElementById('image');
            randomElementParagraph.src = `${randomElement.Link}`;
            console.log(randomElement.Link);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

randomImage();

function LouLoubutton() {
    if (randomElement.Katze.includes("LouLou")) {
        score.innerHTML = scorenum +=1;
        scoretext.innerHTML = "Das war Richtig, das war LouLou!";
        randomImage();
    } else {
        scoretext.innerHTML = "Das war Falsch, das war Cocolino!";
        randomImage();
    }
}
function Cocobutton() {
    if (randomElement.Katze.includes("Cocolino")) {
        score.innerHTML = scorenum +=1;
        scoretext.innerHTML = "Das war Richtig, das war Cocolino!";
        randomImage();
    } else {
        scoretext.innerHTML = "Das war Falsch, das war LouLou!";
        randomImage();
    }
}
function Secretbutton(){
    const images = document.getElementById('image');
    image.src = 'https://i.postimg.cc/PqtcLh5T/Whats-App-Bild-2024-01-30-um-17-58-06-fa35d579.jpg';
}
