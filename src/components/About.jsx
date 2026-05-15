import PropTypes from "prop-types";

/**
 * About Component
 * Displays the blog logo and description
 * 
 * Connected Components:
 * - Parent: App
 * 
 * Props:
 * - image (string): URL of the blog logo image (defaults to placeholder)
 * - about (string): Description text for the blog
 */
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string.isRequired,
};

export default About;
