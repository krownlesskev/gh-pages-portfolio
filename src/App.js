import ProjectCard from "./components/cards/ProjectCard";
import { AppContainer } from "./components/containers/AppContainer.style";
import { ContentContainer } from "./components/containers/ContentContainer.style";
import { Navbar } from "./components/containers/Navbar.style";
import { ProjectsContainer } from './components/containers/ProjectsContainer.style';

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <Navbar>
          <p>Kevin Sana</p>
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </Navbar>
        <div className="main-container">
          <p className="main-text">Hello. My name is Kevin Sana.<br />
            Front End Developer with experience <br />
            building web applications with Javascript / ReactJs / NodeJs <br />
            and plenty of other libraries and frameworks. <br /><br />
            I also have some Back End experience <br /> writing my own custom API endpoints and servers.</p>
          <ProjectsContainer>
            <p className="main-text centered">Projects</p>
            <div className="card-container">
              <ProjectCard
                title='Crud-App'
                img='https://picsum.photos/300/200'
                tech='Mongoose / Express/ React / NodeJs (MERN)'
                desc='Used this project to learn how to write my own API routes and deploy a web app to production'
                demo='https://krownlesskev.github.io/crud-app/'
              />
              <ProjectCard
                title='Crud-App'
                img='https://picsum.photos/300/200'
                tech='Mongoose / Express/ React / NodeJs (MERN)'
                desc='Used this project to learn how to write my own API routes and deploy a web app to production'
              />
              <ProjectCard
                title='Crud-App'
                img='https://picsum.photos/300/200'
                tech='Mongoose / Express/ React / NodeJs (MERN)'
                desc='Used this project to learn how to write my own API routes and deploy a web app to production'
              />
            </div>
          </ProjectsContainer>
        </div>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
