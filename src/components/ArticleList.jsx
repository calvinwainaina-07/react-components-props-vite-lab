import PropTypes from "prop-types";
import Article from "./Article";

/**
 * ArticleList Component
 * Displays a list of all blog articles
 * 
 * Connected Components:
 * - Parent: App
 * - Children: Article (renders one for each post)
 * 
 * Props:
 * - posts (array): Array of article objects with id, title, date, preview, and minutes
 */
function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      preview: PropTypes.string.isRequired,
      minutes: PropTypes.number,
    })
  ).isRequired,
};

export default ArticleList;
