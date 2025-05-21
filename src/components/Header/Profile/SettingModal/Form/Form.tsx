import { useRef } from "react"

type FormProps = {
    userNameInput: string,
    handleUserNameInput: ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
    userImageFile: string, 
    handleUpload: ({ target }: React.ChangeEvent<HTMLInputElement>) => void, 
    errorMessage: React.JSX.Element;
}

export default function Form({userNameInput, userImageFile, handleUserNameInput, handleUpload, errorMessage} : FormProps) {
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    const handleClick = () => {//clicking button will simulate input file click, giving user ability to upload a file.
        inputRef.current && inputRef.current.click(); 
    }

    return (
        <div className={`mt-3 mb-8`}>
            <div className={`flex flex-col gap-1`}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={userNameInput}
                    className={`px-3 py-2 w-full outline-none border border-neutral600 boxShadow rounded-[10px]`}
                    onChange={handleUserNameInput}
                />
            </div>
            <div className={`flex gap-5 mt-6`}>
                <img src={userImageFile} className={`w-16 h-16`} />
                <div>
                    <div className={``}>
                        <p className={`mb-[3px]`}>Upload Image</p>
                        <p className={`text-neutral600 text-sm`}>Max 250KB, PNG or JPEG</p>
                    </div>
                    <p id="error-message" className={`text-xs text-red700 my-3`}>{errorMessage}</p>
                    <input ref={inputRef} type="file" name="avatar" accept="image/png , image/jpeg" style={{ display: "none" }} onChange={handleUpload} />
                    <button className={`py-1 px-4 border border-neutral300 rounded-lg boxShadow hover:cursor-pointer`} onClick={handleClick} >Upload</button>
                </div>
            </div>
        </div>
    )
}