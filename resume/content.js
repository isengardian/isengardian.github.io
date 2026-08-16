/*
 * Resume content — single source of truth.
 * Edit this file to update the site; no build step required.
 * Loaded by index.html as `window.RESUME`.
 */
window.RESUME = {
  meta: {
    name: "Dian Ding",
    title: "Software Engineer",
    company: { name: "Instacart", url: "https://www.instacart.com/" },
    tagline: "Backend & data-infrastructure engineer building web-scale distributed systems, real-time streaming platforms, and production ML/data pipelines.",
    resumePdf: "https://dian-ding.s3.amazonaws.com/Resume_Dian+Ding.pdf",
    portrait: "./img/portrait.jpg",
    location: "Santa Clara, California, USA",
    email: "dian.ding.official@gmail.com",

    // Availability badge shown in the hero.
    // Swap `status` to any key in `statusOptions` (or set to null to hide the badge).
    status: "casual",
    statusOptions: {
      open:   { label: "Available for opportunities", tone: "positive" },
      casual: { label: "Open to interesting conversations", tone: "neutral" },
      hiring: { label: "Hiring for my team", tone: "positive" },
      closed: { label: "Not currently looking", tone: "muted" }
    }
  },

  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/dianding/" },
    { label: "GitHub", icon: "github", url: "https://github.com/isengardian?tab=repositories" },
    { label: "Email", icon: "mail", url: "mailto:dian.ding.official@gmail.com" },
    { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/damondingdingding/" }
  ],

  summary: [
    "Backend and data-infrastructure engineer with 9+ years designing large-scale distributed systems, real-time streaming platforms, and production ML pipelines that process billions of events per day with strong reliability and scalability.",
    "Specializes in web-scale data systems built on Kafka and Flink, with deep fluency across Golang, Java, Scala, and Python — and a track record of quickly mastering new technologies and driving their adoption across teams.",
    "Skilled at schema design, data modeling, and crafting high-quality datasets that power ML, analytics, recommendations, and operational platforms. Puts LLMs and AI tooling to work across development, design, debugging, and documentation to move faster and decide better.",
    "A technical leader who thrives in ambiguity, balances competing priorities, and partners across engineering, ML, infrastructure, product, and business to ship globally optimized solutions — while championing engineering excellence, operational quality, and mentorship.",
    "Away from the keyboard, Dian is an avid basketball and soccer player who loves music, movies, and exploring the outdoors."
  ],

  stats: [
    { value: "9+", label: "Years experience" },
    { value: "1B+", label: "Events / day" },
    { value: "5", label: "Patents filed" }
  ],

  education: [
    {
      degree: "M.Sc. in Computer Science",
      period: "Aug 2016 – Dec 2017",
      school: "North Carolina State University, USA"
    },
    {
      degree: "B.Eng. in Software Engineering",
      period: "Sep 2009 – Jun 2013",
      school: "Southeast University, China"
    }
  ],

  skills: [
    {
      group: "Languages",
      items: ["Golang", "Java", "Scala", "Python", "Ruby", "C/C++", "TypeScript", "JavaScript"]
    },
    {
      group: "Data & Streaming",
      items: ["Kafka", "Flink", "Real-Time Streaming", "Event-Driven Architecture", "Distributed Pipelines", "Spark", "MapReduce"]
    },
    {
      group: "Data Modeling & Storage",
      items: ["PostgreSQL", "MySQL", "Snowflake", "Redis", "DynamoDB", "MongoDB", "DBT", "ElasticSearch"]
    },
    {
      group: "Infrastructure & Cloud",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "gRPC", "GraphQL", "Protobuf"]
    },
    {
      group: "AI & ML",
      items: ["LLMs", "ML Pipelines", "Feature Engineering", "A/B Testing", "Recommendation Systems", "AI-Assisted Development"]
    }
  ],

  experience: [
    {
      period: "Jun 2021 – Present",
      role: "Senior Software Engineer",
      org: "Instacart",
      url: "https://www.instacart.com/",
      location: "San Francisco, USA",
      summary: "Tech lead for the Smart Inventory Platform, powering real-time catalog, availability, recommendation, and ML systems across Instacart's customer and shopper experiences.",
      bullets: [
        "Architected and led development of the Smart Inventory Platform — a distributed streaming system processing billions of events per day that cut inventory data latency from ~4 hours to ~1 minute.",
        "Engineered production-grade data pipelines and event-driven ML systems on Kafka and Flink, powering real-time inventory predictions, recommendations, and operational decisions.",
        "Designed scalable schemas, data models, and feature-rich datasets powering ML training, experimentation, recommendation ranking, and downstream analytics.",
        "Led a multi-model experimentation framework that reduced engineering integration time by 90%, accelerating product iteration and lifting profitability and quality KPIs.",
        "Partnered across Catalog, Ads, Marketing, Fulfillment, ML, Product, and Infrastructure teams to align priorities and deliver globally optimized platform solutions.",
        "Drove operational-excellence initiatives spanning incident response, root-cause analysis, CI/CD reliability, and long-term scalability investments.",
        "Mentored junior engineers across multiple teams, raising code-review and design standards while championing new tools and architectural patterns.",
        "Filed 5 patents applying machine learning and LLMs to automation, optimization, and internal engineering workflows."
      ]
    },
    {
      period: "Feb 2018 – Jun 2021",
      role: "Software Development Engineer",
      org: "Amazon",
      url: "https://www.amazon.com/",
      location: "Santa Clara, USA",
      groups: [
        {
          name: "Amazon Alexa",
          url: "https://alexa.amazon.com/",
          bullets: [
            "Designed and scaled backend systems for Alexa Reminders & Lists, serving millions of users and high-volume, low-latency interactions.",
            "Cut user-perceived latency by ~70% through deep backend optimization, improving scalability, maintainability, and service efficiency.",
            "Built a fault-tolerant, privacy-compliant two-way messaging platform from scratch, delivering strong reliability and availability guarantees.",
            "Delivered large-scale analytics and reporting pipelines that enabled data-driven product and operational decisions.",
            "Drove a user-growth initiative, designing and running A/B-tested upsells that justified feature launches with clear data and metrics.",
            "Served as Security Certifier and Certified NLU (Natural Language Understanding) Author, upholding engineering standards, compliance, and quality across releases.",
            "Partnered across engineering, product, and security teams to ship customer-facing features and elevate interaction quality."
          ]
        },
        {
          name: "AWS EC2",
          url: "https://aws.amazon.com/ec2/",
          bullets: [
            "Designed internal tooling and workflows for provisioning and de-provisioning EC2 instances, improving operational efficiency and reducing manual overhead."
          ]
        }
      ]
    },
    {
      period: "May 2017 – Aug 2017",
      role: "Software Development Engineer Intern",
      org: "AWS Marketplace",
      url: "https://aws.amazon.com/marketplace",
      location: "Seattle, USA",
      bullets: [
        "Built a backend service to transform structured data (JSON/XML → Ion) and compute structural diffs at scale.",
        "Developed an interactive visualization tool that streamlined debugging and boosted developer productivity."
      ]
    },
    {
      period: "Nov 2017 – Dec 2017",
      role: "Teaching Assistant / Grader",
      org: "NC State University",
      url: "https://www.csc.ncsu.edu/",
      location: "Raleigh, NC, USA",
      bullets: [
        "Teaching assistant for the graduate course Principles of Computer Graphics — led office hours and graded assignments, projects, and exams."
      ]
    },
    {
      period: "Oct 2015 – Jun 2016",
      role: "Software Development Engineer",
      org: "Shanghai Jizhuang Technology LLC",
      url: "http://m.j-zhuang.com/",
      location: "Shanghai, China",
      bullets: [
        "Architected and independently built a content-management system for merchandise, orders, users, and shipping.",
        "Designed and implemented RESTful APIs powering search/sort, checkout, payment, and user management for an e-commerce platform."
      ]
    },
    {
      period: "Jul 2014 – Sep 2015",
      role: "Software Development Engineer",
      org: "Yougu Decoration & Engineering (Shanghai) LLC",
      location: "Shanghai, China",
      bullets: [
        "Built a marketing site for ads, promotions, and events, and independently developed a full-stack CRM with Java/MySQL on the backend and PHP/HTML/CSS on the frontend.",
        "Architected an automated quoting system for home remodeling that cut interior designers' quoting time by ~80%."
      ]
    },
    {
      period: "Jul 2013 – May 2014",
      role: "Technical Support Engineer (SME)",
      org: "Pactera Technology International Ltd.",
      location: "Wuxi, China",
      bullets: [
        "Designed and implemented a Windows-based monitoring tool that tracked system health and alerted on failures in real time.",
        "Served as a site reliability engineer — monitoring systems, diagnosing hardware/software failures, and driving recovery, including guiding data-center hardware replacement."
      ]
    }
  ],

  patents: [
    { title: "Training Detection Model Using Output of Language Model Applied to Event Information", number: "18/210553", date: "Jun 15, 2023" },
    { title: "Selecting Replacement Items for an Order Based on Machine-Learned Predictions of Positive and Negative Events", number: "18/444498", date: "Feb 16, 2024" },
    { title: "Streamlined Image-to-Message and Action Replacement Workflow with Multi-Modality Machine-Learned Large Language Model", number: "18/661317", date: "May 10, 2024" },
    { title: "Solving Assignment Optimization Problems Using Lost-Value Metric in Optimization Processes", number: "63/765374", date: "Feb 28, 2025" },
    { title: "Multi-Layer Machine Learning System for Selecting a Prediction Model Based on Tradeoff Between Model Latency/Cost Versus Precision", number: "19/531593", date: "Feb 5, 2026" }
  ],

  projects: [
    {
      name: "Smart Inventory Platform",
      tags: ["web"],
      image: "./img/instacart.svg",
      url: "https://www.instacart.com/",
      desc: "Real-time inventory platform at Instacart processing billions of events/day via Kafka + Flink, cutting data latency from ~4 hours to ~1 minute and powering ML predictions and recommendations."
    },
    {
      name: "Alexa Reminders",
      tags: ["web", "iosapp"],
      image: "./img/alexa.png",
      url: "https://alexa.amazon.com/spa/index.html#timersAndAlarms/reminders",
      desc: "Create, browse, and cancel time-based or location-based reminders on the Alexa app/website or by talking to Echo devices — backed by systems serving millions of users."
    },
    {
      name: "JZ Mall",
      tags: ["web"],
      image: "./img/jizhuang.png",
      url: "http://m.j-zhuang.com/",
      desc: "A CMS for managing merchandise, orders, users, and shipping, plus RESTful APIs for the mobile app handling search/sort, checkout, payment, and user management."
    },
    {
      name: "YZ CRM",
      tags: ["web"],
      image: "./img/youzi.png",
      url: "#experience",
      desc: "A website for ads, promotions, and events with a CRM for user management, plus a quoting system for home modeling that cut interior designers' quoting time by ~80%."
    }
  ],

  otherProjects: [
    { name: "CI/CD Pipeline", note: "Course Project", desc: "An Ansible + Jenkins pipeline for a Java and a Node.js project — provisioning Ubuntu on AWS, coverage analysis, fuzzer testing, rolling updates, canary releases, and traffic-based autoscaling." },
    { name: "CNN for Dog Breed Recognition", note: "Course Project", desc: "Designed and implemented a convolutional neural network for dog-breed recognition." },
    { name: "C Compiler", note: "Course Project", desc: "A demo C compiler written in Java — scanner, parser, and code generator." },
    { name: "Frogger Game", note: "Course Project", desc: "The classic Frogger, built with WebGL and JavaScript.", link: { label: "Online Demo", url: "https://isengardian.github.io/frogger/" } },
    { name: "Ego Network", note: "Course Project", desc: "Social analytics on the Neo4j graph database — computing betweenness centrality across thousands of nodes with Dijkstra's algorithm." },
    { name: "Socially-Aware Ringer Manager", note: "Course Project", desc: "A trained grading model that recommends the ringer mode to use based on the caller's social context, adapting from feedback." },
    { name: "Course Register", note: "Course Project", desc: "An Oracle relational-database application supporting university course registration." }
  ],

  contact: {
    email: "dian.ding.official@gmail.com",
    location: "Santa Clara, California, USA",
    note: "Feel free to reach out — always happy to connect."
  }
};
