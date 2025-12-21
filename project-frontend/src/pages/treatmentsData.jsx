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
      title: "WHAT ARE CLEAR ALIGNERS??",
      description:
        "Braces are more than just a beauty boost. They address various issues—open bite, jaw structure, and overcrowding—ensuring proper oral health. Straightened teeth mean improved hygiene, efficient chewing, and reduced periodontal problems. Clear aligners, a popular option, are virtually invisible and perfect for adults seeking discreet orthodontic treatment. No food restrictions, no speech difficulties—just comfort and hygiene, offering confident smiles for all.",
      image: "/assets/braces.png",
    },
    {
      title: "Wearing Aligners",
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
          <p>When tooth pulp is damaged, it’s crucial to act swiftly. Root canal treatment also known as Endodontic Treatment involves removing the affected pulp and ensuring thorough cleaning and packing.The multi-step process involves removing the infected material, disinfecting the tooth, filling, and sealing it with inert material, followed by restoration and a crown/cap. </p>
          <p>In the past, decayed teeth meant painful extractions, but fear no more! Progressive root canal treatments now save teeth that would have been lost. Ignoring infected pulp can be perilous, leading to pus formation and jawbone damage. Avoid such dire consequences – trust Fine Feather Dental to protect your oral health. Choose prevention over risk, and let us safeguard your beautiful smile! Act now and embrace painless dental care!</p>
          <p>Since prevention is better than cure, why take a fatal risk when Fine Feather Dental at your service? Trust us to safeguard your oral health and protect your beautiful smile. Act now and experience painless dental care.</p>
        </>
        ,
        image:
          "/assets/rootcanal1.png",
      },
      {
        title: "Why ‘Painless’?",
        description:
        <>
          <p>Suffering from a terrible toothache? Experience safe and reliable root canal treatment  at Fine Feather Dental.</p>
          <p>~Robotic Device: Precise root canal with Apex Locator and Robotic Device Endo-motor, reducing manual reliance and speeding up treatment.</p>
          <p>~Computerised Painless Injection: An anxiety-free root canal experience with magical wand-like painless injections.</p>
          <p>~Experienced Doctors: Our Endodontists excel in advanced treatments, saving heavily damaged teeth and reviving failed root canals.</p>
          <p>~Many Convenient Locations: Multiple branches in Ahmedabad, Surat, and Gandhinagar for easy access to expert dental care.</p>
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
          "A biocompatible titanium screw placed into the jawbone that integrates (osseointegration) to act as a stable foundation for a prosthetic tooth.",
        image:
          "https://images.unsplash.com/photo-1573495628365-7b4c2fc1f6b4",
      },
      {
        title: "Benefits of Implants",
        description:
          "Preserve jawbone, restore chewing efficiency, prevent adjacent tooth drifting, and provide a long-term aesthetic solution compared with removable options.",
        image:
          "https://images.unsplash.com/photo-1588776814545-9c6f2a1b3e67",
      },
      {
        title: "Treatment Process",
        description:
          "Includes consultation, 3D imaging, surgical placement, healing period for osseointegration, and final prosthetic attachment (crown/bridge/overdenture).",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0",
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
        title: "Types of Dentures",
        description:
          "Complete (full) dentures replace all teeth in an arch; partial dentures replace a few missing teeth and often attach to remaining teeth for support.",
        image:
          "https://images.unsplash.com/photo-1599058917217-1f3b0d3c2f5b",
      },
      {
        title: "Implant-Supported Dentures",
        description:
          "Combines the stability of implants with the affordability of dentures — improved retention, comfort and chewing compared with conventional removable dentures.",
        image:
          "https://images.unsplash.com/photo-1588774069624-6d0b8b6b2a66",
      },
      {
        title: "Care & Maintenance",
        description:
          "Proper cleaning, overnight soaking, and periodic relines ensure fit, comfort and hygiene. Regular dental check-ups help detect needed adjustments early.",
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
        title: "Dental Crown",
        description:
          "A tooth-shaped cap that covers a damaged or weakened tooth to restore shape, size, strength and appearance — made from ceramic, porcelain-fused-to-metal, or zirconia.",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a",
      },
      {
        title: "Dental Bridge",
        description:
          "A fixed appliance replacing missing teeth by spanning the gap with one or more pontics supported by crowns on adjacent teeth or by implants.",
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
        title: "Assessment & Planning",
        description:
          "Detailed evaluation including imaging, bite analysis and diagnostic wax-ups to create a stepwise treatment plan addressing function, esthetics and longevity.",
        image:
          "https://images.unsplash.com/photo-1603993097397-89b75dec2a3b",
      },
      {
        title: "Multidisciplinary Care",
        description:
          "May combine implants, crowns, bridges, periodontal therapy, orthodontics, and occlusal (bite) management to restore oral health and facial balance.",
        image:
          "https://images.unsplash.com/photo-1588774069622-4a1d6d4b3f3a",
      },
      {
        title: "Phased Treatment",
        description:
          "Treatment is usually delivered in phases — stabilisation (disease control), replacement/reconstruction, and final refinement for function and esthetics.",
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
        title: "Early Dental Visits",
        description:
          "First dental visit by first birthday to assess growth, counsel parents on feeding, fluoride, and caries prevention to establish a lifetime of good oral health.",
        image:
          "https://images.unsplash.com/photo-1607746882043-1b5f2a2a3b1c",
      },
      {
        title: "Behavior Guidance & Preventive Care",
        description:
          "Techniques to manage anxiety plus preventive treatments like fluoride varnish, fissure sealants and habit counseling to protect developing teeth.",
        image:
          "https://images.unsplash.com/photo-1588776814549-7b2e3c4d5f6a",
      },
      {
        title: "Minor Restorative & Emergency Care",
        description:
          "Child-appropriate fillings, pulpotomies, extractions and urgent care delivered with minimal stress and in formats children understand.",
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
        title: "In-Office Whitening",
        description:
          "Professional bleaching under controlled conditions provides faster and more uniform results using higher-concentration agents and light/laser activation when appropriate.",
        image:
          "https://images.unsplash.com/photo-1588774069620-2b1c3d4e5f6a",
      },
      {
        title: "Take-Home Trays",
        description:
          "Custom trays with professional-grade gel for safe, gradual whitening at home — ideal for maintenance or milder shade improvements.",
        image:
          "https://images.unsplash.com/photo-1600585154341-3b4c5d6e7f8a",
      },
      {
        title: "Care & Limitations",
        description:
          "Whitening is most effective on natural teeth (not restorations). Sensitivity is usually temporary and managed with desensitizing agents.",
        image:
          "https://images.unsplash.com/photo-1603398938375-4c3b2a1d5e6f",
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
        title: "Porcelain Veneers",
        description:
          "Thin ceramic shells bonded to the front of teeth to correct discoloration, chips, gaps and mild misalignment with highly natural esthetics.",
        image:
          "https://images.unsplash.com/photo-1600585154338-2a3b4c5d6e7f",
      },
      {
        title: "Componeers (Prefab Composite Veneers)",
        description:
          "Minimally invasive, cost-effective composite veneers placed directly or bonded to prepared teeth offering quick aesthetic improvement.",
        image:
          "https://images.unsplash.com/photo-1588774069619-1c2b3a4d5e6f",
      },
      {
        title: "Choosing the Right Option",
        description:
          "Porcelain offers superior longevity and stain resistance; componeers are more conservative and repairable — selection depends on goals, budget and tooth condition.",
        image:
          "https://images.unsplash.com/photo-1603398938374-6a7b8c9d0e1f",
      },
    ],
  },
  {
    id: "tmj-disorder",
    name: "TMJ Disorder",
    description: "Temporomandibular joint is the axial joint that hooks up the lower jaw with skull’s temporal bone. These joints maintains jaw plasticity. The jaw can smoothly make up-down and side to side movements along with enabling a person to chew, yawn or talk.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
    {
      title: "What is ‘TMJ’?",
      description:
        "The temporomandibular joint is the pivot joint that hooks up the lower jaw with the skull’s temporal bone. These joints regulate jaw movement. The jaw can smoothly make up-down and side to side movements along with enabling a person to chew, yawn or talk. There are muscles around the jaw joint too. These muscles control jaw position and movement.",
      image: "https://www.finefeather.in/wp-content/uploads/2022/10/service-img-627x410.jpg",
    },
    {
      title: "what is ‘TMJ’ disorder?",
         title: "Laser Treatment",
           description: (
    <>
      <p className="mb-4">
     Temporomandibular Joint Disorder refers to jaw disorders. “TMJ Disorder” occurs when trouble arises in jaw, jaw joints facial muscles that regulate jaw movements or teeth. TMJ Disorder creates dysfunction in jaw muscles thereby causing excruciating pain while moving the jaw. Pain is the main syndrome of TMJ Disorder that occurs in regular cycles.
      </p>
      <h3 className="font-bold">Reasons</h3>
      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Unbalanced chewing</li>
        <li>Spasm of jaw muscle</li>
        <li>Overuse of jaw muscles</li>
      </ul>
       <h3 className="font-bold">Symptoms</h3>
      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Unbalanced chewing</li>
        <li>Spasm of jaw muscle</li>
        <li>Overuse of jaw muscles</li>
      </ul>
    </>
  ),
  image: "https://www.finefeather.in/wp-content/uploads/2022/11/05-2.jpg",
    },
    {
      title: "WHY US?",
        description: (
    <>
      <p className="mb-4">
     Sometimes the pain vanishes with little treatment; however, if TMJ Disorder specialist is not consulted it may lead to long-term problems. </p>
     
      <p className="mb-4">
    Fine Feather Dental has distinctly skilled TMJ Disorder specialists who are capable of removing your ora-facial pain. </p>
     
      <p className="mb-4">
     TMJ pain is mostly temporary but if not taken care of then it can progress to headache, back ache & lower back muscle also.</p>
    </>
  ),
  image: "https://www.finefeather.in/wp-content/uploads/2022/11/02-3-600x350.jpg",
    },
     {
      title: "Conservative Treatments",
        description: (
    <>
      <h3 className="font-bold">TMJ Arthrocentesis procedure</h3>
       <p className="mb-4">
  <span className="font-bold">Jaw Relaxation: </span>In the initial therapy, the jaw is relaxed by utilizing warm compresses. If there are any dental injuries, then instead of warm compresses we make use of ice packs. Along with this, pain-relieving medications are also prescribed. Jaw relaxation can heal temporomandibular joints. In this treatment, we also follow stress-reduction techniques which will release stress as well as relax your jaw and body. The following care is expected from the patient’s side:</p>
  <ul className="list-decimal pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Consume only soft foods and avoid chewy foods.</li>
        <li>Avoid eating chewing gum or hard candy.</li>
        <li>Avoid wide opening of your mouth.</li>
        <li>Practice muscle stretching or relaxation exercises exactly as guided by our TMJ specialist.</li>
      </ul>
    <p className="mb-4">
  <span className="font-bold">Fitting Splint: </span>In the initial therapy, the jaw is relaxed by utilizing warm compresses. If there are any dental injuries, then instead of warm compresses we make use of ice packs. Along with this, pain-relieving medications are also prescribed. Jaw relaxation can heal temporomandibular joints. In this treatment, we also follow stress-reduction techniques which will release stress as well as relax your jaw and body. The following care is expected from the patient’s side:</p>
  <ul className="list-decimal pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Reducing Clenching</li>
        <li>Teeth grinding</li>
        <li>Ease muscle tension</li>
      </ul>
      </>
  ),
  image: "https://www.finefeather.in/wp-content/uploads/2022/11/02-3-600x350.jpg",
    },
     {
      title: "Invasive Treatments",
        description: (
    <>
      <h3 className="font-bold">TMJ Arthrocentesis procedure</h3>
       <p className="mb-4">
    Invasive techniques are used when conservative techniques fail to ease your problem. In this technique two needles are inserted in temporomandibular joint so as to wash it thoroughly. One needle is attached with cleansing solution filled syringe. This fluid exists through the other syringe.
This method suits many and the pain gets back to normal. Sometimes, pain relieving medications are also injected in similar way.
</p>
 <h3 className="font-bold">Surgery</h3>
       <p className="mb-4">
    We generally avoid advising this treatment to our valuable patients as it is irreversible. We apply it in extreme cases where the joints in the jaw are replaced with artificial implants.
    </p>
      
      </>
  ),
  image: "https://www.finefeather.in/wp-content/uploads/2022/11/02-3-600x350.jpg",
    },
  ],
},
  {
    id: "fillings-inlays-and-onlays",
    name: "Fillings, Inlays and Onlays",
    description: "Repair partially damaged or decayed teeth, restoring them to their original shape and preventing further decay or damage with Dental fillings. Protect your teeth from further deterioration..",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What is a Tooth Filling?",
        description:
          "When a tooth gets partially damaged, decayed or worn out, then that partially ruined part is tooth by a dentist and called a filling. Fillings restore the tooth to its initial shape and size. Dental fillings are used when you want to prevent the tooth to decay from any further decaying/damaging.",
        image:
          "https://images.unsplash.com/photo-1600585154342-5a6b7c8d9e0f",
      },
      {
        title: "what is inlays and onlays?",
        description:
          "Inlays and onlays are an alternative to fillings. They are far better in longevity as compared to fillings. Inlays and onlays are extremely comfortable while large repairs of frontal teeth or chewing textures of back teeth. They can be made from resin or porcelain. An inlay fits itself in the tooth hole while onlays will automatically build its shape like a tooth.",
        image:
          "https://images.unsplash.com/photo-1588774069618-4b3c2d1e5f6a",
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
        title: "What Is Jaw Bone Regeneration?",
           description: (
    <>
      <p className="mb-4">
      People likely experience weird gum diseases with their growing age that may end up in losing the jaw bone. If this occurs, Jaw Bone Regeneration becomes quite mandatory that will prevent tooth loss. Our expert periodontists are trained under IIM professionals to perform surgical procedures of bone regeneration. Two types of material are used in preparing jaw bone membranes:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Synthetic polymer: This is not absorbed by the body and is to be compulsorily removed after some time.</li>
        <li>Natural material: This is slowly absorbed by our body.</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766317327/Gemini_Generated_Image_80xqdd80xqdd80xq_rmdamu.png",
      },
      {
        title: "Why Us?",
          description: (
    <>
      <p className="mb-4">
      Fine Feather’s Jaw Bone Regeneration services are a must due to the following compelling reasons:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Guaranteed protection to the existing teeth.</li>
        <li>Avoid tooth loss.</li>
        <li>Safeguard soft gum tissues that keep teeth intact.</li>
        <li>Restore the damaged gum disease.</li>
        <li>Personalized services to every patient.</li>
        <li>No long waiting hours.</li>
        <li>Quick and faster results.</li>
        <li>Painless surgery.</li>
        <li>Post-surgery follow-up appointments are scheduled to examine the bone growth.</li>
        <li>Post jaw bone regeneration surgery, we assign you a plan that is handy to take complete care of your bone. Taking appropriate care post the surgery will make it successful in long run.</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766317470/jabo_vuq1yx.png",
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
        title: "Gum Disease Treatment",
        description:
          "Gum diseases can range from ordinary inflammation to severe damage, making it crucial to consult an expert periodontist to prevent tooth loss. Neglecting oral hygiene leads to the formation of sticky, colourless plaque, which can be removed through regular brushing and flossing. However, if plaque is not removed within 24 hours, it hardens into tartar, which brushing alone cannot eliminate. Fine Feather Dental clinic’s experienced professionals skillfully remove tartar, ensuring oral health and preserving your dazzling smile.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766316555/11_dq1ua4.png",
      },
      {
        title: "Our specialized treatments",
         description: (
    <>
      <p className="mb-4 font-bold">
       Our Gum Disease Services Offer Some Best Surgical and Non-Surgical Treatments as Follows:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Scaling and Root Planning,</li>
        <li>Subgingival Curettage</li>
        <li>Surgery Flap</li>
        <li>Bone Grafts</li>
        <li>Gingivectomy</li>
        <li>Crown Lengthening</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766316555/gum13_esyymr.png",
      },
      {
        title: "Laser Treatment",
           description: (
    <>
      <p className="mb-4 font-bold">
      This Therapy Reduces The Gum Tissue With Laser. Its Benefits Are:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Scaling and Root Planning,</li>
        <li>Subgingival Curettage</li>
        <li>Surgery Flap</li>
        <li>Bone Grafts</li>
        <li>Gingivectomy</li>
        <li>Crown Lengthening</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766316555/gu12_z1zevk.png",
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
        title: "What Is Gum Depigmentation?",
        description:
          "Cosmetic dentistry, a growing trend, includes gum depigmentation surgery to remove melanin-induced gum patches or stains. Fine Feather is a renowned clinic in India, offering affordable services for minor and major gum issues. Our expert team customises treatments after clinical assessments, utilising surgical, chemical, or laser ablation methods. With upgraded gum bleaching techniques, our unbeatable services are accessible to all at reasonable rates. Explore our jam-packed techniques for a flawless smile.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766315726/gdc_z6ctfb.png",
      },
      {
        title: "Laser Gum Depigmentation Technique",
        description:
          "This laser gum bleaching is performed via a specialized dental laser that targets to reduce increased melanin in the gingival tissue. This heals the gingiva by secondary intention thereby lightening the gum colour.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766315724/gdc3_fh0a1n.png",
      },
      {
        title: "What Is Gum Contouring?",
        description: (
    <>
      <p className="mb-4">
      Gum contouring is the latest dental method where the gingival tissue around the teeth is reshaped. Our surgery is prime that will improve your oral health and reinvent your delicate smile. Laser gum contouring re-sculpts uneven gum tissues. Our surgeons are so expert and specialized that they can conduct the entire surgery smoothly. They are innovative to re-discover younger-looking stunning smiles that will enhance your confidence and appearance.
      </p>
           <p className="mb-4">
      Our treatment involves one visit to our periodontist and that too only for an hour. This laser surgery is done under general anaesthesia which causes minor stretching discomfort. However, there is no bleeding or stitches included in this treatment.
      </p>
    </>
  ),
   image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766315721/gdc1_j5lvlz.png",
      },
       {
        title: "What benefits do we offer?",
        description: (
    <>
      <h3 className="mb-4 font-bold">
      Our following benefits will compel you to hire our services:
      </h3>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Complete makeover of the smile</li>
        <li>Stronger gums</li>
        <li>Attractive teeth</li>
        <li>Safe, painless and faster surgery</li>
        <li>Instant results and you can start your activities just after an hour</li>
        <li>Enhanced self-confidence</li>
      </ul>
    </>
  ),image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766315722/Gemini_Generated_Image_r3o60zr3o60zr3o6_ooyayq.png",
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
        title: "Gum Repositioning Surgery",
        description:
          "Fine Feather Dental can give you the stunning celebrity smile you desire. With advanced gum repositioning surgical machines, we resolve gum problems instantly. As one of the largest dental care chains in the country, we offer unbeatable painless dental surgeries by professional orthodontists available 24/7. We ensure state-of-the-art equipment and a comprehensive range of services available under one roof for your holistic oral care., Fine Feather aims to provide rapid and long-lasting results for a confident smile. Get rid of that gummy smile and maintain your delicate smile at Fine Feather Dental.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313669/ggs1_ubtfkc.png",
      },
      {
        title: "What Is Gum Repositioning?",
        description:
          "Lip repositioning is a surgery to lower the upper lip to reduce gum tissue exposure. During the surgery, a small layer of tissue is extracted to suture the exposed area in the new position. This process takes us nearly 30-45 minutes but we guarantee immediate results.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313669/ggs12_eobqtm.png",
      },
      {
        title: "What Benefits do We Offer?",
         description: (
    <>
      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Consistent appearance of teeth and gums in a proportionate amount.</li>
        <li>Faster recovery.</li>
        <li>Lowest competitive prices.</li>
        <li>No external scars.</li>
        <li>We offer required follow-ups post-surgery just to keep a regular record of our surgical process.</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313669/ggs13_vf2eml.png",
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
        title: "Flouride Treatment",
        description:
          "Fine Feather Dental’s fluoride treatment for kids is becoming increasingly popular.. Fluoride treatment is not an uncommon activity in other dentistry. It is one of the oldest treatments offered by almost all dentists. It includes a bubble-gum flavoured polish for children’s teeth. However, how this treatment will have its impact on you, how it will protect your teeth from washing off and whether it is safe or not will be explained by our expert professionals nowhere but at Fine Feather Dental only!",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313084/fl3_x0bskn.png",
      },
      {
        title: "What Is Fluoride?",
        description:
          "Fluoride is a natural mineral that bonds well with minerals residing in human teeth or tooth enamel. It is extremely effective to prevent tooth decay or pain as a part of oral health routine. It has the capability to reverse cavities, remineralize enamel, strengthening gum-tooth bonds etc. Most common fluoride sources used in our routine lives are drinking water or tooth products like toothpastes or rinses. However the most potent source is seen at a professional dentistry only.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313084/fl2_eikyhq.png",
      },
      {
        title: "What we offer?",
         description: (
    <>
      <h3 className="font-bold mb-4">
       Our Treatment is as Follows:
      </h3>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Our senior dentist will examine whether you need to undergo fluoride treatment or not.</li>
        <li>After diagnosis, a detailed report is generated.</li>
        <li>If your enamel is fit for fluoride treatment, it follows a cleaning procedure.</li>
        <li>After that, we apply the tray with fluoride concentration unavailable over-the-counter (OTC).</li>
        <li>We leave the fluoride to set into the enamel for a few minutes.</li>
        <li>We offer choices in flavors too like grape, mint, and bubble gum.</li>
        <li>After the concentration settles well, it is gently rinsed off without usage of water.</li>
        <li>Post this wash, you will have to eat or drink for half hour.</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313084/ft1_ujdbse.png",
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
        title: "Get Rid of Disadvantages of Crooked Teeth",
        description:
          "Fine Feather Dental offers advanced teeth straightening methods to address crooked teeth, freeing you from embarrassment. Specialised in both children and adult patients, we provide effective solutions for a confident smile.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312592/teeth3_qqlfry.png",
      },
      {
        title: "We Will Discover Confidence Within You",
        description:
          "Fine Feather Dental executes the best teeth straightening services under its roof. With a huge team of teeth aligning specialists, we have modified our services to deliver the best to our patients. Our teeth straightening specialist will discover confidence within you by giving you a better smile.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312592/teeth2_lvgnnr.png",
      },
      {
        title: "Why Us?",
          description: (
    <>
      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Thorough Diagnosis and detailed report by custom software.</li>
        <li>The full treatment is done by Orthodontist only. During the process of treatment, no general dentist does any braces-related process.</li>
        <li>Range of treatment options from Fixed Metal Braces to the latest removable transparent braces available.</li>
        <li>Among few Cling where advanced cases requiring orthognathic surgery can be treated.</li>
        <li>Interceptive Orthodontics is offered for the manipulation of Jaw growth.</li>
      </ul>
    </>
  ),
  image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312592/teeth1_r0wz3m.png",
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
        title: "Jaw Growth Guidance",
        description:
        <>
          <p className="mb-4">Growth Guidance Orthodontic Appliances are designed for airway and habit correction, arch expansion and dental alignment. They provide comprehensive treatment ideally suited to treat children ages 3-12 years.</p>
          <p>Growth guidance therapy for adults involves gently and safely stimulating the lifelong remodeling potential within the jaws and face. … These include creating room for crowded teeth; development of the face in a forward horizontal direction which improves the appearance of the cheek bones, eyes, nose and lower jaw line.</p>
        </>
        ,
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312019/Gemini_Generated_Image_m7u8dvm7u8dvm7u8_wstvtb.png",
      }
    ],
  },
  {
    id: "orthognathic-surgery",
    name: "Orthognathic Surgery",
    description: "Correct jaw irregularities with advanced orthognathic surgery.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    subTreatments: [
      {
        title: "What Is Orthognathic Surgery?",
        description:
        <>
          <p className="mb-4">Orthognathic surgery is one of its kind to cure jaw discrepancies. Jaw discrepancies are commonly seen in many individuals these days. It includes dislocated jaws relatively to the base of skull or malocclusion which in layman’s language means ‘misaligned teeth’. Orthognathic surgery repositions the bite in individuals who have abnormally large discrepancies.</p>
          <p>Jaw discrepancies may lead to psychological distress as it compromises one’s facial appearance. It causes traumatic bite that damages gums and palate along with unclear speech. Fine Feather’s upgraded orthognathic surgery will renovate your delicate smile by improving your jaw discrepancies.</p>
        </>
        ,
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766311694/oth3_fnlk21.png",
      },
      {
        title: "What We Do?",
        description: (
    <>
      <h3 className="font-bold mb-4">
       Mahi Dental's Orthognathic Surgeons Skillfully Bring Evident Benefits like:
      </h3>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Improved Oral function</li>
        <li>Improved Facial appearance</li>
        <li>Long-term relief from oral health gum problems.</li>
      </ul>
    </>
  ),
   image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766311692/ort1_cc79gh.jpg",
      },
      {
        title: "What Our Treatment Involves?",
        description: (
    <>
      <p className="mb-4">
        Patients suffering from jaw discrepancies are handled by our skilled and experienced team of maxillofacial surgeons, orthodontist as well as a dental practitioner. Initially, a diagnosis is made where the patient is introduced to the maxillofacial surgeon of our multidisciplinary clinic. We frame a customized treatment plan for individual patients depending upon their diagnosis report. Our treatment is precise
      </p>
      <h3 className="font-bold">which Includes the Following:</h3>
      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Routine examination</li>
        <li>Plain radiographs</li>
        <li>Preparing plaster models of the teeth</li>
        <li>Facial and dental photographs</li>
        <li>Cephalometrics</li>
      </ul>
    </>
  ),image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766311694/ort2_iw574j.png",
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
        title: "Habit Breaking Appliances",
        description:
          "If you are concerned with teeth sprouting and oral health care in your children, then don’t miss our free paediatric consultation services for your children’s teeth and oral health concerns. Fine Feather’s specialised pedodontists have 2-3 years of training in child dentistry, catering to children’s individual needs. We offer habit-breaking appliances to support their healthy growth and address challenging habits.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766310511/hba13_hjbd0y.png",
      },
      {
         title: "Follow-up & Reinforcement",
        description: (
    <>
      <p className="mb-4">
        Thumb sucking is a natural reflex for children, but it should stop when
        their frontal teeth erupt. If it persists, it can lead to:
      </p>

      <ul className="list-disc pl-5 mt-2 mb-2 text-black leading-relaxed">
        <li>Decelerated mental growth</li>
        <li>Improper growth of the mouth</li>
        <li>Misaligned teeth</li>
      </ul>
       <p>
       At Mahi Dental Dental, our senior pedodontist offers a fixed palatal crib, a customised appliance with stainless steel wires, cemented behind the frontal teeth. This comfortable crib breaks the thumb-sucking habit in a few weeks or months. Reusable if needed, it remains unaffected during eating and is barely visible, ensuring a gradual and successful cure for the habit.
      </p>
    </>
  ),
   image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766310614/Gemini_Generated_Image_ihzml3ihzml3ihzm_ctjny0.png",
      },
      {
        title: "Thumbsucking Habit Breaking Appliance",
        description:
          "At Mahi Dental Clinic, our senior pedodontist offers a fixed palatal crib, a customised appliance with stainless steel wires, cemented behind the frontal teeth. This comfortable crib breaks the thumb-sucking habit in a few weeks or months. Reusable if needed, it remains unaffected during eating and is barely visible, ensuring a gradual and successful cure for the habit.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766310511/hba12_ql0sum.png",
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
        title: "Preventive Sealants",
        description:
          "Many times brushing and flossing are ineffective in deeply cleaning the teeth depressions and groves. The remnants of food particles in the mouth enhance bacteria thereby dissolving the enamel covering the tooth. We suggest applying sealants soon after the permanent molar eruption in a child, nearly between 6-12 years of age.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766309805/sea1_loytmj.png",
      },
      {
        title: "What Are Preventive Sealants?",
        description:
          "Sealant application is quick and painless, without the need for general anesthesia. The process involves cleaning and conditioning the chewing surface, followed by painting sealants to bind to the enamel. Curing light may be used for faster bonding. Our standardized quality sealants can last 5-6 years. Regular check-ups help us determine if replacements are needed. While we strive to protect your child from gum diseases, parents’ participation in bringing their children for sealant examinations is appreciated. Consult our super-specialized periodontist to determine if sealants are necessary for your child’s oral health.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766309805/sea13_ich2xk.png",
      },
      {
        title: "What Do We Offer?",
        description:
        <>
          <p className="mb-4">Sealants application doesn’t require injecting of general anaesthesia. It takes a few minutes per tooth to paint sealants. As per the treatment procedure, our professionals will first thoroughly clean the child’s chewing surface and condition it with a peculiar solution that will bind sealants to the enamel. If required we may use “curing” light to hasten the bond. We use standardized quality sealants that may last for 5-6 years.</p>
          <p className="mb-4">Our dentists will put in their optimum efforts to protect your child from gum diseases. However, we appreciate some participation from parents who bring their children to our clinic for sealant examination at regular intervals as a part of our routine check-ups. This will let us know if any sealants are to be replaced or not!</p>
          <p className="mb-4">Not every child is required to apply sealants. Consult our super-specialized periodontist today to know whether your child needs sealants or not!</p>
        </>,
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766309805/sea12_x4iymj.png",
      },
    ],
  },
];

export default treatmentsData;
