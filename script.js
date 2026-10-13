document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // NEXUS TRAINEE DATA
    // ==========================================

    let trainee = {
        name: "Teja R K",
        score: 1248,
        performance: 78,
        streak: 12,
        rank: 24,
        questProgress: 72
    };


    // ==========================================
    // SIDEBAR NAVIGATION
    // ==========================================

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {

        item.addEventListener("click", function (e) {

            e.preventDefault();

            menuItems.forEach(menu => {
                menu.classList.remove("active");
            });

            this.classList.add("active");

            const page = this.textContent.trim();

            handleMenuClick(page);

        });

    });


    // ==========================================
    // MENU ACTION
    // ==========================================

    function handleMenuClick(page) {

        if (page.includes("Dashboard")) {
            showDashboardMessage();
        }

        else if (page.includes("Analytics")) {
            showAnalytics();
        }

        else if (page.includes("SkillQuest")) {
            showSkillQuest();
        }

        else if (page.includes("Courses")) {
            showCourses();
        }

        else if (page.includes("Assignments")) {
            showAssignments();
        }

        else if (page.includes("Projects")) {
            showProjects();
        }

        else if (page.includes("Knowledge Base")) {
            showKnowledgeBase();
        }

        else if (page.includes("Solutions")) {
            showSolutions();
        }

        else if (page.includes("Doubts")) {
            showDoubts();
        }

        else if (page.includes("Expert Connect")) {
            showExperts();
        }

        else if (page.includes("Leaderboard")) {
            showLeaderboard();
        }

        else if (page.includes("Settings")) {
            showSettings();
        }

    }


    // ==========================================
    // MODAL
    // ==========================================

    function createModal(title, content) {

        const oldModal = document.querySelector(".demo-modal");

        if (oldModal) {
            oldModal.remove();
        }


        const modal = document.createElement("div");

        modal.className = "demo-modal";


        modal.innerHTML = `

            <div class="modal-overlay">

                <div class="modal-box">

                    <button class="modal-close">
                        ×
                    </button>

                    <div class="modal-title">
                        ${title}
                    </div>

                    <div class="modal-content">
                        ${content}
                    </div>

                </div>

            </div>

        `;


        document.body.appendChild(modal);


        // Close button

        const closeButton =
            modal.querySelector(".modal-close");

        closeButton.addEventListener("click", () => {
            modal.remove();
        });


        // Click outside

        const overlay =
            modal.querySelector(".modal-overlay");

        overlay.addEventListener("click", function (e) {

            if (e.target === overlay) {
                modal.remove();
            }

        });


        // Setup buttons and clickable elements

        setupModalActions();

    }


    // ==========================================
    // MODAL ACTIONS
    // ==========================================

    function setupModalActions() {

        const actionElements =
            document.querySelectorAll("[data-action]");


        actionElements.forEach(element => {

            element.addEventListener("click", function () {

                const action = this.dataset.action;


                if (action === "complete") {
                    completeQuest();
                }


                else if (action === "solution") {
                    showSolutionDetails();
                }


                else if (action === "expert") {
                    connectExpert();
                }


                else if (action === "next") {
                    nextQuest();
                }

            });

        });

    }


    // ==========================================
    // DASHBOARD
    // ==========================================

    function showDashboardMessage() {

        createModal(
            "NEXUS Dashboard",

            `
            <div class="prototype-success">

                <div class="big-demo-icon">
                    ✓
                </div>

                <h2>
                    Welcome back, ${trainee.name}!
                </h2>

                <p>
                    Your dashboard shows your latest
                    learning activity, performance and
                    AI-powered insights.
                </p>

            </div>
            `
        );

    }


    // ==========================================
    // SKILLQUEST
    // ==========================================

    function showSkillQuest() {

        createModal(
            "🎯 SkillQuest",

            `

            <div class="demo-section">

                <div class="demo-badge">
                    LEVEL 06
                </div>

                <h2>
                    Backend Developer Quest
                </h2>

                <p class="demo-muted">
                    Follow your personalized learning path
                    and improve your technical skills.
                </p>


                <div class="demo-progress">

                    <div class="progress-label">

                        <span>
                            Quest Progress
                        </span>

                        <strong>
                            ${trainee.questProgress}%
                        </strong>

                    </div>


                    <div class="demo-progress-bar">

                        <div style="
                            width:${trainee.questProgress}%;
                        ">
                        </div>

                    </div>

                </div>


                <div class="quest-demo-list">

                    <div class="quest-demo completed">
                        ✓ Python Fundamentals
                    </div>

                    <div class="quest-demo completed">
                        ✓ REST APIs
                    </div>

                    <div class="quest-demo current">
                        ● Django Authentication
                    </div>

                    <div class="quest-demo locked">
                        🔒 Advanced Django
                    </div>

                </div>


                <button
                    class="demo-primary-button"
                    data-action="complete">

                    Complete Current Module

                </button>

            </div>

            `
        );

    }


    // ==========================================
    // COMPLETE QUEST
    // ==========================================

    function completeQuest() {

        trainee.questProgress += 6;
        trainee.score += 86;
        trainee.performance += 3;
        trainee.streak += 1;
        trainee.rank -= 2;


        if (trainee.questProgress > 100) {
            trainee.questProgress = 100;
        }


        updateDashboardStats();


        createModal(
            "🎉 Module Completed!",

            `

            <div class="prototype-success">

                <div class="big-demo-icon success">
                    ✓
                </div>

                <h2>
                    Django Authentication
                </h2>

                <p>
                    Great work! You completed the
                    current SkillQuest module.
                </p>


                <div class="result-grid">

                    <div>
                        <span>Score</span>
                        <strong>86%</strong>
                    </div>

                    <div>
                        <span>Quest Progress</span>
                        <strong>
                            ${trainee.questProgress}%
                        </strong>
                    </div>

                    <div>
                        <span>Streak</span>
                        <strong>
                            ${trainee.streak} days
                        </strong>
                    </div>

                    <div>
                        <span>Rank</span>
                        <strong>
                            #${trainee.rank}
                        </strong>
                    </div>

                </div>


                <div class="ai-insight">

                    ✨ <strong>AI Insight</strong>

                    <p>
                        Your backend skill profile has improved.
                        We recommend continuing with Advanced
                        Django.
                    </p>

                </div>


                <button
                    class="demo-primary-button"
                    data-action="next">

                    Start Next Module →

                </button>

            </div>

            `
        );

    }


    // ==========================================
    // NEXT QUEST
    // ==========================================

    function nextQuest() {

        createModal(
            "🚀 Next SkillQuest",

            `

            <div class="demo-section">

                <div class="demo-badge">
                    NEXT MODULE
                </div>

                <h2>
                    Advanced Django
                </h2>

                <p class="demo-muted">
                    Learn advanced concepts and improve
                    your backend development skills.
                </p>


                <div class="module-info">

                    <div>
                        <strong>Estimated Time</strong>
                        <span>2 hours</span>
                    </div>

                    <div>
                        <strong>Difficulty</strong>
                        <span>Intermediate</span>
                    </div>

                    <div>
                        <strong>Skills</strong>
                        <span>Django • APIs</span>
                    </div>

                </div>


                <button class="demo-primary-button">

                    Start Learning

                </button>

            </div>

            `
        );

    }


    // ==========================================
    // KNOWLEDGE BASE
    // ==========================================

    function showKnowledgeBase() {

        createModal(
            "🧠 Knowledge Base",

            `

            <div class="search-demo">

                <input
                    type="text"
                    placeholder="Search a problem..."
                >

                <button>
                    Search
                </button>

            </div>


            <div class="solution-list">


                <div
                    class="solution-demo"
                    data-action="solution">

                    <div class="solution-demo-icon">
                        🔐
                    </div>

                    <div>

                        <strong>
                            Django Authentication Failure
                        </strong>

                        <span>
                            Python • Django • REST API
                        </span>

                        <small>
                            ✓ Verified Solution
                        </small>

                    </div>

                </div>


                <div
                    class="solution-demo"
                    data-action="solution">

                    <div class="solution-demo-icon">
                        🗄️
                    </div>

                    <div>

                        <strong>
                            PostgreSQL Connection Error
                        </strong>

                        <span>
                            PostgreSQL • Django
                        </span>

                        <small>
                            ✓ Verified Solution
                        </small>

                    </div>

                </div>


                <div
                    class="solution-demo"
                    data-action="solution">

                    <div class="solution-demo-icon">
                        ⚡
                    </div>

                    <div>

                        <strong>
                            REST API Timeout
                        </strong>

                        <span>
                            Django • API
                        </span>

                        <small>
                            ✓ Community Solution
                        </small>

                    </div>

                </div>


            </div>

            `
        );

    }


    // ==========================================
    // SOLUTION DETAILS
    // ==========================================

    function showSolutionDetails() {

        createModal(
            "💡 Solution Details",

            `

            <div class="solution-detail">

                <span class="verified-demo">
                    ✓ VERIFIED SOLUTION
                </span>

                <h2>
                    Django Authentication Failure
                </h2>


                <div class="detail-block">

                    <strong>
                        Problem
                    </strong>

                    <p>
                        User authentication is failing
                        after successful login.
                    </p>

                </div>


                <div class="detail-block">

                    <strong>
                        Detected Cause
                    </strong>

                    <p>
                        JWT token configuration mismatch.
                    </p>

                </div>


                <div class="detail-block">

                    <strong>
                        Recommended Solution
                    </strong>

                    <p>
                        Verify token configuration,
                        authentication middleware and
                        token expiration settings.
                    </p>

                </div>


                <div class="solution-actions">

                    <button>
                        👍 Helpful
                    </button>

                    <button>
                        🔖 Save Solution
                    </button>

                </div>

            </div>

            `
        );

    }


    // ==========================================
    // EXPERT CONNECT
    // ==========================================

    function showExperts() {

        createModal(
            "👥 Expert Connect",

            `

            <p class="demo-muted">

                Based on your current problem,
                NEXUS matched these experts.

            </p>


            <div class="expert-demo-list">


                <div class="expert-demo">

                    <div class="expert-avatar">
                        RK
                    </div>

                    <div class="expert-info">

                        <strong>
                            Rahul Kumar
                        </strong>

                        <span>
                            Backend Expert
                        </span>

                        <small>
                            Python • Django • REST API
                        </small>

                        <b>
                            ⭐ 4.8
                        </b>

                    </div>


                    <button data-action="expert">
                        Connect
                    </button>

                </div>


                <div class="expert-demo">

                    <div class="expert-avatar">
                        PS
                    </div>

                    <div class="expert-info">

                        <strong>
                            Priya Sharma
                        </strong>

                        <span>
                            Full Stack Expert
                        </span>

                        <small>
                            React • Django
                        </small>

                        <b>
                            ⭐ 4.7
                        </b>

                    </div>


                    <button data-action="expert">
                        Connect
                    </button>

                </div>


                <div class="expert-demo">

                    <div class="expert-avatar">
                        AM
                    </div>

                    <div class="expert-info">

                        <strong>
                            Arjun Mehta
                        </strong>

                        <span>
                            Python Expert
                        </span>

                        <small>
                            Python • APIs • PostgreSQL
                        </small>

                        <b>
                            ⭐ 4.9
                        </b>

                    </div>


                    <button data-action="expert">
                        Connect
                    </button>

                </div>


            </div>

            `
        );

    }


    // ==========================================
    // CONNECT EXPERT
    // ==========================================

    function connectExpert() {

        createModal(
            "✅ Connection Request Sent",

            `

            <div class="prototype-success">

                <div class="big-demo-icon success">
                    ✓
                </div>

                <h2>
                    Expert Connected
                </h2>

                <p>
                    Rahul has been notified about
                    your Django authentication problem.
                </p>

                <div class="connection-status">

                    🟢 Expert is available

                </div>

            </div>

            `
        );

    }


    // ==========================================
    // ANALYTICS
    // ==========================================

    function showAnalytics() {

        createModal(
            "📊 Performance Analytics",

            `

            <div class="analytics-demo">

                <div class="analytics-stat">

                    <span>
                        Overall Performance
                    </span>

                    <strong>
                        ${trainee.performance}%
                    </strong>

                </div>


                <div class="analytics-stat">

                    <span>
                        Problem Solving
                    </span>

                    <strong>
                        84%
                    </strong>

                </div>


                <div class="analytics-stat">

                    <span>
                        Technical Skills
                    </span>

                    <strong>
                        79%
                    </strong>

                </div>


                <div class="analytics-stat">

                    <span>
                        Learning Consistency
                    </span>

                    <strong>
                        91%
                    </strong>

                </div>


                <div class="ai-insight">

                    ✨ <strong>AI Insight</strong>

                    <p>
                        Your strongest area is problem solving.
                        Focus on React and advanced Django
                        to improve your overall profile.
                    </p>

                </div>

            </div>

            `
        );

    }


    // ==========================================
    // COURSES
    // ==========================================

    function showCourses() {

        createModal(
            "📚 My Courses",

            `

            <div class="course-list">

                <div class="course-demo">

                    <strong>
                        Python Advanced
                    </strong>

                    <span>
                        82% Complete
                    </span>

                    <div class="mini-progress">
                        <div style="width:82%"></div>
                    </div>

                </div>


                <div class="course-demo">

                    <strong>
                        Django Development
                    </strong>

                    <span>
                        64% Complete
                    </span>

                    <div class="mini-progress">
                        <div style="width:64%"></div>
                    </div>

                </div>


                <div class="course-demo">

                    <strong>
                        React Fundamentals
                    </strong>

                    <span>
                        45% Complete
                    </span>

                    <div class="mini-progress">
                        <div style="width:45%"></div>
                    </div>

                </div>

            </div>

            `
        );

    }


    // ==========================================
    // ASSIGNMENTS
    // ==========================================

    function showAssignments() {

        createModal(
            "📝 Assignments",

            `

            <div class="assignment-demo">

                <div>
                    <strong>
                        Django REST API
                    </strong>

                    <span>
                        Due Tomorrow
                    </span>
                </div>

                <b class="warning-text">
                    Pending
                </b>

            </div>


            <div class="assignment-demo">

                <div>
                    <strong>
                        React Components
                    </strong>

                    <span>
                        Due in 3 days
                    </span>
                </div>

                <b class="success-text">
                    In Progress
                </b>

            </div>


            <div class="assignment-demo">

                <div>
                    <strong>
                        Python Assessment
                    </strong>

                    <span>
                        Completed
                    </span>
                </div>

                <b class="success-text">
                    ✓ Completed
                </b>

            </div>

            `
        );

    }
    // ==========================================
    // PROJECTS
    // ==========================================

    function showProjects() {

        createModal(
            "💻 Projects",

            `

            <div class="project-demo">

                <div class="project-icon">
                    🛒
                </div>

                <div>

                    <strong>
                        E-Commerce Platform
                    </strong>

                    <span>
                        Django • React • PostgreSQL
                    </span>

                    <small>
                        68% Complete
                    </small>

                </div>

            </div>


            <div class="project-demo">

                <div class="project-icon">
                    🤖
                </div>

                <div>

                    <strong>
                        AI Developer Assistant
                    </strong>

                    <span>
                        Python • LLM
                    </span>

                    <small>
                        42% Complete
                    </small>

                </div>

            </div>

            `
        );

    }


    // ==========================================
    // DOUBTS
    // ==========================================

    function showDoubts() {

        createModal(
            "💬 Doubts & Discussions",

            `

            <div class="doubt-box">

                <h3>
                    Ask a technical question
                </h3>

                <textarea
                    placeholder="Describe your problem..."
                ></textarea>

                <button class="demo-primary-button">

                    Ask NEXUS AI

                </button>

            </div>


            <div class="previous-doubt">

                <strong>
                    How does Django authentication work?
                </strong>

                <span>
                    4 replies • Resolved
                </span>

            </div>

            `
        );

    }


    // ==========================================
    // LEADERBOARD
    // ==========================================

    function showLeaderboard() {

        createModal(
            "🏆 Leaderboard",

            `

            <div class="leaderboard">

                <div class="leader-row top">
                    <span>🥇 1</span>
                    <strong>Rahul</strong>
                    <b>1840</b>
                </div>

                <div class="leader-row">
                    <span>🥈 2</span>
                    <strong>Priya</strong>
                    <b>1760</b>
                </div>

                <div class="leader-row">
                    <span>🥉 3</span>
                    <strong>Arjun</strong>
                    <b>1690</b>
                </div>

                <div class="leader-row me">
                    <span>⭐ 24</span>
                    <strong>You</strong>
                    <b>${trainee.score}</b>
                </div>

            </div>

            `
        );

    }


    // ==========================================
    // SETTINGS
    // ==========================================

    function showSettings() {

        createModal(
            "⚙️ Settings",

            `

            <div class="settings-demo">

                <label>
                    <input type="checkbox" checked>
                    AI Recommendations
                </label>

                <label>
                    <input type="checkbox" checked>
                    Learning Reminders
                </label>

                <label>
                    <input type="checkbox">
                    Weekly Performance Report
                </label>

            </div>

            `
        );

    }


    // ==========================================
    // DASHBOARD STATS
    // ==========================================

    function updateDashboardStats() {

        const statCards =
            document.querySelectorAll(".stat-card");


        if (statCards.length < 4) {
            return;
        }


        const firstValue =
            statCards[0].querySelector("h2");

        const secondValue =
            statCards[1].querySelector("h2");

        const thirdValue =
            statCards[2].querySelector("h2");

        const fourthValue =
            statCards[3].querySelector("h2");


        if (firstValue) {
            firstValue.innerText =
                trainee.score.toLocaleString();
        }


        if (secondValue) {
            secondValue.innerText =
                trainee.performance + "%";
        }


        if (thirdValue) {
            thirdValue.innerText =
                trainee.streak + " Days";
        }


        if (fourthValue) {
            fourthValue.innerText =
                "#" + trainee.rank;
        }

    }


    // ==========================================
    // DASHBOARD BUTTONS
    // ==========================================

    const primaryButton =
        document.querySelector(".primary-button");


    if (primaryButton) {

        primaryButton.addEventListener("click", () => {
            showSkillQuest();
        });

    }


    const secondaryButton =
        document.querySelector(".secondary-button");


    if (secondaryButton) {

        secondaryButton.addEventListener("click", () => {
            showSkillQuest();
        });

    }


    const darkButton =
        document.querySelector(".dark-button");


    if (darkButton) {

        darkButton.addEventListener("click", () => {
            showExperts();
        });

    }

});