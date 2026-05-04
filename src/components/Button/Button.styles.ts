import styled from "styled-components"

type ButtonSize = "sm" | "md" | "lg"

const sizeStyles = {
  sm: `
    padding: 8px 16px;
    font-size: clamp(1rem, 3.8vw, 1.4rem);
  `,
  md: `
    padding: 12px 25px;
    font-size: clamp(1.15rem, 4.5vw, 1.8rem);
  `,
  lg: `
    padding: 14px 32px;
    font-size: clamp(1.25rem, 5vw, 2rem);
  `,
}

export const StyledButton = styled.button<{ $size: ButtonSize; $fullWidth?: boolean }>`
  background-color: #8F9C67;
   border: 2px solid transparent;
  border-radius: 63px;

  color: ${({ theme }) => theme.colors.branco1};
  font-family: ${({ theme }) => theme.fontsStyles.Cinzel};
  font-weight: bold;
  text-shadow: 0px 6px 5px rgba(0, 0, 0, 0.25);

  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
  max-width: 100%;
  white-space: nowrap;

  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.colors?.marrom1};
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors?.marrom1};
    transform: scale(1.03);
  }

  ${({ $size }) => sizeStyles[$size]}

  @media (max-width: 480px) {
    padding-inline: ${({ $size }) => ($size === "lg" ? "24px" : $size === "md" ? "20px" : "14px")};
    min-height: 44px;
  }
`
