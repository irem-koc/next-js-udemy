import Hero from "@/components/hero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Hero
        imgAlt="reliability"
        imgUrl="/reliability.jpg"
        title="Reliability"
      />
    </div>
  );
};

export default page;
