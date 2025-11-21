// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import classes from "./ProjectModal.module.scss";
// import bgBlueGrid from "/assets/bg-blue-grid1.svg";

// // Import images
// import img1 from "/assets/sp1.jpeg";
// import img2 from "/assets/ss2.jpeg";
// import img3 from "/assets/ss3.jpeg";
// import img4 from "/assets/ss4.jpeg";
// import img5 from "/assets/ss5.jpeg";
// import img6 from "/assets/ss6.jpeg";
// import img7 from "/assets/ss7.jpeg";
// import img8 from "/assets/ss8.jpeg";
// import img9 from "/assets/ss9.jpeg";

// const SolarProjects = () => {
//   const location = useLocation();
//   const demoData = [
//     {
//       id: "G-50",
//       name: "Solar Transport Hub",
//       location: "City A",
//       company: "Transporting Company",
//       savings: "₹35K",
//       capacity: "50.6 kW",
//       validityDate: "Dec 2039",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img1,
//     },
//     {
//       id: "G-52",
//       name: "Eco Power Station",
//       location: "City B",
//       company: "Energy Grid",
//       savings: "₹42K",
//       capacity: "75.2 kW",
//       validityDate: "Jan 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img2,
//     },
//     {
//       id: "G-53",
//       name: "Community Solar Park",
//       location: "City C",
//       company: "Residential Area",
//       savings: "₹50K",
//       capacity: "90.1 kW",
//       validityDate: "Feb 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img3,
//     },
//     {
//       id: "G-54",
//       name: "Solar Green Factory",
//       location: "City D",
//       company: "Industrial Sector",
//       savings: "₹60K",
//       capacity: "110.5 kW",
//       validityDate: "Mar 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img4,
//     },
//     {
//       id: "G-55",
//       name: "Renewable Hub",
//       location: "City E",
//       company: "Corporate Office",
//       savings: "₹30K",
//       capacity: "65.0 kW",
//       validityDate: "Apr 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img5,
//     },
//     {
//       id: "G-56",
//       name: "Solar Grid Expansion",
//       location: "City F",
//       company: "Utility Provider",
//       savings: "₹75K",
//       capacity: "120.7 kW",
//       validityDate: "May 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img6,
//     },
//     {
//       id: "G-57",
//       name: "Solar Car Charging Station",
//       location: "City G",
//       company: "Public Infrastructure",
//       savings: "₹25K",
//       capacity: "45.3 kW",
//       validityDate: "Jun 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img7,
//     },
//     {
//       id: "G-58",
//       name: "Agricultural Solar Farm",
//       location: "City H",
//       company: "Farming Sector",
//       savings: "₹80K",
//       capacity: "130.2 kW",
//       validityDate: "Jul 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img8,
//     },
//     {
//       id: "G-59",
//       name: "Smart City Solar Grid",
//       location: "City I",
//       company: "Smart City Project",
//       savings: "₹95K",
//       capacity: "150.0 kW",
//       validityDate: "Aug 2040",
//       validityLabel: "Operational Validity",
//       Date: "Dec 2025",
//       image: img9,
//     },
//   ];

 
//     return location.pathname === "/solar-project" ? (
//     <div className={`${classes.solarProjects} mt-9`}>
//         {/* Background Image */}
//         {/* <div className={`${classes.heroSection}`}>
//         <img src={bgBlueGrid} alt="Background Grid" className={`${classes.bgImage}`} />
//         <div className={`${classes.textContainer}`}>
//             <h2 className={`${classes.heading}`}>Powering communities with your solar</h2>
//             <p className={`${classes.description}`}>
//             Join a digital solar project and get monthly credits for the power your solar delivers to organizations across the country
//             </p>
//         </div>
//         </div> */}

//         {/* Filter Buttons */}
//         <div className={`${classes.filterButtons}`}>
//         <button className={`${classes.joinAccess}`}>Join Free Access</button>
//         <button className={`${classes.active}`}>All Projects <span>50</span></button>
//         <button className={`${classes.button1}`}>Completed <span>20</span></button>
//         <button className={`${classes.button2}`}>In Progress <span>30</span></button>
//         </div>

//         {/* Project Grid */}
//         <div className={`${classes.projectsGrid}`}>
//         {demoData.map((project) => (
//         <Link to="/plantdetails">
//             <div key={project.id} className={`${classes.projectCard}`}>
//             <img src={`${project.image}`} alt="Project" className={`${classes.projectImage}`} />
//             <div className={`${classes.projectInfo}`}>
//                 <div className={`${classes.projectHeader}`}>
//                 <div className={`${classes.projectId}`}>
//                 {project.id}
//                 </div>
//                 <div className="ml-4">
//                 <h3 className={`${classes.projectName}`}>{project.name}</h3>
//                 <p className={`${classes.projectCategory}`}>{project.category}</p>
//                 <p className={`${classes.locationmanage}`}>{project.location}</p>
//                 <p className={`${classes.locationmanage}`}>Managed by <span className="text-[#464646]">{project.company}</span></p>
//                 </div>
//                 </div>
        
//                 <div className={`${classes.savinginfo}`}>
//                     <div className="flex items-center">
//                     <div className="mr-2">
//                         <img src="\assets\icons\rupee.svg" alt="Project" className={`${classes.pImg}`} />
//                     </div>
//                     <span className={`${classes.savinguser}`}>Users saved {project.savings} in Power bills.</span>
//                     </div>
//                     <div>
//                     <img src="\assets\icons\arrow.svg" alt="Project" className={`${classes.pImg}`} />
//                     </div>
//                 </div>
                
//                 <div className={`${classes.details}`}>
//                 <div className={`${classes.capacityContainer}`}>
//                     <span className={`${classes.capacity}`}>{project.capacity}</span>
//                     <span className={`${classes.label}`}>Capacity</span>
//                 </div>
//                 <div className={`${classes.separator}`} /> 
//                 <div className={`${classes.dateContainer}`}>
//                     <span className={`${classes.date}`}>{project.Date}</span>
//                     <span className={`${classes.label}`}>Operational Until</span>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </Link>
//         ))}
//         </div>

//         {/* Explore More Button */}
//         {/* <button className={`${classes.exploreBtn}`}>Explore More Projects</button> */}

//         {/* Check Digital Solar Section */}
//         {/* <div className={`${classes.checkSolar}`}>
//         <span className={`${classes.checkspan}`}>
//         Check if Digital Solar is available for your utility
//     </span>
//     <button className={`${classes.checkBtn}`}>
//         Check Compatibility &gt;
//     </button>
//         </div> */}

//         {/* Footer Section */}
//         {/* <div className={`${classes.footer}`}>
//         <h3>Our Team is Ready to Assist You</h3>
//         <p>
//             Whether you have questions about our products, need a quote, or want
//             to discuss a project, don't hesitate to reach out. We look forward to
//             working with you to power a sustainable future!
//         </p>
//         </div> */}
//     </div>
//     ):(
//         <div className={`${classes.solarProjects}`}>
//             {/* Background Image */}
//             <div className={`${classes.heroSection}`}>
//             <img src={bgBlueGrid} alt="Background Grid" className={`${classes.bgImage}`} />
//             <div className={`${classes.textContainer}`}>
//                 <h2 className={`${classes.heading}`}>Powering communities with your solar</h2>
//                 <p className={`${classes.description}`}>
//                 Join a digital solar project and get monthly credits for the power your solar delivers to organizations across the country
//                 </p>
//             </div>
//             </div>

//             {/* Filter Buttons */}
//             <div className={`${classes.filterButtons}`}>
//             <button className={`${classes.joinAccess}`}>Join Free Access</button>
//             <button className={`${classes.active}`}>All Projects <span>50</span></button>
//             <button className={`${classes.button1}`}>Completed <span>20</span></button>
//             <button className={`${classes.button2}`}>In Progress <span>30</span></button>
//             </div>

//             {/* Project Grid */}
//             <div className={`${classes.projectsGrid}`}>
//             {demoData.map((project) => (
//             <Link to="/plantdetails">
//                 <div key={project.id} className={`${classes.projectCard}`}>
//                 <img src={`${project.image}`} alt="Project" className={`${classes.projectImage}`} />
//                 <div className={`${classes.projectInfo}`}>
//                     <div className={`${classes.projectHeader}`}>
//                     <div className={`${classes.projectId}`}>
//                     {project.id}
//                     </div>
//                     <div className="ml-4">
//                     <h3 className={`${classes.projectName}`}>{project.name}</h3>
//                     <p className={`${classes.projectCategory}`}>{project.category}</p>
//                     <p className={`${classes.locationmanage}`}>{project.location}</p>
//                     <p className={`${classes.locationmanage}`}>Managed by <span className="text-[#464646]">{project.company}</span></p>
//                     </div>
//                     </div>
            
//                     <div className={`${classes.savinginfo}`}>
//                         <div className="flex items-center">
//                         <div className="mr-2">
//                             <img src="\assets\icons\rupee.svg" alt="Project" className={`${classes.pImg}`} />
//                         </div>
//                         <span className={`${classes.savinguser}`}>Users saved {project.savings} in Power bills.</span>
//                         </div>
//                         <div>
//                         <img src="\assets\icons\arrow.svg" alt="Project" className={`${classes.pImg}`} />
//                         </div>
//                     </div>
                    
//                     <div className={`${classes.details}`}>
//                     <div className={`${classes.capacityContainer}`}>
//                         <span className={`${classes.capacity}`}>{project.capacity}</span>
//                         <span className={`${classes.label}`}>Capacity</span>
//                     </div>
//                     <div className={`${classes.separator}`} /> 
//                     <div className={`${classes.dateContainer}`}>
//                         <span className={`${classes.date}`}>{project.Date}</span>
//                         <span className={`${classes.label}`}>Operational Until</span>
//                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </Link>
//             ))}
//             </div>

//             {/* Explore More Button */}
//             <button className={`${classes.exploreBtn}`}>Explore More Projects</button>

//             {/* Check Digital Solar Section */}
//             <div className={`${classes.checkSolar}`}>
//             <span className={`${classes.checkspan}`}>
//             Check if Digital Solar is available for your utility
//         </span>
//         <button className={`${classes.checkBtn}`}>
//             Check Compatibility &gt;
//         </button>
//             </div>

//             {/* Footer Section */}
//             <div className={`${classes.footer}`}>
//             <h3>Our Team is Ready to Assist You</h3>
//             <p>
//                 Whether you have questions about our products, need a quote, or want
//                 to discuss a project, don't hesitate to reach out. We look forward to
//                 working with you to power a sustainable future!
//             </p>
//             </div>
//         </div>
//     );

 

// };

// export default SolarProjects;
