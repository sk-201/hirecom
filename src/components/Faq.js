import React from "react";

const Faq = () => {
  const accordionArray = [
    {
      id: 1,
      title: "What Makes Hire eCom Different?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 2,
      title: "What eCommerce Talent Do You Offer?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 3,
      title: "What Makes Hire eCom Different?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 4,
      title: "What are Hire eCom's Areas of Expertise?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 5,
      title: "Which eCommerce Platforms Do You Have Experience With?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 6,
      title: "What Marketing Services Do You Provide?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 7,
      title: "Does Hire eCom Have Experience in the Global Market?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 8,
      title: "What is Hire eCom's Pricing Model?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 9,
      title: "What Time Zones Do Hire eCom's Teams Work In?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 10,
      title: "How Do You Ensure Smooth Communication with Clients?",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];
  function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Down icon
    const downSVG = `
     <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
  <path d="M5 12H19" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `;

    // SVG for Up icon
    const upSVG = `
     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 5V19" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5 12H19" stroke="#d9d9d9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    `;

    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
      content.style.maxHeight = "0";
      icon.innerHTML = upSVG;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      icon.innerHTML = downSVG;
    }
  }
  return (
    <div className=" font-outfit  w-[335px]  md:w-[834px] lg:w-[739px] mx-10 lg:mx-0 ">
      <h2 className=" text-2xl lg:text-4xl font-medium mb-4">FAQS</h2>
      {accordionArray.map((accordion) => {
        return (
          <div className="border border-borderGray mb-4" key={accordion.id}>
            <button
              onClick={() => toggleAccordion(accordion.id)}
              className="w-full   flex justify-between items-center py-2 text-textBlack font-medium text-sm md:text-base lg:text-xl"
            >
              <span className="px-2">{accordion.title}</span>
              <span
                id={`icon-${accordion.id}`}
                className="text-textBlack  px-2 transition-transform duration-300"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#d9d9d9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#d9d9d9"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id={`content-${accordion.id}`}
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="px-2 pb-5 text-sm font-light text-textBlack">
                {accordion.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
