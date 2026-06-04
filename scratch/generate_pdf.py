import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

# Premium Corporate Color Scheme (Navy & Gold Accent)
PRIMARY_NAVY = colors.HexColor('#0F2C59')
SECONDARY_BLUE = colors.HexColor('#3182CE')
ACCENT_GOLD = colors.HexColor('#D69E2E')
DARK_BG = colors.HexColor('#0F172A')
LIGHT_NEUTRAL = colors.HexColor('#F8FAFC')
BORDER_COLOR = colors.HexColor('#E2E8F0')
TEXT_DARK = colors.HexColor('#1E293B')
TEXT_BODY = colors.HexColor('#475569')

sheet_titles = [
    "Front Cover",                                # Page 1
    "Company Profile & Index",                   # Page 2
    "Toughened Safety Glass Specifications",     # Page 3
    "Double Glazed Insulating Units (DGU)",      # Page 4
    "Low-Emissivity Coating Performance",       # Page 5
    "Specialty Glass (Ceramic & Skylight)",      # Page 6
    "Quality Assurance Standards & Testing",     # Page 7
    "Facility: CNC Precision Cutting",           # Page 8
    "Facility: Diamond Edge Finishing",          # Page 9
    "Back Cover"                                  # Page 10
]

def add_header_footer(canvas, doc):
    canvas.saveState()
    
    # 1. Blueprint Grid Background (Very subtle drafting sheet lines)
    canvas.setStrokeColor(colors.HexColor('#F1F5F9'))
    canvas.setLineWidth(0.4)
    for y in range(40, 770, 30):
        canvas.line(36, y, 576, y)
    for x in range(36, 576, 30):
        canvas.line(x, 40, x, 770)

    # 2. Outer Margins Border (Standard Drafting Frame)
    canvas.setStrokeColor(PRIMARY_NAVY)
    canvas.setLineWidth(1)
    canvas.rect(36, 40, 540, 712)
    
    # 3. Top Header Title Block (Y: 722 to 752)
    canvas.line(36, 722, 576, 722)
    canvas.line(200, 722, 200, 752)
    canvas.line(410, 722, 410, 752)
    
    canvas.setFillColor(PRIMARY_NAVY)
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(42, 742, "MANUFACTURER NAME:")
    canvas.setFont('Helvetica', 8)
    canvas.drawString(42, 730, "SHASWAT GLASS SOLUTION PVT LTD")
    
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(206, 742, "DOCUMENT TYPE:")
    canvas.setFont('Helvetica', 8)
    canvas.drawString(206, 730, "TECHNICAL SPECIFICATION SHEET")
    
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(416, 742, "DOCUMENT ID:")
    canvas.setFont('Helvetica', 8)
    canvas.drawString(416, 730, "SG-TDD-2026-V1.0")
    
    # 4. Bottom Footer Title Block (Y: 40 to 70)
    # Widened Column 1 (260pt) and Column 2 (170pt) to prevent any text overlaps
    canvas.line(36, 70, 576, 70)
    canvas.line(260, 40, 260, 70)
    canvas.line(430, 40, 430, 70)
    
    page_title = sheet_titles[doc.page - 1] if doc.page <= len(sheet_titles) else "Technical Details"
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(42, 60, "SHEET SUBJECT:")
    canvas.setFont('Helvetica', 7.5)
    canvas.drawString(42, 48, f"PRODUCT: {page_title.upper()}")
    
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(266, 60, "STANDARDS & CERTIFICATIONS:")
    canvas.setFont('Helvetica', 7.5)
    canvas.drawString(266, 48, "IS 2553-1 | EN 12150-1 | ASTM C1048")
    
    canvas.setFont('Helvetica-Bold', 7)
    canvas.drawString(436, 60, "DOCUMENT TRACKING:")
    canvas.setFont('Helvetica', 7.5)
    canvas.drawString(436, 48, f"REV: 00 | SHEET {doc.page} OF 10")
    
    # 5. Corner Drafting Marks
    canvas.setStrokeColor(SECONDARY_BLUE)
    canvas.setLineWidth(0.5)
    canvas.line(20, 40, 30, 40)
    canvas.line(36, 25, 36, 35)
    canvas.line(582, 40, 592, 40)
    canvas.line(576, 25, 576, 35)
    canvas.line(20, 752, 30, 752)
    canvas.line(36, 757, 36, 767)
    canvas.line(582, 752, 592, 752)
    canvas.line(576, 757, 576, 767)
    
    canvas.restoreState()

def draw_cover(canvas, doc):
    canvas.saveState()
    
    # Drafting sheet outline
    canvas.setStrokeColor(PRIMARY_NAVY)
    canvas.setLineWidth(1)
    canvas.rect(36, 40, 540, 712)
    
    # Top Header Band with Background Image from website resources
    cover_img = "public/images/hero-slide-1.png"
    if os.path.exists(cover_img):
        # Draw background image
        canvas.drawImage(cover_img, 36, 460, width=540, height=292)
        # Draw translucent overlay to darken the photo and make white text stand out
        canvas.setFillColor(PRIMARY_NAVY)
        canvas.setFillAlpha(0.75)  # 75% opacity overlay
        canvas.rect(36, 460, 540, 292, fill=True, stroke=False)
        canvas.setFillAlpha(1.0)   # Reset alpha
    else:
        # Fallback to solid Navy Blue
        canvas.setFillColor(PRIMARY_NAVY)
        canvas.rect(36, 460, 540, 292, fill=True, stroke=False)
    
    # Accent Line (Gold)
    canvas.setFillColor(ACCENT_GOLD)
    canvas.rect(36, 452, 540, 8, fill=True, stroke=False)
    canvas.restoreState()

def draw_back_cover(canvas, doc):
    canvas.saveState()
    
    # Frame
    canvas.setStrokeColor(PRIMARY_NAVY)
    canvas.setLineWidth(1)
    canvas.rect(36, 40, 540, 712)
    
    # Back Title
    canvas.setFillColor(PRIMARY_NAVY)
    canvas.setFont('Helvetica-Bold', 18)
    canvas.drawCentredString(306, 600, "SHASWAT GLASS SOLUTION PRIVATE LIMITED")
    canvas.setFont('Helvetica-Oblique', 10)
    canvas.setFillColor(TEXT_BODY)
    canvas.drawCentredString(306, 580, "Redefining Architectural Spaces with Strength & Clarity")
    
    # Divider (Gold)
    canvas.setStrokeColor(ACCENT_GOLD)
    canvas.setLineWidth(1.5)
    canvas.line(150, 560, 462, 560)
    
    # Panel box
    canvas.setFillColor(LIGHT_NEUTRAL)
    canvas.rect(76, 180, 460, 280, fill=True, stroke=True)
    canvas.setStrokeColor(BORDER_COLOR)
    canvas.setLineWidth(0.5)
    
    # Real contact list from website info
    canvas.setFillColor(TEXT_DARK)
    canvas.setFont('Helvetica-Bold', 11)
    canvas.drawString(100, 420, "📍 Head Office & Fabrication Facility:")
    canvas.setFont('Helvetica', 9)
    canvas.setFillColor(TEXT_BODY)
    canvas.drawString(120, 400, "Shaswat Industrial Park, Gadh Road, At & Post. Khodla,")
    canvas.drawString(120, 385, "Ta. Palanpur (B.K.), Gujarat, India - 385001")
    
    canvas.setFillColor(TEXT_DARK)
    canvas.setFont('Helvetica-Bold', 11)
    canvas.drawString(100, 340, "📞 Customer Support & Inquiries:")
    canvas.setFont('Helvetica', 9.5)
    canvas.setFillColor(TEXT_BODY)
    canvas.drawString(120, 320, "+91 98983 90824  |  +91 97257 16520  |  +91 91068 66268")
    
    canvas.setFillColor(TEXT_DARK)
    canvas.setFont('Helvetica-Bold', 11)
    canvas.drawString(100, 278, "✉️ Digital Correspondence:")
    canvas.setFont('Helvetica', 9.5)
    canvas.setFillColor(TEXT_BODY)
    canvas.drawString(120, 258, "Email: shaswatglass4191@gmail.com")
    canvas.drawString(120, 242, "Direct Support: via WhatsApp Integrated Portal")
    
    # Cert notes
    canvas.setFont('Helvetica-Bold', 8)
    canvas.setFillColor(colors.HexColor('#E53E3E'))
    canvas.drawCentredString(306, 130, "WARNING: SAFETY GLAZING MATERIALS MUST BE INSTALLED ACCORDING TO IS 2553 CODE.")
    
    canvas.restoreState()

def page_router(canvas, doc):
    if doc.page == 1:
        draw_cover(canvas, doc)
    elif doc.page == 10:
        draw_back_cover(canvas, doc)
    else:
        add_header_footer(canvas, doc)

def get_page_header_banner(title_text, banner_style):
    p = Paragraph(title_text, banner_style)
    # Fit printable width of 500pt
    t = Table([[p]], colWidths=[500], rowHeights=[22])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), PRIMARY_NAVY),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 8),
    ]))
    return t

def get_technical_note(title, text, note_title_style, note_body_style):
    p_title = Paragraph(title, note_title_style)
    p_body = Paragraph(text, note_body_style)
    t = Table([[p_title], [p_body]], colWidths=[500])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), LIGHT_NEUTRAL),
        ('BOX', (0,0), (-1,-1), 0.75, BORDER_COLOR),
        ('LINEBELOW', (0,0), (0,0), 1, PRIMARY_NAVY),
        ('PADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (0,0), 3),
        ('TOPPADDING', (0,1), (0,1), 3),
    ]))
    return t

def generate_pdf(output_path):
    # Margins fit inside framing lines Y=70 to Y=722 and X=36 to X=576
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=56,  # 36 + 20pt padding
        rightMargin=56,
        topMargin=90,   # Y=792 to Y=702 (leaves space below Y=722 header block)
        bottomMargin=95 # Y=0 to Y=95 (leaves space above Y=70 footer block)
    )
    
    styles = getSampleStyleSheet()
    
    # Typography Styles
    banner_title_style = ParagraphStyle(
        'BannerTitle',
        parent=styles['Heading1'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=13,
        textColor=colors.white,
        spaceAfter=0,
        keepWithNext=True
    )
    
    h2_style = ParagraphStyle(
        'CatalogH2',
        parent=styles['Heading2'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=SECONDARY_BLUE,
        spaceBefore=6,
        spaceAfter=4,
        keepWithNext=True
    )
    
    body_style = ParagraphStyle(
        'CatalogBody',
        parent=styles['BodyText'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=TEXT_DARK,
        spaceAfter=8
    )
    
    bullet_style = ParagraphStyle(
        'CatalogBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13.5,
        textColor=TEXT_BODY,
        leftIndent=10,
        spaceAfter=2.5
    )
    
    th_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=10.5,
        textColor=colors.white
    )
    
    td_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=TEXT_DARK
    )
    
    td_bold_style = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=TEXT_DARK
    )
    
    card_title_style = ParagraphStyle(
        'CardTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=PRIMARY_NAVY,
        spaceAfter=3
    )

    note_title_style = ParagraphStyle(
        'NoteTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=11,
        textColor=PRIMARY_NAVY
    )
    
    note_body_style = ParagraphStyle(
        'NoteBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11.5,
        textColor=TEXT_BODY
    )

    cover_company_name_style = ParagraphStyle(
        'CoverCompanyName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=colors.white,
        spaceAfter=15
    )

    cover_title_style = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#CBD5E0'),
        spaceAfter=6
    )
    
    cover_subtitle_style = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor('#A0AEC0'),
        spaceAfter=10
    )

    story = []
    
    # ------------------ PAGE 1: COVER ------------------
    # Flow all cover text and logo in the story so they naturally flow and never overlap.
    story.append(Spacer(1, 15))
    story.append(Paragraph("<font color='#D69E2E'>SHASWAT</font> GLASS SOLUTION PRIVATE LIMITED", cover_company_name_style))
    story.append(Paragraph("TECHNICAL DESIGN MANUAL", cover_title_style))
    story.append(Paragraph("HIGH-PERFORMANCE STRUCTURAL & SAFETY GLASS SOLUTIONS", cover_subtitle_style))
    
    # Precise spacer pushes the logo exactly below the gold accent line (Y=452) onto the white background
    story.append(Spacer(1, 110))
    
    logo_path = "public/logo.png"
    if os.path.exists(logo_path):
        logo_img = Image(logo_path, width=50, height=50)
        logo_text_style = ParagraphStyle(
            'LogoText',
            parent=styles['Normal'],
            fontName='Helvetica-Bold',
            fontSize=13,
            leading=16,
            textColor=PRIMARY_NAVY
        )
        logo_sub_text_style = ParagraphStyle(
            'LogoSubText',
            parent=styles['Normal'],
            fontName='Helvetica',
            fontSize=9,
            leading=12,
            textColor=TEXT_BODY
        )
        logo_table_data = [
            [logo_img, [
                Paragraph("SHASWAT GLASS SOLUTION PRIVATE LIMITED", logo_text_style),
                Paragraph("Established 2022 | Quality Certified: IS 2553 : Part 1 : 2018", logo_sub_text_style)
            ]]
        ]
        t_logo_group = Table(logo_table_data, colWidths=[60, 440])
        t_logo_group.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('PADDING', (0,0), (-1,-1), 0),
        ]))
        story.append(t_logo_group)
    else:
        story.append(Spacer(1, 50))
        
    story.append(Spacer(1, 35))
    
    # Document control table
    metadata_table_data = []
    metadata = [
        ("DOCUMENT REF NO.", "SG / TDM / 2022 / V1.0"),
        ("VERSION ISSUE", "VERSION 1.0 (OFFICIAL RELEASE)"),
        ("RELEASE DATE", "AUGUST 2022"),
        ("PREPARED BY", "ENGINEERING & QUALITY ASSURANCE DIV."),
        ("AUTHORIZED BY", "TECHNICAL DIRECTOR, SHASWAT GLASS PVT LTD"),
    ]
    for lbl, val in metadata:
        metadata_table_data.append([Paragraph(f"<b>{lbl}</b>", td_bold_style), Paragraph(val, td_style)])
        
    t_meta = Table(metadata_table_data, colWidths=[150, 330])
    t_meta.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('BACKGROUND', (0,0), (-1,-1), colors.white),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_meta)
    story.append(PageBreak())
    
    # ------------------ PAGE 2: PROFILE & INDEX ------------------
    story.append(get_page_header_banner("1.0 COMPANY PROFILE & INFRASTRUCTURE INDEX", banner_title_style))
    story.append(Spacer(1, 15))
    
    profile_text = (
        "Shaswat Glass Solution Private Limited is a premier glass processing manufacturer established to serve the "
        "growing demands of the architectural facade, structural safety, and high-end interior industries. Our manufacturing "
        "facility is equipped with automated European machines, enabling us to deliver absolute precision, dimensional "
        "accuracy, and thermal strength.\n\n"
        "We are dedicated to safety compliance and are proud to be certified under **IS 2553: Part 1:2018**, "
        "which dictates the standards for safety glazing materials in land transit and structural configurations. "
        "Our Convection Tempering furnace ensures optimal flatness and minimal optical distortion, making our glass "
        "the standard choice for high-rise commercial structures and contemporary residential spaces."
    )
    
    right_cell_content = [
        Paragraph("Key Capabilities", card_title_style),
        Spacer(1, 4),
        Paragraph("• CNC Glass Cutting Line", bullet_style),
        Paragraph("• Diamond Double Edging", bullet_style),
        Paragraph("• Convection Tempering Furnace", bullet_style),
        Paragraph("• Insulating DGU Processing", bullet_style),
        Paragraph("• Laminated Safety Line", bullet_style),
        Spacer(1, 8),
        Paragraph("Technical Index", card_title_style),
        Spacer(1, 4),
        Paragraph("Pg 3: Toughened Glass Specs", bullet_style),
        Paragraph("Pg 4: Insulated DGU Specs", bullet_style),
        Paragraph("Pg 5: Low-E Glass Specs", bullet_style),
        Paragraph("Pg 6: Specialty Glass Ranges", bullet_style),
        Paragraph("Pg 7: Quality Testing Parameters", bullet_style),
        Paragraph("Pg 8-9: Machine Facilities", bullet_style),
    ]
    
    profile_table_data = [
        [Paragraph(profile_text, body_style), right_cell_content]
    ]
    t_profile = Table(profile_table_data, colWidths=[290, 210])
    t_profile.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
        ('BACKGROUND', (1,0), (1,0), LIGHT_NEUTRAL),
        ('PADDING', (1,0), (1,0), 12),
        ('BOX', (1,0), (1,0), 0.5, BORDER_COLOR),
    ]))
    story.append(t_profile)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "ORGANIZATIONAL STATEMENT & COMMITMENT:",
        "Shaswat Glass aims to innovate structural safety glazing. We continually adapt our convective heating parameters "
        "and tooling tolerances to exceed standard specifications and deliver elite materials for contemporary facades.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 3: TOUGHENED GLASS ------------------
    story.append(get_page_header_banner("2.0 TOUGHENED / TEMPERED SAFETY GLASS SPECIFICATIONS", banner_title_style))
    story.append(Spacer(1, 15))
    
    toughened_desc = (
        "<b>Shaswat Toughened Glass</b> is a high-strength safety glass processed by controlled thermal treatments. "
        "By heating flat annealed glass to approximately 620°C and then rapidly cooling it with high-pressure air, "
        "the glass gains a highly compressed outer layer. This compression gives the glass its superior load-bearing "
        "capacity—making it up to 5 times stronger than standard annealed glass. If broken, it shatters into "
        "small, blunt-edged fragments, minimizing severe cuts."
    )
    
    spec_data_3 = [
        [Paragraph("Thickness Range", td_bold_style), Paragraph("3.5 mm to 19 mm", td_style)],
        [Paragraph("Max Size", td_bold_style), Paragraph("2440 mm × 5000 mm", td_style)],
        [Paragraph("Min Size", td_bold_style), Paragraph("100 mm × 300 mm", td_style)],
        [Paragraph("Standards", td_bold_style), Paragraph("IS 2553: Part 1 : 2018 Certified", td_style)],
    ]
    t_spec_3 = Table(spec_data_3, colWidths=[90, 150])
    t_spec_3.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    
    left_column_content = []
    img_3 = "public/images/toughened-glass.png"
    if os.path.exists(img_3):
        left_column_content.append(Image(img_3, width=230, height=150))
        left_column_content.append(Spacer(1, 8))
    left_column_content.append(Paragraph("<b>Applications:</b>", h2_style))
    left_column_content.append(Paragraph("• Facades, glass doors & partitions", bullet_style))
    left_column_content.append(Paragraph("• Balustrades, railings, canopies & skylights", bullet_style))
    left_column_content.append(Paragraph("• Bathroom glass fixtures & shower doors", bullet_style))
    
    right_column_content = [
        Paragraph(toughened_desc, body_style),
        Spacer(1, 6),
        Paragraph("Technical Specifications:", h2_style),
        Spacer(1, 4),
        t_spec_3
    ]
    
    t_layout_3 = Table([[left_column_content, right_column_content]], colWidths=[240, 260])
    t_layout_3.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_3)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "ENGINEERING DESIGN ADVISORY:",
        "Toughened glass panels cannot be cut, drilled, or edge-polished after the thermal tempering cycle. "
        "All sheet sizes, notches, countersinks, and edge grinding profiles must be fully fabricated and validated prior to furnace entry.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 4: INSULATED GLASS (DGU) ------------------
    story.append(get_page_header_banner("3.0 DOUBLE GLAZED INSULATING GLASS (DGU) SPECIFICATIONS", banner_title_style))
    story.append(Spacer(1, 15))
    
    dgu_desc = (
        "<b>Double Glazed Units (DGU)</b> are thermal insulated structures composed of two sheets of glass, "
        "separated by an aluminum spacer bar filled with desiccant and sealed hermetically. The air gap "
        "creates a thermal barrier, reducing heat gain in summer and loss in winter, while dampening ambient noise."
    )
    
    spec_data_4 = [
        [Paragraph("Pane Thickness", td_bold_style), Paragraph("4 mm to 12 mm per pane", td_style)],
        [Paragraph("Spacer Width", td_bold_style), Paragraph("6mm, 9mm, 12mm, 16mm, 20mm", td_style)],
        [Paragraph("Sealants", td_bold_style), Paragraph("Butyl PIB & Polyurethane/Silicone", td_style)],
        [Paragraph("Acoustic Rating", td_bold_style), Paragraph("Reduces external noise by up to 35 dB", td_style)],
    ]
    t_spec_4 = Table(spec_data_4, colWidths=[90, 150])
    t_spec_4.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    
    left_column_content_4 = []
    img_4 = "public/images/insulated-glass.png"
    if os.path.exists(img_4):
        left_column_content_4.append(Image(img_4, width=230, height=150))
        left_column_content_4.append(Spacer(1, 8))
    left_column_content_4.append(Paragraph("<b>Applications:</b>", h2_style))
    left_column_content_4.append(Paragraph("• Commercial facade curtain walls", bullet_style))
    left_column_content_4.append(Paragraph("• Soundproof windows for hotels & offices", bullet_style))
    left_column_content_4.append(Paragraph("• Industrial cold storage windows", bullet_style))
    
    right_column_content_4 = [
        Paragraph(dgu_desc, body_style),
        Spacer(1, 6),
        Paragraph("Technical Specifications:", h2_style),
        Spacer(1, 4),
        t_spec_4
    ]
    
    t_layout_4 = Table([[left_column_content_4, right_column_content_4]], colWidths=[240, 260])
    t_layout_4.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_4)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "THERMAL DEFLECTION WARNING:",
        "For insulated units deployed in high-altitude zones, pressure equalization tubes (capillaries) must be installed "
        "inside the spacer bar frame. This equalizes atmospheric pressure, preventing glass bowing, optical distortion, or edge seal failures.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 5: LOW-E GLASS ------------------
    story.append(get_page_header_banner("4.0 LOW-EMISSIVITY (LOW-E) COATING PERFORMANCE", banner_title_style))
    story.append(Spacer(1, 15))
    
    lowe_desc = (
        "<b>Low-E Coating Glass</b> features a microscopic metallic oxide coating that reflects thermal infrared energy "
        "while letting visible light pass. This controls solar heat gain, reducing HVAC cooling bills during summers "
        "and retaining interior heat during winters, while protecting indoor furniture from UV fading."
    )
    
    spec_data_5 = [
        [Paragraph("Coating Process", td_bold_style), Paragraph("Online Hard Coat | Offline Soft Coat", td_style)],
        [Paragraph("Glass Thickness", td_bold_style), Paragraph("5 mm to 12 mm", td_style)],
        [Paragraph("Performance", td_bold_style), Paragraph("Blocks up to 85% Infrared, 80% UV", td_style)],
        [Paragraph("U-Value Index", td_bold_style), Paragraph("Up to 70% better than annealed glass", td_style)],
    ]
    t_spec_5 = Table(spec_data_5, colWidths=[90, 150])
    t_spec_5.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    
    left_column_content_5 = []
    img_5 = "public/images/low-e-glass.png"
    if os.path.exists(img_5):
        left_column_content_5.append(Image(img_5, width=230, height=150))
        left_column_content_5.append(Spacer(1, 8))
    left_column_content_5.append(Paragraph("<b>Applications:</b>", h2_style))
    left_column_content_5.append(Paragraph("• Double glazed windows in LEED structures", bullet_style))
    left_column_content_5.append(Paragraph("• Commercial facade structural glass panels", bullet_style))
    left_column_content_5.append(Paragraph("• Climate-controlled server rooms & entries", bullet_style))
    
    right_column_content_5 = [
        Paragraph(lowe_desc, body_style),
        Spacer(1, 6),
        Paragraph("Technical Specifications:", h2_style),
        Spacer(1, 4),
        t_spec_5
    ]
    
    t_layout_5 = Table([[left_column_content_5, right_column_content_5]], colWidths=[240, 260])
    t_layout_5.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_5)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "COATING POSITION & HANDLING SPECIFICATION:",
        "To protect sputtered Low-E thin films from physical wear, the coating must face the sealed internal gap of the DGU (Surface #2 or #3). "
        "Avoid exposure to acid washes, abrasive scrapers, or prolonged humidity during site storage before installation.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 6: SPECIALTY GLASS ------------------
    story.append(get_page_header_banner("5.0 SPECIALTY GLASS: HEAT-RESISTANT CERAMIC & SKYLIGHT", banner_title_style))
    story.append(Spacer(1, 15))
    
    left_spec_content = []
    img_6_left = "public/images/ceramic-glass.png"
    if os.path.exists(img_6_left):
        left_spec_content.append(Image(img_6_left, width=230, height=130))
        left_spec_content.append(Spacer(1, 8))
    left_spec_content.append(Paragraph("Ceramic Glass (Heat Resistant)", h2_style))
    left_spec_content.append(Paragraph(
        "Ceramic safety glass handles high operating temperatures (up to 700°C) and sudden thermal shocks.\n\n"
        "<b>Thickness:</b> 4mm – 8mm\n"
        "<b>Applications:</b> Kiln windows, ovens, furnace partitions, and fireplace screens.",
        body_style
    ))
    
    right_spec_content = []
    img_6_right = "public/images/skylight-glass.png"
    if os.path.exists(img_6_right):
        right_spec_content.append(Image(img_6_right, width=230, height=130))
        right_spec_content.append(Spacer(1, 8))
    right_spec_content.append(Paragraph("Skylight Laminated Glass", h2_style))
    right_spec_content.append(Paragraph(
        "Laminated glass with a tough PVB interlayer. If broken, glass fragments stay adhered to prevent falling hazards.\n\n"
        "<b>Thickness:</b> 6.38mm to 19mm custom laminates\n"
        "<b>Applications:</b> Overhead glazing, mall atrium roofs, skylights, and glass walkways.",
        body_style
    ))
    
    t_layout_6 = Table([[left_spec_content, right_spec_content]], colWidths=[240, 260])
    t_layout_6.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_6)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "OVERHEAD SAFETY CODE REGULATION:",
        "National building codes mandate that overhead skylight glazing must use laminated glass containing a PVB interlayer. "
        "This prevents tempered glass fragments from falling down as a cluster if struck by hard debris.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 7: QUALITY CERTIFICATION ------------------
    story.append(get_page_header_banner("6.0 QUALITY POLICY & NATIONAL SAFETY STANDARDS COMPLIANCE", banner_title_style))
    story.append(Spacer(1, 15))
    
    quality_intro = (
        "<b>Quality Control System:</b> Raw glass undergoes thickness checks before cutting. Edge polishing eliminates "
        "edge micro-fractures, and the convection tempering furnace uses automatic temperature controls. We conform "
        "strictly to the national standard **IS 2553: Part 1 : 2018** to guarantee safety under mechanical impact."
    )
    
    test_headers = [
        [Paragraph("Testing Parameter", th_style), Paragraph("Quality Assurance Standards", th_style)]
    ]
    test_rows = [
        [Paragraph("<b>Impact Strength</b>", td_bold_style), Paragraph("Steel ball drop test to evaluate structural shock resistance.", td_style)],
        [Paragraph("<b>Fragmentation</b>", td_bold_style), Paragraph("Counts broken pieces in 50x50mm area; requires 40+ safety granules.", td_style)],
        [Paragraph("<b>Optical Test</b>", td_bold_style), Paragraph("Inline reflective scan to guarantee distortion-free facade clarity.", td_style)],
        [Paragraph("<b>Thermal Shock</b>", td_bold_style), Paragraph("Thermal endurance validated by rapid heating and water quenching.", td_style)],
    ]
    t_tests = Table(test_headers + test_rows, colWidths=[85, 155])
    t_tests.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), PRIMARY_NAVY),
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, LIGHT_NEUTRAL]),
        ('PADDING', (0,0), (-1,-1), 5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    
    left_quality_content = [
        Paragraph(quality_intro, body_style),
        Spacer(1, 4),
        Paragraph("<b>Certifications & Approvals:</b>", h2_style),
        Paragraph("• Bureau of Indian Standards (BIS) IS 2553: Part 1 certified.", bullet_style),
        Paragraph("• Tempering thermal heat cycle certified.", bullet_style),
        Paragraph("• Standard size and dimensional tolerance control.", bullet_style),
    ]
    
    t_layout_7 = Table([[left_quality_content, t_tests]], colWidths=[240, 260])
    t_layout_7.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_7)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "QUALITY CONTROL AUDIT SHIFT FREQUENCY:",
        "Destructive fragmentation and optical distortion checks are executed on trial samples at the start of every production shift "
        "for each glass thickness profile to guarantee full compliance with safety benchmarks.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 8: INFRASTRUCTURE (CNC) ------------------
    story.append(get_page_header_banner("7.0 INFRASTRUCTURE: CNC PRECISION CUTTING FACILITIES", banner_title_style))
    story.append(Spacer(1, 15))
    
    cnc_desc = (
        "<b>Intermac CNC Glass Cutting System</b>\n\n"
        "Shaswat Glass utilizes the industry-leading <b>Intermac CNC Cutting Machine</b>, a computer-controlled cutting table. "
        "The automated cutting table imports CAD designs directly, processing shapes with extreme speed and zero-defect consistency. "
        "Proper cutting is necessary before tempering, ensuring raw glass edges are free of micro-fractures which prevents "
        "breakage in the furnace."
    )
    
    spec_data_8 = [
        [Paragraph("Precision Tolerance", td_bold_style), Paragraph("+/- 0.2 mm", td_style)],
        [Paragraph("Maximum Sheet Size", td_bold_style), Paragraph("2440 mm × 5000 mm", td_style)],
        [Paragraph("Cutting Shapes", td_bold_style), Paragraph("Polygons, circles, custom curves", td_style)],
        [Paragraph("CAD Automation", td_bold_style), Paragraph("Direct file interface feed", td_style)],
    ]
    t_spec_8 = Table(spec_data_8, colWidths=[100, 140])
    t_spec_8.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    
    left_column_content_8 = []
    img_8 = "public/images/cnc-cutting-machine-1.jpg"
    if os.path.exists(img_8):
        left_column_content_8.append(Image(img_8, width=230, height=150))
        left_column_content_8.append(Spacer(1, 8))
    left_column_content_8.append(Paragraph("<b>Equipment Advantages:</b>", h2_style))
    left_column_content_8.append(Paragraph("• Eliminates manual glass cutting errors", bullet_style))
    left_column_content_8.append(Paragraph("• Maximizes sheet yield and minimizes waste", bullet_style))
    left_column_content_8.append(Paragraph("• Ideal for large-scale custom facade panels", bullet_style))
    
    right_column_content_8 = [
        Paragraph(cnc_desc, body_style),
        Spacer(1, 6),
        Paragraph("Machine Capabilities:", h2_style),
        Spacer(1, 2),
        t_spec_8
    ]
    
    t_layout_8 = Table([[left_column_content_8, right_column_content_8]], colWidths=[240, 260])
    t_layout_8.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_8)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "DIAMOND CUTTING TOOL MAINTENANCE:",
        "Micro-fracturing during mechanical cutting creates high stress points which cause panel breakages inside the furnace. "
        "CNC diamond scribe wheels are checked and replaced regularly to guarantee perfectly smooth glass edges.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 9: INFRASTRUCTURE (EDGE) ------------------
    story.append(get_page_header_banner("8.0 INFRASTRUCTURE: DIAMOND EDGE POLISHING FACILITIES", banner_title_style))
    story.append(Spacer(1, 15))
    
    edge_desc = (
        "<b>SK Glass Edge Polishing Line</b>\n\n"
        "After cutting, glass edges have micro-flaws. We utilize the automated <b>SK Glass Edge Polishing Machine</b> "
        "to grind and polish glass edges. This double-edging machine processes opposite sides of glass panels "
        "simultaneously, using multi-stage diamond abrasive wheels to grind edges, followed by polishing pads "
        "to achieve a clean margin. This prevents breakage in the convection tempering furnace."
    )
    
    spec_data_9 = [
        [Paragraph("Thickness Range", td_bold_style), Paragraph("3.5 mm to 19 mm", td_style)],
        [Paragraph("Edge Profiles", td_bold_style), Paragraph("Flat polished, pencil profiles, bevels", td_style)],
        [Paragraph("Finish Quality", td_bold_style), Paragraph("High gloss mirror-edge finish", td_style)],
        [Paragraph("Speed Automation", td_bold_style), Paragraph("Inline continuous speed feed", td_style)],
    ]
    t_spec_9 = Table(spec_data_9, colWidths=[100, 140])
    t_spec_9.setStyle(TableStyle([
        ('BOX', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
        ('PADDING', (0,0), (-1,-1), 5),
    ]))
    
    left_column_content_9 = []
    img_9 = "public/images/edge-polishing-machine.jpg"
    if os.path.exists(img_9):
        left_column_content_9.append(Image(img_9, width=230, height=150))
        left_column_content_9.append(Spacer(1, 8))
    left_column_content_9.append(Paragraph("<b>Equipment Advantages:</b>", h2_style))
    left_column_content_9.append(Paragraph("• Eliminates risk of micro-cracks along the edge", bullet_style))
    left_column_content_9.append(Paragraph("• Provides a visually stunning gloss margin for frameless glass", bullet_style))
    left_column_content_9.append(Paragraph("• High production rate for bulk architectural orders", bullet_style))
    
    right_column_content_9 = [
        Paragraph(edge_desc, body_style),
        Spacer(1, 6),
        Paragraph("Machine Capabilities:", h2_style),
        Spacer(1, 2),
        t_spec_9
    ]
    
    t_layout_9 = Table([[left_column_content_9, right_column_content_9]], colWidths=[240, 260])
    t_layout_9.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('PADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (0,0), 15),
    ]))
    story.append(t_layout_9)
    story.append(Spacer(1, 20))
    story.append(get_technical_note(
        "EDGE GRINDING SPECIFICATION FOR TEMPERING:",
        "Tempering standards require flat polished edges with arris (pencil/chamfer margins) to remove razor-sharp edge stress. "
        "Never subject raw ground glass to tempering without beveling edge arris margins.",
        note_title_style, note_body_style
    ))
    story.append(PageBreak())
    
    # ------------------ PAGE 10: BACK COVER ------------------
    story.append(Spacer(1, 10))
    
    # Build
    doc.build(story, onFirstPage=draw_cover, onLaterPages=page_router)
    print("Design Document format PDF compiled successfully with background image and correct details!")

if __name__ == "__main__":
    generate_pdf("public/shaswat-glass-catalogue.pdf")
