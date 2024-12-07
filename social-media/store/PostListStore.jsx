import {createContext, useReducer } from 'react';
export const PostList = createContext({
    postList : [],
    PostApi : () => {},
    addPost : () => {},
    deletePost : () => {},

})

const PostListReducer = (currPostList, action) =>{
    let newPostList = currPostList
    if (action.type === 'DELETE_POST'){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }
    else if (action.type === 'ADD_SERVER_POSTS'){
        // console.log(action.payload.posts[0])
        newPostList = action.payload.posts.map(post => {
            const { reactions, ...postWithoutReactions } = post;
            return postWithoutReactions;
        });
    }
    else if (action.type === 'ADD_POST'){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({children}) =>{
    const [postList,dispatchPostList] = useReducer(PostListReducer,[])
    const addPost = (userIdVal,postTitleVal,postContentVal,reactionsVal,tagsVal) => {
        // console.log(`${userIdVal}, ${postTitleVal}, ${postContentVal}, ${reactionsVal}, ${tagsVal}`);
        dispatchPostList({
            type:'ADD_POST',
            payload:{
                id:Date.now(),
                userId:userIdVal,
                title:postTitleVal,
                body:postContentVal,
                reactions:reactionsVal,
                tags:tagsVal
            }
        })
    };
    const deletePost = (postId) => {
        dispatchPostList(
            {
                type:'DELETE_POST',
                payload : {
                    postId
                }
            }
        )
    }
    const PostApi = (posts) => {
        dispatchPostList(
            {
                type:'ADD_SERVER_POSTS',
                payload : {
                    posts
                }
            }
        )
    }

    return (<PostList.Provider value ={{postList,PostApi,addPost,deletePost}}>
        {children}
    </PostList.Provider>)
}

export default PostListProvider