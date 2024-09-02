const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generetePlette = () => {
  container.innerHTML = ``; // clear container
  for (let i = 0; i < maxPaletteBoxes; i++) {
    // generate random hex color code
    let randomHEX = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHEX = `#${randomHEX.padStart(6, "0")}`;

    // creating "li" element and inserting it to the container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
      <div class="rect-box" style="background: ${randomHEX};"></div>
      <span class="hex-value">${randomHEX}</span>
    `;

    // adding click event to current li element to copy the color
    color.addEventListener("click", () => copyColor(color, randomHEX));

    container.appendChild(color);
  }
};

generetePlette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");

  // copy the hex value, updating the text to copied
  // and changing text back to original hex value after 200 mlsecond
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerHTML = "Copied";
      setTimeout(() => (colorElement.innerHTML = hexVal), 200);
    })
    .catch(() => alert("Failed to copy color code!"));
};

refreshBtn.addEventListener("click", generetePlette);
