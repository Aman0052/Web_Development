import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pageination from "./Components/Pageination";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/App_Context";


export default function App() {
  const{fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  
  return (
  
  <div className="AD">
    <Header/>
    <Blogs/>
    <Pageination/>
  </div>
  
  );
}
