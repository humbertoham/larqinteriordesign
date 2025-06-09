"use client"
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
export default function ConButton() {
  return (
   <><div className="m-4 ml-0">
    <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
              <Link
                href="/contactus"
                className="flex items-center gap-2 text-lg font-semibold mon text-black transition-colors"
              >
                Contact Us
                <FiArrowUpRight className="w-5 h-5 yel transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            </div>
   </>
  );
}
