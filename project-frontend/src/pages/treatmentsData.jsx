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
      image: "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376115/braces_lwjlte.png",
    },
    {
      title: "WHAT ARE CLEAR ALIGNERS??",
      description:
        "When you wear clear aligners, you can smile without it being obvious that you are undergoing orthodontic treatment. What will be obvious is that your smile is looking better. Since the aligners are clear, you can see the position of your teeth. This is a huge benefit because as your teeth become straighter, your appearance will improve, rather than you waiting until the very end to benefit from the changes.",
      image: "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376072/aligners_z2dpug.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376181/rootcanal1_ijla2j.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376283/rootcanal2_ezlv27.png",
      },
      {
        title: "Aftercare & Success",
        description:
          "Post-op care includes short-term pain control and follow-ups. When properly done and restored, root canal treated teeth have a high long-term survival rate.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376175/rootcanal3_vkxzhx.jpg",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376265/dentalimplant1_iyswd2.png",
      },
      {
        title: "Benefits of Implants",
        description:
          "Preserve jawbone, restore chewing efficiency, prevent adjacent tooth drifting, and provide a long-term aesthetic solution compared with removable options.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376260/dentalimplant2_w5jp5n.png",
      },
      {
        title: "Treatment Process",
        description:
          "Includes consultation, 3D imaging, surgical placement, healing period for osseointegration, and final prosthetic attachment (crown/bridge/overdenture).",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766376285/dentalimplant3_e6q6a9.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766379978/denture1_ninka1.png",
      },
      {
        title: "partial Dentures",
        description:
          "When a few or some of the natural teeth still exist, partial dentures are put into action. They can fill gaps of missing teeth as well as stop other teeth to shift their positions. The partial denture includes replacement teeth connected to a plastic base of gum colour. This is further attached to metal clasps to make the denture’s position immovable in the mouth. Instead of metal clasps, precision attachments are also used as they give esthetic look. Also, they are nearly invisible. Partial removable dentures are the least preferred form of tooth/teeth replacement as they cause damage to the underlying bone and eventually give rise to increased ageing looks.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766379978/denture3_sss6h1.png",
      },
      {
        title: "who is fit for dentures?",
        description:
          <>
           <p className="mb-4">Dentures are meant for elderly people. Loss of teeth may have a high emotional impact on a few growing adults and hence we recommend a replacement. Mahi Dental will guide you through our seamless dentures services. Our dentures specialists are profoundly experienced to understand your case and let you know which treatment will best suit you. As our valued patient, your safety is our prime focus. Hence we do not compromise in the quality of our denture services.</p>
           <p className="mb-4">Getting accustomed to wearing dentures takes time. Hence, new denture wearers may find it difficult and uncomfortable. They may find it to be a little irritating but with the passage of two to three days, you will automatically settle. You may find your speech has become clear and facial expressions have changed. All you need to have is enough patience for dentures to show its real results.</p>
          </>,
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766379979/denture2_kyqaes.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382389/dc1_sunlf0.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382390/dc2_gl2rhm.png",
      },
      {
        title: "When to Choose Which",
        description:
          "Crowns for single tooth restoration; bridges when adjacent teeth can serve as reliable supports — implant-supported bridges are preferred for preserving bone.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382399/vc4_z8xzqf.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382437/fmr1_kv2ftk.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382440/fmr2_lesqwe.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382448/fmr3_uclxyc.png",
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
          <p>However, children often perceive dental treatments as painful and fear visiting the dentist, despite their friendliness. What young kids desire is a painless experience with a friendly doctor. We at Mahi Dental Clinic create an enjoyable environment, ensuring kids feel comfortable and eager to return for their dental visits.</p>
        </>,
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382654/cd1_xzwgyz.png",
      },
      {
        title: "Why Choose Us?",
        description:
          "At Mahi Dental, our focus is on children dentistry, providing painless treatments for your little ones. Our clinics house experienced pedodontists who excel in handling challenges with utmost skill. Our compassionate team of endodontists ensures special care for every child. Friendliness comes naturally to each of our children dentistry specialists, creating a personal and comforting experience for your kids.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382654/cd3_sbdb5i.png",
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
         <p>At Mahi Dental Clinic, our dedicated team of paediatric specialists ensures gentle, compassionate, and child-friendly care to make each visit a positive and comfortable experience for young patients.</p>
        </>,
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382653/cd2_pbcggh.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766384274/tw1_knq9ub.png",
      },
      {
        title: "Why Us?",
        description:
        <>
          <p className="mb-4">Discover celebrity-worthy smiles at Mahi Dental Clinic! Our teeth whitening services unveil astonishing smiles, boosting your confidence. Say goodbye to discolored teeth and hide no more. Our teeth whitening clinic render our patients with:</p>
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766384283/tw2_vp9l0l.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766384275/tw3_v9xuez.png",
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
        <p className="mb-4">Veneers come in a variety of materials however choosing the best type of veneers for your type of teeth can be challenging without an expert’s advice. Mahi Dental Clinic is a specialized veneer installing center. We will guide you through which veneer material will suit the best to your teeth type.</p>
        </>,
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382406/vc1_ljvqte.png",
      },
      {
        title: "What are Componeer?",
        description:
          "These are instant veneers. The components are placed on the teeth in a single sitting. So there is no need to have multiple to a Dentist. Moreover, instant veneers are cheaper than conventional veneers and also have a long warranty. These are a new leap in technology has made veneers affordable and long-lasting.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382402/vc2_zovage.png",
      },
      {
        title: "Why Choose Veneers As A Treatment?",
        description:
          "Science and technology always search for invasive treatments that cause less trouble and cost to a patient. Since missing of a natural tooth is a permanent phenomenon, cosmetic alterations have been made to offer ultimate treatment. Veneer treatment is particularly for those who have dull or ill colored teeth. Installing veneers on the teeth surface enhance facial integrity, smile and confidence. This treatment has an added advantage of longevity too.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382429/porcelainveneer_kcfwcl.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382433/directcomponeer_gsgbda.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766382430/vc3_zojnk2.png",
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
      image: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766393079/Gemini_Generated_Image_16w6zr16w6zr16w6_xjbp6n.png",
    },
    {
      title: "what is ‘TMJ’ disorder?",
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
  image: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766393098/Gemini_Generated_Image_uu0k9nuu0k9nuu0k_b372hm.png",
    },
    {
      title: "WHY US?",
        description: (
    <>
      <p className="mb-4">
     Sometimes the pain vanishes with little treatment; however, if TMJ Disorder specialist is not consulted it may lead to long-term problems. </p>
     
      <p className="mb-4">
    Mahi Dental Clinic has distinctly skilled TMJ Disorder specialists who are capable of removing your ora-facial pain. </p>
     
      <p className="mb-4">
     TMJ pain is mostly temporary but if not taken care of then it can progress to headache, back ache & lower back muscle also.</p>
    </>
  ),
  image: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766393061/Gemini_Generated_Image_azlmw7azlmw7azlm_igd6d7.png",
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
  image: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766313084/ft1_ujdbse.png",
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
  image: "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766316555/11_dq1ua4.png",
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
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766384545/d5a06fcb-b0ed-4281-926f-ae89edfb0031_cohitd.png",
      },
      {
        title: "what is inlays and onlays?",
        description:
          "Inlays and onlays are an alternative to fillings. They are far better in longevity as compared to fillings. Inlays and onlays are extremely comfortable while large repairs of frontal teeth or chewing textures of back teeth. They can be made from resin or porcelain. An inlay fits itself in the tooth hole while onlays will automatically build its shape like a tooth.",
        image:
          "https://res.cloudinary.com/dflcuzluo/image/upload/v1766384905/inon_ze5wcc.png",
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
      Mahi Dental Clinic’s Jaw Bone Regeneration services are a must due to the following compelling reasons:
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
          "Gum diseases can range from ordinary inflammation to severe damage, making it crucial to consult an expert periodontist to prevent tooth loss. Neglecting oral hygiene leads to the formation of sticky, colourless plaque, which can be removed through regular brushing and flossing. However, if plaque is not removed within 24 hours, it hardens into tartar, which brushing alone cannot eliminate. Mahi Dental Clinic’s experienced professionals skillfully remove tartar, ensuring oral health and preserving your dazzling smile.",
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
          "Cosmetic dentistry, a growing trend, includes gum depigmentation surgery to remove melanin-induced gum patches or stains. Mahi Dental Clinic is a renowned clinic in India, offering affordable services for minor and major gum issues. Our expert team customises treatments after clinical assessments, utilising surgical, chemical, or laser ablation methods. With upgraded gum bleaching techniques, our unbeatable services are accessible to all at reasonable rates. Explore our jam-packed techniques for a flawless smile.",
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
          "Mahi Dental Clinic can give you the stunning celebrity smile you desire. With advanced gum repositioning surgical machines, we resolve gum problems instantly. As one of the largest dental care chains in the country, we offer unbeatable painless dental surgeries by professional orthodontists available 24/7. We ensure state-of-the-art equipment and a comprehensive range of services available under one roof for your holistic oral care., Mahi Dental Clinic aims to provide rapid and long-lasting results for a confident smile. Get rid of that gummy smile and maintain your delicate smile at Mahi Dental Clinic.",
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
          "Mahi Dental Clinic’s fluoride treatment for kids is becoming increasingly popular.. Fluoride treatment is not an uncommon activity in other dentistry. It is one of the oldest treatments offered by almost all dentists. It includes a bubble-gum flavoured polish for children’s teeth. However, how this treatment will have its impact on you, how it will protect your teeth from washing off and whether it is safe or not will be explained by our expert professionals nowhere but at Mahi Dental Clinic only!",
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
          "Mahi Dental Clinic offers advanced teeth straightening methods to address crooked teeth, freeing you from embarrassment. Specialised in both children and adult patients, we provide effective solutions for a confident smile.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766312592/teeth3_qqlfry.png",
      },
      {
        title: "We Will Discover Confidence Within You",
        description:
          "Mahi Dental Clinic executes the best teeth straightening services under its roof. With a huge team of teeth aligning specialists, we have modified our services to deliver the best to our patients. Our teeth straightening specialist will discover confidence within you by giving you a better smile.",
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
          <p>Jaw discrepancies may lead to psychological distress as it compromises one’s facial appearance. It causes traumatic bite that damages gums and palate along with unclear speech. Mahi Dental Clinic’s upgraded orthognathic surgery will renovate your delicate smile by improving your jaw discrepancies.</p>
        </>
        ,
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766392494/oth3_fnlk21.png",
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
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766392509/ort2_iw574j.png",
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
          "If you are concerned with teeth sprouting and oral health care in your children, then don’t miss our free paediatric consultation services for your children’s teeth and oral health concerns. Mahi Dental Clinic’s specialised pedodontists have 2-3 years of training in child dentistry, catering to children’s individual needs. We offer habit-breaking appliances to support their healthy growth and address challenging habits.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766392440/hba13_hjbd0y.png",
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
       At Mahi Dental Clinic, our senior pedodontist offers a fixed palatal crib, a customised appliance with stainless steel wires, cemented behind the frontal teeth. This comfortable crib breaks the thumb-sucking habit in a few weeks or months. Reusable if needed, it remains unaffected during eating and is barely visible, ensuring a gradual and successful cure for the habit.
      </p>
    </>
  ),
   image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766392480/Gemini_Generated_Image_ihzml3ihzml3ihzm_ctjny0.png",
      },
      {
        title: "Thumbsucking Habit Breaking Appliance",
        description:
          "At Mahi Dental Clinic, our senior pedodontist offers a fixed palatal crib, a customised appliance with stainless steel wires, cemented behind the frontal teeth. This comfortable crib breaks the thumb-sucking habit in a few weeks or months. Reusable if needed, it remains unaffected during eating and is barely visible, ensuring a gradual and successful cure for the habit.",
        image:
          "https://res.cloudinary.com/dj7gzc2mb/image/upload/v1766392461/hba12_ql0sum.png",
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
