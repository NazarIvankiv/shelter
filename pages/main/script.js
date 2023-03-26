const menu = document.getElementById('menu')
const menu_toggle = document.getElementById('menu__toggle')
const menuBtn = document.getElementById('menu__btn')
menu.addEventListener('click', MenuClose)
menu_toggle.addEventListener('click', MenuOpen)
menu.classList.add('close-menu')
function MenuClose(){
    menu.classList.remove('open-menu')
    menu.classList.add('close-menu')
    menu_toggle.addEventListener('click', MenuOpen)
    menuBtn.classList.remove('menu-rotate')
    enableScroll()
}
function MenuOpen(){
    menu.classList.remove('close-menu')
    menu.classList.add('open-menu')
    menu_toggle.removeEventListener('click', MenuOpen)
    menu_toggle.addEventListener('click', MenuClose)
    menuBtn.classList.add('menu-rotate')
    disableScroll()
}

function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
    };
    }
    function enableScroll() {
    window.onscroll = function() {};
    }
  
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    const card3 =document.getElementById('card3')
    const card1img = document.getElementById('card1img')
    const card2img = document.getElementById('card2img')
    const card3img =document.getElementById('card3img')
    const rigthButton = document.querySelector('.right-button')
    const leftButton = document.querySelector('.left-button')
    const petName1 = document.getElementById('petName1')
    const petName2 = document.getElementById('petName2')
    const petName3 = document.getElementById('petName3')
    let result = [];
        function randomUniqueNum(range, outputCount) {
            let arr = []
            for (let i = 0; i <= range; i++) {
              arr.push(i)
            }
            for (let i = 0; i <= outputCount; i++) {
              const random = Math.floor(Math.random() * (range - i));
              result.push(arr[random]);
              arr[random] = arr[range - i];
            }
            return result;
          }
          randomUniqueNum(7,7)
          console.log(result)
          const button1 = document.getElementById('button1')
          const button2 = document.getElementById('button2')
          const button3 = document.getElementById('button3')
          const popup1window = document.createElement('div')
          const popupbutton = document.createElement('div')
          const popupinfo = document.createElement('div')
          const closebutton = document.createElement('div')
          const modalimg1 = document.createElement('img')
          const modalimg2 = document.createElement('img')
          const modalimg3 = document.createElement('img')
          const modalinfo = document.createElement('div')
          const modalname1 = document.createElement('h3')
          const type1 = document.createElement('p')
          const description1 = document.createElement('p')
          const age1 = document.createElement('p')
          const inaculations1 = document.createElement('p')
          const diseases1 = document.createElement('p')
          const parasites1 = document.createElement('p')
          const modalname2 = document.createElement('h3')
          const type2 = document.createElement('p')
          const description2 = document.createElement('p')
          const age2 = document.createElement('p')
          const inaculations2 = document.createElement('p')
          const diseases2 = document.createElement('p')
          const parasites2 = document.createElement('p')
          const modalname3 = document.createElement('h3')
          const type3 = document.createElement('p')
          const description3 = document.createElement('p')
          const age3 = document.createElement('p')
          const inaculations3 = document.createElement('p')
          const diseases3 = document.createElement('p')
          const parasites3 = document.createElement('p')
          popup1window.append(popupbutton)
          popupbutton.append(popupinfo)
          popupbutton.append(closebutton)
          popupinfo.append(modalinfo)
          popupbutton.classList.add('popupbutton')
          closebutton.classList.add('closebutton')
          popupinfo.classList.add('popupinfo')
          modalimg1.classList.add('modalimg')
          modalimg2.classList.add('modalimg')
          modalimg3.classList.add('modalimg')
          modalinfo.classList.add('modalinfo')
          modalname1.classList.add('modalname')
          modalname2.classList.add('modalname')
          modalname3.classList.add('modalname')
          type1.classList.add('type')
          type2.classList.add('type')
          type3.classList.add('type')
          description1.classList.add('description')
          description2.classList.add('description')
          description3.classList.add('description')
          closebutton.innerHTML = '&#215;'
fetch('../../assets/pets.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            const age = document.createElement('span')
            const inaculations = document.createElement('span')
            const diseases = document.createElement('span')
            const parasites = document.createElement('span')
            age.innerHTML = 'Age: '
            inaculations.innerHTML = 'Inaculations: '
            diseases.innerHTML = 'Diseases: '
            parasites.innerHTML = 'Parasites: '
            age.classList.add('listname')
            inaculations.classList.add('listname')
            diseases.classList.add('listname')
            parasites.classList.add('listname')
            card1img.setAttribute('src',data[result[0]].img)
            petName1.innerHTML = data[result[0]].name
            modalimg1.setAttribute('src',data[result[0]].img)
            modalname1.innerHTML = data[result[0]].name
            type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
            description1.innerHTML = data[result[0]].description
            age1.innerHTML =  data[result[0]].age
            inaculations1.innerHTML = data[result[0]].inoculations[0]
            diseases1.innerHTML = data[result[0]].diseases
            parasites1.innerHTML = data[result[0]].parasites
            result.shift()
            if(!card2.classList.contains('resp')){
              card2img.setAttribute('src',data[result[1]].img)
              petName2.innerHTML = data[result[1]].name
              modalimg2.setAttribute('src',data[result[1]].img)
              modalname2.innerHTML = data[result[1]].name
              type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
              description2.innerHTML = data[result[1]].description
              age2.innerHTML = data[result[1]].age
              inaculations2.innerHTML = data[result[1]].inoculations[0]
              diseases2.innerHTML = data[result[1]].diseases[0]
              parasites2.innerHTML = data[result[1]].parasites[0]
              result.shift()
              console.log('2card done')
            }
            if(!card3.classList.contains('resp')){
              card3img.setAttribute('src',data[result[2]].img)
              petName3.innerHTML = data[result[2]].name
              modalimg3.setAttribute('src',data[result[2]].img)
              modalname3.innerHTML = data[result[2]].name
              type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
              description3.innerHTML = data[result[2]].description
              age3.innerHTML = data[result[2]].age
              inaculations3.innerHTML = data[result[2]].inoculations[0]
              diseases3.innerHTML = data[result[2]].diseases[0]
              parasites3.innerHTML = data[result[2]].parasites[0]
              result.shift()
              console.log('3card done')
            }
            function Imgset(){
                card1img.setAttribute('src',data[result[0]].img)
                petName1.innerHTML = data[result[0]].name
                modalimg1.setAttribute('src',data[result[0]].img)
                modalname1.innerHTML = data[result[0]].name
                type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                description1.innerHTML = data[result[0]].description
                age1.innerHTML = data[result[0]].age
                inaculations1.innerHTML = data[result[0]].inoculations[0]
                diseases1.innerHTML = data[result[0]].diseases[0]
                parasites1.innerHTML = data[result[0]].parasites[0]
                result.shift()
                if(!card2.classList.contains('resp')){
                  card2img.setAttribute('src',data[result[0]].img)
                  petName2.innerHTML = data[result[0]].name
                  modalimg2.setAttribute('src',data[result[0]].img)
                  modalname2.innerHTML = data[result[0]].name
                  type2.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                  description2.innerHTML = data[result[0]].description
                  age2.innerHTML = data[result[0]].age
                  inaculations2.innerHTML = data[result[0]].inoculations[0]
                  diseases2.innerHTML = data[result[0]].diseases[0]
                  parasites2.innerHTML = data[result[0]].parasites[0]
                  result.shift()
                  console.log('2card done')
                }
                if(!card3.classList.contains('resp')){
                  card3img.setAttribute('src',data[result[0]].img)
                  petName3.innerHTML = data[result[0]].name
                  modalimg3.setAttribute('src',data[result[0]].img)
                  modalname3.innerHTML = data[result[0]].name
                  type3.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                  description3.innerHTML = data[result[0]].description
                  age3.innerHTML = data[result[0]].age
                  inaculations3.innerHTML = data[result[0]].inoculations[0]
                  diseases3.innerHTML = data[result[0]].diseases[0]
                  parasites3.innerHTML = data[result[0]].parasites[0]
                  result.shift()
                  console.log('3card done')
                }
                console.log(result)
                if(result.length == 0 || result.length == 2 || result.length == 1){
                  randomUniqueNum(7,7)
                }
        }
            rigthButton.addEventListener('click', Imgset)
            leftButton.addEventListener('click', Imgset)
            button1.addEventListener('click',OpenPopup1)
            button2.addEventListener('click',OpenPopup2)
            button3.addEventListener('click',OpenPopup3)
            function OpenPopup1(){
              disableScroll()
              popup1window.classList.remove('closepopup')
              popup1window.classList.add('popup')
              console.log('good')
              card1.append(popup1window)
              popupinfo.append(modalimg1)
              modalinfo.append(modalname1)
              modalinfo.append(type1)
              modalinfo.append(description1)
              modalinfo.append(age1)
              age1.prepend(age)
              modalinfo.append(inaculations1)
              inaculations1.prepend(inaculations)
              modalinfo.append(diseases1)
              diseases1.prepend(diseases)
              modalinfo.append(parasites1)
              parasites1.prepend(parasites)
            }
            function OpenPopup2(){
              disableScroll()
              popup1window.classList.remove('closepopup')
              popup1window.classList.add('popup')
              console.log('good')
              card1.append(popup1window)
              popupinfo.append(modalimg2)
              modalinfo.append(modalname2)
              modalinfo.append(type2)
              modalinfo.append(description2)
              modalinfo.append(age2)
              age2.prepend(age)
              modalinfo.append(inaculations2)
              inaculations2.prepend(inaculations)
              modalinfo.append(diseases2)
              diseases2.prepend(diseases)
              modalinfo.append(parasites2)
              parasites2.prepend(parasites)
            }
            function OpenPopup3(){
              disableScroll()
              popup1window.classList.remove('closepopup')
              popup1window.classList.add('popup')
              console.log('good')
              card1.append(popup1window)
              popupinfo.append(modalimg3)
              modalinfo.append(modalname3)
              modalinfo.append(type3)
              modalinfo.append(description3)
              modalinfo.append(age3)
              age3.prepend(age)
              modalinfo.append(inaculations3)
              inaculations3.prepend(inaculations)
              modalinfo.append(diseases3)
              diseases3.prepend(diseases)
              modalinfo.append(parasites3)
              parasites3.prepend(parasites)
            }
            popup1window.addEventListener('click',ClosePopup1)
            function ClosePopup1(){
              enableScroll()
              popup1window.classList.remove('popup')
              popup1window.classList.add('closepopup')
              modalimg1.remove()
              modalimg2.remove()
              modalimg3.remove()
              modalname1.remove()
              type1.remove()
              description1.remove()
              age1.remove()
              inaculations1.remove()
              diseases1.remove()
              parasites1.remove()
              modalname2.remove()
              type2.remove()
              description2.remove()
              age2.remove()
              inaculations2.remove()
              diseases2.remove()
              parasites2.remove()
              modalname3.remove()
              type3.remove()
              description3.remove()
              age3.remove()
              inaculations3.remove()
              diseases3.remove()
              parasites3.remove()
            }
        })




          function TowCard(x) {
            if (x.matches) {
              card3.classList.add('resp')
            } else {
                card3.classList.remove('resp')
            }
          }
          function OneCard(x2){
            if (x2.matches) {
                card2.classList.add('resp')
              } else {
                  card2.classList.remove('resp')
              }
          }
          var x = window.matchMedia('(max-width: 1000px)')
          let x2 = window.matchMedia('(max-width: 767px)')
          TowCard(x)
          OneCard(x2)
          x.addListener(TowCard)
          x2.addListener(OneCard)









          