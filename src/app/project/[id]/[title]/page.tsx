"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  // const { id, title } = useParams();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-4 capitalize">
          Project #:
        </h1>
        <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-8">
          {/* Replace with your project image */}
          <Image
            src="/project-placeholder.jpg"
            alt={"tok"}
            className="w-full h-full object-cover"
          />
        </div>

        <article className="prose lg:prose-xl max-w-none">
          <p>
            This is a beautifully animated project detail page inspired by the
            Mercury blog layout. Use this section to explain your project in
            detail.
          </p>

          <h2>What we did</h2>
          <ul>
            <li>Built with Next.js 15 (App Router)</li>
            <li>Animated with Framer Motion</li>
            <li>Styled with Tailwind CSS v5</li>
          </ul>

          <blockquote>
            This is an engaging, smoothly animated, and SEO-friendly page.
          </blockquote>

          <p>
            You can extend this page by fetching real content using Next.js
            Server Components or API routes.
          </p>
        </article>
      </motion.div>
    </div>
  );
};

export default page;
