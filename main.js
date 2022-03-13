let hoge;
async function callApi() {
    const res = await fetch("https://random-words-api.vercel.app/word");
    const users = await res.json();
    //console.log(users)
    hoge = users[0].word;
    console.log(hoge);
    
  };
  callApi();
