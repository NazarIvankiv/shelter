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

    let x = window.matchMedia('(max-width: 1279px)')
    let x2 = window.matchMedia('(max-width: 767px)')








    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2')
    const card3 = document.getElementById('card3')
    const card4 = document.getElementById('card4')
    const card5 = document.getElementById('card5')
    const card6 = document.getElementById('card6')
    const card7 = document.getElementById('card7')
    const card8 = document.getElementById('card8')
      const card1img = document.getElementById('card1img')
      const card2img = document.getElementById('card2img')
      const card3img = document.getElementById('card3img')
      const card4img = document.getElementById('card4img')
      const card5img = document.getElementById('card5img')
      const card6img = document.getElementById('card6img')
      const card7img = document.getElementById('card7img')
      const card8img = document.getElementById('card8img')
      const button = document.getElementById('button')
      const currentPage = document.getElementById('current-page')
      const lastPage = document.getElementById('last-page')
      const PrePage = document.getElementById('prev-page')
      const firstPage = document.getElementById('first-page')
      const petName1 = document.getElementById('petName1')
      const petName2 = document.getElementById('petName2')
      const petName3 = document.getElementById('petName3')
      const petName4 = document.getElementById('petName4')
      const petName5 = document.getElementById('petName5')
      const petName6 = document.getElementById('petName6')
      const petName7 = document.getElementById('petName7')
      const petName8 = document.getElementById('petName8')







    const button1 = document.getElementById('button1')
    const button2 = document.getElementById('button2')
    const button3 = document.getElementById('button3')
    const button4 = document.getElementById('button4')
    const button5 = document.getElementById('button5')
    const button6 = document.getElementById('button6')
    const button7 = document.getElementById('button7')
    const button8 = document.getElementById('button8')
    const popup1window = document.createElement('div')
    const popupbutton = document.createElement('div')
    const popupinfo = document.createElement('div')
    const closebutton = document.createElement('div')


          const modalimg1 = document.createElement('img')
          const modalimg2 = document.createElement('img')
          const modalimg3 = document.createElement('img')
          const modalimg4 = document.createElement('img')
          const modalimg5 = document.createElement('img')
          const modalimg6 = document.createElement('img')
          const modalimg7 = document.createElement('img')
          const modalimg8 = document.createElement('img')
          const modalinfo = document.createElement('div')
          const modalname1 = document.createElement('h3')
          const modalname2 = document.createElement('h3')
          const modalname3 = document.createElement('h3')
          const modalname4 = document.createElement('h3')
          const modalname5 = document.createElement('h3')
          const modalname6 = document.createElement('h3')
          const modalname7 = document.createElement('h3')
          const modalname8 = document.createElement('h3')
          const type1 = document.createElement('p')
          const type2 = document.createElement('p')
          const type3 = document.createElement('p')
          const type4 = document.createElement('p')
          const type5 = document.createElement('p')
          const type6 = document.createElement('p')
          const type7 = document.createElement('p')
          const type8 = document.createElement('p')
          const description1 = document.createElement('p')
          const description2 = document.createElement('p')
          const description3 = document.createElement('p')
          const description4 = document.createElement('p')
          const description5 = document.createElement('p')
          const description6 = document.createElement('p')
          const description7 = document.createElement('p')
          const description8 = document.createElement('p')
          const age1 = document.createElement('p')
          const age2 = document.createElement('p')
          const age3 = document.createElement('p')
          const age4 = document.createElement('p')
          const age5 = document.createElement('p')
          const age6 = document.createElement('p')
          const age7 = document.createElement('p')
          const age8 = document.createElement('p')
          const inaculations1 = document.createElement('p')
          const inaculations2 = document.createElement('p')
          const inaculations3 = document.createElement('p')
          const inaculations4 = document.createElement('p')
          const inaculations5 = document.createElement('p')
          const inaculations6 = document.createElement('p')
          const inaculations7 = document.createElement('p')
          const inaculations8 = document.createElement('p')
          const diseases1 = document.createElement('p')
          const diseases2 = document.createElement('p')
          const diseases3 = document.createElement('p')
          const diseases4 = document.createElement('p')
          const diseases5 = document.createElement('p')
          const diseases6 = document.createElement('p')
          const diseases7 = document.createElement('p')
          const diseases8 = document.createElement('p')
          const parasites1 = document.createElement('p')
          const parasites2 = document.createElement('p')
          const parasites3 = document.createElement('p')
          const parasites4 = document.createElement('p')
          const parasites5 = document.createElement('p')
          const parasites6 = document.createElement('p')
          const parasites7 = document.createElement('p')
          const parasites8 = document.createElement('p')
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
          modalimg4.classList.add('modalimg')
          modalimg5.classList.add('modalimg')
          modalimg6.classList.add('modalimg')
          modalimg7.classList.add('modalimg')
          modalimg8.classList.add('modalimg')
          modalinfo.classList.add('modalinfo')
          modalname1.classList.add('modalname')
          modalname2.classList.add('modalname')
          modalname3.classList.add('modalname')
          modalname4.classList.add('modalname')
          modalname5.classList.add('modalname')
          modalname6.classList.add('modalname')
          modalname7.classList.add('modalname')
          modalname8.classList.add('modalname')
          type1.classList.add('type')
          type2.classList.add('type')
          type3.classList.add('type')
          type4.classList.add('type')
          type5.classList.add('type')
          type6.classList.add('type')
          type7.classList.add('type')
          type8.classList.add('type')
          description1.classList.add('description')
          description2.classList.add('description')
          description3.classList.add('description')
          description4.classList.add('description')
          description5.classList.add('description')
          description6.classList.add('description')
          description7.classList.add('description')
          description8.classList.add('description')
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
              randomUniqueNum(7,7)
              randomUniqueNum(7,7)
              randomUniqueNum(7,7)
              randomUniqueNum(7,7)
              randomUniqueNum(7,7)
        function PaginationFor8(){
        if(!x.matches){
            let count = 8
            let count1 = 16
            let page = 1
            card1img.setAttribute('src',data[result[0]].img)
            card2img.setAttribute('src',data[result[1]].img)
            card3img.setAttribute('src',data[result[2]].img)
            card4img.setAttribute('src',data[result[3]].img)
            card5img.setAttribute('src',data[result[4]].img)
            card6img.setAttribute('src',data[result[5]].img)
            card7img.setAttribute('src',data[result[6]].img)
            card8img.setAttribute('src',data[result[7]].img)
            petName1.innerHTML = data[result[0]].name
            petName2.innerHTML = data[result[1]].name
            petName3.innerHTML = data[result[2]].name
            petName4.innerHTML = data[result[3]].name
            petName5.innerHTML = data[result[4]].name
            petName6.innerHTML = data[result[5]].name
            petName7.innerHTML = data[result[6]].name
            petName8.innerHTML = data[result[7]].name
            modalimg1.setAttribute('src',data[result[0]].img)
            modalimg2.setAttribute('src',data[result[1]].img)
            modalimg3.setAttribute('src',data[result[2]].img)
            modalimg4.setAttribute('src',data[result[3]].img)
            modalimg5.setAttribute('src',data[result[4]].img)
            modalimg6.setAttribute('src',data[result[5]].img)
            modalimg7.setAttribute('src',data[result[6]].img)
            modalimg8.setAttribute('src',data[result[7]].img)
            modalname1.innerHTML = data[result[0]].name
            modalname2.innerHTML = data[result[1]].name
            modalname3.innerHTML = data[result[2]].name
            modalname4.innerHTML = data[result[3]].name
            modalname5.innerHTML = data[result[4]].name
            modalname6.innerHTML = data[result[5]].name
            modalname7.innerHTML = data[result[6]].name
            modalname8.innerHTML = data[result[7]].name
            type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
            type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
            type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
            type4.innerHTML =`${data[result[3]].type} - ${data[result[3]].breed}`
            type5.innerHTML =`${data[result[4]].type} - ${data[result[4]].breed}`
            type6.innerHTML =`${data[result[5]].type} - ${data[result[5]].breed}`
            type7.innerHTML =`${data[result[6]].type} - ${data[result[6]].breed}`
            type8.innerHTML =`${data[result[7]].type} - ${data[result[7]].breed}`
            description1.innerHTML = data[result[0]].description
            description2.innerHTML = data[result[1]].description
            description3.innerHTML = data[result[2]].description
            description4.innerHTML = data[result[3]].description
            description5.innerHTML = data[result[4]].description
            description6.innerHTML = data[result[5]].description
            description7.innerHTML = data[result[6]].description
            description8.innerHTML = data[result[7]].description
            age1.innerHTML =  data[result[0]].age
            age2.innerHTML =  data[result[1]].age
            age3.innerHTML =  data[result[2]].age
            age4.innerHTML =  data[result[3]].age
            age5.innerHTML =  data[result[4]].age
            age6.innerHTML =  data[result[5]].age
            age7.innerHTML =  data[result[6]].age
            age8.innerHTML =  data[result[7]].age
            inaculations1.innerHTML = data[result[0]].inoculations[0]
            inaculations2.innerHTML = data[result[1]].inoculations[0]
            inaculations3.innerHTML = data[result[2]].inoculations[0]
            inaculations4.innerHTML = data[result[3]].inoculations[0]
            inaculations5.innerHTML = data[result[4]].inoculations[0]
            inaculations6.innerHTML = data[result[5]].inoculations[0]
            inaculations7.innerHTML = data[result[6]].inoculations[0]
            inaculations8.innerHTML = data[result[7]].inoculations[0]
            diseases1.innerHTML = data[result[0]].diseases
            diseases2.innerHTML = data[result[1]].diseases
            diseases3.innerHTML = data[result[2]].diseases
            diseases4.innerHTML = data[result[3]].diseases
            diseases5.innerHTML = data[result[4]].diseases
            diseases6.innerHTML = data[result[5]].diseases
            diseases7.innerHTML = data[result[6]].diseases
            diseases8.innerHTML = data[result[7]].diseases
            parasites1.innerHTML = data[result[0]].parasites
            parasites2.innerHTML = data[result[1]].parasites
            parasites3.innerHTML = data[result[2]].parasites
            parasites4.innerHTML = data[result[3]].parasites
            parasites5.innerHTML = data[result[4]].parasites
            parasites6.innerHTML = data[result[5]].parasites
            parasites7.innerHTML = data[result[6]].parasites
            parasites8.innerHTML = data[result[7]].parasites
            function ImgSet48(){
                card1img.setAttribute('src',data[result[0 + count]].img)
                card2img.setAttribute('src',data[result[1 + count]].img)
                card3img.setAttribute('src',data[result[2 + count]].img)
                card4img.setAttribute('src',data[result[3 + count]].img)
                card5img.setAttribute('src',data[result[4 + count]].img)
                card6img.setAttribute('src',data[result[5 + count]].img)
                card7img.setAttribute('src',data[result[6 + count]].img)
                card8img.setAttribute('src',data[result[7 + count]].img)
                petName1.innerHTML = data[result[0 + count]].name
                petName2.innerHTML = data[result[1 + count]].name
                petName3.innerHTML = data[result[2 + count]].name
                petName4.innerHTML = data[result[3 + count]].name
                petName5.innerHTML = data[result[4 + count]].name
                petName6.innerHTML = data[result[5 + count]].name
                petName7.innerHTML = data[result[6 + count]].name
                petName8.innerHTML = data[result[7 + count]].name
                modalimg1.setAttribute('src',data[result[0 + count]].img)
                modalimg2.setAttribute('src',data[result[1 + count]].img)
                modalimg3.setAttribute('src',data[result[2 + count]].img)
                modalimg4.setAttribute('src',data[result[3 + count]].img)
                modalimg5.setAttribute('src',data[result[4 + count]].img)
                modalimg6.setAttribute('src',data[result[5 + count]].img)
                modalimg7.setAttribute('src',data[result[6 + count]].img)
                modalimg8.setAttribute('src',data[result[7 + count]].img)
                modalname1.innerHTML = data[result[0 + count]].name
                modalname2.innerHTML = data[result[1 + count]].name
                modalname3.innerHTML = data[result[2 + count]].name
                modalname4.innerHTML = data[result[3 + count]].name
                modalname5.innerHTML = data[result[4 + count]].name
                modalname6.innerHTML = data[result[5 + count]].name
                modalname7.innerHTML = data[result[6 + count]].name
                modalname8.innerHTML = data[result[7 + count]].name
                type1.innerHTML =`${data[result[0 + count]].type} - ${data[result[0 + count]].breed}`
                type2.innerHTML =`${data[result[1 + count]].type} - ${data[result[1 + count]].breed}`
                type3.innerHTML =`${data[result[2 + count]].type} - ${data[result[2 + count]].breed}`
                type4.innerHTML =`${data[result[3 + count]].type} - ${data[result[3 + count]].breed}`
                type5.innerHTML =`${data[result[4 + count]].type} - ${data[result[4 + count]].breed}`
                type6.innerHTML =`${data[result[5 + count]].type} - ${data[result[5 + count]].breed}`
                type7.innerHTML =`${data[result[6 + count]].type} - ${data[result[6 + count]].breed}`
                type8.innerHTML =`${data[result[7 + count]].type} - ${data[result[7 + count]].breed}`
                description1.innerHTML = data[result[0 + count]].description
                description2.innerHTML = data[result[1 + count]].description
                description3.innerHTML = data[result[2 + count]].description
                description4.innerHTML = data[result[3 + count]].description
                description5.innerHTML = data[result[4 + count]].description
                description6.innerHTML = data[result[5 + count]].description
                description7.innerHTML = data[result[6 + count]].description
                description8.innerHTML = data[result[7 + count]].description
                age1.innerHTML =  data[result[0 + count]].age
                age2.innerHTML =  data[result[1 + count]].age
                age3.innerHTML =  data[result[2 + count]].age
                age4.innerHTML =  data[result[3 + count]].age
                age5.innerHTML =  data[result[4 + count]].age
                age6.innerHTML =  data[result[5 + count]].age
                age7.innerHTML =  data[result[6 + count]].age
                age8.innerHTML =  data[result[7 + count]].age
                inaculations1.innerHTML = data[result[0 + count]].inoculations[0]
                inaculations2.innerHTML = data[result[1 + count]].inoculations[0]
                inaculations3.innerHTML = data[result[2 + count]].inoculations[0]
                inaculations4.innerHTML = data[result[3 + count]].inoculations[0]
                inaculations5.innerHTML = data[result[4 + count]].inoculations[0]
                inaculations6.innerHTML = data[result[5 + count]].inoculations[0]
                inaculations7.innerHTML = data[result[6 + count]].inoculations[0]
                inaculations8.innerHTML = data[result[7 + count]].inoculations[0]
                diseases1.innerHTML = data[result[0 + count]].diseases
                diseases2.innerHTML = data[result[1 + count]].diseases
                diseases3.innerHTML = data[result[2 + count]].diseases
                diseases4.innerHTML = data[result[3 + count]].diseases
                diseases5.innerHTML = data[result[4 + count]].diseases
                diseases6.innerHTML = data[result[5 + count]].diseases
                diseases7.innerHTML = data[result[6 + count]].diseases
                diseases8.innerHTML = data[result[7 + count]].diseases
                parasites1.innerHTML = data[result[0 + count]].parasites
                parasites2.innerHTML = data[result[1 + count]].parasites
                parasites3.innerHTML = data[result[2 + count]].parasites
                parasites4.innerHTML = data[result[3 + count]].parasites
                parasites5.innerHTML = data[result[4 + count]].parasites
                parasites6.innerHTML = data[result[5 + count]].parasites
                parasites7.innerHTML = data[result[6 + count]].parasites
                parasites8.innerHTML = data[result[7 + count]].parasites
                count +=8
                currentPage.innerHTML = page += 1
                console.log(count)
                console.log(count1)
                if(page == 6){
                    disabledButton()
                    disabledlastPage()
                }else{
                    button.addEventListener('click', ImgSet48)
                    lastPage.addEventListener('click', Lastpage)
                }
                EnableButtons()
            }
            function Lastpage(){
                card1img.setAttribute('src',data[result[result.length -1]].img)
                card2img.setAttribute('src',data[result[result.length -2]].img)
                card3img.setAttribute('src',data[result[result.length -3]].img)
                card4img.setAttribute('src',data[result[result.length -4]].img)
                card5img.setAttribute('src',data[result[result.length -5]].img)
                card6img.setAttribute('src',data[result[result.length -6]].img)
                card7img.setAttribute('src',data[result[result.length -7]].img)
                card8img.setAttribute('src',data[result[result.length -8]].img)
                petName1.innerHTML = data[result[result.length -1]].name
                petName2.innerHTML = data[result[result.length -2]].name
                petName3.innerHTML = data[result[result.length -3]].name
                petName4.innerHTML = data[result[result.length -4]].name
                petName5.innerHTML = data[result[result.length -5]].name
                petName6.innerHTML = data[result[result.length -6]].name
                petName7.innerHTML = data[result[result.length -7]].name
                petName8.innerHTML = data[result[result.length -8]].name
                modalimg1.setAttribute('src',data[result[result.length -1]].img)
                modalimg2.setAttribute('src',data[result[result.length -2]].img)
                modalimg3.setAttribute('src',data[result[result.length -3]].img)
                modalimg4.setAttribute('src',data[result[result.length -4]].img)
                modalimg5.setAttribute('src',data[result[result.length -5]].img)
                modalimg6.setAttribute('src',data[result[result.length -6]].img)
                modalimg7.setAttribute('src',data[result[result.length -7]].img)
                modalimg8.setAttribute('src',data[result[result.length -8]].img)
                modalname1.innerHTML = data[result[result.length -1]].name
                modalname2.innerHTML = data[result[result.length -2]].name
                modalname3.innerHTML = data[result[result.length -3]].name
                modalname4.innerHTML = data[result[result.length -4]].name
                modalname5.innerHTML = data[result[result.length -5]].name
                modalname6.innerHTML = data[result[result.length -6]].name
                modalname7.innerHTML = data[result[result.length -7]].name
                modalname8.innerHTML = data[result[result.length -8]].name
                type1.innerHTML =`${data[result[result.length -1]].type} - ${data[result[result.length -1]].breed}`
                type2.innerHTML =`${data[result[result.length -2]].type} - ${data[result[result.length -2]].breed}`
                type3.innerHTML =`${data[result[result.length -3]].type} - ${data[result[result.length -3]].breed}`
                type4.innerHTML =`${data[result[result.length -4]].type} - ${data[result[result.length -4]].breed}`
                type5.innerHTML =`${data[result[result.length -5]].type} - ${data[result[result.length -5]].breed}`
                type6.innerHTML =`${data[result[result.length -6]].type} - ${data[result[result.length -6]].breed}`
                type7.innerHTML =`${data[result[result.length -7]].type} - ${data[result[result.length -7]].breed}`
                type8.innerHTML =`${data[result[result.length -8]].type} - ${data[result[result.length -8]].breed}`
                description1.innerHTML = data[result[result.length -1]].description
                description2.innerHTML = data[result[result.length -2]].description
                description3.innerHTML = data[result[result.length -3]].description
                description4.innerHTML = data[result[result.length -4]].description
                description5.innerHTML = data[result[result.length -5]].description
                description6.innerHTML = data[result[result.length -6]].description
                description7.innerHTML = data[result[result.length -7]].description
                description8.innerHTML = data[result[result.length -8]].description
                age1.innerHTML =  data[result[result.length -1]].age
                age2.innerHTML =  data[result[result.length -2]].age
                age3.innerHTML =  data[result[result.length -3]].age
                age4.innerHTML =  data[result[result.length -4]].age
                age5.innerHTML =  data[result[result.length -5]].age
                age6.innerHTML =  data[result[result.length -6]].age
                age7.innerHTML =  data[result[result.length -7]].age
                age8.innerHTML =  data[result[result.length -8]].age
                inaculations1.innerHTML = data[result[result.length -1]].inoculations[0]
                inaculations2.innerHTML = data[result[result.length -2]].inoculations[0]
                inaculations3.innerHTML = data[result[result.length -3]].inoculations[0]
                inaculations4.innerHTML = data[result[result.length -4]].inoculations[0]
                inaculations5.innerHTML = data[result[result.length -5]].inoculations[0]
                inaculations6.innerHTML = data[result[result.length -6]].inoculations[0]
                inaculations7.innerHTML = data[result[result.length -7]].inoculations[0]
                inaculations8.innerHTML = data[result[result.length -8]].inoculations[0]
                diseases1.innerHTML = data[result[result.length -1]].diseases
                diseases2.innerHTML = data[result[result.length -2]].diseases
                diseases3.innerHTML = data[result[result.length -3]].diseases
                diseases4.innerHTML = data[result[result.length -4]].diseases
                diseases5.innerHTML = data[result[result.length -5]].diseases
                diseases6.innerHTML = data[result[result.length -6]].diseases
                diseases7.innerHTML = data[result[result.length -7]].diseases
                diseases8.innerHTML = data[result[result.length -8]].diseases
                parasites1.innerHTML = data[result[result.length -1]].parasites
                parasites2.innerHTML = data[result[result.length -2]].parasites
                parasites3.innerHTML = data[result[result.length -3]].parasites
                parasites4.innerHTML = data[result[result.length -4]].parasites
                parasites5.innerHTML = data[result[result.length -5]].parasites
                parasites6.innerHTML = data[result[result.length -6]].parasites
                parasites7.innerHTML = data[result[result.length -7]].parasites
                parasites8.innerHTML = data[result[result.length -8]].parasites
                currentPage.innerHTML = page = 6
                count = 48
                disabledlastPage()
                disabledButton()
                EnableButtons()
            }
            function EnableButtons(){
                if(page >= 2){
                    EnablePrePage()
                    EnablefirstPage()
                    PrePage.addEventListener('click', PrevPage)
                    firstPage.addEventListener('click', FirstPage)
                }
            }
            function PrevPage(){
                card1img.setAttribute('src',data[result[count - count1]].img)
                card2img.setAttribute('src',data[result[(count + 1) - count1]].img)
                card3img.setAttribute('src',data[result[(count + 2) - count1]].img)
                card4img.setAttribute('src',data[result[(count + 3) - count1]].img)
                card5img.setAttribute('src',data[result[(count + 4) - count1]].img)
                card6img.setAttribute('src',data[result[(count + 5) - count1]].img)
                card7img.setAttribute('src',data[result[(count + 6) - count1]].img)
                card8img.setAttribute('src',data[result[(count + 7) - count1]].img)
                petName1.innerHTML = data[result[count - count1]].name
                petName2.innerHTML = data[result[(count + 1) - count1]].name
                petName3.innerHTML = data[result[(count + 2) - count1]].name
                petName4.innerHTML = data[result[(count + 3) - count1]].name
                petName5.innerHTML = data[result[(count + 4) - count1]].name
                petName6.innerHTML = data[result[(count + 5) - count1]].name
                petName7.innerHTML = data[result[(count + 6) - count1]].name
                petName8.innerHTML = data[result[(count + 7) - count1]].name
                modalimg1.setAttribute('src',data[result[count - count1]].img)
                modalimg2.setAttribute('src',data[result[(count + 1) - count1]].img)
                modalimg3.setAttribute('src',data[result[(count + 2) - count1]].img)
                modalimg4.setAttribute('src',data[result[(count + 3) - count1]].img)
                modalimg5.setAttribute('src',data[result[(count + 4) - count1]].img)
                modalimg6.setAttribute('src',data[result[(count + 5) - count1]].img)
                modalimg7.setAttribute('src',data[result[(count + 6) - count1]].img)
                modalimg8.setAttribute('src',data[result[(count + 7) - count1]].img)
                modalname1.innerHTML = data[result[count - count1]].name
                modalname2.innerHTML = data[result[(count + 1) - count1]].name
                modalname3.innerHTML = data[result[(count + 2) - count1]].name
                modalname4.innerHTML = data[result[(count + 3) - count1]].name
                modalname5.innerHTML = data[result[(count + 4) - count1]].name
                modalname6.innerHTML = data[result[(count + 5) - count1]].name
                modalname7.innerHTML = data[result[(count + 6) - count1]].name
                modalname8.innerHTML = data[result[(count + 7) - count1]].name
                type1.innerHTML =`${data[result[count - count1]].type} - ${data[result[count - count1]].breed}`
                type2.innerHTML =`${data[result[(count + 1) - count1]].type} - ${data[result[(count + 1) - count1]].breed}`
                type3.innerHTML =`${data[result[(count + 2) - count1]].type} - ${data[result[(count + 2) - count1]].breed}`
                type4.innerHTML =`${data[result[(count + 3) - count1]].type} - ${data[result[(count + 3) - count1]].breed}`
                type5.innerHTML =`${data[result[(count + 4) - count1]].type} - ${data[result[(count + 4) - count1]].breed}`
                type6.innerHTML =`${data[result[(count + 5) - count1]].type} - ${data[result[(count + 5) - count1]].breed}`
                type7.innerHTML =`${data[result[(count + 6) - count1]].type} - ${data[result[(count + 6) - count1]].breed}`
                type8.innerHTML =`${data[result[(count + 7) - count1]].type} - ${data[result[(count + 7) - count1]].breed}`
                description1.innerHTML = data[result[count - count1]].description
                description2.innerHTML = data[result[(count + 1) - count1]].description
                description3.innerHTML = data[result[(count + 2) - count1]].description
                description4.innerHTML = data[result[(count + 3) - count1]].description
                description5.innerHTML = data[result[(count + 4) - count1]].description
                description6.innerHTML = data[result[(count + 5) - count1]].description
                description7.innerHTML = data[result[(count + 6) - count1]].description
                description8.innerHTML = data[result[(count + 7) - count1]].description
                age1.innerHTML =  data[result[count - count1]].age
                age2.innerHTML =  data[result[(count + 1) - count1]].age
                age3.innerHTML =  data[result[(count + 2) - count1]].age
                age4.innerHTML =  data[result[(count + 3) - count1]].age
                age5.innerHTML =  data[result[(count + 4) - count1]].age
                age6.innerHTML =  data[result[(count + 5) - count1]].age
                age7.innerHTML =  data[result[(count + 6) - count1]].age
                age8.innerHTML =  data[result[(count + 7) - count1]].age
                inaculations1.innerHTML = data[result[count - count1]].inoculations[0]
                inaculations2.innerHTML = data[result[(count + 1) - count1]].inoculations[0]
                inaculations3.innerHTML = data[result[(count + 2) - count1]].inoculations[0]
                inaculations4.innerHTML = data[result[(count + 3) - count1]].inoculations[0]
                inaculations5.innerHTML = data[result[(count + 4) - count1]].inoculations[0]
                inaculations6.innerHTML = data[result[(count + 5) - count1]].inoculations[0]
                inaculations7.innerHTML = data[result[(count + 6) - count1]].inoculations[0]
                inaculations8.innerHTML = data[result[(count + 7) - count1]].inoculations[0]
                diseases1.innerHTML = data[result[count - count1]].diseases
                diseases2.innerHTML = data[result[(count + 1) - count1]].diseases
                diseases3.innerHTML = data[result[(count + 2) - count1]].diseases
                diseases4.innerHTML = data[result[(count + 3) - count1]].diseases
                diseases5.innerHTML = data[result[(count + 4) - count1]].diseases
                diseases6.innerHTML = data[result[(count + 5) - count1]].diseases
                diseases7.innerHTML = data[result[(count + 6) - count1]].diseases
                diseases8.innerHTML = data[result[(count + 7) - count1]].diseases
                parasites1.innerHTML = data[result[count - count1]].parasites
                parasites2.innerHTML = data[result[(count + 1) - count1]].parasites
                parasites3.innerHTML = data[result[(count + 2) - count1]].parasites
                parasites4.innerHTML = data[result[(count + 3) - count1]].parasites
                parasites5.innerHTML = data[result[(count + 4) - count1]].parasites
                parasites6.innerHTML = data[result[(count + 5) - count1]].parasites
                parasites7.innerHTML = data[result[(count + 6) - count1]].parasites
                parasites8.innerHTML = data[result[(count + 7) - count1]].parasites
                count -= 8
                currentPage.innerHTML = page -= 1
                if(page != 6){
                    EnableButton()
                    EnablelastPage()
                }
                if(page ==1){
                    disabledPrePage()
                    disabledfirstPage()
                    EnableButton()
                    EnablelastPage()
                }else{
                    PrePage.addEventListener('click', PrevPage)
                    firstPage.addEventListener('click', FirstPage)
                }
            }
            function FirstPage(){
                card1img.setAttribute('src',data[result[0]].img)
                card2img.setAttribute('src',data[result[1]].img)
                card3img.setAttribute('src',data[result[2]].img)
                card4img.setAttribute('src',data[result[3]].img)
                card5img.setAttribute('src',data[result[4]].img)
                card6img.setAttribute('src',data[result[5]].img)
                card7img.setAttribute('src',data[result[6]].img)
                card8img.setAttribute('src',data[result[7]].img)
                petName1.innerHTML = data[result[0]].name
                petName2.innerHTML = data[result[1]].name
                petName3.innerHTML = data[result[2]].name
                petName4.innerHTML = data[result[3]].name
                petName5.innerHTML = data[result[4]].name
                petName6.innerHTML = data[result[5]].name
                petName7.innerHTML = data[result[6]].name
                petName8.innerHTML = data[result[7]].name
                modalimg1.setAttribute('src',data[result[0]].img)
                modalimg2.setAttribute('src',data[result[1]].img)
                modalimg3.setAttribute('src',data[result[2]].img)
                modalimg4.setAttribute('src',data[result[3]].img)
                modalimg5.setAttribute('src',data[result[4]].img)
                modalimg6.setAttribute('src',data[result[5]].img)
                modalimg7.setAttribute('src',data[result[6]].img)
                modalimg8.setAttribute('src',data[result[7]].img)
                modalname1.innerHTML = data[result[0]].name
                modalname2.innerHTML = data[result[1]].name
                modalname3.innerHTML = data[result[2]].name
                modalname4.innerHTML = data[result[3]].name
                modalname5.innerHTML = data[result[4]].name
                modalname6.innerHTML = data[result[5]].name
                modalname7.innerHTML = data[result[6]].name
                modalname8.innerHTML = data[result[7]].name
                type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
                type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
                type4.innerHTML =`${data[result[3]].type} - ${data[result[3]].breed}`
                type5.innerHTML =`${data[result[4]].type} - ${data[result[4]].breed}`
                type6.innerHTML =`${data[result[5]].type} - ${data[result[5]].breed}`
                type7.innerHTML =`${data[result[6]].type} - ${data[result[6]].breed}`
                type8.innerHTML =`${data[result[7]].type} - ${data[result[7]].breed}`
                description1.innerHTML = data[result[0]].description
                description2.innerHTML = data[result[1]].description
                description3.innerHTML = data[result[2]].description
                description4.innerHTML = data[result[3]].description
                description5.innerHTML = data[result[4]].description
                description6.innerHTML = data[result[5]].description
                description7.innerHTML = data[result[6]].description
                description8.innerHTML = data[result[7]].description
                age1.innerHTML =  data[result[0]].age
                age2.innerHTML =  data[result[1]].age
                age3.innerHTML =  data[result[2]].age
                age4.innerHTML =  data[result[3]].age
                age5.innerHTML =  data[result[4]].age
                age6.innerHTML =  data[result[5]].age
                age7.innerHTML =  data[result[6]].age
                age8.innerHTML =  data[result[7]].age
                inaculations1.innerHTML = data[result[0]].inoculations[0]
                inaculations2.innerHTML = data[result[1]].inoculations[0]
                inaculations3.innerHTML = data[result[2]].inoculations[0]
                inaculations4.innerHTML = data[result[3]].inoculations[0]
                inaculations5.innerHTML = data[result[4]].inoculations[0]
                inaculations6.innerHTML = data[result[5]].inoculations[0]
                inaculations7.innerHTML = data[result[6]].inoculations[0]
                inaculations8.innerHTML = data[result[7]].inoculations[0]
                diseases1.innerHTML = data[result[0]].diseases
                diseases2.innerHTML = data[result[1]].diseases
                diseases3.innerHTML = data[result[2]].diseases
                diseases4.innerHTML = data[result[3]].diseases
                diseases5.innerHTML = data[result[4]].diseases
                diseases6.innerHTML = data[result[5]].diseases
                diseases7.innerHTML = data[result[6]].diseases
                diseases8.innerHTML = data[result[7]].diseases
                parasites1.innerHTML = data[result[0]].parasites
                parasites2.innerHTML = data[result[1]].parasites
                parasites3.innerHTML = data[result[2]].parasites
                parasites4.innerHTML = data[result[3]].parasites
                parasites5.innerHTML = data[result[4]].parasites
                parasites6.innerHTML = data[result[5]].parasites
                parasites7.innerHTML = data[result[6]].parasites
                parasites8.innerHTML = data[result[7]].parasites
                currentPage.innerHTML = page = 1
                count = 8
                disabledPrePage()
                disabledfirstPage()
                EnablelastPage()
                EnableButton()
            }
            }
            function disabledlastPage(){
                lastPage.removeEventListener('click', Lastpage)
                lastPage.classList.add('button-disabled')
                lastPage.classList.remove('button')
            }
            function disabledButton(){
                button.removeEventListener('click', ImgSet48)
                button.classList.add('button-disabled')
                button.classList.remove('button')
            }
            function EnablePrePage(){
                PrePage.addEventListener('click', PrevPage)
                PrePage.classList.add('button')
                PrePage.classList.remove('button-disabled')
            }
            function EnablefirstPage(){
                firstPage.addEventListener('click', FirstPage)
                firstPage.classList.add('button')
                firstPage.classList.remove('button-disabled')
            }
            function EnableButton(){
                button.addEventListener('click', ImgSet48)
                button.classList.add('button')
                button.classList.remove('button-disabled')
            }
            function EnablelastPage(){
                lastPage.classList.add('button')
                lastPage.classList.remove('button-disabled')
                lastPage.addEventListener('click', Lastpage)
            }
            function disabledfirstPage(){
                firstPage.removeEventListener('click', FirstPage)
                firstPage.classList.add('button-disabled')
                firstPage.classList.remove('button')
            }
            function disabledPrePage(){
                PrePage.removeEventListener('click', PrevPage)
                PrePage.classList.add('button-disabled')
                PrePage.classList.remove('button')
            }
        
            button.addEventListener('click', ImgSet48)
            lastPage.addEventListener('click', Lastpage)
        }

// ////////////////////////////////////////////////////////////////////////////////////////////
            function PaginationFor6(){
            if(card7.classList.contains('resp') && card8.classList.contains('resp')){
                    let countFor6 = 6
                    let count1For6 = 12
                    let pageFor6 = 1
                    card1img.setAttribute('src',data[result[0]].img)
                    card2img.setAttribute('src',data[result[1]].img)
                    card3img.setAttribute('src',data[result[2]].img)
                    card4img.setAttribute('src',data[result[3]].img)
                    card5img.setAttribute('src',data[result[4]].img)
                    card6img.setAttribute('src',data[result[5]].img)
                    petName1.innerHTML = data[result[0]].name
                    petName2.innerHTML = data[result[1]].name
                    petName3.innerHTML = data[result[2]].name
                    petName4.innerHTML = data[result[3]].name
                    petName5.innerHTML = data[result[4]].name
                    petName6.innerHTML = data[result[5]].name
                    modalimg1.setAttribute('src',data[result[0]].img)
                    modalimg2.setAttribute('src',data[result[1]].img)
                    modalimg3.setAttribute('src',data[result[2]].img)
                    modalimg4.setAttribute('src',data[result[3]].img)
                    modalimg5.setAttribute('src',data[result[4]].img)
                    modalimg6.setAttribute('src',data[result[5]].img)
                    modalname1.innerHTML = data[result[0]].name
                    modalname2.innerHTML = data[result[1]].name
                    modalname3.innerHTML = data[result[2]].name
                    modalname4.innerHTML = data[result[3]].name
                    modalname5.innerHTML = data[result[4]].name
                    modalname6.innerHTML = data[result[5]].name
                    type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                    type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
                    type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
                    type4.innerHTML =`${data[result[3]].type} - ${data[result[3]].breed}`
                    type5.innerHTML =`${data[result[4]].type} - ${data[result[4]].breed}`
                    type6.innerHTML =`${data[result[5]].type} - ${data[result[5]].breed}`
                    description1.innerHTML = data[result[0]].description
                    description2.innerHTML = data[result[1]].description
                    description3.innerHTML = data[result[2]].description
                    description4.innerHTML = data[result[3]].description
                    description5.innerHTML = data[result[4]].description
                    description6.innerHTML = data[result[5]].description
                    age1.innerHTML =  data[result[0]].age
                    age2.innerHTML =  data[result[1]].age
                    age3.innerHTML =  data[result[2]].age
                    age4.innerHTML =  data[result[3]].age
                    age5.innerHTML =  data[result[4]].age
                    age6.innerHTML =  data[result[5]].age
                    inaculations1.innerHTML = data[result[0]].inoculations[0]
                    inaculations2.innerHTML = data[result[1]].inoculations[0]
                    inaculations3.innerHTML = data[result[2]].inoculations[0]
                    inaculations4.innerHTML = data[result[3]].inoculations[0]
                    inaculations5.innerHTML = data[result[4]].inoculations[0]
                    inaculations6.innerHTML = data[result[5]].inoculations[0]
                    diseases1.innerHTML = data[result[0]].diseases
                    diseases2.innerHTML = data[result[1]].diseases
                    diseases3.innerHTML = data[result[2]].diseases
                    diseases4.innerHTML = data[result[3]].diseases
                    diseases5.innerHTML = data[result[4]].diseases
                    diseases6.innerHTML = data[result[5]].diseases
                    parasites1.innerHTML = data[result[0]].parasites
                    parasites2.innerHTML = data[result[1]].parasites
                    parasites3.innerHTML = data[result[2]].parasites
                    parasites4.innerHTML = data[result[3]].parasites
                    parasites5.innerHTML = data[result[4]].parasites
                    parasites6.innerHTML = data[result[5]].parasites
                    function ImgSet48(){
                        card1img.setAttribute('src',data[result[0 + countFor6]].img)
                        card2img.setAttribute('src',data[result[1 + countFor6]].img)
                        card3img.setAttribute('src',data[result[2 + countFor6]].img)
                        card4img.setAttribute('src',data[result[3 + countFor6]].img)
                        card5img.setAttribute('src',data[result[4 + countFor6]].img)
                        card6img.setAttribute('src',data[result[5 + countFor6]].img)
                        petName1.innerHTML = data[result[0 + countFor6]].name
                        petName2.innerHTML = data[result[1 + countFor6]].name
                        petName3.innerHTML = data[result[2 + countFor6]].name
                        petName4.innerHTML = data[result[3 + countFor6]].name
                        petName5.innerHTML = data[result[4 + countFor6]].name
                        petName6.innerHTML = data[result[5 + countFor6]].name
                        modalimg1.setAttribute('src',data[result[0 + countFor6]].img)
                        modalimg2.setAttribute('src',data[result[1 + countFor6]].img)
                        modalimg3.setAttribute('src',data[result[2 + countFor6]].img)
                        modalimg4.setAttribute('src',data[result[3 + countFor6]].img)
                        modalimg5.setAttribute('src',data[result[4 + countFor6]].img)
                        modalimg6.setAttribute('src',data[result[5 + countFor6]].img)
                        modalname1.innerHTML = data[result[0 + countFor6]].name
                        modalname2.innerHTML = data[result[1 + countFor6]].name
                        modalname3.innerHTML = data[result[2 + countFor6]].name
                        modalname4.innerHTML = data[result[3 + countFor6]].name
                        modalname5.innerHTML = data[result[4 + countFor6]].name
                        modalname6.innerHTML = data[result[5 + countFor6]].name
                        type1.innerHTML =`${data[result[0 + countFor6]].type} - ${data[result[0 + countFor6]].breed}`
                        type2.innerHTML =`${data[result[1 + countFor6]].type} - ${data[result[1 + countFor6]].breed}`
                        type3.innerHTML =`${data[result[2 + countFor6]].type} - ${data[result[2 + countFor6]].breed}`
                        type4.innerHTML =`${data[result[3 + countFor6]].type} - ${data[result[3 + countFor6]].breed}`
                        type5.innerHTML =`${data[result[4 + countFor6]].type} - ${data[result[4 + countFor6]].breed}`
                        type6.innerHTML =`${data[result[5 + countFor6]].type} - ${data[result[5 + countFor6]].breed}`
                        description1.innerHTML = data[result[0 + countFor6]].description
                        description2.innerHTML = data[result[1 + countFor6]].description
                        description3.innerHTML = data[result[2 + countFor6]].description
                        description4.innerHTML = data[result[3 + countFor6]].description
                        description5.innerHTML = data[result[4 + countFor6]].description
                        description6.innerHTML = data[result[5 + countFor6]].description
                        age1.innerHTML =  data[result[0 + countFor6]].age
                        age2.innerHTML =  data[result[1 + countFor6]].age
                        age3.innerHTML =  data[result[2 + countFor6]].age
                        age4.innerHTML =  data[result[3 + countFor6]].age
                        age5.innerHTML =  data[result[4 + countFor6]].age
                        age6.innerHTML =  data[result[5 + countFor6]].age
                        inaculations1.innerHTML = data[result[0 + countFor6]].inoculations[0]
                        inaculations2.innerHTML = data[result[1 + countFor6]].inoculations[0]
                        inaculations3.innerHTML = data[result[2 + countFor6]].inoculations[0]
                        inaculations4.innerHTML = data[result[3 + countFor6]].inoculations[0]
                        inaculations5.innerHTML = data[result[4 + countFor6]].inoculations[0]
                        inaculations6.innerHTML = data[result[5 + countFor6]].inoculations[0]
                        diseases1.innerHTML = data[result[0 + countFor6]].diseases
                        diseases2.innerHTML = data[result[1 + countFor6]].diseases
                        diseases3.innerHTML = data[result[2 + countFor6]].diseases
                        diseases4.innerHTML = data[result[3 + countFor6]].diseases
                        diseases5.innerHTML = data[result[4 + countFor6]].diseases
                        diseases6.innerHTML = data[result[5 + countFor6]].diseases
                        parasites1.innerHTML = data[result[0 + countFor6]].parasites
                        parasites2.innerHTML = data[result[1 + countFor6]].parasites
                        parasites3.innerHTML = data[result[2 + countFor6]].parasites
                        parasites4.innerHTML = data[result[3 + countFor6]].parasites
                        parasites5.innerHTML = data[result[4 + countFor6]].parasites
                        parasites6.innerHTML = data[result[5 + countFor6]].parasites
                        countFor6 +=6
                        currentPage.innerHTML = pageFor6 += 1
                        console.log(countFor6)
                        console.log(count1For6)
                        if(pageFor6 == 8){
                            disabledButton()
                            disabledlastPage()
                        }else{
                            button.addEventListener('click', ImgSet48)
                            lastPage.addEventListener('click', Lastpage)
                        }
                        EnableButtons()
                    }
                        function Lastpage(){
                            card1img.setAttribute('src',data[result[result.length -1]].img)
                            card2img.setAttribute('src',data[result[result.length -2]].img)
                            card3img.setAttribute('src',data[result[result.length -3]].img)
                            card4img.setAttribute('src',data[result[result.length -4]].img)
                            card5img.setAttribute('src',data[result[result.length -5]].img)
                            card6img.setAttribute('src',data[result[result.length -6]].img)
                            petName1.innerHTML = data[result[result.length -1]].name
                            petName2.innerHTML = data[result[result.length -2]].name
                            petName3.innerHTML = data[result[result.length -3]].name
                            petName4.innerHTML = data[result[result.length -4]].name
                            petName5.innerHTML = data[result[result.length -5]].name
                            petName6.innerHTML = data[result[result.length -6]].name
                            modalimg1.setAttribute('src',data[result[result.length -1]].img)
                            modalimg2.setAttribute('src',data[result[result.length -2]].img)
                            modalimg3.setAttribute('src',data[result[result.length -3]].img)
                            modalimg4.setAttribute('src',data[result[result.length -4]].img)
                            modalimg5.setAttribute('src',data[result[result.length -5]].img)
                            modalimg6.setAttribute('src',data[result[result.length -6]].img)
                            modalname1.innerHTML = data[result[result.length -1]].name
                            modalname2.innerHTML = data[result[result.length -2]].name
                            modalname3.innerHTML = data[result[result.length -3]].name
                            modalname4.innerHTML = data[result[result.length -4]].name
                            modalname5.innerHTML = data[result[result.length -5]].name
                            modalname6.innerHTML = data[result[result.length -6]].name
                            type1.innerHTML =`${data[result[result.length -1]].type} - ${data[result[result.length -1]].breed}`
                            type2.innerHTML =`${data[result[result.length -2]].type} - ${data[result[result.length -2]].breed}`
                            type3.innerHTML =`${data[result[result.length -3]].type} - ${data[result[result.length -3]].breed}`
                            type4.innerHTML =`${data[result[result.length -4]].type} - ${data[result[result.length -4]].breed}`
                            type5.innerHTML =`${data[result[result.length -5]].type} - ${data[result[result.length -5]].breed}`
                            type6.innerHTML =`${data[result[result.length -6]].type} - ${data[result[result.length -6]].breed}`
                            description1.innerHTML = data[result[result.length -1]].description
                            description2.innerHTML = data[result[result.length -2]].description
                            description3.innerHTML = data[result[result.length -3]].description
                            description4.innerHTML = data[result[result.length -4]].description
                            description5.innerHTML = data[result[result.length -5]].description
                            description6.innerHTML = data[result[result.length -6]].description
                            age1.innerHTML =  data[result[result.length -1]].age
                            age2.innerHTML =  data[result[result.length -2]].age
                            age3.innerHTML =  data[result[result.length -3]].age
                            age4.innerHTML =  data[result[result.length -4]].age
                            age5.innerHTML =  data[result[result.length -5]].age
                            age6.innerHTML =  data[result[result.length -6]].age
                            inaculations1.innerHTML = data[result[result.length -1]].inoculations[0]
                            inaculations2.innerHTML = data[result[result.length -2]].inoculations[0]
                            inaculations3.innerHTML = data[result[result.length -3]].inoculations[0]
                            inaculations4.innerHTML = data[result[result.length -4]].inoculations[0]
                            inaculations5.innerHTML = data[result[result.length -5]].inoculations[0]
                            inaculations6.innerHTML = data[result[result.length -6]].inoculations[0]
                            diseases1.innerHTML = data[result[result.length -1]].diseases
                            diseases2.innerHTML = data[result[result.length -2]].diseases
                            diseases3.innerHTML = data[result[result.length -3]].diseases
                            diseases4.innerHTML = data[result[result.length -4]].diseases
                            diseases5.innerHTML = data[result[result.length -5]].diseases
                            diseases6.innerHTML = data[result[result.length -6]].diseases
                            parasites1.innerHTML = data[result[result.length -1]].parasites
                            parasites2.innerHTML = data[result[result.length -2]].parasites
                            parasites3.innerHTML = data[result[result.length -3]].parasites
                            parasites4.innerHTML = data[result[result.length -4]].parasites
                            parasites5.innerHTML = data[result[result.length -5]].parasites
                            parasites6.innerHTML = data[result[result.length -6]].parasites
                            currentPage.innerHTML = pageFor6 = 8
                            countFor6 = 48
                            disabledlastPage()
                            disabledButton()
                            EnableButtons()
                        }
                        function EnableButtons(){
                            if(pageFor6 >= 2){
                                EnablePrePage()
                                EnablefirstPage()
                                PrePage.addEventListener('click', PrevPage)
                                firstPage.addEventListener('click', FirstPage)
                            }
                        }
                        function PrevPage(){
                            card1img.setAttribute('src',data[result[countFor6 - count1For6]].img)
                            card2img.setAttribute('src',data[result[(countFor6 + 1) - count1For6]].img)
                            card3img.setAttribute('src',data[result[(countFor6 + 2) - count1For6]].img)
                            card4img.setAttribute('src',data[result[(countFor6 + 3) - count1For6]].img)
                            card5img.setAttribute('src',data[result[(countFor6 + 4) - count1For6]].img)
                            card6img.setAttribute('src',data[result[(countFor6 + 5) - count1For6]].img)
                            petName1.innerHTML = data[result[countFor6 - count1For6]].name
                            petName2.innerHTML = data[result[(countFor6 + 1) - count1For6]].name
                            petName3.innerHTML = data[result[(countFor6 + 2) - count1For6]].name
                            petName4.innerHTML = data[result[(countFor6 + 3) - count1For6]].name
                            petName5.innerHTML = data[result[(countFor6 + 4) - count1For6]].name
                            petName6.innerHTML = data[result[(countFor6 + 5) - count1For6]].name
                            modalimg1.setAttribute('src',data[result[countFor6 - count1For6]].img)
                            modalimg2.setAttribute('src',data[result[(countFor6 + 1) - count1For6]].img)
                            modalimg3.setAttribute('src',data[result[(countFor6 + 2) - count1For6]].img)
                            modalimg4.setAttribute('src',data[result[(countFor6 + 3) - count1For6]].img)
                            modalimg5.setAttribute('src',data[result[(countFor6 + 4) - count1For6]].img)
                            modalimg6.setAttribute('src',data[result[(countFor6 + 5) - count1For6]].img)
                            modalname1.innerHTML = data[result[countFor6 - count1For6]].name
                            modalname2.innerHTML = data[result[(countFor6 + 1) - count1For6]].name
                            modalname3.innerHTML = data[result[(countFor6 + 2) - count1For6]].name
                            modalname4.innerHTML = data[result[(countFor6 + 3) - count1For6]].name
                            modalname5.innerHTML = data[result[(countFor6 + 4) - count1For6]].name
                            modalname6.innerHTML = data[result[(countFor6 + 5) - count1For6]].name
                            type1.innerHTML =`${data[result[countFor6 - count1For6]].type} - ${data[result[countFor6 - count1For6]].breed}`
                            type2.innerHTML =`${data[result[(countFor6 + 1) - count1For6]].type} - ${data[result[(countFor6 + 1) - count1For6]].breed}`
                            type3.innerHTML =`${data[result[(countFor6 + 2) - count1For6]].type} - ${data[result[(countFor6 + 2) - count1For6]].breed}`
                            type4.innerHTML =`${data[result[(countFor6 + 3) - count1For6]].type} - ${data[result[(countFor6 + 3) - count1For6]].breed}`
                            type5.innerHTML =`${data[result[(countFor6 + 4) - count1For6]].type} - ${data[result[(countFor6 + 4) - count1For6]].breed}`
                            type6.innerHTML =`${data[result[(countFor6 + 5) - count1For6]].type} - ${data[result[(countFor6 + 5) - count1For6]].breed}`
                            description1.innerHTML = data[result[countFor6 - count1For6]].description
                            description2.innerHTML = data[result[(countFor6 + 1) - count1For6]].description
                            description3.innerHTML = data[result[(countFor6 + 2) - count1For6]].description
                            description4.innerHTML = data[result[(countFor6 + 3) - count1For6]].description
                            description5.innerHTML = data[result[(countFor6 + 4) - count1For6]].description
                            description6.innerHTML = data[result[(countFor6 + 5) - count1For6]].description
                            age1.innerHTML =  data[result[countFor6 - count1For6]].age
                            age2.innerHTML =  data[result[(countFor6 + 1) - count1For6]].age
                            age3.innerHTML =  data[result[(countFor6 + 2) - count1For6]].age
                            age4.innerHTML =  data[result[(countFor6 + 3) - count1For6]].age
                            age5.innerHTML =  data[result[(countFor6 + 4) - count1For6]].age
                            age6.innerHTML =  data[result[(countFor6 + 5) - count1For6]].age
                            inaculations1.innerHTML = data[result[countFor6 - count1For6]].inoculations[0]
                            inaculations2.innerHTML = data[result[(countFor6 + 1) - count1For6]].inoculations[0]
                            inaculations3.innerHTML = data[result[(countFor6 + 2) - count1For6]].inoculations[0]
                            inaculations4.innerHTML = data[result[(countFor6 + 3) - count1For6]].inoculations[0]
                            inaculations5.innerHTML = data[result[(countFor6 + 4) - count1For6]].inoculations[0]
                            inaculations6.innerHTML = data[result[(countFor6 + 5) - count1For6]].inoculations[0]
                            diseases1.innerHTML = data[result[countFor6 - count1For6]].diseases
                            diseases2.innerHTML = data[result[(countFor6 + 1) - count1For6]].diseases
                            diseases3.innerHTML = data[result[(countFor6 + 2) - count1For6]].diseases
                            diseases4.innerHTML = data[result[(countFor6 + 3) - count1For6]].diseases
                            diseases5.innerHTML = data[result[(countFor6 + 4) - count1For6]].diseases
                            diseases6.innerHTML = data[result[(countFor6 + 5) - count1For6]].diseases
                            parasites1.innerHTML = data[result[countFor6 - count1For6]].parasites
                            parasites2.innerHTML = data[result[(countFor6 + 1) - count1For6]].parasites
                            parasites3.innerHTML = data[result[(countFor6 + 2) - count1For6]].parasites
                            parasites4.innerHTML = data[result[(countFor6 + 3) - count1For6]].parasites
                            parasites5.innerHTML = data[result[(countFor6 + 4) - count1For6]].parasites
                            parasites6.innerHTML = data[result[(countFor6 + 5) - count1For6]].parasites
                            countFor6 -= 6
                            currentPage.innerHTML = pageFor6 -= 1
                            if(pageFor6 != 8){
                                EnableButton()
                                EnablelastPage()
                            }
                            if(pageFor6 ==1){
                                disabledPrePage()
                                disabledfirstPage()
                                EnableButton()
                                EnablelastPage()
                            }else{
                                PrePage.addEventListener('click', PrevPage)
                                firstPage.addEventListener('click', FirstPage)
                            }
                        }
                        function FirstPage(){
                            card1img.setAttribute('src',data[result[0]].img)
                            card2img.setAttribute('src',data[result[1]].img)
                            card3img.setAttribute('src',data[result[2]].img)
                            card4img.setAttribute('src',data[result[3]].img)
                            card5img.setAttribute('src',data[result[4]].img)
                            card6img.setAttribute('src',data[result[5]].img)
                            petName1.innerHTML = data[result[0]].name
                            petName2.innerHTML = data[result[1]].name
                            petName3.innerHTML = data[result[2]].name
                            petName4.innerHTML = data[result[3]].name
                            petName5.innerHTML = data[result[4]].name
                            petName6.innerHTML = data[result[5]].name
                            modalimg1.setAttribute('src',data[result[0]].img)
                            modalimg2.setAttribute('src',data[result[1]].img)
                            modalimg3.setAttribute('src',data[result[2]].img)
                            modalimg4.setAttribute('src',data[result[3]].img)
                            modalimg5.setAttribute('src',data[result[4]].img)
                            modalimg6.setAttribute('src',data[result[5]].img)
                            modalname1.innerHTML = data[result[0]].name
                            modalname2.innerHTML = data[result[1]].name
                            modalname3.innerHTML = data[result[2]].name
                            modalname4.innerHTML = data[result[3]].name
                            modalname5.innerHTML = data[result[4]].name
                            modalname6.innerHTML = data[result[5]].name
                            type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                            type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
                            type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
                            type4.innerHTML =`${data[result[3]].type} - ${data[result[3]].breed}`
                            type5.innerHTML =`${data[result[4]].type} - ${data[result[4]].breed}`
                            type6.innerHTML =`${data[result[5]].type} - ${data[result[5]].breed}`
                            description1.innerHTML = data[result[0]].description
                            description2.innerHTML = data[result[1]].description
                            description3.innerHTML = data[result[2]].description
                            description4.innerHTML = data[result[3]].description
                            description5.innerHTML = data[result[4]].description
                            description6.innerHTML = data[result[5]].description
                            age1.innerHTML =  data[result[0]].age
                            age2.innerHTML =  data[result[1]].age
                            age3.innerHTML =  data[result[2]].age
                            age4.innerHTML =  data[result[3]].age
                            age5.innerHTML =  data[result[4]].age
                            age6.innerHTML =  data[result[5]].age
                            inaculations1.innerHTML = data[result[0]].inoculations[0]
                            inaculations2.innerHTML = data[result[1]].inoculations[0]
                            inaculations3.innerHTML = data[result[2]].inoculations[0]
                            inaculations4.innerHTML = data[result[3]].inoculations[0]
                            inaculations5.innerHTML = data[result[4]].inoculations[0]
                            inaculations6.innerHTML = data[result[5]].inoculations[0]
                            diseases1.innerHTML = data[result[0]].diseases
                            diseases2.innerHTML = data[result[1]].diseases
                            diseases3.innerHTML = data[result[2]].diseases
                            diseases4.innerHTML = data[result[3]].diseases
                            diseases5.innerHTML = data[result[4]].diseases
                            diseases6.innerHTML = data[result[5]].diseases
                            parasites1.innerHTML = data[result[0]].parasites
                            parasites2.innerHTML = data[result[1]].parasites
                            parasites3.innerHTML = data[result[2]].parasites
                            parasites4.innerHTML = data[result[3]].parasites
                            parasites5.innerHTML = data[result[4]].parasites
                            parasites6.innerHTML = data[result[5]].parasites
                            currentPage.innerHTML = pageFor6 = 1
                            countFor6 = 6
                            disabledPrePage()
                            disabledfirstPage()
                            EnablelastPage()
                            EnableButton()
                        }
                        console.log(result)
                        function disabledlastPage(){
                            lastPage.removeEventListener('click', Lastpage)
                            lastPage.classList.add('button-disabled')
                            lastPage.classList.remove('button')
                        }
                        function disabledButton(){
                            button.removeEventListener('click', ImgSet48)
                            button.classList.add('button-disabled')
                            button.classList.remove('button')
                        }
                        function EnablePrePage(){
                            PrePage.classList.add('button')
                            PrePage.classList.remove('button-disabled')
                        }
                        function EnablefirstPage(){
                            firstPage.classList.add('button')
                            firstPage.classList.remove('button-disabled')
                        }
                        function EnableButton(){
                            button.classList.add('button')
                            button.classList.remove('button-disabled')
                        }
                        function EnablelastPage(){
                            lastPage.classList.add('button')
                            lastPage.classList.remove('button-disabled')
                            lastPage.addEventListener('click', Lastpage)
                        }
                        function disabledfirstPage(){
                            firstPage.removeEventListener('click', FirstPage)
                            firstPage.classList.add('button-disabled')
                            firstPage.classList.remove('button')
                        }
                        function disabledPrePage(){
                            PrePage.removeEventListener('click', PrevPage)
                            PrePage.classList.add('button-disabled')
                            PrePage.classList.remove('button')
                        }
                    
                        button.addEventListener('click', ImgSet48)
                        lastPage.addEventListener('click', Lastpage)
                        }
                    }
//////////////////////////////////////////////////////////////////////////////////
function PaginationFor3(){
    if(card4.classList.contains('resp')){
            let countFor3 = 3
            let count1For3 = 6
            let pageFor3 = 1
            card1img.setAttribute('src',data[result[0]].img)
            card2img.setAttribute('src',data[result[1]].img)
            card3img.setAttribute('src',data[result[2]].img)
            petName1.innerHTML = data[result[0]].name
            petName2.innerHTML = data[result[1]].name
            petName3.innerHTML = data[result[2]].name
            modalimg1.setAttribute('src',data[result[0]].img)
            modalimg2.setAttribute('src',data[result[1]].img)
            modalimg3.setAttribute('src',data[result[2]].img)
            modalname1.innerHTML = data[result[0]].name
            modalname2.innerHTML = data[result[1]].name
            modalname3.innerHTML = data[result[2]].name
            type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
            type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
            type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
            description1.innerHTML = data[result[0]].description
            description2.innerHTML = data[result[1]].description
            description3.innerHTML = data[result[2]].description
            age1.innerHTML =  data[result[0]].age
            age2.innerHTML =  data[result[1]].age
            age3.innerHTML =  data[result[2]].age
            inaculations1.innerHTML = data[result[0]].inoculations[0]
            inaculations2.innerHTML = data[result[1]].inoculations[0]
            inaculations3.innerHTML = data[result[2]].inoculations[0]
            diseases1.innerHTML = data[result[0]].diseases
            diseases2.innerHTML = data[result[1]].diseases
            diseases3.innerHTML = data[result[2]].diseases
            diseases4.innerHTML = data[result[3]].diseases
            diseases5.innerHTML = data[result[4]].diseases
            diseases6.innerHTML = data[result[5]].diseases
            parasites1.innerHTML = data[result[0]].parasites
            parasites2.innerHTML = data[result[1]].parasites
            parasites3.innerHTML = data[result[2]].parasites
            function ImgSet48(){
                card1img.setAttribute('src',data[result[0 + countFor3]].img)
                card2img.setAttribute('src',data[result[1 + countFor3]].img)
                card3img.setAttribute('src',data[result[2 + countFor3]].img)
                petName1.innerHTML = data[result[0 + countFor3]].name
                petName2.innerHTML = data[result[1 + countFor3]].name
                petName3.innerHTML = data[result[2 + countFor3]].name
                modalimg1.setAttribute('src',data[result[0 + countFor3]].img)
                modalimg2.setAttribute('src',data[result[1 + countFor3]].img)
                modalimg3.setAttribute('src',data[result[2 + countFor3]].img)
                modalname1.innerHTML = data[result[0 + countFor3]].name
                modalname2.innerHTML = data[result[1 + countFor3]].name
                modalname3.innerHTML = data[result[2 + countFor3]].name
                type1.innerHTML =`${data[result[0 + countFor3]].type} - ${data[result[0 + countFor3]].breed}`
                type2.innerHTML =`${data[result[1 + countFor3]].type} - ${data[result[1 + countFor3]].breed}`
                type3.innerHTML =`${data[result[2 + countFor3]].type} - ${data[result[2 + countFor3]].breed}`
                description1.innerHTML = data[result[0 + countFor3]].description
                description2.innerHTML = data[result[1 + countFor3]].description
                description3.innerHTML = data[result[2 + countFor3]].description
                age1.innerHTML =  data[result[0 + countFor3]].age
                age2.innerHTML =  data[result[1 + countFor3]].age
                age3.innerHTML =  data[result[2 + countFor3]].age
                inaculations1.innerHTML = data[result[0 + countFor3]].inoculations[0]
                inaculations2.innerHTML = data[result[1 + countFor3]].inoculations[0]
                inaculations3.innerHTML = data[result[2 + countFor3]].inoculations[0]
                diseases1.innerHTML = data[result[0 + countFor3]].diseases
                diseases2.innerHTML = data[result[1 + countFor3]].diseases
                diseases3.innerHTML = data[result[2 + countFor3]].diseases
                parasites1.innerHTML = data[result[0 + countFor3]].parasites
                parasites2.innerHTML = data[result[1 + countFor3]].parasites
                parasites3.innerHTML = data[result[2 + countFor3]].parasites
                countFor3 += 3
                currentPage.innerHTML = pageFor3 += 1
                console.log(countFor3)
                console.log(count1For3)
                if(pageFor3 == 16){
                    disabledButton()
                    disabledlastPage()
                }else{
                    button.addEventListener('click', ImgSet48)
                    lastPage.addEventListener('click', Lastpage)
                }
                EnableButtons()
            }
                function Lastpage(){
                    card1img.setAttribute('src',data[result[result.length -1]].img)
                    card2img.setAttribute('src',data[result[result.length -2]].img)
                    card3img.setAttribute('src',data[result[result.length -3]].img)
                    petName1.innerHTML = data[result[result.length -1]].name
                    petName2.innerHTML = data[result[result.length -2]].name
                    petName3.innerHTML = data[result[result.length -3]].name
                    modalimg1.setAttribute('src',data[result[result.length -1]].img)
                    modalimg2.setAttribute('src',data[result[result.length -2]].img)
                    modalimg3.setAttribute('src',data[result[result.length -3]].img)
                    modalname1.innerHTML = data[result[result.length -1]].name
                    modalname2.innerHTML = data[result[result.length -2]].name
                    modalname3.innerHTML = data[result[result.length -3]].name
                    type1.innerHTML =`${data[result[result.length -1]].type} - ${data[result[result.length -1]].breed}`
                    type2.innerHTML =`${data[result[result.length -2]].type} - ${data[result[result.length -2]].breed}`
                    type3.innerHTML =`${data[result[result.length -3]].type} - ${data[result[result.length -3]].breed}`
                    description1.innerHTML = data[result[result.length -1]].description
                    description2.innerHTML = data[result[result.length -2]].description
                    description3.innerHTML = data[result[result.length -3]].description
                    age1.innerHTML =  data[result[result.length -1]].age
                    age2.innerHTML =  data[result[result.length -2]].age
                    age3.innerHTML =  data[result[result.length -3]].age
                    inaculations1.innerHTML = data[result[result.length -1]].inoculations[0]
                    inaculations2.innerHTML = data[result[result.length -2]].inoculations[0]
                    inaculations3.innerHTML = data[result[result.length -3]].inoculations[0]
                    diseases1.innerHTML = data[result[result.length -1]].diseases
                    diseases2.innerHTML = data[result[result.length -2]].diseases
                    diseases3.innerHTML = data[result[result.length -3]].diseases
                    parasites1.innerHTML = data[result[result.length -1]].parasites
                    parasites2.innerHTML = data[result[result.length -2]].parasites
                    parasites3.innerHTML = data[result[result.length -3]].parasites
                    currentPage.innerHTML = pageFor3 = 16
                    countFor3 = 48
                    disabledlastPage()
                    disabledButton()
                    EnableButtons()
                }
                function EnableButtons(){
                    if(pageFor3 >= 2){
                        EnablePrePage()
                        EnablefirstPage()
                        PrePage.addEventListener('click', PrevPage)
                        firstPage.addEventListener('click', FirstPage)
                    }
                }
                function PrevPage(){
                    card1img.setAttribute('src',data[result[countFor3 - count1For3]].img)
                    card2img.setAttribute('src',data[result[(countFor3 + 1) - count1For3]].img)
                    card3img.setAttribute('src',data[result[(countFor3 + 2) - count1For3]].img)
                    petName1.innerHTML = data[result[countFor3 - count1For3]].name
                    petName2.innerHTML = data[result[(countFor3 + 1) - count1For3]].name
                    petName3.innerHTML = data[result[(countFor3 + 2) - count1For3]].name
                    modalimg1.setAttribute('src',data[result[countFor3 - count1For3]].img)
                    modalimg2.setAttribute('src',data[result[(countFor3 + 1) - count1For3]].img)
                    modalimg3.setAttribute('src',data[result[(countFor3 + 2) - count1For3]].img)
                    modalname1.innerHTML = data[result[countFor3 - count1For3]].name
                    modalname2.innerHTML = data[result[(countFor3 + 1) - count1For3]].name
                    modalname3.innerHTML = data[result[(countFor3 + 2) - count1For3]].name
                    type1.innerHTML =`${data[result[countFor3 - count1For3]].type} - ${data[result[countFor3 - count1For3]].breed}`
                    type2.innerHTML =`${data[result[(countFor3 + 1) - count1For3]].type} - ${data[result[(countFor3 + 1) - count1For3]].breed}`
                    type3.innerHTML =`${data[result[(countFor3 + 2) - count1For3]].type} - ${data[result[(countFor3 + 2) - count1For3]].breed}`
                    description1.innerHTML = data[result[countFor3 - count1For3]].description
                    description2.innerHTML = data[result[(countFor3 + 1) - count1For3]].description
                    description3.innerHTML = data[result[(countFor3 + 2) - count1For3]].description
                    age1.innerHTML =  data[result[countFor3 - count1For3]].age
                    age2.innerHTML =  data[result[(countFor3 + 1) - count1For3]].age
                    age3.innerHTML =  data[result[(countFor3 + 2) - count1For3]].age
                    inaculations1.innerHTML = data[result[countFor3 - count1For3]].inoculations[0]
                    inaculations2.innerHTML = data[result[(countFor3 + 1) - count1For3]].inoculations[0]
                    inaculations3.innerHTML = data[result[(countFor3 + 2) - count1For3]].inoculations[0]
                    diseases1.innerHTML = data[result[countFor3 - count1For3]].diseases
                    diseases2.innerHTML = data[result[(countFor3 + 1) - count1For3]].diseases
                    diseases3.innerHTML = data[result[(countFor3 + 2) - count1For3]].diseases
                    parasites1.innerHTML = data[result[countFor3 - count1For3]].parasites
                    parasites2.innerHTML = data[result[(countFor3 + 1) - count1For3]].parasites
                    parasites3.innerHTML = data[result[(countFor3 + 2) - count1For3]].parasites
                    countFor3 -= 3
                    currentPage.innerHTML = pageFor3 -= 1
                    if(pageFor3 != 16){
                        EnableButton()
                        EnablelastPage()
                    }
                    if(pageFor3 ==1){
                        disabledPrePage()
                        disabledfirstPage()
                        EnableButton()
                        EnablelastPage()
                    }else{
                        PrePage.addEventListener('click', PrevPage)
                        firstPage.addEventListener('click', FirstPage)
                    }
                }
                function FirstPage(){
                    card1img.setAttribute('src',data[result[0]].img)
                    card2img.setAttribute('src',data[result[1]].img)
                    card3img.setAttribute('src',data[result[2]].img)
                    petName1.innerHTML = data[result[0]].name
                    petName2.innerHTML = data[result[1]].name
                    petName3.innerHTML = data[result[2]].name
                    modalimg1.setAttribute('src',data[result[0]].img)
                    modalimg2.setAttribute('src',data[result[1]].img)
                    modalimg3.setAttribute('src',data[result[2]].img)
                    modalname1.innerHTML = data[result[0]].name
                    modalname2.innerHTML = data[result[1]].name
                    modalname3.innerHTML = data[result[2]].name
                    type1.innerHTML =`${data[result[0]].type} - ${data[result[0]].breed}`
                    type2.innerHTML =`${data[result[1]].type} - ${data[result[1]].breed}`
                    type3.innerHTML =`${data[result[2]].type} - ${data[result[2]].breed}`
                    description1.innerHTML = data[result[0]].description
                    description2.innerHTML = data[result[1]].description
                    description3.innerHTML = data[result[2]].description
                    age1.innerHTML =  data[result[0]].age
                    age2.innerHTML =  data[result[1]].age
                    age3.innerHTML =  data[result[2]].age
                    inaculations1.innerHTML = data[result[0]].inoculations[0]
                    inaculations2.innerHTML = data[result[1]].inoculations[0]
                    inaculations3.innerHTML = data[result[2]].inoculations[0]
                    diseases1.innerHTML = data[result[0]].diseases
                    diseases2.innerHTML = data[result[1]].diseases
                    diseases3.innerHTML = data[result[2]].diseases
                    diseases4.innerHTML = data[result[3]].diseases
                    diseases5.innerHTML = data[result[4]].diseases
                    diseases6.innerHTML = data[result[5]].diseases
                    parasites1.innerHTML = data[result[0]].parasites
                    parasites2.innerHTML = data[result[1]].parasites
                    parasites3.innerHTML = data[result[2]].parasites
                    currentPage.innerHTML = pageFor3 = 1
                    countFor3 = 3
                    disabledPrePage()
                    disabledfirstPage()
                    EnablelastPage()
                    EnableButton()
                }
                console.log(result)
                function disabledlastPage(){
                    lastPage.removeEventListener('click', Lastpage)
                    lastPage.classList.add('button-disabled')
                    lastPage.classList.remove('button')
                }
                function disabledButton(){
                    button.removeEventListener('click', ImgSet48)
                    button.classList.add('button-disabled')
                    button.classList.remove('button')
                }
                function EnablePrePage(){
                    PrePage.classList.add('button')
                    PrePage.classList.remove('button-disabled')
                }
                function EnablefirstPage(){
                    firstPage.classList.add('button')
                    firstPage.classList.remove('button-disabled')
                }
                function EnableButton(){
                    button.classList.add('button')
                    button.classList.remove('button-disabled')
                }
                function EnablelastPage(){
                    lastPage.classList.add('button')
                    lastPage.classList.remove('button-disabled')
                    lastPage.addEventListener('click', Lastpage)
                }
                function disabledfirstPage(){
                    firstPage.removeEventListener('click', FirstPage)
                    firstPage.classList.add('button-disabled')
                    firstPage.classList.remove('button')
                }
                function disabledPrePage(){
                    PrePage.removeEventListener('click', PrevPage)
                    PrePage.classList.add('button-disabled')
                    PrePage.classList.remove('button')
                }
            
                button.addEventListener('click', ImgSet48)
                lastPage.addEventListener('click', Lastpage)
                }
            }






                    PaginationFor8(x)
                    PaginationFor6()
                    PaginationFor3()


            button1.addEventListener('click',OpenPopup1)
            button2.addEventListener('click',OpenPopup2)
            button3.addEventListener('click',OpenPopup3)
            button4.addEventListener('click',OpenPopup4)
            button5.addEventListener('click',OpenPopup5)
            button6.addEventListener('click',OpenPopup6)
            button7.addEventListener('click',OpenPopup7)
            button8.addEventListener('click',OpenPopup8)
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
              function OpenPopup4(){
                disableScroll()
                popup1window.classList.remove('closepopup')
                popup1window.classList.add('popup')
                console.log('good')
                card1.append(popup1window)
                popupinfo.append(modalimg4)
                modalinfo.append(modalname4)
                modalinfo.append(type4)
                modalinfo.append(description4)
                modalinfo.append(age4)
                age4.prepend(age)
                modalinfo.append(inaculations4)
                inaculations4.prepend(inaculations)
                modalinfo.append(diseases4)
                diseases4.prepend(diseases)
                modalinfo.append(parasites4)
                parasites4.prepend(parasites)
              }
              function OpenPopup5(){
                disableScroll()
                popup1window.classList.remove('closepopup')
                popup1window.classList.add('popup')
                console.log('good')
                card1.append(popup1window)
                popupinfo.append(modalimg5)
                modalinfo.append(modalname5)
                modalinfo.append(type5)
                modalinfo.append(description5)
                modalinfo.append(age5)
                age5.prepend(age)
                modalinfo.append(inaculations5)
                inaculations5.prepend(inaculations)
                modalinfo.append(diseases5)
                diseases5.prepend(diseases)
                modalinfo.append(parasites5)
                parasites5.prepend(parasites)
              }
              function OpenPopup6(){
                disableScroll()
                popup1window.classList.remove('closepopup')
                popup1window.classList.add('popup')
                console.log('good')
                card1.append(popup1window)
                popupinfo.append(modalimg6)
                modalinfo.append(modalname6)
                modalinfo.append(type6)
                modalinfo.append(description6)
                modalinfo.append(age6)
                age6.prepend(age)
                modalinfo.append(inaculations6)
                inaculations6.prepend(inaculations)
                modalinfo.append(diseases6)
                diseases6.prepend(diseases)
                modalinfo.append(parasites6)
                parasites6.prepend(parasites)
              }
              function OpenPopup7(){
                disableScroll()
                popup1window.classList.remove('closepopup')
                popup1window.classList.add('popup')
                console.log('good')
                card1.append(popup1window)
                popupinfo.append(modalimg7)
                modalinfo.append(modalname7)
                modalinfo.append(type7)
                modalinfo.append(description7)
                modalinfo.append(age7)
                age7.prepend(age)
                modalinfo.append(inaculations7)
                inaculations7.prepend(inaculations)
                modalinfo.append(diseases7)
                diseases7.prepend(diseases)
                modalinfo.append(parasites7)
                parasites7.prepend(parasites)
              }
              function OpenPopup8(){
                disableScroll()
                popup1window.classList.remove('closepopup')
                popup1window.classList.add('popup')
                console.log('good')
                card1.append(popup1window)
                popupinfo.append(modalimg8)
                modalinfo.append(modalname8)
                modalinfo.append(type8)
                modalinfo.append(description8)
                modalinfo.append(age8)
                age8.prepend(age)
                modalinfo.append(inaculations8)
                inaculations8.prepend(inaculations)
                modalinfo.append(diseases8)
                diseases8.prepend(diseases)
                modalinfo.append(parasites8)
                parasites8.prepend(parasites)
              }
              popup1window.addEventListener('click',ClosePopup1)
            function ClosePopup1(){
              enableScroll()
              popup1window.classList.remove('popup')
              popup1window.classList.add('closepopup')
              modalimg1.remove()
              modalimg2.remove()
              modalimg3.remove()
              modalimg4.remove()
              modalimg5.remove()
              modalimg6.remove()
              modalimg7.remove()
              modalimg8.remove()
              modalname1.remove()
              modalname2.remove()
              modalname3.remove()
              modalname4.remove()
              modalname5.remove()
              modalname6.remove()
              modalname7.remove()
              modalname8.remove()
              type1.remove()
              type2.remove()
              type3.remove()
              type4.remove()
              type5.remove()
              type6.remove()
              type7.remove()
              type8.remove()
              description1.remove()
              description2.remove()
              description3.remove()
              description4.remove()
              description5.remove()
              description6.remove()
              description7.remove()
              description8.remove()
              age1.remove()
              age2.remove()
              age3.remove()
              age4.remove()
              age5.remove()
              age6.remove()
              age7.remove()
              age8.remove()
              inaculations1.remove()
              inaculations2.remove()
              inaculations3.remove()
              inaculations4.remove()
              inaculations5.remove()
              inaculations6.remove()
              inaculations7.remove()
              inaculations8.remove()
              diseases1.remove()
              diseases2.remove()
              diseases3.remove()
              diseases4.remove()
              diseases5.remove()
              diseases6.remove()
              diseases7.remove()
              diseases8.remove()
              parasites1.remove()
              parasites2.remove()
              parasites3.remove()
              parasites4.remove()
              parasites5.remove()
              parasites6.remove()
              parasites7.remove()
              parasites8.remove()
            }
            
        })
        function TowCard(x) {
            if (x.matches) {
              card7.classList.add('resp')
              card8.classList.add('resp')
            } else {
                card7.classList.remove('resp')
                card8.classList.remove('resp')
            }
          }
          function OneCard(x2){
            if (x2.matches) {
                card6.classList.add('resp')
                card5.classList.add('resp')
                card4.classList.add('resp')
              } else {
                  card6.classList.remove('resp')
                  card5.classList.remove('resp')
                  card4.classList.remove('resp')
              }
          }
          TowCard(x)
          OneCard(x2)
          x.addListener(TowCard)
          x2.addListener(OneCard)


