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
