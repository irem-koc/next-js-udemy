import Image from "next/image";

type Props = {
  imgAlt: string;
  imgUrl: string;
  title: string;
};

const Hero = ({ imgAlt, imgUrl, title }: Props) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={imgUrl} alt={imgAlt} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="flex justify-between items-center pt-48">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
