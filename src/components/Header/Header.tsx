import logo from "/assets/images/logo-full.svg";
import downChevron from "/assets/images/icon-dropdown-arrow.svg";
import avatar from "/assets/images/avatar-lisa.jpg"

export default function Header() {
    return (
        <div className={`flex items-center justify-between`}>
            <img src={logo} alt="Mood Tracker Logo" className={`h-[32px]`} />
            <div className={`flex items-center gap-[10px]`}>
                <div className={`w-10 aspect-square rounded-full bg-[url("/assets/images/avatar-placeholder.svg")] bg-contain bg-no-repeat bg-center `}>
                    <img src={avatar} alt="" className={`rounded-full`} />
                </div>
                <img src={downChevron} alt="Drop down icon" className={`hover:cursor-pointer`} />
            </div>
        </div>
    )
}