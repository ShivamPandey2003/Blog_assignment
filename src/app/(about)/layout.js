import InsightRool from "@/src/components/About/InsightRool";

const insights = [
    "20+ Projects Completed",
    "3+ Years of Freelancing",
    "99% Client Satisfaction",
    "20K+ Subscribers",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
];

export default function AboutLayout({ children }) {
    return (
        <main className="w-full flex flex-col items-center justify-between">
            <InsightRool insights={insights} />
            {children}
        </main>
    )
}