import { memo } from "react";
import { MainPageContentWrapper } from "../shared/styled/StyledContent/wrapper";
import { MainPageContentThreeD } from "../shared/styled/StyledContent/threeD";
import { MainPageContentThreeDFrame } from "../shared/styled/StyledContent/frame";
import { MainPageContentText } from "../shared/styled/StyledContent/content";
import { contentList } from "../contentList/contentList";

const Content = memo(() => {
  return (
    <>
      <MainPageContentWrapper>
        <MainPageContentThreeD>
          {contentList.map((contentItem) => (
            <>
              <MainPageContentThreeDFrame key={contentItem.id1}>
                {contentItem.children1}
              </MainPageContentThreeDFrame>

              <MainPageContentThreeDFrame data-bg="frame" key={contentItem.id2}>
                <MainPageContentText>
                  {contentItem.children2}
                </MainPageContentText>
              </MainPageContentThreeDFrame>

              {contentItem.gap && <MainPageContentThreeDFrame />}
            </>
          ))}
        </MainPageContentThreeD>
      </MainPageContentWrapper>
    </>
  );
});

Content.displayName = "Content";

export default Content;
