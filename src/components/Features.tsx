import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    {
      title: "Luxury Living",
      description: "Experience unparalleled luxury with our premium properties designed for the modern lifestyle.",
      icon: "🏙️"
    },
    {
      title: "Prime Locations",
      description: "Strategically located in the most sought-after neighborhoods with easy access to all amenities.",
      icon: "📍"
    },
    {
      title: "Smart Homes",
      description: "Cutting-edge smart home technology for ultimate comfort and convenience.",
      icon: "🏠"
    }
  ];

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Why Choose Binghatti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
