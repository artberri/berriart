module.exports = {
	url: 'http://localhost:1313/',
	logger: {
		level: 'info',
	},
	concurrent: 100,
	requestHeaders: {
		'user-agent': 'node-spider',
	},
	requestRetriesAmount: 5,
	requestTimeout: 5000,
	acceptedSchemes: ['http:', 'https:'],
	checkExternalUrls: true,
	excludeLinkPatterns: [
		'https://bsky.app/intent/compose*',
		'https://www.linkedin.com/shareArticle*',
		'https://www.reddit.com/submit*',
		'https://news.ycombinator.com/submit*',
	],
}
