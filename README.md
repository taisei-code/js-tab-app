## 実現したいこと
***
タブメニューをクリックして、クリックした項目に該当する内容を表示する
例 → メニューが「予約・購入」なら、「予約・購入」のコンテンツを表示

## 考え方
***

html

用意する要素
タブメニュー（予約・購入、製品情報、比較・レビュー）
コンテンツ（タブメニューに該当する内容を3つ）

css

初期状態
・タブメニュー
→（予約・購入）にactiveクラスを付与して、背景色を適用。
・コンテンツ
→ （予約・購入）にshowクラスを付与して、display: block;。それ以外は非常時でdisplay: none;

js

DOM要素を取得

ユーザーがクリックしたときに何を起こしたい？
・タブメニュー
初期で表示してる（予約・購入）のactiveクラスを外す
クリックされたタブメニューにactiveクラスを付与する

コンテンツ
初期で表示してる（予約・購入）のshowクラスを外す
クリックされたタブメニューに該当するコンテンツにshowクラスを付与

## 実装で詰まったこと

・クリックしたタブに該当するコンテンツの同期

## コード解説

- for文で繰り返し処理を実装している。
for(let i = 0; i < tablist.length; i++) {
  tablist[i].addEventListener('click', tabChange);
}

条件式 (let i = 0; i < tablist.length; i++) 

let i = 0;
→ 変数iに0が定義されてる

i < tablist.length
→ タブの数（3つ）だけ繰り返し、この条件式がtrueの間ループ処理が行われる

i++
→ ループ処理がが1回行われるごとに更新される

tablist[i].addEventListener('click', tabChange);
→ タブのi番目をクリックしたときにtabChange関数を実行する

- タブを配列風オブジェクトで定義
const aryTabs = Array.prototype.slice.call(tablist);

①Array.prototype.slice.call
→ slice メソッドを呼び出すことで、配列風オブジェクトやコレクションを新しい配列に変換する

sliceメソッド
→ 配列の一部を start から end （end は含まれない）までの範囲で、選択した新しい配列オブジェクトにシャドーコピー。

callメソッド
→ ここでは、(tablist)を配列風オブジェクトに結合している

② Array.from(tablist);
→ 反復可能オブジェクトや配列風オブジェクトからシャローコピーされた、新しい Array インスタンスを生成する

document.querySelectorAll()の返り値としてNodeListが用いられ、Array.from（）メソットでArryに変換できる。

- クリックしたタブの配列番号を取得

