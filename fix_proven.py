import os
import glob

search_text = "If you are asking yourself about "
search_text2 = "the short answer is that <strong>yes, professional acupuncture is statistically proven to be highly efficacious</strong> for these types of clinical inquiries. The treatment works by modulating the nervous system, reducing chronic inflammation, and resetting muscular firing patterns. However, every patient's body responds differently—which is why day-one diagnostic evaluations are critical."

search_phrase = "statistically proven"

replacement = "Acupuncture results can vary. Some patients notice changes after the first session, while others experience gradual improvement over multiple visits depending on the condition."

pages = glob.glob('src/pages/*.tsx')

for page in pages:
    with open(page, 'r') as f:
        content = f.read()

    if "statistically proven" in content:
        # replace the whole generic paragraph that I just found
        import re
        content = re.sub(r'If you are asking yourself about.*?day-one diagnostic evaluations are critical\.', replacement, content, flags=re.IGNORECASE | re.DOTALL)
        with open(page, 'w') as f:
            f.write(content)
        print(f"Removed statistically proven from {page}")
