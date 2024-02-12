import { type PageProps } from "$fresh/server.ts";
import { CSS } from "$gfm";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-project.</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100">
        <Component />
      </body>
    </html>
  );
}
