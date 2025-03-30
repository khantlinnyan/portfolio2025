import { cn } from "@/lib/utils";
import FadeInOut from "../animation/fadein-out";

type Props = {
  title: string;
  subTitle?: string;
  className?: string;
};
const Heading = ({ title, subTitle, className }: Props) => {
  return (
    <FadeInOut className={cn(className)}>
      <h1 className="text-zinc-900 uppercase whitespace-break-spaces font-semibol text-lg lg:text-xl text-start">
        {title}
      </h1>
      <p className="text-primary text-sm lg:text-base">{subTitle}</p>
    </FadeInOut>
  );
};

export default Heading;
