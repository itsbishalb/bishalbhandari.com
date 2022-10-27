Projects = [
    {
        name: "Reversi Board Game",
        img: "../assets/projects/reversi.png",
        desc:"I rewrote my java code for university coursework in javascript. Reversi is a strategy board game for two players, played on an 8×8 uncheckered board. I am planning on implementing simple AI in future if i get back to the project",
        demoUrl:"https://projects.bishalbhandari.com/reversi",
    },
    {
        name: "University Grade Calculator",
        img: "../assets/projects/grade-calculator.png",
        desc:"Created with React.js, this is my first react project. I wanted to make this calculator so i can calculate my semester and year average grade. The calculator works as expected but it haven't got all the features i wanted yet and will be working on creating those features and possibly have own backend as well to store past grade.",
        demoUrl:"https://projects.bishalbhandari.com/grade-calculator/",
        sourceCode:"https://github.com/itsbishalb/grade-calculator"
    },
    {
        name: "Password Generator",
        img: "../assets/projects/password-generator.png",
        desc:"My first javascript project and i am currently using this to create safe password for my online accounts. In future i am planning on making this more user friendly by letting them choose the characters that they want in password.",
        demoUrl:"https://projects.bishalbhandari.com/password-generator/",
        sourceCode:"https://github.com/itsbishalb/Password-Generator"
    }
]


function loadHtml () {
    return Projects.map((project) => {
        return `<div class="project-card">
        <div class="project-info">
            <h1 class="project-title">${project.name}</h1>
            <p class="project-description desc-text">
             ${project.desc}
            </p> 
        </div>
        <img class="project-img" src=${project.img} alt=${project.name}> 
        <div class="projects-links">
            <a class=${project.sourceCode ? "btn-style" : "hide"} href=${project.sourceCode}>Source Code</a>      <!-- #Hide the Source code button if it doesnt exist -->
            <a class="btn-style" href="${project.demoUrl}">Demo</a>
        </div>
                          
        </div>`
    }).join('')
}


document.getElementById ('projects-list').innerHTML = loadHtml()


var buttons = document.getElementsByClassName("project-btn")
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.borderColor = "#fff"

    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.borderColor = "#AAAAAA"
      });
  });
});