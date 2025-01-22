import React from 'react';
import Link from 'next/link';

export default function Home() {

  const priceCards = [
    {
      title: "Free",
      price: "Free",
      features: [
        "📩 Unlimited messaging",
        "👥 Group chats",
        "📁 File sharing",
        "🎥 Basic video/voice calls",
        "🕶 Limited customization",
        "🔐 Basic security",
      ],
      button: "Get Started Free",
    },
    {
      title: "Basic",
      price: "$9.99/month",
      features: [
        "📩 Everything in Free",
        "📂 10GB storage",
        "🔖 Enhanced group management",
        "💬 Chat history for 30 days",
        "🔧 Priority bug fixes",
        "🔒 Additional security features",
      ],
      button: "Choose Basic",
    },
    {
      title: "Pro",
      price: "$19.99/month",
      features: [
        "📩 Everything in Basic",
        "📂 Unlimited storage",
        "🎨 Custom themes",
        "📊 Analytics dashboard",
        "⏰ Real-time notifications",
        "🛠 Priority customer support",
      ],
      button: "Upgrade to Pro",
    },
    {
      title: "Business",
      price: "$49.99/month",
      features: [
        "📩 Everything in Pro",
        "📊 Advanced analytics",
        "👨‍💼 Team management tools",
        "🌐 Multi-language support",
        "⚡ API access",
        "🤝 Dedicated support",
      ],
      button: "Choose Business",
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: [
        "📩 Everything in Business",
        "🤝 Dedicated account manager",
        "🔧 Custom integrations",
        "📞 24/7 support",
        "🚀 Priority updates",
        "🏢 On-site support options",
      ],
      button: "Contact Sales",
    },
    {
      title: "Premium Enterprise",
      price: "Custom Pricing",
      features: [
        "📩 Everything in Enterprise",
        "🔄 Unlimited API calls",
        "🧪 Exclusive beta features",
        "🏫 On-site training",
        "📈 Custom analytics",
        "✨ White-glove service",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <main className="min-h-screen">

      <section className="hero bg-cover bg-center h-screen relative z-0" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/[0.1] backdrop-blur-sm z-0"></div>
        <div className="container relative mx-auto px-4 flex items-center justify-center text-white z-20 max-w-7xl h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Effortless Communication. <strong className='text-green-500'>Simplified.</strong>
            </h1>
            <p className="text-lg mb-8 max-w-2xl">
              Connect with friends, family, and colleagues seamlessly. ChatMe offers a secure and intuitive platform for instant messaging, voice/video calls, and file sharing.
            </p>
            <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      <div className='max-w-7xl mx-auto'>
        <section className="features py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center justify-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <i className="fas fa-comments text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Real-time Messaging</h3>
                <p>Experience instant messaging with lightning-fast delivery.</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <i className="fas fa-users text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Group Chats</h3>
                <p>Connect with friends and family in group chats.</p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                <i className="fas fa-video text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">High-Quality Calls</h3>
                <p>Enjoy crystal-clear voice and video calls.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing py-16">
          <div className="container mx-auto bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl">
            <h2 className="text-3xl font-bold text-center mb-8 pt-10">Pricing</h2>
            <div className="overflow-x-auto p-10 pt-0">
              <div className="flex gap-5 w-full min-w-max md:grid md:grid-cols-3 lg:grid-cols-6">
                {priceCards.map((plan, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-6 rounded-lg shadow-md w-72 min-h-[400px]"
                  >
                    <h3 className="text-xl font-bold text-center">{plan.title}</h3>
                    <p className="text-lg font-semibold text-blue-500 my-3">{plan.price}</p>
                    <ul className="flex flex-col items-start my-5 space-y-1">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-md">
                      {plan.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg shadow-md">
                <p className="text-lg">"ChatMe has completely revolutionized how I communicate with my team. It's incredibly user-friendly and has significantly improved our productivity."</p>
                <p className="text-sm mt-2"> - John Doe, CEO, Acme Corp</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg shadow-md">
                <p className="text-lg">"I love the simplicity of ChatMe. It's easy to use and allows me to stay connected with my friends and family no matter where I am."</p>
                <p className="text-sm mt-2"> - Jane Smith, Marketing Manager</p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg shadow-md">
                <p className="text-lg">"ChatMe is the best communication tool I've ever used. The video and voice call quality is exceptional, and the features are top-notch."</p>
                <p className="text-sm mt-2"> - David Lee, Software Engineer</p>
              </div>
            </div>
          </div>
        </section>
      </div>


      <footer className="bg-zinc-100 dark:bg-zinc-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-300 mt-4 md:mt-0">
            © {new Date().getFullYear()} All Rights Reserved |
            <Link
              href="https://twitter.com/knyttneve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 ml-1"
            >
              @vinayakgore
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}

export const metadata = {
  title: 'Home - ChatMe',
  description: 'ChatMe helps you to chat with your friends',
};