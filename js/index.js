//create resources
const resources = [{
        heading: "Use EV cars!",
        path: "./images/solution-images/ev.jpg",
        body: "Electronic cars run on electricity (and not on pollution-causing and enviromentally harmful fossil fuels), and with brands like Tesla producing high-volume low cost electric cars, it isn't hard to own one."
    },
    {
        heading: "Use Solar Panels!",
        path: "./images/solution-images/solar-cells.jpg",
        body: "Solar Panels are a great way to cut your electricity bills and help conserve enviroment at the same time. With advent to cheap solar power cells, the technology is within reach."
    },
    {
        heading: "Install a (small) windmill if you live in windy areas!",
        path: "./images/solution-images/windmill.png",
        body: "Wind energy is catching on, and with heavy commercialization of the technology, the technology has trickled down to end-consumers. DIY Wind turbine kits are available in stores, so you can build your own and harvest the free and unused energy that nature provides."
    }
];



var options = {
    strings: ["earth", "animals", "humankind", "you"],
    typeSpeed: 40,
    loop: true
}

var typed = new Typed(".save", options);


/* GETTING REFERENCES TO ACTIVE ELEMENTS */
const btns = document.querySelectorAll("button");
const currentContent = document.querySelector(".current-content");

/*CREATING EVENT-HANDLER*/
function contentLoader(ev) {
    /*console.log("content loader works");*/
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "Solution #1") {
        currentContent.innerHTML = `<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown delay-1s mt-2">${resources[0].heading}</h2>
                                    <img src="${resources[0].path}" class="img-fluid animated fadeInDown delay-1s mt-2">
                                    <p class="animated fadeInDown delay-2s mt-2">${resources[0].body}</p>
                                    </div>`;
    } else if (eventTarget === "Solution #2") {
                                    currentContent.innerHTML = `<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown delay-1s mt-2">${resources[1].heading}</h2>
                                    <img src="${resources[1].path}" class="img-fluid animated fadeInDown delay-1s mt-2">
                                    <p class="animated fadeInDown delay-2s mt-2">${resources[1].body}</p>
                                    </div>`;
    } else {
        currentContent.innerHTML =`<div class="container-fluid text-center">
                                    <h2 class="animated fadeInDown delay-1s mt-2">${resources[2].heading}</h2>
                                    <img src="${resources[2].path}" class="img-fluid animated fadeInDown delay-1s mt-2">
                                    <p class="animated fadeInDown delay-2s mt-2">${resources[2].body}</p>
                                    </div>`;
    }

}

/* REGISTERING EVENT CONTENT */
btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);