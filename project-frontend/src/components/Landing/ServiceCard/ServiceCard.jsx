import React, { useState } from "react";
import classes from "../../Landing/Landing.module.scss";

function ServiceCard() {
const [showAll, setShowAll] = useState(false);

const allServices = [
    {
      id: 1,
      title: 'Braces',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Painless Root Canal',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Dental Implant',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'Denture',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Crowns & Bridges',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981407e3ad?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Full Mouth Reconstruction',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      title: 'Children Dentistry',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      title: 'Teeth Whitening',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop'
    },
    {
      id: 9,
      title: 'Aligners',
      image: 'https://images.unsplash.com/photo-1609840112855-9ab5ad8f66e4?w=400&h=300&fit=crop'
    },
    {
      id: 10,
      title: 'Veneer and Componeers',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    },
    {
      id: 11,
      title: 'TMJ Disorder',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop'
    },
    {
      id: 12,
      title: 'Gum disease Treatment',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981407e3ad?w=400&h=300&fit=crop'
    },
    {
      id: 13,
      title: 'Gum depigmentation and Gum Contouring',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop'
    },
    {
      id: 14,
      title: 'Fillings, Inlays and Onlays',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      id: 15,
      title: 'Jaw Bone Regeneration',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop'
    },
    {
      id: 16,
      title: 'Gum repositioning Surgery',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    },
    {
      id: 17,
      title: 'Teeth Straightening',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop'
    },
    {
      id: 18,
      title: 'Jaw Growth Guidance',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop'
    },
    {
      id: 19,
      title: 'Orthognathic Surgery',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981407e3ad?w=400&h=300&fit=crop'
    },
    {
      id: 20,
      title: 'Flouride Treatment',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      id: 21,
      title: 'Preventive Sealants',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop'
    },
    {
      id: 22,
      title: 'Habit Breaking Appliances',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop'
    }
  ];

  const displayedServices = showAll ? allServices : allServices.slice(0, 10);

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-2 tracking-wide">Our Services</p>
          <h1 className="text-2xl md:text-5xl font-bold" style={{ color: '#88b121' }}>
            OUR DENTAL SERVICES
          </h1>
        </div>

        {/* Services Grid */}
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
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
            </div>
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
