/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface EBookProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const EBook = ({ className, imgSrc, ...props }: EBookProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        className="pointer-events-none z-50 select-none"
        src="/ebook-img.webp"
        alt="ebook image"
      />
      <div className="absolute -z-10 inset-0">
        <img className="object-cover" src={imgSrc} alt="ebook image" />
      </div>
    </div>
  );
};

export default EBook;
