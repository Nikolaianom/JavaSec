const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')

// console.log(new Date().getMinutes());



function clock() {

    let time = new Date()
    let hours = time.getHours() * 30
    let minutes = time.getMinutes() * 6
    let seconds = time.getSeconds() * 6

    hour.style.transform = `rotate(${hours}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    sec.style.transform = `rotate(${seconds}deg)`

    // innerHTML - это свойство, которое позволяет получить или изменить HTML-содержимое элемента.

    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    // ! Рекурсия - это вызов функции внутри самой себя

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

// setTimeout(() => {
//     console.log('hello');
// }, 5000);

// setInterval(() => {
//     console.log('hello');
// }, 2000);


const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

// console.log(tabsItem);
// console.log(tabsContentItem);

tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        addAndRemoveActive(item, tabsItem)
        addAndRemoveActive(tabsContentItem[i], tabsContentItem)
    })
})

// classList - это свойство, которое позволяет получить доступ к классам элемента.
// add - добавляет класс
// remove - удаляет класс
function addAndRemoveActive(element, arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add('active')
}


const btn = document.querySelector('.stopwatch__btn'),
stopWatchSeconds = document.querySelector('.stopwatch__seconds'),
stopWatchMinutes= document.querySelector('.stopwatch__minutes'),
stopWatchHours = document.querySelector('.stopwatch__hours') ,
tabsLink = document.querySelector('.tabsLink__span');
     


    btn.addEventListener('click', () => {
        if (btn.innerHTML == 'start') {
            btn.innerHTML = 'stop';
            seconds()
            tabsLink.classList.add('active')
        }else if(btn.innerHTML == 'stop'){
            btn.innerHTML = 'clear';
            tabsLink.classList.add('active_clear')
            
        }else if(btn.innerHTML == 'clear'){
            btn.innerHTML = 'start';
            stopWatchSeconds.innerHTML = 0;
            stopWatchMinutes.innerHTML = 0;
            stopWatchHours.innerHTML = 0;
            tabsLink.classList.remove('active_clear')
            tabsLink.classList.remove('active')
        }
        
    })



    function seconds() {
    
        if(btn.innerHTML == 'stop'){
            stopWatchSeconds.innerHTML++;
            if(stopWatchSeconds.innerHTML > 59){
                stopWatchSeconds.innerHTML = 0;
                stopWatchMinutes.innerHTML++;
            }else if(stopWatchMinutes.innerHTML > 59){
                stopWatchMinutes.innerHTML = 0;
                stopWatchHours.innerHTML++;
            }
        }
        
        setTimeout(() => {
            seconds()
        }, 1000);
    }