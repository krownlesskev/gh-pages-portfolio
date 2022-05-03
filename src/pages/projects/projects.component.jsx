import './projects.styles.scss';

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
                    img='https://via.placeholder.com/250x200'
                    desc='Application that uses the openweather API and displays
                a 5 day forecast. Location is hardcoded to Winnipeg, MB.'
                    demo='https://krownlesskev.github.io/weather-app/'
                    git='https://github.com/krownlesskev/weather-app'
                />
                <ProjectCard
                    title='Weather App'
                    img='https://via.placeholder.com/250x200'
                    desc='Application that uses the openweather API and displays
                a 5 day forecast. Location is hardcoded to Winnipeg, MB.'
                    demo='https://krownlesskev.github.io/weather-app/'
                    git='https://github.com/krownlesskev/weather-app'
                />
                <ProjectCard
                    title='Weather App'
                    img='https://via.placeholder.com/250x200'
                    desc='Application that uses the openweather API and displays
                a 5 day forecast. Location is hardcoded to Winnipeg, MB.'
                    demo='https://krownlesskev.github.io/weather-app/'
                    git='https://github.com/krownlesskev/weather-app'
                />
            </div>
        </div>
    );
};

export default ProjectsPage;

