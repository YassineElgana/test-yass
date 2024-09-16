window.onload = function() {
    // Check if the cookie already exists
    if (!getCookie("user_visited")) {
        // Set a cookie that expires in 7 days
        setCookie("user_visited", "true", 7);
        console.log("Cookie set: user_visited=true");
    } else {
        console.log("Cookie already exists.");
    }
};