import React from "react";

const ProjectData = () => {
    const projectItems = [
      {
        id: 1,
        name: "Swap Money",
        projectImage: "/swap-money.png",
        links:"https://swap-money.netlify.app/",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
      {
        id: 2,
        name: "Canta",
        projectImage: "/canta.png",
        links:"https://canta-test.netlify.app/",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
      {
        id: 3,
        name: "Checkout",
        projectImage: "/checkout.png",
        links:"https://ace-coin-checkout-page.netlify.app/",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
      {
        id: 4,
        name: "TME-Core",
        projectImage: "/tme-core.png",
        links:"",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
      {
        id: 5,
        name: "Nerdiness",
        projectImage: "/nerdiness.png",
        links:"https://www.figma.com/proto/X9fnL3VKTk2txeyBwxA2DA/Nerdiness-Website?page-id=0%3A1&type=design&node-id=4-2&viewport=1378%2C11077%2C0.16&scaling=scale-down-width&starting-point-node-id=4%3A2",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
      {
        id: 6,
        name: "ACH",
        projectImage: "/ach.png",
        links:"",
        description:
          "This is a core banking solution that helps microfinance banks to automate their banking processess",
      },
    ];

    return{
        projectItems
    }
}

export default ProjectData;
