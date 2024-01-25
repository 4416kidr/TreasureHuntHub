# デプロイ先調査

## 本サービスについて

- 本サービスはSNS的な側面があるため、静的サイトではない。そのため、Cloudflare Pagesなどの静的サイトホスティングサービスは使えない。
- Vercelも静的サイトホスティングサービスだった気がする。

## 条件

- 無料で運用することを考えている
- 可用性をある程度犠牲にする
  - スリープは許容する
  - 国内リージョンがなくても問題ない
- 無料期間の制限がない
- クレジットカードの登録が不要

## デプロイ方法の選択肢

- dockerイメージにして、イメージをデプロイする
- 色々なサービスを組み合わせて、一つのサービスとして運用する
  - DBのサービスとバックエンド、フロントエンドみたいな感じ
- VPS上にdockerイメージをデプロイする
  - VPSサービスは基本有料であるため、これは選択しない

## 複数サービスの組み合わせ
### PaaS

- Fly.io
  - メモリ256MBのVMを3つ使える
    - 貧弱なVMだが、3つも使える
  - VMなのでdockerをデプロイできる可能性がある
- Koyeb
  - 無料枠が5ドルらしく、そもそもお金がかかる可能性がある
  - DBは他のサービスを使えというスタンスらしい
    - DBサービスの紹介記事があるらしい
- Deta
  - 使ったことがあるサービス
  - そもそも有料プランが存在しないらしく、事業継続性に難があるらしい
    - そこに関してはあまり問題ではない
  - 最近大型アップデートがあり、大きく変わった可能性があるので、調査の必要あり
- Render
  - 個人的によく聞くサービス
  - PostgresDBを90日間無料で使える
    - 日数制限があるので、DB目的では使えない
  - スリープモードが存在する
- Cyclic
  - DynamoDBが提供されている
    - 期間などの調査は必要
  - スリープモードもないらしい
  - ドキュメントが少なく、ハードルが高いことが難点らしい

### DB

- PlanetScale
  - MySQLベースで無料枠が大きい
- CockroachDB serverless
  - 2.5億のリクエストユニットまで無料で使えるらしい
    - 毎月ではなく累計の可能性があり、長期的には使えないのかもしれない
  - 上記の制限内であれば、DBは作り放題である可能性がある

## 参考サイト

- [サヨナラHeroku 〜アプリケーションの知識だけで本番稼働を実現できる無料のプラットフォームを追い求めて〜（zenn.dev）](https://zenn.dev/imah/articles/a41e889dbf54da)
  - 基本このサイトを参考にした
- [Web サービスを無料で手軽にモダンなインフラにデプロイしよう！ (zenn.dev)](https://zenn.dev/lovegraph/articles/56f8d5f28ba1c3)
- [Which Cloud Database Platform to Choose for Your Applications (koyeb.com)](https://www.koyeb.com/blog/which-cloud-database-platform-to-choose-for-your-applications)
  - 各種DBサービスが紹介されている
  - 英語なので、まだ読んでいない

## その他の参考サイト

- [Golang(echo)のAPIをrenderでデプロイする方法 (zenn.dev)](https://zenn.dev/keishi_lcc/articles/c40fcb9d2c589d)
  - Golangのrenderへのデプロイ例
- [静的/動的サイト｜HTTPの仕組み(パケットキャプチャで学ぼう！) (zenn.dev)](https://zenn.dev/masahiro_toba/books/3daf7dc0d5dfd7/viewer/91164b)
  - 静的サイト: 内容が変化しない
    - 事前にデータを取得して、データ取得済みのページを作成しておくといった構成もこっち
  - 動的サイト: 内容が変化する
    - 本サービスはSNS的なところがあり、投稿後に内容が変わる必要があるのでこっち
- [[学生必見] サービスを無料で運用する](https://qiita.com/mercy34mercy/items/32b1ce41b6fcf71a5011)
  - Azureのいくつかのサービスは毎月無料枠があり、それを越えなければずっと無料で使えるらしい
    - Azureはクレカの登録が必要なため、今回は除外
- [Microsoft Azureはクレジットカードなしで体験できるのか？](https://www.acrovision.jp/service/azure/?p=1258)
  - Azure Learnでハンズオン形式で無料で体験をすることができる
  - Azure for Studentsという学生向けプランを利用すると、クレカの登録が不要で1年限定で通常よりも大きい無料枠をもらえる
