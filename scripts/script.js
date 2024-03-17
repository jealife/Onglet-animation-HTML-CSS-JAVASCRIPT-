const tabs = document.querySelectorAll(".tabs__tab");
const tabsSmartBar = document.querySelector(".tabs__smart-bar");

tabsSmartBar.style.width = `${tabs[0].scrollWidth}px`;

tabs.forEach(tabs => addEventListener("click", handleTabSwitch));

function handleTabSwitch(e){
    tabsSmartBar.style.width=`${e.target.scrollWidth}px`
    tabsSmartBar.style.transform=`translateX(${e.target.offsetLeft}px)`
}
