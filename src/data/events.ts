export interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  status: "Upcoming" | "Completed" | "Ongoing";
}

export const events: Event[] = [
  {
    title: "Generative AI Hackathon 2026",
    date: "August 12-14, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "Main Engineering Block, Lab 4",
    description:
      "A 48-hour sprint to build functional MVPs leveraging modern large language models.",
    status: "Upcoming",
  },
];