const eleContainer = document.getElementById('container');
const eleBarImg = document.querySelector('#container .section-bar .bar-img');
const eleSearchBtn = document.getElementById('search');
const eleInput = document.querySelector('input');
const eleShow = document.querySelector('.search-text');
const eleNavBtnL = document.querySelector('.prev');
const eleNavBtnR = document.querySelector('.next');
let pageCnt = 1;
let inputTxt = '';
const arrLen = 0;

const searchRes= (input)=>{
    console.log('input2search',input);
    fetch(`https://api.unsplash.com/search/photos?query=${input}&page=${pageCnt}&client_id=THZfS77PH99QLuX4kd-uHD6cQtpJ8llw3WOpasSZBis`)
        //if use google api, chrome extension for CROS problem
        .then(res => res.json())
        .then(res => {
            console.log(res);
            let arrImg = res.results;
            arrImg.forEach(img => {
                console.log(img.urls.full);
                const urlFull = img.urls.full;
                let imgNail = document.createElement('img');
                imgNail.style.backgroundImage = `url(${urlFull})`;
                imgNail.addEventListener('click', () => {
                    const eleBgImg = document.createElement('img');
                    eleContainer.style.backgroundImage = `url(${urlFull})`;
                })
                eleBarImg.appendChild(imgNail);
            })
        });
}

eleInput.addEventListener('change', (e)=>{
    inputTxt = e.target.value;
    console.log('inputBox:',inputTxt);
})

eleSearchBtn.addEventListener('click', ()=>{
    eleShow.innerText = inputTxt;
    eleBarImg.innerText = '';
    searchRes(inputTxt);
})

eleNavBtnL.addEventListener('click', ()=>{
    pageCnt--;
    eleShow.innerText = inputTxt;
    eleBarImg.innerText = '';
    searchRes(inputTxt);
})

eleNavBtnR.addEventListener('click', ()=>{
    pageCnt++;
    eleShow.innerText = inputTxt;
    eleBarImg.innerText = '';
    searchRes(inputTxt);
})
