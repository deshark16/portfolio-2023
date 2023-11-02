import { memo } from "react";
import { MainPageHeader } from "../shared/styled/StyledMainPageHeader";
import { MainPageHeaderWrapper } from "../shared/styled/StyledMainPageHeader/wrapper";
import { MainPageHeaderBody } from "../shared/styled/StyledMainPageHeader/body";
import { MainPageHeaderLogo } from "../shared/styled/StyledMainPageHeader/logo";
import logoAsset from "../shared/assets/favicon/favicon-32x32.webp";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = memo(() => {
  return (
    <MainPageHeader>
      <MainPageHeaderWrapper>
        <MainPageHeaderBody>
          <MainPageHeaderLogo>
            <Image src={logoAsset} alt="Logo" />
          </MainPageHeaderLogo>
          <Navbar />
        </MainPageHeaderBody>
      </MainPageHeaderWrapper>
    </MainPageHeader>
  );
});

Header.displayName = "Main Page Header";

export default Header;
