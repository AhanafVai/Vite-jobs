![](./screenshot/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
    - [Installation](#installation)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt).

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Links

- Solution URL: [Code](https://github.com/AhanafVai/Vite-jobs)
- Live Site URL: [live site](https://vite-jobs.vercel.app)

## Installation

Install my-project with npm

```bash
npx degit user/project vite-jobs
cd vite-jobs

npm install
npm run dev
```

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Following are the lessons I learned through this project.

- Media quer using SCSS
- React Context API
- filter functionality
- Props destructuring

```SCSS
/* centering position */
.search {
  position: absolute;
  left: 50%;
  &__bar {
    position: relative;
    top: -10px;
    left: -50%;
    width: 330px;
    height: auto;
    background-color: white;
    border: none;
    border-radius: 5px;
  }
}
```

```js
const [item, setItem] = useState(Data);
const [filterKeywords, setFilterKeywords] = useState([]);
const [filteredData, setFilteredData] = useState([]);

// filter job
const modifiedData = () => {
  if (filterKeywords) {
    const newData = item.filter((d) => {
      return filterKeywords.every((key) => {
        return (
          d.role === key ||
          d.level === key ||
          d.languages.includes(key) ||
          d.tools.includes(key)
        );
      });
    });
    setFilteredData(newData);
  } else {
    setFilteredData(item);
  }
};

useEffect(() => {
  modifiedData();
}, [filterKeywords]);
```

## Author

- Github - [Ahanaf](https://github.com/AhanafVai)
- Frontend Mentor - [@AhanafVai](https://www.frontendmentor.io/profile/AhanafVai)
- Twitter - [@Ahanafabdullah1](https://twitter.com/Ahanafabdullah1)

## Acknowledgments

[Coder Code](https://www.youtube.com/c/TheCoderCoder)
