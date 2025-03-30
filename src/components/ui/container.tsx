import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: Props) => {
  return (
    <section className={cn("mx-auto px-4 lg:px-36", className)}>
      {children}
    </section>
  );
};
