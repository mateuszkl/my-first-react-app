import React from "react"
import {StudioEquipmentContainer} from "./studioequipment/StudioEquipmentContainer";
import Navbar from "./Navbar"
import * as DataSource from "./service/mock"

export default class Content extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTabId: ""
        }

        this.setActiveTabId = this.setActiveTabId.bind(this)
    }

    setActiveTabId(newTabId) {
        console.log("APP: Set activeTabId to:", newTabId)
        this.setState({
            activeTabId: newTabId,
        })
    }

    render() {
        const { activeTabId } = this.state

        return (
            <div className="main-layout wrapper">
                <Navbar handleTabChange={this.setActiveTabId} activeTabId={activeTabId} />
                <StudioEquipmentContainer equipmentList={DataSource.equipmentList} activeTabId={activeTabId}/>
            </div>
        )
    }
}