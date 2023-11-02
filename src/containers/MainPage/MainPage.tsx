import { memo } from "react";
import Header from "./components/Header";
import AudioPlayer from "./components/Audio";
import Content from "./components/Content";
import PortfolioFixed from "./components/PortfolioFixed";
import Contact from "./components/Contact";
import Sound from "./components/Sound";

const MainPage = memo(() => {
  return (
    <>
      <Header />
      <AudioPlayer />
      <Content />
      <PortfolioFixed />
      <Contact />
      <Sound />
    </>
  )
})

MainPage.displayName = "Main Page";

export default MainPage;