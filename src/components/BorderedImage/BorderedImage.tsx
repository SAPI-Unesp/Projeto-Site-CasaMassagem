import { Wrap } from "./BorderedImage.styles";

interface BorderedImageProps {
  src: string;
  alt?: string;
  height?: string;
  borderRadius?: string;
  objectFit?: "cover" | "contain";
  mode?: "fill" | "intrinsic";
  borderWidth?: string;
}

export function BorderedImage({
  src,
  alt,
  height,
  borderRadius,
  objectFit = "cover",
  mode = "fill",
  borderWidth,
}: BorderedImageProps) {
  return (
    <Wrap
      height={height}
      borderRadius={borderRadius}
      objectFit={objectFit}
      mode={mode}
      borderWidth={borderWidth}
    >
      <img src={src} alt={alt} />
    </Wrap>
  );
}
