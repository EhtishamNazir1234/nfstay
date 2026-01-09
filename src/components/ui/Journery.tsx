import Image from "next/image";
import { CommonGradientBtn } from "../../../public/common/gradient-button";
import rect from "./../../../public/assets/Rectanglle.png";

export function JourneySection() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-[#ecfdf9] via-white to-[#20E19F] px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                Our Journey Of <br />
                Growth
                <span className="ml-2 bg-gradient-to-r from-[#9945FF] to-[#20E19F] bg-clip-text text-transparent">
                  Since 2021
                </span>
              </h2>
              <p className="max-w-[520px] text-lg text-[#5e626d] leading-relaxed">
                From London To Liverpool And Manchester, NFSTay Has Rapidly
                Grown, Now Featuring Over 120 Properties. Join Us As We Chart A
                New Course In The Travel Industry.
              </p>
            </div>
            <div className="flex gap-4">
              <CommonGradientBtn icon label="Explore Properties" />
              <CommonGradientBtn icon label="Visit Our dApp" />
            </div>
          </div>
          <div className="h-[620px]">
            <div className="grid h-full grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="relative aspect-[3/5] mb-35 w-full overflow-hidden rounded-2xl">
                  <Image src={rect} alt="" fill className="object-fit" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[4/6] overflow-hidden rounded-b-2xl">
                  <Image src={rect} alt="" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3.5/6] overflow-hidden rounded-t-2xl">
                  <Image src={rect} alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative aspect-[8/5] overflow-hidden rounded-b-2xl">
                  <Image src={rect} alt="" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/5] overflow-hidden rounded-2xl">
                  <Image src={rect} alt="" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image src={rect} alt="" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
