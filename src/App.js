import ProjectCard from "./components/cards/ProjectCard";
import { AppContainer } from "./components/containers/AppContainer.style";
import { ContentContainer } from "./components/containers/ContentContainer.style";
import { Navbar } from "./components/containers/Navbar.style";
import { ProjectsContainer } from './components/containers/ProjectsContainer.style';
import ss1 from './assets/crud-app.png';
import ss2 from './assets/weather-app.png';
import ss3 from './assets/dashboard.png';

function App() {
  return (
    <AppContainer>
      <ContentContainer>
        <Navbar>
          <p>Kevin Sana</p>
          <ul>
            <li><a href="https://github.com/krownlesskev" target='_blank' rel='noreferrer' >Github</a></li>
            <li><a href="https://www.linkedin.com/in/kevin-sana-a2533b16b/" target='_blank' rel='noreferrer' >LinkedIn</a></li>
            <li><a href="mailto:kevin.sana@outlook.com">Email</a></li>
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
                img={ss1}
                tech='Mongoose / Express/ React / NodeJs (MERN)'
                desc='Web application that allowed me to learn how to write my own API endpoints'
                demo='https://krownlesskev.github.io/crud-app/'
              />
              <ProjectCard
                title='Weather-App'
                img={ss2}
                tech='React / Axios / Sass'
                desc='Web Applictation that fetches data from a public API'
                demo='https://krownlesskev.github.io/weather-app/'
              />
              <ProjectCard
                title='Admin Dashboard'
                img={ss3}
                tech='React / Sass'
                desc='StatiC Web Page that replicates an admin dashboard'
                demo='https://krownlesskev.github.io/project-admin-dashboard/'
              />
            </div>
          </ProjectsContainer>
        </div>
      </ContentContainer>
    </AppContainer>
  );
};

export default App;
