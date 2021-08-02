const Data =
{
  fullname: "Mohd Aman",
  currentLocation: "New Delhi",
  phone: "9807406324",
  email: "amanproff@gmail.com",
  projects: [
    {
      id: 1,
      projectTitle: "Todo App",
      technologies: "React JS, Material UI, ES6, CSS",
      img:"https://res.cloudinary.com/practicaldev/image/fetch/s--pyyuGSZ9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/o96lsrld21tk232kidu4.png",
      path:"/projects/Tour",
      info: "Simple Note Taking App with add and remove functionality without re rendering page and fun life lesson using API. The concepts used are useState and useEffect hooks",
    },
    {
      id: 2,
      projectTitle: "Travel Packages",
      technologies: "React JS: Hooks, Conditional rendering, JSX, ES6,  CSS",
      img:"https://react-projects.netlify.app/static/82554961915472c5c771f752d5735dd1/7c38f/ScreenShot2020-09-27at11.59.44AM.webp",
      path:"/projects/Tour",
      info: "An offer page of any travel website showing ongoing travel plans. Concepts of hooks, conditional rendering, array sort and map methods. Asynchronous operations handled using async/await.",
    },
    {
      id: 3,
      projectTitle: "Company Reviews Page - React",
      technologies: "Using React JS: Hooks, JSX, ES6,  CSS",
      img:"https://react-projects.netlify.app/static/2d19b67087032a782e1a04102a4816d6/fe5f4/ScreenShot2020-10-01at12.20.56PM.webp",
      path:"/projects/Tour",
      info: "A page which shows testimonials from company employees. It fetches data from JSON format and automatically returns JSX on pressing Next, Previous and Random Button.",
    },
    {
      id: 4,
      projectTitle: "TicTacToe Game",
      technologies: "Using Vanilla JS, HTML and Internal CSS",
      img:"https://miro.medium.com/max/800/1*gr_IZC4Pjs5vGegmVVJdOQ.png",
      path:"/projects/Tour",
      info: "A very fun and beginner friendly project which uses the concepts of basic javascript, html, css and some advance concept such as DOM manipulation using event listeners.",
    },
    {
      id: 5,
      projectTitle: "Company Reviews Page - JS",
      technologies: "Using JS: DOM Manipulation, HTML5, ES6, CSS",
      img:"https://react-projects.netlify.app/static/2d19b67087032a782e1a04102a4816d6/fe5f4/ScreenShot2020-10-01at12.20.56PM.webp",
      path:"/projects/Tour",
      info: "A page which shows testimonials from company employees. It fetches data from JSON format and automatically manipulates web content on pressing Next, Previous and Random Button.",
    },
  ],
  skills: ["ReactJS", "React Router", "JavaScript", "HTML5", "CSS3", "Bootstrap", "AJAX", "AXIOS", "JSON", "ES6", "jQuery", "npm"],
  miniProjects: [
    {
      id: 1,
      projectTitle: "My Five Netflix Series Picks",
      info: "Multiple components, use of props and scalable code.",
    },
    {
      id: 2,
      projectTitle: "Counter",
      info: "App with Clean UI with functionality of changing html content using hooks.",
    },
  ],
  education: [
    {
      id: 1,
      college: "JBIT, Dehradun",
      degree: "B.Tech (Civil)",
      year: "2014-2018",
    },
    {
      id: 2,
      college: "VB Public School, Allahabad",
      degree: "SSC (CBSE)",
      year: "2014",
    },
    {
      id: 3,
      college: "Tagore School, Allahabad",
      degree: "HSC (CBSE)",
      year: "2011",
    },
  ],
}

export default Data;