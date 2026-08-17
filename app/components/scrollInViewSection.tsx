"use client"

import { motion } from "motion/react"

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function ScrollInViewSection({ id, children, className }: SectionProps) {
   return (
    <motion.section
        initial={{ opacity: 0, y: 60 }} //y:60 -> section starts 60px lower
        whileInView={{ opacity: 1, y: 0 }} //animate when it enters the viewport
        viewport={{ once: true, amount: 0.25 }} //amount -> triggers when about 25% of the section is visible // once: true -> prevent replaying every time the user scrolls back (optional)
        transition={{ duration: 0.6, ease: "easeOut" }}
        id={id} className={className}
    >
        {children}
    </motion.section>
   )
}