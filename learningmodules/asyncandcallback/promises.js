const posts = [
  { title: "this is post one", body: "this is body one" },
  { title: "this is post two", body: "this is body two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      //const error = false; // to reslove we keep error to false

      // this return the uncaught promise which is directly rejected.
      const error = false;
      if (!error) {
        resolve();
      }
      //reject ko kura aauxa
      else {
        reject("there is some error going on dude");
      }
    }, 2000);
  });
}

//createPost({ title: "this is post three", body: "this is body three" });
// for call back we needed getPost at the end of createPost
// this is not the case for promise. we need .then to return promise.
////if you error wala false xa vane line 24 ma we do like this..
//   .then(getPosts);

//if you error wala true xa vane line 24 ma we do like this..
// const error = true;
//   .then(getPosts)
//   .catch((err) => console.log(err));

//for async//await
//aligent way to handel promises..
// async function init() {
//   await createPost({
//     title: "this is post three",
//     body: "this is body three",
//   });

//   getPosts();
// }
// init();

//for fetch
//async /await /fetch maaa..
//yeta await fetch("https://jsonplaceholder.typicode.com/users"); kina await fetch lekya vanda its returns promise..
//for fetch api we need to call lol.json();
async function fetchUsers() {
  const lol = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await lol.json();

  console.log(data);
}

fetchUsers();

//we goona use promises (dealing with response but we should know how to create those..)
//promise.all ( many promises haru xa vane kasari garne ta??)
//.then .then .then wala case bata vanda promise.all use handine

// const promise1 = Promise.resolve("aashish");
// const promise2 = 1;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "byebye")
// );
// //fetch api for ajax or http req
// // we need two .then for to format it in json  and another .then for data formatting
// // for fetch we do .then and map it to res.json
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// //for array of promises we do

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
