(function loadVocabularyManifest() {
  const loaderUrl = new URL(document.currentScript.src, window.location.href);
  const vocabDirectory = new URL('./', loaderUrl);

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Unable to load ${url}`));
      document.head.appendChild(script);
    });
  }

  // The manifest is always refreshed; it supplies the shared version for group files.
  const manifestUrl = new URL('sets.js', vocabDirectory);
  manifestUrl.searchParams.set('v', Date.now().toString());

  window.vocabReady = loadScript(manifestUrl).then(() => {
    const sets = window.VOCAB_SETS || {};
    const groupScripts = Object.values(sets).flatMap(set =>
      (set.groupFiles || []).map(file => {
        const groupUrl = new URL(file, vocabDirectory);
        if (set.assetVersion) groupUrl.searchParams.set('v', set.assetVersion);
        return groupUrl;
      })
    );

    return Promise.all(groupScripts.map(loadScript)).then(() => sets);
  });
})();
