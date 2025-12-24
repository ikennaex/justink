import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            What would you like to explore on JustLink?
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose a service to get started. You can switch between services anytime.
          </p>
        </div>

        {/* Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ecommerce */}
          <Link to="/ecommerce">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                Ecommerce
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Buy and sell products, and track orders seamlessly.
              </p>

              <div className="mt-6">
                <span className="inline-block text-sm font-medium text-green-600 group-hover:underline">
                  Explore Ecommerce →
                </span>
              </div>
            </div>
          </Link>

          {/* Logistics */}
          <Link to="/logistics">
            <div className="group bg-white border border-gray-200 rounded-2xl p-8 text-left hover:shadow-lg transition cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-green-600">
                Logistics
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Ship packages, and track deliveries in real time.
              </p>

              <div className="mt-6">
                <span className="inline-block text-sm font-medium text-green-600 group-hover:underline">
                  Explore Logistics →
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
