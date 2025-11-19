import { Body } from "@/src/main";

// Written by Tomasz Maher, 2025.
// https://otherseas1.com

async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container">
      <Body route={ slug }/>
    </div>
  );
}

export default Home;