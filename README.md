# teddit-image-previews

<a href="https://addons.mozilla.org/en-US/firefox/addon/teddit-image-previews/"><img src=https://blog.mozilla.org/addons/files/2020/04/get-the-addon-fx-apr-2020.svg height="50"></a>

Improved image previews for teddit.net, for posts with multiple images

Based on [RES](https://github.com/honestbleeps/Reddit-Enhancement-Suite)

teddit is an open source frontend for reddit (like invidio and nitter)

See also (and 'forked') from: https://github.com/twenty5151/tedditnav

## Features
1. 'd' to preview next image
2. 'a' to preview previous image

## Install

1. Download from https://addons.mozilla.org/en-US/firefox/addon/teddit-image-previews/
2. Go to `teddit.net`, open a post with multiple images and enjoy

## Develop
1. Git clone
2. Install the dependencies (typescript, webpack) with `npm ci`
3. Build with `npx webpack --mode=production` for release or `npx webpack --mode=development` for eval-source-map debugging

### Release
0. Bump version in `manifest.json`
1. `zip -r -FS build/teddit_image_previews.zip * --exclude '*.git*' --exclude '*node_modules*'`
2. Upload the zip file to mozilla

## Privacy

- No tracking, does not send anything to anywhere
- No permissions required
- Free and open source. Reading the source code is highly recommended - it's only ~60 lines.
