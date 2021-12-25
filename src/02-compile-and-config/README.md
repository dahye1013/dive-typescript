# TS Compiler and Config

```bash
--tsc init //tscongif생성
tsc //컴파일
tsc --watch  // watch MODE를 주는 컴파일
```

— this basically is the indicator for ts at the project in which file lies and all sub folders.

### tsconfing.json

- exclude - 특정 ts 파일을 컴파일하지 않을 수 있다

```json
"exclude":[
	"node_modules", //would be the default
	"aa.ts",
	"aa.dev.ts",
	"*.dev.ts", //aestrisk
	"**/*.dev.ts" //aestrisk으로 특정 패턴 불포함 명시
]
```

- include - 특정 ts 파일을 컴파일

```json
"include":[
	"app.ts",
]
```

→ exclude some subfolder, all the folder that is parts of include then that excluded subfolder

⇒ basically compile include minus exclude

- files - specify whole folders , individual files to compile
  - small project, compile files 가 명확할때나 사용가능

```json
"files":[
	"app.ts",
]
```

### Compile Target

- `target`
  - 어떤 version으로 compile할지 설정
    ⇒ default es5이며, 지원하는 browser를 확인해보고 설정하면 된다.
- `lib`
  - 특정 api에 접근하여 ts 지정 할 수 있게 해준다.
  ```json

  "lib":[
  	"dom",
  	"es6",
  	"dom/iterable",
  	"scripthost"
  ]
  -
  ```
- **`allowjs`**
  — TODO : 더 알아볼것
- **`checkjs`**
  - not compile but check the syntack in there and report potential erros
  ⇒ if don’t really want to use TS, but want to take advantage of some
- `**sourceMap**`
  - help with debugging and development
  - ~map 파일 generate
  - act ad bridge which is understood by modern browsers and developer tools there to connect the JS file to the input files.
  ⇒ 브라우저 데브툴에서 ts 파일 생성되고, break point도 지정할 수 있음. ‼️

### Out

- **`outDir`**
  - all the js files, source folder might hold out types good files
  - 컴파일 된 파일들이 들어가는 곳 지정
- `rootDir`
  - set the root directory and set this specifically at the folder where your files are stored in like in this example source to make sure that the ts comipler does not look in our folder.
  - exclude랑은 좀 다름
    →ts compiler will not just look only at that source folder, Also !! maker sure that project structure you set up there is kept in dist folder.
    subfolders에 존재하는 ts files가 roote dir에 들어가게 함
- noEmit
  - check files report any potential error without actually creating an out file import
