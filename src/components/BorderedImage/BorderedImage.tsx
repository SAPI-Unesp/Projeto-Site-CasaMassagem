import { Wrap } from "./BorderedImage.styles";

interface BorderedImageProps {
  src: string;
  alt?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: 'cover' | 'contain';
}

export function BorderedImage({ src, alt, height, borderRadius, objectFit = 'cover'} : BorderedImageProps) {
  return (
    <Wrap height={height} borderRadius={borderRadius} objectFit={objectFit}>
      <img src={src} alt={alt} />
    </Wrap>
  );
}