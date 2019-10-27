import React from "react"
import StudioEquipmentContainer from "./studioequipment/StudioEquipmentContainer";
import Navbar from "./Navbar"
import * as DataSource from "./service/mock"

const Content = () => {
    const [activeTabId, setActiveTabId] = React.useState("Audio recording equipment")

    return (
        <div className="main-layout wrapper">
            <Navbar setActiveTabId={setActiveTabId} activeTabId={activeTabId}/>
            <StudioEquipmentContainer equipmentList={DataSource.equipmentList} activeTabId={activeTabId}/>
        </div>
    )
}

export default Content