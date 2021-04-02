# Personal Website

The single page web app is based on React.js and Next.js

## How to run

- Install `yarn`
- Run `yarn install`
- Run `yarn dev`

## Files

All the code lives inside `/src` folder.

We have following subfolders `components`, `config`, `pages` and `utils`

```txt
src
├── components
├── config
├── pages
└── utils
```

### Components

All the individual components live here.

```txt
src/components
├── about-section
├── common-components
│   ├── link-hover
│   ├── model-box
│   └── on-scroll-spring
├── contact-section
├── experience-section
├── header-section
├── tech-section
└── welcome-section
```

The components follow the following file structure.

```txt
src/components/{component}
├── main.tsx
├── content.ts
├── styles.ts
└── helpers.ts
```

- `main.tsx`: Contains jsx for the component.
- `content.ts`: Contains content for the component.
- `styles.ts`: Contains JSS style for the component.
- `helper.ts`: Contains helper functions for the component.

Each section of the app has it's own individual component.

There are certain components that are shared between other components, these kind of components lie within `common-components`

### Pages

The indiviual pages of the app lie within the `src/pages`, in our case just a single page i.e `index.tsx`.

### Config

All the configuration for the app lies within `src/config`, e.g `types` etc.

### Utils

All the global utils lie here, including our `anlaytics` helper and `logger`.

## Packages

We use the following packages within the app.

- `@material-ui/core@4.11.2`: We use this package to implement responsive design.
- `next@10.0.3`: We use this package for SSR using next.
- `pino@6.9.0`: We use this package for logging.
- `prop-types@15.7.2`: We use this package for prop validation.
- `react-icons@4.1.0:` We use this package for icons.
- `react-device-detect@1.15.0`: We use this package to track user devices.
- `react-spring@9.0.0-rc.3`: We use this package for animations.
- `react-sizeme@2.6.12`: We this package to update certain elements on screen resize.
- React Packages:

  ```json
    "react-dom": "17.0.1",
    "react": "17.0.1",
  ```
