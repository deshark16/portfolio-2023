import { MouseEvent, memo, useState } from "react";
import { MainPageNavbar } from "../shared/styled/StyledNavbar";
import { MainPageNavbarList } from "../shared/styled/StyledNavbar/list";
import { MainPageNavbarItem } from "../shared/styled/StyledNavbar/item";
import { MainPageNavbarLink } from "../shared/styled/StyledNavbar/link";
import { navbarItems } from "../contentList/navbarList";

const Navbar = memo(() => {
  const [activeLink, setActiveLink] = useState(1);

  function handleActiveLink(event: MouseEvent<HTMLLIElement>, itemId: number) {
    event.preventDefault();
    setActiveLink(itemId)
  }

  return (
    <MainPageNavbar>
      <MainPageNavbarList>
        {
          navbarItems.map((navItem) => (
           <MainPageNavbarItem
            key={navItem.id}
            onClick={(event) => handleActiveLink(event, navItem.id)}
          >
              <MainPageNavbarLink
                $activeLink={activeLink}
                $navId={navItem.id}
                href={navItem.link}
              >
                {navItem.title}
              </MainPageNavbarLink>
           </MainPageNavbarItem> 
          ))
        }
      </MainPageNavbarList>
    </MainPageNavbar>
  )
})

Navbar.displayName = "Navbar"

export default Navbar;