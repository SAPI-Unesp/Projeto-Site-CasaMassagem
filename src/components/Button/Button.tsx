import { StyledButton } from "./Button.styles"

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export function Button({ children, onClick, size = "md", fullWidth = false }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} $size={size} $fullWidth={fullWidth}>
      {children}
    </StyledButton>
  )
}