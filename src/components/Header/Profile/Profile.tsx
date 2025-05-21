import downChevron from "/assets/images/icon-dropdown-arrow.svg";
//import avatar from "/assets/images/avatar-lisa.jpg"
import {useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import SettingModal from "./SettingModal/SettingModal";


type ProfileIconProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

export default function ProfileIcon({ name, setName}: ProfileIconProps) {
    const [avatar, setAvatar] = useState("");
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDisplaySettings, setIsDisplaySettings] = useState(false);


    return (
        <div className={`relative`}>
            <div className={`flex items-center gap-[10px]`}>
                <div className={`w-10 aspect-square rounded-full bg-[url("/assets/images/avatar-placeholder.svg")] bg-contain bg-no-repeat bg-center `}>
                    { avatar.length > 0 && <img src={avatar} alt="" className={`rounded-full`} />}
                </div>
                <img src={downChevron} alt="Drop down icon" className={`hover:cursor-pointer`} onClick={() => setIsDropdown((prev) => !prev)}/>
            </div>
            <Dropdown isDropdown={isDropdown} setIsDropdown={setIsDropdown} setIsDisplaySettings={setIsDisplaySettings} name={name} />
           
            <div className={`min-h-screen flex justify-center items-center ${isDisplaySettings ? 'fixed' : 'hidden'} z-20 top-0 right-0 left-0 darkLowOpacity`}>
                <SettingModal
                    name={name}
                    setName={setName}
                    setIsDisplaySettings={setIsDisplaySettings}
                    setAvatar={setAvatar}
                />
            </div>

        </div>
        
    )
}