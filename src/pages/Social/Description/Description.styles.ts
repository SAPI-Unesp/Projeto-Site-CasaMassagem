import styled from "styled-components";

const colors = {
  title: "#8B5A3C",
  subtitle: "#A48774",
  text: "#6D5F52",
  greenFrame: "#7C8C61",
  beigeFrame: "#E9E2D0",
  boxBg: "#F7F0E3",
};

export const SectionContainer = styled.section`
  width: 100%;
  max-width: 900px; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  background: transparent;
  font-family: "Times New Roman", Times, serif;
`;


export const GreenFrameWrapper = styled.div`
  background-color: ${colors.greenFrame};
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BeigeBorderFix = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid ${colors.beigeFrame};
  border-radius: 35px;

  overflow: hidden; 
  
  background-color: #fff;
  display: flex;
  position: relative;
`;


export const SectionTitle = styled.h1`
  font-size: 3.8rem; 
  text-align: center;
  color: ${colors.title};
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 3rem;
  letter-spacing: 3px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const Subtitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem; 
  font-weight: 600;
  color: ${colors.subtitle};
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
`;

export const MotivationBox = styled.div`
  background: ${colors.boxBg};
  padding: 4rem 3.5rem 6rem 3.5rem; 
  border-radius: 40px;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 8px 20px rgba(139, 90, 60, 0.08);
  position: relative;
  z-index: 1;
`;

export const MotivationText = styled.p`
  font-size: 1.4rem; 
  color: ${colors.text};
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 2rem;
  font-weight: 500;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImagesRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: -5rem; 
  padding: 0 2rem;
  z-index: 2;
`;

export const ImageCard = styled.div`
  position: relative;
  width: 90%;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));

  &:nth-child(odd) {
    align-self: flex-start;
    transform: rotate(-2deg);
  }

  &:nth-child(even) {
    align-self: flex-end;
    transform: rotate(2deg) translateY(-40px);
  }
`;

export const ImageCaption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 16px;

  padding: 1rem;
  font-size: 1.1rem; 
  
  color: #fff;
  font-style: italic;
  text-align: center;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.8);
`;