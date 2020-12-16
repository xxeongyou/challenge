// 왼쪽, 오른쪽 버튼
const prevBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');

// 슬라이드 전체 사진
const gallery = document.querySelector('.gallery');

// 사진수
const card = document.querySelectorAll('.card');
const cardCnt = card.length; // 5

// 사진너비
const cardWidth = card[0].clientWidth + 20;

// 현재 슬라이드 index
let cardNow = 0;
nextBtn.addEventListener('click', function(){
    if(cardNow<cardCnt-1) {
        cardNow++;
        console.log(cardNow);
        if(cardNow!=0) {
            prevBtn.style.opacity = 1;
            nextBtn.style.opacity = 1;  
        }
        if(cardNow===4) {
            prevBtn.style.opacity = 1;
            nextBtn.style.opacity = 0.3;  
        }
        gallery.style.transform = 'translateX(-'+(cardWidth*cardNow)+'px)';
    }
});
prevBtn.addEventListener('click', function(){
    if(cardNow>0) {
        cardNow--;
        console.log(cardNow);
        if(cardNow!=4) {
            prevBtn.style.opacity = 1;
            nextBtn.style.opacity = 1;  
        }
        if(cardNow===0) {
            prevBtn.style.opacity = 0.3;
            nextBtn.style.opacity = 1;  
        }
        gallery.style.transform = 'translateX(-'+(cardWidth*cardNow)+'px)';
    }
});
