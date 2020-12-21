import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton'

export const CollectionItemContainer = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.7;
    }

    button {
      opacity: 0.75;
      display: flex;
    }
  }
`;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

export const AddButton = styled(CustomButton)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  top: 120px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position                               : center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin: 0 20px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  margin-right: 30px;
`;
