import { Wrap } from "./BorderedImage.styles";

interface BorderedImageProps {
  src: string;
  alt?: string;
  height?: string;
  borderRadius?: string;
}

export function BorderedImage({ src, alt, height, borderRadius} : BorderedImageProps) {
  return (
    <Wrap height={height} borderRadius={borderRadius}>
      <img src={src} alt={alt} />
    </Wrap>
  );
}