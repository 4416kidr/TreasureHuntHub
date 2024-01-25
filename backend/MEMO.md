# MEMO

## 作業開始

- [少しずつ育てるGo言語のプロジェクト構成 (zenn.dev)](https://zenn.dev/foxtail88/articles/824c5e8e0c6d82)
- [Organizing a Go module (go.dev)](https://go.dev/doc/modules/layout)

## 0125
### 命名規則

- プロジェクトが小さいうちに命名規則を決めておく
  - 参考: [他言語プログラマが最低限、気にすべきGoのネーミングルール](https://zenn.dev/keitakn/articles/go-naming-rules)
  - 巨人の肩に乗る
- 以下規則
  - ファイル名: スネークケース
    - `hello_world.go`
  - ディレクトリ名: ケバブケース
    - `hello-world/`
  - 関数、type、構造体: キャメルケース
    - `HelloWorld`
  - レシーバ名: 英語1,2文字の小文字
    - `Client c` or `Client cl`
    - レシーバとは？
      - `func (s Square) Area() float64 {}` でいう `(s Square)`
      - 参考: [Go - メソッドとレシーバ](https://qiita.com/Yuuki557/items/e9f5bdfbbfe92973a05e)
  - 変数・引数名: 短い小文字
    - `Config` -> `conf`
    - `HelloWorld` -> `hw`
  - 存在チェック

### HTTPメソッド4種類(GET,POST,PUT,DELETE)の違い

- CRUDと結びついている
  - CRUD: Create, Read, Update, Delete
  - Create: POST
  - Read: GET
  - Update: PUT
  - Delete: DELETE
  - 参考: [HTTPメソッド4種類(GET,POST,PUT,DELETE)について概要と違いを理解する
](https://developers-book.com/2020/07/20/140/)

### Golangの文法
#### 配列

- Arrays: 固定長の配列
- Slices: 可変超配列
  - `var slice []string`で宣言
  - `slice = append(slice "hello")`で要素追加
  - 参考: [【Go】基本文法④(配列・スライス)](https://qiita.com/k-penguin-sato/items/daad9986d6c42bdcde90)

#### stringからintへの変換

- `strconv`という標準パッケージを使う
  - `a, _ := strconv.Atoi("7")`のようにする
  - [【Golang】文字列と数値の変換(strconv)](https://qiita.com/mei4n/items/308e75092e2a058d75f2)

### echoのホットリロード（作業中）

- ファイルを変更するたびにechoサーバーを立ち上げ直さないといけない
  - Airなるものを使えばホットリロードを実現できるみたい
  - 参考: [Go×Echoでホットリロードしたい](https://kyoruni.hatenablog.com/entry/go-echo-hot-reload)

### API設計（作業中）

- RESTは自由度がとても高いか、自分がよく理解していないかのどちらかで難しく感じる
- 一方で、OpenAPIは使ったことがあるということもあるけど、RESTよりかは制限があるため、ルールに従うことで、ちゃんとしたAPIが構築できそう
  - [API 設計: gRPC、OpenAPI、REST の概要と、それらを使用するタイミングを理解する](https://cloud.google.com/blog/ja/products/api-management/understanding-grpc-openapi-and-rest-and-when-to-use-them)

- 参考: [OpenAPI (Swagger) まとめ (Qiita/@KNR109)](https://qiita.com/KNR109/items/7e094dba6bcf37ed73cf)
- 参考: [API設計まとめ (Qiita/KNR109)](https://qiita.com/KNR109/items/d3b6aa8803c62238d990)
