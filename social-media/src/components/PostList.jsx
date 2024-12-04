import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/PostListStore";
import FetchAPiPosts from "./ApiPosts";
import Loading from "./Loading";

const PostList = () => {
    const { postList, PostApi } = useContext(PostListData);
    console.log(postList)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((data) => {
                PostApi(data.posts);
                setLoading(false);  
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false); 
            });
    return () => {
        console.log('cleaning effect')
    }}, []);

    return (
        <>
            {loading && <Loading />}
            {!loading && postList.length === 0 && <FetchAPiPosts />}
            {!loading && postList.map((post) => <Post key={post.id} post={post} />)}
        </>
    );
};

export default PostList;
