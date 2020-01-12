import React from 'react';
import './index.css';
const FeatureBar = () =>{
    const icons = [
        {id:1,feature:"CAMERA",image:"https://img.icons8.com/plasticine/2x/camera.png",
        desc:"Today’s smartphones come equipped with a very comprehensive set of camera related specifications. Our smartphone, for many of us"},
        {id:2,feature:"PERFORMANCE",image:"https://www.amd.com/system/files/63130-processor-control-icon-1260x709.png",
        desc:"Maximize performance with Game Booster technology which gives smooth graphics, life-like motion and learns your usage patterns to optimize battery, temperature and memory."},
        {id:3,feature:"BATTERY",image:"https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/947418591553771558-512.png",
        desc:"Experience the incridible Battery Life which lasts for a very long time with a heavy usage for a all day long with Li-ion with a great capacity"}
    ]
    return(
        <div className="feature">
        {icons.map(data=>{
        return(
            <div id="featurearea" key={data.id}>
                <h3>{data.feature}</h3>
            <img src={data.image} id="image" />

        <div id="description">{data.desc}</div>
            </div>
        )
        })}
        </div>
    )
}

export default FeatureBar;