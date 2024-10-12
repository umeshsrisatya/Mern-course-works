(async () => {
    try {
        // Import franc and langs modules
        const franc = await import("franc");
        const langs = await import("langs");

        // Detect language code using franc
        const langCode = franc.franc("భాష గురించి మీకు ఏమి తెలుసా?");

        // Use langs to find the language name based on the detected code
        const language = langs.default.where("3", langCode);

        if (language) {
            console.log(language.name); // Output the detected language name
        } else {
            console.log("Language not found.");
        }
    } catch (e) {
        console.log("Error: ", e);
    }
})();
