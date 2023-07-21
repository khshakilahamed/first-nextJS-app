import Image from "next/image";
import next from "@/assets/images/next.png";

const Album = () => {
  return (
    <div>
      <h1>This image is using img tag</h1>
      <img
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        alt="nextJs"
        width="100%"
      />

      <h1>This image is using Image component</h1>
      <Image
        width={500}
        height={500}
        src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/6e87d/next-js-logo.png"
        alt="next js"
        layout="responsive"
      />

      <h1>This image is using Image component and local Image</h1>
      <Image
        width={500}
        height={500}
        src={next}
        alt="next js"
        layout="responsive"
      />
    </div>
  );
};

export default Album;
