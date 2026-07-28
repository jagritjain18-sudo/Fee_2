const memes = [
  "https://i.kym-cdn.com/photos/images/newsfeed/003/029/679/3b3.png",
  "https://tse1.mm.bing.net/th/id/OIP.6iYmz3pF_J7kUj3sXHYFTQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th/id/OIP.7SJ0TuZKIw2esuAjliRg2AHaJr?w=135&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
  "https://th.bing.com/th/id/OIP.7RwydQseaL_TRiMR4ve_qgHaEK?w=268&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://th.bing.com/th?q=Tik+Tok+Memes&w=120&h=120&c=1&rs=1&qlt=70&r=0&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    "https://tse4.mm.bing.net/th/id/OIP.JpbLBUmxkBu3Nht58ij_OQHaHd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/09/relatable-funny-memes-71-6329c64cc5683__700.jpg"
];


const meme = document.getElementById("meme");
const box = document.querySelector(".box");
meme.src = memes[0];
meme.alt = "Default meme";

box.addEventListener("click", function () {
  let random = Math.floor(Math.random() * memes.length); 
  meme.src = memes[random]; 
  meme.alt = "Random meme";
});