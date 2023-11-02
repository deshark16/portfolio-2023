import { FC, useEffect } from "react";
import { MainPageContentWrapper } from "../shared/styled/StyledContent/wrapper";
import { MainPageContentThreeD } from "../shared/styled/StyledContent/threeD";
import { MainPageContentThreeDFrame } from "../shared/styled/StyledContent/frame";
import { MainPageContentText } from "../shared/styled/StyledContent/content";
import { contentList } from "../contentList/contentList";
import { ThreedScroll } from "../shared/utils/threedScroll";

const Content: FC = () => {
  useEffect(() => {
    const frameScroll = new ThreedScroll({
      frameElements: "frameClasses",
    });

    if (document.readyState === "complete") {
      frameScroll._handleScroll();
    } else {
      document.body.addEventListener('scroll', frameScroll._handleScroll)
      return () => {
        document.body.removeEventListener('scroll', frameScroll._handleScroll)
      }
    }
  }, []);

  return (
    <>
      <MainPageContentWrapper>
        <MainPageContentThreeD>
          {contentList.map((contentItem) => (
            <>
              <MainPageContentThreeDFrame
                className="frameClasses"
                key={contentItem.id1}
              >
                {contentItem.children1}
              </MainPageContentThreeDFrame>

              <MainPageContentThreeDFrame
                className="frameClasses"
                data-bg="frame"
                key={contentItem.id2}
              >
                <MainPageContentText>
                  {contentItem.children2}
                </MainPageContentText>
              </MainPageContentThreeDFrame>

              {contentItem.gap && (
                <MainPageContentThreeDFrame className="frameClasses" />
              )}
            </>
          ))}
        </MainPageContentThreeD>
      </MainPageContentWrapper>
    </>
  );
};

Content.displayName = "Content";

export default Content;
