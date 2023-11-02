import { memo } from "react";
import { MainPagePortfolioFixed } from "../shared/styled/StyledPortfolioFixed";
import { MainPagePortfolioFixedBody } from "../shared/styled/StyledPortfolioFixed/body";
import { portfolioFixedList } from "../contentList/portfolioFixedList";
import { MainPagePortfolioFixedLink } from "../shared/styled/StyledPortfolioFixed/link";

const PortfolioFixed = memo(() => {
  return (
    <MainPagePortfolioFixed>
      <MainPagePortfolioFixedBody>
        {
          portfolioFixedList.map((project) => (
            <MainPagePortfolioFixedLink key={project.id} href={project.link}>
              {project.title}
            </MainPagePortfolioFixedLink>
          ))
        }
      </MainPagePortfolioFixedBody>
    </MainPagePortfolioFixed>
  )
})

PortfolioFixed.displayName = "Portfolio Fixed"

export default PortfolioFixed;