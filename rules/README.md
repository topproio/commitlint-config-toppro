# rules

## type-enum
* **feat**: 新功能,而不是构建脚本的一个新功能
* **fix**: 修复缺陷
* **refactor**: 重构（即不是新增功能，也不是修改bug的代码变动）
* **chore**: 架构配置或工具的变动（即不是新增功能，也不是修改bug的代码变动）
* **docs**: 文档的变动
* **test**: 测试(如单元测试 不包括定位缺陷的测试)
* **optimize**: 优化项目（即不是新增功能，也不是修改bug的代码变动）
* **build**: 项目打包
* **revert**: 撤回修改
* **merge**: 合并分支

```sh
echo "add: some message" # fails
echo "feat: some message" # passes
```

## type-case
* **value**
```lowerCase ```

```sh
echo "FIX: some message" # fails
echo "fix: some message" # passes
```

## type-empty
```sh
echo ": some message" # fails
echo "fix: some message" # passes
```

## scope-case
* **value**
```lowerCase ```

```sh
echo "fix(SCOPE): some message" # fails
echo "fix(scope): some message" # passes
```

## subject-full-stop
```sh
echo "fix: some message." # fails
echo "fix: some message" # passes
```

## header-max-length
* **value**
```50```

```sh
echo "fix: some message that is way too long and breaks the line max-length by several characters" # fails
echo "fix: some message" # passes
```

## scope-max-length
* **value**
```10```

```sh
echo "fix(scoped in that): some message" # fails
echo "fix(scoped): some message" # passes
```

## body-max-length
* **value**
```75```

```sh
echo "
fix: some message

that is way too long and breaks the line max-length by several characters
that is way too long and breaks the line max-length by several characters
" # fails

echo "
fix(scoped): some message

that is body
" # passes
```

## body-leading-blank

```sh
echo "
fix: some message
that is body
" # fails

echo "
fix(scoped): some message

that is body
" # passes
```

## footer-max-line-length
* **value**
```50```

```sh
echo "
feat: some message

BREAKING CHANGE: dom attribute compatible with previous version
" # fails

echo "
feat: some message

BREAKING CHANGE: dom attribute
" # passes
```

## footer-leading-blank

```sh
echo "
feat: some message
BREAKING CHANGE: dom attribute
" # fails

echo "
feat: some message

BREAKING CHANGE: dom attribute
" # passes
```

## subject-empty
```sh
echo "fix" # warn
echo "fix: some message" # passes
```
