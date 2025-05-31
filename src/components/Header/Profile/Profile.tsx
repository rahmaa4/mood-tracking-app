import React, {useState } from "react";
import IconDownChevron from "../../../assets/images/icon-dropdown-arrow.svg?react";
import Dropdown from "./Dropdown/Dropdown";
import SettingModal from "./SettingModal/SettingModal";
import avatarPlaceholder from "../../../assets/images/avatar-placeholder.svg";


type ProfileIconProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
}

export default function ProfileIcon({ name, setName}: ProfileIconProps) {
    const [avatar, setAvatar] = useState<string>("");
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDisplaySettings, setIsDisplaySettings] = useState(false);
   

    return (
        <div className={`relative`}>
            <div className={`flex items-center gap-[10px] hover:cursor-pointer`} onClick={() => setIsDropdown((prev) => !prev)} >
                <img src={ avatar.length > 0 ? avatar : avatarPlaceholder} alt="" className={` block w-10 aspect-square rounded-full`} />
                <IconDownChevron/>
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