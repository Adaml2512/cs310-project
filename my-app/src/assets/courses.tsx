// Mathematics (4 units)
const Mathematics = [

    { courseId : "MATH 228-1", name: "Multivariable Differential Calculus for Engineering" },
    { courseId : "MATH 220-2", name: "Single-Variable Integral Calculus" },
    { courseId : "MATH 228-1", name: "Multivariable Differential Calculus for Engineering" },
    { courseId : "COMP_SCI 212-0", name: "Math Foundations of CS Part 1: Discrete Math for CS" }

]

// Basic Sciences (4 units)
const BasicSciences = [

    { courseId : "BASIC_SCIENCE 1", name: "Basic Science I" },
    { courseId : "BASIC_SCIENCE 2", name: "BASIC_SCIENCE II" },
    { courseId : "BASIC_SCIENCE 3", name: "BASIC_SCIENCE III" },
    { courseId : "BASIC_SCIENCE 4", name: "BASIC_SCIENCE IV" } 

]

// Engineering Analysis (4 units)
const EngineeringAnalysis = [

    { courseId : "GEN_ENG 205-1", name: "Engineering Analysis I" },
    { courseId : "GEN_ENG 205-2", name: "Engineering Analysis II" },
    { courseId : "GEN_ENG 205-3", name: "Engineering Analysis III" },
    { courseId : "COMP_SCI 111-0", name: "Fundamentals of Computer Programming" }

]

// Design Thinking and Communication (3 units)
const DTC = [

    { courseId : "DSGN 106-1", name: "Design Thinking and Communication I" },
    { courseId : "DSGN 106-2", name: "Design Thinking and Communication II" },
    { courseId : "COMM_ST 102-0", name: "Public Speaking" },
    { courseId : "PERF_ST 103-0", name: "Analysis and Performance of Text" },
    { courseId : "PERF_ST 203-0", name: "Performance Culture and Communication" },
    { courseId : "BMD_ENG 390-2", name: "Biomedical Engineering Design 1" }  
    
]

// Theme (7 units)
const Theme = [

    { courseId : "THEME 1", name: "Theme 1" },
    { courseId : "THEME 2", name: "Theme 2" },
    { courseId : "THEME 3", name: "Theme 3" },
    { courseId : "THEME 4", name: "Theme 4" },
    { courseId : "THEME 5", name: "Theme 5" },
    { courseId : "THEME 6", name: "Theme 6" },
    { courseId : "THEME 7", name: "Theme 7" },

]

// Core Classes (5 units)
const CoreClasses = [

    { courseId : "COMP_SCI 150-0", name: "Fundamentals of Computer Programming 1.5" },
    { courseId : "COMP_SCI 211-0", name: "Fundamentals of Computer Programming II" },
    { courseId : "COMP_SCI 213-0", name: "Introduction to Computer Systems" },
    { courseId : "COMP_SCI 214-0", name: "Data Structures & Algorithms" },
    { courseId : "COMP_SCI 262-0", name: "Mathematical Foundations of Computer Science - Part 2" }, // or one of the below
    { courseId : "IEMS 201-0", name: "Introduction to Statistics" }, // or
    { courseId : "IEMS 303-0", name: "Statistics" }, // or
    { courseId : "ELEC_ENG 302-0", name: "Probabilistic Systems" }, // or
    { courseId : "STAT 210-0", name: "Introduction to Probability and Statistics" }, // or

]

// Breadth Coureses (5 units total - 1 from each)
const BreadthClasses = [

    // Theory
    { courseId: "COMP_SCI 335-0", name: "Introduction to the Theory of Computation" },
    { courseId: "COMP_SCI 336-0", name: "Design & Analysis of Algorithms" },

    // Systems
    { courseId: "COMP_SCI 322-0", name: "Compiler Construction" },
    { courseId: "COMP_SCI 339-0", name: "Introduction to Database Systems" },
    { courseId: "COMP_SCI 340-0", name: "Introduction to Networking" },
    { courseId: "COMP_SCI 343-0", name: "Operating Systems" },
    { courseId: "COMP_SCI 345-0", name: "Distributed Systems" },
    { courseId: "COMP_SCI 346-0", name: "Microcontroller System Design" },
    { courseId: "COMP_SCI 350-0", name: "Introduction to Computer Security" },
    { courseId: "COMP_SCI 354-0", name: "Computer System Security" },
    { courseId: "COMP_SCI 440-0", name: "Advanced Networking" },
    { courseId: "COMP_SCI 441-0", name: "Resource Virtualization" },
    { courseId: "COMP_SCI 443-0", name: "Advanced Operating Systems" },
    { courseId: "COMP_SCI 446-0", name: "Kernel and Other Low-level Software Development" },
    { courseId: "COMP_SCI 450-0", name: "Internet Security" },
    { courseId: "COMP_ENG 303-0", name: "Advanced Digital Design" },
    { courseId: "COMP_ENG 346-0", name: "Microcontroller System Design" },
    { courseId: "COMP_ENG 358-0", name: "Introduction to Parallel Computing" },
    { courseId: "COMP_ENG 361-0", name: "Computer Architecture I" },

    // Artificial Intelligence
    { courseId: "COMP_SCI 325-0", name: "Artificial Intelligence Programming" },
    { courseId: "COMP_SCI 337-0", name: "Natural Language Processing: Classical Approaches" },
    { courseId: "COMP_SCI 344-0", name: "Design of Computer Problem Solvers" },
    { courseId: "COMP_SCI 348-0", name: "Introduction to Artificial Intelligence" },
    { courseId: "COMP_SCI 349-0", name: "Machine Learning" },
    { courseId: "COMP_SCI 371-0", name: "Knowledge Representation and Reasoning" },
    { courseId: "COMP_SCI 372-0", name: "Designing and Constructing Models with Multi-Agent Languages" },
    { courseId: "COMP_SCI 449-0", name: "Deep Learning" },

    // Interfaces
    { courseId: "COMP_SCI 313-0", name: "Tangible Interaction Design and Learning" },
    { courseId: "COMP_SCI 315-0", name: "Design, Technology, and Research" },
    { courseId: "COMP_SCI 329-0", name: "HCI Studio" },
    { courseId: "COMP_SCI 330-0", name: "Human Computer Interaction" },
    { courseId: "COMP_SCI 331-0", name: "Introduction to Computational Photography" },
    { courseId: "COMP_SCI 333-0", name: "Interactive Information Visualization" },
    { courseId: "COMP_SCI 351-1", name: "Introduction to Computer Graphics" },
    { courseId: "COMP_SCI 352-0", name: "Machine Perception of Music & Audio" },
    { courseId: "COMP_SCI 370-0", name: "Computer Game Design" },
    { courseId: "COMP_SCI 372-0", name: "Designing and Constructing Models with Multi-Agent Languages" },
    { courseId: "COMP_SCI 376-0", name: "Computer Game Design and Development" },
    { courseId: "COMP_SCI 377-0", name: "Game Design Studio" },
    { courseId: "ELEC_ENG 332-0", name: "Introduction to Computer Vision" },

    // Software Development and Programming Languages
    { courseId: "COMP_SCI 310-0", name: "Scalable Software Architectures" },
    { courseId: "COMP_SCI 321-0", name: "Programming Languages" },
    { courseId: "COMP_SCI 338-0", name: "Practicum in Intelligent Information Systems" },
    { courseId: "COMP_SCI 377-0", name: "Game Design Studio" },
    { courseId: "COMP_SCI 392-0", name: "Rapid Prototyping for Software Innovation" },
    { courseId: "COMP_SCI 393-0", name: "Software Construction" },
    { courseId: "COMP_SCI 394-0", name: "Agile Software Development" },
]

// Project Courses (2 units)
const ProjectCourses = [
    
   { courseId: "COMP_SCI 311-0", name: "Inclusive Making" },
   { courseId: "COMP_SCI 312-0", name: "Data Privacy" },
   { courseId: "COMP_SCI 315-0", name: "Design, Technology, and Research" },
   { courseId: "COMP_SCI 322-0", name: "Compiler Construction" },
   { courseId: "COMP_SCI 329-0", name: "HCI Studio" },
   { courseId: "COMP_SCI 330-0", name: "Human Computer Interaction" },
   { courseId: "COMP_SCI 331-0", name: "Introduction to Computational Photography" },
   { courseId: "COMP_SCI 337-0", name: "Natural Language Processing: Classical Approaches" },
   { courseId: "COMP_SCI 338-0", name: "Practicum in Intelligent Information Systems" },
   { courseId: "COMP_SCI 339-0", name: "Introduction to Database Systems" },
   { courseId: "COMP_SCI 340-0", name: "Introduction to Networking" },
   { courseId: "COMP_SCI 343-0", name: "Operating Systems" },
   { courseId: "COMP_SCI 344-0", name: "Design of Computer Problem Solvers" },
   { courseId: "COMP_SCI 345-0", name: "Distributed Systems" },
   { courseId: "COMP_SCI 346-0", name: "Microcontroller System Design" },
   { courseId: "COMP_SCI 351-1", name: "Introduction to Computer Graphics" },
   { courseId: "COMP_SCI 351-2", name: "Intermediate Computer Graphics" },
   { courseId: "COMP_SCI 354-0", name: "Computer System Security" },
   { courseId: "COMP_SCI 355-0", name: "Digital Forensics and Incident Response" },
   { courseId: "COMP_SCI 367-0", name: "Wireless and Mobile Health: Passive Sensing Data Analytics" },
   { courseId: "COMP_SCI 370-0", name: "Computer Game Design" },
   { courseId: "COMP_SCI 371-0", name: "Knowledge Representation and Reasoning" },
   { courseId: "COMP_SCI 372-0", name: "Designing and Constructing Models with Multi-Agent Languages" },
   { courseId: "COMP_SCI 377-0", name: "Game Design Studio" },
   { courseId: "COMP_SCI 392-0", name: "Rapid Prototyping for Software Innovation" },
   { courseId: "COMP_SCI 393-0", name: "Software Construction" },
   { courseId: "COMP_SCI 394-0", name: "Agile Software Development" },
   { courseId: "COMP_SCI 397-0", name: "Special Projects in Computer Science" },
   { courseId: "COMP_SCI 412-0", name: "Data Privacy" },
   { courseId: "COMP_SCI 415-0", name: "Design, Technology, and Research" },
   { courseId: "COMP_SCI 433-0", name: "Wireless Protocols for the Internet of Things" },
   { courseId: "COMP_SCI 441-0", name: "Resource Virtualization" },
   { courseId: "COMP_SCI 445-0", name: "Internet-scale Experimentation" },
   { courseId: "COMP_SCI 446-0", name: "Kernel and Other Low-level Software Development" },
   { courseId: "COMP_SCI 450-0", name: "Internet Security" },
   { courseId: "COMP_SCI 461-0", name: "Deep Learning for Natural Language Processing" },
   { courseId: "COMP_SCI 497-0", name: "Special Projects in Computer Science" },
   { courseId: "COMP_ENG 346-0", name: "Microcontroller System Design" },
   { courseId: "COMP_ENG 366-0", name: "Embedded Systems" },
   { courseId: "COMP_ENG 466-0", name: "Embedded Systems" },
   { courseId: "ELEC_ENG 332-0", name: "Introduction to Computer Vision" } 
]

// Advanced Electives (3 units)
const AdvancedElectives = [
    { courseId: "ADVANCED_ELEC 1", name: "Advanced Elective 1" },
    { courseId: "ADVANCED_ELEC 2", name: "Advanced Elective 2" }, 
    { courseId: "ADVANCED_ELEC 3", name: "Advanced Elective 3" } 
]

// Technical Electives (6 units)
const TechnicalElectives = [
    { courseId: "COMP_ENG 303-0", name: "Advanced Digital Design" },
    { courseId: "COMP_ENG 329-0", name: "The Art of Multicore Concurrent Programming" },
    { courseId: "COMP_ENG 334-0", name: "Fundamentals of Blockchains and Decentralization" },
    { courseId: "COMP_ENG 346-0", name: "Microcontroller System Design" },
    { courseId: "COMP_ENG 355-0", name: "ASIC and FPGA Design" },
    { courseId: "COMP_ENG 356-0", name: "Introduction to Formal Specification & Verification" },
    { courseId: "COMP_ENG 357-0", name: "Design Automation in VLSI" },
    { courseId: "COMP_ENG 358-0", name: "Introduction to Parallel Computing" },
    { courseId: "COMP_ENG 361-0", name: "Computer Architecture I" },
    { courseId: "COMP_ENG 362-0", name: "Computer Architecture Projects" },
    { courseId: "COMP_ENG 364-0", name: "CyberPhysical Systems Design and Application" },
    { courseId: "COMP_ENG 365-0", name: "Internet-of-things Sensors, Systems, And Applications" },
    { courseId: "COMP_ENG 366-0", name: "Embedded Systems" },
    { courseId: "COMP_ENG 368-0", name: "Programming Massively Parallel Processors with CUDA" },
    { courseId: "COMP_ENG 452-0", name: "Advanced Computer Architecture" },
    { courseId: "COMP_ENG 453-0", name: "Parallel Architectures" },
    { courseId: "COMP_ENG 456-0", name: "Modern Topics in Computer Architecture" },
    { courseId: "COMP_ENG 459-0", name: "VLSI Algorithmics" },
    { courseId: "COMP_ENG 464-0", name: "Cyber-Physical Systems Design and Application" },
    { courseId: "COMP_ENG 465-0", name: "Internet-of-things Sensors, Systems, And Applications" },
    { courseId: "COMP_ENG 466-0", name: "Embedded Systems" },
    { courseId: "COMP_ENG 468-0", name: "Programming Massively Parallel Processors with CUDA" },
    { courseId: "ELEC_ENG 326-0", name: "Electronic System Design I" },
    { courseId: "ELEC_ENG 332-0", name: "Introduction to Computer Vision" },
    { courseId: "ELEC_ENG 375-0", name: "Machine Learning: Foundations, Applications, and Algorithms" },
    { courseId: "ELEC_ENG 433-0", name: "Statistical Pattern Recognition" },
    { courseId: "ELEC_ENG 435-0", name: "Deep Learning: Foundations, Applications, and Algorithms" }
];
