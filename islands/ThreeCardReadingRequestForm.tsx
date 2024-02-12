import { JSX } from "preact";
import { ThreeCardReadingRequest } from "@my-diviner/ai";
import { Action, classSet, Input } from "@my-diviner/atomic";

type ThreeCardReadingRequestFormProps = {
  onDivine: (req: ThreeCardReadingRequest) => void;
} & JSX.HTMLAttributes<HTMLFormElement>;

export function ThreeCardReadingRequestForm(
  props: ThreeCardReadingRequestFormProps,
) {
  const onSubmit = (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const readingReq = Object.fromEntries(
      formData.entries(),
    ) as ThreeCardReadingRequest;

    props.onDivine(readingReq);
  };

  return (
    <form
      onSubmit={onSubmit}
      {...props}
      class={classSet([
        "-:w-full -:py-2 -:my-2 -:mx-2",
      ], props)}
    >
      <div class="flex flex-col items-center text-left">
        <div class="w-full my-2">
          <label
            for="past"
            class="block uppercase tracking-wide font-bold mb-2 text-xl"
          >
            Past Card (1st card)
          </label>

          <Input
            id="past"
            name="past"
            type="text"
            required
            placeholder="Enter the first card drawn, for the past"
            class="w-full"
          />
        </div>

        <div class="w-full my-2">
          <label
            for="present"
            class="block uppercase tracking-wide font-bold mb-2 text-xl"
          >
            Present Card (2nd card)
          </label>

          <Input
            id="present"
            name="present"
            type="text"
            required
            placeholder="Enter the seconde card drawn, for the present"
            class="w-full"
          />
        </div>

        <div class="w-full my-2">
          <label
            for="future"
            class="block uppercase tracking-wide font-bold mb-2 text-xl"
          >
            Future Card (3rd card)
          </label>

          <Input
            id="future"
            name="future"
            type="text"
            required
            placeholder="Enter the third card drawn, for the future"
            class="w-full"
          />
        </div>

        <div class="max-w-sm mt-4">
          <Action type="submit">Read my Tarot</Action>
        </div>
      </div>
    </form>
  );
}
