import PropTypes from "prop-types";

/**
 * Article Component
 * Displays a single blog article with title, date, and preview
 * 
 * Connected Components:
 * - Parent: ArticleList
 * 
 * Props:
 * - title (string): The title of the article
 * - date (string): The publication date of the article
 * - preview (string): A preview/excerpt of the article
 * - minutes (number, optional): Estimated reading time in minutes
 */
function Article({ title, date, preview, minutes }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes && <small>{minutes} min read</small>}
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  minutes: PropTypes.number,
};

export default Article;
