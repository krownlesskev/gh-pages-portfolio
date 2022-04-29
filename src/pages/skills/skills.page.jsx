import './skills.styles.scss';

const SkillsPage = () => {
    return (
        <div className='skills-container'>
            <div className="skills-box">
                <ul>
                    <p>Front-End</p>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavsScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>React Redux</li>
                    <li>React Router Dom</li>
                    <li>Gatsby</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                    <li>Material-UI</li>
                    <li>Styled-Components</li>
                </ul>
                <ul>
                    <p>Back-End</p>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>Mongoose</li>
                    <li>MongoDb</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
    );
};

export default SkillsPage;