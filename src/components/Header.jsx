import PropTypes from "prop-types";

/**
 * Header Component
 * Displays the blog header with the blog name
 * 
 * Connected Components:
 * - Parent: App
 * 
 * Props:
 * - name (string): The name of the blog to display
 */
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
