console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

///////////CHALLENGE 1

const loadImg = () => {
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data.message);

      for (let i = 0; i < data.message.length; i++) {
        ///////TAGGING
        const imgId = document.getElementById("dog-image-container");
        ///////Create Img tag
        const img = document.createElement("img");
        img.src = data.message[i];
        ///////Creating Div and img to the div
        const divRight = document.createElement("div");
        divRight.setAttribute("style", "border-left: solid 1px #ddd");
        divRight.appendChild(img);
        imgId.appendChild(divRight);
      }
    });
};

////////// CHALLENGE 2
const loadBreed = () => {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((breed) => {
      //////Convert object to Array
      const k = Object.keys(breed.message);
      ///log to console

      console.log(Object.keys(breed.message));
      ///Looping
      for (let z = 0; z < k.length; z++) {
        const breedId = document.getElementById("dog-breeds");
        const breedDrop = document.getElementById("breed-dropdown");

        ////// Create list
        const li = document.createElement("li");
        li.setAttribute("style", "color:#0080ff");
        li.innerHTML = k[z];
        breedId.appendChild(li);

        ////// Filter List

        breedDrop.addEventListener("change", (e) => {
          const letter = e.target.value;
          const filtered = k.filter((breed) => breed.startsWith(letter));
          li.innerHTML = filtered[z];
          console.log(li.innerHTML);
          if (li.innerHTML === "undefined") {
            li.remove();
          }
        });

        ////// Change Color
        li.addEventListener("click", (event) => {
          event.target.style.color = "red";
        });
      }
    });
};

//////////////
const filterBreed = () => {
  const breedDrop = document.getElementById("breed-dropdown");

  breedDrop.addEventListener("change", (e) => {
    const letter = e.target.value;
    const filtered = k.filter((breed) => breed.startsWith(letter));
    breedId.innerHTML = filtered[z];
  });
};

//////// DOM LOADS
document.addEventListener("DOMContentLoaded", () => {
  loadImg();
  loadBreed();
});
