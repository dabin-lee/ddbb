
# **CLI로 Git 사용하기**
<div style="border:1px dotted #ddd; padding:10px;">

### GIT을 다루는 2가지 방법<BR>
- CLI(command line interface) - 명령어 인터페이스 창 (터미널 창)에 명령어를 입력하여 상호 처리합니다.<br> cmd.exe , Gitbash, VSCODE에서 TERMINAL사용 등 이있습니다.

- GUI(Graphical User Interface) - 명령이나 작업을 이해하기 쉽도록 프로젝트 히스토리를 시각화하여 도와주는 도구입니다.

</div>

## <span style="color:orange"> 1. 환경설정(config 설정) <span>
>    $ git config --global --list<br>
>    $ git config --list<br>
현재 설정정보 조회할 수 있습니다. <br>
(--global옵션은 전역설정에 대한 옵션이며 현재 프로젝트에만 적용할때는 주지 않습니다.)
>
>    $ git config --global user.name "사용자명"<br>
사용자명을 등록 / 변경합니다. (필수)
>
>    $ git config --global user.email "이메일주소"<br>
>    이메일 주소를 등록 / 변경합니다. (필수)
>
>    $ git config --local user.name "사용자명"<br>
>    프로젝트 하나에서만 사용자명을 등록 / 변경합니다. (필수)
>
>    $ git config --local user.email "이메일주소"<br>
>    프로젝트 하나에서만 이메일 주소를 등록 / 변경합니다. (필수)
>
>    $ git config --unset user.name "사용자명"<br>
>    사용자명을 삭제합니다.
>
>    $ git config --unset user.email  "이메일주소"<br>
>    이메일 주소를 삭제합니다.
>
- - -

## <span style="color:orange">2. git 명령어 <span>
>    $git --version -> 현재 git버전을 확인<br>
>    $git status -> 파일 상태 확인<br>
>    $git remote -> 내컴퓨터 로컬폴더에 서버 저장소 주소 알려주기<br>
>    $git log : 마지막으로 commit 된 내역을 볼 수 있는 명령어

- - -

## <span style="color:orange">3. 저장소 만들기 init or clone <span>
>    $git init -> 기존 프로젝트의 디렉토리에 git 저장소로 만들기(.git이라는 하위 디렉토리 생성)<br>
>    $git clone git://링크주소.git -> 명령으로 저장소를 복제

- - -

## <span style="color:orange">4. 로컬저장소 저장 <span>
>    $git add 파일명 -> 저장소에 파일을 추가 하고 커밋함 / 커밋으로 만들길 원하는 파일만 선택 <br>
>    $git add . -> workign directory 전체를 의미<br>
>    $git commit -m "commit Comment" -> 스테이시 파일을 커밋<br>
>    $git commit -am "commit Comment" -> 스테이시와 커밋을 동시에 (단, 한번도 add되지 않은 파일은 안됨)

- - -

## <span style="color:orange">5. 원격저장소 push <span>
push는 마지막으로 커밋한 사항을 git repository 에 올리겠다는 뜻<br>
>    $git pull -> 원격저장소로 push하기 전에 내용이 충돌나지 않도록 pull로 git pull로 먼저 수정내용 확인 <br>
>    $git push - origin master -> 원격저장소 origin리모트에 로컬에 commit된 것을 push<br>
>    (origin과 master는 각 리모트 저장소와 브랜치 의미)

- - -

## <span style="color:orange">6. remote <span>
>    $git remote -v -> 현재 연결된 저장소 확인<br>
>    $git remote add [단축이름] [url] -> 새 리모트 저장소 추가<br>
>    $git remote remove origin -> 원격 저장소와의 연결 제거

- - -

## <span style="color:orange">7. branch <span>
>    $git branch -> 브랜치 조회<br>
>    $git checkout name -> name 브랜치로 이동<br>
>    $git checkout -b <branch> -> 브랜치 작성과 체크아웃을 한번에 실행<br>
>    $git branch name -> 현재 시점에서 name브랜치 생성
>    $git checkout master -> $ git push origin <branch name>
- - -

## <span style="color:orange">7_1. git 리모트 브랜치 번외 <span>
>    - 존재하는 모든 리모트 브랜치의 정보를 조회
>    $git branch -a -> 현재 존재하는 브랜치 정보가 모두 출력<br>
>    $git branch --remote -> remote에 존재하는 브런치 확인<br>
>    $git remote update -> 모든 리모트 정보를 업데이트, fetch를 수행<br>
>    $git remote prune origin -> 현재 자신의 로컬에 있는 리모트 브랜치 정보를 최신으로 업데이트. 새로 추가되었거나 삭제된 리모트 브랜치의 정보들을 최신으로 업데이트할 수 있다. 아래의 커맨드와 동작은 같으나 리모트를 선택하여 반영, 업데이트 할 수 있음.<br>
>    $git fetch --prune -> 현재 자신의 로컬에 있는 리모트 브랜치 정보를 최신으로 업데이트<br>

- - -

## <span style="color:orange">8. log <span>
>    $git log : commit해둔 기록을 조회 (checkout위치에서 보여줌)<br>
>    $ git log --pretty=oneline : 각 커밋을 한 줄로 표시<br>
>    $git log --branches : 현재 위치한 저장소가아닌 전체 저장소를 확인<br>
>    $git log --branches --decorate : master와 branch의 표시로 최신 커밋을 보여줌(HEAD -> 표시로 현재 Checkout된 branch를 보여줌.)<br>
>    $git log --branches --decorate --graph : 빨간줄로 흐름을 간단하게 보여줌.

- - -

## <span style="color:orange">9. merge <span>
>    $git checkout master : master로 돌아옴 또는 브랜치<br>
>    $git merge 브랜치 : 현재 위치한 저장소가 아닌 전체 저장소를 확인<br>
>    $git log --branches --grahp --oneline : merge된 부분 확인<br>
>    $git branch -d 브랜치 : merge가 된 branch는 삭제
>    $git reset --merge ORIG_HEAD : merge취소  <br>
 (  ORIG_HEAD라고 하는 것은 이전에 작업한 곳의 HEAD이다. <br>
 즉, pull이나 merge를 하는 경우에 ORIG_HEAD를 남기게 되는데, pull을 잘못 받거나 merge를 잘못하게 되면 이것을 이용한다. ) <br>
>    $git merge --abort :  merge취소 병합(merge) 시에 충돌(conflict) 등의 문제로 병합이 제대로 이루어지지 않을 경우, 병합 이전의 상태로 돌아간다

- - -

## <span style="color:orange">10. 취소, 수정 <span>
>    $git reset : git add 취소<br>
>    $git reset HEAD^ : 최종 커밋 취소. 그러나 변경된 파일은 남아있다.<br>
>    $git reset --hard HEAD^ : 최종 커밋 취소하고 파일 까지 복구한다.<br>
>    $git reset HEAD~n : 마지막 n개의 커밋을 취소 한다. 그러나 변경된 파일은 남아 있다. ( n : 숫자 )<br>
>    $git reset --hard HEAD~n : 마지막 n개의 커밋을 취소. 파일 또한 복구됨.<br>
>    $git reset HEAD * : 스테이징을 언스테이징으로 변경, ref<br>

>    $git add ->  git commit --amend 명령어를 입력하면  마지막 커밋메세지 수정(ref)<br>
>    $ git commit --amend -m "33" : 마지막 커밋메세지 수정(ref)<br>
>    $git branch -d 삭제할 브랜치명 :  local 브랜치 삭제 <br>
>    $git push origin :삭제된 브랜치명 :  remote 브랜치 삭제 <br>
>    $git fetch --prune :  ref 브랜치 삭제 <br>

## <span style="color:orange">11. remote branch delete <span>
>    삭제할 브런치외에 다른 브런치로 checkout
>    $ git remote show origin 어떤 브런치가 있는지 확인<br>
--------------
### ★ 12. local branch 삭제
>    $ git branch -D 삭제할 브랜치명 :  local 브랜치 삭제 <br>

### ★ 13. remote branch 삭제
>     1번) $ git push origin --delete <branch name><br>
>     2번) $ git push origin :branch_name  ex) $ git push origin :shopping_cart : 원격에 있는 브랜치를 삭제.<br>

### ★ 14. git remote prune <br>
>     * git remote prune은 리모트 브랜치의 더 이상 유효하지 않은 참조를 깨끗이 지우는 명령어
>     $ git remote prune origin : remote 브랜치 clean up 하기<br>
>     $ git remote update --prune

### ★ 14_1. 축약버전
>     $ git branch --delete --remotes <remote>/<branch><br>
>     $ git branch -dr <remote>/<branch> # 위 명령어의 축약버전<br>
>     $ git fetch <remote> --prune # 유효하지 않은 tracking 브랜치들을 일괄 삭제한다<br>
>     $ git fetch <remote> -p # 축약 버전<br>
 --------------


--------------
### ★ 15. git stash 만들기
>    $ git stash  :  아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어 <br>
>    $ git stash save 작업명 : #stash에 작업명의 이름으로 임시저장 <br>
>    $ git stash list : 스택에 있는 stash 목록 확인<br>

### ★ 16. git stash 적용
>     * git stash apply : 가장 최근의 stash 적용
>     $ git stash apply [stash 이름] :  [stash 이름]에 해당하는 stash 적용
>     $ git stash apply --index :  [stash 이름]에 해당하는 stash 적용

>   [index 유무의 차이]
>   - git stash apply & git stahs apply --index
>   - 수정했던 파일들을 복원할 때 반드시 stash했을 때와 같은 브랜치일 필요는 없다. 만약 다른 작업 중이던 브랜치에 이전의 작업들을 추가했을 때 충돌이 있으면 알려준다.
>   - --index 옵션을 주어 staged 상태까지 적용. 원래 작업하던 상태로 돌아올 수 있다.

### ★17. git stash 제거
>     $ git stash pop : apply + drop의 형태로, 현재브런치에 저장내용을 복구 , status 결과와 함께 스텍에도 목록 제거 (마지막으로 저장된 stash작업을 불러오고 리스트에서 삭제)

### ★18. git stash 되돌리기
>     $git stash show -p | git apply -R : 가장 최근의 stash를 사용하여 패치를 만들고 거꾸로 적용
>     $git stash show -p [stash 이름] | git apply -R
--------------
### ★19. git 충돌
>    $ git push -f  :  아직 마무리하지 않은 작업을 스택에 잠시 저장할 수 있도록 하는 명령어 <br>
>    $ git push --force 작업명 : #stash에 작업명의 이름으로 임시저장 <br>
>    $ git push origin +`<branch_name>` : 스택에 있는 stash 목록 확인<br>

--------------
### ★20. git rebase -  merge를 사용하는 것보다 rebase를 사용하는 것이 로그를 관리할 때 훨씬 효과적입니다.
>     - git merge는 header와 branch를 merge시키고, rebase는 commit을 재정렬한다.
>     - rebase를 하게 되면 커밋도 새로 쓰고 정렬도 새로 하기 때문에 기존 커밋트리가 완전히 달라진다.

--------------

### ★21. git reset과 revert
>     - 작업을 진행하다가 실수로 중요한 파일을 삭제했거나 제대로 병합이 안됐을 경우, 잘 작동이 되던 이전 버전으로 돌아가야 합니다. 이것이 바로 버전 관리를 하는 이유이며, 이 때 사용하는 명령어가 git reset과 git revert라는 명령어입니다.


--------------
### ★21_1. git reset 취소 - reset을 한 상태에서 다시 최근 소스로 돌아오기 위해서 사용
>     $  git reflog : 이전까지 작업들 reflog로 확인 몇번째 HEAD로 이동할지 확인
>     $  git reset --hard HEAD@{1} : HEAD@{1} 로 이동
>     $  git push -f origin [브랜치명] : 돌아간 시장을 강제로 push

--------------

#### HEAD의 여러 표현 방법
>    HEAD^[n] : n번째 부모 버전  (the parent of HEAD), 생략시 1<br>
>    HEAD~[n] : n번째 부모의 부모. (the first parent of the first parent or the grandparent)<br>
>    HEAD~ 와 HEAD^ 는 같은 대상이지만 특정숫자들을 입력하면 대상이 달라진다. (HEAD^4 와 HEAD~4 는 다르다.) 하지만 다음 예제는 같은 커밋개체을 가르킨다.<br>
>    HEAD^^^ == HEAD~3    (HEAD^^^ 가 첫번째부모의 첫번째부모의 첫번째부모 노드를 뜻하므로 같은 값을 가르킨다.)

--------------

####  git reset 되돌리기
- git reset으로 실수로 저장없는 전버전으로 돌려놨을 때

>    git reset --hard HEAD^
>    git reflog
>    git reset HEAD@{1}

--------------

#### reset 옵션

>    git reset --hard 커밋ID : 모든 내용을 지우고 되돌아감(초기화)
>    git reset --soft 커밋ID : 커밋은 되돌렸지만 코드의 내용은 변경되지 않음
>    git reset --mixed 커밋ID : 옵션을 설정하지 않았을때 기본값 (커밋 되돌렸고, 변경된 내용이 남아있어서 다시 추가할수 있음 )

 --------------

#### 단골에러

```
To https://github.com/hahwul/a2sv.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'https://github.com/dabin-lee/ddbb'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Merge the remote changes (e.g. 'git pull')
hint: before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

- 실제 에러가 발생하는 부분을 고칠수도 있지만 임시 방편으로 "+" 를 이용하여 해결이 가능합니다.
- 아래와 같이 강제로 push 를 진행하게 되면 에러 상관없이 강제로 Push 하게 되어 이슈를 넘어갈 수 있습니다. [물론 임시 방편입니다.]

>    기존명령:  git push -u origin master
>    강제명령:  git push -u origin +master
```
