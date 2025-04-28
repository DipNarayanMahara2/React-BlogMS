import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/auth/LoginSignupForm/Register";
import Login from "./Pages/auth/LoginSignupForm/Login";
import BlogCard from "./Pages/components/BLogCard/BlogCard";
import CreateBlog from "./Pages/AddBlog/CreateBlog";
import EditBlog from "./Pages/AddBlog/EditBlog";
import SingleBlogPage from "./Pages/SingleBlogPage";
import { Provider } from "react-redux";
import store from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/add" element={<CreateBlog />} />
          <Route path="/blog/edit" element={<EditBlog />} />
          <Route path="/card" element={<BlogCard />} />
          <Route path="/blog/id" element={<SingleBlogPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
