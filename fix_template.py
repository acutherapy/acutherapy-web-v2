import os
import glob

pages = glob.glob('src/pages/*.tsx')

target1 = "Most patients see improvement in 3–5 visits."
target2 = "Full recovery may take 4–10+ sessions."

repl1 = "Some patients notice early changes within a few sessions."
repl2 = "Others may require a longer course of care depending on the condition."

for page in pages:
    if not os.path.exists(page): continue
    with open(page, 'r') as f:
        content = f.read()

    changed = False
    if target1 in content:
        content = content.replace(target1, repl1)
        changed = True
    if target2 in content:
        content = content.replace(target2, repl2)
        changed = True

    if changed:
        with open(page, 'w') as f:
            f.write(content)
        print(f"Replaced 3-5 visits template in {page}")

print("Bulk replacement complete.")
