let sliderImgs = Array.from(document.querySelectorAll('img'));
let slidersCount = sliderImgs.length;
let currentSlide = 1;
let sliderNumberElement = document.getElementById('slide-number');

let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id','pagination-ul');

// create the pagination items 
for(let i = 1;i <= slidersCount;i++){
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);
// the created ul paginator
let newPaginator = document.getElementById('pagination-ul');
let paginatorChildrenLength = Array.from(newPaginator.children).length;

for(let i = 0;i < paginatorChildrenLength;i++){
    newPaginator.children[i].addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.getAttribute('data-index'));
        checker();
    })
}

nextBtn.addEventListener('click',nextClick);
prevBtn.addEventListener('click',prevClick);

checker();

function nextClick(){
    currentSlide++;
    checker();
}

function prevClick(){
    currentSlide--;
    checker();
}

function checker(){
    sliderNumberElement.textContent = `Slide #${currentSlide} of ${slidersCount}`;
    removeAllActions();

    sliderImgs[currentSlide - 1].classList.add('active');
    newPaginator.children[currentSlide - 1].classList.add('active');

    if(currentSlide === 1) {
        prevBtn.classList.add('disabled');
        prevBtn.disabled = true;
    } else {
        prevBtn.classList.remove('disabled');
        prevBtn.disabled = false;
    }
    if(currentSlide === slidersCount) {
        nextBtn.disabled = true;
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
        nextBtn.disabled = false;
    }
}

function removeAllActions(){
    sliderImgs.forEach((img) => {
        img.classList.remove('active');
    })

    Array.from(newPaginator.children).forEach((bullet) => {
        bullet.classList.remove('active');
    })
}