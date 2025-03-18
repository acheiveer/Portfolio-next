import { IProject } from "./types"
import AIBlogger from "@/Images/ProjectImages/AIBlogger.png"
import soon from "@/Images/ProjectImages/soon.webp"
import ChatApp from "@/Images/ProjectImages/soon.webp"

const projects: Array<IProject> = [
  {
    title: "FriendOChats: Interactive Chat Application",
    description: "Developed a scalable, real-time chat application with MERN, Socket.io, and Zustand, featuring JWT authentication, real-time notifications, and an intuitive UI, boosting engagement by 80%.",
    thumbnail: ChatApp,
    githubLink: "https://friendochats.onrender.com/",
    demoLink: "https://friendochats.onrender.com/"
  },
  {
    title: "AI Blogger",
    description: "A modern, feature-rich blogging platform designed for writers, readers, and communities to connect, create, and engage. Built with a robust tech stack, this application provides seamless user experience and functionality for blog creation, collaboration, and interaction.",
    thumbnail: AIBlogger,
    githubLink: "https://github.com/acheiveer/Medium-Blog-App"
  },
  {
    title: "Exciting Upcoming Projects",
    description: "Explore my diverse collection of projects that will be added soon! Stay tuned for a variety of solutions, ranging from full-stack applications to advanced tech stacks, each designed to showcase my skills and creativity. Check back soon for more!",
    thumbnail: soon,
    githubLink: "https://github.com/acheiveer"
  },
  
]

export default projects