import iconVeryHappy from "../assets/images/icon-veryHappy-color.svg";
import iconVeryHappyWhite from "../assets/images/icon-veryHappy-white.svg";
import iconVerySad from "../assets/images/icon-verySad-color.svg";
import iconVerySadWhite from "../assets/images/icon-verySad-white.svg";
import iconHappy from "../assets/images/icon-happy-color.svg";
import iconHappyWhite from "../assets/images/icon-happy-white.svg";
import iconSad from "../assets/images/icon-sad-color.svg";
import iconSadWhite from "../assets/images/icon-sad-white.svg";
import iconNeutral from "../assets/images/icon-neutral-color.svg";
import iconNeutralWhite from "../assets/images/icon-neutral-white.svg";

export const hoursYAxis = ["0-2 hours", "3-4 hours", "5-6 hours", "7-8 hours", "9+ hours"].reverse();

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

