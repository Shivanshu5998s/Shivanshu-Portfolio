//I Would Highly Recommend You To Customize The Theme According To Your Taste.

export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "<Shivanshu>";

// Main Page
export const main = {
  name: "Shivanshu Chobey",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/drive/u/1/folders/1dtOwv6BlNy47sVC2hY2c0_6vZkLCBP29",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://github.com/Shivanshu5998s/Images/blob/main/Shivanshu-Chobey.png?raw=true",
  p1: "Hey, My name is Shivanshu Chobey. I have completed my Bachelor of Engineering from Lakshmi Narain College of Technology, Indore (M.P.).",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like photography 📸, cooking 👨‍🍳 and riding 🏍️, Playing online Games.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    {
      name: "Tailwind",
      iconifyClassName: "logos:tailwindcss-icon",
      id: "12",
    },
    {
      name: "Material-UI",
      iconifyClassName: "logos:material-ui",
      id: "13",
    },
    {
      name: "Ant Design",
      iconifyClassName: "logos:ant-design",
      id: "14",
    },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
  {
    id: 1,
    title: "Expedia Travel Clone",
    desc: `Expedia Inc. is an online travel agency owned by Expedia Group, an American online travel shopping company based in Seattle. It was first construct week project. In this project we implemented search feature and responsiveness.`,
    feature: `Overall user flow. (Only Front-end),
    Sign-up/Log-in with the help of localstorage,
    User authentication,
    Interactive User Interface,
    Access API data without buffering`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://github.com/Shivanshu5998s/Images/blob/main/Expedia%20Home.png?raw=true",
    link: "https://dazzling-pithivier-eb2792.netlify.app/",
    github: "https://github.com/Shivanshu5998s/expedia"
  },

  {
    id: 2,
    title: "boAt-lifestyle Clone",
    desc: `boAt the leader in audio products presents affordable & high quality products.`,
    feature: `Sign-up/Log-in with the help of localstorage,
    User authentication,
    Interactive User Interface,
    Access API data without buffering`,
    tech: `Tech Stack: HTML | CSS | JavaScript`,
    img: "https://miro.medium.com/max/875/1*Wqf2L6kZ4SguVw84m8_WtA.png",
    link: "https://github.com/Shivanshu5998s/boat-lifestyle",
    github: "https://github.com/Shivanshu5998s/boat-lifestyle",
  },

  {
    id: 3,
    title: "Strawberrynet Clone",
    desc: `Strawberrynet.com is an e-commerce website that sales beauty product.`,
    feature: `Sign-up / Log-in page,
    Dynamic Homepage with product catalog,
    Slideshow animation on product catalog,
    Add to cart feature & Check out,
    Apply Promocode & Payment`,
    tech: `Tech Stack: HTML | CSS | Javascript | Advance JS | ES6`,
    img: "https://miro.medium.com/max/875/1*fSLFF-Ckmjz68c3JgEnBHw.png",
    github: "https://github.com/jitender004/strawberrynet06",
    link: "https://github.com/jitender004/strawberrynet06",
  },

  {
    id: 4,
    title: "India Mart Clone",
    desc: `IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.`,
    feature: `Social Sign-up / Log-in,
    User authentication,
    Product Pages,
    Cart functionalities,
    Checkout Page,
    Payment Page`,
    tech: `Tech Stack: HTML | CSS | Javascript | Advance JS | ES6`,
    img: "https://miro.medium.com/max/875/1*4wCVd43VXLrBlbrfp_t49Q.png",
    github: "https://github.com/Shivanshu5998s/India-MART",
    link: "https://github.com/Shivanshu5998s/India-MART"
  },

  {
    id: 5,
    title: "Bobby Brown Clone",
    desc: `This is a Women Cosmetics Products Ecommerce Website. Bobbi Brown is an American professional make-up artist, author, and the founder of Bobbi Brown Cosmetics.`,
    feature: `Interactive User Interface,
    Login | Sign Up | Profile | Offers and Toggled Navbars with its Pop-Ups,
    Location Fetching using Geographical Location, lat and lang | custom Location Search,
    Slider of products,
    Search bar for finding the product by it’s name and viewing it,
    Product page for different categories,
    Filters for custom price,
    Sort by Feature,
    Add to cart option for buying products`,
    tech: `Tech Stack:  React | Redux | HTML 5 | CSS 3 | JavaScript | GitHub | Bootstrap | Postman | Tailwind CSS | GitHub | ParseHub | Context API | FontAwesome | Material UI.`,
    img: "https://miro.medium.com/max/875/1*ZArTvqq6xux_cXUKf43wuA.png",
    link: "https://bobbi-brown-clone-arshad-abhinav-yogesh-shivanshu-rahul-nikesh.netlify.app/",
    github: "https://github.com/Shivanshu5998s/Bobbi-Brown-Cosmetics",
  },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/shivanshu5998/",
  "https://api.whatsapp.com/send/?phone=8120138215&text&app_absent=0",
  "mailto:shivanshuchobey5998@gmail.com",
  "https://medium.com/@shivanshuchobey5998",
  "https://github.com/Shivanshu5998s",
];