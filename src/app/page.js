
import Hero from "./components/Hero";
import Projects from "./components/Projects";


import WhatWeDo from "./components/WhatWeDo";
import CoA from "./components/CoA";



export default function Home() {
  const imageUrl1 = 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1247&q=80';
  const text1 = "With ingenious tools and boundless opportunities, this startup empowers freelancers to redefine their creative destinies.";
  const imageUrl2 = 'https://images.unsplash.com/photo-1517971129774-8a2b38fa128e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80';
  const text2 = "Yo, check out this startup, it's like a comedy club for freelancers, bringing laughter and success together!";


  return (


    <main>
      <Hero />
      <CoA imageUrl={imageUrl1} text={text1} />
      <Projects />
      <CoA imageUrl={imageUrl2} text={text2} />
      <WhatWeDo />

    </main>
  );
}
