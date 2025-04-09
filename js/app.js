import {elTablist, elLoader, elTab1, elTab2, elTab3, elTab4} from "./html-elements.js";
import { uiRender } from "./iu-render.js";

const URLS = {
    tab1: "https://json-api.uz/api/project/fn37/products",
    tab2: "https://json-api.uz/api/project/fn37/students",
    tab3: "https://json-api.uz/api/project/fn37/animals",
    tab4: "https://json-api.uz/api/project/fn37/cars"
};

function showLoader() {
    elLoader.innerHTML = `
        <div class="flex flex-col gap-4">
            <div class="skeleton h-32 w-full"></div>
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
        </div>`.repeat(12); 
}

function loadTabData(url){
    showLoader();
    fetch(url)
        .then(res => {
            return res.json(); 
        })
        .then(res => {
            const dataArray = res.data;
            uiRender(dataArray);
        })
        .catch(error => {
            console.error(error);
        });
}


elTablist.addEventListener('click', function(evt) {
    const target = evt.target;
    
    [elTab1, elTab2, elTab3, elTab4].forEach(tab => 
        tab.classList.remove('tab-active')
    );

    if (target.matches('#tab1')) {
        target.classList.add('tab-active');
        loadTabData(URLS.tab1);
        console.log('tab1')
    }
    if (target.matches('#tab2')) {
        target.classList.add('tab-active');
        loadTabData(URLS.tab2);
        console.log('tab2')
    }
    if (target.matches('#tab3')) {
        target.classList.add('tab-active');
        loadTabData(URLS.tab3);
        console.log('tab3')
    }
    if (target.matches('#tab4')) {
        target.classList.add('tab-active');
        loadTabData(URLS.tab4);
        console.log('tab4')
    }
});
showLoader();
console.log('Initial load');
loadTabData(URLS.tab1); 