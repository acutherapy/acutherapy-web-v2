# Vercel 平稳无感迁移上线上网指南 (Blue/Green Deployment)

由于我们要发布一个全新的代码库替换您的旧网站，我为您设计了一套**目前业内最安全的“无感替换（Blue/Green）”策略**。这个策略可以确保您的主域名（acutherapy.com）毫无任何中断，且能将所有的 API 密钥和 SEO 状态 100% 继承过来。

代码层面我已经为您全部预设完毕，只要跟着按 Vercel Dashboard 里的步骤操作即可！

---

### 第一步：创建新项目并继承密钥 (Environment Variables)

**不要直接去覆盖旧项目**，这样随时可以安全回滚：
1. **上传代码到 GitHub**：将当前开发好的整个包提交（Push）到一个新的 GitHub 仓库（例如命名为 `acutherapy-web-v2`）。
2. **在 Vercel 新建项目**：
   - 登录 Vercel，点击右上角 `Add New...` -> `Project`。
   - 选择您刚刚上传的 GitHub 仓库，点击 `Import`。
3. **配置环境变量（复制旧站的 Keys）**：
   - 在部署配置（Deploy）页面的 `Environment Variables` 选项卡展开。
   - **新开一个浏览器标签页**，打开您 Vercel 中的**旧网站项目** -> Settings -> Environment Variables。
   - 把旧网站里的所有关键密钥复制过来并添加进去：
     - `RESEND_API_KEY` (发邮件必须)
     - `OPENAI_API_KEY` (如果有使用到 AI 组件)
     - *(其他的您觉得需要的 API Key)*
4. 点击 `Deploy`。等待几十秒，Vercel 会生成一个带 `.vercel.app` 的内部测试网址给这个新项目。

---

### 第二步：利用新网站测试域名运行全站预览

点开 Vercel 生成的 `xxxx.vercel.app` 链接。
1. 在网页上随便测试一下功能（特别是刚才修复的表单提交逻辑）。
2. 此时，因为我们已经注入了真实的 `RESEND_API_KEY`，点击表格的“Secure My Spot”应该会立刻跳转到 `You're All Set!`, 并且您的诊所邮箱应该能真实收到通知！
3. （这保证了我们在最后切主域名之前，整个新网站是100%健康而且没有 Bug 的）。

---

### 第三步：如何保证只收录 acutherapy.com 而封杀 vercel.app？（代码已完成）

您完全不需要担心 Vercel 内部域名被 Google 收录导致 SEO 权重分散。
**我已经在您的代码库的 `vercel.json` 和 `public` 文件夹中为您配置了一套“智能防爬虫探测器”**：
- 当 Google 爬虫通过 `xxxx.vercel.app` 访问时，代码会自动返回 `vercel-robots.txt`，里面写着 `Disallow: /`（100% 拒绝收录）。
- 当 Google 爬虫通过主域名 `acutherapy.com` 访问时，代码会自动返回正常的 `robots.txt`，里面写着 `Allow: /`。
这套机制随代码部署后立即自动生效，保证天下只能有一个干净的 `acutherapy.com` 存在于谷歌搜索中。

---

### 第四步：域名“瞬间”交接（零停机移交）

当您在 `.vercel.app` 测试确认无误后，就可以执行最激动人心的替换操作了：

1. 进入（新创建的）Vercel 项目，点击顶部的 `Settings`，然后在左边栏选择 `Domains`。
2. 在输入框输入：`acutherapy.com`（并且如果需要也添加 `www.acutherapy.com`），点击 `Add`。
3. **关键点**：由于这个域名目前绑定在您同账号下的“旧网站”上，Vercel 会弹出一个极其友好的提示：`"This domain is currently assigned to another project. Do you want to move it to this project?"` （此域名目前分配给另一个项目。你要把它移动到当前项目中吗？）
4. 点击确认 (`Move`)。

**✅ 完成！**

只需 1 秒钟，由于您的 Vercel DNS 记录完全不需要修改，`acutherapy.com` 会在毫秒级别内将访问流量从旧网站的集群切换到您的新网站集群。
- **SEO 排名无损**：所有的 Canonical URL 在代码内均已自动锁定为主域名。
- **平滑无感**：网站不会有 1 秒钟的打不开情况。
- **随时后悔（回滚机制）**：如果您上线后发现了任何严重问题，只需回到刚才的旧网站项目里，把 `acutherapy.com` 再重新 `Add` 回去，流量就会瞬间切回旧版！
