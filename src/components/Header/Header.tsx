import ProfileIcon from "./Profile/Profile";
import Logo from "../../assets/images/logo-full.svg?react";


type HeaderProps = {
    name: string, 
    setName: React.Dispatch<React.SetStateAction<string>>
}

export default function Header({ name, setName }: HeaderProps) {

    return (
        <div className={`flex items-center justify-between`}>
            <Logo className={`h-[32px]`} />
            <ProfileIcon name={name} setName={setName} />
        </div>
    )
}