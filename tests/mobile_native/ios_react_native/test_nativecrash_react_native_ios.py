def test_nativecrash_react_native_ios(ios_react_native_sim_driver):
    # click on list app
    ios_react_native_sim_driver.find_element_by_xpath('//XCUIElementTypeButton[@name="List App"]').click()
    
    # click 'native crash' button
    btn = ios_react_native_sim_driver.find_element_by_accessibility_id("Native Crash")
    btn.click()
    # launch app again or the error does not get sent to Sentry
    ios_react_native_sim_driver.launch_app()