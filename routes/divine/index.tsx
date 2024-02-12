import { PageProps } from "$fresh/server.ts";
import { Diviner } from "../../islands/Diviner.tsx";

export default function Devine(props: PageProps) {
  return (
    <div>
      <Diviner />
    </div>
  );
}
