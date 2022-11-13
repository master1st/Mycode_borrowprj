
        console.log(1);
        const outers = document.querySelector('.nav_realmenu_box');
        const innerLists = document.querySelector('.nav_realmenu_left');
        const innerss = document.querySelectorAll('.nav_inner');
        // const imgs = document.querySelectorAll('img');
        let currentIndex = 0; // 현재 슬라이드 화면 인덱스

        innerss.forEach((inner) => {
            inner.style.width = `${innerLists.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
            inner.style.height = `${innerLists.clientHeight}px`;
        })
        innerLists.style.height = `${outers.clientHeight * innerss.length}px`;
        // imgs.forEach((img) => {
        //     img.style.width = `${outers.clientWidth}px`;
        //     img.style.height = `${outers.clientHeight}px`;
        // })
        /*
          버튼에 이벤트 등록하기
        */
        // const buttonLeft = document.querySelector('.button-left');
        // const buttonRight = document.querySelector('.button-right');

        // buttonLeft.addEventListener('click', () => {
        //     currentIndex--;
        //     currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
        //     Indexvalue();
        //     innerLists.style.marginBottom = `-${outers.clientHeight * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
        //     clearInterval(interval); // 기존 동작되던 interval 제거
        //     interval = getInterval(); // 새로운 interval 등록
        // });

        // buttonRight.addEventListener('click', () => {
        //     currentIndex++;
        //     currentIndex = currentIndex >= innerss.length ? innerss.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
        //     Indexvalue();
        //     innerLists.style.marginBottom = `-${outers.clientHeight * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
        //     clearInterval(interval); // 기존 동작되던 interval 제거
        //     interval = getInterval(); // 새로운 interval 등록
        // });
        /*
          주기적으로 화면 넘기기
        */

        const getInterval = () => {
            return setInterval(() => {
                currentIndex++;
                currentIndex = currentIndex >= innerss.length ? 0 : currentIndex;
                innerLists.style.marginTop = `-${outers.clientHeight * currentIndex}px`;
            }, 2000);
        }

        // let interval = getInterval(); // interval 등록
   