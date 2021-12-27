# AppleMusic-Api

* 制作期間： 2021年8月　2日間
* 使用技術： JavaScript,HTML,CSS,Apple music API

![3dImage](thumbnailImage.png)


### 概要
AppleのAPI認証が事前登録等なしに利用できるため、試しにプロダクト開発をしてみました。検索条件欄にアーティスト名を入れると、検索されたアーティストの曲一覧から最初の4曲の曲名とアルバム画像を表示します。  
AppleMusicApi
https://developer.apple.com/documentation/applemusicapi/


### 開発の苦労した点
苦労したポイントは大きく分けて以下の3点です。
* 位置情報ゲームを成立させるためのゲームデザイン
* 墓地の上に特定のキャラクターを表示させるロジック。（誤差1m範囲の経度、緯度情報の取得）
* ゲームの保守・運用性を意識したコーディング

#### 位置情報ゲームを成立させるための設計
３dマップサービスを利用する際、各社、従量課金制を採用しているケースが多いこと、全国マップ全体にイベントやキャラクター配置をするためには膨大な工数が発生することから、個人開発で実現可能な形にする工夫が必要でした。結果、ゲームのエリアを谷中霊園内に特定、地図は２dのGoogleMapでキャラクターが出現するお墓をピン立てすることで、ユーザーが谷中霊園内をキャラクターの表示ポイントに向かって散策する、というゲーム性に着地させました。

#### 墓地の上に特定のキャラクターを表示させるロジック。（誤差1m範囲の経度、緯度情報の取得）
「特定の墓地の前でカメラをかざした際にキャラクターを表示させる」という機能要件を満たす技術選定がポイントになりました。UnityのARとして有名なVuforiaを利用するためには、墓地はマーカーとして成立しなかったこと（灰色一色の場合が多い）、墓地をマーカーとするにはサイズが大きすぎる事が問題になったため、 **「経度・緯度」** 情報に **「墓地とその周辺の空間を認証点とする」** という観点からImmersalを利用しました。ImmersalはVPS(空間を点群データとして認識する)を利用することで空間全体に3dオブジェクトを配置する技術で、これによりボチナビの実装を実現する事ができました。(参考: 図1 Immersalにて3dデータを取り込み描画した映像)

####  ゲームの保守・運用性を意識したコーディング
ユーザー毎に自分が訪れた墓地の図鑑が開放されていく仕様にしました。DBにゲームデータを保持させることで、PlayFab上でキャラクターの図鑑データを更新すれば、ゲームデータを更新できる仕様になっております。DBとの繋ぎ込みはC#にて行いました。静的言語を扱うのが初めてだったため、最初は戸惑いましたが、とにかくコードを書くことでクラスの概念理解が深まり、コードを書けるようになったこと（ゲーム制作では、クラスを利用する場面が頻発するため大変良い勉強になった）が大きな収穫です。

##### 図1 Immersalにて3dデータを取り込み描画した映像
