from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        try:
            # Login
            print("Navigating to login...")
            page.goto("http://localhost:3000/#/login")

            # Click Login button
            print("Clicking login...")
            login_button = page.get_by_role("button", name="Login")
            if not login_button.is_visible():
                print("Login button not found! Dumping page content.")
                print(page.content())
                browser.close()
                return

            login_button.click()

            # Wait for navigation to Home (or check if isAuthenticated changes)
            # The app redirects to Home on login
            print("Waiting for home...")
            try:
                page.wait_for_url("**/#/home", timeout=5000)
            except Exception as e:
                print(f"Navigation to home timed out: {e}")
                # Maybe try navigating to Bag directly?

            # Navigate to Bag
            print("Navigating to Bag...")
            page.goto("http://localhost:3000/#/bag")

            # Wait for content to load
            page.wait_for_load_state("networkidle")

            # Verify "Go back" button is present and visible
            print("Verifying Go back button...")
            back_button = page.get_by_role("button", name="Go back")
            if back_button.is_visible():
                print("SUCCESS: Back button with aria-label 'Go back' found.")
            else:
                print("FAILURE: Back button not found.")

            # Verify "Add to favorites" button is present and visible
            print("Verifying Favorite button...")
            fav_button = page.get_by_role("button", name="Add to favorites")
            if fav_button.is_visible():
                 print("SUCCESS: Favorite button with aria-label 'Add to favorites' found.")
            else:
                 print("FAILURE: Favorite button not found.")

            # Take screenshot
            screenshot_path = "/home/jules/verification/shopping_bag.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
