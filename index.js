require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const resume = [
    "Abhinav Aggrawal +91-7428740555",
    "Github | LinkedIn | Website abhinav1.dtu@gmail.com",
    "Education",
    "Degree/Certificate Institute/Board CGPA/Percentage Year",
    "B.Tech. Delhi Technological University 8.75 (Current) 2020-2024",
    "CBSE (class-12th) Summer Fields School 91% 2020",
    "CBSE (class-10th) Summer Fields School 94% 2018",
    "Experience",
    "• TATA 1mg Pvt Ltd. Sept 2022 - Dec 2022",
    "Automation Intern",
    "– Created IS Automation system which automatically create calendar invites, send reminder emails, check whether",
    "the assigned task is completed and accordingly send escalation. It managed 1000+ activities . It saved 6hrs a day.",
    "– Developed a data collaboration script to automatically collect data form different google sheets.",
    "– Worked on Google Sheets and developed advanced Google App scripts to create above mentioned systems",
    "• Raahee Wellness Services Pvt Ltd. Feb 2022 - June 2022",
    "Web Developer Intern",
    "– Raahee is a Cisco ThingQbator incubated startup funded by Microsoft.",
    "– Improvised raahee.in website, also collaborated with my team to develop mhp.raahee.in used by physiologists.",
    "– Collaborated with team of 10+ people to complete a freelance project by Virago Private Limited virago.netlify.app",
    "• MilkVilla Pvt Ltd Dec 2021 - March 2022",
    "Backend Developer Intern",
    "– Contributed to improving the authentication system by adding additional security layer.",
    "– Developed an automated system which generates excel sheets for profit and loss statements of the company.",
    "– Worked on developing cash flow system and mapping service using google map to track the clients.",
    "– Created a mapping system with clustering feature to handle mapping data of 1 lahk+ people with high efficiency",
    "• Gurugram Police June 2021 - July 2021",
    "Cyber Security Intern",
    "– Learned many new concepts about Cybersecurity, Ethical Hacking, Bitcoins, Blockchain, Metaverse",
    "– ] Researched through many cyber fraud’s incidents Reached the final stage in Capture the Flag (CTF) Contest.",
    "Projects",
    "• Attendence Bot",
    "NodeJS, EJS,HTML, CSS, Puppeteer, MongoDB Link",
    "– An app made for assisting teachers in taking attendence. A bot will join the meeting, take attendence and leave.",
    "It has complete CRUD features with MongoDB database and automation using puppeteer.",
    "• Donately",
    "HTML, CSS, EJS, NodeJS, MongoDB, SAWO API Link",
    "– This app aims to assist blood or organ donors and patients in finding each other. It has a MongoDB backend",
    "complete with SAWO API integration and a chat bot capable of answering a variety of questions.",
    "• Object detection using Coco",
    "Python, TensorFlowJS Link",
    "– This is a machine learning model deployed over a website using TensorFlowJS and can detect objects placed in",
    "front of camera directly from the browser.",
    "Technical Skills",
    "• Languages C/C++, Python, R, JavaScript, HTML, CSS, Dart, C#, SQL",
    "• Tools : Jupyter Notebook,Google Colab, Linux, ROS(Robot Operating System), Yolo, Gazebo, Unity3D, OpenCV",
    "• Libraries/Frameworks: ReactJS, NodeJS, ExpressJS, Flutter, TenserFlowJS, PowerBI",
    "• Databases: MongoDB, mySQL, PostgreSQL",
    "• Others: Search Engine Optimization(SEO), Ethical Hacking, Web Scrapping",
    "Positions of Responsibility",
    "• Web development, ML, Flutter development mentor IEEE-DTU (200+ Mentee’s) Apr 2022 - Present",
    "• Heaf of Software , AUV-DTU Jan 2021 - Present",
    "• Co-operate team lead IEEE-DTU, ASSETS-DTU, IOSD-DTU (100+ Team members) Jan 2021 - Present",
    "• Co-head, Publicity INNOVA-DTU (500+ Team members) Aug 2021 - Present",
    "Achievements and Extra Curriculars",
    "• Selected for Amazon Machine Learning Summer School 2022.",
    "• Won the prize for Best Submarine at AMUROV 2022 (One of India’s largest ROV competition).",
    "• Secured 2nd position in Robosub 2021 (One of India’s largest AUV competitions).",
    "• Secured 2nd position in hackathon organised by Ideator’s cafe.",
    "• Published content in ECHO-21, IEEE DTU annual mazagine."
];

const promt = resume + " \n " + "find the work experience from about text";

(async ()=>{
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: promt,
        temperature: 0,
        max_tokens: 125,
      });

    console.log("r",response.data.choices);
})();


// (async () => {
//     const gptResponse = await openai.answers({
//       "documents": [resume],
//       "question": "extract work experience from document",
//       "search_model": "ada",
//       "model": "text-davinci-003",
//       "max_tokens": 125,
//     });

//     console.log(gptResponse.data);
// })();