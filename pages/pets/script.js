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
fetch('../../assets/pets.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
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
            function ImgSet48(){
                card1img.setAttribute('src',data[result[0 + count]].img)
                card2img.setAttribute('src',data[result[1 + count]].img)
                card3img.setAttribute('src',data[result[2 + count]].img)
                card4img.setAttribute('src',data[result[3 + count]].img)
                card5img.setAttribute('src',data[result[4 + count]].img)
                card6img.setAttribute('src',data[result[5 + count]].img)
                card7img.setAttribute('src',data[result[6 + count]].img)
                card8img.setAttribute('src',data[result[7 + count]].img)
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
                    function ImgSet48(){
                        card1img.setAttribute('src',data[result[0 + countFor6]].img)
                        card2img.setAttribute('src',data[result[1 + countFor6]].img)
                        card3img.setAttribute('src',data[result[2 + countFor6]].img)
                        card4img.setAttribute('src',data[result[3 + countFor6]].img)
                        card5img.setAttribute('src',data[result[4 + countFor6]].img)
                        card6img.setAttribute('src',data[result[5 + countFor6]].img)
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
            function ImgSet48(){
                card1img.setAttribute('src',data[result[0 + countFor3]].img)
                card2img.setAttribute('src',data[result[1 + countFor3]].img)
                card3img.setAttribute('src',data[result[2 + countFor3]].img)
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
            
        })
        const card4 = document.getElementById('card4')
        const card5 = document.getElementById('card5')
        const card6 = document.getElementById('card6')
        const card7 = document.getElementById('card7')
        const card8 = document.getElementById('card8')
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


