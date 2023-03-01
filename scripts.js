//Add the parent class .timeline to container

//If usign a CMS assign .timeline to direct parent <div>
//document.querySelector(".kadence-column_3b6b3c-56 div").classList.add("timeline");

//target all paragraphs and add a <div> before. Not sure if necessary but works
let timelineParagraphs = document.querySelectorAll(".timeline p");


timelineParagraphs.forEach(function (p) {
    const div = document.createElement("div");
    p.parentNode.insertBefore(div, p).classList.add( "d-flex", "dotted-line", "separator");
});

let paragraphs = document.querySelectorAll(".timeline p");
let lastParagraph = paragraphs[paragraphs.length - 1];
lastParagraph.classList.add("timeline-current");


let events = timelineParagraphs.length;
console.log("There are " + events + " company milestones.");
