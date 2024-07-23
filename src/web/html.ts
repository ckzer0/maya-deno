import { m } from "./components.ts";
import { MayaElement } from "./types.ts";

export const defaultMetaTags: () => MayaElement[] = () => [
  m.Meta({ charset: "UTF-8" }),
  m.Meta({
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
  }),
  m.Meta({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
  }),
];

export const defaultHtmlPageNode = (
  pageTitle: string,
  appNode: () => MayaElement
): MayaElement => {
  return m.Html({
    lang: "en",
    children: [
      m.Head({
        children: [m.Title({ innerText: pageTitle }), ...defaultMetaTags()],
      }),
      m.Body({
        children: [
          m.Script({
            src: "main.js",
            defer: "true",
          }),
          appNode(),
        ],
      }),
    ],
  });
};

// `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link
//       rel="stylesheet"
//       href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"
//     />
//     <link rel="stylesheet" href="styles.css" />
//   </head>
//   <body>
//     <script src="main.js" defer></script>
//   </body>
// </html>
// `;
