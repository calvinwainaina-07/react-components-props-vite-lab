import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

/**
 * App Component
 * Main application component that renders the blog layout
 * 
 * Connected Components:
 * - Children: Header, About, ArticleList
 * 
 * This component manages the overall blog structure and passes
 * blog data down to child components as props.
 */
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
