import { motion } from "framer-motion"

const ContactInfo = () => {
  const contactMethods = [
    { type: "Email", value: "muktadiralam38@gmail.com", href: "mailto:muktadiralam38@gmail.com" },
    { type: "Phone", value: "+8801725908830", href: "tel:+8801725908830" },
    { type: "WhatsApp", value: "+8801725908830", href: "https://wa.me/+8801725908830" },
  ]

  return (
    <div id="contact" className="bg-gradient-to-r from-primary to-blue-500 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto my-6">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            target={method.type === "WhatsApp" ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-white hover:bg-opacity-30 transition-all duration-300 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-4xl mb-4">
              {method.type === "Email" && "✉️"}
              {method.type === "Phone" && "📞"}
              {method.type === "WhatsApp" && "💬"}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">{method.type}</h3>
            <p className="text-center text-black">{method.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default ContactInfo

