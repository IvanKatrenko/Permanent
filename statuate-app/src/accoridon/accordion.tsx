import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <motion.div
        className="accordion-title"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
      >
        {title}
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
