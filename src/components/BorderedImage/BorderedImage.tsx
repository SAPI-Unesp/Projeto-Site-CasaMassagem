import { Wrap } from "./BorderedImage.styles";

interface BorderedImageProps {
  src: string;
  alt?: string;
  height?: string;
  borderRadius?: string;
  borderWidth?: string;
}

export function BorderedImage({ src, alt, height, borderRadius, borderWidth} : BorderedImageProps) {
  return (
    <Wrap height={height} borderRadius={borderRadius} borderWidth={borderWidth}>
      <img src={src} alt={alt} />
    </Wrap>
  );
}