import renderToDOM from '../utils/renderToDom';

// pages - html structure
const htmlStructure = () => {
  const domString = `
    <div id="header-container" class="header mb-3"></div>
    <div id="form-container" class="container mb-3 text-center"></div>
    <div id="filter-container" class="container mb-3"></div>
    <div id="student-container" class="container d-flex"></div>
    `;

  renderToDOM('#app', domString);
};

export default htmlStructure;
