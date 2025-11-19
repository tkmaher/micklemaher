import { Body } from "@/src/main";


async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container">
      <Body route={ slug }/>
    </div>
  );
}

export default Home;