
async function callApi() {
    const res = await fetch("https://random-words-api.vercel.app/word");
    const users = await res.json();
    //console.log(users)
    let newWord;
    newWord = users[0].word;//newWordに問題単語取得
    console.log(newWord);

    //target = document.getElementById("questionWord");
    //target.innerText = newWord;
  };
  callApi();

export default newWord;