## Vue

Install Vue CLI(equivalent to CRA) globally:

`npm install -g @vue/cli`

Create a project with the preset used for this demo:

`vue create -p preset.json app`

Create a project with the default preset:

`vue create app -d`

Start dev server:

```
cd app
npm run serve
```

## Netlify

Install Netlify CLI globally:

`npm install -g netlify-cli`

Init the site:

`netlify init --manual`

Start the dev server:

`netlify dev`

Start a live share dev server:

`netlify dev --live`

Build:

`netlify build`

Deploy a draft:

`netlify deploy`

Deploy to prod:

`netlify deploy --prod`
