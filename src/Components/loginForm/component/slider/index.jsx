import { Carousel } from "@mantine/carousel";
import { Center, Image, Space, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Slider1 from "../../../asset/images/image1.png";
import Slider2 from "../../../asset/images/image2.png";
import Slider3 from "../../../asset/images/image3.png";
import Slider4 from "../../../asset/images/image4.png";

const assets = [
  {
    src: Slider1,
    title: "Welcome to Back!",
    text: "start managing your finance faster and better",
    sunText: "start managing your finance faster and better",
  },
  {
    src: Slider2,
    title: "Welcome to Back!",
    text: "start managing your finance faster and better",
    sunText: "start managing your finance faster and better",
  },
  {
    src: Slider3,
    title: "Welcome to Back!",
    text: "start managing your finance faster and better",
    sunText: "start managing your finance faster and better",
  },
  {
    src: Slider4,
    title: "Welcome to Back!",
    text: "start managing your finance faster and better",
    sunText: "start managing your finance faster and better",
  },
];

export default function Slider() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  return (
    <Carousel
      sx={{ maxWidth: 600 }}
      mx="auto"
      loop
      withIndicators
      height={700}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        indicator: {
          width: 5,
          backgroundColor: "black",
          height: 4,
          transition: "width 250ms ease",

          "&[data-active]": {
            width: 20,
          },
        },
      }}
    >
      {assets.map((item) => {
        return (
          <Carousel.Slide>
            <Image src={item.src} />
            <Center>
              <div>
                <Text size="lg" weight={"bold"}>
                  {item.title}
                </Text>
                <Space h="xs" />
                <Text size="sm" c="dimmed" weight={"normal"}>
                  {item.text}
                </Text>
                <Text size="xs" c="dimmed" weight={"normal"}>
                  {item.sunText}
                </Text>
              </div>
            </Center>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
