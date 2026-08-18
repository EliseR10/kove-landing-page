"use client"

import { motion } from "motion/react";

type FeatureCardProps = {
    children: React.ReactNode;
    className?: string;
}

export default function FeatureCard({ children, className }: FeatureCardProps) {

    return (
       <motion.div
            whileHover={{
                x: 8,
                y: -5,
                transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                },
            }}
            className={className}
        >
        {children}
        </motion.div>
    )
}



    
