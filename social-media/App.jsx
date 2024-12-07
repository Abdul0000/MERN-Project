
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/PostListStore';

function App() {
  let [selectedTab,setSelectedTab] = useState('Home');

  const onClickButton = (btnText) =>{
    setSelectedTab(btnText)
  }

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab = {selectedTab} onClickButton={onClickButton}/>
        <div className='content'>
        <Header/>
        {selectedTab === 'Home' ? (<PostList/>) : (<CreatePost/>)}
        <Footer/>
        </div>
        
      </div>
    </PostListProvider>
  )
}

export default App
