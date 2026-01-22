import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize innovation and user-centric design",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Founder & Entrepreneur with a passion for tech",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Always learning and evolving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-Stack Developer passionate about creating impactful products.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building scalable solutions with modern technologies",
    description: "Innovation in Progress",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to collaborate on your next big project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "AdMesh - In-Game Advertisement Platform",
    des: "Co-founder of AdMesh, an innovative in-game advertisement platform with live interaction capabilities. Features patented technology for real-time engagement and token-based monetization system.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://admesh.cloud",
    sourceCode: "https://admesh.cloud",
  },
  {
    id: 2,
    title: "Sumachh - Fintech Startup",
    des: "Founder of Sumachh, a fintech startup focused on delivering innovative financial solutions. Building scalable infrastructure with modern technologies.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://sumachh.com",
    sourceCode: "https://sumachh.com",
  },
  {
    id: 3,
    title: "Skipit - 1:1 Founder Meetings",
    des: "Platform connecting founders and entrepreneurs for meaningful one-on-one conversations. Facilitating knowledge sharing and strategic partnerships in the startup ecosystem.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://skipit.site",
    sourceCode: "https://skipit.site",
  },
  {
    id: 4,
    title: "Skipit - Connecting Innovators",
    des: "A platform designed for founders to meet, collaborate, and build meaningful connections. Share insights, explore partnerships, and grow your network with like-minded entrepreneurs.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://skipit.site",
    sourceCode: "https://skipit.site",
  },
] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} on AdMesh was an exceptional experience. His vision for in-game advertising is revolutionary, and his execution is flawless. His entrepreneurial mindset and technical expertise make him an invaluable partner. Highly recommended!`,
    name: "Industry Partner",
    title: "Gaming & Advertising Sector",
  },
  {
    quote: `${links.ownerName}'s work on our fintech platform was outstanding. His ability to translate complex financial requirements into elegant technical solutions is remarkable. His dedication to quality and innovation is truly inspiring.`,
    name: "Business Stakeholder",
    title: "Fintech Sector",
  },
  {
    quote: `As a co-founder, ${links.ownerName} brings both technical excellence and strategic vision. His patent for the AdMesh technology demonstrates his innovative thinking and attention to cutting-edge solutions.`,
    name: "Technology Advisor",
    title: "Digital Innovation",
  },
  {
    quote: `${links.ownerName}'s digital marketing campaigns transformed our online presence. His SEO expertise and strategic approach resulted in measurable improvements in our organic reach and engagement metrics.`,
    name: "Marketing Director",
    title: "E-Commerce",
  },
  {
    quote: `Working with ${links.ownerName} as a full-stack developer has been transformative. His attention to detail, problem-solving skills, and commitment to excellence set him apart. A true professional!`,
    name: "Project Manager",
    title: "Tech Innovation",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Founder - Sumachh",
    desc: "Leading fintech startup with focus on innovative financial solutions. Building scalable infrastructure and managing strategic vision.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Co-Founder - AdMesh",
    desc: "Pioneering in-game advertisement platform with live interaction capabilities. Patent holder for innovative monetization technology.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Founder - Skipit.site",
    desc: "Building a platform that connects founders and entrepreneurs. Facilitating one-on-one meetings and strategic partnerships in the startup ecosystem.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Serial Entrepreneur",
    desc: "Passionate about building innovative products and businesses. Focus on scaling startups and creating impactful solutions in the market.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shubham-zende-7697bb349",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/shubhamzende",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Next.js", "TypeScript"],
  stack2: ["Node.js", "MongoDB", "PostgreSQL"],
} as const;
