import Link from "next/link";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimony";

export default function Home() {
  return (
    window.location.replace("/share");
  );
}
