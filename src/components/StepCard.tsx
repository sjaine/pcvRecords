"use client";

const steps = [
    {
      number: 1,
      title: "Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.",
    },
    {
      number: 2,
      title: "Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.",
    },
    {
      number: 3,
      title: "Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.",
    },
    {
      number: 4,
      title: "Title",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt lorem purus, vel rutrum urna scelerisque vitae. Aenean ullamcorper leo et ligula aliquam malesuada. Quisque nisi odio.",
    },
  ];
  
  export default function StepCard() {
    return (
      <section className="w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col h-[540px] rounded-[40px] bg-[#E5E5E5] px-8 py-10 justify-center align-center items-center"
            >
              <div className="text-6xl md:text-7xl font-black mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#2b2b2b]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  