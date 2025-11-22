import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  background: transparent;


  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center; 
  gap: 4rem;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

export const ImageSideWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  display: flex;
  justify-content: center;

  .main-image {
    width: 100%;
    height: auto;
    border-radius: 18px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const ContentSideWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;

  .subtitle {
    margin-top: 1rem;
    font-size: 1.05rem;
    font-weight: 600;
    color: #5a4d43;
    letter-spacing: 1px;
    text-align: left;
  }

  @media (max-width: 968px) {
    align-items: center;
    .subtitle {
        text-align: center;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: #5a4d43;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  line-height: 1.2;

  @media (max-width: 968px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;

export const MotivationBox = styled.div`
  background: #efe9dd;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  margin-top: 1.5rem;
  border: 2px solid #d8cbb8;
  box-sizing: border-box;
`;

export const MotivationText = styled.p`
  font-size: 1rem;
  color: #6b5f52;
  line-height: 1.6rem;
  text-align: left;
`;

export const ImagesRow = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const ImageCard = styled.div`
  position: relative;
  flex: 1;

  & > div {
    width: 100%;
    height: 100%;
  }
`;

export const ImageCaption = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  padding: 0.4rem 0.8rem;
  background: rgba(90, 77, 67, 0.85);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  z-index: 2;
`;