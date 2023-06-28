import React from "react";

const ProjectData = () => {
  const projectItems = [
    {
      id: 1,
      name: "Swap Money",
      projectImage: "/swap-money.png",
      links: "https://swap-money.netlify.app/",
      description:
        "Swap money is a trusted and reliable Cross-border solutions for businesses. The platform offers multiple benefits...",
    },
    {
      id: 2,
      name: "Canta",
      projectImage: "/canta.png",
      links: "https://canta-test.netlify.app/",
      description:
        "This is a web application for paying suppliers from different coutries around the world.",
    },
    {
      id: 3,
      name: "Checkout",
      projectImage: "/checkout.png",
      links: "https://ace-coin-checkout-page.netlify.app/",
      description:
        "This is just a simple checkout page that can be used to make online payments using credit/debit cards.",
    },
    {
      id: 4,
      name: "Promptopia",
      projectImage: "/promptopia.png",
      links: "https://tobiprompt.netlify.app/",
      description:
        "Promptopia is an open source AI prompting tool for modern world to discover, create and share creative imports",
    },
    {
      id: 5,
      name: "TME-Core",
      projectImage: "/tme-core.png",
      links: "",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 6,
      name: "ACH",
      projectImage: "/ach.png",
      links: "",
      description:
        "This is a core banking solution for managing cheque and fund transfers in and out of commercial institutions",
    },

  ];
  const projectItems2 = [
    {
      id: 1,
      name: "Links Property",
      projectImage: "/linksproperty.png",
      links:
        "https://xd.adobe.com/view/79edc7e7-993a-42bf-a9c3-52f94eb8201e-2cbe/",
      description:
        "Links Property is a real estate application where properties are displayed for potential buyers..."
    },
    {
      id: 2,
      name: "EazziDeclutter",
      projectImage: "/eazzideclutter.png",
      links:
        "https://xd.adobe.com/view/93ea367a-a0df-412e-8aa3-d889fc038c4a-c6b9/",
      description:
        "Eazzideclutter is an ecommerce platform where users can upload new or used household items and...",
    },
    {
      id: 3,
      name: "Nerdiness",
      projectImage: "/nerdiness.png",
      links:
        "https://www.figma.com/proto/X9fnL3VKTk2txeyBwxA2DA/Nerdiness-Website?page-id=0%3A1&type=design&node-id=4-2&viewport=1378%2C11077%2C0.16&scaling=scale-down-width&starting-point-node-id=4%3A2",
      description:
        "Nerdiness is a platform that offer multiple services ranging from custom made software and application design",
    },
    {
      id: 4,
      name: "Medisave",
      projectImage: "/medisave.png",
      links:
        "https://www.figma.com/proto/TPUiJXqWHdCOS3TOusoIJh/MediSave?page-id=0%3A1&node-id=38-24&starting-point-node-id=38%3A24&scaling=scale-down-width&mode=design",
      description:
        "The initiative for medisave was to make quick and rapid professional medical services available to victims of accidents...",
    },
    {
      id: 5,
      name: "Uhuru Customer App",
      projectImage: "/uhuru-1.png",
      links:
        "https://www.figma.com/proto/qny5CYcYiRJBjdGD1LojFO/Uhuru-Delivery-Customer?page-id=0%3A1&node-id=1%3A1778&viewport=356%2C1134%2C0.35&scaling=scale-down&starting-point-node-id=1%3A1911",
      description:
        "This is a cab hailing mobile application that helps users order for a quick ride and dispatch of goods...",
    },
    {
      id: 6,
      name: "Uhuru Driver App",
      projectImage: "/uhuru-2.png",
      links:
        "https://www.figma.com/proto/yLhSHL21lLz9G5SUc2h1zI/Uhuru-Delivery-Driver?page-id=0%3A1&node-id=1%3A439&viewport=336%2C260%2C0.08&scaling=min-zoom&starting-point-node-id=1%3A439",
      description:
        "This a mobile app to manage drivers registered on the Uhuru platform.",
    },
  ];

  const skillsList = [
    {
      id: 1,
      icon: "/adobexd.svg",
      name: "Adobe XD",
    },
    {
      id: 2,
      icon: "/figma.svg",
      name: "Figma",
    },
    {
      id: 3,
      icon: "/html.svg",
      name: "HTML5",
    },
    {
      id: 4,
      icon: "/css3.svg",
      name: "CSS3",
    },
    {
      id: 5,
      icon: "/tailwind.svg",
      name: "Tailwind",
    },
    {
      id: 5,
      icon: "/javascript.svg",
      name: "Javascript",
    },
    {
      id: 6,
      icon: "/typescript.svg",
      name: "Typescript",
    },
    {
      id: 7,
      icon: "/reactjs.svg",
      name: "React Js",
    },
    {
      id: 8,
      icon: "/nextjs.svg",
      name: "Next Js",
    },
  ];

  const contactsList = [
    {
      id: 1,
      icon: "/phone.svg",
      type: "+234-807-647-9808",
      link: "",
    },
    {
      id: 2,
      icon: "/whatsapp.svg",
      type: "+234-703-034-0143",
      link: "https://wa.me/+2347030340143",
    },
    {
      id: 3,
      icon: "/github.svg",
      type: "github",
      link: "https://github.com/Oluwatobi2020",
    },
    {
      id: 4,
      icon: "/linkedin.svg",
      type: "linkedIn",
      link: "https://www.linkedin.com/in/ojedeji-oluwatobi-samuel-882588a6/",
    },
    {
      id: 5,
      icon: "/instagram.svg",
      type: "instagram",
      link: "https://www.instagram.com/ojedejitobi/",
    },
  ];

  return {
    projectItems,
    projectItems2,
    skillsList,
    contactsList,
  };
};

export default ProjectData;
