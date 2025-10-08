const btn = document.getElementById("btn");
const text = document.getElementById("text");
// document.getElementById("---")は、
// id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返すよ

btn.addEventListener("click", () => {
  text.textContent = "The button has been pressed!";
});
//  EventTarget インターフェイスのメソッドで、
// ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。
