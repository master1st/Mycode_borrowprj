const rowsPerPages = 2;
const rowss = document.querySelectorAll('.recentItem');
const rowsCounts = rows.length; //100/8  12.9 -> 13
const pageCounts = Math.ceil(rowsCounts/rowsPerPages);

const prevPageBtns = document.querySelector('.prevPageBtn');
const nextPageBtns = document.querySelector('.nextPageBtn');
let pageActiveIdx = 0; //현재 보고 있는 페이지 그룹 번호
let currentPageNum = 1; //현재 보고 있는 페이지 번호
let maxPageNum = 9; //페이지그룹 최대 개수
function displayRows(idx){
  console.log(idx);
  let start = idx*rowsPerPages;
  let end = start+rowsPerPages;

  let rowsArray = [...rowss];

  for(ra of rowsArray){
    ra.style.display = 'none';
  }

  let newRows = rowsArray.slice(start,end);
  for(nr of newRows){
    nr.style.display = '';
  }

}
displayRows(0);

nextPageBtns.addEventListener('click', ()=>{
  let nextPageNum = pageActiveIdx;
  if(pageActiveIdx >= pageCounts){
    pageActiveIdx = pageActiveIdx;
  }
  else{
    ++pageActiveIdx;
  }
  nextPageNum = pageActiveIdx >= pageCounts ? pageCounts : pageActiveIdx;
  displayRows(nextPageNum-1);
  currentPage.innerHTML=`${nextPageNum}`;
  allPage.innerHTML=`${pageCounts}`;

});
prevPageBtns.addEventListener('click', ()=>{
  let nextPageNum = pageActiveIdx;
  --pageActiveIdx;
  nextPageNum = pageActiveIdx < 1 ? 1 : pageActiveIdx;
  displayRows(nextPageNum);
  currentPage.innerHTML=`${nextPageNum}`;
  allPage.innerHTML=`${pageCounts}`;


});
const currentPage = document.querySelector('.currentPage');
const allPage = document.querySelector('.allPage');
currentPage.innerHTML=`${pageActiveIdx+1}`;
allPage.innerHTML=`${pageCounts}`;
function pagenum(nextPageNum){
  console.log(nextPageNum);

}