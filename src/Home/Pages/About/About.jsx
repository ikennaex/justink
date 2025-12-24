import React from "react";
import { frieght } from "../../../imports";
import { Target, Eye, CircleCheck } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-50 text-gray-800 mt-15">
      {/* Banner */}
      <div className="relative w-full h-120 overflow-hidden">
        <img
          src={frieght}
          alt="Freight banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16 space-y-16">
        {/* Company Overview */}
        <div>
          <p className="text-lg leading-relaxed">
            JustLink Logistics Limited is a multi-sector logistics and
            e-commerce solutions provider dedicated to transforming how goods
            move from manufacturers and suppliers to wholesalers, retailers, and
            end consumers. We specialize in e-commerce, logistics, supply chain
            management, and general goods trading, creating a seamless ecosystem
            where businesses and individuals thrive.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our strength lies in bridging gaps across the supply chain by
            connecting manufacturers, wholesalers, suppliers, and retailers with
            technology-driven logistics solutions. We ensure that products are
            moved quickly, efficiently, and transparently—whether in bulk for
            wholesalers, in smaller consignments for retailers, or direct to
            consumers’ doorsteps.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            By leveraging technology, data intelligence, and strategic
            partnerships, JustLink Logistics Limited delivers fast, affordable,
            and reliable services that simplify trade, expand market access, and
            support economic competitiveness.
          </p>
        </div>

        {/* Vision & Mission side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-green-100 rounded-xl p-8">
          {/* Vision */}
          <div className=" ">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="text-green-700" />
              <h2 className="text-2xl font-bold text-green-700">Our Vision</h2>
            </div>
            <p className="text-lg leading-relaxed">
              To be the leading logistics and e-commerce enabler in Africa and
              beyond, seamlessly connecting manufacturers, wholesalers,
              suppliers, retailers, and consumers while fostering economic
              growth through innovation and trust.
            </p>
          </div>

          {/* Mission */}
          <div className="">
            <div className="flex items-center gap-2 mb-4">
              <Target className="text-green-700" />
              <h2 className="text-2xl font-bold text-green-700">Our Mission</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>
                Simplify the journey of goods from manufacturers and suppliers
                to wholesalers, retailers, and consumers through efficient
                logistics and e-commerce solutions.
              </li>
              <li>
                Deliver fast and secure doorstep delivery of goods with flexible
                payment options such as pay-on-delivery.
              </li>
              <li>
                Empower businesses with warehousing, distribution, financial
                facilitation, and retail insights that help them scale
                sustainably.
              </li>
              <li>
                Create a digitized, transparent, and reliable supply chain
                ecosystem that supports SMEs, corporates, and global
                enterprises.
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Core Values
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1 " />
              <span>
                <strong>Speed & Reliability:</strong> Ensuring manufacturers,
                wholesalers, suppliers, and retailers can trust us for fast and
                consistent deliveries.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Innovation:</strong> Using data, AI, and automation to
                re-engineer logistics and commerce.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Integrity:</strong> Building long-lasting trust across
                the supply chain with transparency.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Excellence:</strong> Delivering services that exceed
                expectations at every stage.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Customer-Centricity:</strong> Providing convenient
                solutions like fast delivery and pay-on-delivery.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Collaboration:</strong> Strengthening networks between
                manufacturers, wholesalers, suppliers, and retailers.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                <strong>Sustainability:</strong> Reducing environmental impact
                with green logistics solutions.
              </span>
            </li>
          </ul>
        </div>

        {/* Strategic Goals */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Our Strategic Goals
          </h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                Digitize the supply chain so manufacturers, wholesalers,
                suppliers, and retailers can track goods in real time.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                Build distribution hubs and warehouses that support large-scale
                movement of goods.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                Integrate financial facilitation for wholesalers, suppliers, and
                retailers needing trade credit.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                Scale across Africa and beyond, connecting local manufacturers
                and suppliers to international trade corridors.
              </span>
            </li>
            <li className="flex items-center">
              <CircleCheck className="text-green-600 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-3 mt-1" />
              <span>
                Provide last-mile delivery that guarantees goods reach retailers
                and consumers quickly and securely.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
