import Hero from "@/components/hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero imgAlt="home" imgUrl="/performance.jpg" title="Performance" />
    </div>
  );
};

export default page;
