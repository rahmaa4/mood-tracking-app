import { useEffect, useState } from "react";
import Form from "./Form/Form";
import { testFileType, testFileSize } from "../../../../utils/helpers";
import { returnErrorMessage } from "../../../../utils/constants";
import iconClose from "/assets/images/icon-close.svg";

type SettingModalProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setIsDisplaySettings: React.Dispatch<React.SetStateAction<boolean>>
    setAvatar: React.Dispatch<React.SetStateAction<string>>
}

export default function SettingModal({ name, setName, setIsDisplaySettings, setAvatar}: SettingModalProps) {
    const [userNameInput, setUserNameInput] = useState(name);
    const [userImageFile, setUserImageFile] = useState("");
    const [isSaveChanges, setIsSaveChanges] = useState(false);
    const [errorMessage, setErrorMessage] = useState(<></>);

     const handleUserNameInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setUserNameInput(target.value);
    }
    const handleUpload = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setErrorMessage(<></>)
        const uploadedFile = target.files ? target.files[0] : null; //check to see if file has been uploaded.
        if (uploadedFile) {
            const isValidFormat = testFileSize(uploadedFile.size) && testFileType(uploadedFile.type);
            if (isValidFormat) {
                setUserImageFile(URL.createObjectURL(uploadedFile));
            } else {
                if (!testFileSize(uploadedFile.size) && testFileType(uploadedFile.type)) {
                    setErrorMessage(returnErrorMessage("size"));
                } else if (!testFileType(uploadedFile.type) && testFileSize(uploadedFile.size)) {
                    setErrorMessage(returnErrorMessage("type"));
                } else {
                    setErrorMessage(returnErrorMessage("both"));
                }
            }
        }
     };


    useEffect(() => {
        if (isSaveChanges) {
            setName(userNameInput)
            setAvatar(userImageFile);
            setIsDisplaySettings(false);
            setIsSaveChanges(false);
        }
    }, [isSaveChanges])



    return (
        <div className={`w-[90vw] md:w-[600px] px-6 py-6 bg-neutral0 flex flex-col rounded-2xl`}>
            <button className={`mb-2 flex justify-end hover:cursor-pointer`} onClick={() => setIsDisplaySettings(false)}><img src={iconClose} alt="" className={`w-[12px]`} /></button>
         
            <div>
                <p className={`text-2xl font-bold mb-2`}>Update your profile</p>
                <p className={` text-neutral600 leading-[1.3] tracking-none`}>Personalise your account with your name and photo.</p>
            </div>
            <Form
                userNameInput={userNameInput}
                handleUserNameInput={handleUserNameInput}
                userImageFile={userImageFile}
                handleUpload={handleUpload}
                errorMessage={errorMessage}
            />
            <button className={`font-semibold text-neutral0 align-center bg-blue600 px-6 py-2 rounded-[10px] hover:cursor-pointer`}
            onClick={() => setIsSaveChanges(true)}> Save changes</button>
        </div>
    )
}
