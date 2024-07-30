# Demo测试，请勿商用 Demo testing, please do not use commercially



## fork自 [GitHub](https://github.com/v17development/flarum-third-party-login-only)

安装

```
composer require DamonHu/flarum-login-modal
```

更新

```
composer update DamonHu/flarum-login-modal
```

代码更新，下载仓库，进入js目录 

安装依赖

```
npm install 
```

安装webpackage

```
npm install webpack webpack-cli -g
```

运行

```
npm run build
```

如果报错，切到16

```
brew unlink node@18
brew link --overwrite --force node@16
```

执行

```
export NODE_OPTIONS=--openssl-legacy-provider
```