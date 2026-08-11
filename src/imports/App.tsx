import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Home, FileText, Plus, Calendar, BarChart3, Clock, SlidersHorizontal,
  ChevronDown, ChevronLeft, ChevronRight, Megaphone, UserCheck, IdCard,
  ShieldCheck, PieChart, Sun, Briefcase, HeartPulse, FilePlus, CheckSquare,
  UserPlus, History, BarChart2, Check, X, Search, Tag, Clock4, CalendarIcon,
  AlertCircle, AlertTriangle, CheckCircle2, RotateCcw, Edit3, XCircle,
  GitCommit, BookOpen, Calculator, Trash2, FileSpreadsheet, User, Settings,
  Camera, Info, TrendingUp, Download, Users, PhoneCall, MessageSquare,
  Lock, Database, Layers, Shield, Building2, ToggleLeft, ToggleRight,
  Upload, Paperclip,
} from 'lucide-react'

type Screen =
  | 'screen-home'
  | 'screen-approver-list'
  | 'screen-approver-create'
  | 'screen-create-leave'
  | 'screen-confirm-leave'
  | 'screen-leave-summary'
  | 'screen-leave-list'
  | 'screen-details-rejected'
  | 'screen-cancel-leave'
  | 'screen-details-approved'
  | 'screen-reports'
  | 'screen-edit-leave'
  | 'screen-profile'
  // Admin portal
  | 'screen-admin'
  | 'screen-admin-perm-admin'
  | 'screen-admin-perm-operator'
  | 'screen-admin-audit'
  // Operator portal
  | 'screen-operator'
  | 'screen-operator-edit-home'
  | 'screen-operator-config-leave'
  | 'screen-operator-work-template'
  | 'screen-operator-holidays'
  | 'screen-operator-quota'
  | 'screen-operator-approver-team'
  | 'screen-operator-approval-list'
  | 'screen-operator-leave-report'
  | 'screen-operator-schedule'
  | 'screen-operator-verify-approvers'

type Role = 'employee' | 'approver'
type LeaveFilter = 'all' | 'pending' | 'approved' | 'rejected'

export default function App() {
  const [screen, setScreen] = useState<Screen>('screen-home')
  const [role, setRole] = useState<Role>('employee')
  const [leaveFilter, setLeaveFilter] = useState<LeaveFilter>('all')
  const [approverFilter, setApproverFilter] = useState<string>('pending')
  const [calendarMode, setCalendarMode] = useState<'specific' | 'range'>('specific')
  const [regCollapsed, setRegCollapsed] = useState(false)
  const [applicantCollapsed, setApplicantCollapsed] = useState(false)
  const [approverCollapsed, setApproverCollapsed] = useState(false)
  const [approverStatuses, setApproverStatuses] = useState<Record<string, 'pending' | 'approved' | 'rejected'>>({
    'นาย อนุรักษ์ สายชล': 'pending',
    'นางสาว วิภาดา ศรีสุข': 'pending',
    'นาย สุรเชษฐ์ ศรีพลกรัง': 'pending',
    'นางสาว พิมพ์แข ชัยชนะ': 'pending',
    'นาย เมธี เดชะ': 'pending',
  })

  // ── Centralized Single Source of Truth Store ──
  const currentUser = {
    empId: 'EMP-20240892',
    name: 'นาย ณัฐวุฒิ วิเศษสุวรรณ',
    shortName: 'ณัฐวุฒิ วิเศษสุวรรณ',
    position: 'Senior Software Engineer',
    department: 'สถิตยศาสตร์และระบบดิจิทัล (Software QA & Testing Team)',
    email: 'nattawut.v@softdebut.com',
    phone: '089-300-5877',
    supervisor: 'นาย อนุรักษ์ สายชล (Senior QA Manager)',
  }

  const [leaveQuotas, setLeaveQuotas] = useState({
    vacation: { title: 'ลาพักร้อนประจำปี', accum: 2.0, annual: 8.0, total: 10.0, used: 2.0, remaining: 8.0 },
    personal: { title: 'ลากิจจำเป็น', accum: 0, annual: 6.0, total: 6.0, used: 0.5, remaining: 5.5 },
    sick: { title: 'ลาป่วย', accum: 0, annual: 30.0, total: 30.0, used: 1.0, remaining: 29.0 },
  })

  const [docSeq, setDocSeq] = useState(143)
  const [currentSubmittedDocId, setCurrentSubmittedDocId] = useState('LV-202608-0142')

  const generateDocId = useCallback(() => {
    const seqStr = String(docSeq).padStart(4, '0')
    const newId = `LV-202608-${seqStr}`
    setDocSeq(prev => prev + 1)
    return newId
  }, [docSeq])

  const [leaveCards, setLeaveCards] = useState([
    { id: 'LV-202608-0142', applicantName: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', applicantCode: 'EMP-20240892', applicantDept: 'QA Team', typeTag: '0100 - ลาพักร้อนประจำปี', leaveType: 'vacation' as const, typeClass: '', dates: '18 ส.ค. 2569 (เต็มวัน)', days: '1.0 วัน', daysNum: 1.0, daysCount: 1.0, status: 'pending' as const, submitted: '3 ส.ค. 2569 - 11:01 น.', updated: '3 ส.ค. 2569', canEdit: true, canCancel: true },
    { id: 'LV-202608-0138', applicantName: 'นางสาว ปรียานุช วงศ์สว่าง', applicantCode: 'EMP-20240138', applicantDept: 'Frontend Div', typeTag: '0300 - ลาป่วย', leaveType: 'sick' as const, typeClass: 'green', dates: '14 ส.ค. 2569 (เต็มวัน)', days: '1.0 วัน', daysNum: 1.0, daysCount: 1.0, status: 'pending' as const, submitted: '3 ส.ค. 2569 - 10:25 น.', updated: '3 ส.ค. 2569', canEdit: false, canCancel: false },
    { id: 'LV-202608-0120', applicantName: 'นาย กิตติศักดิ์ พัฒนากุล', applicantCode: 'EMP-20240120', applicantDept: 'DevOps Div', typeTag: '0200 - ลากิจจำเป็น', leaveType: 'personal' as const, typeClass: 'purple', dates: '11 ส.ค. 2569 (ครึ่งบ่าย)', days: '0.5 วัน', daysNum: 0.5, daysCount: 0.5, status: 'pending' as const, submitted: '2 ส.ค. 2569 - 16:40 น.', updated: '2 ส.ค. 2569', canEdit: false, canCancel: false },
    { id: 'LV-202607-0098', applicantName: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', applicantCode: 'EMP-20240892', applicantDept: 'QA Team', typeTag: '0100 - ลาพักร้อนประจำปี', leaveType: 'vacation' as const, typeClass: '', dates: '7 ส.ค. 2569 - 8 ส.ค. 2569', days: '1.0 วัน', daysNum: 1.0, daysCount: 1.0, status: 'approved' as const, submitted: '25 ก.ค. 2569 - 09:30 น.', updated: 'นาย อนุรักษ์ สายชล', canEdit: false, canCancel: false },
    { id: 'LV-202607-0075', applicantName: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', applicantCode: 'EMP-20240892', applicantDept: 'QA Team', typeTag: '0200 - ลากิจจำเป็น', leaveType: 'personal' as const, typeClass: 'purple', dates: '20 ก.ค. 2569 - 20 ก.ค. 2569', days: '1.0 วัน', daysNum: 1.0, daysCount: 1.0, status: 'rejected' as const, submitted: '18 ก.ค. 2569 - 14:15 น.', updated: 'นาย อนุรักษ์ สายชล', canEdit: false, canCancel: false },
  ])

  const toggleApproverStatus = (name: string) => {
    setApproverStatuses(prev => {
      const cur = prev[name] || 'pending'
      const next = cur === 'pending' ? 'approved' : cur === 'approved' ? 'rejected' : 'pending'
      showToast(`สถานะ ${name}: ${next === 'approved' ? 'อนุมัติ (จุดเขียว)' : next === 'rejected' ? 'ไม่อนุมัติ (จุดแดง)' : 'รอดำเนินการ (จุดเทา)'}`)
      return { ...prev, [name]: next }
    })
  }

  const getApproverDotClass = (name: string) => {
    const st = approverStatuses[name] || 'pending'
    if (st === 'approved') return 'proto-dot-bullet approved'
    if (st === 'rejected') return 'proto-dot-bullet rejected'
    return 'proto-dot-bullet'
  }
  const [rulesCollapsed, setRulesCollapsed] = useState(false)
  const [showFilterDrawer, setShowFilterDrawer] = useState(false)
  const [filterStatusSelect, setFilterStatusSelect] = useState('all')
  const [selectedEmployee, setSelectedEmployee] = useState('USR001')
  const [leaveType, setLeaveType] = useState('vacation')
  const [protoMonth, setProtoMonth] = useState('June')
  const [protoSelections, setProtoSelections] = useState<Record<number, 'full' | 'first_half' | 'second_half'>>({ 18: 'full' })

  const calculateTotalDays = (selections: Record<number, 'full' | 'first_half' | 'second_half'>) => {
    const values = Object.values(selections)
    if (values.length === 0) return 1.0
    return values.reduce((sum, val) => {
      if (val === 'first_half' || val === 'second_half') return sum + 0.5
      return sum + 1.0
    }, 0)
  }
  const [attachedFiles, setAttachedFiles] = useState<{ name: string; size: string }[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileAttach = () => {
    fileInputRef.current?.click()
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const newFiles = Array.from(files).map(f => ({
      name: f.name,
      size: f.size < 1024 * 1024 ? `${(f.size / 1024).toFixed(1)} KB` : `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
    }))
    setAttachedFiles(prev => [...prev, ...newFiles])
    showToast(`แนบไฟล์ ${newFiles.map(f => f.name).join(', ')} เรียบร้อยแล้ว`)
    e.target.value = ''
  }
  const removeFile = (idx: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== idx))
    showToast('ลบไฟล์แนบเรียบร้อยแล้ว')
  }

  const toggleProtoDate = (dayNum: number, type: 'full' | 'first_half' | 'second_half') => {
    setProtoSelections(prev => {
      const copy = { ...prev }
      if (copy[dayNum] === type) {
        delete copy[dayNum]
      } else {
        copy[dayNum] = type
      }
      return copy
    })
  }
  const [toastMsg, setToastMsg] = useState('')
  const [toastVisible, setToastVisible] = useState(false)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  // Approval / Rejection sheet state
  const [approvalSheet, setApprovalSheet] = useState<null | { empName: string; docNum?: string; leaveType: string; dates: string; days: string }>(null)
  const [rejectionSheet, setRejectionSheet] = useState<null | { empName: string; docNum?: string; leaveType: string; dates: string; days: string }>(null)
  const [detailSheet, setDetailSheet] = useState<null | { empName: string; docNum: string; leaveType: string; dates: string; days: string }>(null)
  const [rejectionReason, setRejectionReason] = useState('')

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg)
    setToastVisible(true)
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 2500)
  }, [])

  useEffect(() => () => { if (toastTimerRef.current) clearTimeout(toastTimerRef.current) }, [])

  useEffect(() => {
    if (!profileDropdownOpen) return
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.dw-profile-trigger')) setProfileDropdownOpen(false)
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [profileDropdownOpen])

  const goToScreen = (s: Screen) => {
    setScreen(s)
  }

  const switchRole = (r: Role) => {
    setRole(r)
    if (r === 'approver') {
      goToScreen('screen-home')
      showToast('สลับบทบาท: ผู้อนุมัติ (Senior QA Manager)')
    } else {
      goToScreen('screen-home')
      showToast('สลับบทบาท: พนักงาน (Software QA Engineer)')
    }
  }

  const getLeaveTypeInfo = (val: string) => {
    if (val === 'personal') return { title: leaveQuotas.personal.title, quota: leaveQuotas.personal.remaining }
    if (val === 'sick') return { title: leaveQuotas.sick.title, quota: leaveQuotas.sick.remaining }
    if (val === 'other') return { title: 'ลาอื่นๆ (ลาทำหมัน/ลาคลอด/รับราชการทหาร)', quota: 0 }
    return { title: leaveQuotas.vacation.title, quota: leaveQuotas.vacation.remaining }
  }

  // Employee nav tabs — shared by both roles
  const empTabs = [
    { id: 'home', label: 'หน้าแรก', icon: <Home size={16} />, screen: 'screen-home' as Screen, badge: undefined as string | undefined },
    { id: 'create-leave', label: 'ลางาน', icon: <Plus size={16} />, screen: 'screen-create-leave' as Screen, badge: undefined as string | undefined },
    { id: 'leave-records', label: 'รายการลา', icon: <FileText size={16} />, screen: 'screen-leave-list' as Screen, badge: undefined as string | undefined },
    { id: 'reports', label: 'รายงาน', icon: <BarChart3 size={16} />, screen: 'screen-reports' as Screen, badge: undefined as string | undefined },
    { id: 'admin', label: 'แอดมิน', icon: <ShieldCheck size={16} />, screen: 'screen-admin' as Screen, badge: undefined as string | undefined },
    { id: 'operator', label: 'โอเปอเรเตอร์', icon: <Settings size={16} />, screen: 'screen-operator' as Screen, badge: undefined as string | undefined },
  ]
  const pendingCount = leaveCards.filter(c => c.status === 'pending').length
  // Approver has all employee tabs + approval tab
  const approverTabs = [
    { id: 'home', label: 'หน้าแรก', icon: <Home size={16} />, screen: 'screen-home' as Screen, badge: undefined as string | undefined },
    { id: 'create-leave', label: 'ลางาน', icon: <Plus size={16} />, screen: 'screen-create-leave' as Screen, badge: undefined as string | undefined },
    { id: 'leave-records', label: 'รายการลา', icon: <FileText size={16} />, screen: 'screen-leave-list' as Screen, badge: undefined as string | undefined },
    { id: 'reports', label: 'รายงาน', icon: <BarChart3 size={16} />, screen: 'screen-reports' as Screen, badge: undefined as string | undefined },
    { id: 'app-pending', label: 'รออนุมัติ', icon: <CheckSquare size={16} />, screen: 'screen-approver-list' as Screen, badge: pendingCount > 0 ? String(pendingCount) : undefined },
    { id: 'admin', label: 'แอดมิน', icon: <ShieldCheck size={16} />, screen: 'screen-admin' as Screen, badge: undefined as string | undefined },
    { id: 'operator', label: 'โอเปอเรเตอร์', icon: <Settings size={16} />, screen: 'screen-operator' as Screen, badge: undefined as string | undefined },
  ]

  const activeTabs = role === 'approver' ? approverTabs : empTabs
  const activeTabId = activeTabs.find(t => t.screen === screen)?.id || (screen === 'screen-home' ? 'home' : '')

  const confirmApprove = () => {
    const docNum = approvalSheet?.docNum || ''
    const name = approvalSheet?.empName || ''
    setLeaveCards(prev =>
      prev.map(c =>
        (docNum && c.id === docNum)
          ? { ...c, status: 'approved' as const, updated: 'นาย อนุรักษ์ สายชล', canEdit: false, canCancel: false }
          : c
      )
    )
    setApprovalSheet(null)
    showToast(`อนุมัติคำขอลาของ "${name || docNum}" เรียบร้อยแล้ว`)
  }
  const confirmReject = () => {
    if (!rejectionReason.trim()) {
      showToast('⚠️ กรุณาระบุเหตุผลการไม่อนุมัติ (จำเป็น)')
      return
    }
    const docNum = rejectionSheet?.docNum || ''
    const name = rejectionSheet?.empName || ''
    setLeaveCards(prev =>
      prev.map(c =>
        (docNum && c.id === docNum)
          ? { ...c, status: 'rejected' as const, updated: 'นาย อนุรักษ์ สายชล', rejectReason: rejectionReason, canEdit: false, canCancel: false }
          : c
      )
    )
    setRejectionSheet(null)
    setRejectionReason('')
    showToast(`ไม่อนุมัติคำขอลาของ "${name || docNum}" และส่งระบบแจ้งเตือนเรียบร้อย`)
  }

  const filteredCards = leaveFilter === 'all' ? leaveCards : leaveCards.filter(c => c.status === leaveFilter)

  const bannerTitle = role === 'approver' ? 'ระบบ Time Management (Approver)' : 'ระบบ Time Management'
  const userName = role === 'approver' ? 'อนุรักษ์ สายชล' : currentUser.shortName
  const userRoleLabel = role === 'approver' ? 'Senior QA Manager' : currentUser.position
  const activePageLabel = activeTabs.find(t => t.screen === screen)?.label || 'ลางาน'
  const userInitial = userName.charAt(0)

  const pageInfo: Record<Screen, { title: string; subtitle: string; action?: { label: string; screen: Screen } }> = {
    'screen-home': { title: 'ระบบการลา', subtitle: 'จัดการและติดตามสิทธิการลาของคุณ', action: { label: '+ ยื่นขอลา', screen: 'screen-create-leave' } },
    'screen-create-leave': { title: 'ยื่นขอลาใหม่', subtitle: 'กรอกรายละเอียดการลาและส่งคำขออนุมัติ' },
    'screen-confirm-leave': { title: 'ตรวจสอบและยืนยันคำขอลา', subtitle: 'ตรวจสอบรายละเอียดคำขอและขั้นตอนอนุมัติก่อนยืนยันการส่ง' },
    'screen-leave-summary': { title: 'สรุปผลการลา', subtitle: 'ทำการบันทึกการลาเรียบร้อยแล้ว ตรวจสอบรายละเอียดได้ที่นี่' },
    'screen-leave-list': { title: 'รายการการลา', subtitle: 'ติดตามสถานะคำขอลาทั้งหมดของคุณ', action: { label: '+ ยื่นขอลา', screen: 'screen-create-leave' } },
    'screen-reports': { title: 'รายงานการลา', subtitle: 'สรุปสถิติและประวัติการลาประจำปี' },
    'screen-approver-list': { title: 'รออนุมัติ', subtitle: 'จัดการคำขอลาของสมาชิกในทีม' },
    'screen-approver-create': { title: 'สร้างการลาให้พนักงาน', subtitle: 'บันทึกการลาในนามของพนักงานในทีม' },
    'screen-details-rejected': { title: 'รายละเอียดการลา', subtitle: 'ดูข้อมูลและสถานะคำขอลา' },
    'screen-cancel-leave': { title: 'ยกเลิกการลา', subtitle: 'ยืนยันการยกเลิกคำขอลานี้' },
    'screen-details-approved': { title: 'รายละเอียดการลา', subtitle: 'ดูข้อมูลและสถานะคำขอลา' },
    'screen-edit-leave': { title: 'แก้ไขคำขอลา', subtitle: 'ปรับปรุงรายละเอียดคำขอลาของคุณ' },
    'screen-profile': { title: 'โปรไฟล์', subtitle: 'ข้อมูลส่วนตัวและการตั้งค่าบัญชี' },
    // Admin portal
    'screen-admin': { title: 'แอดมิน', subtitle: 'จัดการสิทธิ์ผู้ใช้งานและตรวจสอบระบบ' },
    'screen-admin-perm-admin': { title: 'กำหนดสิทธิ์ Administrator', subtitle: 'กำหนดและจัดการสิทธิ์ผู้ดูแลระบบ' },
    'screen-admin-perm-operator': { title: 'กำหนดสิทธิ์ Operator', subtitle: 'กำหนดและจัดการสิทธิ์ผู้ปฏิบัติการระบบ' },
    'screen-admin-audit': { title: 'รายงานประวัติการใช้งาน', subtitle: 'บันทึกกิจกรรมและประวัติการใช้งานระบบทั้งหมด' },
    // Operator portal
    'screen-operator': { title: 'โอเปอเรเตอร์', subtitle: 'จัดการการตั้งค่าและข้อมูลระบบ' },
    'screen-operator-edit-home': { title: 'แก้ไขข้อความหน้าแรก', subtitle: 'แก้ไขประกาศและเนื้อหาหน้าหลักของระบบ' },
    'screen-operator-config-leave': { title: 'Configuration: ลา', subtitle: 'ตั้งค่าประเภทการลาและกฎเกณฑ์ต่างๆ' },
    'screen-operator-work-template': { title: 'เทมเพลตเวลาทำงานรายสัปดาห์', subtitle: 'กำหนดรูปแบบเวลาทำงานมาตรฐาน' },
    'screen-operator-holidays': { title: 'วันหยุดพิเศษ', subtitle: 'จัดการวันหยุดประจำปีและวันหยุดพิเศษ' },
    'screen-operator-quota': { title: 'ตรวจโควตาลาพักร้อน', subtitle: 'ตรวจสอบโควตาวันลาพักร้อนของพนักงาน' },
    'screen-operator-approver-team': { title: 'ทีมงานผู้พิจารณาอนุมัติ', subtitle: 'จัดการทีมและสมาชิกผู้พิจารณาอนุมัติการลา' },
    'screen-operator-approval-list': { title: 'รายการอนุมัติการลา', subtitle: 'ตรวจสอบและจัดการคำขอลาทั้งหมดในระบบ' },
    'screen-operator-leave-report': { title: 'รายงานการลา', subtitle: 'รายงานสถิติและสรุปการลาประจำปี' },
    'screen-operator-schedule': { title: 'จัดตารางการทำงาน', subtitle: 'กำหนดและแก้ไขตารางการทำงานของพนักงาน' },
    'screen-operator-verify-approvers': { title: 'ตรวจสอบทีมงานผู้พิจารณาอนุมัติ', subtitle: 'ตรวจสอบความถูกต้องของการกำหนดผู้อนุมัติ' },
  }
  const currentPage = pageInfo[screen]

  return (
    <div className="app-shell">

      {/* ── DEBUT WORKSPACE SIDEBAR — 96px compact icon+label ── */}
      <aside className="ds-sidebar">
        {/* Logo badge */}
        <div className="ds-logo-area">
          <span className="ds-logo-badge-text">DB</span>
          <span className="ds-logo-badge-sub">WORKSPACE</span>
        </div>

        {/* Role indicator chip */}
        <div className="ds-role-chip" title={role === 'approver' ? 'Approver Portal' : 'Employee Portal'}>
          {role === 'approver' ? <ShieldCheck size={10} /> : <User size={10} />}
        </div>

        {/* Navigation — icon (24px) + label (10px) */}
        <nav className="ds-nav">
          {activeTabs.map(t => (
            <button
              key={t.id}
              className={`ds-nav-item${activeTabId === t.id ? ' active' : ''}`}
              onClick={() => goToScreen(t.screen)}
              title={t.label}
            >
              <span className="ds-nav-icon">
                {/* Clone icon at 24px for sidebar */}
                {t.id === 'home' && <Home size={24} />}
                {t.id === 'create-leave' && <Plus size={24} />}
                {t.id === 'leave-records' && <FileText size={24} />}
                {t.id === 'reports' && <BarChart3 size={24} />}
                {t.id === 'app-pending' && <CheckSquare size={24} />}
              </span>
              <span className="ds-nav-label">{t.label}</span>
              {t.badge && <span className="ds-nav-badge">{t.badge}</span>}
            </button>
          ))}
        </nav>

        {/* Footer — avatar only on 96px sidebar */}
        <div className="ds-sidebar-footer">
          <div className="ds-user-card" onClick={() => goToScreen('screen-profile')} title={userName}>
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="ds-user-avatar" />
          </div>
          <button
            className="ds-switch-role"
            onClick={() => switchRole(role === 'employee' ? 'approver' : 'employee')}
            title={role === 'employee' ? 'สลับเป็น Approver' : 'สลับเป็น Employee'}
          >
            {role === 'employee' ? <ShieldCheck size={12} /> : <User size={12} />}
          </button>
        </div>
      </aside>

      {/* ── MOBILE FRAME / DESKTOP BODY ─────────────────── */}
      <div className="mobile-frame">

        {/* Dynamic Island bar (mobile only) */}
        <div className="dynamic-island-bar">
          <div className="dynamic-island-pill" />
        </div>

        {/* DEBUT WORKSPACE top header bar (desktop only) */}
        <div className="dw-topbar">
          <div className="dw-topbar-inner">
            <div className="dw-topbar-brand">
              <span className="dw-brand-name">DEBUT WORKSPACE</span>
              <div className="dw-brand-sep" />
              <span className="dw-page-name">{activePageLabel}</span>
            </div>
            <div className="dw-topbar-search">
              <Search size={16} />
              <input type="text" placeholder="Search..." readOnly />
            </div>
            <div className="dw-profile-trigger" style={{ position: 'relative' }}>
              <div className="dw-topbar-user" onClick={() => setProfileDropdownOpen(v => !v)}>
                {userInitial}
              </div>
              {profileDropdownOpen && (
                <div className="profile-dropdown" style={{ right: 0, left: 'auto', top: '44px' }}>
                  <div className="profile-dropdown-header">
                    <span className="pd-label">เข้าสู่ระบบในฐานะ</span>
                  </div>
                  <button
                    className={`pd-role-item${role === 'employee' ? ' active' : ''}`}
                    onClick={() => { switchRole('employee'); setProfileDropdownOpen(false) }}
                  >
                    <div className={`pd-role-icon${role === 'employee' ? ' active' : ''}`}><User size={14} /></div>
                    <div className="pd-role-text">
                      <span className="pd-role-name">พนักงาน</span>
                      <span className="pd-role-desc">ณัฐวุฒิ วิเศษสุวรรณ</span>
                    </div>
                    {role === 'employee' && <Check size={14} className="pd-check" />}
                  </button>
                  <button
                    className={`pd-role-item${role === 'approver' ? ' active' : ''}`}
                    onClick={() => { switchRole('approver'); setProfileDropdownOpen(false) }}
                  >
                    <div className={`pd-role-icon approver${role === 'approver' ? ' active' : ''}`}><ShieldCheck size={14} /></div>
                    <div className="pd-role-text">
                      <span className="pd-role-name">ผู้อนุมัติ</span>
                      <span className="pd-role-desc">อนุรักษ์ สายชล</span>
                    </div>
                    {role === 'approver' && <Check size={14} className="pd-check approver" />}
                  </button>
                  <div className="pd-divider" />
                  <button className="pd-profile-link" onClick={() => { goToScreen('screen-profile'); setProfileDropdownOpen(false) }}>
                    <User size={13} /> ดูโปรไฟล์
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DEBUT-style page header band (desktop only) */}
        <div className="dw-content-header">
          <div className="dw-content-header-inner">
            <div>
              <div className="dw-ch-title">{currentPage.title}</div>
              <div className="dw-ch-subtitle">{currentPage.subtitle}</div>
            </div>
            {currentPage.action && (
              <button className="dw-ch-action" onClick={() => goToScreen(currentPage.action!.screen)}>
                {currentPage.action.label}
              </button>
            )}
          </div>
        </div>

        {/* Quick-nav tab bar — desktop & mobile top menu tabs */}
        <div className="dw-quick-chips">
          <div className="dw-quick-chips-inner">
            {activeTabs.map(t => (
              <button
                key={t.id}
                className={`dw-quick-chip${(screen === t.screen || (t.id === 'admin' && screen.startsWith('screen-admin')) || (t.id === 'operator' && screen.startsWith('screen-operator'))) ? ' active' : ''}`}
                onClick={() => goToScreen(t.screen)}
              >
                <span className="dw-chip-icon">{t.icon}</span>
                <span className="dw-chip-title">{t.label}</span>
                {t.badge && <span className="nav-badge-count">{t.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <header className="app-header">
          <div className="header-top">
            <div className="brand-logo">
              <img src="/Logo_Softdebut.svg" alt="SOFTDEBUT" className="brand-logo-img" />
            </div>
            {/* Mobile: avatar triggers profile page */}
            <div className="dw-profile-trigger mobile-only-profile" style={{ position: 'relative', marginLeft: 'auto' }}>
              <button className="mobile-avatar-btn" onClick={() => setProfileDropdownOpen(v => !v)}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Avatar" className="avatar-img" />
                <ChevronDown size={12} className={`dropdown-icon${profileDropdownOpen ? ' rotated' : ''}`} />
              </button>
              {profileDropdownOpen && (
                <div className="profile-dropdown" style={{ right: 0, left: 'auto', top: '52px' }}>
                  <div className="profile-dropdown-header">
                    <span className="pd-label">เข้าสู่ระบบในฐานะ</span>
                  </div>
                  <button
                    className={`pd-role-item${role === 'employee' ? ' active' : ''}`}
                    onClick={() => { switchRole('employee'); setProfileDropdownOpen(false) }}
                  >
                    <div className={`pd-role-icon${role === 'employee' ? ' active' : ''}`}><User size={14} /></div>
                    <div className="pd-role-text">
                      <span className="pd-role-name">พนักงาน</span>
                      <span className="pd-role-desc">ณัฐวุฒิ วิเศษสุวรรณ</span>
                    </div>
                    {role === 'employee' && <Check size={14} className="pd-check" />}
                  </button>
                  <button
                    className={`pd-role-item${role === 'approver' ? ' active' : ''}`}
                    onClick={() => { switchRole('approver'); setProfileDropdownOpen(false) }}
                  >
                    <div className={`pd-role-icon approver${role === 'approver' ? ' active' : ''}`}><ShieldCheck size={14} /></div>
                    <div className="pd-role-text">
                      <span className="pd-role-name">ผู้อนุมัติ</span>
                      <span className="pd-role-desc">อนุรักษ์ สายชล</span>
                    </div>
                    {role === 'approver' && <Check size={14} className="pd-check approver" />}
                  </button>
                  <div className="pd-divider" />
                  <button className="pd-profile-link" onClick={() => { goToScreen('screen-profile'); setProfileDropdownOpen(false) }}>
                    <User size={13} /> ดูโปรไฟล์
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="system-banner">
            <div className="system-title">
              <Clock className="banner-icon" />
              <span>{bannerTitle}</span>
            </div>
            <button className="filter-trigger-btn" onClick={() => setShowFilterDrawer(true)}>
              <SlidersHorizontal size={16} />
              <span className="filter-badge-dot" />
            </button>
          </div>

          {/* Unified Nav Tabs */}
          <nav className="app-nav-tabs">
            {activeTabs.map(t => (
              <button key={t.id} className={`nav-tab-item${activeTabId === t.id ? ' active' : ''}`} onClick={() => goToScreen(t.screen)}>
                {t.icon} {t.label}
                {t.badge && <span className="nav-badge-count">{t.badge}</span>}
              </button>
            ))}
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="app-main-content">

          {/* SCREEN: HOME */}
          <section className={`screen-view${screen === 'screen-home' ? ' active' : ''}`}>
            <div className="announcement-card">
              <div className="announcement-header">
                <Megaphone className="announce-icon" />
                <h4>ข่าวประชาสัมพันธ์บริษัท</h4>
              </div>
              <div className="announcement-body">
                <h3 className="announce-title">การยื่นขอลาพักร้อนประจำปีล่วงหน้าช่วงวันหยุดนักขัตฤกษ์</h3>
                <p className="announce-desc">ขอความร่วมมือพนักงานทุกท่านยื่นคำขอลาพักร้อนล่วงหน้าอย่างน้อย 7 วันทำการ ผ่านระบบ Time Management เพื่อให้หัวหน้างานจัดสรรกำลังคนอย่างเหมาะสม</p>
                <span className="announce-subtext">ประกาศ ณ วันที่ 1 สิงหาคม 2569 | ฝ่ายทรัพยากรบุคคล (HR Dept)</span>
              </div>
            </div>

            <div className="ui-card profile-summary-card">
              <div className="card-title-bar">
                <h3 className="card-h3"><UserCheck size={16} /> ข้อมูลพนักงาน & ผู้บังคับบัญชา</h3>
              </div>
              <div className="profile-info-grid">
                <div className="info-block">
                  <span className="block-title"><IdCard size={14} /> ข้อมูลพนักงาน</span>
                  <div className="info-row-item"><span className="lbl">รหัสพนักงาน :</span><span className="val font-mono">{currentUser.empId}</span></div>
                  <div className="info-row-item"><span className="lbl">ชื่อ-นามสกุล :</span><span className="val bold">{currentUser.name}</span></div>
                  <div className="info-row-item"><span className="lbl">ตำแหน่ง :</span><span className="val">{currentUser.position}</span></div>
                  <div className="info-row-item"><span className="lbl">สังกัด / แผนก :</span><span className="val">{currentUser.department}</span></div>
                </div>
                <div className="info-block supervisor">
                  <span className="block-title"><ShieldCheck size={14} /> ผู้บังคับบัญชา</span>
                  <div className="info-row-item"><span className="lbl">ชื่อ-นามสกุล :</span><span className="val bold">นาย อนุรักษ์ สายชล</span></div>
                  <div className="info-row-item"><span className="lbl">ตำแหน่ง :</span><span className="val">Senior QA Manager</span></div>
                  <div className="info-row-item"><span className="lbl">สังกัด / แผนก :</span><span className="val">{currentUser.department}</span></div>
                </div>
              </div>
            </div>

            <div className="section-title-row">
              <h3 className="card-h3"><PieChart size={16} /> สิทธิวันลาหยุดประจำปี 2569 (Quota)</h3>
              <button className="btn-text-link" onClick={() => goToScreen('screen-leave-list')}>ดูรายการลาทั้งหมด <ChevronRight size={14} /></button>
            </div>

            <div className="quota-cards-grid">
              {/* Quota 1 */}
              <div className="quota-card main-vacation">
                <div className="quota-card-header">
                  <div className="quota-title-group">
                    <span className="quota-icon-badge orange"><Sun size={20} /></span>
                    <div>
                      <h4>ลาพักร้อนประจำปี</h4>
                      <span className="quota-sub">สะสมปีก่อน: {leaveQuotas.vacation.accum.toFixed(1)} วัน | ประจำปี 2569: {leaveQuotas.vacation.annual.toFixed(1)} วัน</span>
                    </div>
                  </div>
                </div>
                <div className="quota-card-body">
                  <div className="quota-metric-row">
                    <div className="metric-item"><span className="m-lbl">สิทธิรวม</span><span className="m-val">{leaveQuotas.vacation.total.toFixed(1)} วัน</span></div>
                    <div className="metric-item"><span className="m-lbl">ใช้แล้ว</span><span className="m-val">{leaveQuotas.vacation.used.toFixed(1)} วัน</span></div>
                    <div className="metric-item highlight"><span className="m-lbl">คงเหลือ</span><span className="m-val orange-txt">{leaveQuotas.vacation.remaining.toFixed(1)} วัน</span></div>
                  </div>
                  <div className="quota-breakdown-list">
                    <div className="breakdown-row"><span className="lbl">วันหยุดพักผ่อนยกมาจากปี 2568:</span><span className="val">{leaveQuotas.vacation.accum.toFixed(1)} วัน</span></div>
                    <div className="breakdown-row"><span className="lbl">จำนวนวันหยุดพักผ่อนประจำปี 2569:</span><span className="val">{leaveQuotas.vacation.annual.toFixed(1)} วัน</span></div>
                    <div className="breakdown-row"><span className="lbl">สิทธิ์วันหยุดพักผ่อนเพิ่มเติมตามเกณฑ์:</span><span className="val">0.0 วัน</span></div>
                    <div className="breakdown-row"><span className="lbl">รวมจำนวนวันหยุดพักผ่อนสะสมปี 2569:</span><span className="val bold">{leaveQuotas.vacation.total.toFixed(1)} วัน</span></div>
                  </div>
                  <div className="quota-progress-bar margin-top-sm"><div className="progress-fill orange" style={{ width: `${Math.round((leaveQuotas.vacation.used / leaveQuotas.vacation.total) * 100)}%` }} /></div>
                </div>
              </div>

              {/* Quota 2 */}
              <div className="quota-card">
                <div className="quota-card-header">
                  <div className="quota-title-group">
                    <span className="quota-icon-badge purple"><Briefcase size={20} /></span>
                    <div><h4>ลากิจจำเป็น</h4><span className="quota-sub">สิทธิการลาตามระเบียบบริษัท (รับค่าจ้าง)</span></div>
                  </div>
                </div>
                <div className="quota-card-body">
                  <div className="quota-metric-row">
                    <div className="metric-item"><span className="m-lbl">สิทธิสูงสุด</span><span className="m-val">{leaveQuotas.personal.total.toFixed(1)} วัน</span></div>
                    <div className="metric-item"><span className="m-lbl">ใช้แล้ว</span><span className="m-val">{leaveQuotas.personal.used.toFixed(1)} วัน</span></div>
                    <div className="metric-item highlight"><span className="m-lbl">คงเหลือ</span><span className="m-val purple-txt">{leaveQuotas.personal.remaining.toFixed(1)} วัน</span></div>
                  </div>
                  <div className="quota-progress-bar"><div className="progress-fill purple" style={{ width: `${Math.round((leaveQuotas.personal.used / leaveQuotas.personal.total) * 100)}%` }} /></div>
                </div>
              </div>

              {/* Quota 3 */}
              <div className="quota-card">
                <div className="quota-card-header">
                  <div className="quota-title-group">
                    <span className="quota-icon-badge green"><HeartPulse size={20} /></span>
                    <div><h4>ลาป่วย</h4><span className="quota-sub">สิทธิการลาตามกฎหมายคุ้มครองแรงงาน</span></div>
                  </div>
                </div>
                <div className="quota-card-body">
                  <div className="quota-metric-row">
                    <div className="metric-item"><span className="m-lbl">สิทธิสูงสุด</span><span className="m-val">{leaveQuotas.sick.total.toFixed(1)} วัน</span></div>
                    <div className="metric-item"><span className="m-lbl">ใช้แล้ว</span><span className="m-val">{leaveQuotas.sick.used.toFixed(1)} วัน</span></div>
                    <div className="metric-item highlight"><span className="m-lbl">คงเหลือ</span><span className="m-val green-txt">{leaveQuotas.sick.remaining.toFixed(1)} วัน</span></div>
                  </div>
                  <div className="quota-progress-bar"><div className="progress-fill green" style={{ width: `${Math.round((leaveQuotas.sick.used / leaveQuotas.sick.total) * 100)}%` }} /></div>
                </div>
              </div>

              {/* Quota 4 */}
              <div className="quota-card">
                <div className="quota-card-header">
                  <div className="quota-title-group">
                    <span className="quota-icon-badge blue"><FilePlus size={20} /></span>
                    <div><h4>ลาอื่นๆ (ลาทำหมัน/ลาคลอด/รับราชการ)</h4><span className="quota-sub">สิทธิการลาตามระเบียบกรณีพิเศษ</span></div>
                  </div>
                </div>
                <div className="quota-card-body">
                  <div className="quota-metric-row">
                    <div className="metric-item"><span className="m-lbl">สิทธิสูงสุด</span><span className="m-val">ตามสิทธิ</span></div>
                    <div className="metric-item"><span className="m-lbl">ใช้แล้ว</span><span className="m-val">0.0 วัน</span></div>
                    <div className="metric-item highlight"><span className="m-lbl">คงเหลือ</span><span className="m-val blue-txt">ตามสิทธิ</span></div>
                  </div>
                  <div className="quota-progress-bar"><div className="progress-fill blue" style={{ width: '0%' }} /></div>
                </div>
              </div>
            </div>

            <div className="quick-action-banner">
              <div>
                <span className="q-title">ต้องการขอลาพักร้อนหรือลากิจ?</span>
                <span className="q-desc">ทำรายการยื่นคำขออนุมัติออนไลน์ได้ทันที</span>
              </div>
              <button className="btn-quick-leave" onClick={() => goToScreen('screen-create-leave')}>
                <Plus size={14} /> ยื่นคำขอลา
              </button>
            </div>

            <footer className="app-footer">
              <span className="footer-brand"><strong>SOFTDEBUT CO., LTD.</strong> | ระบบบริหารจัดการเวลาและการลา</span>
              <span className="footer-contact">ติดต่อสอบถามฝ่ายทรัพยากรบุคคล: hr@softdebut.com | โทร. 02-123-4567</span>
            </footer>
          </section>


          {/* SCREEN: APPROVER LIST */}
          <section className={`screen-view${screen === 'screen-approver-list' ? ' active' : ''}`}>
            <div className="screen-header-row">
              <div>
                <h1 className="page-title">รายการรออนุมัติ</h1>
                <p className="page-subtitle">คำขออนุมัติการลาของพนักงานในทีม QA & Testing</p>
              </div>
              <button className="btn-primary-action" onClick={() => goToScreen('screen-approver-create')}>
                <UserPlus size={16} /> เขียนใบลาแทน
              </button>
            </div>

            <div className="status-chips-scroll">
              {[
                { key: 'pending', label: 'รออนุมัติ', count: String(leaveCards.filter(c => c.status === 'pending').length) },
                { key: 'cancel-req', label: 'ขอยกเลิก', count: '1', cls: 'orange-outline' },
                { key: 'approved', label: 'อนุมัติแล้ว', count: String(leaveCards.filter(c => c.status === 'approved').length), cls: 'approved' },
                { key: 'rejected', label: 'ไม่อนุมัติ', count: String(leaveCards.filter(c => c.status === 'rejected').length), cls: 'rejected' },
              ].map(c => (
                <button key={c.key} className={`chip ${c.cls || ''} ${approverFilter === c.key ? 'active' : ''}`} onClick={() => { setApproverFilter(c.key); showToast(`คัดกรองคำขอ: ${c.label}`) }}>
                  {c.label} <span className="chip-count">{c.count}</span>
                </button>
              ))}
            </div>

            <div className="ll-cards-list">
              {(approverFilter === 'all' ? leaveCards : leaveCards.filter(c => c.status === approverFilter)).map((card) => (
                <article key={card.id} className={`ll-card ll-card--${card.status}`}>
                  <div className="ll-card-top">
                    <div className="ll-card-doc">
                      <div className={`avatar-circle-text ${card.typeClass || 'orange'}`}>{card.applicantName.charAt(4) || card.applicantName.charAt(0)}</div>
                      <div>
                        <span className="emp-name font-bold">{card.applicantName}</span>
                        <span className="doc-sub">เลขที่ {card.id} · {card.applicantDept}</span>
                      </div>
                    </div>
                    <span className={`ll-status-pill ll-status-pill--${card.status}`}>{card.status === 'pending' ? 'รออนุมัติ' : card.status === 'approved' ? 'อนุมัติแล้ว' : 'ไม่อนุมัติ'}</span>
                  </div>
                  <div className="ll-card-body-compact">
                    <div className="ll-card-main-info">
                      <div className="ll-date-info">
                        <Tag size={13} className="ll-icon-muted" />
                        <span className={`ll-type-badge ${card.typeClass || 'orange'}`}>{card.typeTag}</span>
                        <CalendarIcon size={13} className="ll-icon-muted" />
                        <span className="ll-date-main">{card.dates}</span>
                        <span className="ll-days-badge">{card.days}</span>
                      </div>
                      <div className="ll-meta-sub">
                        <Clock4 size={12} className="ll-meta-icon" />
                        <span>ยื่นเมื่อ {card.submitted}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ll-card-actions">
                    <button className="ll-btn-view" onClick={() => setDetailSheet({ empName: card.applicantName, docNum: card.id, leaveType: card.typeTag, dates: card.dates, days: card.days })}>
                      <Search size={13} /> ดูรายละเอียด
                    </button>
                    {card.status === 'pending' && (
                      <>
                        <button className="ll-btn-cancel" onClick={() => setRejectionSheet({ empName: card.applicantName, docNum: card.id, leaveType: card.typeTag, dates: card.dates, days: card.days })}>
                          <X size={13} /> ไม่อนุมัติ
                        </button>
                        <button className="ll-btn-view" style={{ background: '#28BD0A', color: '#fff', border: 'none' }} onClick={() => setApprovalSheet({ empName: card.applicantName, docNum: card.id, leaveType: card.typeTag, dates: card.dates, days: card.days })}>
                          <Check size={13} /> อนุมัติ
                        </button>
                      </>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>


          {/* SCREEN: APPROVER CREATE */}
          <section className={`screen-view${screen === 'screen-approver-create' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-approver-list')}><ChevronLeft size={14} /> รายการรออนุมัติ</button>
              <span className="sep">/</span>
              <span className="current">เขียนใบลาแทนพนักงาน</span>
            </div>

            <div className="section-title-card alert-orange">
              <UserPlus size={22} />
              <div>
                <h3>ยื่นคำขอลาแทนพนักงาน (โดยผู้บังคับบัญชา)</h3>
                <p>เลือกพนักงานในสายการบังคับบัญชาเพื่อยื่นเรื่องอนุมัติลาแทน</p>
              </div>
            </div>

            <div className="ui-card">
              <h3 className="card-h3"><Users size={16} /> เลือกพนักงานในทีม</h3>
              <div className="form-group-mobile margin-top-sm">
                <div className="input-with-icon">
                  <Search size={18} />
                  <input type="text" className="form-input" placeholder="ค้นหาชื่อ, สังกัด หรือ รหัสพนักงาน..." />
                </div>
              </div>
              <div className="emp-select-list">
                {[
                  { id: 'USR001', name: 'นางสาว ปรียานุช วงศ์สว่าง', code: 'EMP-20240801', dept: 'Senior Frontend Developer (Software Development Team)' },
                  { id: 'USR002', name: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', code: 'EMP-20240892', dept: 'Software QA Engineer (Software QA & Testing Team)' },
                  { id: 'USR003', name: 'นาย กิตติศักดิ์ พัฒนากุล', code: 'EMP-20240815', dept: 'Cloud DevOps Engineer (Infrastructure Team)' },
                ].map(emp => (
                  <div key={emp.id} className={`emp-select-card${selectedEmployee === emp.id ? ' selected' : ''}`} onClick={() => { setSelectedEmployee(emp.id); showToast(`เลือกยื่นลาแทน: ${emp.name}`) }}>
                    <div className="emp-radio-col">
                      <input type="radio" name="emp_choice" readOnly checked={selectedEmployee === emp.id} />
                    </div>
                    <div className="emp-detail-col">
                      <span className="emp-name font-bold">{emp.name}</span>
                      <span className="emp-code">รหัส: {emp.code}</span>
                      <span className="emp-dept-sm">{emp.dept}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ui-card">
              <h3 className="card-h3"><CalendarIcon size={16} /> เลือกประเภทการลา & กำหนดวัน</h3>
              <div className="form-group-mobile margin-top-sm">
                <label className="form-label required">ประเภทการลา</label>
                <select className="form-select">
                  <option value="vacation">0100 - ลาพักร้อนประจำปี</option>
                  <option value="personal">0200 - ลากิจจำเป็น</option>
                  <option value="sick">0300 - ลาป่วย</option>
                  <option value="other">0000 - ลาอื่นๆ (ลาทำหมัน/ลาคลอด/รับราชการทหาร)</option>
                </select>
              </div>
              <div className="form-row-2">
                <div className="form-group-mobile"><label className="form-label required">ตั้งแต่วันที่</label><input type="date" className="form-input" defaultValue="2026-08-18" /></div>
                <div className="form-group-mobile"><label className="form-label required">ถึงวันที่</label><input type="date" className="form-input" defaultValue="2026-08-18" /></div>
              </div>
              <div className="form-group-mobile"><label className="form-label">กรณีเร่งด่วนติดต่อ</label><input type="text" className="form-input" defaultValue="081-987-6543 (เบอร์มือถือพนักงาน)" /></div>
              <div className="form-group-mobile"><label className="form-label">รายละเอียดเพิ่มเติม / หมายเหตุ</label><textarea className="form-textarea" rows={2} placeholder="ระบุเหตุผลในการยื่นใบลาแทนพนักงาน..." /></div>
            </div>

            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-approver-list')}>ยกเลิก</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('อนุมัติยื่นใบลาแทนพนักงานเรียบร้อยแล้ว'); goToScreen('screen-approver-list') }}>บันทึกและอนุมัติยื่นเรื่อง</button>
            </div>
          </section>


          {/* SCREEN: CREATE LEAVE (MATCHING PROTOTYPE IMAGES 1 & 2) */}
          <section className={`screen-view${screen === 'screen-create-leave' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-home')}><ChevronLeft size={14} /> หน้าแรก</button>
              <span className="sep">/</span>
              <span className="current">ทำรายการลา</span>
            </div>

            <div className="section-title-card alert-orange">
              <FilePlus size={22} />
              <div>
                <h3>เรียน ผู้อนุมัติ</h3>
                <p>ระบบบริหารจัดการทรัพยากรองค์กร · รายละเอียดคำขอและระเบียบการลา</p>
              </div>
            </div>

            {/* Collapsible 2-Column Info Grid */}
            <div className="proto-form-grid">
              {/* Left Column: Applicant & Approvers */}
              <div className="proto-col-left">
                {/* Collapsible Card 1: ผู้ขอลา */}
                <div className="proto-detail-card margin-bottom-sm">
                  <div className="proto-card-header-toggle" onClick={() => setApplicantCollapsed(p => !p)}>
                    <div className="proto-card-title">
                      <User size={16} />
                      <span>รายละเอียดผู้ขอลา</span>
                      {applicantCollapsed && (
                        <span className="applicant-collapsed-tag">
                          ({currentUser.name})
                        </span>
                      )}
                    </div>
                    <ChevronDown size={16} style={{ transform: applicantCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                  </div>
                  <div className={`proto-card-body-collapse${applicantCollapsed ? ' collapsed' : ''}`}>
                    <div className="proto-info-row"><span className="proto-info-label">ผู้ขอลา:</span><span className="proto-info-value">{currentUser.name}</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">รหัสพนักงาน:</span><span className="proto-info-value">{currentUser.empId}</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">ตำแหน่ง:</span><span className="proto-info-value">{currentUser.position}</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">ส่วนงาน:</span><span className="proto-info-value">{currentUser.department}</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">e-mail:</span><span className="proto-info-value">{currentUser.email}</span></div>
                  </div>
                </div>

                {/* Collapsible Card 2: ผู้พิจารณาอนุมัติ */}
                <div className="proto-detail-card">
                  <div className="proto-card-header-toggle" onClick={() => setApproverCollapsed(p => !p)}>
                    <div className="proto-card-title"><UserCheck size={16} /> รายละเอียดผู้พิจารณาอนุมัติ</div>
                    <ChevronDown size={16} style={{ transform: approverCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                  </div>

                  <div className={`proto-card-body-collapse${approverCollapsed ? ' collapsed' : ''}`}>
                    {/* Stepper Approval Hierarchy */}
                    <div className="proto-stepper-progress margin-top-xs">
                      <div>
                        <span className="progress-title">เส้นทางการขออนุมัติ (ขั้นบันได)</span>
                        <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>ความคืบหน้า : <b>อนุมัติแล้ว 0 / 3 ขั้น</b></div>
                      </div>
                      <span className="proto-step-tag">กำลังรอ: อนุมัติขั้นที่ 1</span>
                    </div>

                    <div className="proto-stepper">
                      {/* Step 1 */}
                      <div className="proto-step-item active">
                        <div className="proto-step-icon">1</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 1 : ผู้บังคับบัญชาชั้นต้น</span>
                            <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย อนุรักษ์ สายชล')} />
                              <span><b>นาย อนุรักษ์ สายชล</b></span>
                              <span className="proto-approver-dept">Senior QA Manager</span>
                            </div>
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นางสาว วิภาดา ศรีสุข')} />
                              <span><b>นางสาว วิภาดา ศรีสุข</b></span>
                              <span className="proto-approver-dept">Lead QA Engineer</span>
                            </div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="proto-step-item">
                        <div className="proto-step-icon">2</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 2 : ผู้จัดการฝ่าย / ผู้อำนวยการ</span>
                            <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย สุรเชษฐ์ ศรีพลกรัง')} />
                              <span><b>นาย สุรเชษฐ์ ศรีพลกรัง</b></span>
                              <span className="proto-approver-dept">ผู้อำนวยการฝ่าย IT (ชจญ.ผ.)</span>
                            </div>
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นางสาว พิมพ์แข ชัยชนะ')} />
                              <span><b>นางสาว พิมพ์แข ชัยชนะ</b></span>
                              <span className="proto-approver-dept">ผู้จัดการฝ่าย HR</span>
                            </div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="proto-step-item">
                        <div className="proto-step-icon">3</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 3 : ผู้บริหารสูงสุด (ขั้นสูงสุด)</span>
                            <span className="proto-step-tag">อนุมัติโดยทุกคนสะสมได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย เมธี เดชะ')} />
                              <span><b>นาย เมธี เดชะ</b></span>
                              <span className="proto-approver-dept">ผู้อำนวยการสายงาน HR & Ops</span>
                            </div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Regulations Accordion */}
              <div className="proto-col-right">
                <div className="proto-detail-card" style={{ height: '100%' }}>
                  <div className="proto-card-header-toggle" onClick={() => setRulesCollapsed(p => !p)}>
                    <div className="proto-card-title"><BookOpen size={16} /> รายละเอียดระเบียบการลา</div>
                    <ChevronDown size={16} style={{ transform: rulesCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                  </div>
                  <div className={`proto-card-body-collapse${rulesCollapsed ? ' collapsed' : ''}`}>
                    <div className="proto-rule-box">
                      <p><strong>ลาพักร้อน (Annual leave) :</strong></p>
                      <p><strong>จำนวนสิทธิ์ประจำปี</strong></p>
                      <p><span className="proto-rule-mark">-</span> 6 - 12 วันทำการ / ปี</p>
                      <p style={{ marginTop: '8px' }}><strong>เงื่อนไขสิทธิ์ตามอายุงาน</strong></p>
                      <p><span className="proto-rule-mark">--</span> อายุงาน 0 - 2 ปี = 6 วันทำการ</p>
                      <p><span className="proto-rule-mark">--</span> อายุงาน 2 ปีขึ้นไป = 8 วันทำการ</p>
                      <p><span className="proto-rule-mark">--</span> อายุงาน 3 ปีขึ้นไป = 10 วันทำการ</p>
                      <p><span className="proto-rule-mark">--</span> อายุงาน 4 ปีขึ้นไป = 12 วันทำการ</p>
                      <p style={{ marginTop: '8px' }}><strong>ข้อกำหนดเพิ่มเติม</strong></p>
                      <p><span className="proto-rule-mark">*</span> ต้องยื่นคำขอล่วงหน้าอย่างน้อย 7 วันทำการ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UNIFIED CARD: LEAVE TYPE & MODERN 31-DAY CALENDAR GRID */}
            <div className="modern-unified-card">
              <div className="proto-card-title margin-bottom-sm"><CalendarIcon size={16} /> ประเภทการลาและปฏิทินเลือกวัน</div>
              <div className="form-row-2">
                <div className="form-group-mobile">
                  <label className="form-label required">ประเภทการลา</label>
                  <select className="form-select" value={leaveType} onChange={e => { setLeaveType(e.target.value); showToast(`เลือกประเภทการลา: ${getLeaveTypeInfo(e.target.value).title}`) }}>
                    <option value="vacation">ลาพักร้อนประจำปี (คงเหลือ {leaveQuotas.vacation.remaining.toFixed(1)} วัน)</option>
                    <option value="personal">ลากิจจำเป็น (คงเหลือ {leaveQuotas.personal.remaining.toFixed(1)} วัน)</option>
                    <option value="sick">ลาป่วย (คงเหลือ {leaveQuotas.sick.remaining.toFixed(1)} วัน)</option>
                    <option value="other">ลาอื่นๆ (ลาทำหมัน/ลาคลอด/รับราชการทหาร)</option>
                  </select>
                </div>
                <div className="form-group-mobile">
                  <label className="form-label required">รูปแบบปฏิทิน</label>
                  <select className="form-select" value={calendarMode} onChange={e => { const v = e.target.value as 'specific' | 'range'; setCalendarMode(v); showToast(v === 'specific' ? 'รูปแบบปฏิทิน: ระบุวัน (เลือกรายวันจากปฏิทิน)' : 'รูปแบบปฏิทิน: กำหนดช่วงวัน (เริ่มต้น - สิ้นสุด)') }}>
                    <option value="specific">ระบุวันแบบเลือกรายวัน (เต็มวัน / ครึ่งวัน)</option>
                    <option value="range">กำหนดช่วงวันต่อเนื่อง (เริ่มต้น - สิ้นสุด)</option>
                  </select>
                </div>
              </div>

              {/* SPECIFIC MODE: MODERN EASY-TO-USE 31-DAY MONTH CALENDAR */}
              {calendarMode === 'specific' && (
                <div className="margin-top-md">
                  <div className="modern-cal-header-bar">
                    <div className="cal-month-title">
                      <b>สิงหาคม 2569</b> <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 'normal' }}>(แสดงครบทั้ง 31 วัน)</span>
                    </div>
                    <div className="modern-cal-legend">
                      <span className="legend-chip full"><span className="dot orange" /> เต็มวัน (08:30-17:30)</span>
                      <span className="legend-chip morning"><span className="dot green" /> ครึ่งเช้า (08:30-12:00)</span>
                      <span className="legend-chip afternoon"><span className="dot purple" /> ครึ่งบ่าย (13:00-17:30)</span>
                    </div>
                  </div>

                  {/* 7-Column Weekday Header */}
                  <div className="proto-weekday-bar">
                    <div className="proto-weekday-cell weekend">อาทิตย์</div>
                    <div className="proto-weekday-cell">จันทร์</div>
                    <div className="proto-weekday-cell">อังคาร</div>
                    <div className="proto-weekday-cell">พุธ</div>
                    <div className="proto-weekday-cell">พฤหัสบดี</div>
                    <div className="proto-weekday-cell">ศุกร์</div>
                    <div className="proto-weekday-cell weekend">เสาร์</div>
                  </div>

                  {/* Full 31 Days Grid (August 2569 starts on Saturday=day 1) */}
                  <div className="modern-full-month-grid">
                    {/* Padding cells for Sun-Fri before Saturday Aug 1 */}
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">26</span></div>
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">27</span></div>
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">28</span></div>
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">29</span></div>
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">30</span></div>
                    <div className="modern-cal-day-cell muted"><span className="modern-cell-num">31</span></div>

                    {/* Days 1 to 31 */}
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(d => {
                      // Aug 1 2569 is Saturday (col index 6)
                      const colIndex = (d + 5) % 7; // 0=Sun, 6=Sat
                      const isWeekend = colIndex === 0 || colIndex === 6;
                      const currentSel = protoSelections[d];

                      let cellClass = 'modern-cal-day-cell';
                      if (isWeekend) cellClass += ' weekend';
                      if (currentSel === 'full') cellClass += ' selected-full';
                      if (currentSel === 'first_half') cellClass += ' selected-morning';
                      if (currentSel === 'second_half') cellClass += ' selected-afternoon';

                      return (
                        <div key={d} className={cellClass}>
                          <div className="modern-cell-top">
                            <span className="modern-cell-num">{d}</span>
                            {!isWeekend && <span className="modern-cell-hours">08:30-17:30</span>}
                          </div>

                          {!isWeekend && (
                            <div className="modern-pill-actions">
                              <button
                                className={`modern-pill-btn${currentSel === 'full' ? ' active full' : ''}`}
                                onClick={() => toggleProtoDate(d, 'full')}
                              >
                                เต็มวัน
                              </button>
                              <button
                                className={`modern-pill-btn${currentSel === 'first_half' ? ' active morning' : ''}`}
                                onClick={() => toggleProtoDate(d, 'first_half')}
                              >
                                ครึ่งเช้า
                              </button>
                              <button
                                className={`modern-pill-btn${currentSel === 'second_half' ? ' active afternoon' : ''}`}
                                onClick={() => toggleProtoDate(d, 'second_half')}
                              >
                                ครึ่งบ่าย
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* RANGE MODE: DATE RANGE TABLE */}
              {calendarMode === 'range' && (
                <div className="margin-top-md">
                  <div className="proto-range-grid">
                    <div className="proto-range-left">
                      <table className="proto-range-table">
                        <thead>
                          <tr>
                            <th>ตั้งแต่วันที่</th>
                            <th>จำนวนวันทำการ</th>
                            <th>จนถึงวันที่</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="date" className="form-input" defaultValue="2026-08-18" />
                            </td>
                            <td>
                              <div style={{ display: 'flex', gap: '6px' }}>
                                <input type="number" className="form-input" style={{ width: '70px' }} defaultValue="1" min="0.5" step="0.5" />
                                <button className="btn-action-submit orange" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={() => showToast('คำนวณวันสิ้นสุดเรียบร้อยแล้ว')}>คำนวณ</button>
                              </div>
                            </td>
                            <td>
                              <input type="text" className="form-input" style={{ background: '#F9FAFB' }} readOnly placeholder="18/08/2569" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="proto-range-right">
                      <ol className="proto-instructions-list">
                        <li>เลือกวันที่เริ่มต้น ในช่องตั้งแต่วันที่</li>
                        <li>ใส่จำนวนวันที่ต้องการลา ในช่องจำนวนวันทำการ</li>
                        <li>กดปุ่ม คำนวณ ระบบจะคำนวณวันสิ้นสุดให้อัตโนมัติ</li>
                      </ol>
                    </div>
                  </div>

                  <div className="proto-range-warning">
                    **หมายเหตุ: การขออนุมัติในรูปแบบปฏิทินแบบกำหนดช่วงวัน (เริ่มต้น - สิ้นสุด) วันที่เลือกจะเป็นการลาเต็มวันเท่านั้น และจะไม่สามารถแก้ไขวันลาให้เป็นแบบครึ่งวันได้ในภายหลัง
                  </div>
                </div>
              )}
            </div>

            {/* Summary count */}
            <div className="ui-card margin-top-md" style={{ background: '#FFF9F2', border: '1px solid #FFE0B2' }}>
              <span className="q-title" style={{ fontSize: '14px', color: 'var(--color-primary-brand)' }}>
                ขออนุญาต <b>{getLeaveTypeInfo(leaveType).title}</b> : จำนวน <b>{calculateTotalDays(protoSelections).toFixed(1)}</b> วัน
              </span>
            </div>

            {/* Urgent & Reason Card */}
            <div className="ui-card margin-top-md">
              <div className="form-group-mobile"><label className="form-label">กรณีเร่งด่วนติดต่อ</label><input type="text" className="form-input" defaultValue="Mobile-1 : 0893005877" /></div>
              <div className="form-group-mobile"><label className="form-label">รายละเอียดเพิ่มเติม / เหตุผลในการลา</label><textarea className="form-textarea" rows={2} placeholder="ระบุรายละเอียดการลา..." /></div>
            </div>

            {/* File Attachment Section */}
            <div className="ui-card margin-top-md">
              <div className="proto-card-header-toggle" style={{ marginBottom: '12px' }}>
                <div className="proto-card-title"><Paperclip size={16} /> เอกสารแนบ</div>
                {(leaveType === 'sick' || leaveType === 'other') && (
                  <span style={{ fontSize: '11px', color: '#DC2626', fontWeight: 600, background: '#FEF2F2', padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>* จำเป็นสำหรับ{leaveType === 'sick' ? 'ลาป่วย (ใบรับรองแพทย์)' : 'ลาประเภทนี้'}</span>
                )}
              </div>
              <p style={{ fontSize: '12px', color: '#6B7280', margin: '0 0 12px 0' }}>
                แนบเอกสารประกอบการลา เช่น ใบรับรองแพทย์, หนังสือรับรอง หรือเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png ขนาดไม่เกิน 5MB)
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                multiple
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />

              {attachedFiles.length > 0 && (
                <div className="file-attach-table-wrap" style={{ marginBottom: '12px' }}>
                  <table className="proto-table" style={{ width: '100%' }}>
                    <thead>
                      <tr>
                        <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ลำดับ</th>
                        <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ชื่อไฟล์</th>
                        <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ขนาด</th>
                        <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>จัดการ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {attachedFiles.map((f, i) => (
                        <tr key={i}>
                          <td style={{ textAlign: 'center' }}>{i + 1}</td>
                          <td><Paperclip size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{f.name}</td>
                          <td style={{ textAlign: 'center', color: '#6B7280', fontSize: '12px' }}>{f.size}</td>
                          <td style={{ textAlign: 'center' }}>
                            <button className="btn-text-link" style={{ color: '#DC2626', fontSize: '12px' }} onClick={() => removeFile(i)}>
                              <Trash2 size={12} style={{ marginRight: '2px', verticalAlign: 'middle' }} /> ลบ
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <button
                className="btn-action-secondary"
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', border: '1px dashed #D1D5DB', borderRadius: 'var(--radius-8)', padding: '10px 16px', width: '100%', justifyContent: 'center', background: '#FAFAFA' }}
                onClick={handleFileAttach}
              >
                <Upload size={16} /> เลือกไฟล์แนบเอกสาร
              </button>
            </div>

            {/* Action Footer matching Prototype Images */}
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-home')}>ยกเลิก</button>
              <button className="btn-action-submit orange" onClick={() => goToScreen('screen-confirm-leave')}>ส่งใบลา</button>
            </div>
          </section>


          {/* SCREEN: CONFIRM LEAVE */}
          <section className={`screen-view${screen === 'screen-confirm-leave' ? ' active' : ''}`}>
            <div className="proto-breadcrumb">
              <span className="bc-link" onClick={() => goToScreen('screen-home')}>หน้าแรก</span>
              <span className="bc-sep">/</span>
              <span className="bc-link" onClick={() => goToScreen('screen-create-leave')}>ทำรายการลา</span>
              <span className="bc-sep">/</span>
              <span className="bc-current">ตรวจสอบและยืนยันคำขอลา</span>
            </div>

            <div className="section-title-card alert-green">
              <CheckCircle2 size={22} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', color: '#1e2939' }}>ตรวจสอบและยืนยันคำขอลา</div>
                <div style={{ fontSize: '13px', color: '#6a7282', marginTop: '2px' }}>ระบบบริหารจัดการทรัพยากรองค์กร · ตรวจสอบรายละเอียดและขั้นตอนอนุมัติก่อนยืนยันการส่งคำขอ</div>
              </div>
            </div>

            <div className="proto-detail-card margin-top-md">
              {/* Highlight Banner */}
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 'var(--radius-8)', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>ประเภทการลาที่ขอ</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#059669', marginTop: '2px' }}>
                    {getLeaveTypeInfo(leaveType).title}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280' }}>จำนวนวันลารวม</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginTop: '2px' }}>
                    {calculateTotalDays(protoSelections).toFixed(1)} วันทำการ
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#059669', background: '#ECFDF5', padding: '6px 12px', borderRadius: 'var(--radius-pill)', border: '1px solid #A7F3D0', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} /> พร้อมส่งยืนยันคำขอ
                  </span>
                </div>
              </div>

              <div className="proto-form-grid margin-top-md">
                {/* Left Column: ผู้ขอลา & รายละเอียดวันลา */}
                <div className="proto-col-left">
                  {/* Card 1: ข้อมูลผู้ขอลา */}
                  <div className="proto-detail-card margin-bottom-sm">
                    <div className="proto-card-header-toggle">
                      <div className="proto-card-title"><User size={16} /> ข้อมูลผู้ขอลา</div>
                    </div>
                    <div className="proto-card-body-collapse">
                      <div className="proto-info-row"><span className="proto-info-label">ผู้ขอลา:</span><span className="proto-info-value"><b>{currentUser.name}</b></span></div>
                      <div className="proto-info-row"><span className="proto-info-label">รหัสพนักงาน:</span><span className="proto-info-value">{currentUser.empId}</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">ตำแหน่ง:</span><span className="proto-info-value">{currentUser.position}</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">ส่วนงาน:</span><span className="proto-info-value">{currentUser.department}</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">e-mail:</span><span className="proto-info-value">{currentUser.email}</span></div>
                    </div>
                  </div>

                  {/* Card 2: สรุปรายละเอียดคำขอลา */}
                  <div className="proto-detail-card">
                    <div className="proto-card-header-toggle">
                      <div className="proto-card-title"><CalendarIcon size={16} /> รายละเอียดคำขอลา</div>
                    </div>
                    <div className="proto-card-body-collapse">
                      <div className="proto-info-row"><span className="proto-info-label">ประเภทการลา:</span><span className="proto-info-value"><b>{getLeaveTypeInfo(leaveType).title}</b></span></div>
                      <div className="proto-info-row"><span className="proto-info-label">สิทธิคงเหลือปัจจุบัน:</span><span className="proto-info-value">{getLeaveTypeInfo(leaveType).quota.toFixed(1)} วัน</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">คงเหลือหลังอนุมัติ:</span><span className="proto-info-value" style={{ color: '#D97706', fontWeight: 700 }}>{Math.max(0, getLeaveTypeInfo(leaveType).quota - calculateTotalDays(protoSelections)).toFixed(1)} วัน</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">รายการวันที่ลา:</span>
                        <span className="proto-info-value">
                          18 สิงหาคม 2569 (เต็มวัน: 08:30 - 17:30 น.)
                        </span>
                      </div>
                      <div className="proto-info-row"><span className="proto-info-label">เหตุผลในการลา:</span><span className="proto-info-value">ลากิจพักผ่อนส่วนตัวกับครอบครัว</span></div>
                      <div className="proto-info-row"><span className="proto-info-label">กรณีเร่งด่วนติดต่อ:</span><span className="proto-info-value">Mobile-1 : 0893005877</span></div>
                    </div>
                  </div>
                </div>

                {/* Right Column: ลำดับผู้พิจารณาอนุมัติ 3 ขั้นบันได */}
                <div className="proto-col-right">
                  <div className="proto-detail-card">
                    <div className="proto-card-header-toggle">
                      <div className="proto-card-title"><UserCheck size={16} /> เส้นทางการขออนุมัติ (3 ขั้นบันได)</div>
                    </div>
                    <div className="proto-card-body-collapse">
                      <div className="proto-stepper">
                        {/* Step 1 */}
                        <div className="proto-step-item active">
                          <div className="proto-step-icon">1</div>
                          <div className="proto-step-box">
                            <div className="proto-step-header">
                              <span className="proto-step-title">ขั้นที่ 1 : ผู้บังคับบัญชาชั้นต้น</span>
                              <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                            </div>
                            <div className="proto-approver-list">
                              <div className="proto-approver-row">
                                <span className={getApproverDotClass('นาย อนุรักษ์ สายชล')} />
                                <span><b>นาย อนุรักษ์ สายชล</b></span>
                                <span className="proto-approver-dept">Senior QA Manager</span>
                              </div>
                              <div className="proto-approver-row">
                                <span className={getApproverDotClass('นางสาว วิภาดา ศรีสุข')} />
                                <span><b>นางสาว วิภาดา ศรีสุข</b></span>
                                <span className="proto-approver-dept">Lead QA Engineer</span>
                              </div>
                            </div>
                            <div className="proto-step-status">อนุมัติ 0 / 1</div>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="proto-step-item">
                          <div className="proto-step-icon">2</div>
                          <div className="proto-step-box">
                            <div className="proto-step-header">
                              <span className="proto-step-title">ขั้นที่ 2 : ผู้จัดการฝ่าย / ผู้อำนวยการ</span>
                              <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                            </div>
                            <div className="proto-approver-list">
                              <div className="proto-approver-row">
                                <span className={getApproverDotClass('นาย สุรเชษฐ์ ศรีพลกรัง')} />
                                <span><b>นาย สุรเชษฐ์ ศรีพลกรัง</b></span>
                                <span className="proto-approver-dept">ผู้อำนวยการฝ่าย IT (ชจญ.ผ.)</span>
                              </div>
                              <div className="proto-approver-row">
                                <span className={getApproverDotClass('นางสาว พิมพ์แข ชัยชนะ')} />
                                <span><b>นางสาว พิมพ์แข ชัยชนะ</b></span>
                                <span className="proto-approver-dept">ผู้จัดการฝ่าย HR</span>
                              </div>
                            </div>
                            <div className="proto-step-status">อนุมัติ 0 / 1</div>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="proto-step-item">
                          <div className="proto-step-icon">3</div>
                          <div className="proto-step-box">
                            <div className="proto-step-header">
                              <span className="proto-step-title">ขั้นที่ 3 : ผู้บริหารสูงสุด (ขั้นสูงสุด)</span>
                              <span className="proto-step-tag">อนุมัติโดยทุกคนสะสมได้</span>
                            </div>
                            <div className="proto-approver-list">
                              <div className="proto-approver-row">
                                <span className={getApproverDotClass('นาย เมธี เดชะ')} />
                                <span><b>นาย เมธี เดชะ</b></span>
                                <span className="proto-approver-dept">ผู้อำนวยการสายงาน HR & Ops</span>
                              </div>
                            </div>
                            <div className="proto-step-status">อนุมัติ 0 / 1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Attached Files Display in Confirm Screen */}
              <div className="proto-detail-card margin-top-md">
                <div className="proto-card-header-toggle">
                  <div className="proto-card-title"><Paperclip size={16} /> เอกสารแนบ</div>
                </div>
                <div className="proto-card-body-collapse">
                  {attachedFiles.length > 0 ? (
                    <table className="proto-table" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ชื่อไฟล์</th>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ขนาด</th>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ดาวน์โหลด</th>
                        </tr>
                      </thead>
                      <tbody>
                        {attachedFiles.map((f, i) => (
                          <tr key={i}>
                            <td><Paperclip size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{f.name}</td>
                            <td style={{ textAlign: 'center', color: '#6B7280', fontSize: '12px' }}>{f.size}</td>
                            <td style={{ textAlign: 'center' }}>
                              <button className="btn-text-link" style={{ color: 'var(--color-primary-brand)', fontSize: '12px' }} onClick={() => showToast('ดาวน์โหลดไฟล์ (Demo)')}>
                                <Download size={12} style={{ marginRight: '2px', verticalAlign: 'middle' }} /> ดาวน์โหลด
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div style={{ textAlign: 'center', color: '#9CA3AF', padding: '16px 0', fontSize: '13px' }}>
                      ไม่พบรายการข้อมูลเอกสารแนบ
                    </div>
                  )}
                </div>
              </div>

              {/* Action Footer for Confirm Screen */}
              <div className="mobile-action-footer margin-top-md">
                <button
                  className="btn-action-cancel"
                  onClick={() => goToScreen('screen-create-leave')}
                >
                  <ChevronLeft size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> ย้อนกลับไปแก้ไข
                </button>
                <button
                  className="btn-action-submit green"
                  onClick={() => {
                    const newDocId = generateDocId()
                    setCurrentSubmittedDocId(newDocId)
                    const count = calculateTotalDays(protoSelections)
                    setLeaveQuotas(prev => {
                      const t = (leaveType === 'personal' || leaveType === 'sick' ? leaveType : 'vacation') as 'vacation' | 'personal' | 'sick'
                      const cur = prev[t]
                      return {
                        ...prev,
                        [t]: {
                          ...cur,
                          used: cur.used + count,
                          remaining: Math.max(0, cur.remaining - count),
                        }
                      }
                    })
                    const datesStr = protoSelections[18] === 'first_half' ? '18 ส.ค. 2569 (ครึ่งเช้า)' : protoSelections[18] === 'second_half' ? '18 ส.ค. 2569 (ครึ่งบ่าย)' : '18 ส.ค. 2569 (เต็มวัน)'
                    const newCard = {
                      id: newDocId,
                      applicantName: currentUser.name,
                      applicantCode: currentUser.empId,
                      applicantDept: 'QA Team',
                      typeTag: getLeaveTypeInfo(leaveType).title,
                      leaveType: leaveType as any,
                      typeClass: leaveType === 'personal' ? 'purple' : leaveType === 'sick' ? 'green' : '',
                      dates: datesStr,
                      days: `${count.toFixed(1)} วัน`,
                      daysNum: count,
                      daysCount: count,
                      status: 'pending' as const,
                      submitted: '7 ส.ค. 2569 - 16:18 น.',
                      updated: '7 ส.ค. 2569',
                      canEdit: true,
                      canCancel: true,
                    }
                    setLeaveCards(prev => [newCard, ...prev])
                    showToast(`ยื่นคำขอลาเรียบร้อยแล้ว เลขที่เอกสาร ${newDocId}`)
                    goToScreen('screen-leave-summary')
                  }}
                >
                  <CheckCircle2 size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> ยืนยันการส่งคำขอลา
                </button>
              </div>
            </div>
          </section>


          {/* SCREEN: LEAVE SUMMARY (after confirmation) */}
          <section className={`screen-view${screen === 'screen-leave-summary' ? ' active' : ''}`}>
            <div className="proto-breadcrumb">
              <span className="bc-link" onClick={() => goToScreen('screen-leave-list')}>รายการลา</span>
              <span className="bc-sep">/</span>
              <span className="bc-current">สรุปผลการลา</span>
            </div>

            {/* Notification Banners */}
            <div className="summary-banner-success">
              <CheckCircle2 size={18} />
              <span>หมายเหตุ : ทำการบันทึกการลาเรียบร้อยแล้ว</span>
            </div>
            <div className="summary-banner-warning">
              <AlertTriangle size={18} />
              <span>คำเตือน : หากต้องการเปลี่ยนแปลง หรือยกเลิกทำรายการ กรุณาแก้ไขภายใน 7 วัน หรือตามอายุสมาชิกที่กำหนด</span>
            </div>

            <div className="proto-form-grid margin-top-md">
              {/* Left Column: รายละเอียดการลา */}
              <div className="proto-col-left">
                <div className="proto-detail-card margin-bottom-sm">
                  <div className="proto-card-header-toggle">
                    <div className="proto-card-title"><FileText size={16} /> รายละเอียดการลา</div>
                  </div>
                  <div className="proto-card-body-collapse">
                    <div className="proto-info-row"><span className="proto-info-label">เลขที่เอกสาร:</span><span className="proto-info-value"><b>{currentSubmittedDocId}</b></span></div>
                    <div className="proto-info-row"><span className="proto-info-label">ประเภทการลา:</span><span className="proto-info-value">{getLeaveTypeInfo(leaveType).title}</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">ผู้ลา:</span><span className="proto-info-value"><b>{currentUser.name}</b></span></div>
                    <div className="proto-info-row"><span className="proto-info-label">วันที่เริ่ม-สิ้นสุด:</span><span className="proto-info-value">18 ส.ค. 2569 - 18 ส.ค. 2569</span></div>
                    <div className="proto-info-row"><span className="proto-info-label">จำนวนวัน:</span><span className="proto-info-value"><b>{calculateTotalDays(protoSelections).toFixed(1)} วัน</b></span></div>
                  </div>
                </div>

                {/* รายละเอียดวันที่ */}
                <div className="proto-detail-card margin-bottom-sm">
                  <div className="proto-card-header-toggle">
                    <div className="proto-card-title"><CalendarIcon size={16} /> รายละเอียดวันที่</div>
                  </div>
                  <div className="proto-card-body-collapse">
                    <table className="proto-table" style={{ width: '100%' }}>
                      <thead>
                        <tr>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ลำดับ</th>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>วันที่ลา</th>
                          <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ช่วงการลา</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'center' }}>1</td>
                          <td style={{ textAlign: 'center' }}>18 ส.ค. 2569</td>
                          <td style={{ textAlign: 'center' }}>เต็มวัน (08:30 - 17:30 น.)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* รายละเอียดการลา (เหตุผล) */}
                <div className="proto-detail-card margin-bottom-sm">
                  <div className="proto-card-header-toggle">
                    <div className="proto-card-title"><BookOpen size={16} /> รายละเอียดการลา</div>
                  </div>
                  <div className="proto-card-body-collapse">
                    <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 'var(--radius-8)', padding: '12px', minHeight: '60px', fontSize: '13px', color: '#374151' }}>
                      ลากิจพักผ่อนส่วนตัวกับครอบครัว
                    </div>
                  </div>
                </div>

                {/* เอกสารแนบ */}
                <div className="proto-detail-card">
                  <div className="proto-card-header-toggle">
                    <div className="proto-card-title"><Paperclip size={16} /> เอกสารแนบ</div>
                  </div>
                  <div className="proto-card-body-collapse">
                    {attachedFiles.length > 0 ? (
                      <table className="proto-table" style={{ width: '100%' }}>
                        <thead>
                          <tr>
                            <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ชื่อไฟล์</th>
                            <th style={{ background: 'var(--color-primary-brand)', color: '#fff' }}>ดาวน์โหลด</th>
                          </tr>
                        </thead>
                        <tbody>
                          {attachedFiles.map((f, i) => (
                            <tr key={i}>
                              <td><Paperclip size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />{f.name}</td>
                              <td style={{ textAlign: 'center' }}>
                                <button className="btn-text-link" style={{ color: 'var(--color-primary-brand)', fontSize: '12px' }} onClick={() => showToast('ดาวน์โหลดไฟล์ (Demo)')}>
                                  <Download size={12} style={{ marginRight: '2px', verticalAlign: 'middle' }} /> ดาวน์โหลด
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div style={{ textAlign: 'center', color: '#9CA3AF', padding: '16px 0', fontSize: '13px' }}>
                        ไม่พบรายการข้อมูล
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: เส้นทางการอนุมัติ — ตรงกับ screen-create-leave / screen-confirm-leave */}
              <div className="proto-col-right">
                <div className="proto-detail-card">
                  <div className="proto-card-header-toggle">
                    <div className="proto-card-title"><UserCheck size={16} /> เส้นทางการขออนุมัติ (3 ขั้นบันได)</div>
                  </div>
                  <div className="proto-card-body-collapse">
                    {/* Status bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                      <span style={{ fontSize: '13px', color: '#6B7280' }}>ความคืบหน้า</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#D97706', background: '#FEF3C7', padding: '2px 8px', borderRadius: 'var(--radius-pill)' }}>อนุมัติแล้ว 0 / 3 ขั้น</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '12px' }}>
                      กำลังรอ: <b style={{ color: '#111827' }}>นาย อนุรักษ์ สายชล</b> (ขั้นที่ 1)
                    </div>

                    <div className="proto-stepper">
                      {/* Step 1 — ตรงกับ screen-create-leave */}
                      <div className="proto-step-item active">
                        <div className="proto-step-icon">1</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 1 : ผู้บังคับบัญชาชั้นต้น</span>
                            <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย อนุรักษ์ สายชล')} />
                              <span><b>นาย อนุรักษ์ สายชล</b></span>
                              <span className="proto-approver-dept">Senior QA Manager</span>
                            </div>
                            <div className="proto-approver-row" style={{ fontSize: '11px', color: '#9CA3AF', paddingLeft: '20px' }}>กำลังรอการพิจารณา</div>
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นางสาว วิภาดา ศรีสุข')} />
                              <span><b>นางสาว วิภาดา ศรีสุข</b></span>
                              <span className="proto-approver-dept">Lead QA Engineer</span>
                            </div>
                            <div className="proto-approver-row" style={{ fontSize: '11px', color: '#9CA3AF', paddingLeft: '20px' }}>กำลังรอการพิจารณา</div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>

                      {/* Step 2 — ตรงกับ screen-create-leave */}
                      <div className="proto-step-item">
                        <div className="proto-step-icon">2</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 2 : ผู้จัดการฝ่าย / ผู้อำนวยการ</span>
                            <span className="proto-step-tag">อนุมัติโดยใครก็ได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย สุรเชษฐ์ ศรีพลกรัง')} />
                              <span><b>นาย สุรเชษฐ์ ศรีพลกรัง</b></span>
                              <span className="proto-approver-dept">ผู้อำนวยการฝ่าย IT (ชจญ.ผ.)</span>
                            </div>
                            <div className="proto-approver-row" style={{ fontSize: '11px', color: '#9CA3AF', paddingLeft: '20px' }}>ยังไม่ถึงลำดับ</div>
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นางสาว พิมพ์แข ชัยชนะ')} />
                              <span><b>นางสาว พิมพ์แข ชัยชนะ</b></span>
                              <span className="proto-approver-dept">ผู้จัดการฝ่าย HR</span>
                            </div>
                            <div className="proto-approver-row" style={{ fontSize: '11px', color: '#9CA3AF', paddingLeft: '20px' }}>ยังไม่ถึงลำดับ</div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>

                      {/* Step 3 — ตรงกับ screen-create-leave */}
                      <div className="proto-step-item">
                        <div className="proto-step-icon">3</div>
                        <div className="proto-step-box">
                          <div className="proto-step-header">
                            <span className="proto-step-title">ขั้นที่ 3 : ผู้บริหารสูงสุด (ขั้นสูงสุด)</span>
                            <span className="proto-step-tag">อนุมัติโดยทุกคนสะสมได้</span>
                          </div>
                          <div className="proto-approver-list">
                            <div className="proto-approver-row">
                              <span className={getApproverDotClass('นาย เมธี เดชะ')} />
                              <span><b>นาย เมธี เดชะ</b></span>
                              <span className="proto-approver-dept">ผู้อำนวยการสายงาน HR & Ops</span>
                            </div>
                            <div className="proto-approver-row" style={{ fontSize: '11px', color: '#9CA3AF', paddingLeft: '20px' }}>ยังไม่ถึงลำดับ</div>
                          </div>
                          <div className="proto-step-status">อนุมัติ 0 / 1</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '12px', textAlign: 'center' }}>
                      ต้องอนุมัติทีละลำดับ ห้ามข้ามขั้น
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="mobile-action-footer margin-top-md">
              <button className="btn-action-submit orange" onClick={() => goToScreen('screen-leave-list')}>
                <FileText size={16} style={{ marginRight: '4px', verticalAlign: 'middle' }} /> ไปที่รายการลา
              </button>
            </div>
          </section>


          {/* SCREEN: LEAVE LIST */}
          <section className={`screen-view${screen === 'screen-leave-list' ? ' active' : ''}`}>

            {/* Page header */}
            <div className="ll-page-header">
              <div className="ll-header-text">
                <h1 className="page-title">รายการลาของฉัน</h1>
                <p className="page-subtitle">ปีงบประมาณ 2569 · ทั้งหมด {leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ')).length} รายการ</p>
              </div>
            </div>

            {/* Summary strip */}
            <div className="ll-summary-strip">
              <div className="ll-sum-item pending">
                <span className="ll-sum-num">{leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'pending').length}</span>
                <span className="ll-sum-lbl">รออนุมัติ</span>
              </div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item approved">
                <span className="ll-sum-num">{leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'approved').length}</span>
                <span className="ll-sum-lbl">อนุมัติแล้ว</span>
              </div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item rejected">
                <span className="ll-sum-num">{leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'rejected').length}</span>
                <span className="ll-sum-lbl">ไม่อนุมัติ</span>
              </div>
            </div>

            {/* Filter chips */}
            <div className="status-chips-scroll">
              {[
                { key: 'all', label: 'ทั้งหมด', count: String(leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ')).length) },
                { key: 'pending', label: 'รออนุมัติ', count: String(leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'pending').length), cls: 'pending' },
                { key: 'approved', label: 'อนุมัติแล้ว', count: String(leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'approved').length), cls: 'approved' },
                { key: 'rejected', label: 'ไม่อนุมัติ', count: String(leaveCards.filter(c => c.applicantName.includes('ณัฐวุฒิ') && c.status === 'rejected').length), cls: 'rejected' },
              ].map(c => (
                <button key={c.key} className={`chip ${c.cls || ''} ${leaveFilter === c.key ? 'active' : ''}`} onClick={() => { setLeaveFilter(c.key as LeaveFilter); showToast(`สถานะ: ${c.label}`) }}>
                  {c.label} <span className="chip-count">{c.count}</span>
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="ll-cards-list">
              {filteredCards.map(card => (
                <article key={card.id} className={`ll-card ll-card--${card.status}`}>

                  {/* Top Header Row: Doc ID + Leave Type Badge + Status Pill */}
                  <div className="ll-card-top">
                    <div className="ll-card-doc">
                      <span className="ll-doc-icon">
                        {card.status === 'pending' && <Clock size={14} />}
                        {card.status === 'approved' && <CheckCircle2 size={14} />}
                        {card.status === 'rejected' && <XCircle size={14} />}
                      </span>
                      <span className="ll-doc-number">{card.id}</span>
                      <span className={`ll-type-badge ${card.typeClass || 'orange'}`}>{card.typeTag}</span>
                    </div>
                    <span className={`ll-status-pill ll-status-pill--${card.status}`}>
                      {card.status === 'pending' && 'รออนุมัติ'}
                      {card.status === 'approved' && 'อนุมัติแล้ว'}
                      {card.status === 'rejected' && 'ไม่อนุมัติ'}
                    </span>
                  </div>

                  {/* Body Content Compact */}
                  <div className="ll-card-body-compact">
                    <div className="ll-card-main-info">
                      <div className="ll-date-info">
                        <CalendarIcon size={14} className="ll-icon-muted" />
                        <span className="ll-date-main">{card.dates}</span>
                        <span className="ll-days-badge">{card.days}</span>
                      </div>
                      <div className="ll-meta-sub">
                        <Clock4 size={12} className="ll-meta-icon" />
                        <span>ยื่นเมื่อ {card.submitted}</span>
                        {card.status === 'approved' && <span className="ll-meta-status approved">✓ {card.updated}</span>}
                        {card.status === 'rejected' && <span className="ll-meta-status rejected">✗ {card.updated}</span>}
                      </div>
                    </div>

                    {card.status === 'rejected' && (
                      <div className="ll-reject-reason">
                        <AlertCircle size={13} />
                        <span>"เนื่องจากอยู่ในช่วงเร่งส่งมอบงานโปรเจกต์ QA Testing ประจำไตรมาส 3"</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="ll-card-actions">
                    {card.canCancel && (
                      <button className="ll-btn-cancel" onClick={() => goToScreen('screen-cancel-leave')}>
                        <XCircle size={13} /> ยกเลิก
                      </button>
                    )}
                    {card.canEdit && (
                      <button className="ll-btn-edit" onClick={() => goToScreen('screen-edit-leave')}>
                        <Edit3 size={13} /> แก้ไข
                      </button>
                    )}
                    {card.status === 'approved' && (
                      <button className="ll-btn-revoke" onClick={() => showToast('ยื่นเรื่องขอยกเลิกวันลาที่อนุมัติแล้วเรียบร้อย')}>
                        <RotateCcw size={13} /> ขอยกเลิก
                      </button>
                    )}
                    <button className="ll-btn-view" onClick={() => goToScreen(card.status === 'rejected' ? 'screen-details-rejected' : (card.status === 'pending' ? 'screen-leave-summary' : 'screen-details-approved'))}>
                      <Search size={13} /> ดูรายละเอียด
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>


          {/* SCREEN: DETAILS REJECTED */}
          <section className={`screen-view${screen === 'screen-details-rejected' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-leave-list')}><ChevronLeft size={14} /> รายการลา</button>
              <span className="sep">/</span><span className="current">รายละเอียดคำขอที่ไม่อนุมัติ</span>
            </div>
            <div className="section-title-card alert-red">
              <XCircle size={22} />
              <div>
                <h3>คำขอลานี้ไม่ผ่านการอนุมัติ</h3>
                <p>พิจารณาโดย: <b>นาย อนุรักษ์ สายชล (Senior QA Manager)</b></p>
              </div>
            </div>
            <div className="ui-card">
              <div className="card-title-bar">
                <h3 className="card-h3"><FileText size={16} /> เอกสารเลขที่ LV-202607-0075</h3>
                <span className="status-badge rejected">ไม่อนุมัติ</span>
              </div>
              <div className="details-grid-compact">
                <div className="detail-cell"><span className="lbl">ประเภทการลา</span><span className="val font-bold">0200 - ลากิจจำเป็น</span></div>
                <div className="detail-cell"><span className="lbl">จำนวนวันลา</span><span className="val font-bold red-txt">1.0 วันทำการ</span></div>
                <div className="detail-cell"><span className="lbl">วันที่เริ่มต้น</span><span className="val">20 กรกฎาคม 2569</span></div>
                <div className="detail-cell"><span className="lbl">วันที่สิ้นสุด</span><span className="val">20 กรกฎาคม 2569</span></div>
                <div className="detail-cell"><span className="lbl">วันที่ยื่นเรื่อง</span><span className="val">18 ก.ค. 2569 - 14:15 น.</span></div>
                <div className="detail-cell"><span className="lbl">ติดต่อเร่งด่วน</span><span className="val font-mono">{currentUser.phone}</span></div>
              </div>
            </div>
            <div className="ui-card border-red">
              <h3 className="card-h3 red-txt"><MessageSquare size={16} /> เหตุผลการไม่อนุมัติจากผู้บังคับบัญชา</h3>
              <div className="rejection-full-detail-box margin-top-sm">
                <p className="rejection-quote font-bold">"เนื่องจากอยู่ในช่วงเร่งส่งมอบงานโปรเจกต์ QA Testing ประจำไตรมาส 3 ขอให้พิจารณาปรับเลื่อนวันลาออกไปก่อน"</p>
                <div className="rejection-meta-info">
                  <div className="user-info-row">
                    <div className="avatar-circle-text red">อน</div>
                    <div><span className="emp-name font-bold">นาย อนุรักษ์ สายชล</span><span className="doc-sub">Senior QA Manager | Software QA & Testing Team</span></div>
                  </div>
                  <span className="date-txt">ดำเนินการเมื่อ: 19 ก.ค. 2569 เวลา 14:30 น.</span>
                </div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><GitCommit size={16} /> ประวัติการพิจารณาคำขอ (Audit Trail 3 ขั้น)</h3>
              <div className="timeline-stepper margin-top-sm">
                <div className="step-item step-done">
                  <div className="step-icon-col"><div className="step-badge check"><Check size={14} /></div><div className="step-line" /></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name">1. ยื่นคำขอสำเร็จ</span><span className="step-time">18 ก.ค. 2569 - 14:15 น.</span></div>
                    <p className="step-desc">พนักงาน {currentUser.name} ยื่นคำขอลาออนไลน์ผ่านระบบ</p>
                  </div>
                </div>
                <div className="step-item step-rejected">
                  <div className="step-icon-col"><div className="step-badge cross"><X size={12} /></div></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name red-txt font-bold">2. ไม่อนุมัติคำขอ (ขั้นที่ 1)</span><span className="step-time">19 ก.ค. 2569 - 14:30 น.</span></div>
                    <p className="step-desc">ผู้บังคับบัญชาขั้นที่ 1 (นาย อนุรักษ์ สายชล) ปฏิเสธคำขออนุมัติพร้อมระบุเหตุผล</p>
                  </div>
                </div>
                <div className="step-item">
                  <div className="step-icon-col"><div className="step-badge" style={{ background: '#e5e7eb', color: '#9ca3af' }}>3</div></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name" style={{ color: '#9ca3af' }}>3. ขั้นที่ 2 & 3 (ยุติคำขอ)</span></div>
                    <p className="step-desc" style={{ color: '#9ca3af' }}>ขั้นที่ 2 (สุรเชษฐ์/พิมพ์แข) และ ขั้นที่ 3 (เมธี) ยุติการพิจารณาเนื่องจากคำขอถูกปฏิเสธ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-leave-list')}>ย้อนกลับ</button>
              <button className="btn-action-submit orange" onClick={() => goToScreen('screen-create-leave')}><RotateCcw size={14} /> ยื่นคำขอใหม่</button>
            </div>
          </section>


          {/* SCREEN: CANCEL LEAVE */}
          <section className={`screen-view${screen === 'screen-cancel-leave' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-leave-list')}><ChevronLeft size={14} /> รายการลา</button>
              <span className="sep">/</span><span className="current">ยกเลิกคำขอลา</span>
            </div>
            <div className="section-title-card alert-orange">
              <AlertTriangle size={22} />
              <div>
                <h3>ยกเลิกคำขอลา</h3>
                <p>ผู้พิจารณาอนุมัติ: <b>นาย อนุรักษ์ สายชล (Senior QA Manager)</b></p>
              </div>
            </div>
            <div className="ui-card">
              <div className="card-title-bar">
                <h3 className="card-h3">รายละเอียดคำขอลา</h3>
                <span className="status-badge pending">รออนุมัติ</span>
              </div>
              <div className="details-grid-compact">
                <div className="detail-cell"><span className="lbl">เลขที่เอกสาร</span><span className="val font-mono">LV-202608-0142</span></div>
                <div className="detail-cell"><span className="lbl">ประเภทการลา</span><span className="val">0100 - ลาพักร้อนประจำปี</span></div>
              </div>
            </div>
            <div className="ui-card">
              <label className="form-label required">เหตุผลในการขอยกเลิก</label>
              <textarea className="form-textarea" rows={3} placeholder="ระบุเหตุผลที่ต้องการขอยกเลิกคำขอลา..." />
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-leave-list')}>ย้อนกลับ</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('ยกเลิกคำขอลาเรียบร้อยแล้ว'); goToScreen('screen-leave-list') }}>ยืนยันยกเลิกคำขอ</button>
            </div>
          </section>


          {/* SCREEN: DETAILS APPROVED */}
          <section className={`screen-view${screen === 'screen-details-approved' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-leave-list')}><ChevronLeft size={14} /> รายการลา</button>
              <span className="sep">/</span><span className="current">รายละเอียดคำขอที่อนุมัติแล้ว</span>
            </div>
            <div className="section-title-card alert-green">
              <CheckCircle2 size={22} />
              <div>
                <h3>คำขอลานี้ได้รับการอนุมัติเรียบร้อย</h3>
                <p>ผู้อนุมัติ: <b>นาย อนุรักษ์ สายชล (Senior QA Manager)</b></p>
              </div>
            </div>
            <div className="ui-card">
              <div className="card-title-bar">
                <h3 className="card-h3"><FileText size={16} /> เอกสารเลขที่ LV-202607-0098</h3>
                <span className="status-badge approved">อนุมัติแล้ว</span>
              </div>
              <div className="details-grid-compact">
                <div className="detail-cell"><span className="lbl">ประเภทการลา</span><span className="val font-bold">0100 - ลาพักร้อนประจำปี</span></div>
                <div className="detail-cell"><span className="lbl">จำนวนวันลา</span><span className="val font-bold green-txt">1.0 วันทำการ</span></div>
                <div className="detail-cell"><span className="lbl">วันที่เริ่มต้น</span><span className="val">7 สิงหาคม 2569</span></div>
                <div className="detail-cell"><span className="lbl">วันที่สิ้นสุด</span><span className="val">8 สิงหาคม 2569</span></div>
                <div className="detail-cell"><span className="lbl">วันที่ยื่นเรื่อง</span><span className="val">25 ก.ค. 2569 - 09:30 น.</span></div>
                <div className="detail-cell"><span className="lbl">ติดต่อเร่งด่วน</span><span className="val font-mono">{currentUser.phone}</span></div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3 green-txt"><MessageSquare size={16} /> ความเห็นการอนุมัติจากผู้บังคับบัญชา</h3>
              <div className="approval-full-detail-box margin-top-sm">
                <p className="rejection-quote font-bold">"อนุมัติคำขอลาพักร้อนเรียบร้อยแล้ว ทีม QA มีกำลังคนรองรับงานเทสระบบเพียงพอช่วงดังกล่าว"</p>
                <div className="rejection-meta-info">
                  <div className="user-info-row">
                    <div className="avatar-circle-text green">อน</div>
                    <div><span className="emp-name font-bold">นาย อนุรักษ์ สายชล</span><span className="doc-sub">Senior QA Manager | Software QA & Testing Team</span></div>
                  </div>
                  <span className="date-txt">ดำเนินการเมื่อ: 26 ก.ค. 2569 เวลา 10:15 น.</span>
                </div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><GitCommit size={16} /> ประวัติการพิจารณาคำขอ (Audit Trail 3 ขั้น)</h3>
              <div className="timeline-stepper margin-top-sm">
                <div className="step-item step-done">
                  <div className="step-icon-col"><div className="step-badge check"><Check size={14} /></div><div className="step-line active" /></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name">1. ยื่นคำขอสำเร็จ</span><span className="step-time">25 ก.ค. 2569 - 09:30 น.</span></div>
                    <p className="step-desc">พนักงาน {currentUser.name} ยื่นคำขอลาออนไลน์ผ่านระบบ</p>
                  </div>
                </div>
                <div className="step-item step-done">
                  <div className="step-icon-col"><div className="step-badge check"><Check size={14} /></div><div className="step-line active" /></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name green-txt font-bold">2. ผ่านการอนุมัติขั้นที่ 1 & 2</span><span className="step-time">26 ก.ค. 2569 - 10:15 น.</span></div>
                    <p className="step-desc">ขั้นที่ 1 (นาย อนุรักษ์ สายชล / นางสาว วิภาดา ศรีสุข) และ ขั้นที่ 2 (นาย สุรเชษฐ์ ศรีพลกรัง / นางสาว พิมพ์แข ชัยชนะ) อนุมัติแล้ว</p>
                  </div>
                </div>
                <div className="step-item step-done">
                  <div className="step-icon-col"><div className="step-badge check"><Check size={14} /></div></div>
                  <div className="step-content-box">
                    <div className="step-header"><span className="step-name green-txt font-bold">3. อนุมัติขั้นสุดท้าย (HR / Exec)</span><span className="step-time">26 ก.ค. 2569 - 11:00 น.</span></div>
                    <p className="step-desc">ขั้นที่ 3 (นาย เมธี เดชะ - ผู้อำนวยการสายงาน HR & Ops) อนุมัติคำขอเรียบร้อยสมบูรณ์</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-leave-list')}>ย้อนกลับ</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('ยื่นเรื่องขอยกเลิกวันลาที่อนุมัติแล้วเรียบร้อย'); goToScreen('screen-leave-list') }}><RotateCcw size={14} /> ขอยกเลิกวันลา</button>
            </div>
          </section>


          {/* SCREEN: REPORTS */}
          <section className={`screen-view${screen === 'screen-reports' ? ' active' : ''}`}>
            <div className="screen-header-row">
              <div>
                <h1 className="page-title">รายงานสรุปวันลาประจำปี 2569</h1>
                <p className="page-subtitle">ภาพรวมสิทธิวันลาและการใช้งานประจำปีของพนักงาน</p>
              </div>
            </div>
            <div className="reports-metric-grid">
              <div className="metric-card"><span className="m-title"><PieChart size={14} /> สิทธิใช้แล้วรวม</span><span className="m-number orange-txt">3.5 วัน</span><span className="m-sub">จากสิทธิรวมทั้งหมด 46.0 วัน</span></div>
              <div className="metric-card"><span className="m-title"><CheckCircle2 size={14} /> สิทธิคงเหลือรวม</span><span className="m-number green-txt">42.5 วัน</span><span className="m-sub">พร้อมใช้งานในปี 2569</span></div>
              <div className="metric-card"><span className="m-title"><TrendingUp size={14} /> อัตราการอนุมัติ</span><span className="m-number purple-txt">85.0%</span><span className="m-sub">อนุมัติแล้ว 2 จาก 3 คำขอ</span></div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><BarChart2 size={16} /> รายละเอียดการใช้สิทธิแยกตามประเภท</h3>
              <div className="report-progress-list margin-top-sm">
                {[
                  { name: '0100 - ลาพักร้อนประจำปี', used: '2.0', total: '10.0', pct: '20%', w: '20%', cls: 'orange', rem: '8.0' },
                  { name: '0200 - ลากิจจำเป็น', used: '0.5', total: '6.0', pct: '8%', w: '8%', cls: 'purple', rem: '5.5' },
                  { name: '0300 - ลาป่วย', used: '1.0', total: '30.0', pct: '3%', w: '3%', cls: 'green', rem: '29.0' },
                ].map(r => (
                  <div key={r.name} className="report-prog-item margin-top-sm">
                    <div className="prog-header"><span className="prog-name bold">{r.name}</span><span className="prog-val">ใช้แล้ว {r.used} / {r.total} วัน ({r.pct})</span></div>
                    <div className="quota-progress-bar"><div className={`progress-fill ${r.cls}`} style={{ width: r.w }} /></div>
                    <span className="prog-sub">คงเหลือพร้อมใช้งาน: {r.rem} วันทำการ</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Download size={16} /> ส่งออกรายงานและเอกสาร</h3>
              <p className="caption margin-top-sm">ดาวน์โหลดรายงานสรุปสิทธิวันลาในรูปแบบ PDF หรือ Excel เพื่อใช้แนบเอกสารทางราชการ</p>
              <div className="report-export-btns margin-top-sm">
                <button className="btn-action-cancel" onClick={() => showToast('กำลังส่งออกไฟล์ Excel สรุปวันลา...')}><FileSpreadsheet size={16} /> ส่งออกไฟล์ Excel</button>
                <button className="btn-action-submit orange" onClick={() => showToast('กำลังดาวน์โหลดรายงาน PDF สรุปวันลา 2569...')}><FileText size={16} /> ดาวน์โหลดรายงาน PDF</button>
              </div>
            </div>
          </section>


          {/* SCREEN: TEAM CALENDAR */}
          <section className={`screen-view${screen === 'screen-edit-leave' ? ' active' : ''}`}>
            <div className="screen-header-row">
              <div>
                <h1 className="page-title">ปฏิทินการลาทีม QA & Testing</h1>
                <p className="page-subtitle">ตารางวันหยุดและประวัติการลาของสมาชิกในทีมประจำเดือนสิงหาคม 2569</p>
              </div>
            </div>
            <div className="ui-card">
              <div className="calendar-header-bar">
                <button className="cal-nav-btn"><ChevronLeft size={16} /></button>
                <span className="cal-month-title">สิงหาคม 2569</span>
                <button className="cal-nav-btn"><ChevronRight size={16} /></button>
              </div>
              <div className="calendar-grid">
                <div className="cal-day-name sun">อา</div><div className="cal-day-name">จ</div><div className="cal-day-name">อ</div><div className="cal-day-name">พ</div><div className="cal-day-name">พฤ</div><div className="cal-day-name">ศ</div><div className="cal-day-name sat">ส</div>
                <div className="cal-date muted">27</div><div className="cal-date muted">28</div><div className="cal-date muted">29</div><div className="cal-date muted">30</div><div className="cal-date muted">31</div><div className="cal-date">1</div><div className="cal-date sat">2</div>
                <div className="cal-date sun">3</div><div className="cal-date">4</div><div className="cal-date">5</div><div className="cal-date">6</div><div className="cal-date">7</div><div className="cal-date">8</div><div className="cal-date sat">9</div>
                <div className="cal-date sun">10</div>
                <div className="cal-date event-leave"><span>11</span><span className="dot-event purple" /></div>
                <div className="cal-date event-leave"><span className="font-bold red-txt">12</span><span className="badge-sel red">วันแม่</span></div>
                <div className="cal-date">13</div>
                <div className="cal-date event-leave"><span>14</span><span className="dot-event green" /></div>
                <div className="cal-date">15</div><div className="cal-date sat">16</div>
                <div className="cal-date sun">17</div>
                <div className="cal-date selected-range start end"><span>18</span><span className="badge-sel">ณัฐวุฒิ</span></div>
                <div className="cal-date">19</div><div className="cal-date">20</div><div className="cal-date">21</div><div className="cal-date">22</div><div className="cal-date sat">23</div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Users size={16} /> ตารางวันลาของสมาชิกในทีม</h3>
              <div className="leave-cards-container margin-top-sm">
                <div className="day-item-card">
                  <div><span className="s-date">18 ส.ค. 2569 - นาย ณัฐวุฒิ วิเศษสุวรรณ</span><div className="caption">0100 - ลาพักร้อนประจำปี (เต็มวัน)</div></div>
                  <span className="status-badge pending">รออนุมัติ</span>
                </div>
                <div className="day-item-card">
                  <div><span className="s-date">14 ส.ค. 2569 - นางสาว ปรียานุช วงศ์สว่าง</span><div className="caption">0300 - ลาป่วย (เต็มวัน)</div></div>
                  <span className="status-badge pending">รออนุมัติ</span>
                </div>
                <div className="day-item-card">
                  <div><span className="s-date">11 ส.ค. 2569 - นาย กิตติศักดิ์ พัฒนากุล</span><div className="caption">0200 - ลากิจจำเป็น (ครึ่งบ่าย)</div></div>
                  <span className="status-badge pending">รออนุมัติ</span>
                </div>
                <div className="day-item-card day-item-card--holiday">
                  <div><span className="s-date red-txt font-bold">12 ส.ค. 2569 - วันหยุดบริษัท (วันแม่แห่งชาติ)</span><div className="caption">วันหยุดนักขัตฤกษ์ประจำปี 2569</div></div>
                  <span className="status-badge--holiday">วันหยุด</span>
                </div>
              </div>
            </div>
          </section>


          {/* SCREEN: PROFILE */}
          <section className={`screen-view${screen === 'screen-profile' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-home')}><ChevronLeft size={14} /> หน้าแรก</button>
              <span className="sep">/</span><span className="current">ข้อมูลส่วนตัวและการตั้งค่า</span>
            </div>
            <div className="ui-card profile-user-header-card">
              <div className="profile-avatar-large-wrapper">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80" alt="Avatar" className="avatar-large-img" />
                <button className="btn-change-avatar" onClick={() => showToast('ฟังก์ชันเปลี่ยนรูปโปรไฟล์')}><Camera size={14} /></button>
              </div>
              <div className="profile-user-title">
                <h2 className="section-heading">{currentUser.name}</h2>
                <span className="user-code-badge font-mono">{currentUser.empId}</span>
                <span className="user-role-badge">{currentUser.position}</span>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><User size={16} /> ข้อมูลบัญชีผู้ใช้งาน</h3>
              <div className="details-grid-compact margin-top-sm">
                <div className="detail-cell"><span className="lbl">อีเมลบริษัท</span><span className="val font-mono">{currentUser.email}</span></div>
                <div className="detail-cell"><span className="lbl">เบอร์โทรศัพท์</span><span className="val font-mono">{currentUser.phone}</span></div>
                <div className="detail-cell"><span className="lbl">สังกัด / แผนก</span><span className="val">{currentUser.department}</span></div>
                <div className="detail-cell"><span className="lbl">ผู้บังคับบัญชา</span><span className="val">{currentUser.supervisor}</span></div>
                <div className="detail-cell"><span className="lbl">วันที่เริ่มงาน</span><span className="val">1 สิงหาคม 2567</span></div>
                <div className="detail-cell"><span className="lbl">อายุงาน</span><span className="val bold orange-txt">2 ปี 0 เดือน</span></div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Settings size={16} /> การตั้งค่าการแจ้งเตือน</h3>
              <div className="setting-toggle-row margin-top-sm">
                <div className="setting-text"><span className="set-title">การแจ้งเตือนผ่าน LINE Notify</span><span className="set-sub">รับการแจ้งเตือนเมื่อคำขออนุมัติมีอัปเดต</span></div>
                <input type="checkbox" defaultChecked className="setting-checkbox" />
              </div>
              <div className="setting-toggle-row margin-top-sm">
                <div className="setting-text"><span className="set-title">การแจ้งเตือนผ่าน Email</span><span className="set-sub">รับสำเนาใบอนุมัติการลาทางอีเมล</span></div>
                <input type="checkbox" defaultChecked className="setting-checkbox" />
              </div>
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-home')}>ย้อนกลับ</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('บันทึกการตั้งค่าโปรไฟล์เรียบร้อยแล้ว'); goToScreen('screen-home') }}>บันทึกการตั้งค่า</button>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              ADMIN PORTAL
          ═══════════════════════════════════════════════════════ */}

          {/* SCREEN: ADMIN LANDING */}
          <section className={`screen-view${screen === 'screen-admin' ? ' active' : ''}`}>
            <div className="section-title-card">
              <ShieldCheck size={22} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', color: '#1e2939' }}>ระบบจัดการแอดมิน</div>
                <div style={{ fontSize: '13px', color: '#6a7282', marginTop: '2px' }}>จัดการสิทธิ์ผู้ใช้งานและตรวจสอบประวัติการใช้งานระบบ</div>
              </div>
            </div>
            <div className="portal-menu-grid">
              <button className="portal-menu-card" onClick={() => goToScreen('screen-admin-perm-admin')}>
                <div className="portal-menu-card-icon" style={{ background: '#FFF4E8' }}><Lock size={22} style={{ color: '#FF6B00' }} /></div>
                <div>
                  <div className="portal-menu-card-title">กำหนดสิทธิ์ Administrator</div>
                  <div className="portal-menu-card-desc">จัดการบัญชีและสิทธิ์การเข้าถึงของผู้ดูแลระบบ</div>
                </div>
                <ChevronRight size={16} style={{ color: '#9ca3af', marginTop: 'auto' }} />
              </button>
              <button className="portal-menu-card" onClick={() => goToScreen('screen-admin-perm-operator')}>
                <div className="portal-menu-card-icon" style={{ background: '#EFF6FF' }}><Settings size={22} style={{ color: '#2B7FFF' }} /></div>
                <div>
                  <div className="portal-menu-card-title">กำหนดสิทธิ์ Operator</div>
                  <div className="portal-menu-card-desc">จัดการบัญชีและสิทธิ์การเข้าถึงของผู้ปฏิบัติการระบบ</div>
                </div>
                <ChevronRight size={16} style={{ color: '#9ca3af', marginTop: 'auto' }} />
              </button>
              <button className="portal-menu-card" onClick={() => goToScreen('screen-admin-audit')}>
                <div className="portal-menu-card-icon" style={{ background: '#F0FFF4' }}><History size={22} style={{ color: '#28BD0A' }} /></div>
                <div>
                  <div className="portal-menu-card-title">รายงานประวัติการใช้งานระบบ</div>
                  <div className="portal-menu-card-desc">บันทึก Log กิจกรรมการเข้าใช้งานและการเปลี่ยนแปลงข้อมูล</div>
                </div>
                <ChevronRight size={16} style={{ color: '#9ca3af', marginTop: 'auto' }} />
              </button>
            </div>
          </section>

          {/* SCREEN: ADMIN — กำหนดสิทธิ์ Administrator */}
          <section className={`screen-view${screen === 'screen-admin-perm-admin' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-admin')}><ChevronLeft size={14} /> แอดมิน</button>
              <span className="sep">/</span><span className="current">กำหนดสิทธิ์ Administrator</span>
            </div>
            <div className="screen-header-row">
              <div />
              <button className="btn-primary-action" onClick={() => showToast('เพิ่มผู้ดูแลระบบใหม่')}><UserPlus size={14} /> เพิ่ม Administrator</button>
            </div>
            <div className="ui-card">
              <div className="ll-filter-bar" style={{ marginBottom: '16px' }}>
                <div className="dw-topbar-search" style={{ background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', flex: 1 }}>
                  <Search size={14} /><input type="text" placeholder="ค้นหาชื่อหรืออีเมล..." style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '13px', width: '100%' }} />
                </div>
              </div>
              <div className="perm-section-label"><Lock size={12} /> Administrator (ผู้ดูแลระบบสูงสุด)</div>
              {[
                { name: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', email: 'nattawut.v@softdebut.com', dept: 'IT Div', lastLogin: '5 ส.ค. 2569 09:12', active: true },
                { name: 'นาย วิชัย พรมมา', email: 'wichai.p@softdebut.com', dept: 'IT Div', lastLogin: '4 ส.ค. 2569 14:33', active: true },
                { name: 'นางสาว สุภาพ รักษาดี', email: 'supap.r@softdebut.com', dept: 'HR Dept', lastLogin: '1 ส.ค. 2569 08:00', active: false },
              ].map((u, i) => (
                <div key={i} className="perm-user-row">
                  <div className="perm-user-info">
                    <div className="perm-user-avatar">{u.name.slice(4, 6)}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{u.name}</div>
                      <div style={{ fontSize: '11px', color: '#6a7282', fontFamily: 'monospace' }}>{u.email}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af' }}>{u.dept} · เข้าใช้ล่าสุด {u.lastLogin}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className={`status-badge ${u.active ? 'approved' : 'rejected'}`}>{u.active ? 'ใช้งาน' : 'ระงับ'}</span>
                    <button className="btn-action-cancel" style={{ padding: '4px 12px', fontSize: '12px' }} onClick={() => showToast('แก้ไขสิทธิ์ ' + u.name)}><Edit3 size={12} /> แก้ไข</button>
                    <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444' }} onClick={() => showToast('ลบผู้ใช้: ' + u.name)}><Trash2 size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="ui-card">
              <div className="perm-section-label"><ShieldCheck size={12} /> ขอบเขตสิทธิ์ Administrator</div>
              {[
                { module: 'จัดการผู้ใช้งานทั้งหมด', desc: 'เพิ่ม/แก้ไข/ลบบัญชีผู้ใช้งาน' },
                { module: 'กำหนดสิทธิ์ Operator', desc: 'มอบหมายและถอนสิทธิ์ Operator' },
                { module: 'ดูรายงานประวัติระบบ', desc: 'เข้าถึง Audit Log ทั้งหมด' },
                { module: 'ตั้งค่าระบบขั้นสูง', desc: 'แก้ไขการตั้งค่าหลักของระบบ' },
              ].map((m, i) => (
                <div key={i} className="perm-user-row">
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{m.module}</div>
                    <div style={{ fontSize: '12px', color: '#6a7282' }}>{m.desc}</div>
                  </div>
                  <span className="status-badge approved">เปิดใช้</span>
                </div>
              ))}
            </div>
          </section>

          {/* SCREEN: ADMIN — กำหนดสิทธิ์ Operator */}
          <section className={`screen-view${screen === 'screen-admin-perm-operator' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-admin')}><ChevronLeft size={14} /> แอดมิน</button>
              <span className="sep">/</span><span className="current">กำหนดสิทธิ์ Operator</span>
            </div>
            <div className="screen-header-row">
              <div />
              <button className="btn-primary-action" onClick={() => showToast('เพิ่ม Operator ใหม่')}><UserPlus size={14} /> เพิ่ม Operator</button>
            </div>
            <div className="ui-card">
              <div className="ll-filter-bar" style={{ marginBottom: '16px' }}>
                <div className="dw-topbar-search" style={{ background: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', flex: 1 }}>
                  <Search size={14} /><input type="text" placeholder="ค้นหาชื่อหรืออีเมล..." style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '13px', width: '100%' }} />
                </div>
              </div>
              {[
                { name: 'นาย อนุรักษ์ สายชล', email: 'anurak.s@softdebut.com', dept: 'HR Dept', modules: ['แก้ไขหน้าแรก', 'Config ลา', 'วันหยุด'], active: true },
                { name: 'นางสาว กมลา ทองดี', email: 'kamala.t@softdebut.com', dept: 'HR Dept', modules: ['โควตาลา', 'รายงาน', 'ตารางงาน'], active: true },
                { name: 'นาย ประวิทย์ รุ่งเรือง', email: 'prawit.r@softdebut.com', dept: 'Admin Dept', modules: ['ทีมอนุมัติ', 'รายการอนุมัติ'], active: false },
              ].map((u, i) => (
                <div key={i} className="perm-user-row" style={{ flexWrap: 'wrap', gap: '10px' }}>
                  <div className="perm-user-info" style={{ flex: '1 1 200px' }}>
                    <div className="perm-user-avatar">{u.name.slice(4, 6)}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{u.name}</div>
                      <div style={{ fontSize: '11px', color: '#6a7282', fontFamily: 'monospace' }}>{u.email} · {u.dept}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', flex: '1 1 160px' }}>
                    {u.modules.map((m, j) => <span key={j} className="perm-chip" style={{ color: '#2B7FFF', borderColor: '#bfdbfe', background: '#eff6ff' }}>{m}</span>)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`status-badge ${u.active ? 'approved' : 'rejected'}`}>{u.active ? 'ใช้งาน' : 'ระงับ'}</span>
                    <button className="btn-action-cancel" style={{ padding: '4px 12px', fontSize: '12px' }} onClick={() => showToast('แก้ไขสิทธิ์ ' + u.name)}><Edit3 size={12} /> แก้ไข</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="ui-card">
              <div className="perm-section-label"><Database size={12} /> โมดูลที่ Operator สามารถเข้าถึงได้</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px', marginTop: '8px' }}>
                {[
                  'แก้ไขข้อความหน้าแรก', 'Configuration: ลา', 'เทมเพลตเวลาทำงาน',
                  'วันหยุดพิเศษ', 'ตรวจโควตาลา', 'ทีมงานผู้อนุมัติ',
                  'รายการอนุมัติการลา', 'รายงานการลา', 'จัดตารางการทำงาน',
                  'ตรวจสอบผู้อนุมัติ',
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb', borderRadius: '8px', padding: '8px 12px', border: '1px solid #e5e7eb' }}>
                    <span style={{ fontSize: '12px', color: '#364153' }}>{m}</span>
                    <Layers size={12} style={{ color: '#9ca3af' }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SCREEN: ADMIN — รายงานประวัติการใช้งานระบบ */}
          <section className={`screen-view${screen === 'screen-admin-audit' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-admin')}><ChevronLeft size={14} /> แอดมิน</button>
              <span className="sep">/</span><span className="current">รายงานประวัติการใช้งาน</span>
            </div>
            <div className="screen-header-row">
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="date" defaultValue="2026-08-01" style={{ fontSize: '13px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '6px 10px' }} />
                <span style={{ alignSelf: 'center', color: '#9ca3af' }}>–</span>
                <input type="date" defaultValue="2026-08-05" style={{ fontSize: '13px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '6px 10px' }} />
              </div>
              <button className="btn-primary-action" onClick={() => showToast('Export Audit Log เรียบร้อย')}><Download size={14} /> Export</button>
            </div>
            <div className="ui-card" style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>วันที่/เวลา</th>
                    <th>ผู้ใช้งาน</th>
                    <th>การกระทำ</th>
                    <th>โมดูล</th>
                    <th>IP Address</th>
                    <th>ผลลัพธ์</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dt: '05/08/2569 09:42:11', user: 'nattawut.v', action: 'Login', module: 'Auth', ip: '192.168.1.42', ok: true },
                    { dt: '05/08/2569 09:43:05', user: 'nattawut.v', action: 'ยื่นขอลา', module: 'Leave', ip: '192.168.1.42', ok: true },
                    { dt: '05/08/2569 10:15:30', user: 'anurak.s', action: 'อนุมัติการลา', module: 'Approver', ip: '192.168.1.55', ok: true },
                    { dt: '05/08/2569 11:02:44', user: 'kamala.t', action: 'แก้ไข Config ลา', module: 'Operator', ip: '192.168.1.60', ok: true },
                    { dt: '05/08/2569 11:30:18', user: 'unknown', action: 'Login Failed', module: 'Auth', ip: '203.150.88.12', ok: false },
                    { dt: '05/08/2569 13:22:09', user: 'prawit.r', action: 'ดูรายงาน', module: 'Reports', ip: '192.168.1.70', ok: true },
                    { dt: '04/08/2569 16:45:00', user: 'wichai.p', action: 'เพิ่ม Operator', module: 'Admin', ip: '192.168.1.42', ok: true },
                    { dt: '04/08/2569 08:30:22', user: 'nattawut.v', action: 'Login', module: 'Auth', ip: '192.168.1.42', ok: true },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6a7282' }}>{row.dt}</td>
                      <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#364153' }}>{row.user}</td>
                      <td style={{ fontSize: '13px', color: '#1e2939' }}>{row.action}</td>
                      <td><span className="perm-chip" style={{ color: '#2B7FFF', borderColor: '#bfdbfe', background: '#eff6ff' }}>{row.module}</span></td>
                      <td style={{ fontFamily: 'monospace', fontSize: '12px', color: '#6a7282' }}>{row.ip}</td>
                      <td><span className={`status-badge ${row.ok ? 'approved' : 'rejected'}`}>{row.ok ? 'สำเร็จ' : 'ล้มเหลว'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ═══════════════════════════════════════════════════════
              OPERATOR PORTAL
          ═══════════════════════════════════════════════════════ */}

          {/* SCREEN: OPERATOR LANDING */}
          <section className={`screen-view${screen === 'screen-operator' ? ' active' : ''}`}>
            <div className="section-title-card">
              <Settings size={22} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '16px', color: '#1e2939' }}>ระบบโอเปอเรเตอร์</div>
                <div style={{ fontSize: '13px', color: '#6a7282', marginTop: '2px' }}>จัดการการตั้งค่า ข้อมูล และรายงานระบบการลา</div>
              </div>
            </div>
            <div className="portal-menu-grid">
              {[
                { screen: 'screen-operator-edit-home' as Screen, icon: <Edit3 size={20} />, color: '#FF6B00', bg: '#FFF4E8', title: 'แก้ไขข้อความหน้าแรก', desc: 'แก้ไขประกาศและเนื้อหาหน้าหลักของระบบ' },
                { screen: 'screen-operator-config-leave' as Screen, icon: <SlidersHorizontal size={20} />, color: '#2B7FFF', bg: '#EFF6FF', title: 'Configuration: ลา', desc: 'ตั้งค่าประเภทการลาและกฎเกณฑ์ต่างๆ' },
                { screen: 'screen-operator-work-template' as Screen, icon: <Clock size={20} />, color: '#AD46FF', bg: '#FAF5FF', title: 'เทมเพลตเวลาทำงานรายสัปดาห์', desc: 'กำหนดรูปแบบเวลาทำงานมาตรฐาน' },
                { screen: 'screen-operator-holidays' as Screen, icon: <CalendarIcon size={20} />, color: '#28BD0A', bg: '#F0FFF4', title: 'วันหยุดพิเศษ', desc: 'จัดการวันหยุดประจำปีและวันหยุดพิเศษ' },
                { screen: 'screen-operator-quota' as Screen, icon: <PieChart size={20} />, color: '#FF6B00', bg: '#FFF4E8', title: 'ตรวจโควตาลาพักร้อน', desc: 'ตรวจสอบโควตาวันลาของพนักงาน' },
                { screen: 'screen-operator-approver-team' as Screen, icon: <Users size={20} />, color: '#2B7FFF', bg: '#EFF6FF', title: 'ทีมงานผู้พิจารณาอนุมัติ', desc: 'จัดการทีมและสมาชิกผู้อนุมัติ' },
                { screen: 'screen-operator-approval-list' as Screen, icon: <CheckSquare size={20} />, color: '#28BD0A', bg: '#F0FFF4', title: 'รายการอนุมัติการลา', desc: 'ตรวจสอบและจัดการคำขอลาทั้งหมด' },
                { screen: 'screen-operator-leave-report' as Screen, icon: <BarChart3 size={20} />, color: '#AD46FF', bg: '#FAF5FF', title: 'รายงานการลา', desc: 'รายงานสถิติและสรุปการลาประจำปี' },
                { screen: 'screen-operator-schedule' as Screen, icon: <Calendar size={20} />, color: '#FF6B00', bg: '#FFF4E8', title: 'จัดตารางการทำงาน', desc: 'กำหนดและแก้ไขตารางการทำงานของพนักงาน' },
                { screen: 'screen-operator-verify-approvers' as Screen, icon: <UserCheck size={20} />, color: '#28BD0A', bg: '#F0FFF4', title: 'ตรวจสอบทีมงานผู้พิจารณาอนุมัติ', desc: 'ตรวจสอบความถูกต้องของการกำหนดผู้อนุมัติ' },
              ].map((item, i) => (
                <button key={i} className="portal-menu-card" onClick={() => goToScreen(item.screen)}>
                  <div className="portal-menu-card-icon" style={{ background: item.bg }}>{item.icon && <span style={{ color: item.color }}>{item.icon}</span>}</div>
                  <div>
                    <div className="portal-menu-card-title">{item.title}</div>
                    <div className="portal-menu-card-desc">{item.desc}</div>
                  </div>
                  <ChevronRight size={16} style={{ color: '#9ca3af', marginTop: 'auto' }} />
                </button>
              ))}
            </div>
          </section>

          {/* SCREEN: OPERATOR — แก้ไขข้อความหน้าแรก */}
          <section className={`screen-view${screen === 'screen-operator-edit-home' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">แก้ไขข้อความหน้าแรก</span>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Megaphone size={16} /> ประกาศปัจจุบัน (Preview)</h3>
              <div className="announcement-card" style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                  <Megaphone size={14} style={{ color: '#FF6B00' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#364153' }}>ข่าวประชาสัมพันธ์บริษัท</span>
                </div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: '#1e2939', marginBottom: '4px' }}>การยื่นขอลาพักร้อนประจำปีล่วงหน้าช่วงวันหยุดนักขัตฤกษ์</div>
                <div style={{ fontSize: '13px', color: '#4a5565', marginBottom: '6px' }}>ขอความร่วมมือพนักงานทุกท่านยื่นคำขอลาพักร้อนล่วงหน้าอย่างน้อย 7 วันทำการ</div>
                <div style={{ fontSize: '11px', color: '#6a7282' }}>ประกาศ ณ วันที่ 1 สิงหาคม 2569 | ฝ่ายทรัพยากรบุคคล (HR Dept)</div>
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Edit3 size={16} /> แก้ไขเนื้อหาประกาศ</h3>
              <div className="form-group-mobile" style={{ marginTop: '12px' }}>
                <label className="form-label required">หัวข้อประกาศ</label>
                <input type="text" className="form-input" defaultValue="การยื่นขอลาพักร้อนประจำปีล่วงหน้าช่วงวันหยุดนักขัตฤกษ์" />
              </div>
              <div className="form-group-mobile">
                <label className="form-label required">เนื้อหา</label>
                <textarea className="form-textarea" style={{ minHeight: '100px' }} defaultValue="ขอความร่วมมือพนักงานทุกท่านยื่นคำขอลาพักร้อนล่วงหน้าอย่างน้อย 7 วันทำการ ผ่านระบบ Time Management เพื่อให้หัวหน้างานจัดสรรกำลังคนอย่างเหมาะสม" />
              </div>
              <div className="form-row-2">
                <div className="form-group-mobile">
                  <label className="form-label">วันที่ประกาศ</label>
                  <input type="date" className="form-input" defaultValue="2026-08-01" />
                </div>
                <div className="form-group-mobile">
                  <label className="form-label">ฝ่ายที่รับผิดชอบ</label>
                  <input type="text" className="form-input" defaultValue="ฝ่ายทรัพยากรบุคคล (HR Dept)" />
                </div>
              </div>
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-operator')}>ยกเลิก</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('บันทึกข้อความหน้าแรกเรียบร้อยแล้ว'); goToScreen('screen-operator') }}>บันทึกการเปลี่ยนแปลง</button>
            </div>
          </section>

          {/* SCREEN: OPERATOR — Configuration: ลา */}
          <section className={`screen-view${screen === 'screen-operator-config-leave' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">Configuration: ลา</span>
            </div>
            <div className="screen-header-row">
              <div />
              <button className="btn-primary-action" onClick={() => showToast('เพิ่มประเภทการลาใหม่')}><Plus size={14} /> เพิ่มประเภทการลา</button>
            </div>
            <div className="ui-card" style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>รหัส</th>
                    <th>ชื่อประเภทการลา</th>
                    <th>สิทธิ์สูงสุด (วัน)</th>
                    <th>ได้รับค่าจ้าง</th>
                    <th>โอนสะสม</th>
                    <th>ต้องใช้เอกสาร</th>
                    <th>สถานะ</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: '0100', name: 'ลาพักร้อนประจำปี', days: 10, paid: true, carryOver: true, doc: false, active: true },
                    { code: '0200', name: 'ลากิจจำเป็น', days: 6, paid: true, carryOver: false, doc: false, active: true },
                    { code: '0300', name: 'ลาป่วย', days: 30, paid: true, carryOver: false, doc: true, active: true },
                    { code: '0400', name: 'ลาคลอดบุตร', days: 98, paid: true, carryOver: false, doc: true, active: true },
                    { code: '0500', name: 'ลาทำหมัน', days: 30, paid: true, carryOver: false, doc: true, active: true },
                    { code: '0600', name: 'ลารับราชการทหาร', days: 60, paid: false, carryOver: false, doc: true, active: true },
                    { code: '0000', name: 'ลาอื่นๆ (กรณีพิเศษ)', days: 0, paid: false, carryOver: false, doc: true, active: false },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: 'monospace', fontWeight: 700, color: '#FF6B00' }}>{row.code}</td>
                      <td style={{ fontWeight: 600, color: '#1e2939' }}>{row.name}</td>
                      <td style={{ textAlign: 'center', fontWeight: 700 }}>{row.days > 0 ? row.days : '∞'}</td>
                      <td style={{ textAlign: 'center' }}><span style={{ color: row.paid ? '#28BD0A' : '#ef4444' }}>{row.paid ? '✓' : '✗'}</span></td>
                      <td style={{ textAlign: 'center' }}><span style={{ color: row.carryOver ? '#28BD0A' : '#ef4444' }}>{row.carryOver ? '✓' : '✗'}</span></td>
                      <td style={{ textAlign: 'center' }}><span style={{ color: row.doc ? '#2B7FFF' : '#9ca3af' }}>{row.doc ? '✓' : '✗'}</span></td>
                      <td><span className={`status-badge ${row.active ? 'approved' : 'rejected'}`}>{row.active ? 'เปิดใช้' : 'ปิด'}</span></td>
                      <td><button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#FF6B00' }} onClick={() => showToast('แก้ไข: ' + row.name)}><Edit3 size={14} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SCREEN: OPERATOR — เทมเพลตเวลาทำงานรายสัปดาห์ */}
          <section className={`screen-view${screen === 'screen-operator-work-template' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">เทมเพลตเวลาทำงานรายสัปดาห์</span>
            </div>
            <div className="screen-header-row">
              <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                <option>เทมเพลตมาตรฐาน (08:30–17:30)</option>
                <option>เทมเพลต Flex Time</option>
                <option>เทมเพลตกะกลางคืน</option>
              </select>
              <button className="btn-primary-action" onClick={() => showToast('เพิ่มเทมเพลตใหม่')}><Plus size={14} /> เพิ่มเทมเพลต</button>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><Clock size={16} /> เทมเพลตมาตรฐาน — กำหนดเวลาทำงานรายวัน</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                {[
                  { day: 'จันทร์', start: '08:30', end: '17:30', work: true },
                  { day: 'อังคาร', start: '08:30', end: '17:30', work: true },
                  { day: 'พุธ', start: '08:30', end: '17:30', work: true },
                  { day: 'พฤหัสบดี', start: '08:30', end: '17:30', work: true },
                  { day: 'ศุกร์', start: '08:30', end: '17:30', work: true },
                  { day: 'เสาร์', start: '-', end: '-', work: false },
                  { day: 'อาทิตย์', start: '-', end: '-', work: false },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: d.work ? '#f9fafb' : '#f9fafb', borderRadius: '8px', padding: '10px 14px', border: '1px solid #e5e7eb', opacity: d.work ? 1 : 0.5 }}>
                    <div style={{ width: '80px', fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{d.day}</div>
                    <div style={{ flex: 1, display: 'flex', gap: '8px', alignItems: 'center' }}>
                      {d.work ? (
                        <>
                          <input type="time" defaultValue={d.start} className="form-input" style={{ width: '120px', minHeight: '34px', fontSize: '13px' }} />
                          <span style={{ color: '#9ca3af' }}>–</span>
                          <input type="time" defaultValue={d.end} className="form-input" style={{ width: '120px', minHeight: '34px', fontSize: '13px' }} />
                          <span style={{ fontSize: '12px', color: '#6a7282', marginLeft: '4px' }}>({(17.5 - 8.5) - 1} ชม./วัน)</span>
                        </>
                      ) : (
                        <span style={{ fontSize: '13px', color: '#9ca3af' }}>วันหยุด</span>
                      )}
                    </div>
                    <span className={`status-badge ${d.work ? 'approved' : 'rejected'}`}>{d.work ? 'ทำงาน' : 'หยุด'}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', padding: '10px 14px', background: '#FFFBF5', borderRadius: '8px', border: '1px solid #FFE0B2', fontSize: '13px', color: '#6a7282' }}>
                <strong style={{ color: '#FF6B00' }}>สรุป:</strong> ทำงาน 5 วัน/สัปดาห์ · รวม 40 ชั่วโมง/สัปดาห์ · พักเที่ยง 1 ชั่วโมง
              </div>
            </div>
            <div className="mobile-action-footer">
              <button className="btn-action-cancel" onClick={() => goToScreen('screen-operator')}>ยกเลิก</button>
              <button className="btn-action-submit orange" onClick={() => { showToast('บันทึกเทมเพลตเวลาทำงานเรียบร้อยแล้ว'); goToScreen('screen-operator') }}>บันทึกเทมเพลต</button>
            </div>
          </section>

          {/* SCREEN: OPERATOR — วันหยุดพิเศษ */}
          <section className={`screen-view${screen === 'screen-operator-holidays' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">วันหยุดพิเศษ</span>
            </div>
            <div className="screen-header-row">
              <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                <option>ปีงบประมาณ 2569</option>
                <option>ปีงบประมาณ 2568</option>
              </select>
              <button className="btn-primary-action" onClick={() => showToast('เพิ่มวันหยุดใหม่')}><Plus size={14} /> เพิ่มวันหยุด</button>
            </div>
            <div className="ll-summary-strip">
              <div className="ll-sum-item approved"><span className="ll-sum-num">13</span><span className="ll-sum-lbl">วันหยุดทั้งหมด</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item pending"><span className="ll-sum-num">6</span><span className="ll-sum-lbl">วันหยุดนักขัตฤกษ์</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item"><span className="ll-sum-num">7</span><span className="ll-sum-lbl">วันหยุดบริษัท</span></div>
            </div>
            <div className="ui-card" style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr><th>วันที่</th><th>ชื่อวันหยุด</th><th>ประเภท</th><th>หมายเหตุ</th><th></th></tr>
                </thead>
                <tbody>
                  {[
                    { date: '01 ม.ค. 2569', name: 'วันขึ้นปีใหม่', type: 'นักขัตฤกษ์', note: 'หยุดชดเชย 2 ม.ค.' },
                    { date: '13–15 เม.ย. 2569', name: 'วันสงกรานต์', type: 'นักขัตฤกษ์', note: '' },
                    { date: '01 พ.ค. 2569', name: 'วันแรงงานแห่งชาติ', type: 'นักขัตฤกษ์', note: '' },
                    { date: '03 มิ.ย. 2569', name: 'วันเฉลิมพระชนมพรรษาสมเด็จพระราชินี', type: 'นักขัตฤกษ์', note: '' },
                    { date: '12 ส.ค. 2569', name: 'วันแม่แห่งชาติ', type: 'นักขัตฤกษ์', note: '' },
                    { date: '23 ต.ค. 2569', name: 'วันปิยมหาราช', type: 'นักขัตฤกษ์', note: '' },
                    { date: '05 ธ.ค. 2569', name: 'วันพ่อแห่งชาติ', type: 'นักขัตฤกษ์', note: '' },
                    { date: '31 ธ.ค. 2569', name: 'วันสิ้นปี', type: 'บริษัท', note: 'วันหยุดพิเศษบริษัท' },
                    { date: '02–03 ม.ค. 2569', name: 'หยุดพิเศษต้อนปีใหม่', type: 'บริษัท', note: 'บริษัทกำหนด' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939', whiteSpace: 'nowrap' }}>{row.date}</td>
                      <td style={{ fontSize: '13px', color: '#364153' }}>{row.name}</td>
                      <td><span className={`perm-chip ${row.type === 'นักขัตฤกษ์' ? '' : ''}`} style={{ color: row.type === 'นักขัตฤกษ์' ? '#FF6B00' : '#2B7FFF', borderColor: row.type === 'นักขัตฤกษ์' ? '#FFE0B2' : '#bfdbfe', background: row.type === 'นักขัตฤกษ์' ? '#FFF4E8' : '#eff6ff' }}>{row.type}</span></td>
                      <td style={{ fontSize: '12px', color: '#9ca3af' }}>{row.note}</td>
                      <td style={{ display: 'flex', gap: '4px' }}>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#FF6B00' }} onClick={() => showToast('แก้ไข: ' + row.name)}><Edit3 size={13} /></button>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#ef4444' }} onClick={() => showToast('ลบ: ' + row.name)}><Trash2 size={13} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SCREEN: OPERATOR — ตรวจโควตาลาพักร้อน */}
          <section className={`screen-view${screen === 'screen-operator-quota' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">ตรวจโควตาลาพักร้อน</span>
            </div>
            <div className="screen-header-row">
              <div style={{ display: 'flex', gap: '8px' }}>
                <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                  <option>ทุกแผนก</option>
                  <option>Software QA & Testing</option>
                  <option>HR Dept</option>
                  <option>Admin Dept</option>
                </select>
                <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                  <option>ปี 2569</option>
                  <option>ปี 2568</option>
                </select>
              </div>
              <button className="btn-primary-action" onClick={() => showToast('Export โควตาลา')}><Download size={14} /> Export</button>
            </div>
            <div className="ll-summary-strip">
              <div className="ll-sum-item"><span className="ll-sum-num" style={{ color: '#364153' }}>24</span><span className="ll-sum-lbl">พนักงานทั้งหมด</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item approved"><span className="ll-sum-num">18</span><span className="ll-sum-lbl">มีโควตาเหลือ</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item rejected"><span className="ll-sum-num">6</span><span className="ll-sum-lbl">ใช้หมดแล้ว</span></div>
            </div>
            <div className="ui-card" style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr><th>รหัส</th><th>ชื่อ-นามสกุล</th><th>ตำแหน่ง</th><th>สิทธิ์รวม</th><th>ใช้แล้ว</th><th>คงเหลือ</th><th>สถานะ</th></tr>
                </thead>
                <tbody>
                  {[
                    { code: currentUser.empId, name: currentUser.name, pos: currentUser.position, total: leaveQuotas.vacation.total, used: leaveQuotas.vacation.used, remaining: leaveQuotas.vacation.remaining },
                    { code: 'EMP-20230456', name: 'นางสาว กมลา ทองดี', pos: 'HR Officer', total: 12, used: 12, remaining: 0 },
                    { code: 'EMP-20220134', name: 'นาย อนุรักษ์ สายชล', pos: 'Senior QA Manager', total: 15, used: 5, remaining: 10 },
                    { code: 'EMP-20241001', name: 'นาย ประวิทย์ รุ่งเรือง', pos: 'Admin Officer', total: 10, used: 10, remaining: 0 },
                    { code: 'EMP-20210088', name: 'นาย วิชัย พรมมา', pos: 'IT Manager', total: 15, used: 3, remaining: 12 },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td style={{ fontFamily: 'monospace', fontSize: '11px', color: '#6a7282' }}>{row.code}</td>
                      <td style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{row.name}</td>
                      <td style={{ fontSize: '12px', color: '#6a7282' }}>{row.pos}</td>
                      <td style={{ textAlign: 'center', fontWeight: 700, color: '#364153' }}>{row.total}</td>
                      <td style={{ textAlign: 'center', color: '#6a7282' }}>{row.used}</td>
                      <td style={{ textAlign: 'center', fontWeight: 700, color: row.remaining === 0 ? '#ef4444' : '#FF6B00' }}>{row.remaining}</td>
                      <td><span className={`status-badge ${row.remaining > 0 ? 'approved' : 'rejected'}`}>{row.remaining > 0 ? 'มีเหลือ' : 'หมดแล้ว'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SCREEN: OPERATOR — ทีมงานผู้พิจารณาอนุมัติ */}
          <section className={`screen-view${screen === 'screen-operator-approver-team' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">ทีมงานผู้พิจารณาอนุมัติ</span>
            </div>
            <div className="screen-header-row">
              <div />
              <button className="btn-primary-action" onClick={() => showToast('เพิ่มทีมใหม่')}><Plus size={14} /> เพิ่มทีม</button>
            </div>
            {[
              {
                team: 'Software QA & Testing Team', div: 'Software Dev Div 4',
                approvers: [
                  { name: 'นาย อนุรักษ์ สายชล', role: 'Senior QA Manager (ผู้บังคับบัญชาขั้นต้น)', level: 1 },
                  { name: 'นาย สุรเชษฐ์ ศรีพลกรัง', role: 'ผู้อำนวยการฝ่าย IT (ผู้บังคับบัญชาขั้นเหนือขึ้นไป)', level: 2 },
                  { name: 'นาย เมธี เดชะ', role: 'ผู้อำนวยการสายงาน HR & Ops (ผู้อนุมัติขั้นสุดท้าย)', level: 3 },
                ],
                members: 8,
              },
              {
                team: 'HR Department', div: 'Human Resources',
                approvers: [
                  { name: 'นางสาว กมลา ทองดี', role: 'HR Manager', level: 1 },
                ],
                members: 5,
              },
              {
                team: 'Admin Department', div: 'Administration',
                approvers: [
                  { name: 'นาย ประวิทย์ รุ่งเรือง', role: 'Admin Manager', level: 1 },
                ],
                members: 4,
              },
            ].map((team, i) => (
              <div key={i} className="ui-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: '#1e2939' }}>{team.team}</div>
                    <div style={{ fontSize: '12px', color: '#6a7282' }}>{team.div} · {team.members} คน</div>
                  </div>
                  <button className="btn-action-cancel" style={{ padding: '4px 12px', fontSize: '12px' }} onClick={() => showToast('แก้ไขทีม: ' + team.team)}><Edit3 size={12} /> แก้ไข</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {team.approvers.map((a, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f9fafb', borderRadius: '8px', padding: '8px 12px', border: '1px solid #e5e7eb' }}>
                      <div className="perm-user-avatar" style={{ background: j === 0 ? '#FFF4E8' : '#EFF6FF', color: j === 0 ? '#FF6B00' : '#2B7FFF' }}>{a.name.slice(4, 6)}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, fontSize: '13px', color: '#1e2939' }}>{a.name}</div>
                        <div style={{ fontSize: '11px', color: '#6a7282' }}>{a.role}</div>
                      </div>
                      <span className="perm-chip" style={{ color: '#FF6B00', borderColor: '#FFE0B2', background: '#FFF4E8' }}>ลำดับที่ {a.level}</span>
                    </div>
                  ))}
                  <button style={{ border: '1px dashed #e5e7eb', borderRadius: '8px', padding: '8px', background: 'transparent', cursor: 'pointer', color: '#9ca3af', fontSize: '12px' }} onClick={() => showToast('เพิ่มผู้อนุมัติในทีม: ' + team.team)}>
                    <Plus size={12} style={{ display: 'inline', marginRight: '4px' }} /> เพิ่มผู้อนุมัติ
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* SCREEN: OPERATOR — รายการอนุมัติการลา */}
          <section className={`screen-view${screen === 'screen-operator-approval-list' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">รายการอนุมัติการลา</span>
            </div>
            <div className="ll-summary-strip">
              <div className="ll-sum-item pending"><span className="ll-sum-num">{leaveCards.filter(c => c.status === 'pending').length}</span><span className="ll-sum-lbl">รออนุมัติ</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item approved"><span className="ll-sum-num">{leaveCards.filter(c => c.status === 'approved').length}</span><span className="ll-sum-lbl">อนุมัติแล้ว</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item rejected"><span className="ll-sum-num">{leaveCards.filter(c => c.status === 'rejected').length}</span><span className="ll-sum-lbl">ไม่อนุมัติ</span></div>
            </div>
            <div className="ll-filter-bar">
              {['ทั้งหมด', 'รออนุมัติ', 'อนุมัติแล้ว', 'ไม่อนุมัติ'].map(f => (
                <button key={f} className={`ll-filter-chip${approverFilter === f ? ' active' : ''}`} onClick={() => setApproverFilter(f)}>{f}</button>
              ))}
            </div>
            <div className="ll-cards-list">
              {(approverFilter === 'ทั้งหมด' || approverFilter === 'all'
                ? leaveCards
                : approverFilter === 'รออนุมัติ'
                ? leaveCards.filter(c => c.status === 'pending')
                : approverFilter === 'อนุมัติแล้ว'
                ? leaveCards.filter(c => c.status === 'approved')
                : approverFilter === 'ไม่อนุมัติ'
                ? leaveCards.filter(c => c.status === 'rejected')
                : leaveCards).map((card) => (
                <div key={card.id} className={`ll-card ll-card--${card.status}`}>
                  <div className="ll-card-top">
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '13px', color: '#1e2939' }}>{card.applicantName}</div>
                      <div style={{ fontSize: '11px', color: '#6a7282', fontFamily: 'monospace' }}>{card.id} · {card.applicantDept}</div>
                    </div>
                    <span className={`status-badge ${card.status}`}>{card.status === 'pending' ? 'รออนุมัติ' : card.status === 'approved' ? 'อนุมัติแล้ว' : 'ไม่อนุมัติ'}</span>
                  </div>
                  <div className="ll-card-body">
                    <div className="ll-info-row"><Tag size={12} /><span>{card.typeTag}</span></div>
                    <div className="ll-info-row"><CalendarIcon size={12} /><span>{card.dates}</span></div>
                    <div className="ll-info-row"><Clock4 size={12} /><span>{card.days}</span></div>
                  </div>
                  {card.status === 'pending' && (
                    <div className="ll-card-actions">
                      <button className="ll-btn-cancel" onClick={() => setRejectionSheet({ empName: card.applicantName, docNum: card.id, leaveType: card.typeTag, dates: card.dates, days: card.days })}><X size={13} /> ไม่อนุมัติ</button>
                      <button className="ll-btn-view" style={{ background: '#28BD0A', color: '#fff', border: 'none' }} onClick={() => { setLeaveCards(prev => prev.map(c => c.id === card.id ? { ...c, status: 'approved', updated: 'Operator' } : c)); showToast(`อนุมัติคำขอลา ${card.id} เรียบร้อยแล้ว`) }}><Check size={13} /> อนุมัติ</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SCREEN: OPERATOR — รายงานการลา */}
          <section className={`screen-view${screen === 'screen-operator-leave-report' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">รายงานการลา</span>
            </div>
            <div className="screen-header-row">
              <div style={{ display: 'flex', gap: '8px' }}>
                <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                  <option>ปีงบประมาณ 2569</option>
                  <option>ปีงบประมาณ 2568</option>
                </select>
                <select className="form-select" style={{ width: 'auto', minHeight: '36px', fontSize: '13px' }}>
                  <option>ทุกแผนก</option>
                  <option>QA Team</option>
                  <option>HR Dept</option>
                </select>
              </div>
              <button className="btn-primary-action" onClick={() => showToast('Export รายงานการลา')}><Download size={14} /> Export</button>
            </div>
            <div className="quota-cards-grid">
              {[
                { label: 'คำขอลาทั้งหมด', value: '54', unit: 'รายการ', color: '#364153', bg: '#f9fafb' },
                { label: 'อนุมัติแล้ว', value: '42', unit: 'รายการ', color: '#28BD0A', bg: '#F0FFF4' },
                { label: 'รออนุมัติ', value: '7', unit: 'รายการ', color: '#FF6B00', bg: '#FFF4E8' },
                { label: 'ไม่อนุมัติ', value: '5', unit: 'รายการ', color: '#ef4444', bg: '#FFF5F5' },
              ].map((s, i) => (
                <div key={i} className="quota-card" style={{ background: s.bg }}>
                  <div style={{ fontSize: '12px', color: '#6a7282', marginBottom: '4px' }}>{s.label}</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>{s.unit}</div>
                </div>
              ))}
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><BarChart3 size={16} /> สรุปการลาตามประเภท</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                {[
                  { type: 'ลาพักร้อน', count: 28, pct: 52, color: '#FF6B00' },
                  { type: 'ลาป่วย', count: 15, pct: 28, color: '#28BD0A' },
                  { type: 'ลากิจ', count: 8, pct: 15, color: '#2B7FFF' },
                  { type: 'ลาอื่นๆ', count: 3, pct: 5, color: '#AD46FF' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '90px', fontSize: '13px', color: '#364153' }}>{row.type}</div>
                    <div style={{ flex: 1, background: '#f3f4f6', borderRadius: '100px', height: '8px', overflow: 'hidden' }}>
                      <div style={{ width: `${row.pct}%`, background: row.color, height: '100%', borderRadius: '100px' }} />
                    </div>
                    <div style={{ width: '40px', textAlign: 'right', fontSize: '13px', fontWeight: 700, color: row.color }}>{row.count}</div>
                    <div style={{ width: '36px', fontSize: '12px', color: '#9ca3af' }}>{row.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ui-card">
              <h3 className="card-h3"><TrendingUp size={16} /> รายงานสรุปรายบุคคล</h3>
              <div style={{ overflowX: 'auto', marginTop: '12px' }}>
                <table className="data-table">
                  <thead><tr><th>ชื่อ-นามสกุล</th><th>แผนก</th><th>ลารวม</th><th>ลาพักร้อน</th><th>ลาป่วย</th><th>ลากิจ</th></tr></thead>
                  <tbody>
                    {[
                      { name: 'นาย ณัฐวุฒิ วิเศษสุวรรณ', dept: 'QA Team', total: 5, vac: 3, sick: 1, biz: 1 },
                      { name: 'นางสาว กมลา ทองดี', dept: 'HR Dept', total: 12, vac: 8, sick: 3, biz: 1 },
                      { name: 'นาย อนุรักษ์ สายชล', dept: 'QA Team', total: 6, vac: 4, sick: 1, biz: 1 },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600, fontSize: '13px' }}>{row.name}</td>
                        <td style={{ fontSize: '12px', color: '#6a7282' }}>{row.dept}</td>
                        <td style={{ textAlign: 'center', fontWeight: 700, color: '#1e2939' }}>{row.total}</td>
                        <td style={{ textAlign: 'center', color: '#FF6B00' }}>{row.vac}</td>
                        <td style={{ textAlign: 'center', color: '#28BD0A' }}>{row.sick}</td>
                        <td style={{ textAlign: 'center', color: '#2B7FFF' }}>{row.biz}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* SCREEN: OPERATOR — จัดตารางการทำงาน */}
          <section className={`screen-view${screen === 'screen-operator-schedule' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">จัดตารางการทำงาน</span>
            </div>
            <div className="screen-header-row">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '6px 10px', background: '#fff', cursor: 'pointer', fontSize: '13px' }}><ChevronLeft size={14} /></button>
                <span style={{ fontWeight: 700, fontSize: '14px', color: '#1e2939' }}>สิงหาคม 2569</span>
                <button style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '6px 10px', background: '#fff', cursor: 'pointer', fontSize: '13px' }}><ChevronRight size={14} /></button>
              </div>
              <button className="btn-primary-action" onClick={() => showToast('บันทึกตารางการทำงาน')}><Check size={14} /> บันทึก</button>
            </div>
            <div className="ui-card" style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '700px' }}>
                <thead>
                  <tr>
                    <th style={{ minWidth: '140px' }}>พนักงาน</th>
                    {['จ 4', 'อ 5', 'พ 6', 'พฤ 7', 'ศ 8', 'จ 11', 'อ 12', 'พ 13', 'พฤ 14', 'ศ 15'].map(d => <th key={d} style={{ textAlign: 'center', minWidth: '44px' }}>{d}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'ณัฐวุฒิ ว.', schedule: ['W', 'W', 'W', 'L', 'W', 'W', 'W', 'W', 'W', 'W'] },
                    { name: 'กมลา ท.', schedule: ['W', 'W', 'S', 'W', 'W', 'W', 'H', 'W', 'W', 'W'] },
                    { name: 'อนุรักษ์ ส.', schedule: ['W', 'L', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'] },
                    { name: 'ประวิทย์ ร.', schedule: ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'S', 'W', 'W'] },
                  ].map((emp, i) => (
                    <tr key={i}>
                      <td style={{ fontWeight: 600, fontSize: '12px', color: '#1e2939' }}>{emp.name}</td>
                      {emp.schedule.map((s, j) => (
                        <td key={j} style={{ textAlign: 'center', padding: '6px 4px' }}>
                          <span style={{
                            display: 'inline-flex', width: '28px', height: '28px', borderRadius: '6px', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700,
                            background: s === 'W' ? '#f9fafb' : s === 'L' ? '#FFF4E8' : s === 'H' ? '#F0FFF4' : '#eff6ff',
                            color: s === 'W' ? '#6a7282' : s === 'L' ? '#FF6B00' : s === 'H' ? '#28BD0A' : '#2B7FFF',
                            border: `1px solid ${s === 'W' ? '#e5e7eb' : s === 'L' ? '#FFE0B2' : s === 'H' ? '#bbf7d0' : '#bfdbfe'}`,
                          }}>{s}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                {[['W', '#f9fafb', '#6a7282', '#e5e7eb', 'ทำงานปกติ'], ['L', '#FFF4E8', '#FF6B00', '#FFE0B2', 'ลา'], ['H', '#F0FFF4', '#28BD0A', '#bbf7d0', 'วันหยุด'], ['S', '#eff6ff', '#2B7FFF', '#bfdbfe', 'กะพิเศษ']].map(([code, bg, color, border, label]) => (
                  <div key={code} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6a7282' }}>
                    <span style={{ display: 'inline-flex', width: '22px', height: '22px', borderRadius: '4px', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, background: bg as string, color: color as string, border: `1px solid ${border}` }}>{code}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SCREEN: OPERATOR — ตรวจสอบทีมงานผู้พิจารณาอนุมัติ */}
          <section className={`screen-view${screen === 'screen-operator-verify-approvers' ? ' active' : ''}`}>
            <div className="mobile-breadcrumb">
              <button onClick={() => goToScreen('screen-operator')}><ChevronLeft size={14} /> โอเปอเรเตอร์</button>
              <span className="sep">/</span><span className="current">ตรวจสอบทีมงานผู้พิจารณาอนุมัติ</span>
            </div>
            <div className="ll-summary-strip">
              <div className="ll-sum-item approved"><span className="ll-sum-num">3</span><span className="ll-sum-lbl">ทีมครบถ้วน</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item rejected"><span className="ll-sum-num">1</span><span className="ll-sum-lbl">ต้องตรวจสอบ</span></div>
              <div className="ll-sum-divider" />
              <div className="ll-sum-item pending"><span className="ll-sum-num">24</span><span className="ll-sum-lbl">พนักงานทั้งหมด</span></div>
            </div>
            <div className="section-title-card alert-orange">
              <AlertTriangle size={22} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '14px' }}>พบ 1 ทีมที่ยังไม่มีผู้อนุมัติ</div>
                <div style={{ fontSize: '13px', marginTop: '2px' }}>กรุณากำหนดผู้อนุมัติให้ครบถ้วนก่อนเปิดใช้งาน</div>
              </div>
            </div>
            {[
              { team: 'Software QA & Testing Team', members: 8, approvers: 2, status: 'ok', issues: [] },
              { team: 'HR Department', members: 5, approvers: 1, status: 'ok', issues: [] },
              { team: 'Admin Department', members: 4, approvers: 0, status: 'warn', issues: ['ยังไม่มีผู้อนุมัติหลัก', 'ไม่มีผู้อนุมัติสำรอง'] },
              { team: 'IT Department', members: 7, approvers: 1, status: 'ok', issues: [] },
            ].map((team, i) => (
              <div key={i} className="ui-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '13px', color: '#1e2939' }}>{team.team}</div>
                    <div style={{ fontSize: '12px', color: '#6a7282', marginTop: '2px' }}>สมาชิก {team.members} คน · ผู้อนุมัติ {team.approvers} คน</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {team.status === 'ok'
                      ? <span className="status-badge approved"><CheckCircle2 size={12} style={{ display: 'inline', marginRight: '3px' }} />ครบถ้วน</span>
                      : <span className="status-badge rejected"><AlertTriangle size={12} style={{ display: 'inline', marginRight: '3px' }} />ต้องตรวจสอบ</span>
                    }
                    <button className="btn-action-cancel" style={{ padding: '4px 10px', fontSize: '12px' }} onClick={() => goToScreen('screen-operator-approver-team')}><Edit3 size={11} /> แก้ไข</button>
                  </div>
                </div>
                {team.issues.length > 0 && (
                  <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {team.issues.map((issue, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#ef4444', background: '#FFF5F5', borderRadius: '6px', padding: '6px 10px' }}>
                        <AlertCircle size={12} /> {issue}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>

        </main>

        {/* BOTTOM NAV - EMPLOYEE */}
        {role === 'employee' && (
          <nav className="mobile-bottom-bar">
            <button className={`bottom-nav-item${screen === 'screen-home' ? ' active' : ''}`} onClick={() => goToScreen('screen-home')}>
              <Home size={20} /><span>หน้าแรก</span>
            </button>
            <button className={`bottom-nav-item${screen === 'screen-leave-list' ? ' active' : ''}`} onClick={() => goToScreen('screen-leave-list')}>
              <FileText size={20} /><span>รายการลา</span>
            </button>
            <div className="bottom-nav-action-wrapper">
              <button className="bottom-nav-center-btn" onClick={() => goToScreen('screen-create-leave')}>
                <Plus size={24} />
              </button>
              <span className="center-btn-label">ยื่นลา</span>
            </div>
            <button className={`bottom-nav-item${screen === 'screen-edit-leave' ? ' active' : ''}`} onClick={() => goToScreen('screen-edit-leave')}>
              <Calendar size={20} /><span>ปฏิทิน</span>
            </button>
            <button className={`bottom-nav-item${screen === 'screen-reports' ? ' active' : ''}`} onClick={() => goToScreen('screen-reports')}>
              <BarChart3 size={20} /><span>รายงาน</span>
            </button>
          </nav>
        )}

        {/* BOTTOM NAV - APPROVER */}
        {role === 'approver' && (
          <nav className="mobile-bottom-bar">
            <button className={`bottom-nav-item${screen === 'screen-home' ? ' active' : ''}`} onClick={() => goToScreen('screen-home')}>
              <Home size={20} /><span>หน้าแรก</span>
            </button>
            <button className={`bottom-nav-item${screen === 'screen-leave-list' ? ' active' : ''}`} onClick={() => goToScreen('screen-leave-list')}>
              <FileText size={20} /><span>รายการลา</span>
            </button>
            <div className="bottom-nav-action-wrapper">
              <button className="bottom-nav-center-btn approver-color" onClick={() => goToScreen('screen-approver-list')}>
                <div className="bnav-icon-badge-wrapper" style={{ position: 'relative' }}>
                  <CheckSquare size={22} />
                  <span className="bnav-badge-dot" style={{ fontSize: '8px', padding: '1px 4px' }}>3</span>
                </div>
              </button>
              <span className="center-btn-label">อนุมัติ</span>
            </div>
            <button className={`bottom-nav-item${screen === 'screen-edit-leave' ? ' active' : ''}`} onClick={() => goToScreen('screen-edit-leave')}>
              <Calendar size={20} /><span>ปฏิทิน</span>
            </button>
            <button className={`bottom-nav-item${screen === 'screen-reports' ? ' active' : ''}`} onClick={() => goToScreen('screen-reports')}>
              <BarChart2 size={20} /><span>รายงาน</span>
            </button>
          </nav>
        )}

        {/* APPROVAL BOTTOM SHEET */}
        <div className={`bottom-sheet-overlay${approvalSheet ? ' active' : ''}`} onClick={() => setApprovalSheet(null)} />
        <div className={`bottom-sheet-card${approvalSheet ? ' active' : ''}`}>
          <div className="sheet-handle-bar" />
          <button className="btn-sheet-close" onClick={() => setApprovalSheet(null)}><X size={16} /></button>
          <div className="sheet-icon-circle orange-bg"><Check className="icon-orange" /></div>
          <h3 className="sheet-title">อนุมัติคำขอลานี้?</h3>
          <p className="sheet-subtitle">ระบบจะบันทึกและส่งการแจ้งเตือนไปยังผู้ขอลา</p>
          <div className="sheet-summary-box">
            <div className="sheet-sum-row"><span className="lbl">ผู้ขอลา</span><span className="val font-bold">{approvalSheet?.empName}</span></div>
            <div className="sheet-sum-row"><span className="lbl">ประเภทการลา</span><span className="val">{approvalSheet?.leaveType}</span></div>
            <div className="sheet-sum-row"><span className="lbl">ช่วงวัน</span><span className="val">{approvalSheet?.dates}</span></div>
            <div className="sheet-sum-row"><span className="lbl">จำนวนวัน</span><span className="val font-bold orange-txt">{approvalSheet?.days}</span></div>
          </div>
          <div className="sheet-actions-row">
            <button className="btn-sheet-cancel" onClick={() => setApprovalSheet(null)}>ยกเลิก</button>
            <button className="btn-sheet-submit orange" onClick={confirmApprove}>ยืนยันอนุมัติ</button>
          </div>
        </div>

        {/* REJECTION BOTTOM SHEET */}
        <div className={`bottom-sheet-overlay${rejectionSheet ? ' active' : ''}`} onClick={() => setRejectionSheet(null)} />
        <div className={`bottom-sheet-card${rejectionSheet ? ' active' : ''}`}>
          <div className="sheet-handle-bar" />
          <button className="btn-sheet-close" onClick={() => setRejectionSheet(null)}><X size={16} /></button>
          <div className="sheet-icon-circle red-bg"><X className="icon-red" /></div>
          <h3 className="sheet-title">ไม่อนุมัติคำขอลานี้?</h3>
          <p className="sheet-subtitle">โปรดระบุเหตุผลเพื่อแจ้งผู้ขอลาทราบ</p>
          <div className="sheet-summary-box">
            <div className="sheet-sum-row"><span className="lbl">ผู้ขอลา</span><span className="val font-bold">{rejectionSheet?.empName}</span></div>
            <div className="sheet-sum-row"><span className="lbl">ประเภทการลา</span><span className="val">{rejectionSheet?.leaveType}</span></div>
            <div className="sheet-sum-row"><span className="lbl">ช่วงวัน</span><span className="val">{rejectionSheet?.dates}</span></div>
            <div className="sheet-sum-row"><span className="lbl">จำนวนวัน</span><span className="val font-bold red-txt">{rejectionSheet?.days}</span></div>
          </div>
          <div className="form-group-mobile margin-top-sm" style={{ textAlign: 'left' }}>
            <label className="form-label required red-txt">เหตุผลการไม่อนุมัติ <span className="badge-mini red">*จำเป็น</span></label>
            <textarea className="form-textarea error-border" rows={2} placeholder="ระบุเหตุผลที่ไม่อนุมัติเพื่อแจ้งพนักงาน..." value={rejectionReason} onChange={e => setRejectionReason(e.target.value)} />
          </div>
          <div className="sheet-actions-row">
            <button className="btn-sheet-cancel" onClick={() => setRejectionSheet(null)}>ยกเลิก</button>
            <button className="btn-sheet-submit red" onClick={confirmReject}>ยืนยันไม่อนุมัติ</button>
          </div>
        </div>

        {/* APPROVER DETAIL SHEET */}
        <div className={`bottom-sheet-overlay${detailSheet ? ' active' : ''}`} onClick={() => setDetailSheet(null)} />
        <div className={`bottom-sheet-card large-sheet${detailSheet ? ' active' : ''}`}>
          <div className="sheet-handle-bar" />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 className="sheet-title text-left" style={{ marginBottom: 0 }}>รายละเอียดคำขอลา</h3>
            <button className="btn-sheet-close" style={{ position: 'static' }} onClick={() => setDetailSheet(null)}><X size={16} /></button>
          </div>
          <div className="detail-sheet-user-badge">
            <div className="avatar-circle-text orange">{detailSheet?.empName?.charAt(0) || 'ณ'}</div>
            <div>
              <span className="font-bold" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-text-heading)' }}>{detailSheet?.empName}</span>
              <span className="doc-sub">เลขที่ {detailSheet?.docNum}</span>
            </div>
            <span className="status-badge pending badge-right">รออนุมัติ</span>
          </div>
          <div className="sheet-detail-section">
            <h4 className="sec-title"><FileText size={15} /> ข้อมูลการลา</h4>
            <div className="sheet-sum-row"><span className="lbl">ประเภทการลา</span><span className="val font-bold">{detailSheet?.leaveType}</span></div>
            <div className="sheet-sum-row"><span className="lbl">ช่วงวันลา</span><span className="val">{detailSheet?.dates}</span></div>
            <div className="sheet-sum-row"><span className="lbl">จำนวนวัน</span><span className="val font-bold orange-txt">{detailSheet?.days}</span></div>
            <div className="sheet-sum-row"><span className="lbl">วันที่ยื่นเรื่อง</span><span className="val">3 ส.ค. 2569 - 11:01 น.</span></div>
          </div>
          <div className="sheet-detail-section">
            <h4 className="sec-title"><PhoneCall size={15} /> ข้อมูลติดต่อพนักงาน</h4>
            <span className="text-muted-sm">เบอร์ติดต่อเร่งด่วน: {currentUser.phone} (เบอร์ส่วนตัวพนักงาน)</span>
          </div>
          <div className="sheet-actions-row margin-top-md">
            <button className="btn-sheet-submit outline-red" onClick={() => { setDetailSheet(null); setRejectionSheet({ empName: detailSheet?.empName || '', docNum: detailSheet?.docNum || '', leaveType: detailSheet?.leaveType || '', dates: detailSheet?.dates || '', days: detailSheet?.days || '' }) }}>
              <X size={14} /> ไม่อนุมัติ
            </button>
            <button className="btn-sheet-submit orange" onClick={() => { setDetailSheet(null); setApprovalSheet({ empName: detailSheet?.empName || '', docNum: detailSheet?.docNum || '', leaveType: detailSheet?.leaveType || '', dates: detailSheet?.dates || '', days: detailSheet?.days || '' }) }}>
              <Check size={14} /> อนุมัติ
            </button>
          </div>
        </div>

        {/* FILTER DRAWER */}
        <div className={`filter-drawer-overlay${showFilterDrawer ? ' active' : ''}`} onClick={() => setShowFilterDrawer(false)} />
        <aside className={`filter-drawer${showFilterDrawer ? ' active' : ''}`}>
          <div className="drawer-header">
            <h3><SlidersHorizontal size={16} /> ค้นหารายการลา</h3>
            <button className="btn-close-drawer" onClick={() => setShowFilterDrawer(false)}><X size={20} /></button>
          </div>
          <div className="drawer-body">
            <div className="form-group-mobile"><label className="form-label">ค้นหาประเภทการลา</label><input type="text" className="form-input" placeholder="พิมพ์ชื่อหรือรหัสประเภทการลา..." /></div>
            <div className="form-group-mobile">
              <label className="form-label">สถานะเอกสาร</label>
              <select className="form-select" value={filterStatusSelect} onChange={e => setFilterStatusSelect(e.target.value)}>
                <option value="all">ทั้งหมด</option>
                <option value="pending">รออนุมัติ</option>
                <option value="approved">อนุมัติแล้ว</option>
                <option value="rejected">ไม่อนุมัติ</option>
              </select>
            </div>
          </div>
          <div className="drawer-footer">
            <button className="btn-action-cancel" onClick={() => { setFilterStatusSelect('all'); setLeaveFilter('all'); setShowFilterDrawer(false); showToast('ล้างค่าการค้นหาแล้ว') }}>ล้างค่า</button>
            <button className="btn-action-submit orange" onClick={() => { setLeaveFilter(filterStatusSelect as LeaveFilter); setShowFilterDrawer(false); showToast(`ค้นหาสถานะ: ${filterStatusSelect}`) }}>ค้นหา</button>
          </div>
        </aside>

        {/* TOAST */}
        <div className={`toast-notification${toastVisible ? ' show' : ''}`}>
          <Info size={16} />
          <span>{toastMsg}</span>
        </div>

      </div>
    </div>
  )
}
