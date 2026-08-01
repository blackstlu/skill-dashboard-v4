/* 
  技能儀表板 — 資料檔（通常只需要編輯這裡）
  - profile.name：填入你的姓名
  - profile.lang：填入你的主力語言
  - done: false → true：學會後把技能點亮
  - W2 之後：把講師發的整包物件貼到對應週次（替換整個 { ... }）

  改完存檔後重新整理瀏覽器，就會看到變化；如果畫面壞掉，先檢查逗號、引號、括號有沒有少。
*/

window.DASHBOARD_DATA = {
  profile: {
    name: "阿劍",
    lang: "JavaScript",
  },
  sections: [
    {
      id: "onboarding",
      kind: "intro",
      module: "ONBOARDING",
      title: "課程起點",
      groups: [
        {
          title: "為什麼學這些？",
          points: [
            {
              text: "為什麼是 Git？",
              desc: "版本控制是整個自動化流程的起點，所以課程從它開始。",
              done: false,
            },
            {
              text: "為什麼不學 AI 就好？",
              desc: "AI 的產出你要能驗收、能退回，因此還是要學習基本功。",
              done: false,
            },
            {
              text: "為什麼不直接實作？",
              desc: "CI/CD 是一條多節點的流程，先補齊知識點才接得起來。",
              done: false,
            },
          ],
        },
        {
          title: "課程會做出什麼？",
          points: [
            {
              text: "技能儀表板",
              desc: "前三週的個人作品，也是你追蹤學習進度的文件。",
              done: false,
            },
            {
              text: "CI/CD 部署通知系統",
              desc: "後三週的團隊產物，push 後就自動測試、部署與通知。",
              done: false,
            },
          ],
        },
        {
          title: "跟原課綱的差異？",
          points: [
            {
              text: "LINE Notify → Messaging API",
              desc: "LINE Notify 已終止服務，改用官方替代方案。",
              done: false,
            },
            {
              text: "Gemini CLI → Antigravity CLI",
              desc: "Antigravity 是官方宣布的繼任工具。",
              done: false,
            },
            {
              text: "內容重排、總數不減",
              desc: "課綱列出的項目都會涵蓋，並整理成更適合這門課的學習安排。",
              done: false,
            },
            {
              text: "技術範圍聚焦",
              desc: "以 Node.js 與 Python 為示範載體，其餘語言提供對照範例。",
              done: false,
            },
          ],
        },
        {
          title: "一天的節奏？",
          points: [
            {
              text: "50 分上課／10 分休息",
              desc: "一天七堂的節奏，中午休息一小時。",
              done: false,
            },
            {
              text: "每天 Git＋GitHub＋AI",
              desc: "每個上課日都有這三條線，最後一堂固定是 AI 時間。",
              done: false,
            },
          ],
        },
        {
          title: "課堂資源？",
          points: [
            {
              text: "簡報網址逐週解鎖",
              desc: "每週上課日早上自動開放當週簡報。",
              done: false,
            },
            {
              text: "程式碼模板",
              desc: "模板發放與課堂提問都在同一個 repo。",
              done: false,
            },
            {
              text: "Agent Skills",
              desc: "每週的 AI skills 隨教材發放，逐週迭代。",
              done: false,
            },
          ],
        },
        {
          title: "遇到問題？",
          points: [
            {
              text: "使用 GitHub Issue",
              desc: "遇到操作或觀念問題，統一開 GitHub Issue 發問，並把背景說清楚。",
              done: false,
            },
          ],
        },
      ],
    },
    {
      id: "week-1",
      kind: "week",
      week: 1,
      module: "ORIGIN",
      title: "從零開始，把作品上線",
      groups: [
        {
          no: "01",
          title: "課程導覽",
          note: "第一堂課收錄在「序章」的分頁。",
        },
        {
          no: "02",
          title: "Git 入門與環境",
          points: [
            {
              text: "版本控制概念",
              desc: "管理檔案如何隨時間改變，把保存、比較與回復交給系統處理。",
              done: false,
            },
            {
              text: "Git 的誕生",
              desc: "Linux 之父 Linus 為了管理大型多人專案，在 2005 年寫出 Git。",
              done: false,
              bonus: true,
            },
            {
              text: "集中式 vs 分散式",
              desc: "每個人本機都有完整歷史，離線照常記錄，遠端則用來同步。",
              done: false,
              bonus: true,
            },
            {
              text: "安裝 Git",
              desc: "到 Git 官方下載頁選擇作業系統，根據對應的方式安裝。",
              done: false,
            },
            {
              text: "git --version",
              desc: "確認 Git 是否安裝成功；看到版本號就代表可用。",
              done: false,
            },
            {
              text: "終端機選擇",
              desc: "macOS 可用 Terminal 或 iTerm2；Windows 建議使用 Windows Terminal。",
              done: false,
            },
            {
              text: "Set-ExecutionPolicy RemoteSigned",
              desc: "Windows 先允許本機指令碼執行，之後 CLI 工具才比較不會被擋下。",
              done: false,
            },
            {
              text: "ExecutionPolicy 原理",
              desc: "RemoteSigned 允許本機指令碼，從網路下載的指令碼仍需要可信任簽章。",
              done: false,
            },
            {
              text: "git 安裝排雷",
              desc: "輸入 git 找不到指令時，先重開終端機，再檢查安裝與 PATH。",
              done: false,
              bonus: true,
            },
            {
              text: "安裝排雷",
              desc: "裝不起來時，先從系統環境、權限設定與終端機是否重開排查。",
              done: false,
              bonus: true,
            },
            {
              text: "pwd",
              desc: "顯示終端機目前所在的資料夾，先確認自己站在哪裡。",
              done: false,
            },
            {
              text: "ls",
              desc: "列出目前資料夾裡的檔案與資料夾，確認裡面有哪些內容。",
              done: false,
            },
            {
              text: "cd",
              desc: "切換到指定資料夾；之後操作 Git 前，先進到正確專案位置。",
              done: false,
            },
            {
              text: "mkdir",
              desc: "在目前位置建立新資料夾，先把練習專案獨立出來。",
              done: false,
            },
            {
              text: "PATH 概念",
              desc: "系統會沿著 PATH 記錄的位置尋找程式，找得到指令才能執行。",
              done: false,
            },
            {
              text: "拖曳資料夾到 cd 路徑",
              desc: "先輸入 cd 和空格，再把資料夾拖進終端機，路徑就會自動貼上。",
              done: false,
              bonus: true,
            },
            {
              text: "open／explorer",
              desc: "用 Finder 或檔案總管打開目前資料夾；「.」代表現在所在的位置。",
              done: false,
              bonus: true,
            },
            {
              text: "touch",
              desc: "建立一個沒有內容的新檔案；檔案已存在時不會清空內容。",
              done: false,
              bonus: true,
            },
            {
              text: "cp",
              desc: "cp 後面接來源與目的地，就能複製一份檔案。",
              done: false,
              bonus: true,
            },
            {
              text: "mv",
              desc: "mv 可以移動位置，也可以留在同一層重新命名。",
              done: false,
              bonus: true,
            },
            {
              text: "cat",
              desc: "把檔案內容直接印在終端機上，快速確認文字檔內容。",
              done: false,
              bonus: true,
            },
            {
              text: "rm",
              desc: "刪除檔案不會進資源回收桶，執行前先確認目標。",
              done: false,
              bonus: true,
            },
            {
              text: "VS Code 開啟資料夾",
              desc: "用「開啟資料夾」選擇專案，之後以資料夾為單位工作。",
              done: false,
            },
            {
              text: "code 指令入 PATH",
              desc: "把 code 命令加入 PATH，之後輸入 code . 就能開啟目前資料夾。",
              done: false,
              bonus: true,
            },
            {
              text: "VS Code 整合終端機",
              desc: "在 VS Code 底部開啟終端機，編輯器與指令操作留在同一個視窗。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "03",
          title: "Git 身分與首個 commit",
          points: [
            {
              text: "git config",
              desc: "開始記錄歷史之前，先設定名字與 email，讓 commit 有正確作者署名。",
              done: false,
            },
            {
              text: "--global 差別",
              desc: "--global 代表這台電腦之後的 Git 專案，都會套用同一組署名。",
              done: false,
            },
            {
              text: ".gitconfig 位置",
              desc: "git config 背後是在寫純文字設定檔，之後設定跑掉時就知道從哪裡查。",
              done: false,
              bonus: true,
            },
            {
              text: "專案級 name/email 覆寫",
              desc: "不加 --global 只影響目前專案，工作與個人專案就能使用不同身分。",
              done: false,
              bonus: true,
            },
            {
              text: "git init",
              desc: "讓 Git 接手記錄這個資料夾的版本，建立新的儲存庫。",
              done: false,
            },
            {
              text: "認識 .git",
              desc: ".git 是版本紀錄存放的位置，也是 Git 的核心資料夾。",
              done: false,
            },
            {
              text: "git status",
              desc: "新增或修改檔案後，先問 Git 目前看到什麼狀態。",
              done: false,
            },
            {
              text: "init 錯了重來",
              desc: "如果在錯的資料夾 init，移除那裡的 .git，就會回到沒有版本控制的狀態。",
              done: false,
              bonus: true,
            },
            {
              text: "圖形介面顯示隱藏檔",
              desc: ".git 是隱藏資料夾；看不到不代表 init 失敗，先確認工具是否顯示隱藏檔。",
              done: false,
              bonus: true,
            },
            {
              text: "三層架構",
              desc: "先修改，再挑選，最後保存；這就是工作目錄、暫存區、儲存庫的順序。",
              done: false,
            },
            {
              text: "git add",
              desc: "把這次想提交的變更放進暫存區，等待下一步 commit。",
              done: false,
            },
            {
              text: "git commit",
              desc: "把暫存區的內容保存成一個 commit，並附上訊息。",
              done: false,
            },
            {
              text: "commit message",
              desc: "一句話說清楚這個 commit 改了什麼，之後回頭看才找得到脈絡。",
              done: false,
            },
            {
              text: "日常循環",
              desc: "改完先 status 看狀態，再決定 add 什麼，最後 commit 保存版本。",
              done: false,
            },
            {
              text: "git add . vs 指定檔案",
              desc: "git add . 會一口氣加入所有變更；不確定加了什麼，就先用 status 看清楚。",
              done: false,
              bonus: true,
            },
            {
              text: "git commit --amend",
              desc: "還沒 push 前，可以用 amend 修正最後一個 commit 的訊息或內容。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "04",
          title: "Git 暫存、歷史與忽略",
          points: [
            {
              text: "部分提交",
              desc: "用暫存區逐檔挑選變更，把不同目的拆成各自清楚的 commit。",
              done: false,
            },
            {
              text: "git restore --staged",
              desc: "把檔案移出暫存區；取消暫存，不刪檔案、不改內容。",
              done: false,
            },
            {
              text: "add 後又改檔",
              desc: "git add 收下的是檔案當下的版本；後面又改，就要再 add 一次。",
              done: false,
              bonus: true,
            },
            {
              text: "git log",
              desc: "查看提交紀錄；完整資訊詳細，平常會搭配 --oneline 快速瀏覽。",
              done: false,
            },
            {
              text: "git diff",
              desc: "查看工作目錄裡還沒 add 的改動，分清楚原本內容與現在內容。",
              done: false,
            },
            {
              text: "git log -n",
              desc: "歷史很多時，可以先限制只看最近幾個 commit。",
              done: false,
              bonus: true,
            },
            {
              text: "git log -p",
              desc: "每個 commit 後面接著顯示當時的逐行改動，把時間軸和內容一起看。",
              done: false,
              bonus: true,
            },
            {
              text: "git diff --staged",
              desc: "已經 add 的內容，要加上 --staged 才看得到。",
              done: false,
              bonus: true,
            },
            {
              text: ".gitignore",
              desc: "把祕密、本機設定、可重建的檔案先放進忽略清單。",
              done: false,
            },
            {
              text: "git rm --cached 不回溯",
              desc: "已追蹤的檔案要先取消追蹤，.gitignore 才接得上。",
              done: false,
              bonus: true,
            },
            {
              text: ".gitignore 官方範本",
              desc: "從 GitHub 官方範本起手，再依專案微調，通常比自己硬背規則可靠。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "05",
          title: "GitHub 介紹與設定",
          points: [
            {
              text: "Git vs GitHub",
              desc: "Git 是裝在電腦上的版本控制工具，GitHub 是放遠端儲存庫的平台。",
              done: false,
            },
            {
              text: "remote 概念",
              desc: "本地儲存庫放在電腦上；遠端儲存庫放在 GitHub 上，也有自己的網址。",
              done: false,
            },
            {
              text: "GitHub 帳號",
              desc: "註冊帳號後，作品、儲存庫列表和協作紀錄都會出現在這裡。",
              done: false,
            },
            {
              text: "public vs private",
              desc: "public 任何人都能看到程式碼；private 只有你和受邀的人看得到。",
              done: false,
            },
            {
              text: "GitLab",
              desc: "GitLab、Bitbucket 也提供類似功能；Git 指令與 remote 概念仍然通用。",
              done: false,
              bonus: true,
            },
            {
              text: "repo 頁面導覽",
              desc: "Code 看檔案，Issues 記錄問題與待辦，Actions 放自動化流程，Settings 管理設定。",
              done: false,
              bonus: true,
            },
            {
              text: "PAT",
              desc: "PAT 是給終端機使用的通行證，用 token 取代 GitHub 帳號密碼。",
              done: false,
            },
            {
              text: "為何不用帳密？",
              desc: "通行證可以限制權限、設定到期日，也能在外洩時撤銷重發。",
              done: false,
              bonus: true,
            },
            {
              text: "最小權限原則",
              desc: "只勾這次真正需要的權限，到期日不要設太長，降低外洩影響。",
              done: false,
              bonus: true,
            },
            {
              text: "git remote add origin",
              desc: "把本地儲存庫接到 GitHub 儲存庫；origin 是之後代替網址的小名。",
              done: false,
            },
            {
              text: "git branch -M",
              desc: "把目前分支重新命名成 main，對齊 GitHub 常用的主線名稱。",
              done: false,
            },
            {
              text: "master → main",
              desc: "main 是近年更常見的預設主分支名稱，也常是部署與協作對齊的位置。",
              done: false,
            },
            {
              text: "git push",
              desc: "把 main 推到遠端，讓 GitHub 上也有同一個 commit。",
              done: false,
            },
            {
              text: "git clone",
              desc: "clone 會自動建立資料夾，裡面包含完整 Git 歷史，也會設定 origin。",
              done: false,
            },
            {
              text: "為何要求 main？",
              desc: "先把主分支名稱對齊 GitHub 慣例，之後推送與部署會少一步調整。",
              done: false,
              bonus: true,
            },
            {
              text: "init.defaultBranch 設為 main",
              desc: "設定後，新儲存庫一開始就會使用 main，不用每次手動改名。",
              done: false,
              bonus: true,
            },
            {
              text: "GitHub Pages",
              desc: "GitHub Pages 會把儲存庫裡的 index.html 發佈成公開網頁。",
              done: false,
            },
            {
              text: "部署非即時",
              desc: "按下 Save 或 push 後，GitHub 會先跑一輪部署流程，網站通常不會立刻出現。",
              done: false,
              bonus: true,
            },
            {
              text: "Pages 網址規則",
              desc: "一般專案網址會帶 repo 名稱；個人首頁儲存庫則直接使用帳號網址。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "06",
          title: "GitHub Pages 部署頁面",
          points: [
            {
              text: "部署「技能儀表板」頁面",
              desc: "完成情境挑戰：任何人都能透過公開網址瀏覽你的技能儀表板。",
              done: false,
            },
            {
              text: "Pages 沒出現？",
              desc: "先檢查分支、路徑與部署狀態，通常就能找到 Pages 沒畫面的原因。",
              done: false,
              bonus: true,
            },
            {
              text: "data.js 資料格式排錯",
              desc: "畫面空白或跳出錯誤時，先檢查逗號、引號和括號有沒有收好。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "07",
          title: "AI 開發助理",
          points: [
            {
              text: "AI 基本概念",
              desc: "AI 適合當開發助理，幫你查資料、解釋狀況、先寫草稿。",
              done: false,
            },
            {
              text: "Antigravity CLI",
              desc: "跑在終端機裡，能在專案脈絡中回答與協助處理工作。",
              done: false,
            },
            {
              text: "Antigravity 繼任 Gemini CLI",
              desc: "它是 Google Gemini CLI 的官方繼任者，課程以它作為終端機 AI 工具。",
              done: false,
              bonus: true,
            },
            {
              text: "Agent Skills 概念",
              desc: "Skills 就是一份工作說明書，讓 AI 遇到同類任務時照規則工作。",
              done: false,
            },
            {
              text: "SKILL.md 格式",
              desc: "一份 skill 會寫清楚名稱、何時載入、規則與正確示範。",
              done: false,
            },
            {
              text: "create-commit",
              desc: "先安裝 create-commit，再請 AI 依照這次暫存的改動撰寫 commit 草稿。",
              done: false,
            },
            {
              text: "Context 觀念",
              desc: "載入 skill 會把規則放進這次對話脈絡；載入越多，留給任務的空間越少。",
              done: false,
            },
            {
              text: "skill 作用層級",
              desc: "放在 User Global 對所有專案生效；放進專案內的 .agents/skills，只對這個專案生效。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "08",
          milestone: true,
          title: "部署「技能儀表板」頁面",
          desc: "完成後，別人也能透過公開網址瀏覽你的技能儀表板。",
        },
      ],
    },
    {
      id: "week-2",
      kind: "week",
      week: 2,
      module: "BRANCH",
      title: "分支協作，發出第一個拉取請求",
      groups: [
        {
          no: "01",
          title: "第一週課程實作複習",
          note: "用指令重走一次 W1 的上線流程加深記憶，技能項目收錄在 W1 分頁。",
        },
        {
          no: "02",
          title: "Git GUI 與分支概念",
          points: [
            {
              text: "CLI 與 GUI",
              desc: "圖形化介面把指令變成看得到、可以點的畫面，底層做的事相同。",
              done: false,
            },
            {
              text: "安裝 Git Graph",
              desc: "在 VS Code 擴充套件搜尋安裝，選作者 mhutchie 的那一個。",
              done: false,
            },
            {
              text: "讀懂提交歷史圖",
              desc: "每個圓點是一次提交，線條與顏色代表分支怎麼分開又合起來。",
              done: false,
            },
            {
              text: "檢視單次提交的差異",
              desc: "點一個提交看它動了哪些檔案，綠色 + 是新增、紅色 - 是刪除。",
              done: false,
            },
            {
              text: "main 與 origin/main 標籤",
              desc: "對照兩個標籤是否在同一筆提交，就知道本機與遠端是否一致。",
              done: false,
              bonus: true,
            },
            {
              text: "分支概念",
              desc: "一條獨立的開發線，改壞了主線依然是好的，做完再合併回去。",
              done: false,
            },
            {
              text: "開分支幾乎零成本",
              desc: "分支像貼在進度上的標籤貼紙，不是複製整份專案，放心開。",
              done: false,
              bonus: true,
            },
            {
              text: "git branch",
              desc: "列出所有分支，星號 * 標示目前所在的那一條。",
              done: false,
            },
            {
              text: "git switch",
              desc: "切換到指定分支；加上 -c 可以建立並立即切換過去。",
              done: false,
            },
            {
              text: "checkout vs switch",
              desc: "舊教學常用 checkout 切分支，作用相同，優先用語意清楚的 switch。",
              done: false,
              bonus: true,
            },
            {
              text: "分支互不干擾",
              desc: "切回 main 會看到修改消失——那次修改只記錄在另一條分支上。",
              done: false,
            },
            {
              text: "Source Control 面板",
              desc: "用滑鼠完成暫存與提交，等同 git add 與 git commit -m。",
              done: false,
              bonus: true,
            },
            {
              text: "git merge",
              desc: "站在接收成果的那條分支上，把另一條分支的內容併進來。",
              done: false,
            },
            {
              text: "Vim 畫面離開方式",
              desc: "合併提交跳出的編輯器，指令以冒號開頭：:q 離開、:q! 強制離開。",
              done: false,
            },
            {
              text: "git branch -d",
              desc: "刪除已合併完成的分支；還沒合併的，小寫 -d 會出面阻止。",
              done: false,
            },
          ],
        },
        {
          no: "03",
          title: "分支保護與拉取請求",
          points: [
            {
              text: "分支保護（Ruleset）",
              desc: "套在指定分支上的一組規則，規定誰可以對這條分支做什麼。",
              done: false,
            },
            {
              text: "建立分支規則集",
              desc: "Settings → Rules → Rulesets 新增，設定名稱、狀態與目標分支。",
              done: false,
            },
            {
              text: "合併前要求 PR",
              desc: "最核心的保護：所有改動必須先開拉取請求，不能直接推送。",
              done: false,
            },
            {
              text: "禁刪除與禁強制推送",
              desc: "頁面預設勾選的兩項，避免分支被誤刪或歷史被覆寫。",
              done: false,
              bonus: true,
            },
            {
              text: "其他保護規則一覽",
              desc: "線性歷史、簽署提交、狀態檢查等，依團隊需要逐項加上。",
              done: false,
              bonus: true,
            },
            {
              text: "單人核准數陷阱",
              desc: "GitHub 不允許自己核可自己的 PR，單人專案核准數設 1 會卡死。",
              done: false,
              bonus: true,
            },
            {
              text: "Pull Request 概念",
              desc: "在 GitHub 上發出的合併請求，改動併入 main 前先被檢視審核。",
              done: false,
            },
            {
              text: "PR 與本地 merge 的差別",
              desc: "本地合併只有你看得到；PR 把合併公開進行並留下紀錄。",
              done: false,
              bonus: true,
            },
            {
              text: "推 main 被擋（GH013）",
              desc: "受保護的 main 直接推送會被拒絕，訊息指出必須走拉取請求。",
              done: false,
            },
            {
              text: "改推工作分支",
              desc: "保護只設在 main 上，把工作分支推上 GitHub，再用它開 PR。",
              done: false,
            },
            {
              text: "base 與 compare",
              desc: "base 是合併目的地、compare 是來源，把 compare 併進 base。",
              done: false,
            },
            {
              text: "合併 PR 並刪分支",
              desc: "Merge → Confirm 看到 Merged 標記，再把用完的工作分支刪掉。",
              done: false,
            },
            {
              text: "git pull 同步收尾",
              desc: "PR 併進 GitHub 的 main 後，本機切回 main 把最新內容拉下來。",
              done: false,
            },
          ],
        },
        {
          no: "04",
          title: "Git 合併衝突",
          points: [
            {
              text: "合併衝突概念",
              desc: "同一個檔案的同一處被兩邊改成不同內容，Git 停下來交給你。",
              done: false,
            },
            {
              text: "衝突不是錯誤",
              desc: "多分支並行的正常現象；改不同行能自動合併，同一處才會撞。",
              done: false,
            },
            {
              text: "衝突標記",
              desc: "HEAD 到 === 是目前分支的版本，=== 到 >>> 是併進來那邊的。",
              done: false,
            },
            {
              text: "在工作分支上解",
              desc: "把 main 併進自己的分支，讓衝突在這裡浮現、在這裡解決。",
              done: false,
            },
            {
              text: "VS Code 衝突按鈕",
              desc: "採用目前／傳入變更會留下你選的那邊，並把標記一起清掉。",
              done: false,
            },
            {
              text: "Accept Both 的陷阱",
              desc: "對單一值來說兩邊都留是錯的，會變成兩份設定互相打架。",
              done: false,
              bonus: true,
            },
            {
              text: "確認標記清乾淨",
              desc: "檔案裡不能殘留任何一個標記，漏掉一個網頁就可能壞掉。",
              done: false,
            },
            {
              text: "合併提交收尾",
              desc: "解完衝突 add 再 commit，這筆提交記錄兩條線怎麼合起來。",
              done: false,
            },
            {
              text: "推回讓 PR 復活",
              desc: "解完推上 GitHub，原本卡住的 PR 自動變成可合併，不必重開。",
              done: false,
            },
          ],
        },
        {
          no: "05",
          title: "撰寫好的分支、提交與拉取請求",
          points: [
            {
              text: "一個分支＝一個任務",
              desc: "一條分支從頭到尾只完成一件事，好審核、好回溯、也好取消。",
              done: false,
            },
            {
              text: "從 main 開新分支",
              desc: "main 是最新最穩的正式版本，從它長出的分支才包含所有成果。",
              done: false,
            },
            {
              text: "分支命名慣例",
              desc: "英文類別加斜線加 kebab-case 描述，例如 feature/mark-w1-completed。",
              done: false,
            },
            {
              text: "類別前綴四選一",
              desc: "feature 功能、fix 修錯、docs 文件、chore 雜項，一眼看出性質。",
              done: false,
            },
            {
              text: "提交訊息格式",
              desc: "類別: 中文描述——動詞開頭，一句話講清楚這次做了什麼。",
              done: false,
            },
            {
              text: "忍住不順手改",
              desc: "看到別的問題先記下來，這條分支收工後再另開分支處理。",
              done: false,
            },
            {
              text: "提交前先看清單",
              desc: "git status 看一眼要提交的檔案，冒出沒印象的就先弄清楚。",
              done: false,
              bonus: true,
            },
            {
              text: "PR 三段式內文",
              desc: "改了什麼、為什麼要改、怎麼驗證，審核的人幾秒就能看懂。",
              done: false,
            },
            {
              text: "三個名字對準一件事",
              desc: "分支、提交訊息、PR 標題精準對應同一個任務，命名自然清楚。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "06",
          title: "Antigravity CLI 與 AI Agent 觀念",
          points: [
            {
              text: "安裝 Antigravity CLI",
              desc: "在終端機貼上一行官方指令安裝，重開終端機後才讀得到。",
              done: false,
            },
            {
              text: "agy 啟動與登入",
              desc: "第一次啟動會開瀏覽器登入 Google 帳號，進得了介面就是裝好了。",
              done: false,
            },
            {
              text: "Web 版與 CLI 版差別",
              desc: "差在能不能碰到你的電腦：CLI 的 AI 能讀檔、改檔、執行指令。",
              done: false,
            },
            {
              text: "AI Agent",
              desc: "會動手的助理：你能在終端機做到的事，它幾乎都能代勞。",
              done: false,
            },
            {
              text: "token（詞元）",
              desc: "AI 處理文字的最小單位，也是計費單位；中文比英文更耗。",
              done: false,
            },
            {
              text: "context（上下文）",
              desc: "模型這次回答時眼前能看到的全部內容：對話、檔案與設定。",
              done: false,
            },
            {
              text: "context window",
              desc: "context 的容量上限，像固定大小的桌面，疊滿就忘記最舊的。",
              done: false,
            },
            {
              text: "AI 沒有記憶",
              desc: "每一輪都把先前對話整包重送，所以對話越長越貴、越易失憶。",
              done: false,
            },
            {
              text: "省 context 的習慣",
              desc: "精準給相關檔案比整包倒進去好，適時開新對話清出空間。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "07",
          title: "Agent Skills 概念",
          points: [
            {
              text: "Agent Skills",
              desc: "寫給 AI 看的標準作業說明書：一個資料夾加一份 SKILL.md。",
              done: false,
            },
            {
              text: "SKILL.md 結構",
              desc: "frontmatter 寫 name 與 description，內文寫實際做法與規範。",
              done: false,
            },
            {
              text: "skills 自動觸發",
              desc: "要求符合某個 skill 的用途時，AI 自動照規範做事，不必指名。",
              done: false,
            },
            {
              text: "安裝到 .agents/skills",
              desc: "放進專案的 .agents/skills 資料夾即完成安裝，只對這個專案生效。",
              done: false,
            },
            {
              text: "/skills 檢查清單",
              desc: "列出目前可用的 skills，確認名稱都有出現才算安裝成功。",
              done: false,
            },
            {
              text: "用 skills 走完流程",
              desc: "create-branch、create-commit、create-pr 讓每一步自動符合慣例。",
              done: false,
            },
            {
              text: "規範只寫一次",
              desc: "全班裝同一組 skills，每個人的分支、提交與 PR 格式就一致。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "08",
          milestone: true,
          title: "發出第一個拉取請求",
          desc: "用「分支 → 提交 → 拉取請求」的正規流程，更新你上線的儀表板。",
        },
      ],
    },
    {
      id: "week-3",
      kind: "week",
      week: 3,
      module: "RECOVER",
      title: "收回與退版，把流程交給 AI",
      groups: [
        {
          no: "01",
          title: "第二週課程實作複習",
          note: "用中文 prompt 重走一次上線流程，技能項目收錄在 W2 分頁。",
        },
        {
          no: "02",
          title: "兩條分支的分工與平行工作",
          points: [
            {
              text: "兩條分支平行工作",
              desc: "兩個需求各開一條分支，誰先做完誰先合併——真實團隊的日常。",
              done: false,
            },
            {
              text: "分支不會自動更新",
              desc: "建立時複製當下的 main，之後主線的變化它不會自動知道。",
              done: false,
            },
            {
              text: "先開好再動工",
              desc: "兩條分支要在任何合併之前建立，才會從同一個起點出發。",
              done: false,
            },
            {
              text: "切換後內容跟著換",
              desc: "切到另一條分支，剛合併的成果不見了——它保留出發時的樣子。",
              done: false,
            },
            {
              text: "衝突是怎麼埋下的",
              desc: "先合併的改了主線，後面那條又改同一處，對撞就此註定。",
              done: false,
            },
            {
              text: "prompt 把範圍講死",
              desc: "檔案、變數、值全寫進 prompt，並要求修改前先列出來確認。",
              done: false,
              bonus: true,
            },
            {
              text: "PR 被衝突擋下",
              desc: "conflicts 提示出現、合併按鈕變灰，GitHub 列出打架的檔案。",
              done: false,
            },
          ],
        },
        {
          no: "03",
          title: "判讀與解決合併衝突",
          points: [
            {
              text: "衝突在工作分支解",
              desc: "站在自己的分支把 main 併進來，不把問題帶到共用的 main 上。",
              done: false,
            },
            {
              text: "讀懂 CONFLICT 訊息",
              desc: "Automatic merge failed 代表合併停在半路，等你處理完收尾。",
              done: false,
            },
            {
              text: "both modified",
              desc: "git status 把卡住的檔案標成雙方都改過，指出要處理的位置。",
              done: false,
            },
            {
              text: "HEAD 是哪一邊",
              desc: "標記裡 HEAD 是你所在分支的版本，另一邊是剛併進來的 main。",
              done: false,
            },
            {
              text: "被圈進來的無辜行",
              desc: "上下兩邊相同的行只是夾在衝突區塊裡，不用選邊，留一份就好。",
              done: false,
              bonus: true,
            },
            {
              text: "決定要留哪一套",
              desc: "留這邊、留那邊、或換自己的值——沒有標準答案，但有錯的做法。",
              done: false,
            },
            {
              text: "跨檔案的一致性",
              desc: "顏色與語言是同一個決定的兩半，兩個檔案必須選同一套。",
              done: false,
            },
            {
              text: "讓 AI 先說明不動手",
              desc: "請它只解釋衝突內容、和自己讀到的對照，決定之後才讓它改。",
              done: false,
              bonus: true,
            },
            {
              text: "驗收看得見的證據",
              desc: "搜尋標記確認清乾淨，打開網頁確認顏色與語言對得上。",
              done: false,
            },
          ],
        },
        {
          no: "04",
          title: "收回還沒推送的提交",
          points: [
            {
              text: "提交代號（hash）",
              desc: "每筆提交的身分證；開頭幾碼不與人撞到，就能用來指定它。",
              done: false,
            },
            {
              text: "HEAD 與 HEAD~1",
              desc: "HEAD 指著你現在站的提交，HEAD~1 是往回數一筆。",
              done: false,
            },
            {
              text: "Git 的三個地方",
              desc: "工作目錄、暫存區、提交歷史——一次修改的旅程由上往下走。",
              done: false,
            },
            {
              text: "git restore",
              desc: "丟棄工作目錄的修改；沒提交過的內容丟了就救不回來。",
              done: false,
            },
            {
              text: "git restore --staged",
              desc: "把檔案從暫存區退回工作目錄，內容保留、只是不再排隊。",
              done: false,
            },
            {
              text: "reset 的三種模式",
              desc: "都是把 HEAD 往回移，差在暫存區與工作目錄要不要跟著回去。",
              done: false,
            },
            {
              text: "--soft 拆提交重做",
              desc: "內容原封留在暫存區，適合訊息打錯、少加檔案時退回補齊。",
              done: false,
            },
            {
              text: "--hard 整筆丟掉",
              desc: "三個地方一起拉回去，內容從眼前消失，執行前務必看清楚。",
              done: false,
            },
            {
              text: "git reflog",
              desc: "HEAD 走過的完整足跡，被 hard 丟掉的提交還能從這裡找回。",
              done: false,
            },
            {
              text: "提交就是保護",
              desc: "reflog 只救得回提交過的東西——做到一個段落就先提交。",
              done: false,
              bonus: true,
            },
            {
              text: "推過就不能 reset",
              desc: "改寫歷史推不上去，硬推要 force push，會毀掉別人的紀錄。",
              done: false,
            },
          ],
        },
        {
          no: "05",
          title: "退掉已經上線的改動",
          points: [
            {
              text: "revert（退版）",
              desc: "不動既有紀錄，用一筆內容相反的新提交把舊改動抵銷掉。",
              done: false,
            },
            {
              text: "reset vs revert 判準",
              desc: "還沒推出去用 reset；推上去或別人在用就 revert，不確定選 revert。",
              done: false,
            },
            {
              text: "GitHub 的 Revert 按鈕",
              desc: "對已合併的 PR 一鍵退版，自動開反向分支和新的 PR。",
              done: false,
            },
            {
              text: "歷史只長不短",
              desc: "做了、退掉、放回來的每一筆都在，來龍去脈日後查得到。",
              done: false,
            },
            {
              text: "退版不等於失敗",
              desc: "東西沒錯只是時機不對——先退回安全狀態，之後再放回來。",
              done: false,
            },
            {
              text: "revert 的 revert",
              desc: "退版提交也是普通提交，再退一次就能把改動原樣放回來。",
              done: false,
            },
            {
              text: "revert --no-commit",
              desc: "先產生反向改動停在暫存區，檢查過再自己提交收尾。",
              done: false,
              bonus: true,
            },
            {
              text: "退合併提交的坑",
              desc: "合併提交有兩個來源，要指定保留哪邊；多半交給 Revert 按鈕。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "06",
          title: "認識與安裝 GitHub CLI",
          points: [
            {
              text: "GitHub CLI（gh）",
              desc: "GitHub 官方命令列工具，把網頁上會點的按鈕變成終端機指令。",
              done: false,
            },
            {
              text: "git 與 gh 的分工",
              desc: "開頭是 git 的動你的電腦，開頭是 gh 的動 GitHub 上的東西。",
              done: false,
            },
            {
              text: "安裝 gh",
              desc: "Windows 用 winget、Mac 用 brew，裝完重開終端機再驗證版本。",
              done: false,
            },
            {
              text: "gh auth login",
              desc: "用瀏覽器加一次性代碼授權帳號，整台電腦只需要做一次。",
              done: false,
            },
            {
              text: "順手設定 git 認證",
              desc: "登入時選 Yes，之後 git push 不會再跳出登入視窗。",
              done: false,
              bonus: true,
            },
            {
              text: "gh 指令結構",
              desc: "gh 加資源加動作加選項：gh pr create 就是建立一個拉取請求。",
              done: false,
            },
            {
              text: "--web 開網頁驗證",
              desc: "指令加 --web 改用瀏覽器打開對應頁面，做完馬上親眼確認。",
              done: false,
            },
            {
              text: "用 --help 查用法",
              desc: "gh help、gh pr --help 一層層往下查，不需要背指令。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "07",
          title: "用 Agent Skills 完成上線流程",
          points: [
            {
              text: "慣例寫成 skills",
              desc: "六個 skills 裝進專案，名稱與格式不再需要寫死在 prompt 裡。",
              done: false,
            },
            {
              text: "create-repo",
              desc: "前置檢查後用 gh repo create 建立同名公開儲存庫並推送。",
              done: false,
            },
            {
              text: "create-pages",
              desc: "用 gh api 開啟 GitHub Pages，等建置完成回報網站網址。",
              done: false,
            },
            {
              text: "open-pr",
              desc: "依實際改動產生標題與三段式內文，推送分支並發出 PR。",
              done: false,
            },
            {
              text: "merge-pr",
              desc: "你確認過內容、開口之後才合併，刪除分支並同步本機 main。",
              done: false,
            },
            {
              text: "「不要做」的界線",
              desc: "每個 skill 做完自己那一步就停，白名單以外的指令不執行。",
              done: false,
            },
            {
              text: "放行前看懂指令",
              desc: "AI 執行 git／gh 前會先列出指令徵求同意，看懂再放行。",
              done: false,
            },
            {
              text: "合併不會自動發生",
              desc: "發 PR 與合併拆成兩個 skills，要不要併進 main 由你開口。",
              done: false,
            },
            {
              text: "角色的轉變",
              desc: "不再打指令、不再取名字：講清楚需求，然後把關放行。",
              done: false,
              bonus: true,
            },
          ],
        },
        {
          no: "08",
          milestone: true,
          title: "全程用 AI 完成上線與拉取請求",
          desc: "六個 skills 加上 gh：從建立儲存庫到合併 PR，都用中文描述需求完成。",
        },
      ],
    },
    {
      id: "week-4",
      week: 4,
    },
    {
      id: "week-5",
      week: 5,
    },
    {
      id: "week-6",
      week: 6,
    },
  ],
};
