from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from pathlib import Path

# Windows Downloads folder
downloads = Path.home() / "Downloads"

keywords = [
    "apple",
    "javascript",
    "python",
    "computer",
    "database",
    "network",
    "software",
    "document",
    "server",
    "technology"
]

for i in range(1, 11):
    filename = downloads / f"test_document_{i}.pdf"

    pdf = canvas.Canvas(str(filename), pagesize=A4)

    # Page 1
    pdf.drawString(100, 750, f"Test Document {i}")
    pdf.drawString(100, 700, f"This is page 1 of test_document_{i}.pdf")
    pdf.drawString(100, 650, f"This document contains the keyword {keywords[i - 1]}.")

    pdf.showPage()

    # Page 2
    pdf.drawString(100, 750, f"Test Document {i}")
    pdf.drawString(100, 700, "This is page 2.")
    pdf.drawString(100, 650, "The keyword javascript appears on this page.")

    pdf.showPage()

    # Page 3
    pdf.drawString(100, 750, f"Test Document {i}")
    pdf.drawString(100, 700, "This is page 3.")
    pdf.drawString(100, 650, "The keyword python appears on this page.")

    pdf.showPage()

    pdf.save()

    print(f"Created: {filename}")

print("\n10 PDFs created successfully!")
print(f"Location: {downloads}")