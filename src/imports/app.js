// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Device Mode Switcher (Mobile Simulator vs Responsive Viewport)
function setDeviceMode(mode) {
  const frame = document.getElementById('mobile-frame');
  const btnMobile = document.getElementById('btn-mode-mobile');
  const btnDesktop = document.getElementById('btn-mode-desktop');

  if (mode === 'mobile') {
    frame.classList.remove('responsive-mode');
    btnMobile.classList.add('active');
    btnDesktop.classList.remove('active');
    showToast('สลับมุมมอง: Mobile Viewport (390px)');
  } else {
    frame.classList.add('responsive-mode');
    btnDesktop.classList.add('active');
    btnMobile.classList.remove('active');
    showToast('สลับมุมมอง: Full Responsive Desktop/Tablet');
  }
}

// User Role Toggle Switcher (Employee View vs Approver View)
let currentRole = 'employee';
function toggleUserRole(role) {
  currentRole = role;
  const btnEmp = document.getElementById('role-emp-btn');
  const btnApp = document.getElementById('role-app-btn');
  const empNavTabs = document.getElementById('nav-tabs-employee');
  const appNavTabs = document.getElementById('nav-tabs-approver');
  const empBottomBar = document.getElementById('bottom-bar-employee');
  const appBottomBar = document.getElementById('bottom-bar-approver');
  const userNameTxt = document.getElementById('user-name-txt');
  const userRoleTxt = document.getElementById('user-role-txt');
  const bannerTitle = document.getElementById('banner-title-text');

  if (role === 'approver') {
    btnApp.classList.add('active');
    btnEmp.classList.remove('active');
    
    empNavTabs.classList.add('hide');
    appNavTabs.classList.remove('hide');
    
    empBottomBar.classList.add('hide');
    appBottomBar.classList.remove('hide');

    userNameTxt.textContent = 'อนุรักษ์ สายชล';
    userRoleTxt.textContent = 'Senior QA Manager';
    bannerTitle.textContent = 'ระบบอนุมัติการลา (Approver Portal)';

    showToast('สลับบทบาท: ผู้อนุมัติ (Senior QA Manager)');
    goToScreen('screen-approver-list');
  } else {
    btnEmp.classList.add('active');
    btnApp.classList.remove('active');

    appNavTabs.classList.add('hide');
    empNavTabs.classList.remove('hide');

    appBottomBar.classList.add('hide');
    empBottomBar.classList.remove('hide');

    userNameTxt.textContent = 'ณัฐวุฒิ วิเศษสุวรรณ';
    userRoleTxt.textContent = 'Software QA Engineer';
    bannerTitle.textContent = 'ระบบ Time Management';

    showToast('สลับบทบาท: พนักงาน (Software QA Engineer)');
    goToScreen('screen-home');
  }
}

// Screen Navigation Manager (Switches between Screens)
function goToScreen(screenId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen-view');
  screens.forEach(screen => screen.classList.remove('active'));

  // Show target screen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Update Top Nav Tabs active state
  const tabs = document.querySelectorAll('.nav-tab-item');
  tabs.forEach(tab => tab.classList.remove('active'));

  if (screenId === 'screen-home') {
    const homeTab = document.getElementById('tab-home');
    if (homeTab) homeTab.classList.add('active');
    setBottomNavActive(document.getElementById('bnav-home'));
  } else if (screenId === 'screen-create-leave') {
    const createTab = document.getElementById('tab-create-leave');
    if (createTab) createTab.classList.add('active');
    setBottomNavActive(null); // Floating Action Button active
  } else if (screenId === 'screen-leave-list') {
    if (currentRole === 'approver') {
      const historyTab = document.getElementById('tab-app-history');
      if (historyTab) historyTab.classList.add('active');
      setBottomNavActive(document.getElementById('abnav-history'));
    } else {
      const listTab = document.getElementById('tab-leave-records');
      if (listTab) listTab.classList.add('active');
      setBottomNavActive(document.getElementById('bnav-leave-list'));
    }
  } else if (screenId === 'screen-edit-leave') {
    setBottomNavActive(document.getElementById('bnav-calendar'));
  } else if (screenId === 'screen-reports') {
    const reportTab = document.getElementById('tab-reports');
    if (reportTab) reportTab.classList.add('active');
    setBottomNavActive(document.getElementById('bnav-reports'));
  } else if (screenId === 'screen-approver-list') {
    const appTab = document.getElementById('tab-app-pending');
    if (appTab) appTab.classList.add('active');
    setBottomNavActive(document.getElementById('abnav-pending'));
  } else if (screenId === 'screen-approver-create') {
    const appCreateTab = document.getElementById('tab-app-create');
    if (appCreateTab) appCreateTab.classList.add('active');
    setBottomNavActive(null); // Floating Action Button active
  }

  // Refresh Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Scroll main area to top
  const mainContent = document.querySelector('.app-main-content');
  if (mainContent) {
    mainContent.scrollTop = 0;
  }
}

// Header Navigation Tabs Switcher
function switchMainTab(tabName) {
  if (tabName === 'home') {
    goToScreen('screen-home');
  } else if (tabName === 'create-leave') {
    goToScreen('screen-create-leave');
  } else if (tabName === 'leave-list' || tabName === 'leave-records') {
    goToScreen('screen-leave-list');
  } else if (tabName === 'reports') {
    goToScreen('screen-reports');
  }
}

// Bottom Navigation Bar Active Indicator
function setBottomNavActive(element) {
  const items = document.querySelectorAll('.bottom-nav-item');
  items.forEach(item => item.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }
}

// Set Leave Type Select dynamically from Quick Action buttons
function setLeaveTypeSelect(leaveTypeVal) {
  const select = document.getElementById('create-leave-type');
  if (select) {
    select.value = leaveTypeVal;
    updateLeaveTypeTitle(leaveTypeVal);
  }
}

// Update Leave Type Title and Theme Color dynamically when select box changes
function updateLeaveTypeTitle(leaveTypeVal) {
  const map = {
    'vacation': { title: '0100 - ลาพักร้อนประจำปี', theme: 'orange' },
    'personal': { title: '0200 - ลากิจจำเป็น', theme: 'purple' },
    'sick': { title: '0300 - ลาป่วย', theme: 'green' },
    'other': { title: '0000 - ลาอื่นๆ (ลาทำหมัน/ลาคลอด/รับราชการทหาร)', theme: 'blue' }
  };
  const item = map[leaveTypeVal] || map['vacation'];
  
  const regTitle = document.getElementById('reg-leave-title-txt');
  if (regTitle) regTitle.textContent = item.title;

  const selTitle = document.getElementById('selected-leave-type-txt');
  if (selTitle) selTitle.textContent = item.title;

  const badgeElem = document.getElementById('reg-leave-badge');
  if (badgeElem) {
    badgeElem.className = 'leave-badge-theme ' + item.theme;
  }

  showToast(`เลือกประเภทการลา: ${item.title}`);
}

// ==========================================================================
// APPROVER BOTTOM SHEET MODALS CONTROLLER
// ==========================================================================

// 1. Approval Confirmation Bottom Sheet Modal
let currentApproveEmpName = '';
function openApprovalModal(empName, leaveType, dates, days) {
  currentApproveEmpName = empName;
  document.getElementById('app-sheet-emp-name').textContent = empName;
  document.getElementById('app-sheet-leave-type').textContent = leaveType;
  document.getElementById('app-sheet-leave-dates').textContent = dates;
  document.getElementById('app-sheet-leave-days').textContent = days;

  document.getElementById('approval-confirm-overlay').classList.add('active');
  document.getElementById('approval-confirm-sheet').classList.add('active');
}

function closeApprovalModal() {
  document.getElementById('approval-confirm-overlay').classList.remove('active');
  document.getElementById('approval-confirm-sheet').classList.remove('active');
}

function confirmApproveRequest() {
  closeApprovalModal();
  showToast(`อนุมัติคำขอลาของ "${currentApproveEmpName}" เรียบร้อยแล้ว`);
}

// 2. Rejection Confirmation Bottom Sheet Modal
let currentRejectEmpName = '';
function openRejectionModal(empName, leaveType, dates, days) {
  currentRejectEmpName = empName;
  document.getElementById('rej-sheet-emp-name').textContent = empName;
  document.getElementById('rej-sheet-leave-type').textContent = leaveType;
  document.getElementById('rej-sheet-leave-dates').textContent = dates;
  document.getElementById('rej-sheet-leave-days').textContent = days;
  document.getElementById('rejection-reason-textarea').value = '';

  document.getElementById('rejection-confirm-overlay').classList.add('active');
  document.getElementById('rejection-confirm-sheet').classList.add('active');
}

function closeRejectionModal() {
  document.getElementById('rejection-confirm-overlay').classList.remove('active');
  document.getElementById('rejection-confirm-sheet').classList.remove('active');
}

function confirmRejectRequest() {
  const reason = document.getElementById('rejection-reason-textarea').value.trim();
  if (!reason) {
    showToast('⚠️ กรุณาระบุเหตุผลการไม่อนุมัติ (จำเป็น)');
    document.getElementById('rejection-reason-textarea').focus();
    return;
  }

  closeRejectionModal();
  showToast(`ไม่อนุมัติคำขอลาของ "${currentRejectEmpName}" และส่งระบบแจ้งเตือนเรียบร้อย`);
}

// 3. Approver Request Detail Sheet Modal
function openApproverDetailSheet(empName, docNum, leaveType, dates, days) {
  document.getElementById('dtl-emp-name').textContent = empName;
  document.getElementById('dtl-doc-num').textContent = `เลขที่ ${docNum}`;
  document.getElementById('dtl-leave-type').textContent = leaveType;
  document.getElementById('dtl-dates').textContent = dates;
  document.getElementById('dtl-days').textContent = days;
  document.getElementById('dtl-avatar').textContent = empName.charAt(0);

  document.getElementById('approver-detail-overlay').classList.add('active');
  document.getElementById('approver-detail-sheet').classList.add('active');
}

function closeApproverDetailSheet() {
  document.getElementById('approver-detail-overlay').classList.remove('active');
  document.getElementById('approver-detail-sheet').classList.remove('active');
}

// Select Employee On Behalf
function selectEmployeeOnBehalf(empId, empName) {
  document.querySelectorAll('.emp-select-card').forEach(card => card.classList.remove('selected'));
  const card = document.getElementById(`emp-select-${empId.toLowerCase()}`);
  if (card) {
    card.classList.add('selected');
    const radio = card.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }
  showToast(`เลือกยื่นลาแทน: ${empName}`);
}

// Approver Status Chips Filter
function filterApproverStatus(status) {
  const countMap = { pending: 'รออนุมัติ', 'cancel-req': 'ขอยกเลิก', approved: 'อนุมัติแล้ว', rejected: 'ไม่อนุมัติ' };
  showToast(`คัดกรองคำขอ: ${countMap[status] || status}`);
}

// Leave Regulations Accordion Toggle
function toggleRegulationsAccordion() {
  const accordion = document.getElementById('regulations-box');
  if (accordion) {
    accordion.classList.toggle('collapsed');
  }
}

// Toggle Calendar Mode (Specific Dates vs Range Calculator)
function toggleLeaveCalendarMode(mode) {
  const specificContainer = document.getElementById('mode-container-specific');
  const rangeContainer = document.getElementById('mode-container-range');

  if (mode === 'specific') {
    specificContainer.classList.add('active');
    rangeContainer.classList.remove('active');
    showToast('รูปแบบปฏิทิน: เลือกรายวันจากปฏิทิน');
  } else if (mode === 'range') {
    rangeContainer.classList.add('active');
    specificContainer.classList.remove('active');
    showToast('รูปแบบปฏิทิน: กำหนดช่วงวันอัตโนมัติ');
    calculateLeaveEndDate();
  }
}

// Calculate Leave End Date automatically based on Start Date + Working Days
function calculateLeaveEndDate() {
  const startDateInput = document.getElementById('range-start-date');
  const dayCountInput = document.getElementById('range-day-count');
  const resultInput = document.getElementById('range-end-date-result');

  if (!startDateInput || !dayCountInput || !resultInput) return;

  const startDateVal = startDateInput.value;
  const daysVal = parseFloat(dayCountInput.value) || 1;

  if (!startDateVal) return;

  const start = new Date(startDateVal);
  const daysToAdd = Math.max(0, Math.ceil(daysVal) - 1);
  const endDate = new Date(start);
  endDate.setDate(startDate.getDate() + daysToAdd);

  const day = String(endDate.getDate()).padStart(2, '0');
  const month = String(endDate.getMonth() + 1).padStart(2, '0');
  const yearBE = endDate.getFullYear() + 543;

  resultInput.value = `${day}/${month}/${yearBE}`;
  showToast(`คำนวณวันสิ้นสุด: ${day}/${month}/${yearBE}`);
}

// Toggle Touch Calendar View visibility
function toggleTouchCalendarView() {
  const cal = document.getElementById('create-inline-calendar');
  if (cal) {
    cal.style.display = (cal.style.display === 'none') ? 'block' : 'none';
  }
}

// Status Filter Chips Filtering
function filterByStatus(status) {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => chip.classList.remove('active'));
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }

  const cards = document.querySelectorAll('.leave-card');
  cards.forEach(card => {
    if (status === 'all') {
      card.style.display = 'block';
    } else {
      if (card.classList.contains(`status-${status}`)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    }
  });

  const countMap = { all: 'ทั้งหมด', pending: 'รออนุมัติ', approved: 'อนุมัติแล้ว', rejected: 'ไม่อนุมัติ' };
  showToast(`สถานะเอกสาร: ${countMap[status]}`);
}

// Filter Drawer Toggle
function toggleFilterDrawer() {
  const drawer = document.getElementById('filter-drawer');
  const overlay = document.getElementById('filter-drawer-overlay');
  
  if (drawer.classList.contains('active')) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    drawer.classList.add('active');
    overlay.classList.add('active');
  }
}

function applyFilters() {
  const select = document.getElementById('filter-status-select');
  const status = select.value;
  filterByStatus(status);
  toggleFilterDrawer();
}

function resetFilters() {
  document.getElementById('filter-status-select').value = 'all';
  filterByStatus('all');
  toggleFilterDrawer();
  showToast('ล้างค่าการค้นหาแล้ว');
}

// User Profile Screen Navigation
function toggleUserMenu() {
  goToScreen('screen-profile');
}

// Toast Notification System
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
