import React from "react";
import {sidebar, sidebarHeader} from "./Sidebar.module.scss"
import {cardContainer} from "../../pages/Home/Home.module.scss"
import OwnedGroup from "../OwnedGroup/OwnedGroup"


function Sidebar() {
    
    const groups = [
        {
            groupName: "HA Tempe",
            days: ["Mon", "Wed", "Sat"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, id totam! Est repellendus voluptate doloribus! Ea maxime quos eligendi praesentium.",
            tags: ["#HA"],
            thumbnail: "https://w0.pngwave.com/png/846/543/hypodermic-needle-injection-syringe-icon-simple-injection-needle-png-clip-art.png",
            time: "4:00 PM",
            location: "zoom.us/45fdujs"
        }
    ]
  return (
      <div>
      <div className={sidebarHeader}>My Groups</div>
      <div className={sidebar}>
        
              {/* conditional logic here (if user has) */}
          {groups.map(item => {
                        return <OwnedGroup {...item} />
                    })}
      </div>
      </div>
    
  );
}

export default Sidebar;