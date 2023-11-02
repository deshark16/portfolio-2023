import { MainPageContentText } from "../shared/styled/StyledContent/content";
import { MainPageContentMedia } from "../shared/styled/StyledContent/media";
import { ContentList } from "../shared/types/ContentList.types";

export const contentList: ContentList[] = [
  {
    id1: 1,
    id2: 2,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h2">
        <h2>Abdimuratov Abdulla</h2>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia />,
  },
  {
    id1: 3,
    id2: 4,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-text="right">
        <h3>Hello! Im Front-End Developer</h3>
      </MainPageContentText>
    ),
    children2: (
      <MainPageContentMedia data-media="right" />
    ),
  },
  {
    id1: 5,
    id2: 6,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-text="left">
        <h3>Im interested in programming and everything connected with it.</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="left" />,
  },
  {
    id1: 7,
    id2: 8,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-media="right" >
        <h3>Ready to implement excellent projects with wonderful people.</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="right" />,
  },
  {
    id1: 9,
    id2: 10,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-media="left">
        <h3 data-text-align="center">Free Landing Page</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="left"/>,
  },
  {
    id1: 11,
    id2: 12,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-media="right">
        <h3 data-text-align="center">FUTURE OF SPORT</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="right" />,
  },
  {
    id1: 13,
    id2: 14,
    gap: true,
    children1: (
      <MainPageContentText data-tag="h3" data-media="left">
        <h3 data-text-align="center">Mining Web Site</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="left"/>,
  },
  {
    id1: 15,
    id2: 16,
    gap: false,
    children1: (
      <MainPageContentText data-tag="h3" data-media="right">
        <h3 data-text-align="center">Architectural and construction company</h3>
      </MainPageContentText>
    ),
    children2: <MainPageContentMedia data-media="right"/>,
  },
];