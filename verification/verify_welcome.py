from playwright.sync_api import Page, expect, sync_playwright

def verify_welcome_screen(page: Page):
    # Navigate to the app
    page.goto("http://localhost:3000/")

    # Wait for the welcome screen to load
    expect(page.get_by_text("Escolha sua Jornada")).to_be_visible()

    # Take a screenshot
    page.screenshot(path="verification/welcome_screen.png")
    print("Screenshot saved to verification/welcome_screen.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_welcome_screen(page)
        finally:
            browser.close()
