/**
 * DASHBOARD INTERACTIVITY
 * =======================
 * Handles animations, interactions, and dynamic updates
 */

// --- DOM ELEMENTS ---
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('.nav-item');
const searchInput = document.querySelector('.search-input');
const searchBox = document.querySelector('.search-box');
const chartTabs = document.querySelectorAll('.chart-tab');
const statCards = document.querySelectorAll('.stat-card');
const activityRows = document.querySelectorAll('.activity-row');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initSearch();
    initNavigation();
    initChartTabs();
    initStatAnimations();
    initTableInteractions();
    initDeviceBars();
});

// --- ANIMATIONS ---
function initAnimations() {
    // Staggered fade-in for stat cards
    statCards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 100}ms`);
    });

    // Chart points animation
    const chartPoints = document.querySelectorAll('.chart-points circle');
    chartPoints.forEach((point, index) => {
        point.style.animationDelay = `${index * 0.1}s`;
    });

    // Doughnut chart animation
    animateDoughnutChart();
}

function animateDoughnutChart() {
    const circles = document.querySelectorAll('.doughnut-chart circle[stroke-dasharray]');
    const delays = [0, 300, 600]; // Stagger delays for each segment

    circles.forEach((circle, index) => {
        const targetDashoffset = parseFloat(circle.style.strokeDashoffset) || 0;
        const dasharray = circle.getAttribute('stroke-dasharray').split(' ')[0];

        // Reset for animation
        circle.style.strokeDashoffset = parseFloat(dasharray);
        circle.style.transition = 'none';

        // Trigger animation after delay
        setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 1s ease-out';
            circle.style.strokeDashoffset = `-${targetDashoffset}`;
        }, delays[index]);
    });
}

// --- SEARCH ---
function initSearch() {
    // Search keyboard shortcut (Cmd+K / Ctrl+K)
    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }

        // Escape to blur
        if (e.key === 'Escape' && document.activeElement === searchInput) {
            searchInput.blur();
        }
    });

    // Search input interactions
    searchInput.addEventListener('focus', () => {
        searchBox.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        searchBox.classList.remove('focused');
    });

    // Search functionality
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value.toLowerCase().trim();

        searchTimeout = setTimeout(() => {
            if (query.length > 0) {
                filterContent(query);
            } else {
                resetFilters();
            }
        }, 300);
    });
}

function filterContent(query) {
    // Filter activity table rows
    activityRows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(query) ? '' : 'none';
    });

    // Highlight matching nav items
    navItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.classList.add('search-match');
        } else {
            item.classList.remove('search-match');
        }
    });
}

function resetFilters() {
    activityRows.forEach(row => {
        row.style.display = '';
    });

    navItems.forEach(item => {
        item.classList.remove('search-match');
    });
}

// --- NAVIGATION ---
function initNavigation() {
    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');

        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Update active state
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Add ripple effect
            createRipple(e, link);
        });

        // Hover effects
        link.addEventListener('mouseenter', () => {
            const icon = link.querySelector('.nav-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1)';
            }
        });

        link.addEventListener('mouseleave', () => {
            const icon = link.querySelector('.nav-icon');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// --- CHART TABS ---
function initChartTabs() {
    chartTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            chartTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Animate chart update
            updateChart(tab.textContent);

            // Add ripple effect
            createRipple(event, tab);
        });
    });
}

function updateChart(period) {
    const chartLine = document.querySelector('.chart-line');
    const chartArea = document.querySelector('.chart-area');

    // Trigger re-animation
    chartLine.style.animation = 'none';
    chartArea.style.opacity = '0';

    setTimeout(() => {
        chartLine.style.animation = 'lineDraw 1s ease forwards';
        chartArea.style.opacity = '1';
    }, 50);
}

// --- STAT CARD ANIMATIONS ---
function initStatAnimations() {
    statCards.forEach(card => {
        // Hover effect
        card.addEventListener('mouseenter', () => {
            const number = card.querySelector('.stat-number');
            if (number) {
                number.style.transform = 'scale(1.05)';
            }
        });

        card.addEventListener('mouseleave', () => {
            const number = card.querySelector('.stat-number');
            if (number) {
                number.style.transform = 'scale(1)';
            }
        });

        // Click interaction
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });

    // Counter animation for numbers
    animateCounters();
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const text = counter.textContent;
        const numericValue = parseInt(text.replace(/[^\d]/g, ''));
        const prefix = text.match(/^[\¥\¥]/) ? text[0] : '';
        const suffix = text.match(/[%]$/) ? '%' : '';

        // Skip if not a number
        if (isNaN(numericValue)) return;

        // Set up animation
        const duration = 1500;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(numericValue * easeOut);

            // Format number with commas
            const formatted = current.toLocaleString('ja-JP');
            counter.textContent = prefix + formatted + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }

        // Start animation with delay
        setTimeout(() => {
            requestAnimationFrame(updateCounter);
        }, 500);
    });
}

// --- TABLE INTERACTIONS ---
function initTableInteractions() {
    activityRows.forEach((row, index) => {
        // Staggered fade-in
        row.style.opacity = '0';
        row.style.transform = 'translateY(-10px)';
        row.style.transition = 'all 0.3s ease';

        setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
        }, 400 + (index * 50));

        // Row click
        row.addEventListener('click', (e) => {
            if (!e.target.closest('.row-action-btn')) {
                row.classList.toggle('selected');
            }
        });

        // Action button
        const actionBtn = row.querySelector('.row-action-btn');
        if (actionBtn) {
            actionBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showRowMenu(actionBtn, row);
            });
        }
    });
}

function showRowMenu(button, row) {
    // Toggle menu
    const existingMenu = document.querySelector('.row-menu');
    if (existingMenu) {
        existingMenu.remove();
        return;
    }

    const menu = document.createElement('div');
    menu.className = 'row-menu';
    menu.innerHTML = `
        <button class="menu-item">詳細を表示</button>
        <button class="menu-item">コピー</button>
        <button class="menu-item">エクスポート</button>
        <hr>
        <button class="menu-item danger">削除</button>
    `;

    // Position menu
    const rect = button.getBoundingClientRect();
    menu.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 8}px;
        left: ${rect.right - 160}px;
        background: var(--bg-elevated);
        border: 1px solid var(--border-1);
        border-radius: var(--radius-md);
        padding: 8px;
        min-width: 160px;
        z-index: 1000;
        box-shadow: var(--shadow-lg);
        animation: menuFadeIn 0.15s ease;
    `;

    document.body.appendChild(menu);

    // Add menu item styles
    const style = document.createElement('style');
    style.textContent = `
        .row-menu { display: flex; flex-direction: column; gap: 4px; }
        .menu-item {
            padding: 8px 12px;
            background: transparent;
            border: none;
            border-radius: var(--radius-sm);
            color: var(--text-secondary);
            font-size: 0.875rem;
            text-align: left;
            cursor: pointer;
            transition: all var(--transition-fast);
        }
        .menu-item:hover { background: var(--surface-hover); color: var(--text-primary); }
        .menu-item.danger { color: var(--accent-red); }
        .menu-item.danger:hover { background: rgba(239, 68, 68, 0.1); }
        .row-menu hr { border: none; border-top: 1px solid var(--border-1); margin: 4px 0; }
        @keyframes menuFadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Close menu on outside click
    setTimeout(() => {
        document.addEventListener('click', closeMenu, { once: true });
    }, 0);

    function closeMenu(e) {
        if (!menu.contains(e.target)) {
            menu.remove();
        }
    }

    // Handle menu item clicks
    menu.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const action = item.textContent;
            console.log('Action:', action);
            menu.remove();
        });
    });
}

// --- DEVICE BARS ---
function initDeviceBars() {
    const bars = document.querySelectorAll('.device-bar-fill');

    // Animate bars on load
    bars.forEach((bar, index) => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';

        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300 + (index * 150));
    });
}

// --- RIPPLE EFFECT ---
function createRipple(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(6, 182, 212, 0.2);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        left: ${event.clientX - rect.left - size / 2}px;
        top: ${event.clientY - rect.top - size / 2}px;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
}

// Add ripple keyframes
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// --- USER PROFILE MENU ---
const userMenuBtn = document.querySelector('.user-menu-btn');
const userProfile = document.querySelector('.user-profile');

if (userMenuBtn && userProfile) {
    userMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userProfile.classList.toggle('menu-open');
    });

    document.addEventListener('click', () => {
        userProfile.classList.remove('menu-open');
    });
}

// --- NOTIFICATIONS ---
const notificationBtn = document.querySelector('.icon-btn:has(.notification-dot)');

if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        // Show notification panel
        showNotificationPanel();
    });
}

function showNotificationPanel() {
    const existingPanel = document.querySelector('.notification-panel');
    if (existingPanel) {
        existingPanel.remove();
        return;
    }

    const panel = document.createElement('div');
    panel.className = 'notification-panel';
    panel.innerHTML = `
        <div class="notification-header">
            <h3>通知</h3>
            <button class="mark-read">すべて既読</button>
        </div>
        <div class="notification-list">
            <div class="notification-item unread">
                <div class="notification-icon success">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8L7 11L12 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="notification-content">
                    <p class="notification-title">新しい注文が完了しました</p>
                    <p class="notification-time">2分前</p>
                </div>
            </div>
            <div class="notification-item unread">
                <div class="notification-icon warning">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8 5V9M8 11V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="notification-content">
                    <p class="notification-title">在庫警告: プレミアムプラン</p>
                    <p class="notification-time">15分前</p>
                </div>
            </div>
            <div class="notification-item">
                <div class="notification-icon info">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M8 5V9M8 11V11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
                <div class="notification-content">
                    <p class="notification-title">月次レポートが利用可能です</p>
                    <p class="notification-time">1時間前</p>
                </div>
            </div>
        </div>
    `;

    const btnRect = notificationBtn.getBoundingClientRect();

    panel.style.cssText = `
        position: fixed;
        top: ${btnRect.bottom + 12}px;
        right: ${document.body.clientWidth - btnRect.right}px;
        width: 320px;
        background: var(--bg-elevated);
        border: 1px solid var(--border-1);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: panelFadeIn 0.2s ease;
    `;

    document.body.appendChild(panel);

    // Add panel styles
    const panelStyle = document.createElement('style');
    panelStyle.textContent = `
        .notification-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-md) var(--space-lg);
            border-bottom: 1px solid var(--border-1);
        }
        .notification-header h3 {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        .mark-read {
            padding: 4px 12px;
            background: transparent;
            border: none;
            color: var(--accent-cyan);
            font-size: 0.75rem;
            font-weight: 500;
            cursor: pointer;
            border-radius: var(--radius-sm);
            transition: background var(--transition-fast);
        }
        .mark-read:hover { background: rgba(6, 182, 212, 0.1); }
        .notification-list { max-height: 300px; overflow-y: auto; }
        .notification-item {
            display: flex;
            gap: var(--space-md);
            padding: var(--space-md) var(--space-lg);
            border-bottom: 1px solid var(--border-1);
            cursor: pointer;
            transition: background var(--transition-fast);
        }
        .notification-item:hover { background: var(--surface-hover); }
        .notification-item:last-child { border-bottom: none; }
        .notification-item.unread { background: rgba(6, 182, 212, 0.05); }
        .notification-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--radius-md);
            flex-shrink: 0;
        }
        .notification-icon.success { background: rgba(34, 197, 94, 0.1); color: var(--accent-green); }
        .notification-icon.warning { background: rgba(245, 158, 11, 0.1); color: var(--accent-amber); }
        .notification-icon.info { background: rgba(59, 130, 246, 0.1); color: var(--accent-blue); }
        .notification-content { flex: 1; min-width: 0; }
        .notification-title {
            font-size: 0.875rem;
            color: var(--text-primary);
            margin-bottom: 2px;
        }
        .notification-time { font-size: 0.75rem; color: var(--text-tertiary); }
        @keyframes panelFadeIn {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(panelStyle);

    // Close panel on outside click
    setTimeout(() => {
        document.addEventListener('click', closePanel, { once: true });
    }, 0);

    function closePanel(e) {
        if (!panel.contains(e.target) && e.target !== notificationBtn) {
            panel.remove();
        }
    }

    // Handle mark all as read
    panel.querySelector('.mark-read').addEventListener('click', () => {
        panel.querySelectorAll('.notification-item.unread').forEach(item => {
            item.classList.remove('unread');
        });

        // Remove notification dot
        const dot = document.querySelector('.notification-dot');
        if (dot) dot.style.display = 'none';
    });
}

// --- DATE FILTER ---
const dateFilter = document.querySelector('.date-filter');

if (dateFilter) {
    const periods = ['過去7日間', '過去30日間', '過去90日間', '過去1年間', 'カスタム'];
    let currentIndex = 1;

    dateFilter.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % periods.length;
        const span = dateFilter.querySelector('span');
        if (span) {
            span.textContent = periods[currentIndex];
        }

        // Trigger refresh animation
        document.querySelectorAll('.stat-card, .chart-card').forEach(card => {
            card.style.opacity = '0.5';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 300);
        });
    });
}

// --- KEYBOARD NAVIGATION ---
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + 1-4 for quick navigation
    if ((e.metaKey || e.ctrlKey) && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const index = parseInt(e.key) - 1;
        const targetNav = navItems[index];
        if (targetNav) {
            targetNav.querySelector('.nav-link').click();
        }
    }
});

// --- DATA REFRESH SIMULATION ---
function simulateDataUpdate() {
    // Update stat numbers randomly
    statCards.forEach(card => {
        const numberEl = card.querySelector('.stat-number');
        if (numberEl) {
            // Add subtle pulse animation
            card.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                card.style.animation = '';
            }, 500);
        }
    });
}

// Add pulse animation
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(pulseStyle);

// Auto-refresh every 30 seconds (optional)
// setInterval(simulateDataUpdate, 30000);

// --- EXPORT FUNCTIONALITY ---
function exportData(format) {
    console.log(`Exporting data as ${format}...`);
    // Implement export logic here
}

// Add keyboard shortcut for export
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'e') {
        e.preventDefault();
        exportData('csv');
    }
});

// --- TOOLTIP FUNCTIONALITY ---
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: fixed;
                background: var(--bg-tertiary);
                color: var(--text-primary);
                padding: 8px 12px;
                border-radius: var(--radius-md);
                font-size: 0.75rem;
                z-index: 10000;
                pointer-events: none;
                box-shadow: var(--shadow-md);
            `;
            document.body.appendChild(tooltip);

            const rect = el.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;

            el._tooltip = tooltip;
        });

        el.addEventListener('mouseleave', () => {
            if (el._tooltip) {
                el._tooltip.remove();
                delete el._tooltip;
            }
        });
    });
}

// --- THEME TOGGLE (FUTURE FEATURE) ---
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

// --- FINAL INIT ---
console.log('Dashboard initialized successfully');
