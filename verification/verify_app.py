from playwright.sync_api import sync_playwright

def test_app(page):
    print("Navigating to login...")
    page.goto("http://localhost:3000/#/login")
    page.wait_for_load_state("networkidle")

    print("Clicking login...")
    # Click Login button (Button component renders a button)
    page.get_by_role("button", name="Login").click()

    # Wait for Home
    print("Waiting for home...")
    # Increase timeout just in case
    page.wait_for_url("**/#/home", timeout=10000)

    # 2. Go to Closet
    print("Navigating to Closet...")
    page.goto("http://localhost:3000/#/closet")
    page.wait_for_load_state("networkidle")
    # Take screenshot of Closet
    page.screenshot(path="verification/closet.png")
    print("Closet screenshot taken")

    # 3. Go to Profile
    print("Navigating to Profile...")
    page.goto("http://localhost:3000/#/profile")
    page.wait_for_load_state("networkidle")
    # Take screenshot of Profile
    page.screenshot(path="verification/profile.png")
    print("Profile screenshot taken")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_app(page)
        finally:
            browser.close()
