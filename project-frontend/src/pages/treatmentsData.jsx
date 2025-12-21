import React from "react";
// src/data/treatmentsData.js
const treatmentsData = [
  {
    id: "braces-aligners",
    name: "Braces & Aligners",
    description: "Experience the power of dental braces, aligning and transforming teeth with precision. Notice significant improvements with jaw correction, confident smiles, and easier chewing",
    // image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // HD dental braces
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
    {
      title: "Wearing Aligners",
      description:
        "Braces are more than just a beauty boost. They address various issues—open bite, jaw structure, and overcrowding—ensuring proper oral health. Straightened teeth mean improved hygiene, efficient chewing, and reduced periodontal problems. Clear aligners, a popular option, are virtually invisible and perfect for adults seeking discreet orthodontic treatment. No food restrictions, no speech difficulties—just comfort and hygiene, offering confident smiles for all.",
      image: "/assets/braces.png",
    },
    {
      title: "WHAT ARE CLEAR ALIGNERS??",
      description:
        "When you wear clear aligners, you can smile without it being obvious that you are undergoing orthodontic treatment. What will be obvious is that your smile is looking better. Since the aligners are clear, you can see the position of your teeth. This is a huge benefit because as your teeth become straighter, your appearance will improve, rather than you waiting until the very end to benefit from the changes.",
      image: "/assets/aligners.png",
    },
  ],
  },
  {
    id: "painless-root-canal",
    name: "Painless Root Canal",
    description: "Save your natural tooth with advanced painless root canal treatment.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What is a Root Canal?",
        description:
        <>
          <p className="mb-4">When tooth pulp is damaged, it’s crucial to act swiftly. Root canal treatment also known as Endodontic Treatment involves removing the affected pulp and ensuring thorough cleaning and packing.The multi-step process involves removing the infected material, disinfecting the tooth, filling, and sealing it with inert material, followed by restoration and a crown/cap. </p>
          <p className="mb-4">In the past, decayed teeth meant painful extractions, but fear no more! Progressive root canal treatments now save teeth that would have been lost. Ignoring infected pulp can be perilous, leading to pus formation and jawbone damage. Avoid such dire consequences – trust Mahi Dental to protect your oral health. Choose prevention over risk, and let us safeguard your beautiful smile! Act now and embrace painless dental care!</p>
          <p className="mb-4">Since prevention is better than cure, why take a fatal risk when Mahi Dental at your service? Trust us to safeguard your oral health and protect your beautiful smile. Act now and experience painless dental care.</p>
        </>,
        image:
          "/assets/rootcanal1.png",
      },
      {
        title: "Why ‘Painless’?",
        description:
        <>
          <p className="mb-4">Suffering from a terrible toothache? Experience safe and reliable root canal treatment  at Mahi Dental.</p>
          <ul className="list-disc pl-5 space-y-3">
           <li>Robotic Device: Precise root canal with Apex Locator and Robotic Device Endo-motor, reducing manual reliance and speeding up treatment.</li>
           <li>Computerised Painless Injection: An anxiety-free root canal experience with magical wand-like painless injections.</li>
           <li>Experienced Doctors: Our Endodontists excel in advanced treatments, saving heavily damaged teeth and reviving failed root canals.</li>
           <li>Many Convenient Locations: Multiple branches in Ahmedabad, Surat, and Gandhinagar for easy access to expert dental care.</li>
          </ul>
        </>,
        image:
          "/assets/rootcanal2.png",
      },
      {
        title: "Aftercare & Success",
        description:
          "Post-op care includes short-term pain control and follow-ups. When properly done and restored, root canal treated teeth have a high long-term survival rate.",
        image:
          "/assets/rootcanal3.jpg",
      },
    ],
  },
  {
    id: "dental-implant",
    name: "Dental Implant",
    description: "Replace missing teeth with safe and long-lasting dental implants.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What is a Dental Implant?",
        description:
          "This is basically an artificial tooth root that is placed into your jaw to hold either a single replacement tooth or a multi-tooth bridge or implant supported removable denture or implant supported fixed denture/prosthesis",
        image:
          "/assets/dentalimplant1.png",
      },
      {
        title: "Benefits of Implants",
        description:
          "Preserve jawbone, restore chewing efficiency, prevent adjacent tooth drifting, and provide a long-term aesthetic solution compared with removable options.",
        image:
          "/assets/dentalimplant2.png",
      },
      {
        title: "Treatment Process",
        description:
          "Includes consultation, 3D imaging, surgical placement, healing period for osseointegration, and final prosthetic attachment (crown/bridge/overdenture).",
        image:
          "/assets/dentalimplant3.png",
      },
    ],
  },
  {
    id: "denture",
    name: "Denture",
    description: "Comfortable and natural-looking dentures for a confident smile.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Complete Denture",
        description:
        <>
         <p>When all the teeth are lost, complete dentures are made to replace all of them. Complete dentures further have two types:</p>
         <ul className="list-disc space-y-1">
          <p><b>Conventional-</b></p>
          <p className="pl-5">Conventional dentures are placed after the gum starts healing post teeth removal. It can be placed after a period of 8-12 weeks of teeth removal.</p>
          <p><b>Immediate-</b></p>
          <p className="pl-5">In immediate dentures, the patient doesn’t have to wait for long as in conventional dentures. They are prepared in advance to be positioned instantly when the tooth is pulled out.</p>
         </ul>
        </>,
        image:
          "https://images.unsplash.com/photo-1599058917217-1f3b0d3c2f5b",
      },
      {
        title: "partial Dentures",
        description:
          "When a few or some of the natural teeth still exist, partial dentures are put into action. They can fill gaps of missing teeth as well as stop other teeth to shift their positions. The partial denture includes replacement teeth connected to a plastic base of gum colour. This is further attached to metal clasps to make the denture’s position immovable in the mouth. Instead of metal clasps, precision attachments are also used as they give esthetic look. Also, they are nearly invisible. Partial removable dentures are the least preferred form of tooth/teeth replacement as they cause damage to the underlying bone and eventually give rise to increased ageing looks.",
        image:
          "https://images.unsplash.com/photo-1588774069624-6d0b8b6b2a66",
      },
      {
        title: "who is fit for dentures?",
        description:
          <>
           <p className="mb-4">Dentures are meant for elderly people. Loss of teeth may have a high emotional impact on a few growing adults and hence we recommend a replacement. Mahi Dental will guide you through our seamless dentures services. Our dentures specialists are profoundly experienced to understand your case and let you know which treatment will best suit you. As our valued patient, your safety is our prime focus. Hence we do not compromise in the quality of our denture services.</p>
           <p className="mb-4">Getting accustomed to wearing dentures takes time. Hence, new denture wearers may find it difficult and uncomfortable. They may find it to be a little irritating but with the passage of two to three days, you will automatically settle. You may find your speech has become clear and facial expressions have changed. All you need to have is enough patience for dentures to show its real results.</p>
          </>,
        image:
          "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      },
    ],
  },
  {
    id: "crowns-bridges",
    name: "Crowns & Bridges",
    description: "Restore damaged teeth with durable crowns and bridges.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What are Crowns?",
        description:
          <>
           <p><b>Crowns</b></p>
           <p className="mb-4">To protect a cracked or broken tooth, dental crowns are used. A dental crown is a ‘cap’ placed over a tooth-shaped. It is prepared to be placed over the tooth in a way that it completely covers the tooth. Dental crowns restore the shape, strength and size of your tooth thereby improving your chewing & facial integrity.</p>
           <p><b>Types of Crowns:</b></p>
           <ul className="list-disc space-y-2 pl-5">
            <li><b>Temporary Crowns:</b>Temporary Crowns: Metal alloy or acrylic is used to prepare these crowns.Temporary Crowns: Metal alloy or acrylic is used to prepare these crowns. Metal alloy or acrylic is used to prepare these crowns.Temporary Crowns: Metal alloy or acrylic is used to prepare these crowns.</li>
            <li><b>Stainless Steel Crowns:</b>These fabricated crowns made from stainless steel are specially preferred for children as they are less in cost and can be incorporated in a single visit.</li>
            <li><b>Metal Crowns: </b>These are prepared from cast gold alloys or cast silver palladium alloys. They last for a long and can withstand chewing food. </li>
            <li><b>Porcelain Crowns:</b>These crowns are casted with metal inside and are baked with porcelain over it. These are natural looking but have short durability.</li>
            <li><b>All Zirconia Crowns:</b>They provide maximum aesthetic results but are abrasive and can damage the opposite teeth if not made properly. </li>
            <li><b>DMLS Crowns: </b>They are the newest type of crowns that the casting procedure and make the fit of the caps more accurate and precise</li>
           </ul>
          </>,
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      },
      {
        title: "What are Bridges?",
        description:
        <>
        <p><b>Bridges</b></p>
        <p className="mb-4">The Bridges are used to replace missing teeth. The bridge should be preffered only when a dental Implant is not possible. The sound teeth on either side of a missing tooth are grinded. These sound teeth also bear the chewing load of the missing teeth</p>
        <p><b>Types of Bridges:</b></p>
        <ul className="list-disc space-y-2 pl-5 mb-4">
          <li><b>Traditional Bridges:</b>These are the most common ones made from porcelain baked over metal or ceramic.</li>
          <li><b>Cantilever Bridges:</b>These are particularly used for small spaces.</li>
          <li><b>Maryland Bonded Bridges:</b>These are used to bind the frontal teeth. It is also known as a resin-bonded bridge.</li>
          <li><b>Implant-Backed Dental Bridges:</b>These are preferable if you have more than one missing tooth.</li>
        </ul>
        <p><b>Fabrication of crowns and bridges requires the below-mentioned steps:</b></p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Reduction of the tooth/teeth size.</li>
          <li>Taking teeth impression.</li>
          <li>Preparation of dental crown or bridge.</li>
          <li>Fixation of temporary crown or bridge.</li>
          <li>Fixing of the permanent crown or bridge.</li>
        </ul>
        </>,
        image:
          "https://images.unsplash.com/photo-1588774069623-5c0a9f8b2e52",
      },
      {
        title: "When to Choose Which",
        description:
          "Crowns for single tooth restoration; bridges when adjacent teeth can serve as reliable supports — implant-supported bridges are preferred for preserving bone.",
        image:
          "https://images.unsplash.com/photo-1603398938377-8b3d1e2c4f1b",
      },
    ],

  },
  {
    id: "full-mouth-reconstruction",
    name: "Full Mouth Reconstruction",
    description: "Comprehensive treatment to restore function and aesthetics.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What Is Full Mouth Reconstruction?",
        description:
        <>
          <p className="mb-4">Full mouth reconstruction is an exceptional treatment designed to improve dental health and boost confidence with a beautiful smile. This advanced technique goes beyond replacing missing teeth and revitalizes the entire mouth structure, including jaw and gum functions. Often referred to as full mouth rehabilitation or restoration, it involves combining various restorative, complex neuromuscular, and cosmetic techniques.</p>
          <p className="mb-4">By restoring all teeth in both upper and lower jaws, this treatment offers a chance to rebuild your smile. Our use of advanced methodologies and technology ensures not only structural restoration but also functional and aesthetically pleasing results for a radiant smile.</p>
        </>,
        image:
          "https://images.unsplash.com/photo-1603993097397-89b75dec2a3b",
      },
      {
        title: "Who Qualify For Full Mouth Reconstruction Treatment?",
        description:
        <>
        <p className="mb-4">Bad shape in teeth can be a natural phenomenon. However, there are other reasons like no dental care or neglecting a tooth injury too. However, this treatment is for a person who fits in the following criteria:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>A person who has worn down or broken teeth</li>
          <li>A person who gets tremendous jaw pain</li>
          <li>A person who gets swelling in jaws at regular intervals</li>
          <li>A person who often suffers from headache, backache or muscle tenderness.</li>
        </ul> 
        </>,
        image:
          "https://images.unsplash.com/photo-1588774069622-4a1d6d4b3f3a",
      },
      {
        title: "Phased Treatment",
        description:
        <>
        <p className="mb-4"><b>Stepwise Procedure Followed at Our Full Mouth Reconstruction Clinic:</b></p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Photographs/X-rays.</li>
          <li>Taking teeth impressions</li>
          <li>Examining the root canal and cavities in the tooth.</li>
          <li>Temporomandibular joints and jaw muscles are examined to know bite status.</li>
          <li>Determining the strength of gum tissues.</li>
          <li>Determining color, shape, proportion and size of teeth so that their relationship with gums, face, lips and mouth could be established. This is an important step on which entire face profile depends.</li>
        </ul>
        </>,
        image:
          "https://images.unsplash.com/photo-1600585154337-1d3b2b5b6b2c",
      },
    ],
  },
  {
    id: "children-dentistry",
    name: "Children Dentistry",
    description: "Gentle and caring dental treatment for children.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Children Dentistry",
        description:
        <>
          <p className="mb-4">Children’s dental care requires gentle handling due to their delicate gums and jaws. An experienced pedodontist is necessary to manage their oral health effectively. Regular dental checks are advisable to monitor jaw development for up to 12 months. Preventive care for early teeth is essential to teach proper dental care habits.</p>
          <p>However, children often perceive dental treatments as painful and fear visiting the dentist, despite their friendliness. What young kids desire is a painless experience with a friendly doctor. We at Fine Feather dental create an enjoyable environment, ensuring kids feel comfortable and eager to return for their dental visits.</p>
        </>,
        image:
          "https://images.unsplash.com/photo-1607746882043-1b5f2a2a3b1c",
      },
      {
        title: "Why Choose Us?",
        description:
          "At Mahi Dental, our focus is on children dentistry, providing painless treatments for your little ones. Our clinics house experienced pedodontists who excel in handling challenges with utmost skill. Our compassionate team of endodontists ensures special care for every child. Friendliness comes naturally to each of our children dentistry specialists, creating a personal and comforting experience for your kids.",
        image:
          "https://images.unsplash.com/photo-1588776814549-7b2e3c4d5f6a",
      },
      {
        title: "What Is Child Dentistry?",
        description:
        <>
         <p className="mb-4">Child dentistry is a specialised branch aimed at promoting dental health among children under 18 years old. Pedodontists, or paediatric dentists, undergo 2-3 years of rigorous dental training to cater to the unique dental needs of infants, kids, and youths, including studying child psychology.</p>
         <p><b>Our Children’s Dentistry Services encompass various aspects:</b></p>
         <ul className="list-disc space-y-2 pl-5 mb-4">
          <li><b>Managing Oral Problems in an Infant:</b>We educate parents about oral hygiene for their children’s tooth care.</li>
          <li><b>Managing Dental Caries:</b>We offer Pit and Fissure Sealant services. We also offer full mouth restoration, crown and root canal treatment for primary and permanent teeth.</li>
          <li><b>Managing Dental Trauma:</b>We offer preventive guards for sports injuries among children.</li>
          <li><b>Managing Early Loss of a Tooth:</b>We maintain spaces between teeth. </li>
          <li><b>Managing Children Habits:</b>We offer habit-breaking instruments to promote healthy dental care, using children’s favourite flavours in our appliances.</li>
          <li><b>Orthodontic Treatment:</b>We provide fluoride prophylaxis and use Pedo-RCT (Pulpotomy, Pulpectomy) for painless anaesthesia during treatment.</li>
         </ul>
         <p>At Fine Feather Dental, our dedicated team of paediatric specialists ensures gentle, compassionate, and child-friendly care to make each visit a positive and comfortable experience for young patients.</p>
        </>,
        image:
          "https://images.unsplash.com/photo-1603398938376-5c1d2b3a4e5f",
      },
    ],
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    description: "Brighten your smile with professional whitening treatment.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "teeth whitening",
           description: (
    <>
      <p className="mb-4 ">
      Lightening the shade of your teeth by removing its stains or discoloration is known as Teeth Whitening. It’s a common and accessible practice for most patients. Regular sessions are recommended to maintain a radiant smile. Various reasons motivate people to undergo teeth whitening:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Excess consumption of tobacco.</li>
        <li>Drinking dark liquids like coffee, cola, tea or red wine in surplus quantity.</li>
        <li>Avoiding dental care.</li>
        <li>Aging</li>
        <li>Dental trauma</li>
        <li>Consuming tetracycline antibiotics during childhood.</li>
        <li>Naturally discolored.</li>
        <li>Intrinsic Stains due to the consumption of fluoride etc.</li>
      </ul>
    </>
  ),
        image:
          "https://images.unsplash.com/photo-1603398938371-0a1b2c3d4e5f",
      },
      {
        title: "Why Us?",
        description:
        <>
          <p className="mb-4">Discover celebrity-worthy smiles at Fine Feather Dental! Our teeth whitening services unveil astonishing smiles, boosting your confidence. Say goodbye to discolored teeth and hide no more. Our teeth whitening clinic render our patients with:</p>
          <ul className="list-disc space-y-2 pl-5 mb-4">
            <li>Boosted confidence.</li>
            <li>Boastful smile.</li>
            <li>Enhanced self-esteem.</li>
            <li>Younger Appearance.</li>
            <li>Positive first appearance etc.</li>
          </ul>
          <p className="mb-4">Seek expert advice before teeth whitening. Our specialists guide you on suitability, pros, and cons. While teeth whitening is generally safe, lack of expert assistance may lead to potential issues like:</p>
          <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
            <li>Sore gum or teeth</li>
            <li>Sensitivity</li>
            <li>Whitening becomes uneven</li>
            <li>Teeth erosion etc.</li>
          </ul>
          <p>Apart from these regular teeth whitening practices that are seen almost in every dental clinic, our following advanced techniques make us different from others.</p>
        </>,
        image:
          "https://images.unsplash.com/photo-1600585154341-3b4c5d6e7f8a",
      },
      {
        title: "",
           description: (
    <>
      <p className="mb-4 font-bold">
      Zoom Tooth Whitening
      </p>
      <p className="mb-4 ">
      This is amongst our most preeminent teeth whitening services today. It is a system activated by light that has instant results. It makes your teeth 8 tones brighter than what they actually are! This treatment is preferred as:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-4 text-black leading-relaxed">
        <li>It is completed in a single visit.</li>
        <li>It takes as less time as a lunch break.</li>
        <li>Long-lasting results.</li>
        <li>This treatment is proven to be clinically safe and effective.</li>
      </ul>
      <p className="mb-4 ">
      Office Tooth Whitening:
      </p>
      <p className="mb-4 ">
      Patients’ teeth molds are taken at our teeth whitening clinic. These molds are converted to mouth guards that can grip whitening gel in a way that your gums and lips are protected. This technique can make your teeth appear 6 tones whiter.
      </p>  
    </>
  ),
  image:
          "https://images.unsplash.com/photo-1603398938371-0a1b2c3d4e5f",
      },
    ],
  },
  {
    id: "veneer-componeers",
    name: "Veneer and Componeers",
    description: "Achieve a flawless smile with custom veneers and componeers.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What Are Veneers?",
        description:
        <>
        <p className="mb-4">Dental veneers are customized tooth-colored shells designed to cover the frontal region of teeth to give an improvised appearance. They are often known as porcelain veneers or porcelain laminates. These shells vary in color, shape, length, and size but are generally wafer-thin. They are fastened to the frontal portion of the teeth.</p>
        <p className="mb-4">Veneers come in a variety of materials however choosing the best type of veneers for your type of teeth can be challenging without an expert’s advice. Fine Feather Dental is a specialized veneer installing center. We will guide you through which veneer material will suit the best to your teeth type.</p>
        </>,
        image:
          "https://images.unsplash.com/photo-1600585154338-2a3b4c5d6e7f",
      },
      {
        title: "What are Componeer?",
        description:
          "These are instant veneers. The components are placed on the teeth in a single sitting. So there is no need to have multiple to a Dentist. Moreover, instant veneers are cheaper than conventional veneers and also have a long warranty. These are a new leap in technology has made veneers affordable and long-lasting.",
        image:
          "https://images.unsplash.com/photo-1588774069619-1c2b3a4d5e6f",
      },
      {
        title: "Why Choose Veneers As A Treatment?",
        description:
          "Science and technology always search for invasive treatments that cause less trouble and cost to a patient. Since missing of a natural tooth is a permanent phenomenon, cosmetic alterations have been made to offer ultimate treatment. Veneer treatment is particularly for those who have dull or ill colored teeth. Installing veneers on the teeth surface enhance facial integrity, smile and confidence. This treatment has an added advantage of longevity too.",
        image:
          "https://images.unsplash.com/photo-1603398938374-6a7b8c9d0e1f",
      },
      {
        title: "What do we Offer?",
           description: (
    <>
      <p className="mb-4 ">
      The following veneer services offered by us will compel you to meet our consultants: Discolored Teeth: Dull teeth can be artistically be brightened with this cosmetic alteration of veneer treatment by our veneer specialist. There are many reasons that lead to the discoloring of one’s tooth like
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Long root canal treatment,</li>
        <li>Stains from drugs like tetracycline</li>
        <li>Excessive fluoride</li>
        <li>Presence of resin fillings in a large proportion</li>
        <li>Teeth that are worn down, chipped or broken.</li>
        <li>Alignment of overlapping or crooked teeth</li>
        <li>To fill spaces between teeth.</li>
      </ul>
    </>
  ),
  image:
          "https://images.unsplash.com/photo-1603398938371-0a1b2c3d4e5f",
      },
      {
        title: "Our Treatment",
           description: (
    <>
      <p className="mb-4">
      
Mahi Dental renders out standing veneers services. Our veneers clinic house every minute equipment and material required for veneer treatment. Our veneers clinic has ultimate specialists employed to serve you. Each of our veneers specialists is immensely experienced and dedicated. We fix dental veneer over your teeth nearly in two to three appointments maximum. Your three visits to us will comprise of consultation and designing and installing those veneers. These are the three simple steps of our instant veneer treatment
      </p>
    </>
  ),
  image:
          "https://images.unsplash.com/photo-1603398938371-0a1b2c3d4e5f",
      },
    ],
  },
  {
    id: "tmj-disorder",
    name: "TMJ Disorder",
    description: "Specialized care for jaw joint pain and TMJ disorders.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
    {
      title: "What is ‘TMJ’?",
      description:
        "The temporomandibular joint is the pivot joint that hooks up the lower jaw with the skull’s temporal bone. These joints regulate jaw movement. The jaw can smoothly make up-down and side to side movements along with enabling a person to chew, yawn or talk. There are muscles around the jaw joint too. These muscles control jaw position and movement.",
      image: "https://www.finefeather.in/wp-content/uploads/2022/10/service-img-627x410.jpg",
    },
    {
      title: "Benefits of Preventive Sealants",
      description:
        "Sealants significantly reduce the risk of cavities in children and adults, protect tooth enamel, and provide long-lasting defense against decay with a simple, painless application.",
      image: "https://www.finefeather.in/wp-content/uploads/2022/11/05-2.jpg",
    },
    {
      title: "Who Needs Preventive Sealants?",
      description:
        "Sealants are especially recommended for children when their permanent molars erupt. Adults without fillings or decay can also benefit from sealants to maintain oral health.",
      image: "https://www.finefeather.in/wp-content/uploads/2022/11/02-3-600x350.jpg",
    },
  ],
},
  {
    id: "fillings-inlays-and-onlays",
    name: "Fillings, Inlays and Onlays",
    description: "Repair cavities and restore teeth with aesthetic fillings.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Composite Fillings",
        description:
          "Tooth-colored direct restorations for small to moderate cavities with conservative preparation and aesthetic blending with natural enamel.",
        image:
          "https://images.unsplash.com/photo-1600585154342-5a6b7c8d9e0f",
      },
      {
        title: "Inlays & Onlays",
        description:
          "Indirect restorations fabricated in the lab (ceramic or composite) for larger defects — stronger and longer-lasting than large direct fillings.",
        image:
          "https://images.unsplash.com/photo-1588774069618-4b3c2d1e5f6a",
      },
      {
        title: "Durability & Indications",
        description:
          "Inlays/onlays are indicated when the defect is too big for a filling but a full crown is unnecessary — they preserve healthy tooth and provide excellent longevity.",
        image:
          "https://images.unsplash.com/photo-1603398938373-3c2b1a4d5e6f",
      },
    ],
  },
  {
    id: "jaw-bone-regenration",
    name: "Jaw Bone Regeneration",
    description: "Advanced regeneration techniques to strengthen jawbone.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Types of Grafts",
        description:
          "Autografts, allografts, xenografts and synthetic grafts are selected based on defect size, patient health and timing relative to implant placement.",
        image:
          "https://images.unsplash.com/photo-1600585154343-6b7c8d9e0f1a",
      },
      {
        title: "Guided Bone Regeneration (GBR)",
        description:
          "Use of barrier membranes with graft material to guide new bone growth into a defect area, commonly used for implant site development.",
        image:
          "https://images.unsplash.com/photo-1588774069617-2d3c4b5a6f7e",
      },
      {
        title: "Outcome & Healing",
        description:
          "Healing times vary (weeks to months); successful regeneration enables stable implant placement and improved long-term prosthetic outcomes.",
        image:
          "https://images.unsplash.com/photo-1603398938372-1f2e3d4c5b6a",
      },
    ],
  },
  {
    id: "gum-disease",
    name: "Gum Disease Treatment",
    description: "Prevent and treat gum infections with expert care.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Non-Surgical Therapy",
        description:
          "Scaling and root planing (deep cleaning), antimicrobial therapy and improved home care often successfully manage early to moderate gum disease.",
        image:
          "https://images.unsplash.com/photo-1600585154344-7c8d9e0f1a2b",
      },
      {
        title: "Surgical Periodontal Procedures",
        description:
          "Flap surgery, osseous recontouring and regenerative procedures are used for deep pockets or bone defects to re-establish healthy periodontal support.",
        image:
          "https://images.unsplash.com/photo-1588774069616-1a2b3c4d5e6f",
      },
      {
        title: "Maintenance & Prevention",
        description:
          "Regular periodontal maintenance cleanings, excellent oral hygiene and risk factor control (smoking, diabetes) are critical to prevent recurrence.",
        image:
          "https://images.unsplash.com/photo-1603398938371-0a1b2c3d4e5f",
      },
    ],
  },
  {
    id: "gum-depigmentation-and-gum-contouring",
    name: "Gum Depigmentation & Contouring",
    description: "Improve gum aesthetics with safe depigmentation and contouring.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Gum Contouring (Gingivoplasty)",
        description:
          "Precise reshaping of excess or uneven gum tissue using lasers or scalpel to expose more tooth structure and improve smile proportions.",
        image:
          "https://images.unsplash.com/photo-1600585154345-8d9e0f1a2b3c",
      },
      {
        title: "Gum Depigmentation",
        description:
          "Laser or surgical removal of melanin-rich gum tissue to lighten dark gums and achieve a more esthetic pink appearance.",
        image:
          "https://images.unsplash.com/photo-1588774069615-3b2c1d4e5f6a",
      },
      {
        title: "Recovery & Results",
        description:
          "Minimally invasive techniques allow rapid healing; final cosmetic results are visible after soft tissue stabilization and proper post-op care.",
        image:
          "https://images.unsplash.com/photo-1603398938370-9b8a7c6d5e4f",
      },
    ],
  },
  {
    id: "gum-repositioning-surgery",
    name: "Gum Repositioning Surgery",
    description: "Correct gummy smile with gum repositioning surgery.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Root Coverage Procedures",
        description:
          "Connective tissue grafts and pedicle flaps cover exposed roots, reduce sensitivity and restore a healthy gum margin.",
        image:
          "https://images.unsplash.com/photo-1600585154346-9e0f1a2b3c4d",
      },
      {
        title: "Mucogingival Surgery",
        description:
          "Surgical correction of the relationship between gum tissue and alveolar mucosa to improve aesthetics and maintain periodontal health.",
        image:
          "https://images.unsplash.com/photo-1588774069614-4c3b2a1d5e6f",
      },
      {
        title: "Healing & Maintenance",
        description:
          "Post-surgical care includes gentle cleaning, short-term antibiotics or antiseptics and follow-up to ensure graft integration and stable margins.",
        image:
          "https://images.unsplash.com/photo-1603398938369-8a7b6c5d4e3f",
      },
    ],
  },
  {
    id: "flouride-treatment",
    name: "Fluoride Treatment",
    description: "Strengthen teeth and prevent decay with fluoride therapy.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Topical Fluoride",
        description:
          "Varnishes or gel applications delivered in-office provide concentrated fluoride to strengthen enamel and help remineralize early decay.",
        image:
          "https://images.unsplash.com/photo-1600585154347-0f1a2b3c4d5e",
      },
      {
        title: "Home Fluoride Options",
        description:
          "Prescription fluoride toothpaste or mouthrinse may be recommended for high-risk patients to maintain enamel protection between visits.",
        image:
          "https://images.unsplash.com/photo-1588774069613-5d4c3b2a1e6f",
      },
      {
        title: "Who Benefits Most",
        description:
          "Children, patients with high caries risk, root exposure, or sensitivity benefit most from targeted fluoride therapies.",
        image:
          "https://images.unsplash.com/photo-1603398938368-7c6b5a4d3e2f",
      },
    ],
  },
  {
    id: "teeth-straightening",
    name: "Teeth Straightening",
    description: "Align your teeth with safe and modern orthodontic care.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Conventional Braces",
        description:
          "Fixed brackets and archwires are highly effective for complex tooth movements and bite corrections across all age groups.",
        image:
          "https://images.unsplash.com/photo-1600585154348-1a2b3c4d5e6f",
      },
      {
        title: "Clear Aligners",
        description:
          "Removable, nearly invisible aligners for mild to moderate alignment issues — comfortable and convenient with predictable staged tooth movement.",
        image:
          "https://images.unsplash.com/photo-1588774069612-6b5c4d3e2f1a",
      },
      {
        title: "Retention & Follow-up",
        description:
          "After active treatment, retainers maintain results; regular follow-ups ensure stability and monitor growth in younger patients.",
        image:
          "https://images.unsplash.com/photo-1603398938367-6a5b4c3d2e1f",
      },
    ],
  },
  {
    id: "jaw-growth-guidance",
    name: "Jaw Growth Guidance",
    description: "Early orthodontic guidance to ensure proper jaw development.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Functional Appliances",
        description:
          "Removable or fixed appliances (e.g., twin block, Herbst) that encourage favorable mandibular or maxillary growth during growth spurts.",
        image:
          "https://images.unsplash.com/photo-1600585154349-2b3c4d5e6f7a",
      },
      {
        title: "Timing & Monitoring",
        description:
          "Treatment timing around peak growth yields best skeletal change; regular monitoring ensures effectiveness and minimal side effects.",
        image:
          "https://images.unsplash.com/photo-1588774069611-7a6b5c4d3e2f",
      },
      {
        title: "Combined Approaches",
        description:
          "Often combined with orthodontics to align teeth and establish a stable bite and facial profile as growth completes.",
        image:
          "https://images.unsplash.com/photo-1603398938366-5f4e3d2c1b0a",
      },
    ],
  },
  {
    id: "orthognathic-surgery",
    name: "Orthognathic Surgery",
    description: "Correct jaw irregularities with advanced orthognathic surgery.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "When Surgery is Indicated",
        description:
          "Severe jaw asymmetry, open bite, underbite or functional issues like airway compromise that require skeletal correction rather than tooth movement alone.",
        image:
          "https://images.unsplash.com/photo-1600585154350-3c4d5e6f7a8b",
      },
      {
        title: "Multidisciplinary Protocol",
        description:
          "Pre-surgical orthodontics, surgical planning with 3D imaging, precise osteotomies and post-surgical orthodontic finishing for optimal outcomes.",
        image:
          "https://images.unsplash.com/photo-1588774069610-1d2c3b4a5e6f",
      },
      {
        title: "Recovery & Results",
        description:
          "Initial recovery in weeks; complete healing months. Significant improvements in bite, speech, chewing and facial proportions are typical.",
        image:
          "https://images.unsplash.com/photo-1603398938365-4b3a2c1d0e9f",
      },
    ],
  },
  {
    id: "habit-breaking-appliances",
    name: "Habit Breaking Appliances",
    description: "Prevent dental issues caused by thumb sucking and habits.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "Common Habits Addressed",
        description:
          "Thumb/finger sucking, prolonged pacifier use, tongue thrust and nail biting — appliances plus behavioral techniques provide effective control.",
        image:
          "https://images.unsplash.com/photo-1600585154351-4c5d6e7f8a9b",
      },
      {
        title: "Types of Appliances",
        description:
          "Fixed palatal cribs, bluegrass appliances and habit reminders are customized by age and habit severity for comfortable compliance.",
        image:
          "https://images.unsplash.com/photo-1588774069609-2c3b4a5d6e7f",
      },
      {
        title: "Follow-up & Reinforcement",
        description:
          "Short-term appliance use combined with positive reinforcement, parental involvement and regular review ensures lasting habit change.",
        image:
          "https://images.unsplash.com/photo-1603398938364-3d2c1b0a9e8f",
      },
    ],
  },
  {
    id: "preventive-sealants",
    name: "Preventive Sealants",
    description: "Protect teeth from decay with preventive sealants.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What are Sealants?",
        description:
          "Thin plastic coatings bonded to tooth surfaces to block bacteria and food from deep grooves where toothbrush bristles can’t reach.",
        image:
          "https://images.unsplash.com/photo-1600585154352-5e6f7a8b9c0d",
      },
      {
        title: "Who Should Get Sealants?",
        description:
          "Children as soon as permanent molars erupt, plus adults with deep pits and fissures or high caries risk to protect vulnerable surfaces.",
        image:
          "https://images.unsplash.com/photo-1588774069608-1b2c3d4e5f6a",
      },
      {
        title: "Application & Longevity",
        description:
          "Quick, painless application in a single visit. Sealants last several years with routine checks and can be repaired or replaced as needed.",
        image:
          "https://images.unsplash.com/photo-1603398938363-2b1a0c9d8e7f",
      },
    ],
  },
];

export default treatmentsData;
