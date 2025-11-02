import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  {
    title: "Fashion & Lifestyle",
    items: [
      "Men’s Clothing (shirts, jeans, suits, traditional wear)",
      "Women’s Clothing (dresses, tops, skirts, abayas)",
      "Kids’ Clothing (school wear, casual, cultural)",
      "Footwear (sneakers, sandals, heels, slippers)",
      "Handbags & Wallets",
      "Jewelry (fashion, gold, silver, body jewelry)",
      "Watches (luxury, mid-range, smartwatches)",
      "Sunglasses & Eyewear",
      "Belts, Caps, Scarves, Gloves",
    ],
  },
  {
    title: "Beauty, Health & Personal Care",
    items: [
      "Skincare (lotions, face creams, serums, sunscreens)",
      "Makeup (lipsticks, powders, foundations, palettes)",
      "Wigs & Hair Extensions",
      "Hair Care (shampoos, oils, clippers, dryers, straighteners)",
      "Perfumes & Deodorants",
      "Men’s Grooming (shaving kits, beard oils, trimmers)",
      "Wellness (detox teas, slimming belts, massagers)",
      "Sexual Wellness (condoms, lubricants, fertility kits)",
    ],
  },
  {
    title: "Electronics & Appliances",
    items: [
      "Smartphones & Tablets",
      "Phone Accessories (cases, power banks, chargers, earphones)",
      "Laptops & Computers",
      "Computer Accessories (keyboards, mice, external drives)",
      "TVs, Speakers, Home Theatres",
      "Home Appliances (fridges, cookers, washing machines, air conditioners)",
      "Small Appliances (blenders, kettles, fans, irons, air fryers)",
      "Gaming Consoles & Accessories",
      "Smart Devices (CCTV, smart plugs, bulbs)",
    ],
  },
  {
    title: "Home, Furniture & Living",
    items: [
      "Furniture (sofas, beds, wardrobes, office chairs)",
      "Kitchenware (cookware, cutlery, plates, utensils)",
      "Dining & Serveware",
      "Bedding & Linen (sheets, duvets, pillows)",
      "Décor (paintings, lamps, rugs, clocks)",
      "Storage & Organization (wardrobes, racks, boxes)",
      "Cleaning Tools & Products",
    ],
  },
  {
    title: "Baby, Kids & Toys",
    items: [
      "Baby Clothes, Shoes & Accessories",
      "Diapers & Wipes",
      "Feeding Bottles, Breast Pumps, Sterilizers",
      "Baby Skincare (lotions, powders, oils)",
      "Strollers, Car Seats, Carriers",
      "Toys & Games (educational, remote cars, dolls)",
      "Kids’ School Supplies (bags, lunch boxes, stationery)",
      "Baby Furniture (cribs, high chairs)",
    ],
  },
  {
    title: "Office, School & Stationery",
    items: [
      "Office Furniture (desks, chairs, shelves)",
      "Office Equipment (printers, scanners, shredders)",
      "Stationery (pens, notebooks, files)",
      "Art & Craft Supplies",
      "Books & eBooks",
      "E-learning Tablets",
    ],
  },
  {
    title: "Automotive & Mobility",
    items: [
      "Car Accessories (seat covers, phone holders, mats)",
      "Car Electronics (dash cams, GPS, speakers)",
      "Car Maintenance (engine oils, polish, wipers)",
      "Motorcycle Accessories",
      "Bicycles & Scooters (electric/manual)",
      "EV Accessories (charging kits, converters)",
    ],
  },
  {
    title: "Sports, Fitness & Outdoors",
    items: [
      "Fitness Equipment (dumbbells, treadmills, resistance bands)",
      "Sportswear & Sneakers",
      "Outdoor Gear (tents, sleeping bags, hiking bags)",
      "Yoga Mats & Accessories",
      "Cycling Gear",
    ],
  },
  {
    title: "Food, Groceries & Beverages",
    items: [
      "Grains (rice, beans, pasta, noodles)",
      "Cooking Oils, Spices & Condiments",
      "Canned & Packaged Foods",
      "Snacks & Confectionery",
      "Fresh Produce (fruits, vegetables, dairy, meat)",
      "Beverages (coffee, tea, juices, sodas)",
      "Alcoholic Drinks (wine, beer, spirits)",
    ],
  },
  {
    title: "Tools, DIY & Industrial",
    items: [
      "Power Tools (drills, grinders, saws)",
      "Hand Tools (hammers, screwdrivers, wrenches)",
      "Building Materials (paint, tiles, cement)",
      "Plumbing & Hardware",
      "Electricals (bulbs, wires, switches)",
      "Generators & Solar Systems",
    ],
  },
  {
    title: "Pets & Animals",
    items: [
      "Pet Food (dogs, cats, birds, fish)",
      "Pet Accessories (leashes, cages, toys)",
      "Pet Grooming (shampoos, brushes, clippers)",
      "Pet Health (supplements, medicines)",
    ],
  },
  {
    title: "Events, Party & Seasonal",
    items: [
      "Party Supplies (balloons, banners, candles)",
      "Wedding Accessories (rings, veils, gowns, gifts)",
      "Festive Decorations (Christmas lights, Easter décor)",
      "Gifting & Hampers",
    ],
  },
  {
    title: "Entertainment, Media & Hobbies",
    items: [
      "Musical Instruments (guitars, keyboards, drums)",
      "Audio Equipment (microphones, DJ sets)",
      "Books & Magazines",
      "Board Games & Collectibles",
      "Photography & Videography Gear",
    ],
  },
  {
    title: "Travel & Lifestyle",
    items: [
      "Luggage & Suitcases",
      "Backpacks & Travel Organizers",
      "Camping Gear",
      "Outdoor Adventure Kits",
    ],
  },
  {
    title: "Pharmacy & Healthcare",
    items: [
      "Over-the-counter Medicines",
      "First Aid Kits",
      "Medical Devices (thermometers, glucometers, BP monitors)",
      "PPE (masks, sanitizers, gloves)",
      "Health Supplements",
    ],
  },
  {
    title: "Digital & Services",
    items: [
      "Gift Cards (Netflix, PlayStation, Amazon)",
      "Software & Subscriptions",
      "Online Courses",
      "Freelance/Professional Services",
    ],
  },
];

const CategoriesPage = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Shop by Category
      </h1>

      <div className="max-w-5xl mx-auto space-y-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition duration-200"
          >
            <button
              onClick={() => toggleCategory(index)}
              className="flex justify-between items-center w-full text-left p-4 font-semibold text-lg text-gray-700"
            >
              {category.title}
              {openCategory === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {openCategory === index && (
              <ul className="p-4 border-t bg-gray-50 text-sm text-gray-600 space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-pink-600 transition cursor-pointer"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
