export interface Skill {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  image: string;
  images: string[];
  tools: string[];
  status: 'live' | 'case-study';
  link?: string;
  liveLink?: string;
  githubLink?: string;
  figmaLink?: string;
  challenge: string;
  solution: string;
  results: string[];
  date: string;
  myrole: string;
  assignmentdescription: string;
  assignmentimg: string[];
  conclusion: string[];
  figmaimg: ({ img: string; title: string | string[]; description: string | string[] } | string)[];
  keyFeatures: string[];
  figmaWireframe?: { img?: string; title: string | string[]; description: string | string[] }[];
  aiDesignerShowcase?: {
    workflowAndStructure: string[];
    promptLogic: string[];
    collaboration: string[];
    productionAndDelivery: string[];
    systemsThinking: string[];
  };
  myApproach?: {
    title: string;
    content: {
      text?: string;
      list?: string[];
    }[];
  }[];
}

export const projects: Project[] = [
  /* project 1 */
  {
    id: 1,
    slug: 'travelbuddy',
    title: 'TravelBuddy',
    description: 'Work professionally as a UX/UI designer with Front End skills. Translate user needs into a finished product or service. Use agile methods to participate in projects and work processes.',
    fullDescription: 'Work professionally as a UX/UI designer with Front End skills. Translate user needs into a finished product or service. Use agile methods to participate in projects and work processes.',
    category: 'UX/UI Design & Development',
    image: '/assets/tb/TB-Hero.png',
    images: ['/assets/tb/TB-Hero.png', '/assets/tb/TB-Desktop.png', '/assets/tb/TB-Tablet.png', '/assets/tb/TB-Mobile.png', ],
    tools: ['Figma', 'Figjam', 'React JS', 'Discord'],
    status: 'case-study',
    myrole: 'User research, Usability testing, Wireframes and prototypes',
    assignmentdescription: 'Create wireframes and prototypes for a travel planning application, conduct user research to gather insights, and perform usability testing to validate design decisions.',
    assignmentimg: ['/assets/tb/ResApp-MobileSection.png', '/assets/project-prototypes.jpg'],
    conclusion: [
      "TravelBuddy is an ultimate personal travel guide, designed to inspire and assist you in discovering dining options, dream destinations, accommodations, and activities tailored to your preferences.",
      "By combining the power of AI with intuitive usability, personalized recommendations, and geolocation.",
      "TravelBuddy goes beyond the traditional travel assistant.",
      "It anticipates your needs and provides quick, relevant answers with just a tap.",
      "The design process allowed for continuous improvement based on user testing."
    ],
    keyFeatures: [
      "AI-powered recommendations",
      "Intuitive user interface",
      "Seamless integration with travel services"
    ],
    figmaimg: [
      {
        img: "/assets/tb/TB-Problem&Solutions.png",
        title: "TravelBuddy's Problem & Solutions",
        description:[
        ]
      },
      {
        img: "/assets/tb/TB-Persona.png",
        title: "TravelBuddy's Persona",
        description:[
        ]
      },
            {
        img: "/assets/tb/TB-Style.png",
        title: "TravelBuddy's Style Guide",
        description:[
        ]
      },
      {
        img: "/assets/tb/TB-Components.png",
        title: "TravelBuddy's Components",
        description:[
        ]
      },
    ],
    figmaWireframe: [
      {
        img: "/assets/tb/Wireframes.png",
        title: "The TravelBuddy wireframes were created to design a personalized travel assistant app, helping users plan and enjoy trips effortlessly. The focus was on onboarding, personalization, and usability across key flows such as login, profile creation, recommendations, and support.",
        description:[
        ]
      },
      {
        img: "/assets/tb/Onboarding_Personalization.png",
        title: "This flow builds user engagement right from the start by offering a customized journey.",
        description:[
          "A welcoming intro screen introduces the app's value.",
          "New users can create a profile by entering details or logging in via Facebook/Google.",
          "Personalization features include choosing favorite cuisines, travel interests, and preferences, ensuring tailored recommendations.",
        ]
      },
      {
        img: "/assets/tb/Authentication_Security.png",
        title: "The authentication flow ensures user accounts are secure and personalized. It includes:",
        description:[
          "Includes login, sign-up, and password reset screens.",
          "Confirmation states provide feedback (e.g., “Password reset successful”).",
          "Multiple login options (email, social logins) make the process accessible and quick.",
          "Robust security measures (e.g., CAPTCHA, two-factor authentication) protect user accounts."
        ]
      },
      {
        img: "/assets/tb/Profile_Settings.png",
        title: "The profile settings page allows users to manage their personal information and preferences. It includes:",
        description:[
          "Profile screen displays user details and avatar.",
          "Settings include appearance mode (dark/light), feedback options, and account deletion.",
          "Editable profile fields (name, phone, email, preferences) allow users to update information easily.",
        ]
      },
      {
        img: "/assets/tb/Core_Features.png",
        title: "The core features page showcases the app's main functionalities. It includes:",
        description:[
          "Travel assistant dashboard greets users personally and offers quick access to actions: Find your dream vacation, Places to stay nearby, Find food nearby and Experiences & activities.",
          "An About page highlights app benefits and provides direct support via chat and contact info.",
        ]
      },
      {
        img: "/assets/tb/Feedback.png",
        title: "Feedback & Ratings includes:",
        description:[
          "Users can rate their experience with the app.",
          "A review system allows users to provide detailed feedback.",
          "Incentives for users to leave feedback (e.g., discounts, rewards).",
        ]
      },
    ],
    date: '2024-01-15',
    link: 'https://travelbuddy-demo.com',
    figmaLink: 'https://www.figma.com/design/jwKUkFEj6WmTKHI1h6dgb6/Chas-s-cases?node-id=0-1&t=IeyPi2C3NlU7n26c-1',
    challenge: 'Creating an intuitive travel planning experience that helps users organize complex itineraries while maintaining simplicity.',
    solution: 'Developed a user-centered design approach with extensive user research, prototyping, and iterative testing to create an seamless travel planning interface.',
    results: ['Improved user engagement by 40%', 'Reduced planning time by 60%', 'Achieved 95% user satisfaction score']
  },
  /* project 2 */
  {
    id: 2,
    slug: 'shoes-stitches',
    title: 'Shoes & Stitches',
    description: 'Deepen the knowledge and ability to develop interfaces for both mobile applications and websites using the ReactJS framework. The focus is on optimizing user experience and creating responsive, modern designs.',
    fullDescription: 'Deepen the knowledge and ability to develop interfaces for both mobile applications and websites using the ReactJS framework. The focus is on optimizing user experience and creating responsive, modern designs.',
    category: 'E-commerce Development',
    image: '/assets/ws/Ws-banner.png',
    images: ['/assets/ws/View.png', '/assets/ws/ProductList.png', '/assets/ws/Inloggning.png', '/assets/ws/Handlings.png', '/assets/ws/HandlingOfOrders.png', '/assets/ws/ProtectAPI.png'],
    tools: ['Figma', 'HTML&CSS', 'React JS', 'TailwindCSS', 'Firebase'],
    status: 'live',
    myrole: 'Figma Wireframe, Front End Developer',
    assignmentdescription: 'Develop the front-end of the e-commerce platform using React and TailwindCSS, ensuring a responsive and user-friendly design.',
    assignmentimg: ['/assets/project-ecommerce.jpg', '/assets/project-dashboard.jpg'],
    conclusion: [
      "The project successfully created a seamless shopping experience across devices.",
      "User feedback highlighted the intuitive design and ease of navigation.",
      "The use of modern technologies ensured high performance and scalability."
    ],
    keyFeatures: [
      "Product list and filtering: Grid-displayed format with images, prices and short descriptions. Products-filter based on category, price range or size.",
      "Responsive design: Ensured a seamless shopping experience across devices with a mobile-first approach.",
      "Smooth shopping cart flow: Simplified the checkout process with a clear and intuitive interface, reducing cart abandonment rates."
    ],
    figmaimg: [
      {
        img: "/assets/ws/Ws-lofil.png",
        title: "Shoes & Stitches Lo-fi Wireframes",
        description:[
        ]
      },
      {
        img: "/assets/ws/Ws-Architecture.png",
        title: "Shoes & Stitches Architecture",
        description:[
        ]
      },
      {
        img: "/assets/ws/Ws-Userflow.png",
        title: "Shoes & Stitches User Flow",
        description:[
        ]
      },
      {
        img: "/assets/ws/Ws-Style.png",
        title: "Shoes & Stitches Components",
        description:[
        ]
      },
    ],
    figmaWireframe: [
      {
        img: "/assets/ws/Ws-Wireframe.png",
        title: "Shoes & Stitches's wireframes were designed to structure a modern e-commerce experience for a fashion and footwear brand. The focus was on usability, product discoverability, and a smooth purchase flow. All wireframes include desktop and mobile versions to ensure responsiveness. It includes:",
        description:[
          "Home page with strong hero section with promotional messaging and CTA. Featured products to immediately showcase popular items. Visual brand storytelling through lifestyle imagery. A best sellers section to drive conversions with proven products. The home page balances inspiration and commerce, encouraging users to explore and shop.",
          "Grid layout displaying multiple products in products listing page with clear images and prices. Filtering and sorting options to help users find items quickly and consistent product card design for easy scanning. This page is optimized for browsing and comparing products.",
          "Large hero product image with multiple views in product detail page. Key details for example name, price, size selector, and “Add to Cart” button. Tabs for description, shipping info, and additional details and “You may also like” recommendations to encourage cross-selling. The design makes purchasing simple while keeping upsell opportunities visible.",
          "Brand storytelling with mission, values, and history in About page. Content structured with images and text blocks for readability and focus on responsible fashion and credibility. This page builds trust and connects with users on a brand level.",
        ]
      },
      {
        img: "/assets/ws/Ws-Wireframe2.png",
        title: "",
        description:[
          "Simple form for inquiries with fields for name, email, phone, and message in Contact page. Contact details and support info presented clearly and ensures users can reach out easily, reducing friction.",
          "Streamlined checkout flow with customer details, shipping, and payment in Checkout and Confirmation page. Order summary always visible for transparency and final confirmation screen thanking the user and confirming their purchase. This ensures a smooth and trustworthy checkout experience, which is critical for conversions.",
          "Shoes & Stitches's wireframes were designed to provide a clean, intuitive, and conversion-focused shopping experience. From homepage inspiration to product discovery and checkout, the flow prioritizes clarity, trust, and ease of use. The responsive layouts make the site accessible across devices, ensuring a consistent shopping journey.",
        ]
      },
    ],
    date: '2024-06-15',
    link: 'https://shoes-stitches-demo.com',
    liveLink: 'https://shoes-stitches-demo.com',
    githubLink: 'https://github.com/Swifty-sketch/webshop',
    figmaLink: 'https://www.figma.com/design/jwKUkFEj6WmTKHI1h6dgb6/Chas-s-cases?node-id=1-15266&t=IeyPi2C3NlU7n26c-1',
    challenge: 'Building a modern e-commerce platform that provides excellent user experience across all devices while maintaining high performance.',
    solution: 'Implemented a responsive design system with React and Firebase backend, focusing on mobile-first approach and seamless checkout flow.',
    results: ['Mobile conversion rate increased by 35%', 'Page load time reduced by 50%', 'Customer satisfaction rating: 4.8/5']
  },
  /* project 3 */
  {
    id: 3,
    slug: 'femtask',
    title: 'FemTask',
    description: 'Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.',
    fullDescription: 'Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.',
    category: 'UX Design',
    image: '/assets/company/FT-banner.png',
    images: ['/assets/company/FT-banner.png', '/assets/company/Mockup-SmallbarnProfile.png', '/assets/company/Mockup-ParentProfile.png', '/assets/company/Mockup-ChildProfile.png'],
    tools: ['Figma', 'Figjam', 'Slack'],
    myrole: 'User research, Wireframing, Prototyping, Testing',
    status: 'case-study',
    assignmentdescription: 'Conduct user research, create wireframes and prototypes, and perform usability testing for a task management application.',
    assignmentimg: ['/assets/project-wireframes.jpg', '/assets/project-prototypes.jpg'],
    conclusion: [
      "FamTask is designed for busy parents and children, with a simple interface that reduces complexity and makes task management easier.",
      "A clear visual hierarchy and color-coded tasks guide attention and help identify responsibilities quickly.",
      "The child-friendly yet balanced aesthetic engages kids while still appealing to adults. This ensures that children can interact with the app effectively while catering to the preferences of adult users.",
      "Features like progress tracking and visual cues (e.g., checkboxes) provide feedback, motivate users, and foster a sense of accomplishment."
    ],
    keyFeatures: [
      "User-friendly interface",
      "Shared Checklists",
      "Automated Reminders",
      "Color-Coded Task System",
      "Motivational Reward System",
      "Progress Tracking",
      "Customizable Notifications",
    ],
    figmaimg: [
      {
        img: "/assets/company/FT_MoSCoW.png",
        title: "FemTask's MoSCoW",
        description:[
        ]
      },
      {
        img: "/assets/company/FT_Roadmap.png",
        title: "FemTask's Roadmap",
        description:[
        ]
      },
      {
        img: "/assets/company/FT_Lo-fil.png",
        title: "FemTask's Lo-fi Wireframes",
        description:[
        ]
      },
      {
        img: "/assets/company/Persona.png",
        title: "FemTask's Persona",
        description:[
        ]
      },
      {
        img: "/assets/company/FT-Icons.png",
        title: "FemTask's Components",
        description:[
        ]
      },
      {
        img: "/assets/company/FT-Colors.png",
        title: "FemTask's Colors System",
        description:[
        ]
      },
    ],
    figmaWireframe: [
      {
        img: "/assets/company/ft-bg.png",
        title: "FamTask is a family task management app designed to help busy families coordinate chores, activities, and responsibilities in a structured and motivating way. The wireframes cover flows for parents, children, and younger kids, ensuring accessibility and usability for all ages.",
        description:[
        ]
      },
      {
        img: "/assets/company/Onboarding_Profiles.png",
        title: "Onboarding & Profiles.",
        description:[
          "Sign-up/login flow for parents and children with options for Google integration.",
          "Profile setup allows customization with name, role, avatar, and theme color.",
          "Separate parent and child views ensure the right features and permissions are available for each role.",
          "This creates a personalized and inclusive experience from the start.",
        ]
      },
      {
        img: "/assets/company/Mockup-ParentProfile1.png",
        title: "Parent Dashboard:",
        description:[
          "Access to family overview, tasks, and goals.",
          "Ability to create tasks or goals, assign them to family members, and set priority, frequency, and deadlines.",
          "Notifications keep parents informed about progress and reminders.",
          "Integration with Google Calendar for smooth scheduling.",
          "The parent interface prioritizes control, oversight, and organization."
        ]
      },
      {
        img: "/assets/company/Adult-Mockup-Kalender.png",
        title: "Calendar Integration",
        description:[
          "Family-wide calendar view with monthly and daily breakdowns.",
          "Tasks and events are displayed in one place to reduce scheduling conflicts.",
          "Parents can quickly add, edit, or remove items.",
          "This feature supports seamless coordination of family activities.",
        ]
      },
      {
        img: "/assets/company/Mockup-BarnProfile.png",
        title: "Child Dashboard:",
        description:[
          "Simple to-do lists with tasks assigned by parents.",
          "Tabs for to-do, completed, and rewards to give a clear sense of progress.",
          "Visual rewards system (points, stars, and gifts) encourages motivation and responsibility.",
          "Notifications notify children of new or pending tasks.",
          "The design gamifies household chores, making participation fun and engaging."
        ]
      },
      {
        img: "/assets/company/Mockup-SmallbarnProfile.png",
        title: "Young Children's View",
        description:[
          "Uses visual icons and images instead of text-heavy lists.",
          "Progress is tracked with stars and fun illustrations.",
          "A reward celebration screen appears when goals are achieved.",
          "This makes the app accessible and motivating even for younger kids.",
        ]
      },
    ],
    date: '2024-08-15',
    link: 'https://www.figma.com/proto/jwKUkFEj6WmTKHI1h6dgb6/Chas-s-cases?node-id=128-18044&viewport=-3550%2C-6994%2C0.5&t=93aTMy9a327QduC5-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=128%3A18044',
    figmaLink: 'https://www.figma.com/proto/jwKUkFEj6WmTKHI1h6dgb6/Chas-s-cases?node-id=128-18044&viewport=-3550%2C-6994%2C0.5&t=93aTMy9a327QduC5-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=128%3A18044',
    challenge: 'Designing a task management system that caters specifically to professional users, addressing their unique workflow needs.',
    solution: 'Conducted extensive user research and created detailed personas to design an intuitive task management interface with advanced collaboration features.',
    results: ['User task completion rate improved by 45%', 'Daily active users increased by 70%', 'Reduced learning curve by 3 days']
  },
  /* project 4 */
  {
    id: 4,
    slug: 'ullis-fitness',
    title: 'Ullis Fitness & Kroppsvård',
    description: 'Website redesign to unify personal training, massage, and cupping services into a cohesive, professional, and user-friendly digital presence.',
    fullDescription: 'This project focused on redesigning the Ullis Fitness & Kroppsvård website to present personal training, massage, and cupping treatments in a clear and professional way. The goal was to simplify the booking flow, improve navigation, and create a consistent visual identity that builds trust and attracts both individual clients and companies.',
    category: 'UX/UI Design, Web Design',
    image: '/assets/ullis/ullis-banner.png',
    images: ['/assets/ullis/ullis-banner.png'],
    tools: ['Figma', 'Next.JS', 'TailwindCSS', 'TypeScript'],
    status: 'live',
    myrole: 'Solo Web design & Front End Developer',
    assignmentdescription: 'Redesign an existing fitness and massage website to improve clarity, usability, and booking experience while presenting cupping as a new service.',
    assignmentimg: [],
    conclusion: [
      "The redesign resulted in a professional and cohesive digital presence.",
      "Customers can now easily understand the offered services and booking process.",
      "The website strengthens the brand identity and communicates trust to new and existing clients."
    ],
     keyFeatures: [
      "Responsive web design",
      "Clear and professional service descriptions",
      "Simplified booking flow",
      "Consistent typography and colors",
      "Integrated cupping treatments with massage",
      "User-friendly navigation"
    ],
    figmaimg: [],
    figmaWireframe: [
      {
        img: "/assets/ullis/Hi-file_home.png",
        title: "The home page serves as the main entry point and highlights the brand's core offerings. It includes:",
        description:[
          "A clear hero section with a headline, CTA, and service categories.",
          "A section showcasing key services (massage, training, body care).",
          "A blog preview to position the brand as a knowledge source.",
          "A personal introduction to build trust.",
          "Customer testimonials and a business section for corporate clients."
        ]
      },
      {
        img: "/assets/ullis/Hi-file_about.png",
        title: "The About page focuses on credibility and trust. It features:",
        description:[
          "A personal introduction with photo and welcome message.",
          "Education & certifications presented in a card layout for easy scanning.",
          "A clear philosophy section highlighting values (individual approach, holistic balance, long-term growth).",
          "A timeline (“My Journey”) that visualizes personal and professional milestones.",
          "Additional lifestyle elements to humanize the brand."
        ]
      },
      {
        img: "/assets/ullis/Hi-file_treatments.png",
        title: "The treatments page provides a clear and structured overview of all services. It includes:",
        description:[
          "ASeparate categories (training, massage, wellness).",
          "Service cards with descriptions, durations, and prices.",
          "Package deals for customers seeking bundled options.",
          "Clear booking CTAs to encourage conversion.",
          "Visual elements (icons, images) to enhance understanding."]
      },
      {
        img: "/assets/ullis/Hi-file_blogg.png",
        title: "The blog functions as a knowledge hub and marketing tool. Its structure includes:",
        description:[
          "A featured article to draw attention.",
          "A grid of recent posts with images, categories, and previews.",
          "Filters and tags to help users explore relevant topics.",
          "A newsletter subscription box to encourage ongoing engagement.",
        ]
      },
      {
        img: "/assets/ullis/Hi-file_contact.png",
        title: "The contact page makes it easy for users to get in touch. It contains:",
        description:[
          "Contact details (address, phone, email, opening hours).",
          "A contact form with drop-down for service type.",
          "A dedicated corporate client section highlighting B2B offers.",
          "A FAQ section addressing common questions.",
          "An integrated map with directions for easy navigation.",
        ]
      },
    ],
    date: '2025-07-11',
    link: 'https://ullisfitnessochkroppsvard.com/',
    liveLink: 'https://ullisfitnessochkroppsvard.com/',
    githubLink: 'https://github.com/PatDahl22/ullis-fitness22.git',
    figmaLink: '',
    challenge: 'The previous website suffered from inconsistent typography and colors, unclear navigation, and a confusing booking process. Customers were unsure how to book treatments and had limited understanding of cupping services.',
    solution: 'Conducted UX research and restructured the website with a clear navigation system, consistent design language, and simplified booking flow. Added clear explanations of services, including cupping, to educate and attract new customers.',
    results: [
      'Improved booking clarity and reduced customer confusion',
      'Professional and consistent brand identity',
      'Positive client feedback on navigation and design'
    ],
  },
  /* project 5 */
  {
    id: 5,
    slug: 'ulo',
    title: 'ULO Web Agency Platform',
    description: 'A digital platform combining web agency services with e-commerce functionality, designed to simplify processes for clients while maintaining a personal connection.',
    fullDescription: 'The ULO project was my final exam project, where I designed and developed a platform for ULO Webbyrå. The aim was to merge traditional web agency services with e-commerce, making it easier for small and mid-sized businesses to purchase digital solutions directly online. The platform emphasizes simplicity, intuitive navigation, and a stylish, modern aesthetic that reflects ULO’s professional identity while ensuring scalability for future services and products.',
    category: 'UX/UI Design, Web Development',
    image: '/assets/ulo/ulo_banner.png',
    images: ['/assets/ullis/ullis-banner.png'],
    tools: ['Figma', 'FigJam', 'Next.js', 'TypeScript', 'TailwindCSS'],
    myrole: 'UX Research, Wireframing, UI Design, Frontend Development',
    status: 'live',
    assignmentdescription: 'Design and develop a web platform for ULO Webbyrå that combines agency services with e-commerce functionality in a professional and user-friendly way.',
    assignmentimg: [
      '/assets/project-ulo-wireframes.jpg',
      '/assets/project-ulo-prototypes.jpg'
    ],
    challenge: 'Create a platform that balances e-commerce efficiency with the personal touch of a creative agency. Ensure clarity, easy navigation, and a strong brand identity while supporting future scalability.',
    solution: 'Conducted competitor analysis, defined user needs, and created wireframes and prototypes in Figma. Developed the platform using Next.js, TypeScript, and TailwindCSS with a clean, modular design system. Integrated service pages, e-commerce structure, and a clear contact flow to encourage direct client interaction.',
    keyFeatures: [
      "Service catalog with clear descriptions",
      "E-commerce functionality for digital products",
      "Clean and modern UI",
      "Responsive and accessible design",
      "Simple navigation structure",
      "Scalable architecture for future services"
    ],
    conclusion: [
      "The platform provides a professional yet personal digital presence for ULO Webbyrå.",
      "It combines the convenience of e-commerce with the relational trust of a web agency.",
      "The project demonstrates both UX/UI design and frontend development skills, creating a foundation for future growth."
    ],
    results: [
      'Improved clarity of services for clients',
      'Professional and stylish platform reflecting ULO\'s brand',
      'Flexible foundation ready for scaling and new features'
    ],
    figmaimg: [
      {
        img: "/assets/ulo/Key_Considerations.png",
        title: "ULO's Key Considerations",
        description:[
        ]
      },
      {
        img: "/assets/ulo/Persona.png",
        title: "ULO's Persona",
        description:[
        ]
      },
      {
        img: "/assets/ulo/Flow_chart.png",
        title: "ULO's Flow Chart",
        description:[
        ]
      },
      {
        img: "/assets/ulo/componenets.png",
        title: "ULO's Components",
        description:[
        ]
      },
    ],
    figmaWireframe: [
      {
        img: "/assets/ulo/Hi-file_home.png",
        title: "Home page introduces ULO's brand and value proposition. It includes:",
        description:[
          "A hero section with headline, subtext, and CTA.",
          "A section displaying trusted brands and partners to build credibility.",
          "An overview of ULO's core services (websites, design, analysis, marketing, strategy, and management).",
          "A value section highlighting company principles.",
          "Customer testimonials to build trust and social proof."
        ]
      },
      {
        img: "/assets/ulo/Hi-file_overview.png",
        title: "Services overview functions as a catalog for ULO's various website solutions. It includes:",
        description:[
          "Service cards for each solution (Onepage, E-commerce, Presentation, Booking, Blog, Event/Conference).",
          "A value statement section reinforcing ULO's principles.",
          "Case-style results supported by data.",
          "Process visuals to show workflow and reassure clients about project structure.",
        ]
      },
      {
        img: "/assets/ulo/Hi-file_Onepage-side.png",
        title: "Onepage service page highlights a simpler website solution. It features:",
        description:[
          "An introductory hero with key benefits.",
          "A “best fit for” section showing which clients benefit most from a onepage website.",
          "A package breakdown with pricing levels.",
          "A visual workflow diagram of the build process.",
          "Data-driven case studies for credibility.",
          "FAQ and CTA sections to encourage conversions.",
        ]
      },
      {
        img: "/assets/ulo/Hi-file_e-com-side.png",
        title: "E-commerce page is dedicated to ULO's e-commerce website offering. It includes:",
        description:[
          "A hero section with clear positioning and visuals.",
          "A breakdown of package tiers with included features.",
          "A step-by-step work process section explaining how ULO builds an e-commerce site.",
          "Highlighted functions showing what clients can expect from the solution.",
          "Case-style success stories supported by ULO's data platform.",
          "A FAQ section to remove barriers before booking."
        ]
      },
      {
        img: "/assets/ulo/Hi-file_quizzes.png",
        title: ["ULO's step-by-step quiz was designed to qualify leads and personalize offerings. Each page combines service presentation with data-driven proof points and clear CTAs. The quiz flow adds interactivity and personalization, strengthening lead generation. It guides users through:"],
        description:[
          "Selecting website type and business size.",
          "Defining current needs and challenges.",
          "Indicating priorities and preferences (speed, professionalism, simplicity).",
          "Choosing how to handle content and design.",
          "Selecting meeting type, time, and date.",
          "Uploading files (logos, text, images).",
          "Providing contact information to finalize the process."
        ]
      },
      {
        img: "/assets/ulo/Hi-file_dashboard.png",
        title: "The dashboard wireframes were designed to provide ULO clients with a clear overview of their projects, orders, and support needs. The focus was on usability, transparency, and efficiency, ensuring that customers could easily track progress, manage details, and get support when needed. It contains:",
        description:[
          "Dashboard Overview: Gives users a quick snapshot of project status, investments, and recent activity, ensuring they can see progress at a glance.",
          "Project Tracking: Provides a timeline with milestones, deadlines, and communication updates, keeping clients informed and engaged throughout their projects.",
          "Orders & Services: Lists active and past orders with details and suggests relevant add-on services, making it easy to manage and expand service use.",
          "Account & Billing: Allows users to update personal details, review invoices, and manage subscriptions or upgrades in a transparent, self-service format.",
          "FAQ & Support: Combines a searchable FAQ with multiple support channels, giving clients quick access to answers and help without leaving the dashboard.",
        ]
      },
    ],
    date: '2025-04-15',
    liveLink: 'https://ulo-webbyro.netlify.app/',
    figmaLink: 'https://www.figma.com/design/ujqfyBTpMzG3krsRgZQgUk/ULO?node-id=34-2572&t=b0SxbcipuHND74u4-1'
  },
  /* project 6 */
  {
    id: 6,
    slug: 'digital-support-tool',
    title: 'Digital Support Tool',
    description: 'An AI-supported design process for creating a digital support tool for students in classroom environments, focusing on cognitive accessibility and emotional security.',
    fullDescription: 'This case study explores the development of a digital support tool designed to act as a low-threshold step for students to ask for help without social exposure. More importantly, it serves as an exploration of the "AI Designer" role—demonstrating how artificial intelligence can be seamlessly integrated into the UX/UI methodology to enhance accessibility, empathy, and systemic design without replacing human judgment.',
    category: 'AI Design, UX/UI Design, Accessibility',
    image: '/assets/Digital-support/Digital-support-Hero.png',
    images: ['/assets/Digital-support/Digital-support-Hero.png'],
    tools: ['Figma', 'ChatGPT', 'WCAG 2.1 AA', 'Gemini', 'Antigravity'],
    status: 'case-study',
    myrole: 'AI Designer, UX/UI Designer',
    assignmentdescription: 'Design an inclusive digital prototype enabling students to discreetly signal their need for help, while utilizing this project as a foundational case study for AI-assisted design methodologies.',
    assignmentimg: [],
    challenge: 'Students facing cognitive or social barriers often avoid seeking assistance due to fear of judgment or cognitive overload. Traditional classroom support systems demand high momentary initiative, creating an exclusionary threshold. The core product challenge was to design a highly accessible interface that bypassed these emotional barriers through absolute simplicity.',
    solution: 'Designed a neutral, highly predictable signaling prototype defined by extreme cognitive accessibility. The interactive flow was stripped back to a singular, guided path with immediate visual confirmations, ensuring users in a stressed state faced zero decision fatigue.',
    results: [
      'Delivered a frictionless signaling flow characterized by highly predictable interactions.',
      'Effectively eliminated decision fatigue by intentionally minimizing user choices.',
      'Established a demonstrable framework for how AI can accelerate inclusive design.'
    ],
    conclusion: [
      'In high-stress UX scenarios, forced simplicity and linearity are vastly superior to offering customizable flexibility.',
      'Immediate, unambiguous visual confirmation is the strongest tool for building user security.',
      'The most effective inclusive designs occur when algorithmic analysis is strictly governed by human empathy.'
    ],
    keyFeatures: [
      'Discreet, low-threshold communication pathway',
      'Zero-choice interactive flow to prevent cognitive overload',
      'Immediate, reassuring visual feedback loops',
      'Neutral, diagnosis-agnostic visual language to prevent stigmatization',
      'Strict adherence to WCAG 2.1 AA accessibility standards'
    ],
    figmaimg: [],
    figmaWireframe: [],
    date: '2024-11-01',
    link: 'https://digitalt-support-tools.netlify.app',
    liveLink: 'https://digitalt-support-tools.netlify.app',
    figmaLink: 'https://www.figma.com/design/EYqM8s4ACL92Tdbv1sFMxK/St%C3%B6dverktyg?node-id=0-1&t=iNGy7qnUizbxLZR0-1',
    aiDesignerShowcase: {
      workflowAndStructure: [
        'Strategic Co-Piloting: AI was utilized not as a decision-maker, but as an expansive analytical tool to challenge assumptions, identify broad patterns in cognitive research, and synthesize complex behavioral data.',
        'Rapid Context Mapping: Employed generative models to quickly compile literature on neurodivergent classroom challenges (e.g., ADHD, autism), effectively extracting core themes like initiative difficulty and fear of judgment.'
      ],
      promptLogic: [
        'The R.A.K.T.F. Framework: Adopted a highly structured prompting model (Role, Action, Context, Tone, Format) to steer generative responses toward empathetic and design-relevant outputs.',
        'Iterative Precision: Transitioned from generic exploratory prompts to highly constrained queries, systematically reducing AI hallucinations and bias while increasing contextual relevance.'
      ],
      collaboration: [
        'Edge-Case Simulation: Leveraged AI to simulate extreme user scenarios—such as a student experiencing a panic attack—to proactively stress-test the prototype’s visual hierarchy and interaction complexity.',
        'Human as the Final Arbiter: Maintained a strict human-in-the-loop philosophy. Every AI recommendation was critically filtered through the lens of human empathy, recognizing AI’s inability to truly understand emotions like shame.'
      ],
      productionAndDelivery: [
        'Accessibility Auditing: Utilized AI models to conduct deep-dive reviews against WCAG 2.1 AA criteria, ensuring contrast ratios and typographic scales met rigorous cognitive accessibility standards.',
        'Microcopy Optimization: Collaborated with language models to strip unnecessary cognitive load from UI text, resulting in a neutral, non-judgmental, and highly concise feedback messaging.'
      ],
      systemsThinking: [
        'Scope Containment: Used systemic analysis to intentionally restrict the prototype to a singular function (signaling), adhering to the educational insight that feature sprawl actively harms accessibility in this context.',
        'Ethical & Regulatory Compliance: Engineered the solution to naturally adhere to data minimization principles (GDPR) by avoiding any diagnosis-specific categorization within the UI.'
      ]
    },
    myApproach: [
      {
        title: "1. The AI-Designer Mindset",
        content: [
          { text: "Approaching this project, I defined the AI-Designer role not as relying on AI to generate interfaces, but as establishing a symbiotic feedback loop where AI scales analysis and the designer safeguards empathy." }
        ]
      },
      {
        title: "2. Structuring the AI Workflow",
        content: [
          { text: "To prevent AI from generating noise, I established a strict operational methodology:" },
          { list: [
            "Define Intent: Clearly articulate the specific UX problem before engaging AI.",
            "Constrain Context: Provide rigid boundaries using the structured R.A.K.T.F framework.",
            "Evaluate & Filter: Scrutinize outputs against human psychological principles.",
            "Iterate: Refine prompts based on identified biases or gaps in the AI's logic."
          ] }
        ]
      },
      {
        title: "3. Transforming Insights into UI",
        content: [
          { text: "Through the AI-assisted research phase, the overwhelming theme was 'cognitive overload'. I translated this insight directly into the UX architecture by:" },
          { list: [
            "Replacing complex navigation with a linear, single-action screen sequence.",
            "Eliminating descriptive text in favor of universally recognized iconography.",
            "Structuring the Figma components to enforce a minimalist, high-contrast design system."
          ] }
        ]
      },
      {
        title: "4. Ethical Safeguarding",
        content: [
          { text: "A core part of my approach was recognizing where AI fails. I took complete ownership of the ethical implications, ensuring the final visual and interaction design felt inherently human, safe, and entirely free of stigmatizing language." }
        ]
      },
      {
        title: "5. Toolkit Ecosystem",
        content: [
          { list: [
            "Generative AI (ChatGPT/Gemini) for simulation and synthesis",
            "Figma for high-fidelity component design and wireframing",
            "WCAG 2.1 AA frameworks for accessibility benchmarking"
          ] }
        ]
      },
      {
        title: "6. Case Study Impact",
        content: [
          { text: "This project serves as a definitive case study for the modern AI Designer. It proves that when AI is harnessed through structured methodologies and ethical oversight, it empowers designers to solve deeply complex, human-centric problems with greater precision and inclusivity." }
        ]
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working with Pat was an exceptional experience. Their attention to detail and creative problem-solving skills transformed our vision into a stunning, user-friendly platform that exceeded all expectations.",
    name: "Nadia Johnson",
    title: "CEO at R&B AB",
    image: "/assets/company/chatbot1.png"
  },
  {
    id: 2,
    quote: "Pat's expertise in UX/UI design is remarkable. They delivered a mobile app that not only looks beautiful but provides an intuitive user experience that our customers love. Highly recommended!",
    name: "Sara Connor",
    title: "Designer specialist at Chas Academy",
    image: "/assets/company/chatbot1.png"
  },
  {
    id: 3,
    quote: "The e-commerce platform Pat designed for us resulted in a 40% increase in conversions. Their understanding of user behavior and business goals is outstanding.",
    name: "Emma Rodriguez",
    title: "Marketing Director at NRS Shop",
    image: "/assets/company/chatbot1.png"
  },
  {
    id: 4,
    quote: "Pat's work on our corporate website was flawless. They managed to balance aesthetic appeal with functionality, creating a site that truly represents our brand values.",
    name: "Ulrica Persson",
    title: "Brand Manager at Ullis fitness",
    image: "/assets/company/chatbot1.png"
  },
  {
    id: 5,
    quote: "As a startup, we needed someone who could understand our vision and translate it into a compelling digital experience. Pat delivered beyond our expectations with creativity and professionalism.",
    name: "Lisa Park",
    title: "Founder at ULO web agency",
    image: "/assets/company/chatbot1.png"
  },
  {
    id: 6,
    quote: "Pat's design thinking approach helped us solve complex user experience challenges. The result was a dashboard that our users find both powerful and easy to use.",
    name: "Creata K",
    title: "Specialist at DataInsights",
    image: "/assets/company/chatbot1.png"
  }
];

export const Approachs = [
  {
    id: 1,
    title: "User-Focused, Data-Driven, and Seamlessly Integrated",
    icon: "UX/UI Design",
    img: "/assets/creator.png",
    des: "I create intuitive, user-centered designs by combining data insights and user feedback. My approach ensures designs are functional, visually appealing, and meet business goals while being adaptable through agile methodologies.",
  },
  {
    id: 2,
    title: "Clear, Engaging, and Performance-Optimized",
    icon: "Web Design",
    img: "/assets/web.png",
    des: "I design responsive, mobile-first websites that focus on speed, clear navigation, and user engagement. By optimizing for performance and SEO, I ensure your website is both attractive and effective at converting visitors.",
  },
  {
    id: 3,
    title: "Collaborative, Iterative, and Results-Driven",
    icon: "UI/UX Web Design",
    img: "/assets/backend.png",
    des: "I work closely with clients and users, using an iterative approach to refine designs based on feedback. I focus on clarity, usability, and adaptability to deliver results that improve engagement, conversions, and overall user satisfaction.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/PatDahl22",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
];

