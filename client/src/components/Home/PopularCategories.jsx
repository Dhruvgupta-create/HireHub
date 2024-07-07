import React from 'react'
import { MdDesignServices, MdWeb, MdAccountBalance, MdAnimation } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiData } from "react-icons/bi";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <MdWeb />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdWeb />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiBrain />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameControllerOutline />,
    },
    {
      id: 9,
      title: "Data Analyst",
      subTitle: "80 Open Positions",
      icon: <BiData />,
    }
  ];
      return (
        <div className="categories">
          <h3>POPULAR CATEGORIES</h3>
          <div className="banner">
            {categories.map((element) => {
              return (
                <div className="card" key={element.id}>
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
}

export default PopularCategories