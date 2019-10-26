import React from "react"
import {StudioEquipmentContainer} from "./studioequipment/StudioEquipmentContainer";
import * as DataSource from "./service/mock"
import {Navbar} from "./Navbar";

export class Content extends React.Component {
    render() {
        return (
            <div className="container">
                {/*<Navbar /> todo fix navbar*/}
                <StudioEquipmentContainer equipmentList={DataSource.equipmentList}/>
            </div>
        )
    }

}