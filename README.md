# BG Splash
A simple node script intended to download an unsplash image from the official collection and programmatically apply as desktop wallpaper (multiple monitors supported). MacOS Only.

# Installation
1. Install Dependencies
`$ yarn install`

2. Configure Environment
- copy .env.example to .env
- add your unsplash client ID to  access the API (register for free at https://api.unsplash.com)
- optionally configure other environment variables to your preference, or just use defaults

# Usage
1. One-off execution
`$ yarn start`
2. Scheduled execution
If you wish to have this script run periodically in the background, simply set a CRON job to run the provided "bg-splash.sh" at the desired interval
e.g. `*/15 * * * * /path/to/this/dir/bg-splash.sh "Runs every 15 minutes"`

# Development
`$ yarn lint`
`$ yarn test`
