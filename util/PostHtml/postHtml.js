
export const postHtml = (postID) => {
    return `
    <div id="post" class="post">
        <h1 class="post__title">${postID.title}</h1>
        <p class="post__text">${postID.body}</p>
        <b class="post__comments-text">Комментарии</b>
        <div class="post__comments">
          <div class="post-comment"></div>
        </div>
    </div>
`
}