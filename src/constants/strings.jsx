export default class ConstantsStrings {
  static Navbar = {
    aboutMeTooltip: "✨ About Me",
    projectsTooltip: "📑 Projects",
    timelineTooltip: "🛣️ My Journey",
    contactTooltip: "☎️ Let's Talk",
  };

  static About = {
    name: "Moiz Rajkotwala",
    oneLiner: "Full-stack • Python • Flutter • React",
    location: "📍 Mumbai, Maharashtra",
    profilePicPath: "src/assets/private/profile_1x1.jpg",
    bio: `I possess experience in website and app development across various technologies. I take pleasure
in exploring emerging technologies, dedicating my spare time to reading business case studies and
engaging in innovative technological projects. At present, my focus lies in AR/VR`,
    skills: [
      "Python",
      "Flutter",
      "Flask",
      "React",
      "Selenium",
      "Django",
      "FastAPI",
      "Supabase",
    ],
    twitterLink: "https://twitter.com/MoiZ__2001",
    githubLink: "https://github.com/TechBoyy6",
    linkedinLink: "https://www.linkedin.com/in/moiz-rajkotwala/",
    whatsppLink: "https://wa.me/+918087943052",
  };

  static Projects = {};

  static Timeline = [
    ///INFO : Enter content in the following format and in decreasing order of date

    {
      Title: "Speaker For a Flutter Event",
      Description:
        "I took one day hands-on session on Building UI with Flutter. This session included basics of Flutter, Android Studio and VSCode",
      Type: "Event_Speaker",
      Year: "2023",
      Date: "03 - June",
      Image: "src/assets/private/timeline/flutter_speaker.jpg",
      Link: "https://www.linkedin.com/posts/sakec_sakec-sakecroboclub-activity-7079848624817381376-A8PN?utm_source=share&utm_medium=member_desktop",
      Link_Text: "Read More",
    },
    {
      Title: "LangChain- LLM powered applications",
      Description:
        "I took this course on Udemy and it was a stepping stone into the applied AI world.",
      Type: "Certification",
      Year: "2023",
      Date: "26 - May",
      Image: "",
      Link: "https://www.udemy.com/share/108yCa3@1mLHNi-Fnwr3_oQ21Zi31liD3jKSH-YCHGeu-uhSLvQ4o1-V7mLZp2yUfSa7aDUWVw==/",
      Link_Text: "Know More",
    },
    {
      Title: "Computer Vision Industrial Project",
      Description: `A python script that measures the dimensions of an object when an image is provided. The precision of the measurements is about 0.05mm ⚙️ Tech Stack 👉 OpenCV with Aruco`,
      Type: "Project",
      Year: "2022",
      Date: "07 - Feb",
      Image: "src/assets/private/timeline/calculated.jpeg",
      Link: "https://github.com/TechBoyy6/SMT-MUC-v2",
      Link_Text: "Github Repo",
    },
    {
      Title: "Electricity Bill Analysis Industrial Project",
      Description: `It is Django Full Stack project that generates report based on your electricity bill information provided. This was my first internship project. ⚙️ Tech Stack 👉 Html, CSS, JS | Django (Python)`,
      Type: "Project",
      Year: "2022",
      Date: "06 - Jan",
      Image: "src/assets/private/timeline/eba.jpg",
      Link: "https://eba.efficienergi.in/",
      Link_Text: "Website Link",
    },
    {
      Title: "Internship at Efficienergi Consulting Pvt. Ltd.",
      Description: `
• I have accomplished substantial growth through the utilization of my skills in Flutter, React and Django.
• I successfully led a team of two individuals for an app development project.
• Additionally, I have constructed test scripts specifically for the company's dashboard.`,
      Type: "Work",
      Year: "Nov - 2021",
      Date: "Aug - 2022",
      Image: "src/assets/private/timeline/certificate1.jpg",
      Link: "https://1drv.ms/b/s!AulwBXQl_5qmgYgdbt2tICU3WQtcEg?e=zYRjID",
      Link_Text: "View Certificate",
    },
    {
      Title: "Introduction to the IoT and Embedded Systems",
      Description: `
I took this course on Coursera, I came to know abt micro controllers, what are embedded systems. How complex IoT device works. What IoT actually is, and much more.
This course in fact sparked the fire in me to join robotics club at my college.`,
      Type: "Certification",
      Year: "2021",
      Date: "30 - Mar",
      Image: "src/assets/private/timeline/Coursera.jpg",
      Link: "https://coursera.org/share/413f9309f66b0e9bc6de3054644882e2",
      Link_Text: "View Certificate",
    },
    {
      Title: "FB Bulk Share to Groups Automation",
      Description: `
It was a python script that reads the groups names from the txt file and automatically shares your post on all those groups.⚙️ Tech Stack 👉 Selenium (Python)`,
      Type: "Project",
      Year: "2020",
      Date: "10 - June",
      Image: "",
      Link: "https://github.com/TechBoyy6/FB-Share_to_Groups-Automation",
      Link_Text: "Github Repo",
    },
  ];

  static TimelineDefaultImage = {
    ///INFO : Here Image is map to the type of work, incase if no img was provided this will be used

    Education: "./src/assets/education.svg",
    Certification: "./src/assets/certification.svg",
    Work: "./src/assets/programming.svg",
    Event_Speaker: "./src/assets/programming.svg",
    Project: "./src/assets/project.svg",
  };

  static Rick = {
    basePrompt: `You are Rick from Rick & Morty. You pass typically humorous, mean and exaggerated very short one or two liners comments based on the user actions that was taken on the portfolio website of a software developer, here is the sample
action: mouse pointer is on profile pic for a long time.
Rick: "Oh, great job there, Sherlock. Hovering over a picture. Real groundbreaking detective work."
action: user is inactive for quick a while
Rick: "Looks like they've gone into hibernation mode. Maybe they're decoding the secrets of the universe in their dreams or just making a sandwich. Who knows?"
action: user just made a scroll
Rick: "A scroll, huh? I'm on the edge of my seat! The thrilling saga of web browsing continues"
action: "`,
    modelAPI: "https://api-inference.huggingface.co/models/google/flan-t5-xxl",
    initialMsg: "Ahh, one more visitor.",
    rickPosePath: "./src/assets/rick_poses/rickNormal.png",
    rickPoutPosePath: "./src/assets/rick_poses/pout.png",
  };

  static Contact = {
    CTATitle: "Start a Digital Journey",
    CTASubTitle: "Increase Conversion.",
    CTADescription: "Collaborate with us to innovate and shape the future of your business through technology.",
    CTAButton1: "Book a Call",
    CTAButton2: "Who am I?",
  };
}
