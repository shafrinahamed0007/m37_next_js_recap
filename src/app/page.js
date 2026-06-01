import Image from "next/image";
import Banner from "./components/HomePage/Banner";

export default function Home() {
  return (
   <div>
    <h2 className="text-blue-500 text-2xl font-bold">NEXT JS Home Page</h2>
    <Banner />
   </div>
  );
}
