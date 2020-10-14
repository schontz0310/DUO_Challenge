import styled, { css } from 'styled-components/native';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 60px 24px 60px;
  background: #8900ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageHeader = styled.Image`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  filter: brightness(0);
`;

export const User = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
  padding: 0 10px;
`;

export const FilterContainer = styled.View`
  padding: 0 24px;
  margin-top: -28px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3d3d4d;
  padding: 0 20px;
`;

export const CategoryContainer = styled.View`
  margin-top: 40px;
`;

export const CategorySlider = styled.ScrollView`
  margin-top: 16px;
`;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background-color: #f0f0f5;
  border: 2px;
  border-color: #f0f0f5;
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  ${props =>
    props.isSelected &&
    css`
      border-color: #c72828;
      background-color: #ffebeb;
    `}
`;

export const CategoryItemTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #6c6c80;
`;

export const FoodsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;
`;

export const FoodList = styled.View`
  flex: 1;
  padding: 0 20px;
  margin-top: 16px;
`;

export const Food = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const FoodImageContainer = styled.View`
  background: #ffb84d;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;
  height: 100%;
`;

export const FoodContent = styled.View`
  flex: 1;
  padding: 16px;
`;

export const FoodTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #3d3d4d;
`;
export const FoodDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;
  margin-top: 6px;
  color: #3d3d4d;
`;

export const FoodPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  margin-top: 8px;
  font-weight: 600;
  color: #39b100;
`;
