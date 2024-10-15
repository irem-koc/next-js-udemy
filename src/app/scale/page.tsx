import Hero from "@/components/hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero imgAlt="scale" imgUrl="/scale.jpg" title="Scale" />
    </div>
  );
};

export default page;
