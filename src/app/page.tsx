import React from "react";
import Hero from "@/components/Hero";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
// import Background from "@/components/ui/novatrixbg";
const page = () => {
  return (
    <>
      <Hero />
      <Section2 />
      {/* <div className="relative z-10 h-[500px] w-full overflow-hidden rounded-lg border bg-background">
        <Background />
      </div> */}
      <Section3 />
      <Section4 />
    </>
  );
};

export default page;
