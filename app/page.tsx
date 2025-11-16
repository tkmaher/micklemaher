import { Lefthalf, Righthalf } from "@/src/main";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Lefthalf/>
      <Righthalf/>
    </div>
  );
}
