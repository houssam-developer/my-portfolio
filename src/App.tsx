
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    MdEmail, MdPhone, MdViewInAr, MdHome, MdPerson, MdWork,
    MdOutlineCode, MdWeb, MdOutlineConstruction, MdContacts, MdChat, MdLaptop,
    MdOutlinePhonelink, MdDns, MdCode, MdOutlineSettingsApplications, MdBackup, MdOutlineExitToApp,
    MdAspectRatio, MdDevicesOther, MdFileDownload, MdSend, MdClear, MdKeyboardArrowUp, MdSubject, MdOutlineCheckCircle, MdClose, MdOutlineErrorOutline
} from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
    DiCss3, DiJsBadge, DiHtml5, DiSass, DiReact, DiNodejs, DiNpm, DiIntellij, DiVisualstudio, DiWindows,
    DiLinux, DiGithub, DiGit, DiResponsive, DiNodejsSmall, DiMysql, DiSqllite, DiMongodb, DiDebian, DiJava, DiPostgresql

} from "react-icons/di";
import './App.scss';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';


type ProjectType = 'react' | 'vanilla';
type ProjectDescription = {
    type: string,
    tags: string[]
    image: string,
    title: string,
    description: string,
    demoLink: string,
    codeLink: string,
};
const CV_NAME = 'CV_ELATMANI_HOUSSAM_DEVELOPPEUR_WEB_FULLSTACK_94.pdf';
const all: ProjectDescription[] = [
    {
        type: 'react',
        tags: ['React', 'React-Icons', 'Java', 'Spring'],
        image: 'images/challenges/image-uploader.png',
        title: 'Image Uploader Challenge',
        description: 'Choose and upload image to remote server',
        demoLink: 'https://image-uploader-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/image-uploader-backend-java'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons', 'Java', 'Spring'],
        image: 'images/challenges/my-unsplash.png',
        title: 'My Unsplash',
        description: 'Manage multiples images to remote server',
        demoLink: 'https://my-unsplash-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/myunsplash-backend-java'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons'],
        image: 'images/challenges/windbnb.png',
        title: 'WindBnB Challenge',
        description: 'Airbnb has a great UI, it so modern and clean.',
        demoLink: 'https://winbnb-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/windbnb'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons', 'Tailwind'],
        image: 'images/challenges/country-quiz.png',
        title: 'Country Quiz',
        description: 'Quiz about countries and flags using restcountries.com as an API',
        demoLink: 'https://country-quiz-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/country-quiz'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons', 'Tailwind', 'OpenWeatherApi'],
        image: 'images/challenges/weather-app.png',
        title: 'Weather App',
        description: 'A Weather App with multiple options. Using OpenWeather as an API',
        demoLink: 'https://weather-app-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/weather-app'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons'],
        image: 'images/challenges/todo-app.png',
        title: 'Todo App',
        description: 'Todo app is one of the common projects when it comes to practicing coding',
        demoLink: 'https://todo-app-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/todo-app'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons'],
        image: 'images/challenges/my-button.png',
        title: 'Button component',
        description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable button.',
        demoLink: 'https://button-component-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/button-component'
    },
    {
        type: 'react',
        tags: ['React', 'React-Icons'],
        image: 'images/challenges/my-input.png',
        title: 'Input component',
        description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable input.',
        demoLink: 'https://input-component-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/input-component'
    },
    {
        type: 'vanilla',
        tags: ['HTML', 'CSS', 'RESPONSIVE'],
        image: 'images/challenges/edie-homepage.png',
        title: 'Edie Homepage',
        description: 'Homepage is a popular task that a developer has to do. In this challenge, I had to work with a given design and fullfil the user stories.',
        demoLink: 'https://edie-homepage-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/edit-homepage'
    },
    {
        type: 'vanilla',
        tags: ['HTML', 'CSS', 'RESPONSIVE'],
        image: 'images/challenges/my-checkout.png',
        title: 'Checkout Page',
        description: 'Checkout page use a minimal design and contains a form with differents inputs. In this challenge, I had to work with a given design and fullfil the user stories.',
        demoLink: 'https://my-checkout-page-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/my-checkout-page'
    },
    {
        type: 'vanilla',
        tags: ['HTML', 'CSS', 'RESPONSIVE'],
        image: 'images/challenges/my-gallery.png',
        title: 'My Gallery Page',
        description: 'Inspired by Instagram. In this challenge, I had to work with a similar design to instagram profile page.',
        demoLink: 'https://my-gallery-page-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/my-gallery-page'
    },
    {
        type: 'vanilla',
        tags: ['HTML', 'CSS', 'RESPONSIVE'],
        image: 'images/challenges/my-recipe.png',
        title: 'Recipe Page',
        description: 'Everyone loves food, especially cheesecake. In this project, I had to work with a given recipe and fullfil the user stories.',
        demoLink: 'https://recipe-page-he.netlify.app/',
        codeLink: 'https://github.com/houssam-developer/recipe-page'
    },

];

function App() {
    const [typeProject, setTypeProject] = useState<ProjectType>();
    const [projects, setProjects] = useState<ProjectDescription[]>([]);
    const [projectsAll, setProjectsAll] = useState<ProjectDescription[]>([]);
    const [projectsReact, setProjectsReact] = useState<ProjectDescription[]>([]);
    const [projectsVanilla, setProjectsVanilla] = useState<ProjectDescription[]>([]);

    const [skills, setSkills] = useState([
        {
            type: 'Front End',
            typeIcon: <MdOutlinePhonelink size={50} className='text-cyan-400' />,
            description: 'I like to code things from scratch, and enjoy bringing ideas in the browser',
            languagesTitle: 'Languages',
            languages: [
                { icon: <DiHtml5 size={20} className='text-red-500  min-w-[18px]' />, tag: 'HTML' },
                { icon: <DiCss3 size={20} className='text-blue-500  min-w-[18px]' />, tag: 'CSS' },
                { icon: <DiSass size={20} className='text-pink-500  min-w-[18px]' />, tag: 'SASS' },
                { icon: <DiReact size={20} className='text-cyan-500  min-w-[18px]' />, tag: 'ReactJS' },
                { icon: <DiJsBadge size={20} className='text-yellow-500  min-w-[18px]' />, tag: 'Javascript' },
                {
                    icon: <img src="images/typescript-logo.svg" width={'18px'} height={'18px'} alt="logo of language typescript" />,
                    tag: 'Typescript'
                },
                { icon: <MdDevicesOther size={20} className='text-cyan-500 min-w-[18px]' />, tag: 'Responsive Design' }
            ],
        },
        {
            type: 'Back End',
            typeIcon: <MdDns size={50} className='text-cyan-400' />,
            description: 'I like to code things from scratch, and enjoy bringing ideas in the browser',
            languagesTitle: 'Languages',
            languages: [
                { icon: <DiJava size={20} className='text-red-400' />, tag: 'Java' },
                { icon: <img src="images/spring.svg" width={'60px'} height={'60px'} alt="logo of spring framework" />, tag: '' },
                { icon: <img src="images/kotlin-logo.svg" width={'18px'} height={'18px'} alt="logo of kotlin language" />, tag: 'Kotlin' },
                { icon: <img src="images/hibernate.svg" width={'30px'} height={'30px'} alt="logo of orm hibernate" />, tag: 'Hibernate' },
            ]
        },
        {
            type: 'Database',
            typeIcon: <MdBackup size={50} className='text-cyan-400' />,
            description: 'I know how to use Databases',
            languagesTitle: 'Languages',
            languages: [
                { icon: <DiMysql size={20} className='text-blue-400 min-w-[18px]' />, tag: 'MySQL' },
                { icon: <DiPostgresql size={20} className='text-blue-300 min-w-[18px]' />, tag: 'PostgreSQL' },
                { icon: <DiSqllite size={20} className='text-neutral-400 min-w-[18px]' />, tag: 'SQLite' },
                { icon: <DiMongodb size={20} className='text-green-700 min-w-[18px]' />, tag: 'MongoDB' }
            ]
        },
        {
            type: 'Dev Tools',
            typeIcon: <MdOutlineSettingsApplications size={50} className='text-cyan-400' />,
            description: 'Tools for a better productivity',
            languagesTitle: 'Tools',
            languages: [
                { icon: <DiVisualstudio className=' text-blue-700 min-w-[18px]' />, tag: 'VSCode' },
                { icon: <img src="images/vitejs.svg" className='max-w-[20px]' />, tag: 'Vite' },
                { icon: <DiNpm className=' text-pink-700 min-w-[18px]' />, tag: 'Npm' },
                { icon: <DiGit className=' text-orange-700 min-w-[20px]' />, tag: 'Git' },
                { icon: <FaGithub className=' text-purple-200 min-w-[20px]' />, tag: 'Github' },
                { icon: <DiWindows className=' text-blue-500 min-w-[18px]' />, tag: 'Windows' },
                { icon: <DiDebian className=' text-[#d0074e] min-w-[18px]' />, tag: 'Linux' },
                { icon: <DiWindows className=' text-blue-500 min-w-[18px]' />, tag: 'Powershell' },
                { icon: <DiLinux className=' text-neutral-900 min-w-[18px]' />, tag: 'Bash' },
                { icon: <DiVisualstudio className=' text-blue-700 min-w-[18px]' />, tag: 'VSCode' },
                { icon: <DiIntellij className=' text-purple-800 min-w-[18px]' />, tag: 'IntelliJ' },
                { icon: <DiNpm className=' text-pink-700 min-w-[18px]' />, tag: 'Npm' },

                {
                    icon: <img src="images/gradle-logo.svg" width={'18px'} height={'18px'} alt="logo of gradle build tool" />,
                    tag: 'Gradle'
                },
                {
                    icon: <img src="images/maven.svg" width={'18px'} height={'18px'} alt="logo of maven build tool" />,
                    tag: 'Maven'
                },
                { icon: <DiGit className=' text-orange-700 min-w-[20px]' />, tag: 'Git' },
                { icon: <FaGithub className=' text-purple-200 min-w-[20px]' />, tag: 'Github' }
            ]
        }
    ]);

    const containerAlertRef = useRef<HTMLDivElement>(null);

    // WARN: on each render empty [] is applied to projectAll => don't do that
    // let projectAll = [];

    useEffect(() => {
        setProjectsAll(all);
        setProjectsReact(all.filter(it => it.type.toLowerCase() === 'react'));
        setProjectsVanilla(all.filter(it => it.type.toLowerCase() === 'vanilla'));
        setProjects(projectsReact);
        setTypeProject('react');
    }, []);

    useEffect(() => {
        if (typeProject === 'react') { setProjects(projectsReact); }
        if (typeProject === 'vanilla') { setProjects(projectsVanilla); }
    }, [typeProject]);


    function handleBtnProjectsSelection(e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetProject: ProjectType) {
        e.preventDefault();
        setTypeProject(targetProject);
    }

    function handleFormContactSubmitEvent(e) {
        e.preventDefault();
        console.log('FormContact [submit]');

        emailjs.sendForm('service_9s9jrt6', 'template_znu5or3', e.target, 'X_VMHh7poUMyeIkkS')
            .then((result) => {
                console.log(result.text);
                showNotification();
            }, (error) => {
                console.log(error.text);
                alert(`Your message has not been sent! can you try again #error: ${error.text}`);
            });

        e.target.reset();
    }

    function showNotification() {
        containerAlertRef.current?.classList.remove('hidden');
        containerAlertRef.current?.classList.remove("hide");
        containerAlertRef.current?.classList.add("show");
        containerAlertRef.current?.classList.add("show-alert");
        setTimeout(() => {
            containerAlertRef.current?.classList.remove("show");
            containerAlertRef.current?.classList.add("hide");
        }, 3000);
    }

    return (
        <div className="h-screen mx-auto   text-gray-800">

            {/* ALERT NOTIFICATION */}
            <div ref={containerAlertRef} className="alert hidden hide">
                <MdOutlineCheckCircle size={24} />
                <span className="alert__message">Your message has been sent!</span>
                <button className="alert__close-btn">
                    <MdClose size={24} />
                </button>
            </div>

            {/* BUTTON TOP  */}
            <div className='hidden md:block relative'>
                <a href='#headerApp' className='absolute bottom-4 right-4 p-4  hover:text-cyan-400' >
                    <div className='fixed bottom-4 right-4 btn-top'>
                        <MdKeyboardArrowUp size={24} />
                    </div>
                </a>
            </div>

            {/* HEADER */}
            <header id='headerApp' className='flex items-center justify-between gap-4 min-h-[9vh] '>
                <a className='p-4 flex items-center gap-4 text-primary ' href="/">
                    <MdViewInAr size={25} />
                    <h1 className='text-lg font-sans font-semibold text-primary'>Houssam EL ATMANI</h1>
                </a>
                <nav className='hidden md:flex right-0 text-primary font-sans font-medium gap-6 px-4'>
                    <a className='transition-[border] pb-1 border-b-2 border-transparent hover:brightness-125 hover:border-cyan-400' href="#headerApp">Home</a>
                    <a className='transition-[border] pb-1 border-b-2 border-transparent hover:brightness-125 hover:border-cyan-400' href="#sectionAboutMe">About me</a>
                    <a className='transition-[border] pb-1 border-b-2 border-transparent hover:brightness-125 hover:border-cyan-400' href="#sectionProjects">Projects</a>
                    <a className='transition-[border] pb-1 border-b-2 border-transparent hover:brightness-125 hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
                </nav>
            </header>

            <BottomNav />

            <section id='sectionHero' className='text-gray-50 flex flex-col justify-center items-center gap-12 section-hero h-[91vh]'>
                <div className='flex flex-col items-center gap-8 p-4 sm:p-8'>
                    <h2 className='font-sans font-semibold text-xl sm:text-xl pb-2 w-full'>
                        <span className='font-sans font-semibold text-xl sm:text-xl my-title'>Full</span> Stack Developer
                    </h2>
                    <p className='font-sans font-normal sm:text-xl max-w-lg'>Self-motivated developer, who is willing to create outstanding UI applications. </p>
                </div>
                <div className='flex justify-center items-center gap-4 md:gap-8'>
                    <a download={`${CV_NAME}`} href={`myfiles/${CV_NAME}`} className='btn-shadow flex items-center gap-2   hover:text-cyan-300'>
                        <MdFileDownload size={20} />
                        <span>Download CV</span>
                    </a>
                    <div className='hidden sm:block'>|</div>
                    <nav className='flex justify-center items-center gap-4'>
                        <a className='transition-[padding] hover:pb-2' target="_blank" href="https://github.com/houssam-developer"><FaGithub className='' size={30} /></a>
                        <a className='transition-[padding] hover:pb-2' target="_blank" href="https://devchallenges.io/portfolio/houssam-developer">
                            <img src="images/devchallenges.png" alt="logo of devchallenges" className='min-w-[18px] min-h-[18px]' width={'30px'} height={'30px'} />
                        </a>
                    </nav>
                </div>

            </section>
            <main className='max-w-[1440px] mx-auto flex flex-col gap-12'>
                <section id='sectionAboutMe' className='p-4 text-primary max-w-5xl mx-auto'>

                    <h2 className='text-2xl font-sans font-semibold mb-4'>About Me</h2>
                    <div className='flex flex-wrap gap-4'>
                        <div className='p-4 w-full shadow border rounded-md border-gray-300 bg-white flex flex-col md:flex-row items-center gap-4 '>
                            <div className='min-w-[190px]'>
                                <div className='container-ratio-2-22'>
                                    <img className='rounded-md child-ratio brightness-90 object-top scale-[.70] md:scale-[.85]'
                                        src="images/my-photo-he.jpg" alt="picture of developer"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-2 max-w-xl w-full'>
                                <h2 className='font-sans text-xl font-semibold '>Houssam EL ATMANI</h2>
                                <p className='font-sans text-cyan-800 font-medium text-sm '>Full Stack Developer</p>
                                <p className='text-md font-sans font-normal text-primary '>
                                    Hi, my name is Houssam. I am a Full Stack developer.<br />
                                    I got multiple skills and I am a self taught developer. <br />
                                    I can help you build your web application.<br />
                                </p>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>        </section>
                <section className="p-2 min-h-[20rem] w-full bg-gray-200 flex items-center">

                    <div className="flex flex-wrap justify-center gap-2 max-w-6xl m-auto">
                        <div className="tooltip tooltip-bottom" data-tip="Java">
                            <img
                                src="/logos/java.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="java logo"
                            />
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="Spring">
                            <img
                                src="/logos/spring.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="spring logo"
                            />
                        </div>

                        <div className="tooltip tooltip-bottom" data-tip="React">
                            <img
                                src="/logos/react.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="react logo"
                            />
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="Angular">
                            <img
                                src="/logos/angular.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="angular logo"
                            />
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="Next.js">
                            <img
                                src="/logos/nextjs.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="nextjs logo"
                            />
                        </div>

                        <div className="tooltip tooltip-bottom" data-tip="TypeScript">
                            <img
                                src="/logos/typescript.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="typescript logo"
                            />
                        </div>

                        <div className="tooltip tooltip-bottom" data-tip="JavaScript">
                            <img
                                src="/logos/javascript.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="javascript logo"
                            />
                        </div>



                        {/* <div className="tooltip tooltip-bottom" data-tip="Angular">
                            <img
                                src="/logos/angular.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="angular logo"
                            />
                        </div> */}




                        <div className="tooltip tooltip-bottom" data-tip="Tailwind CSS">
                            <img
                                src="/logos/tailwind.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="tailwind logo"
                            />
                        </div>

                        <div className="tooltip tooltip-bottom" data-tip="HTML">
                            <img
                                src="/logos/html.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="html logo"
                            />
                        </div>

                        <div className="tooltip tooltip-bottom" data-tip="CSS">
                            <img
                                src="/logos/css.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="css logo"
                            />
                        </div>
                        <div className="tooltip tooltip-bottom" data-tip="MySQL">
                            <img
                                src="/logos/mysql.png"
                                className="h-[70px] sm:h-[100px] rounded-md shadow-sm"
                                alt="mysql logo"
                            />
                        </div>

                    </div>
                </section>
                <section id='sectionProjects' className='p-4 text-primary max-w-[1024px] mx-auto'>
                    <h2 className='text-2xl font-sans font-semibold mb-4'>Projects</h2>
                    <div className='flex gap-4 items-center py-4'>
                        <button className={`p-2 border border-gray-300 rounded-md font-semibold bg-white text-gray-900 hover:shadow-[0_0_10px_#22d3ee] ${typeProject === 'react' ? 'border-cyan-600 shadow-[0_0_10px_#22d3ee]' : ''}`} onClick={e => handleBtnProjectsSelection(e, 'react')}>React JS</button>
                        <button className={`p-2 border border-gray-300 rounded-md font-semibold bg-white text-gray-900 hover:shadow-[0_0_10px_#f67317] ${typeProject === 'vanilla' ? 'border-orange-400 shadow-[0_0_10px_#f67317]' : ''}`} onClick={e => handleBtnProjectsSelection(e, 'vanilla')}>Vanilla JS</button>
                    </div>

                    <ul className='py-5 z-0  flex flex-wrap justify-evenly gap-8'>
                        {
                            projects.map(it =>
                                <li key={uuidv4()}
                                    className='max-w-[300px]  p-6  flex flex-col justify-between gap-2 border
 										border-gray-200  bg-white rounded-md shadow hover:border-cyan-400 transition-[border]'>
                                    <div>
                                        <div className='container-ratio-4-3 z-0'>
                                            <img className='child-ratio rounded '
                                                src={it.image} alt={`picture of project ${it.title}`} />
                                        </div>
                                        <ul className='flex flex-wrap gap-x-4 py-2 text-cyan-400'>
                                            {it.tags.map(tag => <li key={uuidv4()} className='min-w-min'>{`#${tag}`}</li>)}
                                        </ul>
                                    </div>
                                    <div className='pb-5 flex flex-col justify-start flex-grow'>
                                        <h3 className='font-semibold text-xl font-sans mb-2'>{it.title}</h3>
                                        <p className='text-md'>{it.description}</p>
                                    </div>

                                    <div className='flex gap-6 self-center'>
                                        <a className='btn-shadow flex items-center gap-3 ' target="_blank" href={it.demoLink}>
                                            <MdOutlineExitToApp size={20} />
                                            <span>Demo</span>
                                        </a>
                                        <a className='btn-shadow flex items-center gap-3' target="_blank" href={it.codeLink}>
                                            <FaGithub size={20} />
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </section>

                <section id='sectionContactMe' className='w-full h-full bg-gray-300'>
                    <div className='p-4 py-8 max-w-lg mx-auto'>
                        <h2 className='text-2xl font-sans font-semibold mb-8'>Contact Me</h2>
                        <form onSubmit={handleFormContactSubmitEvent} className='flex flex-col  gap-8  bg-white border border-gray-400 rounded-md shadow p-4 sm:p-8'>
                            <div className='flex flex-col gap-2 '>
                                <label htmlFor="tagName">Your Name</label>
                                <div className='flex items-center gap-2 p-2 border-[1px] border-gray-400 rounded transit focus-within:border-cyan-300'>
                                    <MdPerson size={20} className='min-w-max' />
                                    <input type="text" id='tagName' name='name' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <label htmlFor="tagEmail">Your Email</label>
                                <div className='flex items-center gap-2 p-2 border-[1px] border-gray-300 rounded focus-within:border-cyan-300'>
                                    <MdEmail size={20} className='min-w-max' />
                                    <input type="email" id='tagEmail' name='email' required />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <label htmlFor="tagSubject">Subject</label>
                                <div className='flex items-center gap-2 p-2 border-[1px] border-gray-300 rounded focus-within:border-cyan-300'>
                                    <MdSubject size={20} className='min-w-max' />
                                    <input type="text" id='tagSubject' name='subject' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 '>
                                <label htmlFor="tagMessage">Your Message</label>
                                <div className='flex items-center gap-2 p-2 border-[1px] border-gray-300 rounded focus-within:border-cyan-300'>
                                    <textarea id='tagMessage' rows={3} name='message' />
                                </div>
                            </div>
                            <div className='flex gap-8 justify-between'>
                                <button type='reset' className='btn-shadow   self-center flex items-center gap-3'>
                                    <MdClear size={20} />
                                    <span>Clear</span>
                                </button>
                                <button type='submit' className='btn-shadow btn-shadow--email  bg-cyan-600 text-gray-50 self-center flex items-center gap-3'>
                                    <MdSend size={20} />
                                    <span>Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <footer className=' bg-[#111] py-8 text-gray-200'>
                <div className='flex flex-col md:flex-row md:justify-between gap-4 items-center p-4 max-w-[1024px] mx-auto min-h-[40vh] '>

                    <nav className='hidden md:flex text-sm md:flex-col md:text-md right-0  font-sans font-medium gap-6 px-4'>
                        <a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:border-cyan-400' href="#headerApp">Home</a>
                        <a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:border-cyan-400' href="#sectionAboutMe">About me</a>
                        <a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:border-cyan-400' href="#sectionProjects">Projects</a>
                        <a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
                    </nav>

                    <div className='flex flex-col gap-2 '>
                        <div className='flex items-center gap-4 p-4'>
                            <a className='transition-[padding] md:hover:pb-2' target="_blank" href="https://github.com/houssam-developer"><FaGithub size={30} /></a>
                            <a className='transition-[padding] md:hover:pb-2' target="_blank" href="https://devchallenges.io/portfolio/houssam-developer">
                                <img src="images/devchallenges.png" alt="logo of devchallenges" width={'30px'} height={'30px'} />
                            </a>
                        </div>
                    </div>

                    <p className="text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p>

                </div>
            </footer>
        </div >
    )

    function BottomNav() {
        return (
            <nav className='md:hidden flex justify-evenly fixed bottom-1 left-1 right-1 z-50 py-2 m-1 rounded-xl border border-cyan-300 bg-white opacity-80'>
                <a href='#headerApp' className='flex flex-col items-center gap-1 text-xs font-sans font-medium  hover:text-cyan-400' >
                    <div className='rounded-full  p-2 '>
                        <MdHome size={24} />
                    </div>
                    <span>Home</span>
                </a>
                <a href='#sectionAboutMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium  hover:text-cyan-400 ' >
                    <div className='rounded-full  p-2'>
                        <MdPerson size={24} />
                    </div>
                    <span>About Me</span>
                </a>
                <a href='#sectionProjects' className='flex flex-col items-center gap-1 text-xs font-sans font-medium  hover:text-cyan-400' >
                    <div className='rounded-full  p-2'>
                        <MdWeb size={24} />
                    </div>
                    <span>Projects</span>
                </a>
                <a href='#sectionContactMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium  hover:text-cyan-400' >
                    <div className='rounded-full  p-2'>
                        <MdChat size={24} />
                    </div>
                    <span>Contact Me</span>
                </a>
            </nav>
        );
    }
}

export default App;
