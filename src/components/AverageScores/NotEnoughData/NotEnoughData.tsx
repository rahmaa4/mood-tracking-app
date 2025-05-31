export default function NotEnoughData({ type }: { type: "mood" | "sleep" }) {
    return (
        <>
            <p className={`text-xl font-semibold`}>{type === "mood" ? "Keep tracking!" : "Not enough data yet!"}</p>
            <p className={`text-xs`}>{type === "mood" ? "Log in 5 check-ins to see your average mood." : "Track 5 nights to view average sleep."}</p>
        </>
    )
}