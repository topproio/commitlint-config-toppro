module.exports = {
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-length': [2, 'always', 75],
		'footer-leading-blank': [1, 'always'],
		'footer-max-length': [2, 'always', 50],
		'header-max-length': [2, 'always', 50],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case']
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test'
			]
		]
	},
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w+)(?:\((.*)\))?(:\s(.*))?$/,
			headerCorrespondence: ['type', 'scope', 'subject']
		}
	}
};
