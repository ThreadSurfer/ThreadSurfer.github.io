import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Banner from './components/Banner';
import Project from './components/Project';
import Bio from './components/Bio';
import { getData } from "./data";

const data = getData();

function App() {
  return (
    <div className="App">
      <Banner />
      <Bio />

      <div className='hidden container-md'>
      </div>

      <div id="projectsContainer">
            <h1 id="projectsHead">Projects</h1>
            <div className='projectList'>
              {data.map((project) => {
                  return(
                  <Project key={project.id} id={project.id} name={project.name} languages={project.languages} description={project.description} programs={project.programs} image = {project.image} platforms={project.platforms} />
                  )
              })}
          </div>
        </div>
        
    </div>
  );
}

export default App;
