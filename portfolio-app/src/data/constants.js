export const Bio = {
  name: "Vivek Singh Bisht",
  roles: [
    "Web Developer",
    "Full Stack Developer",
    "Laravel Developer",
    "Programmer",
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  
  resume: process.env.PUBLIC_URL + "/VIVEK-BISHT.pdf",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Vue Js",
        image: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Laravel",
        image: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg",
      },

      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PHP",
        image: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
      },
      {
        name: "Python",
        image: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      },
      {
        name: "SQLite3",
        image: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "GitLab",
        image: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
      },
      {
        name: "Windows",
        image: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
      },
      {
        name: "Excel",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      },
    ],
  },
];

export const experiences = [
/*  {
    id: 0,
    // img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "ReactJS Developer Trainning",
    company: "VCare Software Pvt. Ltd.",
    date: "Aug 2023 - Dec 2023",
    desc: "Working on various web development project. Design and Impelement a ChatBot website.",
    skills: ["React.Js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },*/
  {
  id: 0,
  img: "logo.png",
  role: "Web Developer",
  company: "Digify Soft Solutions.",
  date: "May 2023 - Present",
desc: [
  "Developed and maintained responsive websites and CRM platforms, ensuring optimal performance and seamless user experiences.",
  "Streamlined the client requirement gathering process, increasing overall project efficiency by over 25%.",
  "Conducted on-site client meetings and product demonstrations to gather business needs and showcase tailored digital solutions.",
  "Collaborated closely with cross-functional teams to implement feedback-driven enhancements and reduce delivery time.",
  "Integrated modern UI/UX practices, boosting user satisfaction and engagement across platforms."
]
,
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
    "MySQL",
     "API's",
    "PHPMyAdmin",
    "Excel"
  ],
},
/*  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
    role: "Android Developer Intern",
    company: "Rudraksha Welffare Foundation",
    date: "June 2021 - Oct 2021",
    desc: "• Built RudraShakti - Astrologer App, with MVVM Architecture using Java and Android Studio integrating Firebase SDK. Created One to One video call integration with Socket.IO and Firebase cloud functions and integrated with Retrofit. Created Low Level Design and converted Figma design to XML code.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node Js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Image%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },*/
/*  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "Fullstack Externship",
    company: "Flipr",
    date: "June 2023 - July 2023",
    desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  },*/
/*  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "DSC KIIT",
    date: "Nov2021 - Present",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "Leadership",
      "Mobile Application Development",
      "Kotlin",
      "XML",
      "Figma",
    ],
  },*/
/*  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributed to different open-source projects and learn from industry experts",
  },*/
];

export const education = [
  {
    id: 0,
    img: "DGI-Logo.png",
    school: "Dronacharya Group Of Institutions , UP",
    date: "Aug 2019 - July 2023",
    grade: "6.5 CGPA",
   desc: [
     "Completed Bachelor of Technology (B.Tech) with a focus on core computer science and engineering principles.",
  "Gained strong foundational knowledge in data structures, algorithms, databases, and web technologies.",
  "Worked on multiple academic projects, including real-time web applications and database-driven systems.",
  "Actively participated in workshops, technical seminars, and coding competitions.",
  "Collaborated with peers on team-based assignments, enhancing communication and problem-solving skills."
  ],
    degree: "Bachelor of Technology - BTech, Computer Science and Information Technology",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    school: "Nutun Marathi Sr Sec School, Delhi",
    date: "Apr 2018 - Apr 2019",
    grade: "88.2%",
    desc: "I completed my class 12 high school education at Nutun Marathi Sr Sec School, Delhi, where I studied Science with Computer Science.",
    degree: " XII , Science with Computer",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/methodist.png?alt=media&token=018a1b18-e2dd-4f34-8855-cff1b6b69fd3",
    school: "S.B.V Ser Sec School, Delhi",
    date: "Apr 2015 - Apr 2016",
    grade: "92.3%",
    desc: "I completed my class 10 education at S.B.V Ser Sec School, Delhi, where I studied Science with Computer Application.",
    degree: "X, Science with Computer",
  },
];

export const projects = [
/*  {
    id: 9,
    title: "Trackify",
    date: "Jun 2023 - Jul 2023",
    description:
      "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. \nAdmin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials:	#Email: testemployee@gmail.com	#Password- 123@Testemployee",
    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: [
      "Docker",
      "AWS",
      "DuckDNS",
      "Eslint",
      "Husky",
      "CI/CD",
      "React Js",
      "MongoDb",
      "Node Js",
      "Express Js",
      "Redux",
    ],
    category: "web app",
    github: "https://github.com/rishavchanda/Trackify",
    webapp: "https://trackify.duckdns.org",
  },*/
  {
    id: 0,
    title: "InfraCore – Construction Website Portal",
    date: "Dec 2024 -  Feb 2023",
    description:
  "Developed a full-stack construction website with dynamic sections for services, projects, blogs, and testimonials. Built a responsive frontend using React.js and Bootstrap, and integrated Laravel APIs with a MySQL backend. Implemented an admin panel for streamlined content management.",
    image:
      "https://user-images.githubusercontent.com/64485885/234602896-a1bd8bcc-b72b-4821-83d6-8ad885bf435e.png",
    tags: ["React Js", "MySql", "PHP", "Laravel", "Api", "Bootstrap"],
    category: "web app",
    github: "https://github.com/rishavchanda/Podstream",
    webapp: "https://podstream.netlify.app/",
    member: [
      {
        name: "Vivek",
    img: "../../images/VivekImg.jpg",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },

    ],
  },
  {
    id: 1,
    title: " HotelEase – CRM-Based Hotel Management System ",
    date: "Oct 2024 - Dec 2024",
  description:
  "Developed a robust and scalable hotel management system using Laravel, PHP, MySQL, HTML, and CSS. Automated booking, billing, and customer management to enhance operational efficiency. Integrated real-time room availability tracking for smooth hotel operations. Designed a responsive, user-friendly UI to improve the experience for both staff and guests.",
    image:  "https://user-images.githubusercontent.com/64485885/234916413-96296f13-fe4b-4cc4-b215-e72bd7c27928.png",
    tags: [ "Html","Css","MySql", "PHP", "Laravel", "Gateway", "Bootstrap"],
    category: "web app",
    github: "https://github.com/rishavchanda/Project-Management-App",
    webapp: "https://vexa-app.netlify.app/",
  },
  /*{
    id: 2,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Rishav Chanda",
        img: "https://avatars.githubusercontent.com/u/64485885?v=4",
        linkedin: "https://www.linkedin.com/in/rishav-chanda-b89a791b3/",
        github: "https://github.com/rishavchanda/",
      },
      {
        name: "Upasana Chaudhuri",
        img: "https://avatars.githubusercontent.com/u/100614635?v=4",
        linkedin: "https://www.linkedin.com/in/upasana-chaudhuri-2a2bb5231/",
        github: "https://github.com/upasana0710",
      },
    ],
  },*/
  {
    id: 3,
    title: "Refurbish Tech",
    date: "March 2025 - May 2025",
    description:
  "Developed a custom CRM solution for managing the sale of refurbished phones and laptops.\nThe system tracks complete inventory details, including parts in stock, sold items, and remaining quantity.\nIntegrated features include real-time stock updates, part-wise tracking, and automated Proforma invoice generation for customer billing.",

    image:
      "https://user-images.githubusercontent.com/64485885/255202416-e1f89b04-2788-45b0-abc2-9dec616669e2.png",
    tags: ["PHP", "MySql", "JavaScript", "MySql Font","Html","Css","Bootstrap"],
    category: "CRM",
    github: "https://github.com/rishavchanda/Buckoid-Android-App",
    webapp: "https://play.google.com/store/apps/details?id=com.rishav.buckoid",
  },
  {
    id: 10,
    title: "RefCheck",
    date: "Jun 2023 - Nov 2023",
    description:
      "The Company provides services related to Employee Background Verification Checks for client’s employees.",
    image:
      "https://user-images.githubusercontent.com/64485885/255237090-cf798a2c-1b41-4bb7-b904-b5353a1f08e8.png",
    tags:  ["PHP", "MySql", "JavaScript", "MySql Font","Html","Css","Bootstrap"],
    category: "CRM",
    github: "https://github.com/rishavchanda/Job-finder-App",
    webapp: "https://github.com/rishavchanda/Job-finder-App",
  },
  /*{
    id: 4,
    title: "Whatsapp Clone",
    date: "Jul 2021",
    description:
      "A WhatsApp clone made with React JS, Firebase, and Material UI. It has Phone Authentication, Real-time Database. It has a chat room where users can chat with each other. It has a sidebar where users can see all the chat rooms and can create a new chat room. It has a login page where users can log in with their Google account.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/whatsapp-clone-rishav.appspot.com/o/Screenshot%20(151).png?alt=media&token=48391593-1ef0-4a8c-a92a-eb82bdf38e89",
    tags: ["React Js", "Firebase", "Firestore", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Whatsapp-Clone-React-Js",
    webapp: "https://whatsapp-clone-rishav.web.app",
  },*/
/*  {
    id: 5,
    title: "Todo Web App",
    date: "Jun 2021",
    description:
      " A Todo Web App made with React JS, Redux, and Material UI. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the tasks and can create a new task. It has a calendar where users can see all the tasks on a particular date. It has a search bar where users can search for a particular task.",
    image:
      "https://camo.githubusercontent.com/a328255ad96f861f57d25096d28018ab2656c689a1456b0d145764009bed2d1a/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f74253230283938292e706e673f616c743d6d6564696126746f6b656e3d33643335646366322d626666322d343730382d393031632d343232383866383332386633",
    tags: ["React Js", "Local Storage", "AWS Auth", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Todo-Web-App",
    webapp: "https://rishav-react-todo.netlify.app/",
  },*/
/*  {
    id: 6,
    title: "Breaking Bad",
    date: "Jun 2021",
    description:
      "A simple react app that shows the characters of the famous TV series Breaking Bad. It uses the Breaking Bad API to fetch the data. It also has a search bar to search for a particular character.",
    image:
      "https://camo.githubusercontent.com/cd07010cbeb90cb1b43a5d6162784326aef02210ef7d41a0f9ae043b3e392378/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f746f646f2d6170702d63386331392e61707073706f742e636f6d2f6f2f53637265656e73686f7425323028313534292e706e673f616c743d6d6564696126746f6b656e3d65613439383630632d303435362d343333342d616435372d336239346663303333363263",
    tags: ["React Js", "API", "Axios", "Node JS"],
    category: "web app",
    github: "https://github.com/rishavchanda/Breaking-Bad",
    webapp: "https://breaking-bad-webapp.netlify.app",
  },*/
/*  {
    id: 7,
    title: "Quiz App",
    date: "Dec 2020 - Jan 2021",
    description:
      "A android quiz app made with Java and Firebase. It has a login page where users can log in with their Google account. It has a sidebar where users can see all the quiz categories and can create a new quiz. It has a leaderboard where users can see the top 10 scorers. It has a search bar where users can search for a particular quiz.",
    image:
      "https://github-production-user-asset-6210df.s3.amazonaws.com/64485885/239726262-c1b061d1-d9d0-42ef-9f1c-0412d14bc4f6.gif",
    tags: ["Java", "Android Studio", "Firebase", "Google Auth"],
    category: "android app",
    github: "https://github.com/rishavchanda/Quiz-Earn",
    webapp: "https://github.com/rishavchanda/Quiz-Earn",
  },*/
  /*{
    id: 8,
    title: "Face Recognition",
    date: "Jan 2021",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image:
      "https://camo.githubusercontent.com/a8b3e1ebf26d4c95f75bc6671189a3590eb67eb8332d7c7452492990e731efb9/68747470733a2f2f77617265686f7573652d63616d6f2e696e67726573732e636d68312e707366686f737465642e6f72672f356137383335396561323762643261633232336437656662306639303831306437373930383436312f363837343734373037333361326632663633366336663735363432653637363937343638373536323735373336353732363336663665373436353665373432653633366636643266363137333733363537343733326633383339333633363339333232663332333433343333333033333339333832663333333636363330363533333636333032643331333336333632326433313331363533373264333833323335333832643334363433303633333936333635333136353334333133393265363736393636",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
    webapp: "https://github.com/rishavchanda/Face-Recodnition-AI-with-Python",
  },*/
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
