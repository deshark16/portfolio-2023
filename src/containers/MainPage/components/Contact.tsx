import { memo } from "react";
import { MainPageContact } from "../shared/styled/StyledContact";
import { socialList } from "../contentList/social";
import { MainPageContactLink } from "../shared/styled/StyledContact/link";
import Image from "next/image";

const Contact = memo(() => {
  return (
    <MainPageContact>
      {
        socialList.map((social) => (
          <MainPageContactLink key={social.id} href={social.link}>
            <Image
              src={social.icon}
              alt={social.alt}
              width={30}
              height={30}
            />
          </MainPageContactLink>
        ))
      }
    </MainPageContact>
  )
})

Contact.displayName = "Contact"

export default Contact;