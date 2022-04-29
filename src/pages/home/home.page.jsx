import './home.styles.scss';

const HomePage = () => {
    return (
        <div className='home-container'>
            <div className='hero-container'>
                <h1><span>KEVINSANA</span>.COM</h1>
            </div>

            <div className='hero-main'>
                <p>Hi! My name is Kevin Sana, and I am a Winnipeg-based front-end developer.</p>
                <p>I am proficient in React but I am open to learning and using different frameworks. I also enjoy
                working with API's and even designing my own API endpoints. Although this hardly qualifies me as 
                a full-stack developer, I am definitely working my way towards it.</p>
            </div>
        </div>
    );
};

export default HomePage;