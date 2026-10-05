"""Render four original, silent portfolio UI demos; no remote footage is used.

Optional authoring dependencies: python -m pip install Pillow imageio-ffmpeg
Run from any directory: python scripts/generate-project-previews.py
These tools are not needed to build or serve the portfolio.
"""

from functools import lru_cache
import math
import os
from pathlib import Path
import subprocess

from PIL import Image, ImageDraw, ImageFont
import imageio_ffmpeg


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public/videos/projects"
WIDTH, HEIGHT, FPS, SECONDS = 960, 600, 24, 8
INK, MUTED, LINE = "#182326", "#788384", "#e6ebea"


@lru_cache(maxsize=None)
def font(size, bold=False):
    candidates = [
        Path(os.environ.get("WINDIR", "C:/Windows")) / "Fonts" / ("segoeuib.ttf" if bold else "segoeui.ttf"),
        Path("/usr/share/fonts/truetype/dejavu") / ("DejaVuSans-Bold.ttf" if bold else "DejaVuSans.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size)
    return ImageFont.load_default(size=size)


def text(draw, position, value, size=14, fill=INK, bold=False):
    draw.text(position, value, font=font(size, bold), fill=fill)


def box(draw, rect, fill="white", radius=12, outline=None, width=1):
    draw.rounded_rectangle(rect, radius=radius, fill=fill, outline=outline, width=width)


def pill(draw, x, y, value, fill="#e8f3ec", color="#32734c", size=11):
    length = draw.textlength(value, font=font(size, True))
    box(draw, (x, y, x + length + 20, y + 23), fill, 6)
    text(draw, (x + 10, y + 3), value, size, color, True)


def gradient(top, bottom):
    image = Image.new("RGB", (WIDTH, HEIGHT))
    draw = ImageDraw.Draw(image)
    a, b = tuple(bytes.fromhex(top)), tuple(bytes.fromhex(bottom))
    for y in range(HEIGHT):
        p = y / HEIGHT
        color = tuple(round(start + (end - start) * p) for start, end in zip(a, b))
        draw.line((0, y, WIDTH, y), fill=color)
    return image


def window(image, address, fill="white"):
    draw = ImageDraw.Draw(image)
    box(draw, (24, 28, 936, 578), "#000000", 18)
    box(draw, (24, 22, 936, 570), fill, 18)
    box(draw, (24, 22, 936, 63), "#f7f8fa", 18)
    draw.rectangle((24, 45, 936, 63), fill="#f7f8fa")
    for i, color in enumerate(["#f39b91", "#ecd081", "#99c8a3"]):
        draw.ellipse((42 + i * 17, 37, 49 + i * 17, 44), fill=color)
    text(draw, (363, 30), address, 12, "#93999e")
    draw.line((24, 63, 936, 63), fill=LINE)
    return draw


def cursor(draw, x, y):
    points = [(x, y), (x + 4, y + 24), (x + 10, y + 17), (x + 17, y + 29), (x + 22, y + 26), (x + 15, y + 14), (x + 24, y + 12)]
    draw.polygon(points, fill="#182326", outline="white", width=2)


def plant(draw, cx, cy, scale=1, variation=0, phase=0):
    """Simple original botanical illustrations for the fictional catalog."""
    sway = math.sin(phase * math.tau) * 3
    stem = (cx + sway, cy - 85 * scale)
    draw.line((cx, cy, *stem), fill="#416c49", width=max(2, int(4 * scale)))
    for j in range(7):
        side = -1 if j % 2 else 1
        y = cy - (27 + j * 9) * scale
        x = cx + sway * j / 7
        tip = (x + side * (38 + variation * 6) * scale, y - (17 + j * 2) * scale)
        draw.polygon([(x, y + 8 * scale), (x + side * 30 * scale, y + 5 * scale), tip, (x + side * 9 * scale, y - 14 * scale)], fill=["#4c7950", "#6e9659", "#385f44"][j % 3])
        draw.line((x, y + 3 * scale, *tip), fill="#90ac78", width=1)
    draw.polygon([(cx - 24 * scale, cy - 4 * scale), (cx + 24 * scale, cy - 4 * scale), (cx + 18 * scale, cy + 35 * scale), (cx - 18 * scale, cy + 35 * scale)], fill=["#c18d73", "#e7d7bf", "#b8c2b5"][variation % 3])
    box(draw, (cx - 27 * scale, cy - 7 * scale, cx + 27 * scale, cy + 2 * scale), "#ddbaa3", 3)


def storefront(t):
    image = gradient("b8c9ab", "e2e7d4")
    draw = window(image, "verdant.example / shop", "#fdfcf7")
    text(draw, (57, 76), "verdant", 24, "#284d35", True)
    text(draw, (422, 85), "Shop plants     Our story     Plant care", 13, "#566c55")
    text(draw, (818, 85), "Bag (1)", 13, "#284d35", True)
    box(draw, (49, 125, 911, 302), "#e8edde", 10)
    text(draw, (78, 145), "ROOTED IN THE EVERYDAY", 11, "#65825d", True)
    text(draw, (76, 167), "A little more green.", 40, "#294932", True)
    text(draw, (79, 223), "Good plants. Thoughtful spaces. Room to grow.", 15, "#64745c")
    pill(draw, 79, 257, "Explore the collection  >", "#315640", "#ffffff")
    plant(draw, 777, 245, .95, phase=t)
    text(draw, (53, 315), "Find your new favorite", 19, "#294932", True)
    text(draw, (808, 321), "View all  >", 12, "#64745c")
    titles = ["Monstera", "Olive tree", "Rubber plant", "Bird of paradise"]
    for i, title in enumerate(titles):
        x = 52 + i * 219
        box(draw, (x, 354, x + 199, 518), ["#edf0e6", "#e5eadf", "#f1e9dc", "#e6ebe2"][i], 9)
        plant(draw, x + 99, 470, .83, i, t + i / 7)
        text(draw, (x, 526), title, 13, "#294932", True)
        text(draw, (x + 165, 526), f"${28 + i * 8}", 12, "#64745c")
    p = (1 - math.cos(t * math.tau)) / 2
    cursor(draw, 716 - p * 210, 363 + p * 55)
    if .37 < t < .85:
        pill(draw, 682, 267, "Added to your collection", "#315640", "white", 12)
    return image


def sidebar(draw, name, active, accent, dark=False):
    bg = "#182039" if dark else "#f8f9fc"
    draw.rectangle((25, 64, 199, 551), fill=bg)
    text(draw, (45, 85), name, 20, "#fafaff" if dark else INK, True)
    for i, label in enumerate(["Overview", "Activity", "Integrations", "Reports", "Settings"]):
        y = 151 + i * 47
        if i == active:
            box(draw, (37, y - 6, 187, y + 28), accent, 7)
        text(draw, (53, y), label, 13, "white" if i == active or dark else MUTED)
    text(draw, (45, 520), "DEMO WORKSPACE", 9, "#97a1b6", True)


def syncflow(t):
    image = gradient("737fc9", "bbbdeb")
    draw = window(image, "syncflow.example / overview")
    sidebar(draw, "SyncFlow", 0, "#6957d6", True)
    text(draw, (228, 86), "Everything, in sync.", 26, INK, True)
    text(draw, (230, 122), "Your storefront and back office, connected.", 13, MUTED)
    pill(draw, 791, 93, "Systems healthy")
    for i, (label, value) in enumerate([("Products synced", "1,284"), ("Success rate", "99.8%"), ("Connected apps", "03")]):
        x = 230 + i * 228
        box(draw, (x, 163, x + 207, 244), "#f9faff", 9, "#e9ebf2")
        text(draw, (x + 16, 175), label, 12, MUTED)
        text(draw, (x + 16, 199), value, 25, INK, True)
    nodes = [(302, "Storefront"), (565, "SyncFlow"), (828, "Inventory")]
    draw.line((302, 294, 828, 294), fill="#e4e0fa", width=3)
    for i in range(5):
        x = 302 + ((t * 2 + i / 5) % 1) * 526
        draw.ellipse((x - 4, 290, x + 4, 298), fill="#8976e7")
    for x, label in nodes:
        box(draw, (x - 56, 273, x + 56, 315), "#f2effe", 10, "#ddd5fb")
        text(draw, (x - 37, 285), label, 12, "#6854c6", True)
    text(draw, (232, 344), "Recent activity", 16, INK, True)
    text(draw, (792, 348), "Live updates", 11, MUTED)
    for i, (name, detail) in enumerate([("Product catalog", "Storefront -> Inventory"), ("Stock quantities", "Inventory -> Storefront"), ("Order #1048", "Storefront -> Fulfillment"), ("Price updates", "Inventory -> Storefront")]):
        y = 381 + i * 42
        draw.line((230, y - 8, 899, y - 8), fill=LINE)
        text(draw, (234, y), name, 12, INK, True)
        text(draw, (432, y), detail, 11, MUTED)
        p = (t * 2 + i * .28) % 1
        box(draw, (669, y + 5, 765, y + 10), "#efedf8", 2)
        box(draw, (669, y + 5, 670 + 95 * p, y + 10), "#9b87ef", 2)
        pill(draw, 793, y - 4, "Synced" if p > .25 else "Syncing", "#e8f3ec" if p > .25 else "#f0ebff", "#32734c" if p > .25 else "#7965ba", 10)
    return image


def analytics(t):
    image = gradient("eaaa61", "f4d6a7")
    draw = window(image, "signal.example / analytics")
    text(draw, (51, 82), "signal desk", 22, INK, True)
    text(draw, (267, 89), "Overview       Acquisition       Conversions", 13, MUTED)
    pill(draw, 805, 84, "Last 30 days", "#f7f7f7", "#65706f", 11)
    text(draw, (52, 136), "A clearer picture of growth.", 27, INK, True)
    for i, (title, val, gain) in enumerate([("Visitors", "24,806", "+12.8%"), ("Conversions", "1,248", "+18.4%"), ("Conversion rate", "5.03%", "+0.6%"), ("Revenue", "$48,920", "+21.3%")]):
        x = 52 + i * 219
        box(draw, (x, 192, x + 199, 277), "#fdfcfb", 9, "#eee9e2")
        text(draw, (x + 14, 204), title, 12, MUTED)
        text(draw, (x + 14, 228), val, 25, INK, True)
        text(draw, (x + 140, 242), gain, 10, "#3a8a66", True)
    box(draw, (52, 297, 625, 543), "white", 9, LINE)
    text(draw, (70, 311), "Conversions over time", 15, INK, True)
    text(draw, (491, 315), "This month", 11, MUTED)
    for j in range(4):
        y = 370 + j * 46
        draw.line((82, y, 604, y), fill="#eff0ef")
    for i in range(22):
        x = 83 + i * 23
        bar = 40 + i * 3.8 + 22 * math.sin(i * 1.3) + 12 * math.sin(t * math.tau + i * .3)
        box(draw, (x, 509 - bar, x + 14, 509), "#e4a450" if i != int(t * 22) else "#a86829", 3)
    text(draw, (82, 518), "SEP 01                         SEP 15                         SEP 30", 9, MUTED)
    box(draw, (645, 297, 907, 543), "white", 9, LINE)
    text(draw, (664, 311), "Top channels", 15, INK, True)
    for i, (name, value) in enumerate([("Organic search", 81), ("Direct", 65), ("Paid search", 44), ("Referral", 28)]):
        y = 355 + i * 45
        text(draw, (665, y), name, 12, MUTED)
        text(draw, (853, y), f"{value}%", 12, INK, True)
        box(draw, (665, y + 23, 886, y + 28), "#f1eeea", 2)
        box(draw, (665, y + 23, 665 + value * 2.5, y + 28), "#dfb16f", 2)
    return image


def support(t):
    image = gradient("aeb9e8", "dac9e9")
    draw = window(image, "waypoint.example / inbox")
    sidebar(draw, "Waypoint", 1, "#6966cb")
    text(draw, (229, 87), "A helpful answer. A human touch.", 24, INK, True)
    text(draw, (230, 124), "Support workspace / Conversation #0248", 12, MUTED)
    box(draw, (226, 164, 650, 544), "#fcfcff", 12, "#e7e8f0")
    draw.ellipse((246, 181, 277, 212), fill="#dedcf8")
    text(draw, (254, 185), "W", 15, "#6661b1", True)
    text(draw, (288, 179), "Waypoint Assistant", 14, INK, True)
    text(draw, (288, 200), "Here to help", 10, "#6ca383")
    draw.line((244, 225, 633, 225), fill=LINE)
    box(draw, (330, 244, 627, 299), "#716bc9", 10)
    text(draw, (345, 255), "Can you help me schedule", 13, "white")
    text(draw, (345, 274), "a consultation for my garden?", 13, "white")
    if t > .12:
        box(draw, (248, 319, 592, 403), "#eeedf8", 10)
        message = "Absolutely! Let's find the right team."
        count = min(len(message), int((t - .12) * 145))
        text(draw, (261, 330), message[:count], 13, "#4e5071")
        if t > .37:
            text(draw, (261, 354), "I've checked our service guide.", 13, "#4e5071")
            text(draw, (261, 377), "What ZIP code is your property in?", 13, "#4e5071")
    else:
        for i in range(3):
            y = 340 + math.sin(t * 45 + i) * 3
            draw.ellipse((264 + i * 16, y, 270 + i * 16, y + 6), fill="#aaa5d6")
    if t > .57:
        box(draw, (536, 418, 625, 453), "#716bc9", 9)
        text(draw, (553, 426), "12831", 13, "white")
    box(draw, (245, 487, 632, 528), "white", 8, "#e4e5ee")
    text(draw, (260, 499), "Write a message...", 12, "#9a9baa")
    pill(draw, 668, 170, "Knowledge connected", "#e9f3ec", "#468369", 11)
    text(draw, (672, 221), "CONVERSATION DETAILS", 10, MUTED, True)
    for y, name, detail in [(253, "Intent", "Service consultation"), (321, "Knowledge source", "Services & coverage guide"), (390, "Next step", "Connect with scheduling")]:
        text(draw, (672, y), name, 11, MUTED)
        text(draw, (672, y + 22), detail, 12, INK, True)
    if t > .7:
        pill(draw, 668, 475, "Ready for a human handoff", "#e9f3ec", "#468369", 11)
    return image


def render(name, renderer):
    destination = OUTPUT / f"{name}.mp4"
    command = [imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-v", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{WIDTH}x{HEIGHT}", "-r", str(FPS), "-i", "pipe:0", "-an", "-c:v", "libx264", "-preset", "slow", "-crf", "23", "-pix_fmt", "yuv420p", "-movflags", "+faststart", str(destination)]
    with subprocess.Popen(command, stdin=subprocess.PIPE) as process:
        try:
            for frame in range(FPS * SECONDS):
                process.stdin.write(renderer(frame / (FPS * SECONDS)).tobytes())
        finally:
            process.stdin.close()
        if process.wait() != 0:
            raise RuntimeError(f"Encoding failed: {name}")
    renderer(.76).save(OUTPUT / f"{name}.webp", quality=88)
    print(f"{name}: {destination.stat().st_size / 1024:.0f} KB, {SECONDS}s, {WIDTH}x{HEIGHT}", flush=True)


if __name__ == "__main__":
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name, renderer in [("verdant-store", storefront), ("syncflow", syncflow), ("signal-desk", analytics), ("waypoint-ai", support)]:
        render(name, renderer)
