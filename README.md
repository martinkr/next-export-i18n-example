
# `next-i18n-export` Example

This repository is a showcase for the [`next-i18n-export`](https://github.com/martinkr/next-i18n-export/) project.
See a running example at [next-i18n-export-example.vercel.app](https://next-i18n-export-example.vercel.app)

## About `next-i18n-export`
Unfortunately, `Next.js` i18n-routing does not supports `next export`.
Since most of the i18n-libraries are using  `Next.js`'s i18n-routing under the hood, none of them is able to support fully static sites which are generated with `next export`. If they are talking about SSG support, they are talking about pre-rendered sites which are served with `Next.js`. `next export`creates a truly static page which can be served with *any* webserver (e.g. nginx, apache etc).

For the different types of pre-rendering in `Next.js`, take a look at my article [The two and a half + one flavors of `Next.js`'s pre-rendering
](https://dev.to/martinkr/the-two-and-a-half-one-flavors-of-next-js-s-pre-rendering-44o) which explains and summarizes the different options. 


## Getting Started with `next-i18n-export`
Quick start with [`next-i18n-export`](https://github.com/martinkr/next-i18n-export/)
2. Add your `translation files` to the `i18n/` folder
3. `Require` your `translation files` in `i18n/index`
4. `import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n'` in your `pages` and get the hooks 
```
const { t } = useTranslation();
const [query] = useLanguageQuery();
````
4. Add the `<LanguageSwitcher lang={string}>` component to change the language (or create your own language switcher)
5. Add the `query` from `useLanguageQuery` to your internal links to enhance them with the language parameter (`<Link href={{ query: query … }}>…`)
6. Add the translations with `t(key)` from `useTranslation` to your elements. They will be automatically update as soon as the language change.

For in depth explanation please see the [next-i18n-export documentation](https://github.com/martinkr/next-i18n-export/blob/main/README.md)

## Getting Started with `Next.js`

Well, you are looking for a very specific solution related to `Next.js`, so I assume you already know about `Next.js`. But anyway …

### Run the development server:

```bash
npm run dev
# or
yarn dev
```
and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Export the project

```bash
npm run export
# or
yarn export
```
and `serve` the `./out` directory with your favorite web server.
 

## Tech Stack 

- next.js: 11.0.1 
- react.js: 17.0.2 
- jest:  27.0.6  
- typescript:  4.3.5  


## License

Licensed under the MIT license.
MIT - http://www.opensource.org/licenses/mit-license.php
