import './App.css';
import animalData from './data.js';
import Header from './header.js';
import ImageList from './image-list.js';

function App() {

  // state = {

  // }

  return (
    <div>
      <select>
        <option value="1">
          1 horn
        </option>
        <option value="2">
          2 horns
        </option>
        <option value="3">
          3 horns
        </option>
        <option value="100">
          Too many horns
        </option>
      </select>

      <Header />
      <ImageList animal={animalData} />
    </div>
  );
}

export default App;
