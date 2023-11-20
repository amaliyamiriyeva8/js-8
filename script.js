for (let i = 1; i <= 20; i++) {
    const Div = document.getElementById("div" + i);
    if (i % 2 === 0) {
        Div.style.backgroundColor="red";
    } else {
        Div.style.backgroundColor="yellow";
    }

    if (i === 5 ||i === 10 || i === 15 || i === 20) {
        Div.style.backgroundColor="blue";
    }
}



