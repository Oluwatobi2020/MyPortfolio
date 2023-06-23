import React from "react";

const ProjectData = () => {
  const projectItems = [
    {
      id: 1,
      name: "Swap Money",
      projectImage: "/swap-money.png",
      links: "https://swap-money.netlify.app/",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 2,
      name: "Canta",
      projectImage: "/canta.png",
      links: "https://canta-test.netlify.app/",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 3,
      name: "Checkout",
      projectImage: "/checkout.png",
      links: "https://ace-coin-checkout-page.netlify.app/",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 4,
      name: "TME-Core",
      projectImage: "/tme-core.png",
      links: "",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 5,
      name: "ACH",
      projectImage: "/ach.png",
      links: "",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
  ];
  const projectItems2 = [
    {
      id: 1,
      name: "Nerdiness",
      projectImage: "/nerdiness.png",
      links:
        "https://www.figma.com/proto/X9fnL3VKTk2txeyBwxA2DA/Nerdiness-Website?page-id=0%3A1&type=design&node-id=4-2&viewport=1378%2C11077%2C0.16&scaling=scale-down-width&starting-point-node-id=4%3A2",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
    },
    {
      id: 2,
      name: "Medisave",
      projectImage: "/medisave.png",
      links:
        "https://www.figma.com/proto/TPUiJXqWHdCOS3TOusoIJh/MediSave?page-id=0%3A1&node-id=38-24&starting-point-node-id=38%3A24&scaling=scale-down-width&mode=design",
      description:
        "This is a core banking solution that helps microfinance banks to automate their banking processess",
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
      name: "HTML",
    },
    {
      id: 4,
      icon: "/css3.svg",
      name: "CSS",
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
