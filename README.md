# teddit-image-previews

[![status](https://img.shields.io/badge/status-active-green)](https://img.shields.io/badge/status-active-green)

<a href="https://addons.mozilla.org/en-US/firefox/addon/teddit-image-previews/"><img src=https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg height="50"></a>

Improved image previews for teddit.net, for posts with multiple images

Based on [RES](https://github.com/honestbleeps/Reddit-Enhancement-Suite)

teddit is an open source frontend for reddit (like invidio and nitter)

See also (and 'forked') from: https://github.com/akazukin5151/tedditnav

## Features
1. Press key to preview next image
2. Press key to preview previous image
3. Next and previous buttons on top the gallery for mouse usage

## Install

1. Download from https://addons.mozilla.org/en-US/firefox/addon/teddit-image-previews/
    - Or download the xpi file from releases
2. Go to `about:addons -> teddit-image-previews -> Preferences` and enter your key bindings then save it
3. Go to `teddit.net`, open a post with multiple images and enjoy

## Develop
1. Git clone
2. Install the dependencies (typescript, webpack) with `npm ci`
3. Build with `npm run build` for release or `npm run dev` for eval-source-map debugging

### Release
1. Bump version in `manifest.json`
2. `npm run clean`
3. `npm run build`
4. `npm run release`
5. Upload build/teddit_image_previews.zip to mozilla and provide the source code with build/source.zip
6. Download the xpi file and upload to Github releases
    - Go to https://addons.mozilla.org/en-US/developers/addon/teddit-image-previews/versions/
    - Select the latest version and download the xpi file

## Privacy

- No tracking, does not send anything to anywhere
- No permissions required
- Free and open source. Reading the source code is highly recommended - it's only ~60 lines.
