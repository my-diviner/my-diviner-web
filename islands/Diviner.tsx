import { JSX } from "preact";
import { Action, classSet, Input } from "@my-diviner/atomic";
import { Divined } from "./Divined.tsx";
import { ThreeCardReadingRequestForm } from "./ThreeCardReadingRequestForm.tsx";
import { useState } from "preact/hooks";
import { ThreeCardReadingRequest } from "@my-diviner/ai";
import { LoadingIcon } from "$fathym/atomic-icons";

type DivinerProps = JSX.HTMLAttributes<HTMLDivElement>;

export function Diviner(props: DivinerProps) {
  const [reading, setReading] = useState<ThreeCardReadingRequest | undefined>(
    undefined,
  );

  const startNewReading = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    setReading(undefined);
  };

  return (
    <div
      {...props}
      class={classSet(["flex flex-col md:flex-row gap-8 py-6 m-4"], props)}
    >
      <div class="flex flex-col items-center max-w-100 mx-auto transition-all duration-500">
        <img src="/my-diviner-icon-alpha.png" />

        {!reading && (
          <ThreeCardReadingRequestForm class="max-w-sm" onDivine={setReading} />
        )}

        {reading && (
          <div class="w-full py-2 my-2 mx-2">
            <div class="flex flex-col items-center text-center">
              <div class="w-full my-4">
                <h2
                  for="past"
                  class="block uppercase tracking-wide mb-2 text-lg"
                >
                  Past Card (1st card)
                </h2>

                <h3 class="font-bold text-xl">{reading.past}</h3>
              </div>

              <div class="w-full my-2">
                <h2
                  for="present"
                  class="block uppercase tracking-wide mb-2 text-lg"
                >
                  Present Card (2nd card)
                </h2>

                <h3 class="font-bold text-xl">{reading.present}</h3>
              </div>

              <div class="w-full my-2">
                <h2
                  for="future"
                  class="block uppercase tracking-wide font-bold mb-2 text-lg"
                >
                  Future Card (3rd card)
                </h2>

                <h3 class="font-bold text-xl">{reading.future}</h3>
              </div>

              <div class="max-w-sm mt-4">
                <Action onClick={startNewReading}>Start new reading</Action>
              </div>
            </div>
          </div>
        )}
      </div>

      {reading && (
        <div class="flex-1">
          <Divined reading={reading} />
        </div>
      )}
    </div>
  );
}
