import { JSX } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { render } from '$gfm';
import { fetchEventSource } from 'npm:@microsoft/fetch-event-source';
import { LoadingIcon } from '$fathym/atomic-icons';
import { classSet } from '@my-diviner/atomic';
import { ThreeCardReadingRequest } from '@my-diviner/ai';

type DivinedProps = {
  reading: ThreeCardReadingRequest;
} & JSX.HTMLAttributes<HTMLDivElement>;

export function Divined(props: DivinedProps) {
  const [reading, setReading] = useState('');

  useEffect(() => {
    fetchEventSource(`/api/divine/three-card`, {
      method: 'POST',
      body: JSON.stringify(props.reading),
      onmessage: (e) => {
        setReading(reading + e.data);
      },
      onopen: (res) => {
        console.log('open');

        return Promise.resolve();
      },
      openWhenHidden: true,
    });
  }, []);

  return (
    <>
      {reading && (
        <div
          {...props}
          class={classSet(
            [
              'm-auto py-6 w-full whitespace-pre-line markdown-body bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100',
            ],
            props
          )}
          dangerouslySetInnerHTML={{ __html: render(reading) }}
        />
      )}

      {!reading && (
        <LoadingIcon class="w-20 h-20 text-blue-500 animate-spin m-auto" />
      )}
    </>
  );
}
