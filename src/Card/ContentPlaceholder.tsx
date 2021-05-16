import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({desc}: {desc: string}) => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <p>
      {desc}
      </p>
    </motion.div>
  );
});
