import { motion } from 'framer-motion';
function Email() {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <a
        href="jamesedwards2001.tz@gmail.com"
        className="email-link"
        aria-label="Email James Edward"
      >
        lohitkolluri@gmail.com
      </a>
    </motion.div>
  );
}

export default Email;
