

export const getCommentToPostIdHtm = (email, body) => {
    const commentToPostIdHtml = `
    <span class="post-comment__author">${email}</span>
    <span class="post-comment__text">${body}</span>`
    return commentToPostIdHtml
}