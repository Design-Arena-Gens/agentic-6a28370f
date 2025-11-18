"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function NetworkAnimation() {
  const [nodes, setNodes] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const generateNodes = () => {
      const newNodes = [];
      for (let i = 0; i < 20; i++) {
        newNodes.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          id: i,
        });
      }
      setNodes(newNodes);
    };
    generateNodes();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <svg className="w-full h-full">
        {/* Draw connections between nearby nodes */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((otherNode, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 30) {
              return (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="white"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              );
            }
            return null;
          })
        )}
        {/* Draw nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="white"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.id * 0.1 }}
          />
        ))}
      </svg>
    </div>
  );
}
