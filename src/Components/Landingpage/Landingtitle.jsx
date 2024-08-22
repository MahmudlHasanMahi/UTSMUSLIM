import { motion } from "framer-motion";

const Landingtitle = () => {
  return (
    <div className="landingtitle-container">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        className="landingtitle"
      >
        Empowering Muslims On Campus
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="landingPage-title"
      >
        We are the UTS Muslim Society. We are the sole representatives for
        muslims since 94’.
      </motion.div>
    </div>
  );
};

export default Landingtitle;
