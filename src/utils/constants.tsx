import iconVeryHappy from "/assets/images/icon-veryHappy-color.svg";
import iconVeryHappyWhite from "/assets/images/icon-veryHappy-white.svg";
import iconVerySad from "/assets/images/icon-verySad-color.svg";
import iconVerySadWhite from "/assets/images/icon-verySad-white.svg";
import iconHappy from "/assets/images/icon-happy-color.svg";
import iconHappyWhite from "/assets/images/icon-happy-white.svg";
import iconSad from "/assets/images/icon-sad-color.svg";
import iconSadWhite from "/assets/images/icon-sad-white.svg";
import iconNeutral from "/assets/images/icon-neutral-color.svg";
import iconNeutralWhite from "/assets/images/icon-neutral-white.svg";


const veryHappy = {
    name: "Very Happy",
    coloredIcon:iconVeryHappy,
    whiteIcon: iconVeryHappyWhite,
    bgColor: "bg-amber300",
    score: 2
}

const verySad = {
    name: "Very Sad",
    coloredIcon: iconVerySad,
    whiteIcon: iconVerySadWhite,
    bgColor: "bg-red300",
    score: -2
}

const happy = {
    name: "Happy",
    coloredIcon: iconHappy,
    whiteIcon: iconHappyWhite,
    bgColor: "bg-green300",
    score: 1
}

const sad = {
    name: "Sad",
    coloredIcon: iconSad,
    whiteIcon: iconSadWhite,
    bgColor: "bg-indigo200",
    score: -1
}

const neutral = {
    name: "Neutral",
    coloredIcon: iconNeutral,
    whiteIcon: iconNeutralWhite,
    bgColor: "bg-blue300",
    score: 0
}
export const moods = [verySad, sad, neutral, happy, veryHappy] //stores objects - each containing display data for each mood.

export const iconSleep = (type: "trends" | "average") => 
    (
        <svg xmlns="http://www.w3.org/2000/svg" width={`${type === "average" ? "16" : "10"}`} height={`${type === "average" ? "16" : "10"}`} fill={`${type==="average" ? "hsla(0, 0%, 100%, 0.7)" : "#57577B"}`} viewBox="0 0 16 16"><path fill={`${type==="average" ? "hsla(0, 0%, 100%, 0.7)": "#57577B"}`} d="M10 .906c-.031.219-.125.531-.25.688L7.156 4.5H9c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5H5.5a.494.494 0 0 1-.5-.5v-.406c0-.188.094-.5.219-.657L7.812 1.5H6a.494.494 0 0 1-.5-.5V.5c0-.25.219-.5.5-.5h3.5c.25 0 .5.25.5.5v.406ZM7.25 8a.76.76 0 0 1 .75.75v.813c-.031.218-.156.53-.313.687L3.876 14H7.5c.25 0 .5.25.5.5v1c0 .281-.25.5-.5.5H1.75a.722.722 0 0 1-.75-.75v-.781c0-.219.125-.531.281-.688L5.094 10H2a.494.494 0 0 1-.5-.5v-1c0-.25.219-.5.5-.5h5.25Zm7.25-1c.25 0 .5.25.5.5v.406c-.031.219-.125.532-.25.688L12.156 11.5H14c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-3.5a.494.494 0 0 1-.5-.5v-.406c0-.188.094-.5.219-.656L12.813 8.5H11a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5h3.5Z"/></svg>
    )



const iconIncrease = (type: "mood" | "sleep") => {
    return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={`mt-1`} fill={type === "mood" ? "currentColor" : "hsla(0, 0%, 100%, 0.7)"} viewBox="0 0 16 16"><path fill={type === "mood" ? "currentColor" : "hsla(0, 0%, 100%, 0.7)"} d="M3.415 3.36c-.021-.19.149-.36.36-.36h8.871c.212 0 .36.149.36.36v8.87c0 .213-.17.383-.36.361l-.828.022c-.212 0-.382-.17-.36-.361l-.022-6.6L4.2 12.89a.347.347 0 0 1-.509 0l-.594-.595a.365.365 0 0 1 0-.509l7.236-7.236H3.755c-.191.021-.361-.148-.361-.36l.021-.828Z"/></svg>
    )
}



const iconSame = (type: "mood" | "sleep") => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" className={`mt-1`} fill={type === "mood" ? "currentColor" :"hsla(0, 0%, 100%, 0.7)"} viewBox="0 0 15 16"><path fill={type === "mood" ? "currentColor" : "hsla(0, 0%, 100%, 0.7)"} d="M7.539 1.478c.12-.15.36-.15.51 0L14.32 7.75c.15.15.15.36 0 .51l-6.272 6.272c-.15.15-.39.15-.51 0l-.6-.57c-.15-.15-.15-.39 0-.51l4.65-4.682H1.357c-.21 0-.36-.15-.36-.36v-.84c0-.18.15-.36.36-.36H11.59L6.938 2.557c-.15-.12-.15-.36 0-.51l.6-.57Z" /></svg>
)
}

const iconDecrease = (type: "mood" | "sleep") => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={`mt-1`} fill={type === "mood" ? "currentColor" : "hsla(0, 0%, 100%, 0.7)"} viewBox="0 0 16 16"><path fill={type === "mood" ? "currentColor" : "hsla(0, 0%, 100%, 0.7)"} d="M12.64 3.415c.19-.021.36.149.36.36v8.871c0 .212-.149.36-.36.36H3.77c-.213 0-.383-.17-.362-.36l-.02-.828c0-.212.169-.382.36-.36l6.6-.022L3.11 4.2a.347.347 0 0 1 0-.509l.595-.594a.365.365 0 0 1 .509 0l7.236 7.236V3.755c-.021-.191.149-.361.36-.361l.828.021Z"/></svg>
)
}


export const increaseTrendEl = (type: "mood" | "sleep") => {
    return (
        <>
            {iconIncrease(type)}
            <p className={`${type === "sleep" && "font-light text-neutral0 opacity-70"}`}>Increase from previous 5 check-ins</p>
        </>
    )
}

export const sameTrendEl = (type: "mood" | "sleep") => {
    return (
        <>
            {iconSame(type)}
            <p className={`${type === "sleep" && " font-light text-neutral0 opacity-70"}`}>Same as the previous 5 check-ins</p>
        </>
    )
}

export const decreaseTrendEl = (type: "mood" | "sleep") => {
    return (
        <>
            {iconDecrease(type)}
            <p className={`${type === "sleep" && " font-light text-neutral0 opacity-70"}`}>Decrease from the previous 5 check-ins</p>
        </>
    )
}

export const months =  [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const returnErrorMessage = (errorType: "both" | "size" | "type") => {
    const errorBoth = "Invalid File";
    const errorSize = "File too large";
    const errorFileType = "Invalid file type"
    return (
        <>
            {errorType === "size" ? errorSize : errorType === "type"? errorFileType : errorBoth}. Please upload a valid file.
        </>
    )
}