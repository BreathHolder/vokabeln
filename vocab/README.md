# Vocabulary group files

Each vocabulary group is a standalone JavaScript file. This format works even
when the main HTML file is opened directly from disk.

To add a group:

1. Copy `group-3.js` to a file such as `group-4.js`.
2. Change the group key, name, description, and vocabulary items.
3. Load the file before the app script in `index.html`:

   ```html
   <script src="vocab/group-3.js"></script>
   <script src="vocab/group-4.js"></script>
   <script>
     // The app starts here.
   </script>
   ```

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
