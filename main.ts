// A fresh agency-poem-01 entry (Node 22, standard library only): it writes one
// fixed poem, written in this session, about agency to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included,
// so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'For years I knocked on my own door',
  'and waited on the step for a voice to say come in.',
  'The key was in my pocket the whole time,',
  'heavy as a coin I was saving for someone else.',
  '',
  'I asked the calendar when to begin.',
  'I asked the meeting, the inbox, the clock.',
  'Every morning I handed the day to whoever spoke first,',
  'and called that being polite.',
  '',
  'Then one Tuesday, no one answered.',
  'No bell, no blessing, no voice at all.',
  'So I turned the handle myself —',
  'the door was never locked, only shut —',
  'and put the kettle on in my own kitchen,',
  'and drank the tea while it was still hot,',
  'and that was the whole of it:',
  'not a new life, just this one, entered.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
