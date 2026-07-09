export type ProjectStatus = "Active" | "Completed";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  github: string;
};

export const projects: Project[] = [
  {
    title: "IntelliView",
    description:
      "AI-powered interview platform being built by the DSAI Club to simulate technical interviews and help students practice.",
    tags: ["TypeScript", "AI", "Web App"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/IntelliView",
  },
  {
    title: "Cloudphysician",
    description:
      "Project aimed at addressing challenges in ICU care by leveraging machine learning and computer vision to extract vital signs from patient monitor images.",
    tags: ["Python", "Computer Vision", "Healthcare"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/Cloudphysician",
  },
  {
    title: "FaceRec",
    description:
      "Face recognition system to be implemented in IIT Bhilai for secure identification and attendance use-cases.",
    tags: ["Jupyter Notebook", "Deep Learning", "Face Recognition"],
    status: "Completed",
    github: "https://github.com/dsai-iitbhilai/FaceRec",
  },
  {
    title: "yolov7-deepsort-tracking",
    description:
      "Modular codebase for object detection and tracking in videos using YOLOv7 and DeepSORT, ready for real-world deployment.",
    tags: ["Jupyter Notebook", "YOLOv7", "Tracking"],
    status: "Active",
    github: "https://github.com/dsai-iitbhilai/yolov7-deepsort-tracking",
  },
  {
    title: "Photo-Sharing-App",
    description:
      "Photo sharing web app that uses ML to group faces, organize group photos automatically, and make sharing easier.",
    tags: ["HTML", "Machine Learning", "Web App"],
    status: "Completed",
    github: "https://github.com/dsai-iitbhilai/Photo-Sharing-App",
  },
  {
    title: "Automatic Turret",
    description: 
      "An intelligent targeting system that detects and tracks objects using multiple sensors and automatically determines the optimal aiming direction.",
    tags: ["Python", "OpenCV", "PyTorch", "Arduino", "Computer Vision", "Sensor Fusion"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  },
  {
    title: "Lag Based Weather Prediction Using Inter-Regional Weather Data",
    description: 
      "A machine learning model that predicts regional weather conditions by analyzing time-delayed weather patterns across different parts of India.",
    tags: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "Time Series Analysis"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  },
  {
    title: "Safest Route Recommendation System",
    description: 
    "A route planning system that recommends safer travel paths by identifying and avoiding accident, crime, and traffic hotspots.",
    tags: ["Python", "NetworkX", "GeoPandas", "Scikit-learn", "PostGIS", "OpenStreetMap"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  },  
  {
    title: "Graph Neural Network for Predicting Water Quality in Indian Rivers Using Sensor Networks",
    description: 
    "A graph-based deep learning model that predicts river water quality by leveraging spatial relationships between monitoring stations.",
    tags: ["Python", "PyTorch Geometric", "PyTorch", "NetworkX", "GeoPandas", "GIS"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  },
  {
    title: "Automatic Turret",
    description: 
    "AAn intelligent targeting system that detects and tracks objects using multiple sensors and automatically determines the optimal aiming direction.",
    tags: ["Python", "OpenCV", "PyTorch", "Arduino", "Computer Vision", "Sensor Fusion"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  },
  {
    title: "IIT Bhilai AI Assistant: A Retrieval-Augmented Campus Chatbot",
    description: 
    "An AI-powered chatbot that provides accurate answers to campus-related queries using information retrieved from official IIT Bhilai resources.",
    tags: ["Python", "LangChain", "FAISS", "LLM APIs", "Selenium", "Streamlit"],
    status:"Active",
    github: "https://github.com/dsai-iitbhilai"
  }
];
