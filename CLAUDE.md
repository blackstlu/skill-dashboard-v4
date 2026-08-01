# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 這是什麼

一個單人使用的「技能儀表板」（技能儀表板），用於「GitHub Actions CI/CD 自動化與 AI 協作實務班」課程。這是一個純靜態、無需建置、無任何相依套件的網站：直接用瀏覽器開啟 `index.html`（或用任何靜態檔案伺服器來提供這個資料夾）即可檢視。這個 repo 裡沒有套件管理工具、打包工具、linter 或測試框架——除非使用者要求，否則不要另外引入。

## 常用指令

沒有 build/lint/test 相關工具。唯一的「工作流程」是編輯 `data.js`，然後重新整理瀏覽器頁面查看變化。編輯完 `data.js` 後，可以檢查括號、逗號是否成對、有沒有多餘的尾隨逗號——這裡出現語法錯誤時，畫面會顯示「讀不到資料」而不是儀表板本身。

## 架構

所有邏輯都集中在兩個檔案裡：

- **`data.js`** —— 唯一需要經常編輯的檔案。它設定了 `window.DASHBOARD_DATA`，是一個純物件，包含 `profile`（學員姓名／主力語言）與 `sections`（陣列，對應課程各個段落：`onboarding`、`week-1` … `week-6`）。每個 section 底下有 `groups`，每個 group 可能是 `points`（技能項目陣列，含 `text`／`desc`／`done`／可選的 `bonus`）、只有 `note` 的佔位群組，或是 `milestone` 群組（當週目標橫幅）。`done: false → true` 就是學員把技能標記為「已學會」的方式。
- **`index.html`** —— 包含所有 CSS（`:root` / `html[data-theme="dark"]` 底下的主題變數）以及所有渲染用的 JS，全部寫在行內、純 vanilla JS（沒有框架、沒有建置流程）。行內 `<script>` 裡的關鍵部分：
  - `SCHEDULE` —— 寫死每個 section 的顯示日期與 ISO 格式的 `releaseAt` 時間戳記；`isUnlocked()` 依據 `Date.now()` 與 `releaseAt` 的比較，決定該 section 的分頁能不能點——所以各段落會隨課程進行「自動解鎖」。
  - `compute()` —— 每次渲染時，從 `state.data` 加上 `state.tab`／`state.expanded`，推導出所有畫面所需的狀態（各 section／各 group 的完成數、主線與加分項的進度、目前 active 的分頁是哪個）。這是所有 render 函式讀取資料的唯一來源；不要繞過它直接操作 DOM。
  - `renderHeader` / `renderTabs` / `renderGrid` —— 都是把 `compute()` 產生的 view 轉成 `innerHTML` 字串的 pure function，一律透過 `esc()` 做 HTML 逸出（絕不把原始資料直接插入標記）。
  - 卡片展開／收合用的是手動實作的 FLIP 動畫（`captureRects` → 改變 state → 重新渲染 → `flip()`），而不是用 CSS transition，因為展開時整個 grid 都會重新排列。
  - 所有狀態（主題、目前分頁、展開中的卡片）都集中在單一的 `state` 物件裡，每次互動都會整個重新推導、重新渲染（`renderAll()`）；沒有局部的 DOM patch 機制。

## `skills/` —— 課程專屬的 Git/GitHub 工作流程

這個 repo 附帶了自己的 Claude Code skills（`skills/*/SKILL.md`），把課程規定的 Git/GitHub 慣例寫死在裡面。在這個 repo 裡執行任何 git 或 `gh` 相關操作時，應該使用對應的 skill 而不是自行發揮，並且遵守每個 skill 宣告的嚴格指令白名單（每份 SKILL.md 最後都有一個「不要做」段落，列出這個 skill 唯一允許執行的 `git`／`gh` 子指令——清單以外一律不執行）：

- **create-branch** —— 分支命名格式為 `類別/英文簡短描述`（`feature|fix|docs|chore`），一律從 `main` 建立，一個分支只做一件事。
- **create-commit** —— 提交訊息格式為 `類別: 中文描述`（類別用英文，例如 `feat`；描述用中文），一次提交只講一件事，不使用 `--amend`。
- **open-pr** —— PR 標題是一句純中文描述（不加類別前綴）；內文固定用三段式 Markdown 模板（這次改了什麼／為什麼要改／怎麼驗證）。
- **merge-pr** —— 只用 `gh pr merge --merge --delete-branch` 合併（建立合併提交，絕不 squash 或 rebase），且只在使用者確認已檢視過 PR 內容之後才進行。
- **create-repo** —— 透過 `gh repo create --source . --public --push`，以本機資料夾同名，把專案發佈成公開的 GitHub repo。
- **create-pages** —— 透過 `gh api`，以 `main` 分支的根目錄作為來源，開啟 GitHub Pages。

每個 skill 的職責範圍都刻意切得很窄（例如 create-branch 不會順手 stage/commit，open-pr 不會順手合併）——除非使用者明確要求進行下一步，否則不要把這些職責串在一起做。
