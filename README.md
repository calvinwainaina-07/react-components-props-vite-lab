# Putting it All Together: Components and Props

## Learning Goals

- Create components that return JSX
- Use props to make components dynamic
- Transform lists of data into lists of components
- Test component rendering with different props
- Document component hierarchy and connections

## Overview

This project is a static blog site built in React to practice building components, writing JSX, and passing down data as props.

We're creating a personal blog site similar to [Dan Abramov's Overreacted](https://overreacted.io/).

## Getting Started

### Installation & Setup

1. Clone the repository and navigate to the project directory:
   ```bash
   cd react-components-props-vite-lab
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Running Tests

To run all tests in watch mode:
```bash
npm test
```

To run tests once:
```bash
npm test -- --run
```

To run a specific test file:
```bash
npm test -- src/__tests__/Header.test.jsx --run
```

### Building for Production

```bash
npm run build
```

## Component Hierarchy

```
App
├── Header
├── About
└── ArticleList
    └── Article (renders once for each post)
```

## Components Documentation

### App Component
**Location:** `src/components/App.jsx`

Main application component that renders the blog layout.

**Connected Components:**
- Children: Header, About, ArticleList

**Responsibilities:**
- Imports blog data from `src/data/blog.js`
- Passes blog data as props to child components

### Header Component
**Location:** `src/components/Header.jsx`

Displays the blog header with the blog name.

**Connected Components:**
- Parent: App

**Props:**
- `name` (string): The name of the blog to display

**JSX Structure:**
```jsx
<header>
  <h1>{name}</h1>
</header>
```

**Tests:** [Header.test.jsx](src/__tests__/Header.test.jsx)
- Renders a `<header>` element
- Renders an `<h1>` with the blog name
- Displays different names when props change

### About Component
**Location:** `src/components/About.jsx`

Displays the blog logo and description.

**Connected Components:**
- Parent: App

**Props:**
- `image` (string, optional): URL of the blog logo image (defaults to placeholder)
- `about` (string): Description text for the blog

**JSX Structure:**
```jsx
<aside>
  <img src={image} alt="blog logo" />
  <p>{about}</p>
</aside>
```

**Features:**
- Default placeholder image: `https://via.placeholder.com/215`
- Accessible image with `alt` attribute

**Tests:** [About.test.jsx](src/__tests__/About.test.jsx)
- Renders an `<aside>` element
- Renders an `<img>` with alt text
- Uses placeholder when no image provided
- Updates content when props change

### ArticleList Component
**Location:** `src/components/ArticleList.jsx`

Displays a list of all blog articles.

**Connected Components:**
- Parent: App
- Children: Article (renders one for each post)

**Props:**
- `posts` (array): Array of article objects with `id`, `title`, `date`, `preview`, and `minutes`

**JSX Structure:**
```jsx
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
```

**Key Features:**
- Maps over the posts array
- Assigns unique keys to each Article component
- Renders a separate Article component for each post

**Tests:** [ArticleList.test.jsx](src/__tests__/ArticleList.test.jsx)
- Renders a `<main>` element
- Renders multiple article elements
- Handles empty posts array

### Article Component
**Location:** `src/components/Article.jsx`

Displays a single blog article with title, date, and preview.

**Connected Components:**
- Parent: ArticleList

**Props:**
- `title` (string): The title of the article
- `date` (string): The publication date of the article
- `preview` (string): A preview/excerpt of the article
- `minutes` (number, optional): Estimated reading time in minutes

**JSX Structure:**
```jsx
<article>
  <h3>{title}</h3>
  <small>{date}</small>
  <p>{preview}</p>
  {minutes && <small>{minutes} min read</small>}
</article>
```

**Tests:** [Article.test.jsx](src/__tests__/Article.test.jsx)
- Renders an `<article>` element
- Renders an `<h3>` with the title
- Renders a `<small>` with the date
- Renders a `<p>` with the preview
- Conditionally renders reading time

## Data Structure

Blog data is stored in `src/data/blog.js`:

```javascript
{
  name: "Blog Name",
  image: logoImage,
  about: "Blog description",
  posts: [
    {
      id: 1,
      title: "Article Title",
      date: "Month DD, YYYY",
      preview: "Article preview text",
      minutes: 5
    },
    // ... more posts
  ]
}
```

## Testing

All components have comprehensive test coverage:

- **16 tests total** across 5 test files
- Tests verify component rendering
- Tests verify prop-based content updates
- All tests pass ✓

Run tests with `npm test -- --run` to see all test results.

## Project Structure

```
src/
├── components/
│   ├── App.jsx          # Main app component
│   ├── Header.jsx       # Blog header
│   ├── About.jsx        # Blog info sidebar
│   ├── ArticleList.jsx  # Article list container
│   └── Article.jsx      # Individual article
├── __tests__/
│   ├── App.test.jsx
│   ├── Header.test.jsx
│   ├── About.test.jsx
│   ├── ArticleList.test.jsx
│   ├── Article.test.jsx
│   └── setup.jsx        # Test configuration
├── data/
│   └── blog.js          # Blog data
├── assets/
│   └── logo.js          # Logo image import
├── index.css            # Global styles
└── main.jsx             # Application entry point
```

## Key Concepts Practiced

✓ **Component Creation:** Building reusable React components  
✓ **Props:** Passing data down through component hierarchy  
✓ **Array Mapping:** Rendering lists of data as components  
✓ **Conditional Rendering:** Showing/hiding elements based on props  
✓ **Default Props:** Using default values when props aren't provided  
✓ **Testing:** Writing tests to verify component behavior  
✓ **Documentation:** Explaining component functionality and connections  

## Deliverables

All deliverables have been completed:

✅ **Task 1:** Component tree designed  
✅ **Task 2:** Component hierarchy determined  
✅ **Task 3:** All components created with proper connections  
✅ **Task 4:** Manual testing verified (run `npm run dev`)  
✅ **Task 4:** Jest tests created for all components  
✅ **Task 5:** Components documented with descriptions  
✅ **Task 5:** README updated with setup instructions  
✅ **Task 5:** Code comments added to each component  

## Manual Testing Checklist

When running `npm run dev`:

- [ ] Blog header displays with correct name
- [ ] About section shows logo and description
- [ ] All articles display in the main section
- [ ] Each article shows title, date, and preview
- [ ] Reading time displays for articles with minutes
- [ ] Content updates dynamically from props

## Bonus Feature: Minutes to Read

The Article component displays reading time:
- Shows "{minutes} min read" when minutes prop is provided
- Conditionally renders only if minutes prop exists

## License

This project is part of a React learning lab.

