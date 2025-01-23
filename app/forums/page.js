import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const forums = [
    {
        title: "SQL",
        slug: "SQL",
        description: "Join discussions on Python programming, its versatile libraries, and use cases in AI, web development, and more. Dive into frameworks like Django, Flask, and beyond!",
        image: "/python.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        textColor: "text-white",
    },
    {
        title: "JavaScript",
        slug: "javascript",
        description: "Explore the world of JavaScript, including ES6+ features, modern frameworks, and real-world applications. From the browser to the backend, master it all here!",
        image: "/js.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
        textColor: "text-white",
    },
    {
        title: "React.js",
        slug: "reactJs",
        description: "Engage in conversations about React's component-based architecture, hooks, and state management. Learn best practices and build dynamic user interfaces efficiently.",
        image: "/react.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
        textColor: "text-white",
    },
    {
        title: "Next.js",
        slug: "nextJs",
        description: "Dive deep into Next.js for server-side rendering, static site generation, and full-stack capabilities. Share tips for optimizing performance and scalability in projects.",
        image: "/next.png", // Replace with your image URL
        gradient: "bg-gradient-to-r from-green-400 to-green-600",
        textColor: "text-white",
    },
    {
        title: "CSS",
        slug: "CSS",
        description: "Discuss the power of utility-first CSS with Tailwind. Learn how to design responsive, custom layouts faster and with full control over your design system.",
        image: "/tailwind.png", // Replace with your image URL
        gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
        textColor: "text-white",
    },
];

const Page = () => {
    return (
        <>
            <main className="relative py-20 max-w-7xl mx-auto min-h-screen">
                <h1 className="text-4xl font-bold text-center mb-10">Forums</h1>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {forums.map((topic, index) => (
                        <div key={index} className={`flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ${topic.gradient} ${topic.textColor}`}>
                            <div className="flex items-center justify-center mb-2">
                                <Image src={topic.image} alt={topic.title} className="w-20 h-20 p-2 bg-white rounded-full object-contain" width={500} height={500} />
                            </div>
                            <h2 className="text-2xl font-bold flex items-center">{topic.title}</h2>
                            <p className="my-6">{topic.description}</p>
                            <Button asChild className="px-5 text-base rounded-full bg-gradient-to-r from-zinc-800 to-black dark:from-zinc-700 dark:to-black hover:from-black hover:to-zinc-600 dark:hover:from-black dark:hover:to-zinc-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-black/30 h-12">
                                <Link href={`/forum/${topic.slug}`}>View Discussions</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Page;