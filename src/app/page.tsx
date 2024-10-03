/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import Image from "next/image";
import { Check } from "lucide-react";
import { Star } from "lucide-react";
import EBook from "@/components/EBook";
export default function Home() {
  return (
    <div className="bg-background">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="lg:block">
                <img
                  className="size-40 md:size-60 lg:size-80 rounded-full"
                  src="/femme-devoilee-logo.png"
                  alt="femme-devoilee-logo"
                />
              </div>
              <h1 className="relative w-fit tracking-tight text-balance font-bold font-poiret !leading-tight text-pink-950 text-5xl md:text-6xl lg:text-7xl">
                FemmeDévoilée
              </h1>
              <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                alias ex odit ut eum, perferendis delectus minima veniam neque
                temporibus aperiam, hic reprehenderit repudiandae quod?
              </p>
              <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                <div className="space-y-2">
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-pink-950" />
                    Éveille ton bonheur
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-pink-950" />
                    Une pincée d&apos;humour magique
                  </li>
                  <li className="flex gap-1.5 items-center text-left">
                    <Check className="size-5 shrink-0 text-pink-950" />
                    Inspirations & motivations
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-5">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-primary"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-primary"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-primary"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block size-16 rounded-full ring-2 ring-primary"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <img
                    className="inline-block object-cover size-16 rounded-full ring-2 ring-primary"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex items-center gap-0.5">
                    <Star className="size-4 text-pink-950" />
                    <Star className="size-4 text-pink-950" />
                    <Star className="size-4 text-pink-950" />
                    <Star className="size-4 text-pink-950" />
                    <Star className="size-4 text-pink-950" />
                  </div>
                  <p>
                    <span className="font-semibold">1,250</span> happy
                    customers!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
            <div className="relative md:max-w-xl border-2 border-primary rounded-xl">
              <img
                className="absolute w-20 -left-6 -bottom-6 select-none"
                src="/line.png"
                alt="line"
              />
              <EBook
                className="w-80 lg:w-96 rounded-xl"
                imgSrc="/testimonials/1.jpg"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
