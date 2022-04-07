require("laravel-mix-purgecss");

const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const fs = require("fs");
const path = require("path");

const publicWebAssetsFolder = "public";

mix.sass(`./sass/store.scss`, `${publicWebAssetsFolder}/css/store.min.css`);
mix
  .sass(`./sass/error.scss`, `${publicWebAssetsFolder}/css/error.min.css`)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  });
