# vision-code
利用该工具根据接口直接生成TS代码
> 根据接口生成 ts 的接口声明文档
后期还会有持续更新，将JavaScript代码直接生成 TypeScript 代码

## 基本命令
#查看版本号
vision-code -V

#查看帮助文档
vision-code --help

#接口生成TS代码帮助文档
vision-code api2code --help

## api2code
描述：通过自定义结构或openAPI的json生成crud代码 缩写：a2c

```shell
#查看版本号
vision-code -V
#查看帮助文档
vision-code --help
#接口生成TS代码帮助文档
vision-code apicode --help
```
#参数
```bash
Options:
  -i, --input <input>    （可选）输入的json路径
  -o, --output <output>  （必填）输出interface的文件路径
  -h, --help              查看帮助
```

#举例
1. 通过本地 json 方式生成 interface
   ```bash
   vision-code apicode -o src/index.ts -i mocks/api.json
   ```
2. 通过自定义json或openAPI生成 crud代码
    ```bash
    vision-code apicode -i ./mocks/apiConfig.json -o src/aaa.ts
    ```
    > 示例json在项目目录`mocks/apiConfig.json`中。
