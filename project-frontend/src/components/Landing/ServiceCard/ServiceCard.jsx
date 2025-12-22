import React, { useState } from "react";
import classes from "../../Landing/Landing.module.scss";
import { Link } from "react-router-dom";


function ServiceCard() {
const [showAll, setShowAll] = useState(false);

const allServices = [
    {
      id: 1,
      title: 'Braces and Aligners',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766376115/braces_lwjlte.png',
      path: "/our-services/braces-aligners"
    },
    {
      id: 2,
      title: 'Painless Root Canal',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766376283/rootcanal2_ezlv27.png',
      path: "/our-services/painless-root-canal"
    },
    {
      id: 3,
      title: 'Dental Implant',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766376265/dentalimplant1_iyswd2.png',
    path: "/our-services/dental-implant"
    },
    {
      id: 4,
      title: 'Denture',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766379978/denture1_ninka1.png',
      path: "/our-services/denture"
    },
    {
      id: 5,
      title: 'Crowns & Bridges',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766382389/dc1_sunlf0.png',
       path: "/our-services/crowns-bridges"
    },
    {
      id: 6,
      title: 'Full Mouth Reconstruction',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766382437/fmr1_kv2ftk.png',
      path: "/our-services/full-mouth-reconstruction"
    },
    {
      id: 7,
      title: 'Children Dentistry',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766382654/cd1_xzwgyz.png',
       path: "/our-services/children-dentistry"
    },
    {
      id: 8,
      title: 'Teeth Whitening',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766382430/vc3_zojnk2.png',
      path: "/our-services/teeth-whitening"
    },
    // {
    //   id: 9,
    //   title: 'Aligners',
    //   image: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=400&h=300&fit=crop',
    //    path: "/our-services/veneer-componeers"
    // },
    {
      id: 10,
      title: 'Veneer and Componeers',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766382406/vc1_ljvqte.png',
       path: "/our-services/veneer-componeers"
    },
    {
      id: 11,
      title: 'TMJ Disorder',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      path: "/our-services/tmj-disorder"
    },
    {
      id: 12,
      title: 'Gum disease Treatment',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766316555/11_dq1ua4.png',
       path: "/our-services/gum-disease"
    },
    {
      id: 13,
      title: 'Gum depigmentation and Gum Contouring',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766315721/gdc1_j5lvlz.png',
      path: "/our-services/gum-depigmentation-and-gum-contouring"
    },
    {
      id: 14,
      title: 'Fillings, Inlays and Onlays',
      image: 'https://res.cloudinary.com/dflcuzluo/image/upload/v1766384905/inon_ze5wcc.png',
       path: "/our-services/fillings-inlays-and-onlays"
    },
    {
      id: 15,
      title: 'Jaw Bone Regeneration',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop',
      path: "/our-services/jaw-bone-regenration"
    },
    {
      id: 16,
      title: 'Gum repositioning Surgery',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313669/ggs12_eobqtm.png',
      path: "/our-services/gum-repositioning-surgery"
    },
    {
      id: 17,
      title: 'Teeth Straightening',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312592/teeth2_lvgnnr.png',
      path: "/our-services/teeth-straightening"
    },
    {
      id: 18,
      title: 'Jaw Growth Guidance',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312019/Gemini_Generated_Image_m7u8dvm7u8dvm7u8_wstvtb.png',
      path: "/our-services/jaw-growth-guidance",
    },
    {
      id: 19,
      title: 'Orthognathic Surgery',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766311692/ort1_cc79gh.jpg',
      path: "/our-services/orthognathic-surgery",
    },
    {
      id: 20,
      title: 'Flouride Treatment',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313084/fl2_eikyhq.png',
      path: "/our-services/flouride-treatment"
    },
    {
      id: 21,
      title: 'Preventive Sealants',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766309805/sea1_loytmj.png',
      path: "/our-services/preventive-sealants",
    },
    {
      id: 22,
      title: 'Habit Breaking Appliances',
      image: 'https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766310511/hba13_hjbd0y.png',
      path: "/our-services/habit-breaking-appliances"
    }
  ];

  const displayedServices = showAll ? allServices : allServices.slice(0, 10);

  return (
    <>
    <div className="bg-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold mb-2 tracking-wide">Our Services</p>
          <h1 className="text-2xl md:text-5xl font-bold" style={{ color: '#88b121' }}>
            OUR DENTAL SERVICES
          </h1>
        </div>

        {/* Services Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {displayedServices.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
            >
              <div className="h-32 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="text-gray-800 font-semibold text-xs">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        {/* Toggle Button */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            {showAll ? 'View Less Services' : 'View All Services'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ServiceCard;
