import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};
export const Container = ({ children, className, id }: Props) => {
  return (
    <section className={cn("mx-auto px-4 lg:px-36", className)} id={id}>
      {children}
    </section>
  );
};
