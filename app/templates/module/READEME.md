## TODO
- unit test
- complement ts type
- ...

## **MUST READ IT BEFORE DEVELOP**

### RESTful API design conventions

**REST is not a standard, but in this project please follow conventions below**

-   **To describe your resources, use concrete names and not action verbs**
-   Be liberal in what you accept, and conservative in what you send
-   url use lowercase, hyphen (include url params)
-   url must represent a path to the object we going to modify or retrieve
-   1. Use POST to create an object.
    2. Use PUT to modify an object.
    3. Use DELETE to delete an object.
    4. Use GET to retrieve data.

### Naming conventions

-   **File names must be all lowercase and may include underscores**

### Validate params

-   must validate input params, use [joi](https://github.com/hapijs/joi)

### Code format

-   **before you do git commit, please run `npm run lint` and check no error**

## vscode plugin

-   Prettier - Code formatter
-   Visual Studio IntelliCode
-   Power Mode
-   vscode-icons
-   GitLens

## Reference

-   restful: [1](https://www.scienjus.com/my-restful-api-best-practices/)
    [2](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/)
-   naming: [1](https://stackoverflow.com/questions/18927298/node-js-project-naming-conventions-for-files-folders)
-   semantic versioning: [1](https://semver.org/lang/zh-CN/)
-   build notes: [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) [tslib](https://github.com/Microsoft/tslib) [egg-typescript](https://github.com/eggjs/egg/blob/master/docs/source/zh-cn/tutorials/typescript.md)
