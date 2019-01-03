
# commitlint-config-toppro
> 规范提交信息的工具

[![npm](https://img.shields.io/badge/license-MIT-yellowgreen.svg)]()
[![npm](https://img.shields.io/badge/node-%3E%3D8-blue.svg)]()
[![npm](https://img.shields.io/badge/npm-v6.4.1-yellow.svg)]()
[![npm](https://img.shields.io/badge/husky-1.2.1-red.svg)]()
[![npm](https://img.shields.io/badge/%40commitlint%2Fcli-7.2.1-blue.svg)]()

## Summary
提交说明的结构如下所示：

```
<type>([scope]): <subject>

[body]

[footer]
```

## Getting Started
安装依赖，新建配置文件。

```sh
yarn add @commitlint/cli commitlint-config-toppro husky --save

# Add file commitlint.config.js
echo "module.exports = {extends: ['toppro']};" > commitlint.config.js
```

配置 husky 钩子，监听 `git commit`:

```sh
# package.json
+	"husky": {
+		"hooks": {
+			"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
+		}
+	}
```

## Specification

1. type 必填，且必须小写
2. scope 是可选值，用 `()` 包围，必须小写，限定在 10 个字符内
3. subject 必填，它的前缀是 `:` + 空格
4. 信息头（type scope subject）必须在 50 个字符内，保障一行能显示全部，以便阅读
5. body 与 footer 是可选值，必须用一行隔开
6. body 必须在 75 个字符内
7. footer 必须在 50 个字符内

并且 `types` 规定以下值：

```
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
```

## Rules

[详见文档](./rules/README.md)

## Why Use Commitlint Commits
* 帮助生成规范的 CHANGELOG
* 建立更有条理的提交信息
* 帮助开发者了解项目信息
* 帮助定位提交记录

## FAQ

### 这会阻碍项目快速发展和快速迭代?
它阻碍的是杂乱无章的快速提交，它能快速统一不同提交习惯的开发者的提交信息。

### 提交中能拥有多个信息类型?
尽可能撤回其他的信息类型的修改，如果不行，选择信息类型的优先级是从开头到结尾

### 如何快速查询提交类型的提交记录？
```
git log --pretty=format:"%s - %h" | grep -e ^[提交类型]
```
git log 是查询提交日志的信息命令,    
--pretty=format是改命令的过滤参数 ```%```是提交说明 ```%h```日志的hash值