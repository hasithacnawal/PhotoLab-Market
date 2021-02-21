import React from "react";

import Icon1 from "../../images/p1.jpg";
import Icon2 from "../../images/p2.jpg";
import Icon3 from "../../images/p3.jpg";

import {
  CategoryCard,
  CategoryContainer,
  CategoryH1,
  CategoryH2,
  CategoryIcon,
  CategoryWrapper,
} from "./CategoryElements";

//CSS Style should be added

const Category = () => {
  return (
    <CategoryContainer id="Category">
      <CategoryH1>Categories</CategoryH1>
      <CategoryWrapper>
        <CategoryCard>
          <CategoryIcon src={Icon1} />
          <CategoryH2>Nature</CategoryH2>
        </CategoryCard>

        <CategoryCard>
          <CategoryIcon src={Icon2} />
          <CategoryH2>WildLife</CategoryH2>
        </CategoryCard>

        <CategoryCard>
          <CategoryIcon src={Icon3} />
          <CategoryH2>Portrait</CategoryH2>
        </CategoryCard>

        {/* <CategoryCard>
                    <CategoryIcon src={Icon5} />
                    <CategoryH2>Cartoon</CategoryH2>
                </CategoryCard>
        
                <CategoryCard>
                    <CategoryIcon src={Icon5} />
                    <CategoryH2>Trees</CategoryH2>
                </CategoryCard> */}
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Category;
