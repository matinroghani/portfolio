import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export type SocialMedia = {
  id: string;
  title: string;
  href: string;
  icon: React.ElementType;
};

export const socialMedias: SocialMedia[] = [
  {
    id: "linkedin",
    title: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
  },
  {
    id: "github",
    title: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    id: "telegram",
    title: "Telegram",
    href: "https://t.me/your-username",
    icon: FaTelegramPlane,
  },
  {
    id: "email",
    title: "Email",
    href: "mailto:your@email.com",
    icon: MdEmail,
  },
];