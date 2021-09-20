 const tabsBtm = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item');

tabsBtm.forEach(onTabClick);

function onTabClick(item){
    item.addEventListener('click', function (){
        let currentBtm = item;
        let tabId = currentBtm.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        console.log('hi');

        if (! currentBtm.classList.contains('active')){
            tabsBtm.forEach(function (item){
                item.classList.remove('active');
            });

            tabsItems.forEach(function (item){
                item.classList.remove('active');
            });
            currentBtm.classList.add('active');
            currentTab.classList.add('active');
        };
    });
}

document.querySelector('.tabs__nav-btn').click();