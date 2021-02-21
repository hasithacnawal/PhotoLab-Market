import React from 'react';

import Icon1 from '../../images/flowers.jpg';
import Icon2 from '../../images/love.jpg';
import Icon3 from '../../images/wallpaper.jpg';

//CSS Style should be added

const  Category = () => {
    return (
        <CategoryContainer id="Category" >
            <CategoryH1>Categories</CategoryH1>
            <CategoryWrapper>
                
                <CategoryCard>
                    <CategoryIcon src={Icon1} />
                    <CategoryH2>Flowers</CategoryH2>
                </CategoryCard>

                <CategoryCard>
                    <CategoryIcon src={Icon2} />
                    <CategoryH2>Love</CategoryH2>
                </CategoryCard>

                <CategoryCard>
                    <CategoryIcon src={Icon3} />
                    <CategoryH2>Wallpapers</CategoryH2>
                </CategoryCard>

            </CategoryWrapper>
        </CategoryContainer>
    );
};

export default  Category;
