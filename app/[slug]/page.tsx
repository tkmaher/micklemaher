import { Body } from "@/src/main";
export const runtime = 'edge';

async function Home({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="container">
      <Body route={ slug }/>
    </div>
  );
}

export default Home;