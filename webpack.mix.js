require("laravel-mix-purgecss");

const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

const publicWebAssetsFolder = "public";

mix
  .sass(`./sass/error.scss`, `${publicWebAssetsFolder}/css/error.min.css`)
  .sass(`./sass/landing.scss`, `${publicWebAssetsFolder}/css/landing.min.css`)
  .sass(`./sass/category.scss`, `${publicWebAssetsFolder}/css/category.min.css`)
  .sass(`./sass/theme.scss`, `${publicWebAssetsFolder}/css/theme.min.css`)
  .options({
    processCssUrls: false,
    postCss: [tailwindcss("./tailwind.config.js")],
  });

mix.copyDirectory("./images", `${publicWebAssetsFolder}/images`);

// vue apps
mix.js("apps/app.js", "public/js").vue();
