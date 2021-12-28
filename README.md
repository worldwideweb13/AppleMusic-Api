# AppleMusic-Api

![3dImage](thumbnailImage.png)

### 概要
* 制作期間： 2021年8月　2日間
* 使用技術： JavaScript,HTML,CSS,Apple music API
AppleのAPI認証が事前登録等なしに利用できるため、試しにプロダクト開発をしてみました。検索条件欄にアーティスト名を入れると、検索されたアーティストの曲一覧から最初の4曲の曲名とアルバム画像を表示します。  
AppleMusicApi
https://developer.apple.com/documentation/applemusicapi/

### 動作環境
* [index.html](index.html)をブラウザで立ち上げれば、アプリは動作します。設定ファイル等の設定は入りません。
* VsCode推奨。拡張機能でLiveServerをインストール。[LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)経由でindex.htmlをブラウザで開くとアプリが動作します。

### アプリの遊び方
1. 自分の好きなアーティスト名をモーダル画面で入力 
2. 入力したアーティストの代表曲のアルバム画像、曲名が表示される。４曲の中からランダムで１曲再生される。
3. 再生された曲名のフリップをクリックすると「正解」をアラートで表示。それ以外のフリップをタップしたら「不正解」をアラートで表示

### その他
関数、If文という基本的な文法とApiを組み合わせて、ミニゲームとして成立するアプリケーションに仕上げています。プログラミング初学者の最初のアプリ制作として、模写して頂いても勉強になると思います。
