# BG Splash
A simple node script intended to download an unsplash image from the official collection and programmatically apply it to desktop wallpaper (multiple monitors supported). MacOS Only.

# Installation
`$ yarn install`

# Usage
`$ yarn start`

* Note: if you wish to have this script run periodically in the background, simply set a CRON job to run the provided "bg-splash.sh" at the desired interval
e.g. `*/15 * * * * /path/to/this/dir/bg-splash.sh "Runs every 15 minutes"`

# Development
`$ yarn lint`
`$ yarn test`