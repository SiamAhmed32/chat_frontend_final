import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  //allow custom styling for the container
  className?: string;
  //sometimes we want a central form, not a full-width section
  isNarrow?: boolean;
}

const Container = ({
  children,
  className,
  isNarrow = false,
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        // 'container mx-auto px-[12px] md:px-[16px]
        isNarrow ? "max-w-screen-md" : "max-w-screen-2xl", //controlled widths
        className,
      )}
    >
      {children}
    </div>
  );
};
export default Container
