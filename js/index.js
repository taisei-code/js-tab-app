'use strict';

const tablist = document.querySelectorAll('.tab-list-item')
const tabContent = document.querySelectorAll('.tab-contents-item');

for(let i = 0; i < tablist.length; i++) {
  tablist[i].addEventListener('click', tabChange);
}

function tabChange() {
  
  // activeクラスを削除
  document.querySelectorAll('.active')[0].classList.remove('active');
  
  // クリックしたタブにactiveクラス付与
  this.classList.add('active');
  
  // showクラスを削除
  document.querySelectorAll('.show')[0].classList.remove('show');
  
  // タブを配列風オブジェクトで定義
  const aryTabs = Array.from(tablist);
 
  // クリックしたタブの配列番号を取得
  const index = aryTabs.indexOf(this);
  console.log(index);

  // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与    
  tabContent[index].classList.add('show');

}