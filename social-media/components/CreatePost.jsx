import { useRef,useContext } from "react";
import {PostList} from "../store/PostListStore";

const CreatePost = () => {
  const {addPost} = useContext(PostList)
  const userId = useRef()
  const postTitle = useRef()
  const postContent = useRef()
  const reactions = useRef()
  const tags = useRef()

  const onSubmitHandle= (e)=>{
    e.preventDefault()
    const userIdVal = userId.current.value
    const postTitleVal = postTitle.current.value
    const postContentVal = postContent.current.value
    const reactionsVal = reactions.current.value
    const tagsVal = tags.current.value.split(' ')

    userId.current.value=''
    postTitle.current.value=''
    postContent.current.value=''
    reactions.current.value=''
    tags.current.value=''
    addPost(userIdVal,postTitleVal,postContentVal,reactionsVal,tagsVal)
  }
  return (
      <form className="create-post" onSubmit={onSubmitHandle}>
          <div className="mb-3">
              <label htmlFor="userId" className="form-label">Enter User Id</label>
              <input type="text" ref={userId} className="form-control" id="userId" placeholder="Eneter User Id "/>
          </div>
          <div className="mb-3">
              <label htmlFor="title" className="form-label">Post Title</label>
              <input type="text" ref={postTitle} className="form-control" id="title" placeholder="Enter Post Title"/>
          </div>
          <div className="mb-3">
              <label htmlFor="body" className="form-label">Post Content</label>
              <textarea rows="4" ref={postContent} className="form-control" id="body" placeholder="Enter Post Content"/>
          </div>
          <div className="mb-3">
              <label htmlFor="reactions" className="form-label">Post Reactions</label>
              <input type="text" ref={reactions} className="form-control" id="reactions" placeholder="Enter Reactions"/>
          </div>
          <div className="mb-3">
              <label htmlFor="tags" className="form-label">Tags</label>
              <input type="text" ref={tags} className="form-control" id="tags" placeholder="Please Enter your tags using space"/>
          </div>
          <button type="submit" className="btn btn-primary">Post</button>
      </form>
  );
}

export default CreatePost;
