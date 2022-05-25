# michaelarnold.io

This project is a portfolio website that is meant to showcase my professional,
academic, and personal endeavors. Accessible from the home page are: project,
bio, zettels, and contact pages.

## Technologies
- HTML5
- CSS3
- JavaScript
- GSAP

## Directory Structure/Navigation
All assets of the website abide by the following rules:

- Each page contains two CSS files; "styles.css" handles component styling and
global styles, "page_name.css" contains page specific styling.

- Each page loads multiple JS files; "component_name.js" is reserved for
reusable components across the site, "main.js" handles modules and functions.

- The "main.js" file imports dependencies from the ./js/modules directory. Note
that "main.js" does not contain any documentation for its imports; to see module
specific documentation, please view the file located at the import path.

```
.
|-- index.html
|-- work.html
|-- about.html
|-- contact.html
|-- zettels
|   |-- zettels.html
|   |-- {ZETTEL_ID}.html
|   |-- ...
|
|-- js
|    |-- main.js
|    |-- data
|    |   |-- Zettels.js
|    |
|    |-- modules
|    |   |-- MobileNavbarView.js
|    |   |-- Typewriter.js
|    |   |-- HeroGSAP.js
|    |   |-- EmailContactService.js
|    |   |-- Zettelkasten.js
|    |
|    |-- components
|        |-- Header.js
|        |-- Footer.js
|
|-- css
|   |-- styles.css
|   |-- index.css
|   |-- work.css
|   |-- about.css
|   |-- contact.css
|   |-- zettels.css
|   |-- zettel.css
|
|-- img
|   |-- github.svg
|   |-- linkedin.svg
|   |-- ...
|
|-- resources
|   |-- resume.pdf
|   |-- favicon.ico
|
|-- README.md
|-- .gitignore
```

## Hosting
The hosting and SSL for this project are provided by Netlify.

## Contributors
@author: Michael Arnold \
@contact: me@michaelarnold.io

## License
Copyright © 2022 Michael Arnold

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
