# アプリケーション名	
Plain Cash Register
  
# アプリケーション概要
キャッシュレジスターのアプリケーションを作成しました。従業員がログインするとレジスターを使用できます。商品のカテゴリーと商品を追加・削除することが可能です。商品を選択すると式に自動追加します。商品が式に追加されるたびに合計金額が表示されます。クレジットカード決済もしくは簡易的な計算機能でお釣りを表示させて購入することができます。
  
# URL※	
デプロイ済みのURLを記載。デプロイが済んでいない場合は、デプロイが完了次第記載すること。（完了していないため、未着手）
  
# テスト用アカウント
ログイン機能等を実装した場合は、ログインに必要な情報を記載。またBasic認証等を設けている場合は、そのID/Passも記載すること。（完了していないため、未着手）
  
# 利用方法
1.新規登録画面が表示されるので情報を全て入力してロゴを押すと新規登録ができる。ログインも同様。
    
  新規登録画面でログイン画面に遷移したい場合、右下の「ログイン画面はこちら」を押すと遷移される
[![Image from Gyazo](https://i.gyazo.com/461f645bf7266519aeb0bf1da51062ba.png)](https://gyazo.com/461f645bf7266519aeb0bf1da51062ba)
  
2.ログイン画面で新規登録画面に遷移したい場合、右下の「新規登録画面はこちら」を押すと遷移される
[![Image from Gyazo](https://i.gyazo.com/6a4713a9b4400b902de325a79c202ecc.png)](https://gyazo.com/6a4713a9b4400b902de325a79c202ecc)
  
3.右上の歯車から商品カテゴリー・商品の追加、削除ができる
[![Image from Gyazo](https://i.gyazo.com/7699a9ba2f5369935d71e72ea6e418f7.png)](https://gyazo.com/7699a9ba2f5369935d71e72ea6e418f7)
  
4.カテゴリーの追加はカテゴリー名を入力した後にロゴを押すと追加される
[![Image from Gyazo](https://i.gyazo.com/ba194e6938c0ad4a67efbdf802cfd51c.png)](https://gyazo.com/ba194e6938c0ad4a67efbdf802cfd51c)
  
5.商品の追加はドロップダウンメニューにあるカテゴリーを選択して、商品名を入力した後にロゴを押すと追加される
[![Image from Gyazo](https://i.gyazo.com/3a850eb6b18b020c1698719c54a19ede.png)](https://gyazo.com/3a850eb6b18b020c1698719c54a19ede)
  
6.カテゴリー・商品の削除は削除画面で選択すると削除される
[![Image from Gyazo](https://i.gyazo.com/9a7fcc7805a804f4398c4508dc0b1999.png)](https://gyazo.com/9a7fcc7805a804f4398c4508dc0b1999)
  
7.検索フォームで商品の検索ができる
  
  商品を選択すると式に追加されて、合計金額が変化される
  
  支払い方法を選択して支払い画面に進む
  
  商品選択画面のロゴを押すとログアウトできる
[![Image from Gyazo](https://i.gyazo.com/7699a9ba2f5369935d71e72ea6e418f7.png)](https://gyazo.com/7699a9ba2f5369935d71e72ea6e418f7)
  
8.現金の場合、預かった金額を手入力して、お返し金額分をお釣りとしてお返ししてから、ロゴを押すと決済完了する
[![Image from Gyazo](https://i.gyazo.com/15173e53eb2013e7206e9127fc386441.png)](https://gyazo.com/15173e53eb2013e7206e9127fc386441)
  
9.クレジットカードの場合、カード情報を手入力して、ロゴを押すと決済完了する
[![Image from Gyazo](https://i.gyazo.com/bbd4f9af150069d254710de4dee98cf1.png)](https://gyazo.com/bbd4f9af150069d254710de4dee98cf1)
  
# アプリケーションを作成した背景
キャッシュレジスターというものは便利であるものの、どこか分かりづらいものでシンプルさが足りないものだと感じている。
実際の経験はもちろん、パートで働いている母親が会社のキャッシュレジスターがわかりづらすぎるという課題が判明した。課題を分析した結果、「画面が細かい」「画面遷移が多い」「手順が多い」ということが真因であると仮説を立てた。同様の問題を抱えている方も多いと推測し、真因を解決するために、見やすく・ページ遷移の少ないプレーンなキャッシュレジスターを開発することにした。
  
# 洗い出した要件
https://docs.google.com/spreadsheets/d/1bT5lLcKlhd4Lw0hDor7Kv9s92hzFqLDDb3VQdDMg8AQ/edit#gid=982722306
  
# 実装した機能についての画像やGIFおよびその説明※
実装した機能について、それぞれどのような特徴があるのかを列挙する形で記載。画像はGyazoで、GIFはGyazoGIFで撮影すること。
  
# 実装予定の機能
現在商品追加機能を実装中。
今後は従業員のログイン機能を実装予定。
  
# データベース設計
[![Image from Gyazo](https://i.gyazo.com/55c2b7b291d76474442bac82b5dc3bab.png)](https://gyazo.com/55c2b7b291d76474442bac82b5dc3bab)
  
# 画面遷移図
[![Image from Gyazo](https://i.gyazo.com/e832e569b3a93da9a7413d5157c31178.png)](https://gyazo.com/e832e569b3a93da9a7413d5157c31178)
    
# 開発環境
・HTML
・CSS
・Ruby
・Ruby on Rails
・javaScript
  
# ローカルでの動作方法※
git cloneしてから、ローカルで動作をさせるまでに必要なコマンドを記載。
(未着手)
  
# 工夫したポイント※
（のちに追記）