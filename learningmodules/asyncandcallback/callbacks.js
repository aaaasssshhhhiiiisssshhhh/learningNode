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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
//getPosts(); we make callback as a new getpost.
createPost(
  { title: "this is post three", body: "this is body three" },
  getPosts
);
