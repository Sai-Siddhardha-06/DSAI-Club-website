export interface TeamMember {
  name: string;
  role: "Coordinator" | "Core Member"| "Contributor";
  specialty: string;
  bio: string;
  image?: string;
  linkedin?: string;
  github?: string;
}

export const team: TeamMember[] = [
  {
    name: "Vatsal Yadav",
    role: "Coordinator",
    specialty: "Reinforcement Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/vatsal.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Siddesh Bansal",
    role: "Coordinator",
    specialty: "Machine Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/siddhesh.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Parth Nitinkumar Bhosale",
    role: "Core Member",
    specialty: "Reinforcement Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/parth.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Shlok Divyam",
    role: "Core Member",
    specialty: "Machine Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/shlok.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Sikharam Satya Shri Harsha Phani",
    role: "Core Member",
    specialty: "Reinforcement Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/harsha.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "T Saketh Ram",
    role: "Core Member",
    specialty: "Machine Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/saketh.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Moguluri Sai Siddhardha",
    role: "Core Member",
    specialty: "Reinforcement Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/sai.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
  {
    name: "Yog Damahe",
    role: "Core Member",
    specialty: "Machine Learning",
    bio: "Senior CS student passionate about building real-world deployment pipelines for automated systems.",
    image: "/team/yog.jpg",
    linkedin: "https://linkedin.com",
    github: "https.githubcom",
  },
];