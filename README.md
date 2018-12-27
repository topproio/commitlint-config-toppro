
# commitlint-config-toppro
> 规范你的提交信息，by基于Commitlint的config拓展

## Summary
提交说明的结构如下所示：

```
<type>[optons scope] [: optons subject]

[options body]

[options footer]
```


## Getting started
安装依赖，新建配置文件。

```sh
yarn add @commitlint/cli commitlint-config-toppro husky --save
echo "module.exports = {extends: ['commitlint-config-toppro']};" > commitlint.config.js
```

配置husky钩子，监听git信息提交

```sh
# package.json
+	"husky": {
+		"hooks": {
+			"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
+		}
+	}
```

## Specification

1. type是必须填写规定值且必须小写,例如 feat, fix
2. scope是可选值，用```（）```包围，必须小写，必须10个字内
3. subject是可选值，它的前缀是```:```+空格
4. 整个信息头必须在50个字内，保障一行能显示全部，以便阅读
5. body与footer是可选值，必须用一行隔开
6. body必须在75个字内
7. footer必须要50个字内，开头必须用```BREAKING CHANGE: ```或 ```closes # ```


> BREAKING CHANGE:  ```变动导致某功能不兼容```   
> closes # ```修复那个缺陷```

## Rules

[docs/rule](./docs/rule.md) 

## Why Use Commitlint Commits
* 自动生成CHANGELOG
* 建立更有条理提交信息
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