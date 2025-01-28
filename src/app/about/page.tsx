import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "About Page",
    description: "This is about page",
};
export default function About() {
    return <h1>About Me</h1>
}