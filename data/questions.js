module.exports = {
  intro: [
    {
      type: 'expand',
      name: 'type',
      message: 'Are you updating an existing podcast feed, or starting a new one?',
      choices: [
        {
          key: 'n',
          name: 'Starting a [n]ew feed',
          value: 'new'
        },
        {
          key: 'u',
          name: '[U]pdating a feed',
          value: 'update'
        }

      ]
    }
  ],
  which: [
    {
      type: 'list',
      name: 'which'
    }
  ]
}
