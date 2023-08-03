import { useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import reading from "../../../lotties/reading.json";

export function AnimationReading() {
  const iconRef = useRef<LottieRefCurrentProps | null>(null);
  return (
    <Lottie
      lottieRef={iconRef}
      style={{ width: 400, height: 300, marginBottom: 10 }}
      animationData={reading}
      loop={true}
      autoplay={true}
    />
  );
}
