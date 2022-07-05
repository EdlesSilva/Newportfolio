function horaimg() {
    let horario = document.querySelector('.horajs')
    let img = document.querySelector('.fotofundo')
    let cor = document.querySelector('#rede')
    let navCor = document.querySelector('.link0')
    let navCor1 = document.querySelector('.link1')
    let navCor2 = document.querySelector('.link2')
    let gitBlack = document.querySelector('.gitblack')
    let linkeDin = document.querySelector('.linkedinblack')
    let burguerCorOne = document.querySelector('.line1') 
    let burguerCorTwo = document.querySelector('.line2') 
    let burguerCorThree = document.querySelector('.line3') 

    

    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
  
    
 

    if(hora >= 1 && hora < 12 ){
        

        img.src = 'img/goodMorning.jpg'
        cor.style.color = "black"
        horario.style.color = "white"
        navCor.style.color = "white"
        navCor1.style.color = "white"
        navCor2.style.color = "white"
        burguerCorOne.style.background = "black"
        burguerCorTwo.style.background = "black"
        burguerCorThree.style.background = "black"
        gitBlack.src = 'icon/githubblack.png'
        linkeDin.src = 'icon/linkedinblack.png'
        
    
    }else if(hora >= 13 && hora < 19){

        img.src = 'img/goodAfternoon.jpg'


    }else{
        img.src = 'img/goodNigth.jpg'
        }

        horario.innerHTML += (  (hora < 10 ? '0' : '') + hora)
        horario.innerHTML += (  (min < 10 ? ':0' : ':') + min)
        
        
   
}

function showMenu(){
    let navActive = document.querySelector('.ativado')
    let navLinks = document.querySelectorAll('nav-links li') // Permite selecionar todos os li do meu nav
    let burguer = document.querySelector('.hamburger')
    

    navActive.classList.toggle('nav-active') // permite escolher uma classe direto do css
    burguer.classList.toggle('toggle')


}

//gsap.to('.skill-animada', {y: 50, opacity: 0, duration: 1}) //to scroll down

gsap.fromTo('.horajs', {opacity: 0, y:50} ,{opacity: 1, y:0 , duration: 2})




 //gsap.fromTo('.skill-animada', {opacity: 0, y:50}, {opacity: 1, y:0, duration: 2})


 
    


    

 
    



