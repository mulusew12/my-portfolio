

const naves = document.getElementById('nav-list');
const list = document.getElementById('list');
const mode = document.getElementById('mode')
const dots = document.getElementById('dot')
const remove = document.getElementById('remove')
const home = document.getElementById('ho')
const about = document.getElementById('ab')
const skill = document.getElementById('sk')
const contact = document.getElementById('co')
const project = document.getElementById('pr')
const skillLeft = document.getElementById('skill-left')
const projectLeft = document.getElementById('project-left')

const removeSkill = document.getElementById('remove-skill')
const removeProj = document.getElementById('remove-proj')
const sideBar = document.getElementById('side-bar')
const sideApear = document.getElementById('side-apear')
const sidebarRemove = document.getElementById('remove-side-bar')
const input1 = document.querySelectorAll('.input')
const names = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');


document.getElementById('read-more').addEventListener('click', function (e) {
 e.preventDefault()
    if (   this.innerHTML == 'Read more') {
    this.innerHTML = 'Read less'
      this.style.top = '84%'
    document.getElementById('about-para').style.height = 'auto'
  } else{
      this.innerHTML = 'Read more'
        document.getElementById('about-para').style.height = '460px'
  }
  
    
 
})




document.getElementById('send').addEventListener('click', function (e) {



    e.preventDefault();

    const newElement = document.createElement('p')

    newElement.classList.add('success')
    const saveBtn = document.createElement('button')

    this.innerHTML = ' <i class="fas fa-spinner fa-spin" style="margin-right: 20px;"></i>Submiting..'

    setTimeout(() => {


        setTimeout(() => {
            document.getElementById('send').textContent = 'Submit'
            newElement.style.display = 'none'
            input1.forEach(input => {
              
                saveBtn.classList.add('save')
                saveBtn.innerHTML = 'Save'
                saveBtn.id = 'ss'
                document.getElementById('ss').addEventListener('click', function () {
                  document.getElementById('ss').innerHTML ='saved';
                  const newPara = document.createElement('p')
              
                  newPara.classList.add('parag')
                   newPara.innerHTML =`<b>Name</b> ${names.value} <button class ="sb" id ="sb">X</button> <br> <b>Email</b>
                    ${email.value} <button class ="sb" id ="sb">X</button> <br> <b>Phone</b> ${phone.value} <button class ="sb" id ="sb">X</button>`;
                   document.body.appendChild(newPara)
                 
                
                })
            })


        }, 4000);
        newElement.style.background = 'white'
        newElement.innerHTML = `${names.value}  Your message sent successfully`
        document.getElementById('send').textContent = 'Submited successfully!     ✔'


    }, 3500)

    document.body.appendChild(newElement)
    document.body.appendChild(saveBtn)
   

})






removeSkill.addEventListener('click', () => {
    skillLeft.style.display = 'none'

})
removeProj.addEventListener('click', () => {
    projectLeft.style.display = 'none'
})



home.addEventListener('click', () => {
    skillLeft.style.display = 'none'
    home.style.textDecoration = 'underline'
    about.style.textDecoration = 'none'
    skill.style.textDecoration = 'none'
    contact.style.textDecoration = 'none'
    project.style.textDecoration = 'none'
})
about.addEventListener('click', () => {
    home.style.textDecoration = 'none'
    about.style.textDecoration = 'underline'
    skill.style.textDecoration = 'none'
    contact.style.textDecoration = 'none'
    project.style.textDecoration = 'none'
    skillLeft.style.display = 'none'
})

skill.addEventListener('click', () => {
    home.style.textDecoration = 'none'
    about.style.textDecoration = 'none'
    skill.style.textDecoration = 'underline'
    contact.style.textDecoration = 'none'
    project.style.textDecoration = 'none'
    skillLeft.style.display = 'block'
    projectLeft.style.display = 'none'
})
contact.addEventListener('click', () => {
    home.style.textDecoration = 'none'
    about.style.textDecoration = 'none'
    skill.style.textDecoration = 'none'
    contact.style.textDecoration = 'underline'
    project.style.textDecoration = 'none'
    skillLeft.style.display = 'none'
    projectLeft.style.display = 'none'

})
project.addEventListener('click', () => {
    home.style.textDecoration = 'none'
    about.style.textDecoration = 'none'
    skill.style.textDecoration = 'none'
    contact.style.textDecoration = 'none'
    project.style.textDecoration = 'underline'
    skillLeft.style.display = 'none'
    projectLeft.style.display = 'block'
})


list.addEventListener('click', () => {

    naves.classList.remove('nav-list')
    naves.classList.add('y')
    list.style.display = 'none'
    remove.style.display = 'block'
})

remove.addEventListener('click', () => {
    list.style.display = 'block'
    naves.classList.remove('y')
    naves.classList.add('nav-list')
    remove.style.display = 'none'
})





const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;



// Apply initial theme
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    body.classList.add('dark-mode');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Optional: Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        body.classList.toggle('dark-mode', e.matches);
    }
});


document.getElementById('cve-btn').addEventListener('click', function () {

    this.innerHTML = ' <i class="fas fa-spinner fa-spin" style="margin-right: 16px";></i>Downloading...'
    setTimeout(() => {
        const parag = document.getElementById('ppp');
        const cveUrl = "/cve.pdf"
        const fileName = "cve.pdf"
        const link = document.createElement("a");
        link.href = cveUrl;
        link.download = fileName;
        link.click();

        this.innerHTML = '<i class="fas fa-download" style="margin-right: 20px;"></i> Download CV'
        parag.style.display = 'block'
        parag.innerHTML = 'CV Downloaded Successfully!'


        setTimeout(() => {
            parag.style.display = 'none'
        }, 3000)

    }, 1500)

})



document.getElementById('portifol').addEventListener("click", function () {

    body.innerHTML = ' <i class="fas fa-spinner fa-spin"></i>Downloading..'

    setTimeout(() => {
        const projectUrl = "website/index.html"
        const link1 = document.createElement('a')
        link1.href = projectUrl;
        link1.click();
    }, 4000)

})

 document.getElementById('year').innerHTML = new Date().getFullYear()











