# BG Splash
A simple node script intended to download background wallpapers from either Unsplash or Inspiro Bot, and programmatically apply as desktop wallpaper (multiple monitors supported). MacOS Only.


# Installation
1. Install Dependencies
`$ yarn install`

2. Configure Environment
- copy .env.example to .env
- (required for unsplash only) add your unsplash client ID to access the API (register for free at https://api.unsplash.com)
- optionally configure environment (.env) variables to your preference, or just use defaults


# Usage
1. One-off execution
1.1. Fetch from Unsplash
  `$ yarn start` or `$ yarn fetch:unsplash`
1.2. Fetch from Inspiro
  `$ yarn fetch:inspiro`

2. Scheduled execution
If you wish to have this script run periodically in the background, simply set a CRON job to run the provided "bg-splash.sh" at the desired interval
e.g. `*/15 * * * * /path/to/this/dir/bg-splash.sh "Runs every 15 minutes"`


# Development
`$ yarn lint`

`$ yarn test`


# Troubleshooting

## Running as Root
If your environment requires you to run this script from root, you may need to specify the $HOME directory as follows:
e.g. `*/15 * * * * /path/to/this/dir/bg-splash.sh /path/to/your/home/dir`