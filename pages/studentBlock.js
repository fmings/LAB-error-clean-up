import renderToDOM from '../utils/renderToDom';

// pages - student block
const studentAreas = () => {
  const domString = `<div id="students">No Students</div>
  <div id="voldy">No Death Eaters</div>`;

  renderToDOM('#student-container', domString);
};

export default studentAreas;
