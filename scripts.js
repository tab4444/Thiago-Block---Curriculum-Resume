const project = document.getElementById("projects")
const caret_project = project.querySelector('i')
const project_section = document.getElementById("projects-section")
project.addEventListener('click', ()=>{
    caret_project.classList.toggle('rotated')
    project_section.classList.toggle('display')
})

const education = document.getElementById("education")
const caret_education = education.querySelector('i')
const education_section = document.getElementById("education-section")
education.addEventListener('click', ()=>{
    caret_education.classList.toggle('rotated')
    education_section.classList.toggle('display')
})

const work = document.getElementById("work")
const work_section = document.getElementById("work-section")
work.addEventListener('click', () => {
    work_section.classList.toggle('display')
})

const skills = document.getElementById("skills")
const caret_skills = skills.querySelector("i")
const skills_section = document.getElementById("skills-section")
skills.addEventListener('click', () => {
    caret_skills.classList.toggle('rotated')
    skills_section.classList.toggle('display')
})

const lightmode_btn = document.getElementById("light-mode")
const darkmode_btn = document.getElementById("dark-mode")

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    if (savedTheme == "light"){
        lightmode_btn.classList.add('active');
        darkmode_btn.classList.remove('active');
    }
    else if(savedTheme == "dark"){
        darkmode_btn.classList.add('active');
        lightmode_btn.classList.remove('active');
    }
}else{
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

lightmode_btn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme","light");
    localStorage.setItem("theme","light");
    lightmode_btn.classList.add('active');
    darkmode_btn.classList.remove('active');
})

darkmode_btn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme","dark");
    localStorage.setItem("theme","dark");
    darkmode_btn.classList.add('active');
    lightmode_btn.classList.remove('active');
})

const monospace_btn = document.getElementById("monospace")
const body = document.querySelector('body')

const monospaceEnabled = localStorage.getItem("monospace") === "true";
if(monospaceEnabled){
    body.classList.add("monospace");
    monospace_btn.classList.add("active");
}
monospace_btn.addEventListener('click', () => {
    body.classList.toggle('monospace');
    monospace_btn.classList.toggle('active')

    const isActive = body.classList.contains("monospace");
    localStorage.setItem("monospace", isActive);
})