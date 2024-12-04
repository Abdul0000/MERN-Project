import {useContext} from 'react'
import { PostList } from '../store/PostListStore';
import { MdDeleteForever } from "react-icons/md";
const Post = ({post}) => {
  const {deletePost} = useContext(PostList)
  return(<div className="card" style= {{width: "30rem"}}>
      <div className="card-body">
        <h5 className="card-title">{post.title} 
        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
        <MdDeleteForever />
        </span></h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => <span className="text-bg-primary tag-style" key={tag}>{tag}</span>)}
        <div className="alert alert-success" role="alert">
          This post have {post.reactions} reactions !
        </div>
      </div>
    </div>)
}

export default Post