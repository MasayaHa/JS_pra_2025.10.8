const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = todoInput.value;
  todoList.appendChild(li);
  todoInput.value = "";
});
// createElement()は、指定されたタグ名を持つ要素ノードを生成します。
// https://developer.mozilla.org/ja/docs/Web/API/Document/createElement

// appendChild()は、指定された子ノードを現在のノードの子ノードリストの最後に追加します。
// https://developer.mozilla.org/ja/docs/Web/API/Node/appendChild
// つまり、todoListの子ノードリストの最後にliを追加する。

// todoInput.value = ""は、input要素の中身を空にする。
// input要素の中身はvalueプロパティで取得・設定できる。
// https://developer.mozilla.org/ja/docs/Web/API/HTMLInputElement/value
// ちなみに、input要素の中身を取得するにはvalueプロパティを使う。
// 例えば、todoInput.valueでinput要素の中身を取得できる。
// だから、li.textContent = todoInput.valueで、li要素の中身をinput要素の中身に設定している。

// まとめると、addBtnがクリックされたら、
// 1. 新しいli要素を作成する。
// 2. そのli要素の中身をtodoInputの中身に設定する。
// 3. そのli要素をtodoListの子ノードリストの最後に追加する。
// 4. todoInputの中身を空にする。
// という処理をしている。

// textContent
// https://developer.mozilla.org/ja/docs/Web/API/Node/textContent

// addEventListener()はEventTarget インターフェイスのメソッドで、
// ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定します。
// 第一引数は、対象とするイベントの種類を表す文字列
// 第二引数は、null であるか、handleEvent() メソッドのあるオブジェクトか
// 、JavaScript の関数のいずれかでなければなりません
// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
