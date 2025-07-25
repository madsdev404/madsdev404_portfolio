import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface SkillItemProps {
  skill: { name: string; percentage: number };
  index: number;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useSpring(0, { stiffness: 50, damping: 20 });
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      count.set(skill.percentage);
    }
  }, [isInView, count, skill.percentage]);

  useEffect(() => {
    count.onChange((latest) => {
      setDisplayCount(Math.round(latest));
    });
  }, [count]);

  return (
    <motion.div
      ref={ref}
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full lg:w-1/3 px-4 mb-8"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-blue-700 dark:text-white">
              {skill.name}
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              {displayCount}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <motion.div
              className="bg-blue-600 h-2.5 rounded-full"
              initial={{ width: "0%" }}
              animate={
                isInView ? { width: `${skill.percentage}%` } : { width: "0%" }
              }
              transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
