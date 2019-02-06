# cli-cast
CLI podcast publishing utility. Quick, dirty, and compliant.

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

## Installation

Great news: Right now, no installation whatsoever is necessary. On the other hand, that is because it does literally nothing.

## Usage

Ideally you will run `cli-cast` and say, "Wow! Everything 'just works!'"
`Inquirer` is intended to handle the actual CLI UX of updating an XML feed, whereas `Commander` is gonna be all like, ooh, look at me, I'm a real CLI application.

The GOAL here, *JEFFREY,* is to allow a podcast author *slash* server admin to ssh into a server, `scp` a new podcast episode into a web-facing directory, and run `cli-cast` to update the show's XML (or to generate it if the show is new).

Later versions of the software might allow you to edit the podcast feed directly from the command line (to change the description, amend episode metadata, et al) or do other cool things. The sky is truly the limit for this application I am making up.

Generation of the website surrounding the podcast feed and other such podcast meta-maintenance are facets of an overall exercise left to the aforementioned podcast author *slash* server admin.

## License

This tool is licensed under GPLv3.0. As such, and considering that this tool will eventually be run on somebody's webserver, please observe section 15 ("Disclaimer of Warranty") and those following. And for Satan's sake, back up your media before running my rickety-ass Node utility on it.
