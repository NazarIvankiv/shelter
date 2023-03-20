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
fetch('../../assets/pets.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            card1img.setAttribute('src',data[result[0]].img)
            petName1.innerHTML = data[result[0]].name
            result.shift()
            if(!card2.classList.contains('resp')){
              card2img.setAttribute('src',data[result[1]].img)
              petName2.innerHTML = data[result[1]].name
              result.shift()
              console.log('2card done')
            }
            if(!card3.classList.contains('resp')){
              card3img.setAttribute('src',data[result[2]].img)
              petName3.innerHTML = data[result[2]].name
              result.shift()
              console.log('3card done')
            }
            function Imgset(){
                card1img.setAttribute('src',data[result[0]].img)
                petName1.innerHTML = data[result[0]].name
                result.shift()
                if(!card2.classList.contains('resp')){
                  card2img.setAttribute('src',data[result[0]].img)
                  petName2.innerHTML = data[result[0]].name
                  result.shift()
                  console.log('2card done')
                }
                if(!card3.classList.contains('resp')){
                  card3img.setAttribute('src',data[result[0]].img)
                  petName3.innerHTML = data[result[0]].name
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
          let x2 = window.matchMedia('(max-width: 768px)')
          TowCard(x)
          OneCard(x2)
          x.addListener(TowCard)
          x2.addListener(OneCard)





          