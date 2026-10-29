# Vocabulary set and group files

`sets.js` defines each named vocabulary set. Every set owns a `groups` object,
so separate sets can each have a Group 1 without overwriting one another. The
standalone JavaScript files work even when the main HTML file is opened directly
from disk.

To add a set:

1. Add an entry to `sets.js` with a unique ID, display name, default group, and
   an empty `groups` object. Give it an `assetVersion` and a `groupFiles` list.
2. Create one or more group files for the set. Prefix filenames with the set ID
   when needed to keep them distinct from existing files.
3. Attach each group to its set:

   ```html
   window.VOCAB_SETS['new-set-id'].groups['1'] = {
     name: 'Group 1',
     description: 'A short description.',
     items: []
   };
   ```
4. Add each new group filename to that set's `groupFiles` list. The vocabulary
   loader imports it automatically; `index.html` does not need to change.

To add a group to an existing set, create its group file, attach it to that
set's `groups` object, and add its filename to `groupFiles`. Bump `assetVersion`
when changing an existing group file so browsers fetch the new version.

Each vocabulary item uses these fields:

```js
{
  id: 1,
  english: 'The English prompt',
  german: 'Die deutsche Antwort.',
  cleanGerman: 'Die deutsche Antwort',
  phonetic: 'dee DOYT-sheh ...',
  context: 'A short usage label',
  notes: 'Capitalization, spelling, or grammar reminders.'
}
```

`cleanGerman` is the accepted answer without final punctuation. The app accepts
either it or the exact `german` value in spelling mode.
