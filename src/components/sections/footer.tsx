import { ArrowUpCircle } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-4 lg:px-36 h-12">
      <p className="text-sm lg:text-lg font-medium text-muted-foreground">
        Khant Lin Nyan © {new Date().getFullYear()}
      </p>
      <Link
        href={"#"}
        className="text-bass size-6 lg:size-12 text-muted-foreground"
      >
        <ArrowUpCircle className="" color="#6E6E73" />
      </Link>
    </div>
  );
};
export default Footer;
