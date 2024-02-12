// deno-lint-ignore-file no-explicit-any
import { Handlers } from "$fresh/server.ts";
import { delay } from "$std/async/delay.ts";
import {
  ServerSentEventMessage,
  ServerSentEventStream,
} from "$std/http/server_sent_event_stream.ts";
import { TarotDiviner, ThreeCardReadingRequest } from "@my-diviner/ai";

export const handler: Handlers<any, any> = {
  async POST(req, _ctx) {
    const diviner = new TarotDiviner();

    const readingReq: ThreeCardReadingRequest = await req.json();

    const divined = await diviner.ThreeCardReading(readingReq);

    const body = new ReadableStream({
      async start(controller) {
        let reading = "";

        for await (const { content } of divined) {
          reading += content;

          controller.enqueue({
            id: Date.now(),
            event: "message",
            data: reading,
          } as ServerSentEventMessage);

          await delay(10);
        }

        console.log(reading);

        controller.close();
      },
      cancel() {
        // divined.cancel();
      },
    });

    return new Response(body.pipeThrough(new ServerSentEventStream()), {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  },
};
