function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';


    const loadPostsButton = document.getElementById('btnLoadPosts');
    const postViewButton = document.getElementById('btnViewPost');
    const selectPostElement = document.getElementById('posts');
    const postBodyElement = document.getElementById('post-body');
    const commentListElement = document.getElementById('post-comments');

    loadPostsButton.addEventListener('click', () => {
        fetch(postsUrl)
            .then(response => response.json())
            .then(posts => {
                Object.values(posts)
                    .forEach(post => {
                        const optionElement = document.createElement('option');
                        optionElement.value = post.id;
                        optionElement.textContent = post.title;

                        selectPostElement.appendChild(optionElement);
                    })
            });
    });

    postBodyElement.addEventListener('click', async () => {
        selectPostId = selectPostElement.value;

        const response = await fetch(`${postsUrl}/${selectPostId}`);
        const selectedPost = await response.json();

        postBodyElement.textContent = selectedPost.body;

        const commentsResponse = await fetch(commentsUrl);
        const comments = await commentsResponse.json();

        const postComments = Object.values(comments)
            .filter(comment => comment.postId === selectPostId)
            .map(comment => {
                const liElement = documnet.createElement('li');
                liElement.id = comment.id;
                liElement.textContent = comment.text;
                
            return liElement;                
        });

        const commentsFragment = document.createDocumentFragment();
        
    });
}

attachEvents();