const btn = document.getElementById("btn");
const text = document.getElementById("text");
// document.getElementById("---")は、
// id プロパティが指定された文字列(main.htmlでid属性にしたやつ)
// に一致する要素を表す Element オブジェクトを返すよ

btn.addEventListener("click", () => {
  text.textContent = "ボタンが押された時に文字が出るようにした";
});
// addEventListener()はEventTarget インターフェイスのメソッドで、
// ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。
// 第一引数は、対象とするイベントの種類を表す文字列
// 第二引数は、null であるか、handleEvent() メソッドのあるオブジェクトか
// 、JavaScript の関数のいずれかでなければなりません
// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener

// textContent
// https://developer.mozilla.org/ja/docs/Web/API/Node/textContent

// アロー関数　https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// ()=>{}の形式になっているのは{}の中が文だから。式なら{}はいらない。
// ()の中が空なのは引数を持たないという意味。逆に引数があるなら()はいらない。
