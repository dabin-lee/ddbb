# gitignore 설정
- 버전관리 중 불필요한 파일
- ex) 자바 프로젝트에서 컴파일을 하면 .class 파일들이 생성되는데 github와 같은 저장소에 .class 제외하고 .java 파일만 올리고 싶을 경우에 이와 같은 역할을 해주는 것이 .gitignore입니다.
[!gitignore](img/gitignore16.png);


| #, 빈라인           | #은 주석을 의미하며, 빈라인은 아무런 영향을 주지 않습니다.                 |
|---------------------|----------------------------------------------------------------------------|
| *.a                 | 확장자가 .a 인 모든 파일을 무시합니다.                                     |
| folder_name/        | 해당 폴더의 모든 파일을 무시합니다.                                        |
| folder_name/ *.a    | 해당 폴더의 확장자가 .a 인 모든 파일을 무시합니다.                         |
| folder_name/ **/*.a | 해당 폴더 포함한 하위 모든 폴더에서 확장자가 .a 인 모든 파일을 무시합니다. |
| /*.a                | 현재 폴더의 확장자가 .a 인 모든파일을 무시합니다.                          |


### gitignore가 반영되지 않을 때
> git rm -r --cached .
> git add .
> git commit -m "git ignore add"
> git push