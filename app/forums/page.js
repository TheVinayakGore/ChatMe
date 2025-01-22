import Image from "next/image";
import React from "react";

const forums = [
    {
        title: "Python",
        description: "Join discussions on Python programming, its versatile libraries, and use cases in AI, web development, and more. Dive into frameworks like Django, Flask, and beyond!",
        image: "/python.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
        textColor: "text-white",
    },
    {
        title: "JavaScript",
        description: "Explore the world of JavaScript, including ES6+ features, modern frameworks, and real-world applications. From the browser to the backend, master it all here!",
        image: "/js.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
        textColor: "text-white",
    },
    {
        title: "React",
        description: "Engage in conversations about React's component-based architecture, hooks, and state management. Learn best practices and build dynamic user interfaces efficiently.",
        image: "/react.webp", // Replace with your image URL
        gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
        textColor: "text-white",
    },
    {
        title: "Next.js",
        description: "Dive deep into Next.js for server-side rendering, static site generation, and full-stack capabilities. Share tips for optimizing performance and scalability in projects.",
        image: "/next.png", // Replace with your image URL
        gradient: "bg-gradient-to-r from-green-400 to-green-600",
        textColor: "text-white",
    },
    {
        title: "Tailwind CSS",
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
                <h1 className="text-4xl font-bold text-center mb-10 text-zinc-800">Forums</h1>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {forums.map((forum, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ${forum.gradient} ${forum.textColor}`}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <Image src={forum.image} alt={forum.title} className="w-20 h-20 p-2 bg-white rounded-full object-contain" width={500} height={500} />
                            </div>
                            <h2 className="text-2xl font-bold mb-2 flex items-center">
                                <span className="mr-2">{forum.emoji}</span> {forum.title}
                            </h2>
                            <p className="">{forum.description}</p>
                            <button
                                className="mt-4 inline-block px-6 py-3 text-sm font-bold rounded-full bg-gradient-to-r from-zinc-800 to-black dark:from-zinc-700 dark:to-black hover:from-black hover:to-zinc-600 dark:hover:from-black dark:hover:to-zinc-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg w-auto"
                            >
                                View Discussions
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Page;