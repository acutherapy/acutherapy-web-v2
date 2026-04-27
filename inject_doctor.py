import os

files = [
    "src/pages/BackPainAcupunctureHonoluluPage.tsx",
    "src/pages/SciaticaTreatmentHonoluluPage.tsx",
    "src/pages/AcupunctureHonoluluPage.tsx",
    "src/pages/ShoulderPainAcupunctureHonoluluPage.tsx"
]

import_statement = "import DoctorProfileCard from '@/components/DoctorProfileCard';\n"
component_call = "\n<DoctorProfileCard />\n"

for fp in files:
    if not os.path.exists(fp):
        continue
    
    with open(fp, 'r') as f:
        content = f.read()
        
    if "DoctorProfileCard" in content:
        print(f"Skipping {fp} (Already injected)")
        continue
        
    # Inject import after the last import
    last_import_idx = content.rfind("import ")
    if last_import_idx != -1:
        end_of_line = content.find("\n", last_import_idx)
        content = content[:end_of_line+1] + import_statement + content[end_of_line+1:]
        
    # Inject component. Best place is right before the final sidebar or right before the closing article tag.
    # We will search for "</article>" which all these pages have, and insert right before it.
    article_idx = content.find("</article>")
    if article_idx != -1:
        content = content[:article_idx] + component_call + content[article_idx:]
    else:
        # If no </article>, find sidebar or export default
        sidebar_idx = content.find("{/* Sidebar */}")
        if sidebar_idx != -1:
             content = content[:sidebar_idx] + component_call + content[sidebar_idx:]
        else:
             content += component_call
            
    with open(fp, 'w') as f:
        f.write(content)
        
    print(f"Injected into {fp}")
