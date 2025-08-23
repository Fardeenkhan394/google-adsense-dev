    //  loader start
       document.addEventListener("DOMContentLoaded", function () {
    var bar = document.getElementById("topLoaderBar");
    var loader = document.getElementById("pageLoader");
    var main = document.getElementById("mainContent");

    // Start bar animation
    requestAnimationFrame(function () {
      bar.style.width = "100%";
    });

    // After 10s hide loader and show content
    setTimeout(function () {
      loader.classList.add("hide");
      main.style.display = "";
    }, 1000);
  });

  // loader end
  // sidebar start
     document.addEventListener("DOMContentLoaded", function () {
        const sidebar = document.getElementById("sidebar");
        const mainContent = document.getElementById("mainContent");
        const sidebarToggle = document.getElementById("sidebarToggle");

        // Function to set sidebar state based on screen size
        function setSidebarState() {
          if (window.innerWidth > 992) {
            // Large screens: apply collapsed state from localStorage
            const isCollapsed =
              localStorage.getItem("sidebarCollapsed") === "true";
            if (isCollapsed) {
              sidebar.classList.add("collapsed");
              mainContent.classList.add("expanded");
            } else {
              sidebar.classList.remove("collapsed");
              mainContent.classList.remove("expanded");
            }
            sidebar.classList.remove("show"); // Ensure 'show' class is removed on large screens
          } else {
            // Small/Medium screens: sidebar is initially hidden (overlay)
            sidebar.classList.remove("collapsed"); // Ensure it's not collapsed in overlay mode
            mainContent.classList.remove("expanded"); // No extra margin on small screens
          }
        }

        // Set initial state on load
        setSidebarState();

        sidebarToggle.addEventListener("click", function () {
          if (window.innerWidth <= 992) {
            // On small/medium screens, toggle 'show' class for overlay
            sidebar.classList.toggle("show");
          } else {
            // On large screens, toggle 'collapsed' class and save state
            sidebar.classList.toggle("collapsed");
            mainContent.classList.toggle("expanded");
            localStorage.setItem(
              "sidebarCollapsed",
              sidebar.classList.contains("collapsed")
            );
          }
        });

        // Listen for resize events to adjust sidebar state
        window.addEventListener("resize", setSidebarState);
      });
  // sidebar end





      