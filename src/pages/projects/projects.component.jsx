import './projects.styles.scss';
import image1 from '../../assets/hatchways.png';
import image2 from '../../assets/chinup.png';
import image3 from '../../assets/smartbrain.png';

const ProjectCard = ({ title, desc, demo, git, img }) => {
    return (
        <div className='card'>
            <h1>{title}</h1>
            <img src={img} alt={img} />
            <p>{desc}</p>
            <div className='card-links'>
                <a href={demo} target='_blank' rel='noreferrer'>Demo</a>
                <a href={git} target='_blank' rel='noreferrer'>GitHub</a>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    return (
        <div className='projects-page-container'>
            <div className='card-container'>
                <ProjectCard
                    title='Weather App'
                    img={image1}
                    desc='Application that uses the openweather API and displays
                a 5 day forecast. Location is hardcoded to Winnipeg, MB.'
                    demo='https://krownlesskev.github.io/weather-app/'
                    git='https://github.com/krownlesskev/weather-app'
                />
                <ProjectCard
                    title='Mental Health Awareness App'
                    img={image2}
                    desc='Generates random excuses and also has other resources(WIP)
                     for mental health awareness.'
                    demo='https://krownlesskev.github.io/chin-up/'
                    git='https://github.com/krownlesskev/chin-up'
                />
                <ProjectCard
                    title='Facial Recognition App'
                    img={image3}
                    desc='Full stack application that detects faces in uploaded
                    images and draws a box around the face.'
                    demo='https://krownless-smart-brain.herokuapp.com/'
                    git='https://github.com/krownlesskev/FaceRecognitionBrain'
                />
            </div>
        </div>
    );
};

export default ProjectsPage;

