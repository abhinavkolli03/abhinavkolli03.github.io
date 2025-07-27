import React from 'react';
import '../styles/Projects.css'
import {AiFillGithub, AiOutlineLink} from 'react-icons/ai'
import algorimage from '../media/projects/algorimage_ss.png'
import stockbot from '../media/projects/stock_bot.png'
import personal_site from '../media/projects/personal-site_ss.png'
import messenger from '../media/projects/Messenger.png'
import taskly from '../media/projects/taskly.png'
import webcrawler from "../media/projects/webcrawler.png"
import board from "../media/projects/2048.png"
import senpi from "../media/projects/SENPI.png"
import snake from "../media/projects/snakeAI.png"
import adrn from "../media/projects/adrn.jpg"
import bucketlist from "../media/projects/bucketlist.png"
import shome from "../media/projects/shome.jpg"
import tetris from "../media/projects/tetris.png"
import vlogmi from "../media/projects/vlogmi.jpeg"
import discountai from "../media/projects/discountai.png"

const Projects = () => {
    const projectsList = [
        {
            id: 0,
            image: discountai,
            title: 'Discount.ai',
            description: 'Finalist at HackMIT. Created webapp that generates Excel discounted cash flows from finance API. Vectorized DCF Excel inputs with LangChain and trained LLMs to provide users discussions with chatbot on investment projections.',
            github: 'https://github.com/abhinavkolli03/discount.ai',
            demo: '',
            demo_present: false,
            skillsList: ['React', 'JavaScript', 'Python', 'Flask', 'Vertex AI', 'LangChain', 'Pinecone', 'OpenAI']
        },
        {
            id: 1,
            image: bucketlist,
            title: 'Bucket List',
            description: 'Startup idea to provide simplistic interface to auto-generate, manually create, or find existing itineraries to plan your trips easily under a social network.',
            github: 'https://github.com/abhinavkolli03/bucketlist',
            demo: '',
            demo_present: false,
            skillsList: ['React', 'MongoDB', 'Node.js', 'Express.js', 'Tailwind CSS', 'AWS', 'OpenAI']
        },
        {
            id: 2,
            image: board,
            title: 'Gamai: 2048 AI',
            description: 'Crafted DQN agent to live train against cloned version of 2048 game using OpenAI and Keras and succeeds in less than 500 trials.',
            github: 'https://github.com/abhinavkolli03/2048AI',
            demo: '',
            demo_present: false,
            skillsList: ['Python', 'Flask', 'React.js', 'Tensorflow-Keras', 'OpenAI Gym']
        },      
        {
            id: 3,
            image: shome,
            title: 'ShoMe E-learning Platform',
            description: 'Worked with ShoMe founders on building e-learning startup\'s landing, home, and search screens using React Native, Firestore, and OAuth2 social login providers for user validation.',
            github: 'https://github.com/abhinavkolli03/ShoMeInterface-Development',
            demo: 'https://www.shome.how/',
            demo_present: true,
            skillsList: ['React Native', 'Firestore', 'OAuth2', 'Redux']
        },
        {
            id: 4,
            image: adrn,
            title: 'ADRN Check-In App',
            description: 'Consulted under Austin Disaster Relief Network to create a QR-code scanning app to check-in and register volunteers.',
            github: 'https://github.com/abhinavkolli03/ADRCheckInApp',
            demo: '',
            demo_present: false,
            skillsList: ['React Native', 'Envoy', 'Redux']
        },
        {
            id: 5,
            image: vlogmi,
            title: 'VlogMi Vlog Application',
            description: 'Worked with VlogMi founders on building social media startup\'s React Native application. Enhanced monetization interface with Figma designs and Wagmi charts.',
            github: 'https://github.com/abhinavkolli03/VlogMi-Monetization',
            demo: 'https://www.vlogmi.com/',
            demo_present: true,
            skillsList: ['React Native', 'Swift', 'Wagmi', 'Redux', 'AWS']
        },
        {
            id: 6,
            image: stockbot,
            title: 'The Stock Bot',
            description: 'A Tensroflow Keras DQN bot that took in an ARIMA-LSTM model\'s results and simulated when it would trade, buy, or sell stocks through reinforcement learning.',
            github: 'https://github.com/abhinavkolli03/StockBot-Research',
            demo: 'https://github.com/abhinavkolli03/StockBot-Research/blob/main/Final%20Research%20Paper.pdf',
            demo_present: true,
            skillsList: ['python', 'numpy', 'pandas', 'Tensorflow-Keras']
        },  
        {
            id: 7,
            image: webcrawler,
            title: 'Webcrawler & Search Engine',
            description: 'Webcrawler capable of traversing parsed HTML pages and storing them into efficient web indices. Additionally, there is a GUI search engine users can test queries and receive crawled site links.',
            github: 'https://github.com/abhinavkolli03/webcrawler-search',
            demo: '',
            demo_present: false,
            skillsList: ['Java', 'JavaFX', 'JUnit']
        },
        {
            id: 8,
            image: senpi,
            title: 'SPI: Sentiment Analysis API',
            description: 'Trained and documented sentiment analysis api\'s results of various binary classification models with an airline\’s reviews dataset.',
            github: 'https://github.com/abhinavkolli03/sentiment-analysis-api-project',
            demo: 'https://vimeo.com/734881463',
            demo_present: true,
            skillsList: ['Python', 'FastAPI', 'sklearn', 'Pyramid-swagger']
        },
        {
            id: 9,
            image: algorimage,
            title: 'Algorimage: Pathfinder',
            description: 'A pathfinding visualizer that tests various algorithms (A*, Djikstra, Greedy, BFS, DFS) under different heuristics. The user can also change end points, add/randomize walls, and increase wall density.',
            github: 'https://github.com/abhinavkolli03/Algorimage-master',
            demo: '',
            demo_present: false,
            skillsList: ['react.js', 'HTML', 'CSS', 'JS']
        },
        {
            id: 10,
            image: tetris,
            title: 'Tetris Algorithm',
            description: 'School project focused on data structures skills when creating Tetris game. Also designed a Tetris algorithm to play the game ',
            github: 'https://github.com/abhinavkolli03/TetrisAI-Agent',
            demo: '',
            demo_present: false,
            skillsList: ['Java', 'JUnit', 'JavaFX']
        },
        {
            id: 11,
            image: snake,
            title: 'Snake AI',
            description: 'Built experimental interface for Q-learning agent to play Snake with adjustable hyperparameters and achieved length 65 in 400 trials.',
            github: 'https://github.com/abhinavkolli03/SnakeAI',
            demo: '',
            demo_present: false,
            skillsList: ['Python', 'Pygame']
        },
        {
            id: 12,
            image: taskly,
            title: 'Taskly',
            description: 'A typescript, react, and redux-based CRUD-command application that allows users to save, edit, and report tasks in a checklist format.',
            github: 'https://github.com/abhinavkolli03/taskly',
            demo: 'https://taskly-manager.herokuapp.com/',
            demo_present: true,
            skillsList: ['Typescript', 'react.js', 'redux', 'HTML', 'CSS']
        },
        {
            id: 13,
            image: personal_site,
            title: 'Personal Website V1',
            description: 'My personal website that\'s used to display my portfolio and resume in more detail. I hope to make improvements using different frameworks in the future.',
            github: 'https://github.com/abhinavkolli03/abhinavkolli03.github.io',
            demo: 'https://abhinavkolli03.github.io/',
            demo_present: true,
            skillsList: ['react.js', 'HTML', 'CSS', 'JS', 'Styled-Components', 'Firebase', 'Firestore Database']
        },
        {
            id: 14,
            image: messenger,
            title: 'Messenger: 2D Ship Game',
            description: 'A videogame where the the user, or messenger, must carry a message to home base, while traversing through three rounds of enemy ships, asteroids, and bosses.',
            github: 'https://github.com/abhinavkolli03/MessengerGame',
            demo: '',
            demo_present: false,
            skillsList: ['C#', 'VSCode']
        },
    ]

	return(
        <section style={{background: 'linear-gradient(#e83b36, #bb5c06)', paddingBottom: '2rem'}}  id="projects">
            <h1 style={{marginTop: '-60px'}} data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">Projects</h1>
            <div className="container">
                <h5 data-aos="fade-zoom-in" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400" className="h5_subtitle">Below you can find a selection of personal or professional projects I've been working on. For these, you can check out both the code and a possible live link of the project. To date, I've completed <b>{projectsList.length}</b> projects.</h5>
                <div className="projects__container">
                    {projectsList.map(({id, image, title, description, github, demo, demo_present, skillsList}) => {
                        if(demo_present) {
                            return(
                                <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" key={id} className="projects__item">
                                    <div className="projects__item-image">
                                        <img src={image} alt={title} />
                                    </div>
                                    <h4 className="projects__item-title"><b>{title}</b></h4>
                                    <h5 className="projects__item-title">{description}</h5>
                                    <div className="projects__skills-tech-stack">
                                        {skillsList.map(skill => {
                                            return(
                                                <div className="projects__skill">
                                                    <p style={{color: 'white'}}>{skill}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='projects__item-buttons'>
                                        <a href={github} target='_blank'><AiFillGithub size={30}/></a>
                                        <a href={demo} target='_blank'><AiOutlineLink size={30}/></a>
                                    </div>
                                </article>
                            );
                        }
                        return(
                            <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" key={id} className="projects__item">
                                <div className="projects__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h4 className="projects__item-title"><b>{title}</b></h4>
                                <h5 className="projects__item-title">{description}</h5>
                                <div className="projects__skills-tech-stack">
                                    {skillsList.map(skill => {
                                        return(
                                            <div className="projects__skill">
                                                <p style={{color: 'white'}}>{skill}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className='projects__item-buttons'>
                                    <a href={github} target='_blank'><AiFillGithub size={30}/></a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default Projects;