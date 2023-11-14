function creatPost(e) {
    e.preventDefault();
    const post = {
        postId: Math.random().toString().slice(2, 8),
        content: document.getElementById("textform").value,
        date: new Date()
    };
    console.log(post);
}

window.onload = () => {

    let postForm = document.getElementById("postForm");
    postForm.addEventListener("submit", creatPost);

}