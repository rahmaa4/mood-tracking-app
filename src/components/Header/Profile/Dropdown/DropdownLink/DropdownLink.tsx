import SettingIcon from "../../../../../assets/images/icon-settings.svg?react";
import LogoutIcon from "../../../../../assets/images/icon-logout.svg?react";


type DropdownLinkProps = {
    type: "settings" | "logout",
    setIsDisplaySettings?: React.Dispatch<React.SetStateAction<boolean>>,
    setIsDropdown?: React.Dispatch<React.SetStateAction<boolean>> 
}


export default function DropdownLink ({ type, setIsDisplaySettings, setIsDropdown }: DropdownLinkProps) {
    
    const handleClick = () => {
        if (type === "settings" && setIsDisplaySettings && setIsDropdown) {
            setIsDropdown(false);
            setIsDisplaySettings(true);
        }
    }
    
    return (
        <div className={`flex items-center gap-[10px] hover:cursor-pointer`} onClick={handleClick} >
            {type === "settings" ? <SettingIcon className={`block w-4 aspect-square`} /> : <LogoutIcon className={` block w-4 aspect-square`} />} 
            <p className={`text-[15px]`}>{type === "settings" ? 'Settings' : 'Logout'}</p>
        </div>
    )
}