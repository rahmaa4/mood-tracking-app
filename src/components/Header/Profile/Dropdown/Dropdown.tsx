import DropdownLink from "./DropdownLink/DropdownLink"

type DropdownProps = {
    isDropdown: boolean, 
    setIsDisplaySettings: React.Dispatch<React.SetStateAction<boolean>>,
    setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>,
    name: string
}

export default function Dropdown({name, isDropdown, setIsDisplaySettings, setIsDropdown }: DropdownProps){
    
    return (
        <div className={`${isDropdown ? 'flex flex-col gap-3' : 'hidden'} mt-2 rounded-lg absolute bg-neutral0 w-[200px] min-h-[148px] left-[-139px] boxShadow px-4 py-3 
        `}>
            <div>
                <p className={`text-lg font-medium`}>{name}</p>
                <p className={`text-[15px] text-neutral300`}>{name}@mail.com</p>
            </div>
            <div className={`h-[1px] w-full bg-blue100`}></div>
            <DropdownLink type="settings" setIsDisplaySettings={setIsDisplaySettings} setIsDropdown={setIsDropdown} />
            <DropdownLink type="logout"/>
        </div>
    )
}
