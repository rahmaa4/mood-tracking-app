import ProfileIcon from "./Profile/Profile";
import logo from "/assets/images/logo-full.svg";


type HeaderProps = {
    name: string, 
    setName: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ name, setName }: HeaderProps) {

    return (
        <div className={`flex items-center justify-between`}>
            <img src={logo} alt="Mood Tracker Logo" className={`h-[32px]`} />
            <ProfileIcon name={name} setName={setName} />
        </div>
    )
}