export interface ILecture {
  id: string,
  title: string,
  lectures: number,
  time: number,
};

export interface ICourse {
  title: string,
  description: string,
  content: Array<ILecture>
};

export interface ICourses  {
  [key: string]: ICourse
};

export const courses: ICourses = {
  design: {
    title: "Design",
    description: "The Ultimate Graphic Design Course Which Covers Photoshop, Illustrator, InDesign,Design Theory, Branding and Logo Design",
    content: [
      {
        id: "design-1",
        title: "Important! The Course Guide & Downloadable .Zip File!",
        lectures: 2,
        time: 5
      },
      {
        id: "design-2",
        title: "How to Become a Graphic Designer",
        lectures: 2,
        time: 23
      },
      {
        id: "design-3",
        title: "Graphic Design Theory",
        lectures: 24,
        time: 120
      },
      {
        id: "design-4",
        title: "Adobe Photoshop - The Very Basics",
        lectures: 10,
        time: 100
      },
      {
        id: "design-5",
        title: "Adobe Photoshop - Introduction to Photo Editing",
        lectures: 12,
        time: 110
      },
      {
        id: "design-6",
        title: "NEW! How to Encourage and Spark Creativity",
        lectures: 1,
        time: 11
      },
      {
        id: "design-7",
        title: "Photoshop Editing and Manipulation - Intermediate Skills",
        lectures: 8,
        time: 59
      },
      {
        id: "design-8",
        title: "Conclusion",
        lectures: 2,
        time: 10
      },
    ]
  },
  development: {
    title: "development",
    description: "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    content: [
      {
        id: "development-1",
        title: "Course Overview",
        lectures: 5,
        time: 19
      },
      {
        id: "development-2",
        title: "Python Setup",
        lectures: 5,
        time: 54
      },
      {
        id: "development-3",
        title: "Python Object and Data Structure Basics",
        lectures: 21,
        time: 240
      },
      {
        id: "development-4",
        title: "Python Comparison Operators",
        lectures: 2,
        time: 10
      },
      {
        id: "development-5",
        title: "Python Statements",
        lectures: 7,
        time: 78
      },
      {
        id: "development-6",
        title: "Methods and Functions",
        lectures: 18,
        time: 340
      },
      {
        id: "development-7",
        title: "Milestone Project - 1",
        lectures: 8,
        time: 80
      },
      {
        id: "development-8",
        title: "Object Oriented Programming",
        lectures: 9,
        time: 120
      },
      {
        id: "development-9",
        title: "Modules and Packages",
        lectures: 12,
        time: 250
      },
      {
        id: "development-10",
        title: "Python Generators",
        lectures: 2,
        time: 20
      },
      {
        id: "development-11",
        title: "Conclusion",
        lectures: 2,
        time: 10
      },
    ]
  },
  marketing: {
    title: "Marketing",
    description: "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
    content:[
      {
        id: "marketing-1",
        title: "Introduction",
        lectures: 6,
        time: 19
      },
      {
        id: "marketing-2",
        title: "Market Research",
        lectures: 6,
        time: 36
      },
      {
        id: "marketing-3",
        title: "Make a Website",
        lectures: 8,
        time: 48
      },
      {
        id: "marketing-4",
        title: "Email Marketing",
        lectures: 8,
        time: 45
      },
      {
        id: "marketing-5",
        title: "Copywriting",
        lectures: 7,
        time: 30
      },
      {
        id: "marketing-6",
        title: "Search Engine Optimization (SEO)",
        lectures: 24,
        time: 300
      },
      {
        id: "marketing-7",
        title: "YouTube Marketing",
        lectures: 19,
        time: 150
      },
      {
        id: "marketing-8",
        title: "Facebook Marketing",
        lectures: 15,
        time: 120
      },
      {
        id: "marketing-9",
        title: "Twitter Marketing",
        lectures: 15,
        time: 120
      },
      {
        id: "marketing-10",
        title: "Conclusion",
        lectures: 3,
        time: 12
      },
    ]
  },
  software: {
    title: "Software",
    description: "Software Engineering 101: Use Software Engineering to Plan and Build Amazing Software + Learn SCRUM Framework!",
    content:[
      {
        id: "software-1",
        title: "Introduction",
        lectures: 6,
        time: 19
      },
      {
        id: "software-2",
        title: "Software Lifecycle",
        lectures: 4,
        time: 20
      },
      {
        id: "software-3",
        title: "Requirements and Specifications",
        lectures: 12,
        time: 120
      },
      {
        id: "software-4",
        title: "Design: Architecture",
        lectures: 10,
        time: 59
      },
      {
        id: "software-5",
        title: "Design: Modularity",
        lectures: 17,
        time: 150
      },
      {
        id: "software-6",
        title: "Implementation and Deployment",
        lectures: 7,
        time: 50
      },
      {
        id: "software-7",
        title: "Testing",
        lectures: 12,
        time: 56
      },
      {
        id: "software-8",
        title: "Software Development Models",
        lectures: 9,
        time: 45
      },
      {
        id: "software-9",
        title: "Agile",
        lectures: 6,
        time: 37
      },
      {
        id: "software-10",
        title: "Scrum Deep Dive",
        lectures: 12,
        time: 89
      },
      {
        id: "software-11",
        title: "Conclusion",
        lectures: 2,
        time: 10
      },
    ]
  },
  analysis: {
    title: "Analysis",
    description: "Set yourself up for success, learn the key business analysis concepts to thrive in your Business Analyst career",
    content: [
      {
        id: "analysis-1",
        title: "Welcome to the Course!",
        lectures: 4,
        time: 2
      },
      {
        id: "analysis-2",
        title: "The Basics",
        lectures: 5,
        time: 17
      },
      {
        id: "analysis-3",
        title: "Software Development Lifecycles (SDLC)",
        lectures: 10,
        time: 89
      },
      {
        id: "analysis-4",
        title: "Initiating a Project",
        lectures: 8,
        time: 51
      },
      {
        id: "analysis-5",
        title: "Requirement Basics",
        lectures: 6,
        time: 80
      },
      {
        id: "analysis-6",
        title: "Requirement Elicitation",
        lectures: 9,
        time: 59
      },
      {
        id: "analysis-7",
        title: "Requirement Analysis",
        lectures: 6,
        time: 44
      },
      {
        id: "analysis-8",
        title: "Requirement Specification",
        lectures: 9,
        time: 55
      },
      {
        id: "analysis-9",
        title: "Requirements Approval",
        lectures: 4,
        time: 24
      },
      {
        id: "analysis-10",
        title: "After the Project",
        lectures: 3,
        time: 22
      },
      {
        id: "analysis-11",
        title: "Conclusion",
        lectures: 2,
        time: 10
      },
    ]
  }
};
