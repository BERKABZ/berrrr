let imgfun = (img) => {
    let div = document.createElement("div");
    div.className = "secimg1";
    div.innerHTML = `
        <img src="${img}" alt="Image">
    `;
    return div;
};

export { imgfun };
