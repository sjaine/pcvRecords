"use client";

const steps = [
    {
      number: 1,
      title: "Know What You Like",
      body: "Start by exploring the genres, artists, and sounds that speak to you. Building a vinyl collection is personal, so let your taste guide the hunt.",
    },
    {
      number: 2,
      title: "Learn to Inspect a Record",
      body: "Before buying, take a moment to check the condition. Look for scratches, warping, or marks on the surface. A quick visual check helps you choose records that will play clean and sound great.",
    },
    {
      number: 3,
      title: "Invest in Quality Care",
      body: "Good records last a long time with proper care. Keep them upright, store them in sleeves, and clean them regularly to protect the sound and the lifespan of your collection.",
    },
    {
      number: 4,
      title: "Support Local Shops",
      body: "Your local record store is one of the best places to learn. Ask questions, discover new music, and connect with the community. You never know what hidden gems you’ll find.",
    },
  ];
  
  export default function StepCard() {
    return (
      <section className="w-full">
        <div className="grid gap-[50px] md:grid-cols-2 lg:grid-cols-4 items-start">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-rows-[auto_auto_1fr] h-full rounded-[40px] bg-lime px-10 py-24 justify-center align-center items-center text-black"
            >
              <div className="text-[140px] font-black text-center">
                {step.number}
              </div>
              <h3 className="text-3xl font-bold mb-[24px] text-center">{step.title}</h3>
              <p className="text-lg leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  