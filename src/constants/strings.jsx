export default class ConstantsStrings {
  static Navbar = {
    aboutMeTooltip: "✨ About Me",
    projectsTooltip: "📑 Projects",
    timelineTooltip: "🛣️ My Journey",
    contactTooltip: "☎️ Call Me",
  };

  static About = {
    name: "Moiz Rajkotwala",
    oneLiner: "Full-stack • Python • Flutter • React",
    location: "📍 Mumbai, Maharashtra",
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
    twitter_link: "https://twitter.com/MoiZ__2001",
    github_link: "https://github.com/TechBoyy6",
    linkedin_link: "https://www.linkedin.com/in/moiz-rajkotwala/",
    whatspp_link: "https://wa.me/+918087943052",
  };

  static Asset = {
    rick: "./src/assets/rick_poses/rickNormal.png",
    rick_pout: "./src/assets/rick_poses/pout.png",
    profile_pic: "./src/assets/profile_1x1.jpg",
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
  };
}
