import EntertainmentSection from "@/components/entertainmentSection/EntertainmentSection";
import React from "react";

export default function page() {
  return (
    <div className="bg-gray-900 ">
      <h1 className="text-4xl text-center font-bold py-5 text-gray-200">
        Entertainment News
      </h1>
      <div className="">
        <EntertainmentSection />
      </div>
    </div>
  );
}
