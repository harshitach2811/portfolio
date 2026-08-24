export const personalInfo = {
  name: "Harshita",
  shortName: "Harshita",
  title: "B.Tech AI/ML Student & Aspiring AI Engineer",
  university: "GLA University, Mathura",
  year: "2nd Year",
  degree: "B.Tech in Artificial Intelligence & Machine Learning",
  location: "Mathura, India",
  tagline: "Currently exploring Artificial Intelligence, Machine Learning, data-driven problem solving, and the technologies that turn ideas into useful products.",
  aboutText: [
    "I'm Harshita, a 2nd-year B.Tech student in Artificial Intelligence & Machine Learning at GLA University, Mathura.",
    "I'm currently building my foundation in AI, machine learning, programming, data analysis, and cloud technologies. Rather than trying to know everything at once, I'm focused on learning consistently, experimenting with projects, and understanding how technology can solve real-world problems.",
    "My goal is to grow into an AI Engineer who can move beyond theory and build practical, useful solutions."
  ],
  links: {
    github: "https://harshitach2811.github.io/sales_dashboard/",
    githubUser: "harshitach2811",
    linkedin: "https://www.linkedin.com/in/harshita-220899402",
    credlyBadge: "https://www.credly.com/badges/f5e4a345-dc91-468a-9776-cb2e85be8c45/public_url"
  }
};

export const progressionPillars = [
  {
    step: "01",
    title: "Student",
    subtitle: "GLA University",
    description: "2nd Year B.Tech specializing in Artificial Intelligence & Machine Learning.",
    icon: "GraduationCap"
  },
  {
    step: "02",
    title: "Learning",
    subtitle: "Core Foundations",
    description: "Building strong fundamentals in Python, mathematics, data structures & ML theory.",
    icon: "BookOpen"
  },
  {
    step: "03",
    title: "Building",
    subtitle: "Hands-on Projects",
    description: "Applying concepts to real data sets and developing interactive analytical tools.",
    icon: "Terminal"
  },
  {
    step: "04",
    title: "Growing",
    subtitle: "Continuous Improvement",
    description: "Iterating from mistakes, exploring cloud tech, and expanding problem-solving capabilities.",
    icon: "TrendingUp"
  }
];

export const journeyMilestones = [
  {
    phase: "01",
    stage: "Curiosity",
    tagline: "The Starting Spark",
    description: "I became interested in how technology can solve real-world problems and how data reveals hidden patterns.",
    highlight: "Initial interest in computing & problem solving"
  },
  {
    phase: "02",
    stage: "Learning AI and Data",
    tagline: "Building the Foundation",
    description: "I am learning the basics of Python, data analysis, artificial intelligence, and machine learning step by step.",
    highlight: "Core Python, Data Analysis, Math for AI"
  },
  {
    phase: "03",
    stage: "Practicing Skills",
    tagline: "Hands-on Experiments",
    description: "I practice my skills through structured courses, documentation, coding exercises, and small experiments.",
    highlight: "Daily practice & algorithmic thinking"
  },
  {
    phase: "04",
    stage: "Building Projects",
    tagline: "Application to Real Data",
    description: "I created a Sales Analytical Dashboard to understand, organize, and present sales data clearly.",
    highlight: "Sales Analytical Dashboard development"
  },
  {
    phase: "05",
    stage: "Improving Every Day",
    tagline: "Feedback & Iteration",
    description: "I learn from my mistakes, refine my code, and continue improving my technical and problem-solving skills.",
    highlight: "Iterative growth & cloud certification"
  },
  {
    phase: "06",
    stage: "Becoming an AI Engineer",
    tagline: "The North Star",
    description: "Working towards designing, deploying, and optimizing practical AI systems that make an impact.",
    highlight: "Aspiring AI Engineer goal",
    isFuture: true
  }
];

export const skillCategories = [
  {
    id: "programming",
    title: "Programming & Data",
    description: "Foundational languages and analytical tools for data processing and analysis.",
    skills: [
      { name: "Python", isLearning: false, note: "Core Language" },
      { name: "Data Analysis", isLearning: false, note: "Exploratory & Statistical" },
      { name: "Data Visualization", isLearning: false, note: "Charts & Visual Storytelling" },
      { name: "SQL", isLearning: false, note: "Data Querying" }
    ]
  },
  {
    id: "aiml",
    title: "AI / ML",
    description: "Theoretical concepts and practical algorithms currently being mastered.",
    skills: [
      { name: "Machine Learning", isLearning: true, note: "Currently Learning" },
      { name: "Artificial Intelligence", isLearning: true, note: "Currently Learning" },
      { name: "Data-driven Problem Solving", isLearning: false, note: "Analytical Thinking" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Platforms, cloud infrastructure, and version control systems.",
    skills: [
      { name: "Microsoft Azure", isLearning: false, note: "Certified Fundamentals" },
      { name: "Cloud Computing", isLearning: false, note: "Cloud Core Concepts" },
      { name: "Git / GitHub", isLearning: false, note: "Version Control & Repos" },
      { name: "Dashboard Development", isLearning: false, note: "UI & Visual Insights" }
    ]
  }
];

export const featuredProject = {
  id: "sales-dashboard",
  title: "Sales Analytical Dashboard",
  category: "Data Analytics & Visualization",
  status: "Completed & Documented",
  githubRepo: "harshitach2811/sales_dashboard",
  githubUrl: "https://github.com/harshitach2811/sales_dashboard",
  description: "A sales analytics dashboard created to transform sales data into an easier-to-understand visual overview. The project focuses on exploring sales performance, identifying trends, and presenting business insights through an interactive analytical dashboard.",
  technologies: ["Python", "Data Analysis", "Data Visualization", "SQL / CSV Processing", "Dashboard Design"],
  whatILearned: [
    "Working with real-world-style transactional sales data",
    "Data cleaning, null-handling, and normalization techniques",
    "Creating meaningful visualizations that highlight KPI metrics",
    "Turning raw tabular rows into actionable business insights",
    "Structuring an intuitive dashboard layout for easier decision-making"
  ],
  caseStudy: {
    problem: "Raw sales data can be difficult to interpret without visual organization.",
    approach: "Analyze and organize sales information into a dashboard that makes important patterns and trends easier to understand.",
    outcome: "A visual analytical interface that helps turn sales data into understandable insights.",
    architecture: [
      { step: "1. Data Ingestion", detail: "Reading raw sales records, handling data types, formatting timestamps and currency metrics." },
      { step: "2. Cleaning & Transformation", detail: "Filtering anomalies, calculating aggregations (revenue, volume, average ticket size)." },
      { step: "3. Visualization Layer", detail: "Constructing charts for periodic trends, category breakdowns, and performance KPIs." },
      { step: "4. Insight Extraction", detail: "Highlighting top-performing segments and sales patterns for quick interpretation." }
    ]
  }
};

export const certification = {
  title: "Microsoft Certified: Azure Fundamentals",
  shortTitle: "Azure Fundamentals",
  organization: "Microsoft",
  category: "Cloud Computing",
  badgeUrl: "https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/twitter_thumb_201604_image.png",
  credlyUrl: "https://www.credly.com/badges/f5e4a345-dc91-468a-9776-cb2e85be8c45/public_url",
  description: "Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
  skillsVerified: [
    "Cloud Concepts & Service Models (IaaS, PaaS, SaaS)",
    "Azure Architecture & Core Cloud Services",
    "Azure Management, Governance & Security Fundamentals"
  ]
};

export const currentlyLearningTopics = [
  { topic: "Machine Learning fundamentals", status: "Active Study" },
  { topic: "AI concepts & model architectures", status: "Active Exploration" },
  { topic: "Data analysis & statistical inference", status: "Hands-on Practice" },
  { topic: "Cloud technologies & distributed systems", status: "Expanding Knowledge" },
  { topic: "Building better end-to-end projects", status: "Ongoing Development" },
  { topic: "Improving algorithmic problem-solving", status: "Daily Practice" }
];

export const learningFramework = [
  {
    number: "01",
    stage: "Learn",
    title: "Understand the Core",
    description: "Understand the fundamentals and theoretical principles before jumping into complex tools or abstractions.",
    accent: "border-neutral-200"
  },
  {
    number: "02",
    stage: "Build",
    title: "Apply by Making",
    description: "Turn abstract concepts into tangible small projects, writing code that runs and solves specific tasks.",
    accent: "border-neutral-200"
  },
  {
    number: "03",
    stage: "Experiment",
    title: "Test & Break",
    description: "Try different approaches, test edge cases, debug unexpected outputs, and learn directly from mistakes.",
    accent: "border-neutral-200"
  },
  {
    number: "04",
    stage: "Improve",
    title: "Refine & Iterate",
    description: "Review implementation, optimize for clarity and performance, and maintain an ongoing cycle of improvement.",
    accent: "border-red-500"
  }
];
