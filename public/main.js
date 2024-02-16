// import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line

import htmlStructure from '../pages/structure';
import header from '../pages/header';
import startSortingBtn from '../components/sortingButton';
import { events } from '../events/DOMevents';

// ********** HTML Components  ********** //
// ********** LOGIC  ********** //

const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
