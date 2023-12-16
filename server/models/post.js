const posts = [
    {
        postId: 54321,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, iusto minus eligendi impedit, sit totam facilis rem ullam, ipsa quod fugit sapiente soluta ut excepturi doloribus illo neque laborum rerum.',
        date: new Date()
    },
    {
        postId: 09271,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam veritatis hic eum provident rem veniam fugiat deserunt labore minima dignissimos facilis autem, voluptas molestias amet vel explicabo unde est quaerat.',
        date: new Date()
    },
    {
        postId: 96024,
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum enim impedit hic soluta ipsum, perferendis accusamus nostrum, assumenda est sed natus doloribus? Dignissimos blanditiis libero suscipit cumque nihil, nulla dolores?',
        date: new Date()
    }
]

async function getPosts = () => await posts;

// const allPosts = JSON.stringify(posts);