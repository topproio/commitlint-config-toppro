module.exports = {
	rules: {
		"type-empty": [2, "never"], //type必填
		"type-case": [2, "always", "lowerCase"], //type小写
		"type-enum": [2, "always", ["feat", "fix", "refactor", "chore", "docs", "test", "optimize", "build", "revert", "merge"]],
		"header-max-length": [2, "always", 50], //header最大长度
		"scope-max-length": [2, "always", 10], //作用域长度
		"scope-case": [2, "always", 'lowerCase'], //scope小写
		"body-max-length": [2, "always", 75], //body最大长度
		"body-leading-blank": [2, "always"], //body是在新的一行写
		"footer-max-line-length": [2, "always", 50], //footer最大长度
		"footer-leading-blank": [2, "always"], //footer是在新的一行写
		"subject-empty": [1, "never"] //subject必填
	},
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w+)(?:\((.*)\))?(:\s(.*))?$/,
			headerCorrespondence: ['type', 'scope', 'subject']
		}
	}
}
