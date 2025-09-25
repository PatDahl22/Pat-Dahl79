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
}

export const projects: Project[] = [
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
  {
    id: 3,
    slug: 'femtask',
    title: 'FemTask',
    description: 'Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.',
    fullDescription: 'Advanced Interaction Design: A deep dive into UX design focusing on user analysis, requirements management, and the design process. The goal is to translate complex user needs into intuitive digital solutions.',
    category: 'UX Design',
    image: '/assets/company/FT-banner.png',
    images: ['/assets/company/FT-banner.png', '/assets/company/Mockup-SmallbarnProfile.png', '/assets/company/Mockup-FöräldrarProfile.png', '/assets/company/Mockup-BarnProfile.png'],
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
        img: "/assets/company/Mockup-FöräldrarProfile1.png",
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

export const project1Items = {
  HeroImg: [
    {
      id: 1,
      name: "About TravelBuddy",
      img: "/TB-Mobile/HeroImg1.png",
      Link: "#about",
    },
    {
      id: 2,
      name: "My Role",
      img: "/TB-Mobile/HeroImg2.png",
      Link: "#myrole",
    },
    {
      id: 3,
      name: "Problems & Solutions",
      img: "/TB-Mobile/HeroImg3.png",
      Link: "#problems",
    },
    {
      id: 4,
      name: "Persona",
      img: "/TB-Mobile/HeroImg4.png",
      Link: "#persona",
    },
    {
      id: 5,
      name: "Key Features",
      img: "/TB-Mobile/HeroImg5.png",
      Link: "#keyfeatures",
    },
    {
      id: 6,
      name: "User Flow",
      img: "/TB-Mobile/HeroImg6.png",
      Link: "#userflow",
    },
    {
      id: 7,
      name: "UI Design",
      img: "/TB-Mobile/HeroImg7.png",
      Link: "#uidesign",
    },
    {
      id: 8,
      name: "Visual Design",
      img: "/TB-Mobile/HeroImg8.png",
      Link: "#visualdesign",
    },
  ],

  myroles: [
    {
      title: "Typography & Layout",
      description: "Ensured clean, readable text and clear hierarchy.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons1.png",
    },
    {
      title: "Spacing & Padding",
      description:
        "Made sure elements were well-spaced for a visually balanced design.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons2.png",
    },
    {
      title: "Component Structure",
      description: "Helped define reusable UI components for consistency",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icon3.png",
    },
    {
      title: " Accessibility (WCAG)",
      description: "Checked contrast ratios and color accessibility.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons4.png",
    },
    {
      title: "Flow Documentation",
      description:
        "when the application is continued, it can be easily carried out.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons5.png",
    },
    {
      title: "Research",
      description:
        "This process is made so that the requirements and problems obtained meet the target market.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons6.png",
    },
  ],

  problems: [
    {
      title: "Problems",
      des: [
        "👉 Overwhelming Travel Options: With an abundance of choices for flights, accommodations, and activities, users experience decision fatigue, making it difficult to select the best options.",
        "👉 Non-Personalized Recommendations: Existing travel apps fail to offer personalized suggestions based on individual user preferences, often providing irrelevant options that don't match the use needs.",
        "👉 Disorganized Pre-Travel Planning: Travelers frequently need to use multiple apps to manage different aspects of their trip, booking flights, accommodations, and creating itineraries, leading to inefficiency and time wastage.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Solutions",
      des: [
        "👉 Personalized AI Travel Suggestions: Custom recommendations based on the user's travel preferences, interests, and past behavior.",
        "👉 Non-Personalized Recommendations: Compare flights, accommodations, and activities all in one app, saving users the hassle of switching between different services.",
        "👉 Geo-Based Recommendations: Real-time travel tips based on the user's location, including suggestions for nearby attractions, dining, and activities.",
        "👉 Pre-Travel Checklist & Notifications: Keeps users organized with helpful reminders and tasks to complete before their trip, ensuring a smoother travel experience..",
      ],
      className: "text-neutral-500",
    },
  ],
  Personas1: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: Eva - Adventurous Traveler",
      description:
        "Eva enjoys outdoor activities like hiking, camping, and diving. She values freedom, adventure, and self-challenge.",
    },
    {
      id: 2,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      title: "Goals",
      description:
        "Eva wants personalized adventure recommendations and real-time information about terrain and weather conditions at her travel destinations. She struggles with finding reliable, up-to-date travel information tailored to her specific interests.",
    },
    {
      id: 3,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Think & Feel",
      description:
        "Eva seeks freedom and adventure but gets frustrated by lack of relevant information.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "See",
      description:
        "Eva is constantly looking for travel apps that provide detailed information and real-time updates.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Hear",
      description: "She hears tips from other travelers and online reviews.",
    },
    {
      id: 6,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Say & Do",
      description:
        "'I want recommendations for new adventures' — Eva plans and books activities based on her interests.",
    },
  ],

  Personas2: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: David - Business Traveler",
      description:
        "I travel frequently for work and need to book flights, hotels, and transportation at the last minute. I use apps and online booking services to make my reservations and keep track of my travel plans.",
    },
    {
      id: 2,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      title: "Goals",
      description:
        "' For me, it would be very useful if the AI assistant could act as a personal travel assistant that could handle the entire booking process for me, including comparing prices, booking flights and hotels, and keeping track of my travel plans. I would also like the assistant to be able to give me real-time updates on flight status and traffic conditions to help me plan my business trips smoothly and efficiently. '",
    },
    {
      id: 3,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Think & Feel",
      description:
        "Values efficiency and ease in booking travel. Frustrated by last-minute bookings and lack of real-time updates.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "See",
      description:
        "Sees airports, hotels, and booking platforms on his devices.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Hear",
      description: "Hears tips from colleagues on efficient travel planning.",
    },
    {
      id: 6,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Say & Do",
      description:
        "'I need an app to handle my bookings.' Does, books last-minute travel and manages itineraries using apps.",
    },
  ],

  CompetitiveAnalysis: [
    {
      title: "AI-Powered Personalization",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Unlike many apps, TravelBuddy's AI offers real-time personalized recommendations, adapting to the user's preferences.",
    },
    {
      title: "Centralized Platform",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "TravelBuddy combines booking and itinerary management in one seamless platform, eliminating the need to juggle multiple apps.",
    },
  ],

  DesignKeyFeatures: [
    {
      title: "Geo-Based Recommendations",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Real-time tips about local attractions, events, and weather to help users make the most of their destination.",
    },
    {
      title: "Search Filters",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can filter by price, cuisine, or activity type, making the search process more efficient.",
    },
    {
      title: "Craving Input",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "For food-related searches, users can input or select specific cravings, allowing for a more personalized dining experience.",
    },
    {
      title: "Typography & Layout",
      area: "sm:col-span-3 md:col-span-2 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "The typography was chosen for readability, with clear hierarchy and legible fonts. Spacing and padding were adjusted to ensure visual balance across the app.",
    },
    {
      title: "Personalized Recommendations",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "AI technology provides tailored travel suggestions based on the user's preferences, budget, and previous trips.",
    },
  ],

  KeyFeatures: [
    {
      title: "Personalized Assistance",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "The app tailors the user's experience by addressing them by name and offering customized services (vacation planning, finding places to stay, eating out, and activities).",
    },
    {
      title: "Custom Search Filters",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can filter dining options by price range, type of cuisine, or specific cravings, enhancing the search experience.",
    },
    {
      title: "Flexibility in Choices",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Users can either select predefined options or input specific desires (e.g., specific food cravings or types of vacation).",
    },
    {
      title: "Rating System",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Users can rate the app on a scale of 1 to 5 stars and add a review title and detailed feedback to explain their rating. Users have the option to cancel the rating process or send their feedback, giving them control over the process.",
    },
    {
      title: "User Profile",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Profile creation allows the app to personalize recommendations based on preferences, improving the overall user experience.",
    },
  ],

  testingandresults: [
    {
      title: "80%",
      description:
        "Of users found the AI recommendations highly useful for trip planning, significantly reducing decision fatigue.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "90%",
      description:
        "Of users reported that the app's layout was easy to navigate, thanks to clear typography and thoughtful spacing.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
    {
      title: "40%",
      description:
        "Reduction in decision-making time, with users feeling less stressed and more organized during the planning process",
      className: "h-4 w-4 text-neutral-500",
      icon: "/web.png",
    },
  ],

  StylingSystem: [
    {
      title: "Colors system",
      description:
        "The color system is designed to provide a cohesive tonal palette with clear differentiation for primary, secondary, and tertiary elements. Each color tone supports both light and dark themes, ensuring adaptability across different environments. Accent colors like red (error) and green (success) are used to signal important states and actions. The neutral and neutral variant tones provide a flexible base for backgrounds, surfaces, and text.",
      points: [
        "Dark Background(#0F1512): Provides a modern, sleek background for nighttime or focus modes. ",
        "Light Background(#F5FBF7):Ensures a fresh, clean look for day mode or content-heavy pages.",
        "Text Color(#D9D9D9): Is used to create high readability against both the dark and light backgrounds.",
        "Logo & Hovering Effects(#86D6BE): Enhances the brand identity and provides an engaging hover effect to guide user interactions. ",
        "Shadowing(#86D6BE): Subtle shadows are used to create depth and focus, enhancing important UI elements without overwhelming the user.",
      ],
      img: "",
    },
    {
      title: "Typography",
      description: "Montserrat and Roboto",
      points: [
        "Display: For banners and key sections.",
        "Headings: Used to organize content visually.",
        "Body text: Clear and legible for long-form content.",
        "Labels and buttons: Minimal yet noticeable, ensuring clarity.",
      ],
      img: "",
    },
    {
      title: "SpacingSystem",
      description:
        "The spacing system follows a 4-point grid, scaling from 2px (3xs) to 160px (8xl). This consistency ensures balanced layouts and predictable alignment across all devices.",
      img: "",
    },
  ],

  FutureImprovements: [
    {
      title: "Voice-Based Travel Assistance",
      description:
        "Introducing voice commands to make the app even more user-friendly, especially for users on the go.",
      area: "",
    },
    {
      title: "Social Media Integration",
      description:
        "Enabling users to share their itineraries and experiences with friends or family.",
      area: "",
    },
    {
      title: "Deeper AI Insights",
      description:
        "Enhancing the AI to provide even more granular recommendations, such as suggesting specific outdoor activities or events based on weather forecasts.",
      area: "",
    },
  ],

  ReflectionAndChallenges: [
    {
      title: "✨ Managing Personalization Without Complexity",
      description:
        "One of our biggest challenges was balancing a personalized experience with simplicity. While we wanted TravelBuddy to offer tailored recommendations, too many customization options initially confused users. To address this, we simplified the interface by introducing guided choices and offering default settings that users could refine over time as they interacted more with the app.",
      area: "",
    },
    {
      title: "✨ Improving Geolocation Accuracy",
      description:
        "Ensuring that location-based suggestions were accurate was critical for the app's success. Early in development, we noticed inconsistencies in geolocation data, particularly in remote areas. To overcome this, we improved our use of geolocation services by switching to more reliable APIs, while also integrating fallback options to ensure users still received relevant recommendations even when precise location data was unavailable.",
      area: "",
    },
    {
      title: "✨ Optimizing the AI for Usability",
      description:
        "The AI assistant was central to our design, but early testing revealed that it occasionally struggled to deliver contextually relevant suggestions. Users sometimes found it slow or requiring too many inputs. After evaluating the AI's natural language processing, we improved its ability to anticipate user needs, refining its decision-making process to deliver faster, more relevant suggestions with minimal effort from the user.",
      area: "",
    },
    {
      title: "✨ Balancing Notifications and Real-Time Updates",
      description:
        "We faced a challenge in keeping users informed without bombarding them with too many notifications. Initially, users felt overwhelmed by frequent updates, especially during their travels. To improve, we implemented a more intelligent notification system that prioritizes important updates while allowing users to customize how and when they receive alerts, ensuring a less intrusive experience.",
      area: "",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "Responsiveness and Availability",
      description:
        "Our system ensures a harmonious, accessible, and responsive design framework that is user-friendly and adaptable to varying contexts.",
      points: [
        "The color system adheres to WCAG standards, ensuring sufficient contrast ratios for text and interactive elements. Both themes (light and dark) are optimized for user comfort in varying lighting conditions.",
        "The typography system supports dynamic resizing for various screen sizes and ensures readability on both small and large displays.",
        "The scalable spacing system adapts fluidly to different screen sizes, maintaining proportionality while ensuring a clean and organized visual hierarchy.",
        "Interactive components include focus indicators and ARIA labels for screen readers, ensuring usability for all users, including those relying on assistive technologies.",
      ],
      img: "",
    },
  ],

  Conclusions: [
    {
      title: "Conclusion",
      description:
        "By addressing user pain points such as decision fatigue, disorganized planning, and lack of personalization, TravelBuddy successfully simplifies the travel planning process, offering users a more seamless and enjoyable experience.",
      area: "",
    },
    {
      title: "Conclusion",
      description:
        "The app's features, such as AI-driven recommendations, geo-based tips, and centralized booking, make it a unique solution in the travel industry.",
      area: "",
    },
  ],

  userflows: [
    {
      title: "Onboarding :",
      description:
        " Users are greeted and prompted to create an account or log in. They input basic preferences, allowing for personalized recommendations.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Search for Travel Options :",
      description:
        "Users can search for nearby places to stay, dining options, and activities, with recommendations customized based on their profile.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Book & Plan :",
      description:
        "Once users find their ideal options, they can easily book flights, accommodations, and activities—all in one app.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Pre-Travel Checklist & Notifications :",
      description:
        "Users receive timely reminders and updates to ensure they are ready for their trip.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
  ],
};

export const project3Items = {
  challenges: [
    {
      title: "Disorganization",
      description:
        "Lack of a central system to track tasks and responsibilities.",
      className: "text-neutral-500",
    },
    {
      title: "Miscommunication",
      description:
        "Difficulty coordinating schedules and ensuring everyone is on the same page.",
      className: "text-neutral-500",
    },
    {
      title: "Unequal Burden",
      description:
        "Imbalance in household chores, leading to resentment and conflict.",
      className: "text-neutral-500",
    },
    {
      title: "Motivational Issues",
      description:
        "Difficulty engaging children in household tasks and responsibilities.",
      className: "text-neutral-500",
    },
  ],

  problemsandsolutions: [
    {
      title: "Problem",
      des: "Parents, especially those with school-aged children, struggle to juggle work, household chores, and kids' activities. Lack of coordination leads to stress, missed tasks, and frustration. Existing tools (like Google Keep or calendar apps) aren't designed to meet the needs of busy families.",
      className: "text-neutral-500",
    },
    {
      title: "Solution",
      des: "FamTask simplifies task delegation, gives parents a clear overview of family responsibilities, and motivates children to complete chores through a reward system. The app centralizes family tasks in one place, enhancing communication and reducing stress.",
      className: "text-neutral-500",
    },
  ],

  keyuserinsights: [
    {
      title: "Need for Automated Reminders",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents wanted an app that proactively reminded both themselves and their children about upcoming tasks, reducing the need for constant nagging.",
    },
    {
      title: "Desire for a Clear Overview",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Users craved a simple, at-a-glance view of all tasks, assignments, and deadlines.",
    },
    {
      title: "Motivation for Children's Involvement",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents struggled to engage children in household chores without constant reminders or conflict.",
    },
    {
      title: "Shared Lists and Accountability",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
      description:
        "Parents expressed the need for a system that allows children to check off completed tasks, fostering a sense of responsibility and accountability.",
    },
  ],

  Personas: [
    {
      id: 1,
      area: "",
      icon: "/TB-Mobile/role-icons6.png",
      title: "Name: Nathalia",
      description:
        "A working parent with school-aged children, juggling multiple responsibilities.",
    },
    {
      id: 2,
      area: "",
      title: "Goals",
      description:
        "Streamline household chores, delegate tasks effectively, reduce stress, improve family communication.",
    },
    {
      id: 3,
      area: "",
      title: "Pain Points",
      description:
        "Difficulty keeping track of tasks, constant need for reminders, imbalance in household responsibilities, struggles to motivate children.",
    },
  ],

  initialdesignconcepts: [
    {
      id: 1,
      area: "sm:col-span-2 md:col-span-3 row-start-1 lg:col-span-3 ",
      title: "Task Creation and Assignment",
      description:
        "Parents have the ability to assign tasks with set deadlines to children and family members.",
    },
    {
      id: 2,
      area: "sm:col-span-1 md:col-span-2 xl:col-span-2 ",
      title: "Progress Tracking",
      description: "Visual representation of task completion.",
    },
    {
      id: 3,
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 ",
      title: "Shared Calendars",
      description: "Centralized schedule view for the whole family.",
    },
    {
      id: 4,
      area: "sm:col-span-1 md:col-span-2 xl:col-span-2",
      title: "Rewards System",
      description: "Motivate children through gamification and incentives.",
    },
    {
      id: 5,
      area: "sm:col-span-1 md:col-span-2 row-start-2 xl:col-span-2 xl:row-span-1",
      title: "Different account user",
      description:
        "For children, focus on what tasks they should focus on. For parent, overview of the task they are assign.",
    },
  ],

  respondingtouserfeedback1: [
    {
      id: 1,
      title: "Responding to user feedback iteration",
      des: [
        "👉 Overcrowded Homescreen: The initial design of the homescreen for the app was cluttered and overwhelming.",
        "👉 Calendar Usability: Users expressed they wanted the calendar to only showcase their task, not the family.",
        "👉 Navigation Issues: Users had difficulty navigating back to the main homescreen from certain sections of the app.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
    {
      id: 2,
      title: "Changes implemented iteration",
      des: [
        "👉 Simplified homescreen: Removed redundant 'To-Do' and 'Calendar' tabs, consolidating navigation into a bottom bar. Refined color scheme and button layout.",
        "👉 Personalized Calendar View: Filtered calendar view to display only tasks assigned to the specific user.",
        "👉 Improved Navigation: Moved the 'Back' button to a more conventional location in the bottom navigation bar.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
  ],
  respondingtouserfeedback2: [
    {
      id: 1,
      title: "Responding to user feedback iteration",
      des: [
        "👉 Ethical consideration: The ethical implications of constantly being reminded of tasks may induce mental anxiety for children.",
        "👉 Ethical consideration: A high volume of bright colors and gamified animated designs may induced cognitive overload for children.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
    {
      id: 2,
      title: "Changes implemented iteration",
      des: [
        "👉 Removal of aautomatic reminders: Removed automatic reminders and implemented a notification section where users can check their upcoming tasks on their own terms.",
        "👉 Simplified children's interface: After the first round of user testing of both admins and member accounts, we switched the interface to be more minimal and neutral.",
        "👉 Avatar integration: We decided to integrate custom avatars into the application's UI to provide the user with a friendly face and sense of personalization while minimizing cognitive load.",
      ],
      area: "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
    },
  ],

  accessibilityconsiderations: [
    {
      title: "Clear visual hierarchy",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Utilized headings (H1, H2, H3), body text, and text boxes to create a logical content structure for screen readers.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Readable font and size",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Selected easily readable fonts and ensured sufficient text size (minimum 16px for body text, 24px for headings) for readability.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Descriptive image and icon labels",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Provided descriptive alt text for all images and icons, ensuring screen readers can convey their purpose (implementation planned for the development phase).",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Clear button labels",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Used clear, concise, and descriptive button labels, avoiding vague terms like 'Click Here.'",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Sufficient button size and spacing",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Ensured buttons are at least 44x44 pixels with adequate spacing to prevent accidental presses.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "ARIA Labels (Planned)",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "We plan to implement ARIA attributes during development to further enhance screen reader support and ensure WCAG compliance. We also plan to be extremely aware of any color contrast issues.",
      icon: "/TB-Mobile/role-icons6.png",
    },
  ],

  KeyFeatures: [
    {
      title: "Role-Based access",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Separate login accounts for parents (admins) and children (members).",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Shared checklists",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Admin have the access to be able to add family up-keeping tasks on a list.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Shared calendar",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      description:
        "Allow parents and children to view a family calendar, children are only to see task assign to themselves.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Progress tracking",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Parents have the ability to track their children's progress in the app.",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Child-Friendly design",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Avatar, Simple, intuitive interface with visual cues (custom avatar).",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Flexible notifications",
      area: "sm:col-span-3 md:col-span-3 row-start-1 xl:col-span-3 xl:row-span-1",
      description:
        "Users are able to access a notification section to see their upcoming tasks.",
      icon: "/TB-Mobile/role-icons6.png",
    },
  ],

  measuringsuccess: [
    {
      title: "✨ Reduced parental stress levels least 1 point",
      description: [
        "Decrease in self-reported stress levels among parents after regular app usage (measured on a scale of 1-5).",
      ],
    },
    {
      title:
        "✨ Time savings for parents reduce follow-up time by at least 20%.",
      description: [
        "Reduction in the time parents spend manually tracking chores and reminding children.",
      ],
    },
    {
      title: "✨ Increased task completion by 70%",
      description: [
        "Increase in the percentage of tasks completed independently by children, without parental reminders.",
      ],
    },
    {
      title: "✨ Improved family communication by 70%",
      description: [
        "Increase the harmony of the household and how well tasks are handled. Both parent and children feel that tasks are being handled equally.",
      ],
    },
  ],

  lessonslearneds: [
    {
      title: "The power of user feedback",
      description:
        "Usability testing and user interviews are essential for identifying design flaws and refining the user experience. Even features we initially thought would be effective (e.g., automatic reminders) needed to be reconsidered based on user feedback.",
      area: "",
    },
    {
      title: "Ethical design considerations",
      description:
        "It's crucial to consider the potential negative impacts of our designs and make adjustments to mitigate harm. In our case, we removed automatic reminders to prevent anxiety and simplified the children's interface to reduce cognitive load.",
      area: "",
    },
    {
      title: "Simplicity is key",
      description:
        "A clean, intuitive interface is essential for engaging users of all ages. Even for child-centric designs, simplicity and clarity should be prioritized.",
      area: "",
    },
  ],

  nextsteps: [
    {
      title: "Broader range of families",
      description:
        "We will conduct additional usability testing with a broader range of families.",
      area: "",
    },
    {
      title: "Accessibility features",
      description:
        "We will develop a detailed plan for implementing ARIA labels and other accessibility features during the development phase. ",
      area: "",
    },
    {
      title: "Finalize design prototype and get feedback",
      description:
        "We will build a high-fidelity prototype and conduct further user testing and explore integrations with other popular calendar and task management apps.",
      area: "",
    },
    {
      title:
        "We will iterate and improve the application from our targets feedback!",
      description: "",
      area: "md:col-span-3 row-start-2 xl:col-span-3 xl:row-span-1",
    },
  ],

  StylingSystem: [
    {
      title: "Colors system",
      description:
        "The color system is designed to provide a cohesive tonal palette with clear differentiation for primary, secondary, and tertiary elements. Each color tone supports both light and dark themes, ensuring adaptability across different environments. Accent colors like red (error) and green (success) are used to signal important states and actions. The neutral and neutral variant tones provide a flexible base for backgrounds, surfaces, and text.",
      points: [
        "Dark Background(#0F1512): Provides a modern, sleek background for nighttime or focus modes. ",
        "Light Background(#F5FBF7):Ensures a fresh, clean look for day mode or content-heavy pages.",
        "Text Color(#D9D9D9): Is used to create high readability against both the dark and light backgrounds.",
        "Logo & Hovering Effects(#86D6BE): Enhances the brand identity and provides an engaging hover effect to guide user interactions. ",
        "Shadowing(#86D6BE): Subtle shadows are used to create depth and focus, enhancing important UI elements without overwhelming the user.",
      ],
      img: "",
    },
    {
      title: "Typography",
      description: "Montserrat and Roboto",
      points: [
        "Display: For banners and key sections.",
        "Headings: Used to organize content visually.",
        "Body text: Clear and legible for long-form content.",
        "Labels and buttons: Minimal yet noticeable, ensuring clarity.",
      ],
      img: "",
    },
    {
      title: "SpacingSystem",
      description:
        "The spacing system follows a 4-point grid, scaling from 2px (3xs) to 160px (8xl). This consistency ensures balanced layouts and predictable alignment across all devices.",
      img: "",
    },
  ],

  futuredevelopments: [
    {
      title: "Beta testing",
      description:
        "We will conduct a beta test to gather real-world feedback and refine the app before launch.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/exp1.svg",
    },
    {
      title: "Performance and scalability",
      description:
        "The app will be optimized for performance across all devices, ensuring a smooth user experience, even on older phones.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/exp2.svg",
    },
    {
      title: "External calendar integration",
      description:
        "We will add two-way syncing with calendars like Google Calendar to allow families to manage both tasks and events in one place.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/exp3.svg",
    },
    {
      title: "Continual user feedback",
      description:
        "Post-launch, we will continue collecting feedback to improve FamTask, including adding features like a chores marketplace for kids to pick extra tasks for rewards.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/exp4.svg",
    },
  ],

  Conclusions: [
    {
      title: "Conclusion",
      description:
        "FamTask is a UX/UI design concept with the potential to significantly improve the lives of busy families. By focusing on user needs, iterating based on feedback, and prioritizing accessibility, we can create a powerful tool that empowers families to collaborate, stay organized, and reduce stress.",
      area: "sm:col-span-2 md:col-span-3 row-start-1 xl:col-span-2 xl:row-span-1",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "Responsiveness and Availability",
      description:
        "Our system ensures a harmonious, accessible, and responsive design framework that is user-friendly and adaptable to varying contexts.",
      points: [
        "The color system adheres to WCAG standards, ensuring sufficient contrast ratios for text and interactive elements. Both themes (light and dark) are optimized for user comfort in varying lighting conditions.",
        "The typography system supports dynamic resizing for various screen sizes and ensures readability on both small and large displays.",
        "The scalable spacing system adapts fluidly to different screen sizes, maintaining proportionality while ensuring a clean and organized visual hierarchy.",
        "Interactive components include focus indicators and ARIA labels for screen readers, ensuring usability for all users, including those relying on assistive technologies.",
      ],
      img: "",
    },
  ],

  userflows: [
    {
      title: "Onboarding :",
      description:
        " Users are greeted and prompted to create an account or log in. They input basic preferences, allowing for personalized recommendations.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Search for Travel Options :",
      description:
        "Users can search for nearby places to stay, dining options, and activities, with recommendations customized based on their profile.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Book & Plan :",
      description:
        "Once users find their ideal options, they can easily book flights, accommodations, and activities—all in one app.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
    {
      title: "Pre-Travel Checklist & Notifications :",
      description:
        "Users receive timely reminders and updates to ensure they are ready for their trip.",
      className:
        "sm:col-span-1 md:col-span-1 row-start-2 xl:col-span-2 xl:row-span-1",
      icon: "/figma.png",
    },
  ],
};

export const project2Items = {
  myroles: [
    {
      title: "Design Focus",
      description:
        "Primarily responsible for wireframing (Lo-fi and Hi-fi) and contributing to the overall design aesthetic.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons1.png",
    },
    {
      title: "Component Developer",
      description:
        "Contributed to the front-end development of the site. Specifically took ownership of the 'About Us' page.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icons2.png",
    },
    {
      title: "Team Collaborator",
      description:
        "Participated actively in code reviews, Git collaboration, and agile planning/retrospectives.",
      className: "h-4 w-4 text-neutral-500",
      icon: "/TB-Mobile/role-icon3.png",
    },
  ],

  goals: [
    {
      title:
        "The project aimed to create a fully functional webshop that includes:",
      des: [
        "👉 Product Listing Page",
        "👉 Detailed Product Pages",
        "👉 Shopping Cart Functionality (add, remove, change quantities)",
        "👉 Order Confirmation (fake payment flow)",
        "👉 Responsive Design across desktop, tablet, and mobile devices.",
        "👉 Clean and maintainable code.",
        "👉 Adherence to Agile principles through GitHub Projects, regular meetings, and code reviews.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Learning Objectives:",
      des: [
        "👉 Apply Agile methodologies in a team setting.",
        "👉 Gain proficiency in React, Vite, and React Router.",
        "👉 Improve design skills through wireframing and collaborative design discussions.",
        "👉 Enhance Git and GitHub collaboration skills.",
      ],
      className: "text-neutral-500",
    },
  ],

  designProcess: [
    {
      title: "Inspiration & Ideation:",
      description: [
        "The team decided to create a website for a fashion brand named 'Shoes & Stitches'.",
        "Drew inspiration from clean, simple designs of existing fashion brand websites.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Wireframing & Mockups:",
      description: [
        "Started with Lo-fi wireframes to establish the basic structure and layout.",
        "Progressed to Hi-fi wireframes, refining the design details.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Design System:",
      description: [
        "Established a design system with the 'Poppins' font.",
        "Used a primary color scheme of black and white for a clean, high-contrast look.",
        "Used additional colors sparingly for notifications (e.g., error and approval messages).",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Iteration:",
      description: [
        "Initially designed the product page one way, but had to revise it to a simpler version to better align with our coding capabilities.",
      ],
      className: "text-neutral-500",
    },
  ],

  DevelopmentProcess: [
    {
      title: "Code Structure:",
      description: [
        "Established a basic React code structure with pages and components, which was shared on GitHub.",
        "Tasks were divided based on individual skills. I was responsible for the 'About Us' page.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Agile Workflow:",
      description: [
        "Used GitHub Projects for task management and progress tracking.",
        "Conducted regular team meetings for updates and problem-solving.",
        "Implemented pull requests and code reviews to ensure code quality.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Technology Stack:",
      description: [
        "React: For building the user interface.",
        "Vite: As a build tool for fast development.",
        "react-router-dom: For handling routing and navigation.",
        "Git/GitHub: For version control and collaboration.",
        "Netlify: For deploying and hosting the application.",
      ],
      className: "text-neutral-500",
    },
  ],

  challenges: [
    {
      title: "Design Complexity vs. Coding Capabilities: ",
      des: "We had to adjust the design due to coding complexity. For example, we initially designed the product page one way (Product Page 1) but had to revise it to a simpler version (Product Page 2) to better align with our coding capabilities.",
      className: "text-neutral-500",
    },
    {
      title: "Learning Git:",
      des: "As a group, we supported each other, especially with using Git. I learned a lot about working with Git and Git commands thanks to the guidance of my team members.",
      className: "text-neutral-500",
    },
  ],
  solutions: [
    {
      title: "Solution 1:",
      des: "Through iterative design and open communication, we simplified the design while maintaining the core functionality and aesthetic.",
      className: "text-neutral-500",
    },
    {
      title: "Solution 2:",
      des: "Leveraged team expertise to improve Git skills and effectively collaborate on the project.",
      className: "text-neutral-500",
    },
  ],

  outcomesandResults: [
    {
      id: 1,
      area: "",
      icon: "",
      title: "Functional Webshop",
      description: [
        "The team successfully developed a functional webshop with product listings, detailed product pages, a shopping cart, and an order confirmation process.",
      ],
    },
    {
      id: 2,
      area: "",
      icon: "",
      title: "Responsive Design",
      description: [
        "The application is responsive and works well on mobile and desktop devices.",
      ],
    },
    {
      id: 3,
      area: "",
      icon: "",
      title: "Positive Feedback",
      description: [
        "Received positive feedback on the design and purchase flow from the Orders manager.",
      ],
    },
    {
      id: 4,
      area: "lg:col-span-4 md:col-span-3 md:row-span-2",
      icon: "",
      title: "✨ Nice design!",
      description: [
        "'It really feels like a realistic webshop! The purchase flow is very good and you even manage to get me to look at more products than I was originally interested in.'",
      ],
    },
  ],

  LearnedandReflections: [
    {
      id: 1,
      area: "",
      icon: "",
      title: "Agile Benefits:",
      description: [
        "The agile working methodology proved to be very effective for our project, promoting quick decisions and flexibility.",
      ],
      className: "text-neutral-500",
    },
    {
      id: 2,
      area: "",
      icon: "",
      title: "Teamwork Importance:",
      description: [
        "This project emphasized the importance of teamwork, adaptability, and continuous learning to achieve successful results.",
      ],
      className: "text-neutral-500",
    },
    {
      id: 3,
      area: "",
      icon: "",
      title: "Skill Development:",
      description: [
        "I especially improved my wireframing and Git skills through collaboration.",
      ],
      className: "text-neutral-500",
    },
    {
      id: 4,
      area: "lg:col-span-4 md:col-span-3 md:row-span-2",
      icon: "",
      title: "Areas for Improvement:",
      description: [
        "Coding Skills: However, our coding skills could have been stronger; with more advanced skills, we could have tackled a more complex design.",
        "Code Consistency: The Orders manager noticed mixed export methods and used both arrow functions and regular function declarations",
        "Acknowledge the feedback and state how I would address it in future projects, like establishing stricter coding guidelines.",
      ],
      className: "text-neutral-500",
    },
  ],
};

export const project4Items = {
  KeyFeatures: [
    {
      title: "Services Offered",
      description:
        "Clearly outlining the different types of massage and training company provides.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Trust and credibility",
      description:
        "Building trust and credibility by showcasing company's experience, qualifications, and personal approach.",
      area: "sm:col-span-1 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Contact Information",
      description:
        "Making it easy for potential clients to get in touch and book appointments.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Location & Opening hours",
      description:
        "Providing the address, a map and opening hours to the physical location.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
    },
    {
      title: "Benefits of Services",
      description: "Highlighting the positive outcomes clients can expect.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 xl:col-span-2 xl:row-span-1",
      icon: "/TB-Mobile/role-icons6.png",
    },
  ],

  problemsandsolutions: [
    {
      title: "Problem",
      des: [
        "👉 Outdated Design: Visually dated and less appealing.",
        "👉 Not Fully Responsive: Doesn't adapt well to smaller screens.",
        "👉 No Online Booking: Requires phone or email contact, which is less convenient.",
        "👉 Less Organized: Information is harder to find.",
        "👉 Lower Quality Images: Images are smaller and less impactful.",
        "👉 No Contact Form: Missing a convenient way to send messages.",
      ],
      className: "text-neutral-500",
    },
    {
      title: "Solution",
      des: [
        "✨ Modern Design: Cleaner, more contemporary look.",
        "✨ Responsive: Works well on all devices.",
        "✨ Online Booking : Major improvement in user experience.",
        "✨ Clearer Information Architecture: Better organization of content.",
        "✨ Professional Photography: Higher quality images.",
        "✨ Social Media Links: Provide an experience for visitors and clients.",
        "✨ Testimonials: Builds trust with potential clients.",
      ],
      className: "text-neutral-500",
    },
  ],

  challenges: [
    {
      title: "User Experience (UX)",
      description:
        "How layout, navigation, and booking flow impact the user journey.",
      className: "text-neutral-500",
    },
    {
      title: "Responsive Design",
      description:
        "Check how the site adapts on different devices. Learning to make a website responsive is crucial for modern web development.",
      className: "text-neutral-500",
    },
    {
      title: "Forms and Data Handling",
      description:
        "Especially the booking system and contact forms, which are essential for interactive websites.",
      className: "text-neutral-500",
    },
    {
      title: "Integration of Third-Party Tools",
      description:
        "The booking system is a third-party tool integrated into the website, a valuable lesson in how to connect external systems with the website.",
      className: "text-neutral-500",
    },
  ],

  ResponsiveDesign: [
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
    {
      title: "",
      description: "",
    },
  ],

  ResponsivenessAndAvailability: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
  ],

  Conclusion: [
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },
    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },

    {
      title: "",
      description: "",
      img: "",
    },
  ],

  lessonslearneds: [
    {
      title: "Navigation Improvement",
      description:
        "How to navigation, making it smooth and intuitive should be the first priority. If users can't find what they're looking for easily, they'll leave the site. Plus, if the navigation is confusing or unclear, users will bounce before even considering booking a service. ",
      area: "",
    },
    {
      title: "Design Consistency",
      description:
        "Design consistency makes the site look professional and trustworthy. When things are mismatched or visually jarring, it can confuse users and make them feel uncomfortable on the site.",
      area: "",
    },
    {
      title: "Booking System Usability",
      description:
        "The booking system is crucial for this website. If it's confusing or hard to use, the company could lose customers. I'm ensured that those features works flawlessly is essential for converting visitors into clients.",
      area: "",
    },
    {
      title: "Content Structure & Presentation",
      description:
        "Content should be educate and guide the audience without overwhelming them. If the text is too long or too scattered, users will lose focus. Clear and concise content is the way to go.",
      area: "",
    },
    {
      title: "Responsive Design",
      description:
        "More and more users are browsing on mobile devices, so I'm making sure the site looks good on all screen sizes is non-negotiable.",
      area: "",
    },
    {
      title: "SEO Optimization",
      description:
        "Search engine optimization (SEO) ensures the website shows up in search results when potential clients search for services. I'm improved SEO will make it easier for people to find the business online.",
      area: "",
    },
  ],

  OutcomesandResults: [
    {
      title: "Modernization",
      description:
        "Updating the website to meet current web standards and user expectations.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 lg:col-span-3 xl:row-span-1",
    },
    {
      title: "Mobile-First Approach",
      description:
        "ecognizing that many users access websites on their phones.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 lg:col-span-2 xl:row-span-1",
    },
    {
      title: "Improved User Experience",
      description:
        "Making it easier for clients to find information and book appointments.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 lg:col-span-3 xl:row-span-1",
    },
    {
      title: "Online Booking",
      description: "A crucial feature for convenience and efficiency.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 lg:col-span-2 xl:row-span-1",
    },
    {
      title: "Professional Branding",
      description: "Creating a more polished and trustworthy online presence.",
      area: "sm:col-span-2 md:col-span-2 row-start-1 lg:col-span-3 xl:row-span-1",
    },
  ],
};
