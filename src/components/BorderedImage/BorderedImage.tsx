import { Wrap } from "./BorderedImage.styles";

interface BorderedImageProps {
  src: string;
  alt?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: 'cover' | 'contain';
  mode?: "fill" | "intrinsic";
}

export function BorderedImage({ src, alt, height, borderRadius, objectFit = 'cover', mode = 'fill'} : BorderedImageProps) {
  return (
    <Wrap height={height} borderRadius={borderRadius} objectFit={objectFit} mode={mode}>
      <img src={src} alt={alt} />
    </Wrap>
  );
}