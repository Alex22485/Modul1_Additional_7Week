import {URL_coments} from '../util/URL/url_c.js'
import {URL_posts} from '../util/URL/url_posts.js'
import {postHtml} from '../util/PostHtml/postHtml.js'
import {getCommentToPostIdHtm} from '../util/CommentHtml/commentHtml.js'


export const renderPost = async (postId) => {

    try{

        // находим пост по id
        const response_posts = await fetch(`${URL_posts}/${postId}`)
        if (!response_posts.ok){
            throw new Error('Ошибка запроса постов')
        }
        // декодирование поста в объект
        const postID = await response_posts.json()
        console.log('postID.title: ', postID);

        // находим комментарии к посту по id
        const responsePostComments = await fetch(`${URL_coments}=${postId}`)  

        if(!responsePostComments.ok){
            throw new Error('Ошибка запроса коментариев к посту')
        }
        // декодирование комментариев к посту по id
        const commentToPostId = await responsePostComments.json()
        
        // view html
        document.body.insertAdjacentHTML('beforeend', postHtml(postID))

        const postComment = document.querySelector('.post-comment')

        commentToPostId.forEach(user => {
            const comment =  getCommentToPostIdHtm (user.email, user.body)
            postComment.insertAdjacentHTML('beforeend', comment)
        });
    }

    catch(e){
        console.log('e', e);
    }

   
}