/* ==========================================================================
   Integrated School Management & Administrative SIS — Application Logic
   Guagua National Colleges | Academic Year 2026-2027
   ========================================================================== */

const DB_KEY = 'gnc_sis_relational_db_v1';

// Fee Configuration Constants (Automated Tuition Calculator Engine)
const FEE_RATES = {
  TUITION_PER_UNIT: 650.00,
  LAB_FEE_PER_LAB_SUBJECT: 1200.00,
  MISC_REGISTRATION: 850.00,
  MISC_LIBRARY: 600.00,
  MISC_MEDICAL_DENTAL: 450.00,
  MISC_ATHLETIC_CULTURAL: 500.00,
  MISC_ID_VALIDATION: 250.00
};

// Initial Relational Database Seed (Normalized 3NF Schema)
function getInitialDatabase() {
  return {
    users: [
      {
        user_id: 'USR-001',
        username: 'admin@gnc.edu.ph',
        password: 'password123',
        role: 'Admin',
        full_name: 'Engr. Clarissa M. David',
        department_or_program: 'Office of the Registrar & Accounting',
        status: 'Active'
      },
      {
        user_id: 'USR-002',
        username: 'faculty.santos@gnc.edu.ph',
        password: 'password123',
        role: 'Faculty',
        full_name: 'Prof. Ramonito V. Santos, MIT',
        department_or_program: 'College of Computer Studies',
        status: 'Active'
      },
      {
        user_id: 'USR-003',
        username: 'faculty.reyes@gnc.edu.ph',
        password: 'password123',
        role: 'Faculty',
        full_name: 'Prof. Marisol D. Reyes, MBA',
        department_or_program: 'General Education & Management',
        status: 'Active'
      },
      {
        user_id: 'USR-004',
        username: '2026-10042@gnc.edu.ph',
        password: 'password123',
        role: 'Student',
        full_name: 'Kent Jun C. Cayanan',
        department_or_program: 'BS Information Technology',
        status: 'Active'
      },
      {
        user_id: 'USR-005',
        username: '2026-10089@gnc.edu.ph',
        password: 'password123',
        role: 'Student',
        full_name: 'Felicity Anne R. Mendoza',
        department_or_program: 'BS Information Technology',
        status: 'Active'
      },
      {
        user_id: 'USR-006',
        username: '2026-10114@gnc.edu.ph',
        password: 'password123',
        role: 'Student',
        full_name: 'Jomar B. Panganiban',
        department_or_program: 'BS Computer Science',
        status: 'Active'
      }
    ],

    students: [
      {
        student_id: '2026-10042',
        user_id: 'USR-004',
        full_name: 'Kent Jun C. Cayanan',
        program: 'BS Information Technology',
        year_level: '3rd Year',
        section_id: 'SEC-BSIT3A',
        email: '2026-10042@gnc.edu.ph',
        contact_no: '0917-482-1904',
        address: 'Sta. Ines, Guagua, Pampanga',
        enrollment_status: 'Enrolled'
      },
      {
        student_id: '2026-10089',
        user_id: 'USR-005',
        full_name: 'Felicity Anne R. Mendoza',
        program: 'BS Information Technology',
        year_level: '3rd Year',
        section_id: 'SEC-BSIT3A',
        email: '2026-10089@gnc.edu.ph',
        contact_no: '0918-903-4421',
        address: 'San Nicolas 1st, Guagua, Pampanga',
        enrollment_status: 'Enrolled'
      },
      {
        student_id: '2026-10114',
        user_id: 'USR-006',
        full_name: 'Jomar B. Panganiban',
        program: 'BS Computer Science',
        year_level: '2nd Year',
        section_id: 'SEC-BSCS2A',
        email: '2026-10114@gnc.edu.ph',
        contact_no: '0926-771-8830',
        address: 'Sto. Cristo, Guagua, Pampanga',
        enrollment_status: 'Enrolled'
      }
    ],

    sections: [
      {
        section_id: 'SEC-BSIT3A',
        section_code: 'BSIT-3A',
        program: 'BS Information Technology',
        year_level: '3rd Year',
        adviser_user_id: 'USR-002',
        school_year: '2026-2027',
        semester: '1st Semester'
      },
      {
        section_id: 'SEC-BSCS2A',
        section_code: 'BSCS-2A',
        program: 'BS Computer Science',
        year_level: '2nd Year',
        adviser_user_id: 'USR-003',
        school_year: '2026-2027',
        semester: '1st Semester'
      }
    ],

    subjects: [
      {
        subject_id: 'SUB-01',
        subject_code: 'CAP-301',
        subject_title: 'Capstone Project and Research 1',
        units: 3,
        has_lab: true
      },
      {
        subject_id: 'SUB-02',
        subject_code: 'DBS-302',
        subject_title: 'Advanced Relational Database Systems',
        units: 3,
        has_lab: true
      },
      {
        subject_id: 'SUB-03',
        subject_code: 'NET-303',
        subject_title: 'Enterprise Networking & Security',
        units: 3,
        has_lab: true
      },
      {
        subject_id: 'SUB-04',
        subject_code: 'SIA-304',
        subject_title: 'Systems Integration and Architecture',
        units: 3,
        has_lab: false
      },
      {
        subject_id: 'SUB-05',
        subject_code: 'GE-108',
        subject_title: 'Technopreneurship & Engineering Ethics',
        units: 3,
        has_lab: false
      }
    ],

    schedules: [
      {
        schedule_id: 'SCH-001',
        section_id: 'SEC-BSIT3A',
        subject_id: 'SUB-01',
        faculty_user_id: 'USR-002',
        day_of_week: 'Mon / Wed',
        time_slot: '08:30 AM - 10:00 AM',
        room: 'CCS Lab 2'
      },
      {
        schedule_id: 'SCH-002',
        section_id: 'SEC-BSIT3A',
        subject_id: 'SUB-02',
        faculty_user_id: 'USR-002',
        day_of_week: 'Mon / Wed',
        time_slot: '10:30 AM - 12:00 PM',
        room: 'CCS Lab 1'
      },
      {
        schedule_id: 'SCH-003',
        section_id: 'SEC-BSIT3A',
        subject_id: 'SUB-03',
        faculty_user_id: 'USR-002',
        day_of_week: 'Tue / Thu',
        time_slot: '01:00 PM - 02:30 PM',
        room: 'NetLab 304'
      },
      {
        schedule_id: 'SCH-004',
        section_id: 'SEC-BSIT3A',
        subject_id: 'SUB-05',
        faculty_user_id: 'USR-003',
        day_of_week: 'Tue / Thu',
        time_slot: '03:00 PM - 04:30 PM',
        room: 'Main Bldg 205'
      },
      {
        schedule_id: 'SCH-005',
        section_id: 'SEC-BSCS2A',
        subject_id: 'SUB-04',
        faculty_user_id: 'USR-003',
        day_of_week: 'Fri',
        time_slot: '09:00 AM - 12:00 PM',
        room: 'Main Bldg 301'
      },
      {
        schedule_id: 'SCH-006',
        section_id: 'SEC-BSCS2A',
        subject_id: 'SUB-05',
        faculty_user_id: 'USR-003',
        day_of_week: 'Fri',
        time_slot: '01:30 PM - 04:30 PM',
        room: 'Main Bldg 205'
      }
    ],

    enrollments: [
      { enrollment_id: 'ENR-1001', student_id: '2026-10042', schedule_id: 'SCH-001', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1002', student_id: '2026-10042', schedule_id: 'SCH-002', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1003', student_id: '2026-10042', schedule_id: 'SCH-003', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1004', student_id: '2026-10042', schedule_id: 'SCH-004', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },

      { enrollment_id: 'ENR-1005', student_id: '2026-10089', schedule_id: 'SCH-001', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1006', student_id: '2026-10089', schedule_id: 'SCH-002', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1007', student_id: '2026-10089', schedule_id: 'SCH-003', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1008', student_id: '2026-10089', schedule_id: 'SCH-004', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },

      { enrollment_id: 'ENR-1009', student_id: '2026-10114', schedule_id: 'SCH-005', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' },
      { enrollment_id: 'ENR-1010', student_id: '2026-10114', schedule_id: 'SCH-006', school_year: '2026-2027', semester: '1st Semester', status: 'Officially Enrolled' }
    ],

    grades: [
      { grade_id: 'GRD-501', enrollment_id: 'ENR-1001', prelim: 1.50, midterm: 1.25, finals: 1.25, final_rating: 1.33, remarks: 'Passed', encoded_by: 'USR-002', updated_at: '2026-11-10 09:15' },
      { grade_id: 'GRD-502', enrollment_id: 'ENR-1002', prelim: 1.75, midterm: 1.50, finals: 1.50, final_rating: 1.58, remarks: 'Passed', encoded_by: 'USR-002', updated_at: '2026-11-10 09:20' },
      { grade_id: 'GRD-503', enrollment_id: 'ENR-1003', prelim: 1.75, midterm: 1.75, finals: null, final_rating: null, remarks: 'In Progress', encoded_by: 'USR-002', updated_at: '2026-11-12 14:05' },
      { grade_id: 'GRD-504', enrollment_id: 'ENR-1004', prelim: 1.25, midterm: 1.25, finals: 1.25, final_rating: 1.25, remarks: 'Passed', encoded_by: 'USR-003', updated_at: '2026-11-14 16:30' },

      { grade_id: 'GRD-505', enrollment_id: 'ENR-1005', prelim: 1.25, midterm: 1.25, finals: 1.00, final_rating: 1.17, remarks: 'Passed', encoded_by: 'USR-002', updated_at: '2026-11-10 09:18' },
      { grade_id: 'GRD-506', enrollment_id: 'ENR-1006', prelim: 1.50, midterm: 1.25, finals: 1.25, final_rating: 1.33, remarks: 'Passed', encoded_by: 'USR-002', updated_at: '2026-11-10 09:22' },
      { grade_id: 'GRD-507', enrollment_id: 'ENR-1007', prelim: 1.50, midterm: 1.50, finals: null, final_rating: null, remarks: 'In Progress', encoded_by: 'USR-002', updated_at: '2026-11-12 14:10' },
      { grade_id: 'GRD-508', enrollment_id: 'ENR-1008', prelim: 1.25, midterm: 1.00, finals: 1.25, final_rating: 1.17, remarks: 'Passed', encoded_by: 'USR-003', updated_at: '2026-11-14 16:32' },

      { grade_id: 'GRD-509', enrollment_id: 'ENR-1009', prelim: 2.00, midterm: 1.75, finals: null, final_rating: null, remarks: 'In Progress', encoded_by: 'USR-003', updated_at: '2026-11-11 11:00' },
      { grade_id: 'GRD-510', enrollment_id: 'ENR-1010', prelim: 1.75, midterm: 1.50, finals: null, final_rating: null, remarks: 'In Progress', encoded_by: 'USR-003', updated_at: '2026-11-11 11:05' }
    ],

    payments: [
      {
        payment_id: 'PAY-9001',
        student_id: '2026-10042',
        or_number: 'OR-2026-08412',
        amount_paid: 8500.00,
        payment_type: 'Downpayment & Prelim Installment',
        payment_date: '2026-08-18',
        recorded_by: 'Engr. Clarissa M. David'
      },
      {
        payment_id: 'PAY-9002',
        student_id: '2026-10042',
        or_number: 'OR-2026-09104',
        amount_paid: 2500.00,
        payment_type: 'Midterm Installment',
        payment_date: '2026-10-05',
        recorded_by: 'Engr. Clarissa M. David'
      },
      {
        payment_id: 'PAY-9003',
        student_id: '2026-10089',
        or_number: 'OR-2026-08455',
        amount_paid: 14050.00,
        payment_type: 'Full Semester Settlement',
        payment_date: '2026-08-20',
        recorded_by: 'Engr. Clarissa M. David'
      },
      {
        payment_id: 'PAY-9004',
        student_id: '2026-10114',
        or_number: 'OR-2026-08510',
        amount_paid: 4000.00,
        payment_type: 'Initial Enrollment Downpayment',
        payment_date: '2026-08-22',
        recorded_by: 'Engr. Clarissa M. David'
      }
    ],

    announcements: [
      {
        announcement_id: 'ANN-01',
        title: 'Final Examination & Grade Encoding Schedule (1st Sem AY 2026–2027)',
        content: 'All faculty members are reminded to encode and finalize Final Term ratings on or before November 28, 2026. Students must settle remaining tuition balances at the Accounting Window prior to downloading their Official Examination Permit.',
        target_role: 'All',
        posted_by: 'Engr. Clarissa M. David',
        created_at: '2026-11-15'
      },
      {
        announcement_id: 'ANN-02',
        title: 'CCS Capstone Colloquium & System Evaluation Dry Run',
        content: 'BSIT-3A and BSCS-2A students enrolled in CAP-301 will present their functional prototypes for ISO/IEC 25010:2023 quality evaluation at CCS Lab 2.',
        target_role: 'Student',
        posted_by: 'Prof. Ramonito V. Santos, MIT',
        created_at: '2026-11-12'
      },
      {
        announcement_id: 'ANN-03',
        title: 'Faculty Submission of Class Records & Rubrics',
        content: 'Please ensure all Prelim, Midterm, and Final grade components follow the standardized 1.00–5.00 Philippine collegiate grading scale.',
        target_role: 'Faculty',
        posted_by: 'Engr. Clarissa M. David',
        created_at: '2026-11-08'
      }
    ]
  };
}

// Application State
let db = loadDatabase();
let currentUser = null;
let authMode = 'login'; // 'login' or 'signup'
let activeTab = 'overview';
let selectedScheduleFilter = '';
let selectedStudentFilter = '';
let schemaInspectorTable = 'students';

function loadDatabase() {
  try {
    const raw = localStorage.getItem(DB_KEY);
    if (!raw) {
      const seed = getInitialDatabase();
      localStorage.setItem(DB_KEY, JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(raw);
  } catch (e) {
    return getInitialDatabase();
  }
}

function saveDatabase() {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
}

function resetDemoDatabase() {
  db = getInitialDatabase();
  saveDatabase();
  showToast('Relational database reset to clean AY 2026-2027 seed state.', 'success');
  render();
}

// ==========================================================================
// RELATIONAL JOIN & AUTOMATED TUITION CALCULATION HELPERS
// ==========================================================================

function formatPHP(amount) {
  return '₱' + Number(amount || 0).toLocaleString('en-PH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function getStudentEnrollmentsExpanded(studentId) {
  return db.enrollments
    .filter(e => e.student_id === studentId)
    .map(enr => {
      const sched = db.schedules.find(s => s.schedule_id === enr.schedule_id);
      const subj = sched ? db.subjects.find(sub => sub.subject_id === sched.subject_id) : null;
      const fac = sched ? db.users.find(u => u.user_id === sched.faculty_user_id) : null;
      const sec = sched ? db.sections.find(sc => sc.section_id === sched.section_id) : null;
      const grd = db.grades.find(g => g.enrollment_id === enr.enrollment_id);
      return {
        ...enr,
        schedule: sched,
        subject: subj,
        faculty: fac,
        section: sec,
        grade: grd
      };
    });
}

// Automated Tuition Calculator Engine (Derived dynamically from relational enrollments + subjects + payments)
function computeStudentAssessment(studentId) {
  const expanded = getStudentEnrollmentsExpanded(studentId);
  let totalUnits = 0;
  let labSubjectsCount = 0;

  expanded.forEach(item => {
    if (item.subject) {
      totalUnits += Number(item.subject.units || 0);
      if (item.subject.has_lab) labSubjectsCount += 1;
    }
  });

  const tuitionFee = totalUnits * FEE_RATES.TUITION_PER_UNIT;
  const laboratoryFee = labSubjectsCount * FEE_RATES.LAB_FEE_PER_LAB_SUBJECT;
  const miscFee = totalUnits > 0
    ? (FEE_RATES.MISC_REGISTRATION +
       FEE_RATES.MISC_LIBRARY +
       FEE_RATES.MISC_MEDICAL_DENTAL +
       FEE_RATES.MISC_ATHLETIC_CULTURAL +
       FEE_RATES.MISC_ID_VALIDATION)
    : 0;

  const totalAssessment = tuitionFee + laboratoryFee + miscFee;
  const studentPayments = db.payments.filter(p => p.student_id === studentId);
  const totalPaid = studentPayments.reduce((sum, p) => sum + Number(p.amount_paid || 0), 0);
  const remainingBalance = Math.max(0, totalAssessment - totalPaid);

  let financialStatus = 'Unassessed';
  if (totalAssessment > 0) {
    if (remainingBalance <= 0) financialStatus = 'Fully Paid';
    else if (totalPaid > 0) financialStatus = 'Partially Paid';
    else financialStatus = 'Unpaid';
  }

  return {
    studentId,
    enrolledCount: expanded.length,
    totalUnits,
    labSubjectsCount,
    tuitionFee,
    laboratoryFee,
    miscFee,
    totalAssessment,
    totalPaid,
    remainingBalance,
    financialStatus,
    payments: studentPayments
  };
}

function computeGWA(studentId) {
  const expanded = getStudentEnrollmentsExpanded(studentId);
  let weightedSum = 0;
  let completedUnits = 0;

  expanded.forEach(item => {
    if (item.grade && item.grade.final_rating !== null && item.grade.final_rating !== '' && item.subject) {
      const rating = Number(item.grade.final_rating);
      const units = Number(item.subject.units);
      if (!isNaN(rating) && rating > 0) {
        weightedSum += rating * units;
        completedUnits += units;
      }
    }
  });

  if (completedUnits === 0) return 'N/A';
  return (weightedSum / completedUnits).toFixed(2);
}

// ==========================================================================
// AUTHENTICATION & NAVIGATION
// ==========================================================================

function switchAuthMode(mode) {
  authMode = mode;
  render();
}

async function handleLogin(event) {
  event.preventDefault();

  const loginInput = document.getElementById('login-username').value.trim().toLowerCase();
  const passwordInput = document.getElementById('login-password').value;

  // Supabase-backed authentication when Supabase is initialized.
  if (typeof supabase !== 'undefined') {
    const { data: users, error } = await supabase
      .from('users')
      .select('user_id, username, role, full_name, department_or_program, status')
      .eq('username', loginInput)
      .eq('password', passwordInput)
      .eq('status', 'Active')
      .limit(1);

    if (error) {
      console.error('Login query error:', error.message);
      alert('Unable to verify credentials right now. Please try again.');
      return;
    }

    if (!users || users.length === 0) {
      alert('Invalid credentials or inactive account.');
      return;
    }

    currentUser = users[0];
    localStorage.setItem('gnci_session_user', JSON.stringify(currentUser));
    renderPortalByRole(currentUser);
    return;
  }

  // Preserve local demo authentication until Supabase is configured.
  const user = db.users.find(
    u => u.username.toLowerCase() === loginInput &&
      u.password === passwordInput &&
      u.status === 'Active'
  );

  if (!user) {
    alert('Invalid credentials or inactive account.');
    return;
  }

  renderPortalByRole(user);
}

function handleSignup(e) {
  e.preventDefault();
  const fullName = document.getElementById('signup-fullname').value.trim();
  const studentId = document.getElementById('signup-studentid').value.trim();
  const program = document.getElementById('signup-program').value;
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value.trim();

  if (!email.endsWith('@gnc.edu.ph')) {
    showToast('Registration requires an official @gnc.edu.ph school Gmail (e.g., delacruz.juan@gnc.edu.ph).', 'error');
    return;
  }

  if (db.users.some(u => u.username.toLowerCase() === email)) {
    showToast('This @gnc.edu.ph Gmail is already registered.', 'error');
    return;
  }

  const newUserId = 'USR-' + (db.users.length + 10);
  const defaultSection = db.sections[0] ? db.sections[0].section_id : 'SEC-BSIT3A';

  db.users.push({
    user_id: newUserId,
    username: email,
    password: password,
    role: 'Student',
    full_name: fullName,
    department_or_program: program,
    status: 'Active'
  });

  db.students.push({
    student_id: studentId,
    user_id: newUserId,
    full_name: fullName,
    program: program,
    year_level: '1st Year',
    section_id: defaultSection,
    email: email,
    contact_no: 'N/A',
    address: 'Guagua, Pampanga',
    enrollment_status: 'Enrolled'
  });

  // Auto-enroll in default section schedules
  const secScheds = db.schedules.filter(sc => sc.section_id === defaultSection);
  secScheds.forEach((sc, idx) => {
    db.enrollments.push({
      enrollment_id: 'ENR-' + (Date.now() + idx).toString().slice(-5),
      student_id: studentId,
      schedule_id: sc.schedule_id,
      school_year: '2026-2027',
      semester: '1st Semester',
      status: 'Officially Enrolled'
    });
  });

  saveDatabase();
  showToast('GNC account created! Please sign in with your @gnc.edu.ph Gmail.', 'success');
  authMode = 'login';
  render();
}

function quickLogin(userId) {
  const user = db.users.find(u => u.user_id === userId);
  if (user) {
    renderPortalByRole(user);
  }
}

function logout() {
  currentUser = null;
  activeTab = 'overview';
  localStorage.removeItem('gnci_session_user');
  closeModal();
  render();
}

function switchTab(tabId) {
  activeTab = tabId;
  render();
}

function getMenuForRole(role) {
  if (role === 'Admin') {
    return [
      { id: 'overview', label: 'Administrative Overview' },
      { id: 'students', label: 'Student Profiles & Sections' },
      { id: 'academics', label: 'Subjects, Schedules & Enrollment' },
      { id: 'tuition', label: 'Tuition Calculator & Payments' },
      { id: 'announcements', label: 'School Announcements' },
      { id: 'database', label: 'Relational DB & ERD Inspector' }
    ];
  }
  if (role === 'Faculty') {
    return [
      { id: 'overview', label: 'Faculty Overview' },
      { id: 'schedules', label: 'Assigned Teaching Loads' },
      { id: 'grades', label: 'Student Grade Encoding' },
      { id: 'announcements', label: 'School Announcements' }
    ];
  }
  return [
    { id: 'overview', label: 'Student Portal Dashboard' },
    { id: 'schedule', label: 'My Class Schedule' },
    { id: 'grades', label: 'My Encoded Grades' },
    { id: 'assessment', label: 'Tuition & Balance Assessment' },
    { id: 'announcements', label: 'School Announcements' }
  ];
}

// ==========================================================================
// MAIN RENDERER
// ==========================================================================

function renderPortalByRole(user) {
  if (!user || !user.role) {
    currentUser = null;
    activeTab = 'overview';
    render();
    return;
  }

  currentUser = user;
  activeTab = 'overview';
  const roleMap = { admin: 'Admin', faculty: 'Faculty', student: 'Student' };
  const normalizedRole = roleMap[String(currentUser.role).trim().toLowerCase()];
  if (!normalizedRole) {
    currentUser = null;
    localStorage.removeItem('gnci_session_user');
    alert('This account has an unsupported portal role.');
    render();
    return;
  }

  currentUser.role = normalizedRole;
  localStorage.setItem('gnci_session_user', JSON.stringify(currentUser));
  showToast(`Authenticated as ${currentUser.full_name} (${currentUser.role})`, 'success');
  render();
}

function renderFacultyPortal(facultyUser) {
  currentUser = facultyUser;
  if (!getMenuForRole('Faculty').some(item => item.id === activeTab)) {
    activeTab = 'overview';
  }
  renderStandardPortal();
}

function renderStudentPortal(studentUser) {
  currentUser = studentUser;
  if (!getMenuForRole('Student').some(item => item.id === activeTab)) {
    activeTab = 'overview';
  }
  renderStandardPortal();
}

function renderAdminPortal(adminUser) {
  currentUser = adminUser;
  const appRoot = document.getElementById('app') || document.body;
  const sections = [
    { id: 'overview', label: 'Dashboard Overview' },
    { id: 'students', label: 'Students & Sections' },
    { id: 'users', label: 'Admin & Faculty Accounts' },
    { id: 'payments', label: 'Tuition & OR Payments' },
    { id: 'announcements', label: 'Announcements' }
  ];

  if (!sections.some(section => section.id === activeTab)) {
    activeTab = 'overview';
  }

  appRoot.innerHTML = `
    <div class="portal-layout admin-portal">
      <aside class="sidebar admin-sidebar">
        <img src="images.jpg" alt="GNC Logo" class="sidebar-logo" />
        <div class="admin-badge">ADMIN PORTAL</div>
        <p class="admin-name">${escapeHtml(adminUser.full_name)}</p>
        <p class="admin-dept text-muted">${escapeHtml(adminUser.department_or_program || 'Administration')}</p>

        <nav class="nav-menu">
          ${sections.map(section => `
            <button type="button" class="${activeTab === section.id ? 'active' : ''}" onclick="showAdminSection('${section.id}')">
              ${section.label}
            </button>
          `).join('')}
          <button type="button" onclick="handleLogout()">Sign Out</button>
        </nav>
      </aside>

      <main class="main-content">
        <header class="topbar">
          <h1>Administrator Workspace</h1>
          <span>Signed in as <strong>${escapeHtml(adminUser.username)}</strong></span>
        </header>
        <section id="admin-workspace">
          <p>Loading ${escapeHtml(activeTab)}...</p>
        </section>
      </main>
    </div>
  `;
  showAdminSection(activeTab);
}

function renderAdminAccounts() {
  const accounts = db.users.filter(user =>
    user.role === 'Admin' || user.role === 'Faculty'
  );

  return `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">Admin & Faculty Accounts</div>
          <div class="text-muted" style="font-size:12px;">Manage institutional account records.</div>
        </div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr><th>User ID</th><th>Name</th><th>Username</th><th>Role</th><th>Status</th></tr></thead>
          <tbody>
            ${accounts.map(user => `
              <tr>
                <td>${escapeHtml(user.user_id)}</td>
                <td>${escapeHtml(user.full_name)}</td>
                <td>${escapeHtml(user.username)}</td>
                <td><span class="badge badge-info">${escapeHtml(user.role)}</span></td>
                <td><span class="badge badge-success">${escapeHtml(user.status)}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAdminWorkspace(sectionId) {
  switch (sectionId) {
    case 'students':
      return renderAdminStudentsLocal();
    case 'users':
      return renderAdminAccounts();
    case 'payments':
      return renderAdminTuitionLocal();
    case 'announcements':
      return renderAnnouncementsModule(true);
    case 'overview':
    default:
      return renderAdminOverviewLocal();
  }
}

async function showAdminSection(section) {
  activeTab = section;
  const workspace = document.getElementById('admin-workspace');
  if (!workspace) return;

  workspace.innerHTML = `<p>Loading ${escapeHtml(section)}...</p>`;

  if (section === 'overview') {
    await renderAdminOverview(workspace);
  } else if (section === 'students') {
    await renderAdminStudents(workspace);
  } else if (section === 'users') {
    await renderAdminUsers(workspace);
  } else if (section === 'payments') {
    await renderAdminPayments(workspace);
  } else if (section === 'announcements') {
    await renderAdminAnnouncements(workspace);
  }
}

function handleLogout() {
  logout();
}

function render() {
  if (!currentUser) {
    const app = document.getElementById('app');
    app.innerHTML = renderLoginView();
    return;
  }

  if (currentUser.role === 'Admin') {
    renderAdminPortal(currentUser);
  } else if (currentUser.role === 'Faculty') {
    renderFacultyPortal(currentUser);
  } else {
    renderStudentPortal(currentUser);
  }
}

function renderStandardPortal() {
  const app = document.getElementById('app');
  if (!currentUser) {
    app.innerHTML = renderLoginView();
    return;
  }

  const menu = getMenuForRole(currentUser.role);
  if (!menu.some(m => m.id === activeTab)) {
    activeTab = menu[0].id;
  }

  const activeMenuObj = menu.find(m => m.id === activeTab);

  app.innerHTML = `
    <div class="workspace">
      <aside class="sidebar">
        <div class="sidebar-brand">
          <img src="images.jpg" alt="GNC Logo" class="sidebar-logo" />
          <div>
            <div class="sys-acronym">GUAGUA NATIONAL COLLEGES</div>
            <div class="sys-name">SIS &amp; Admin Hub</div>
            <div class="ay-tag">AY 2026–2027 • 1ST SEM</div>
          </div>
        </div>

        <nav class="sidebar-nav">
          <div class="nav-section-label">${currentUser.role} Modules</div>
          ${menu.map(item => `
            <button class="nav-item ${activeTab === item.id ? 'active' : ''}" onclick="switchTab('${item.id}')">
              <span>${item.label}</span>
              ${activeTab === item.id ? '<span class="mono" style="font-size:10px;color:var(--brand-accent);">■</span>' : ''}
            </button>
          `).join('')}
        </nav>

        <div class="sidebar-footer">
          <div class="user-chip-role">${currentUser.role} Session</div>
          <div class="user-chip-name">${escapeHtml(currentUser.full_name)}</div>
          <div class="user-chip-id">${escapeHtml(currentUser.username)}</div>
          <div class="flex gap-2">
            <button class="btn btn-sm" style="flex:1;background:#064E3B;color:#FFFFFF;border-color:#047857;" onclick="logout()">Sign Out</button>
            <button class="btn btn-sm" style="background:#064E3B;color:var(--brand-accent);border-color:#047857;" title="Reset Seed Database" onclick="resetDemoDatabase()">Reset DB</button>
          </div>
        </div>
      </aside>

      <div class="main-area">
        <header class="topbar">
          <div>
            <div class="topbar-title">${activeMenuObj ? activeMenuObj.label : 'Dashboard'}</div>
          </div>
          <div class="flex items-center gap-3">
            <span class="badge badge-info">RBAC: ${currentUser.role}</span>
            <span class="mono text-muted" style="font-size:11.5px;">${escapeHtml(currentUser.department_or_program)}</span>
          </div>
        </header>

        <main class="content-body">
          ${renderActiveModule()}
        </main>
      </div>
    </div>
  `;
}

function renderActiveModule() {
  const role = currentUser.role;

  if (role === 'Admin') {
    switch (activeTab) {
      case 'overview': return renderAdminOverviewLocal();
      case 'students': return renderAdminStudentsLocal();
      case 'academics': return renderAdminAcademics();
      case 'tuition': return renderAdminTuitionLocal();
      case 'announcements': return renderAnnouncementsModule(true);
      case 'database': return renderDatabaseInspector();
    }
  }

  if (role === 'Faculty') {
    switch (activeTab) {
      case 'overview': return renderFacultyOverview();
      case 'schedules': return renderFacultySchedules();
      case 'grades': return renderFacultyGradeEncoding();
      case 'announcements': return renderAnnouncementsModule(false);
    }
  }

  if (role === 'Student') {
    switch (activeTab) {
      case 'overview': return renderStudentOverview();
      case 'schedule': return renderStudentSchedule();
      case 'grades': return renderStudentGrades();
      case 'assessment': return renderStudentAssessment();
      case 'announcements': return renderAnnouncementsModule(false);
    }
  }

  return '';
}

// ==========================================================================
// LOGIN VIEW
// ==========================================================================

function renderLoginView() {
  return `
    <div class="login-shell">
      <section class="login-hero">
        <div>
          <div class="institution-tag">
            <img src="images.jpg" alt="GNC Logo" class="institution-logo" />
            <div>
              <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--brand-accent);">GUAGUA NATIONAL COLLEGES • EST. 1918</div>
              <div style="font-size:11.5px;color:#E5E7EB;">Guagua, Pampanga, Philippines • Academic Year 2026–2027</div>
            </div>
          </div>

          <h1>Integrated School Management and Administrative Student Information System (SIS)</h1>
          <p>
            A centralized relational platform uniting student enrollment, class section scheduling,
            faculty grade encoding, and automated tuition fee assessment with manual payment auditing.
          </p>

          <div class="framework-grid">
            <div class="framework-card">
              <div class="fw-title">ISO/IEC 25010:2023</div>
              <div class="fw-desc">Engineered for functional suitability, usability, reliability, and security.</div>
            </div>
            <div class="framework-card">
              <div class="fw-title">DeLone &amp; McLean IS</div>
              <div class="fw-desc">Eliminates disconnected spreadsheets with normalized single-source relational records.</div>
            </div>
            <div class="framework-card">
              <div class="fw-title">RBAC Architecture</div>
              <div class="fw-desc">Dedicated self-service portals for Administrators, Faculty, and Students.</div>
            </div>
          </div>
        </div>

        <div style="border-top:1px solid #047857;padding-top:14px;font-size:11.5px;color:#D1D5DB;">
          System Scope Note: Administrative &amp; Student Information Portal (Non-LMS). Financial balances update upon manual OR payment logging by accounting personnel.
        </div>
      </section>

      <section class="login-form-pane">
        <div class="login-box">
          <div class="auth-tabs">
            <button type="button" class="auth-tab ${authMode === 'login' ? 'active' : ''}" onclick="switchAuthMode('login')">Sign In</button>
            <button type="button" class="auth-tab ${authMode === 'signup' ? 'active' : ''}" onclick="switchAuthMode('signup')">Sign Up</button>
          </div>

          ${authMode === 'login' ? `
            <h2>Institutional Portal Sign In</h2>
            <p class="text-muted mb-4" style="font-size:12px;">Enter your GNC school-created Gmail and password.</p>

            <form onsubmit="handleLogin(event)">
              <div class="form-group">
                <label>Gmail</label>
                <input id="login-username" type="email" placeholder="delacruz.juan@gnc.edu.ph" required />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input id="login-password" type="password" placeholder="Enter your password" required />
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;padding:10px;margin-top:4px;">
                Sign In
              </button>
            </form>
          ` : `
            <h2>Create Student Portal Account</h2>
            <p class="text-muted mb-4" style="font-size:12px;">Register using your official <strong>@gnc.edu.ph</strong> Gmail address.</p>

            <form onsubmit="handleSignup(event)">
              <div class="form-group">
                <label>Full Name</label>
                <input id="signup-fullname" type="text" placeholder="Juan Dela Cruz" required />
              </div>
              <div class="form-grid-2">
                <div class="form-group">
                  <label>Student Number (8 Digits)</label>
                  <input id="signup-studentid" type="text" placeholder="20277789" pattern="[0-9-]{8,10}" title="Please enter an 8-digit student number (e.g. 20277789)" required />
                </div>
                <div class="form-group">
                  <label>Program</label>
                  <select id="signup-program">
                    <option value="BS Information Technology">BSIT</option>
                    <option value="BS Computer Science">BSCS</option>
                    <option value="BS Accountancy">BSA</option>
                    <option value="BS Business Administration">BSBA</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>Gmail</label>
                <input id="signup-email" type="email" placeholder="delacruz.juan@gnc.edu.ph" required />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input id="signup-password" type="password" placeholder="Create a password" required />
              </div>
              <button type="submit" class="btn btn-primary" style="width:100%;padding:10px;margin-top:4px;">
                Register GNC Account
              </button>
            </form>
          `}
        </div>
      </section>
    </div>
  `;
}

// ==========================================================================
// ADMINISTRATOR DASHBOARD & CRUD MODULES
// ==========================================================================

async function renderAdminOverview(container) {
  if (typeof supabase === 'undefined') {
    container.innerHTML = renderAdminOverviewLocal();
    return;
  }

  let studentsRes, usersRes, paymentsRes, announcementsRes;
  try {
    [studentsRes, usersRes, paymentsRes, announcementsRes] = await Promise.all([
      supabase.from('students').select('student_id', { count: 'exact', head: true }),
      supabase.from('users').select('user_id', { count: 'exact', head: true }),
      supabase.from('payments').select('amount_paid'),
      supabase.from('announcements').select('announcement_id', { count: 'exact', head: true })
    ]);
  } catch (error) {
    console.error('Admin overview query error:', error);
    container.innerHTML = '<p class="error-text">Failed to load dashboard data.</p>';
    return;
  }

  const queryError = [studentsRes, usersRes, paymentsRes, announcementsRes].find(result => result.error);
  if (queryError) {
    console.error('Admin overview query error:', queryError.error.message);
    container.innerHTML = '<p class="error-text">Failed to load dashboard data.</p>';
    return;
  }

  const totalCollected = (paymentsRes.data || []).reduce(
    (sum, row) => sum + Number(row.amount_paid || 0),
    0
  );

  container.innerHTML = `
    <div class="stats-grid">
      <div class="stat-card"><h3>Total Students</h3><p class="stat-value">${studentsRes.count ?? 0}</p></div>
      <div class="stat-card"><h3>System Accounts</h3><p class="stat-value">${usersRes.count ?? 0}</p></div>
      <div class="stat-card"><h3>Total OR Collections</h3><p class="stat-value">${formatPHP(totalCollected)}</p></div>
      <div class="stat-card"><h3>Active Announcements</h3><p class="stat-value">${announcementsRes.count ?? 0}</p></div>
    </div>
  `;
}

async function renderAdminStudents(container) {
  if (typeof supabase === 'undefined') {
    container.innerHTML = renderAdminStudentsLocal();
    return;
  }

  const [{ data: students, error: stuErr }, { data: sections, error: secErr }] =
    await Promise.all([
      supabase
        .from('students')
        .select('student_id, full_name, program, year_level, section_id, email, enrollment_status')
        .order('student_id', { ascending: true }),
      supabase.from('sections').select('section_id, section_code')
    ]);

  if (stuErr || secErr) {
    container.innerHTML = '<p class="error-text">Failed to load students or sections.</p>';
    return;
  }

  const sectionMap = Object.fromEntries((sections || []).map(s => [s.section_id, s.section_code]));
  const sectionOptions = (sections || [])
    .map(s => `<option value="${escapeHtml(s.section_id)}">${escapeHtml(s.section_code)}</option>`)
    .join('');

  const rowsHtml = (students || []).map(st => `
    <tr>
      <td>${escapeHtml(st.student_id)}</td>
      <td>${escapeHtml(st.full_name)}</td>
      <td>${escapeHtml(st.program)}</td>
      <td>${escapeHtml(st.year_level)}</td>
      <td>${escapeHtml(sectionMap[st.section_id] || st.section_id || 'Unassigned')}</td>
      <td>${escapeHtml(st.email)}</td>
      <td>${escapeHtml(st.enrollment_status)}</td>
      <td><button type="button" class="btn btn-sm btn-danger" onclick="deleteStudentRecord('${escapeHtml(st.student_id)}')">Delete</button></td>
    </tr>
  `).join('');

  container.innerHTML = `
    <h2>Students & Sections</h2>
    <form id="add-student-form" class="admin-form" onsubmit="handleAddStudent(event)">
      <input type="text" id="stu-id" placeholder="8-digit Student ID (e.g. 20261043)" required />
      <input type="text" id="stu-name" placeholder="Full Name" required />
      <input type="text" id="stu-program" placeholder="Program (e.g. BS Information Technology)" required />
      <input type="text" id="stu-year" placeholder="Year Level (e.g. 3rd Year)" required />
      <select id="stu-section"><option value="">Select Section</option>${sectionOptions}</select>
      <input type="email" id="stu-email" placeholder="student@gnc.edu.ph" required />
      <button type="submit" class="btn btn-primary">Add Student</button>
    </form>
    <table class="data-table">
      <thead><tr><th>Student ID</th><th>Full Name</th><th>Program</th><th>Year</th><th>Section</th><th>Email</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${rowsHtml || '<tr><td colspan="8">No student records found.</td></tr>'}</tbody>
    </table>
  `;
}

async function handleAddStudent(event) {
  event.preventDefault();
  const newStudent = {
    student_id: document.getElementById('stu-id').value.trim(),
    full_name: document.getElementById('stu-name').value.trim(),
    program: document.getElementById('stu-program').value.trim(),
    year_level: document.getElementById('stu-year').value.trim(),
    section_id: document.getElementById('stu-section').value || null,
    email: document.getElementById('stu-email').value.trim().toLowerCase(),
    enrollment_status: 'Enrolled'
  };

  if (typeof supabase === 'undefined') {
    if (db.students.some(student => student.student_id === newStudent.student_id)) {
      alert(`Student ${newStudent.student_id} already exists.`);
      return;
    }
    db.students.push({
      ...newStudent,
      user_id: null,
      contact_no: 'N/A',
      address: 'Guagua, Pampanga'
    });
    saveDatabase();
    await renderAdminStudents(document.getElementById('admin-workspace'));
    return;
  }

  const { error } = await supabase.from('students').insert([newStudent]);
  if (error) {
    alert(`Error adding student: ${error.message}`);
    return;
  }
  await renderAdminStudents(document.getElementById('admin-workspace'));
}

async function deleteStudentRecord(studentId) {
  if (!confirm(`Delete student ${studentId}?`)) return;

  if (typeof supabase === 'undefined') {
    const enrollmentIds = new Set(
      db.enrollments
        .filter(enrollment => enrollment.student_id === studentId)
        .map(enrollment => enrollment.enrollment_id)
    );
    db.students = db.students.filter(student => student.student_id !== studentId);
    db.enrollments = db.enrollments.filter(enrollment => enrollment.student_id !== studentId);
    db.grades = db.grades.filter(grade => !enrollmentIds.has(grade.enrollment_id));
    saveDatabase();
    await renderAdminStudents(document.getElementById('admin-workspace'));
    return;
  }

  const { error } = await supabase.from('students').delete().eq('student_id', studentId);
  if (error) {
    alert(`Error deleting student: ${error.message}`);
    return;
  }
  await renderAdminStudents(document.getElementById('admin-workspace'));
}

async function renderAdminUsers(container) {
  if (typeof supabase === 'undefined') {
    const accounts = db.users.filter(user =>
      user.role === 'Admin' || user.role === 'Faculty'
    );
    container.innerHTML = `
      <h2>Admin & Faculty Accounts</h2>
      <form id="add-account-form" class="admin-form" onsubmit="handleCreateStaffAccount(event)">
        <input type="text" id="acc-username" placeholder="Username or @gnc.edu.ph email" required />
        <input type="password" id="acc-password" placeholder="Temporary Password" required />
        <select id="acc-role" required><option value="Admin">Admin</option><option value="Faculty">Faculty</option></select>
        <input type="text" id="acc-fullname" placeholder="Full Name" required />
        <input type="text" id="acc-dept" placeholder="Department or Program" required />
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      <table class="data-table">
        <thead><tr><th>User ID</th><th>Username / Email</th><th>Role</th><th>Full Name</th><th>Department / Program</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>${accounts.map(acc => `
          <tr>
            <td>${escapeHtml(acc.user_id)}</td><td>${escapeHtml(acc.username)}</td><td>${escapeHtml(acc.role)}</td>
            <td>${escapeHtml(acc.full_name)}</td><td>${escapeHtml(acc.department_or_program || '—')}</td><td>${escapeHtml(acc.status)}</td>
            <td><button type="button" class="btn btn-sm" onclick="toggleAccountStatus('${escapeHtml(acc.user_id)}', '${escapeHtml(acc.status)}')">${acc.status === 'Active' ? 'Deactivate' : 'Activate'}</button></td>
          </tr>
        `).join('') || '<tr><td colspan="7">No admin or faculty accounts found.</td></tr>'}</tbody>
      </table>
    `;
    return;
  }

  const { data: accounts, error } = await supabase
    .from('users')
    .select('user_id, username, role, full_name, department_or_program, status')
    .in('role', ['Admin', 'Faculty'])
    .order('user_id', { ascending: true });

  if (error) {
    container.innerHTML = '<p class="error-text">Failed to load admin and faculty accounts.</p>';
    return;
  }

  container.innerHTML = `
    <h2>Admin & Faculty Accounts</h2>
    <form id="add-account-form" class="admin-form" onsubmit="handleCreateStaffAccount(event)">
      <input type="text" id="acc-username" placeholder="Username or @gnc.edu.ph email" required />
      <input type="password" id="acc-password" placeholder="Temporary Password" required />
      <select id="acc-role" required>
        <option value="Admin">Admin</option>
        <option value="Faculty">Faculty</option>
      </select>
      <input type="text" id="acc-fullname" placeholder="Full Name" required />
      <input type="text" id="acc-dept" placeholder="Department or Program" required />
      <button type="submit" class="btn btn-primary">Create Account</button>
    </form>
    <table class="data-table">
      <thead><tr><th>User ID</th><th>Username / Email</th><th>Role</th><th>Full Name</th><th>Department / Program</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>
        ${(accounts || []).map(acc => `
          <tr>
            <td>${escapeHtml(acc.user_id)}</td>
            <td>${escapeHtml(acc.username)}</td>
            <td>${escapeHtml(acc.role)}</td>
            <td>${escapeHtml(acc.full_name)}</td>
            <td>${escapeHtml(acc.department_or_program || '—')}</td>
            <td>${escapeHtml(acc.status)}</td>
            <td><button type="button" class="btn btn-sm" onclick="toggleAccountStatus('${escapeHtml(acc.user_id)}', '${escapeHtml(acc.status)}')">${acc.status === 'Active' ? 'Deactivate' : 'Activate'}</button></td>
          </tr>
        `).join('') || '<tr><td colspan="7">No admin or faculty accounts found.</td></tr>'}
      </tbody>
    </table>
  `;
}

async function handleCreateStaffAccount(event) {
  event.preventDefault();
  const selectedRole = document.getElementById('acc-role').value;
  const prefix = selectedRole === 'Admin' ? 'ADM' : 'FAC';
  const newAccount = {
    user_id: `${prefix}-${Date.now().toString().slice(-6)}`,
    username: document.getElementById('acc-username').value.trim().toLowerCase(),
    password: document.getElementById('acc-password').value,
    role: selectedRole,
    full_name: document.getElementById('acc-fullname').value.trim(),
    department_or_program: document.getElementById('acc-dept').value.trim(),
    status: 'Active'
  };

  if (typeof supabase === 'undefined') {
    if (db.users.some(user => user.username.toLowerCase() === newAccount.username)) {
      alert(`The username ${newAccount.username} is already registered.`);
      return;
    }
    db.users.push(newAccount);
    saveDatabase();
    showToast('Staff account created.', 'success');
    await renderAdminUsers(document.getElementById('admin-workspace'));
    return;
  }

  const { data: existingAccounts, error: lookupError } = await supabase
    .from('users')
    .select('user_id')
    .eq('username', newAccount.username)
    .limit(1);
  if (lookupError) {
    alert(`Error checking account: ${lookupError.message}`);
    return;
  }
  if (existingAccounts && existingAccounts.length > 0) {
    alert(`The username ${newAccount.username} is already registered.`);
    return;
  }

  const { error } = await supabase.from('users').insert([newAccount]);
  if (error) {
    alert(`Error creating account: ${error.message}`);
    return;
  }
  await renderAdminUsers(document.getElementById('admin-workspace'));
}

async function toggleAccountStatus(userId, currentStatus) {
  const nextStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';

  if (typeof supabase === 'undefined') {
    const account = db.users.find(user => user.user_id === userId);
    if (account) account.status = nextStatus;
    saveDatabase();
    await renderAdminUsers(document.getElementById('admin-workspace'));
    return;
  }

  const { error } = await supabase
    .from('users')
    .update({ status: nextStatus })
    .eq('user_id', userId);

  if (error) {
    alert(`Error updating status: ${error.message}`);
    return;
  }
  await renderAdminUsers(document.getElementById('admin-workspace'));
}

async function renderAdminPayments(container) {
  if (typeof supabase === 'undefined') {
    container.innerHTML = renderAdminTuitionLocal();
    return;
  }

  const { data: payments, error } = await supabase
    .from('payments')
    .select('payment_id, student_id, or_number, amount_paid, payment_type, payment_date, recorded_by')
    .order('payment_date', { ascending: false });

  if (error) {
    container.innerHTML = '<p class="error-text">Failed to load payments.</p>';
    return;
  }

  const rowsHtml = (payments || []).map(p => `
    <tr>
      <td>${escapeHtml(p.or_number)}</td>
      <td>${escapeHtml(p.student_id)}</td>
      <td>${escapeHtml(p.payment_type)}</td>
      <td>${formatPHP(p.amount_paid)}</td>
      <td>${escapeHtml(p.payment_date)}</td>
      <td>${escapeHtml(p.recorded_by)}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <h2>Tuition & Official Receipt (OR) Payments</h2>
    <form id="add-payment-form" class="admin-form" onsubmit="handleAddPayment(event)">
      <input type="text" id="pay-or" placeholder="OR Number (e.g. OR-2026-0001)" required />
      <input type="text" id="pay-student-id" placeholder="Student ID (e.g. 20261042)" required />
      <input type="text" id="pay-type" placeholder="Payment Type (e.g. Tuition Fee)" required />
      <input type="number" step="0.01" min="0" id="pay-amount" placeholder="Amount Paid" required />
      <input type="date" id="pay-date" value="${new Date().toISOString().split('T')[0]}" required />
      <button type="submit" class="btn btn-primary">Record Payment</button>
    </form>
    <table class="data-table">
      <thead><tr><th>OR Number</th><th>Student ID</th><th>Payment Type</th><th>Amount Paid</th><th>Date</th><th>Recorded By</th></tr></thead>
      <tbody>${rowsHtml || '<tr><td colspan="6">No payments recorded yet.</td></tr>'}</tbody>
    </table>
  `;
}

async function handleAddPayment(event) {
  event.preventDefault();
  const paymentRow = {
    payment_id: `PAY-${Date.now()}`,
    or_number: document.getElementById('pay-or').value.trim(),
    student_id: document.getElementById('pay-student-id').value.trim(),
    payment_type: document.getElementById('pay-type').value.trim(),
    amount_paid: parseFloat(document.getElementById('pay-amount').value),
    payment_date: document.getElementById('pay-date').value,
    recorded_by: currentUser ? currentUser.full_name : 'Admin'
  };

  if (typeof supabase === 'undefined') {
    if (!db.students.some(student => student.student_id === paymentRow.student_id)) {
      alert(`Student ${paymentRow.student_id} was not found.`);
      return;
    }
    db.payments.push(paymentRow);
    saveDatabase();
    await renderAdminPayments(document.getElementById('admin-workspace'));
    return;
  }

  const { error } = await supabase.from('payments').insert([paymentRow]);
  if (error) {
    alert(`Error saving payment: ${error.message}`);
    return;
  }
  await renderAdminPayments(document.getElementById('admin-workspace'));
}

async function renderAdminAnnouncements(container) {
  if (typeof supabase === 'undefined') {
    container.innerHTML = renderAnnouncementsModule(true);
    return;
  }

  const { data: posts, error } = await supabase
    .from('announcements')
    .select('announcement_id, title, content, target_role, posted_by, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    container.innerHTML = '<p class="error-text">Failed to load announcements.</p>';
    return;
  }

  container.innerHTML = `
    <h2>Announcements</h2>
    <form id="add-announcement-form" class="admin-form" onsubmit="handlePublishAnnouncement(event)">
      <input type="text" id="ann-title" placeholder="Announcement Title" required />
      <select id="ann-role" required>
        <option value="All">All Users</option>
        <option value="Faculty">Faculty Only</option>
        <option value="Student">Students Only</option>
      </select>
      <textarea id="ann-content" placeholder="Write announcement details..." rows="3" required></textarea>
      <button type="submit" class="btn btn-primary">Post Announcement</button>
    </form>
    <table class="data-table">
      <thead><tr><th>Title</th><th>Content</th><th>Target Role</th><th>Posted By</th><th>Date</th><th>Action</th></tr></thead>
      <tbody>
        ${(posts || []).map(post => `
          <tr>
            <td>${escapeHtml(post.title)}</td>
            <td>${escapeHtml(post.content)}</td>
            <td>${escapeHtml(post.target_role)}</td>
            <td>${escapeHtml(post.posted_by)}</td>
            <td>${escapeHtml(post.created_at)}</td>
            <td><button type="button" class="btn btn-sm btn-danger" onclick="deleteAnnouncement('${escapeHtml(post.announcement_id)}')">Delete</button></td>
          </tr>
        `).join('') || '<tr><td colspan="6">No announcements posted yet.</td></tr>'}
      </tbody>
    </table>
  `;
}

async function handlePublishAnnouncement(event) {
  event.preventDefault();
  const newPost = {
    announcement_id: `ANN-${Date.now()}`,
    title: document.getElementById('ann-title').value.trim(),
    content: document.getElementById('ann-content').value.trim(),
    target_role: document.getElementById('ann-role').value,
    posted_by: currentUser ? currentUser.full_name : 'Admin',
    created_at: new Date().toISOString().split('T')[0]
  };

  if (typeof supabase === 'undefined') {
    db.announcements.unshift(newPost);
    saveDatabase();
    await renderAdminAnnouncements(document.getElementById('admin-workspace'));
    return;
  }

  const { error } = await supabase.from('announcements').insert([newPost]);
  if (error) {
    alert(`Error publishing announcement: ${error.message}`);
    return;
  }
  await renderAdminAnnouncements(document.getElementById('admin-workspace'));
}

function renderAdminOverviewLocal() {
  const totalStudents = db.students.length;
  const totalSchedules = db.schedules.length;
  let totalAssessed = 0;
  let totalCollected = 0;

  db.students.forEach(st => {
    const calc = computeStudentAssessment(st.student_id);
    totalAssessed += calc.totalAssessment;
    totalCollected += calc.totalPaid;
  });

  const totalReceivables = Math.max(0, totalAssessed - totalCollected);

  return `
    <div class="delimitation-strip">
      <strong>System Operational Scope:</strong> Centralized administrative hub for student profiles, section scheduling, automated tuition assessment, and manual OR payment logging.
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Enrolled Students</div>
        <div class="kpi-value">${totalStudents}</div>
        <div class="kpi-sub">Across ${db.sections.length} active class sections</div>
      </div>
      <div class="kpi-card accent">
        <div class="kpi-label">Active Class Schedules</div>
        <div class="kpi-value">${totalSchedules}</div>
        <div class="kpi-sub">${db.subjects.length} cataloged subjects</div>
      </div>
      <div class="kpi-card success">
        <div class="kpi-label">Total Tuition Collected</div>
        <div class="kpi-value">${formatPHP(totalCollected)}</div>
        <div class="kpi-sub">${db.payments.length} logged official receipts</div>
      </div>
      <div class="kpi-card danger">
        <div class="kpi-label">Outstanding Receivables</div>
        <div class="kpi-value">${formatPHP(totalReceivables)}</div>
        <div class="kpi-sub">Out of ${formatPHP(totalAssessed)} assessed</div>
      </div>
    </div>

    <div class="two-col-grid">
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Student Enrollment &amp; Financial Ledger Summary</span>
          <button class="btn btn-sm btn-primary" onclick="switchTab('tuition')">Manage Tuition &amp; Payments</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Full Name</th>
                <th>Section</th>
                <th class="text-right">Units</th>
                <th class="text-right">Assessed</th>
                <th class="text-right">Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${db.students.map(st => {
                const sec = db.sections.find(s => s.section_id === st.section_id);
                const fin = computeStudentAssessment(st.student_id);
                const badgeCls = fin.financialStatus === 'Fully Paid' ? 'badge-success' :
                                 fin.financialStatus === 'Partially Paid' ? 'badge-warning' : 'badge-danger';
                return `
                  <tr>
                    <td class="mono font-semibold">${escapeHtml(st.student_id)}</td>
                    <td>${escapeHtml(st.full_name)}</td>
                    <td class="mono">${sec ? escapeHtml(sec.section_code) : 'Unassigned'}</td>
                    <td class="text-right mono">${fin.totalUnits}</td>
                    <td class="text-right mono">${formatPHP(fin.totalAssessment)}</td>
                    <td class="text-right mono font-semibold">${formatPHP(fin.remainingBalance)}</td>
                    <td><span class="badge ${badgeCls}">${fin.financialStatus}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Recent Manual Payment Logs (OR)</span>
          <button class="btn btn-sm btn-accent" onclick="openPaymentModal()">+ Log Payment</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>OR Number</th>
                <th>Student</th>
                <th class="text-right">Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${db.payments.slice().reverse().slice(0, 6).map(p => {
                const st = db.students.find(s => s.student_id === p.student_id);
                return `
                  <tr>
                    <td class="mono font-semibold">${escapeHtml(p.or_number)}</td>
                    <td>
                      <div>${st ? escapeHtml(st.full_name) : p.student_id}</div>
                      <div class="mono text-muted" style="font-size:10.5px;">${escapeHtml(p.payment_type)}</div>
                    </td>
                    <td class="text-right mono font-semibold" style="color:var(--status-success);">${formatPHP(p.amount_paid)}</td>
                    <td class="mono">${escapeHtml(p.payment_date)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// --- Admin CRUD: Students & Sections ---
function renderAdminStudentsLocal() {
  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Student Master Records &amp; Section Assignment</span>
        <div class="flex gap-2">
          <button class="btn btn-sm" onclick="openSectionModal()">+ Add Class Section</button>
          <button class="btn btn-sm btn-primary" onclick="openStudentModal()">+ Register New Student</button>
        </div>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Program &amp; Year</th>
              <th>Assigned Section</th>
              <th>Contact / Address</th>
              <th>Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.students.map(st => {
              const sec = db.sections.find(s => s.section_id === st.section_id);
              return `
                <tr>
                  <td class="mono font-semibold">${escapeHtml(st.student_id)}</td>
                  <td>
                    <div class="font-semibold">${escapeHtml(st.full_name)}</div>
                    <div class="mono text-muted" style="font-size:10.5px;">${escapeHtml(st.email)}</div>
                  </td>
                  <td>
                    <div>${escapeHtml(st.program)}</div>
                    <div class="text-muted" style="font-size:11px;">${escapeHtml(st.year_level)}</div>
                  </td>
                  <td>
                    <select style="width:auto;padding:3px 6px;font-size:11.5px;" onchange="reassignStudentSection('${st.student_id}', this.value)">
                      <option value="">-- Unassigned --</option>
                      ${db.sections.map(s => `
                        <option value="${s.section_id}" ${st.section_id === s.section_id ? 'selected' : ''}>
                          ${escapeHtml(s.section_code)} (${escapeHtml(s.program)})
                        </option>
                      `).join('')}
                    </select>
                  </td>
                  <td>
                    <div class="mono" style="font-size:11.5px;">${escapeHtml(st.contact_no)}</div>
                    <div class="text-muted" style="font-size:11px;">${escapeHtml(st.address)}</div>
                  </td>
                  <td><span class="badge badge-success">${escapeHtml(st.enrollment_status)}</span></td>
                  <td class="text-right">
                    <button class="btn btn-sm" onclick="openStudentModal('${st.student_id}')">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStudent('${st.student_id}')">Delete</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Academic Class Sections (AY 2026–2027)</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Section ID</th>
              <th>Section Code</th>
              <th>Program</th>
              <th>Year Level</th>
              <th>Class Adviser</th>
              <th class="text-right">Enrolled Count</th>
            </tr>
          </thead>
          <tbody>
            ${db.sections.map(sec => {
              const adv = db.users.find(u => u.user_id === sec.adviser_user_id);
              const count = db.students.filter(s => s.section_id === sec.section_id).length;
              return `
                <tr>
                  <td class="mono">${escapeHtml(sec.section_id)}</td>
                  <td class="mono font-semibold">${escapeHtml(sec.section_code)}</td>
                  <td>${escapeHtml(sec.program)}</td>
                  <td>${escapeHtml(sec.year_level)}</td>
                  <td>${adv ? escapeHtml(adv.full_name) : 'N/A'}</td>
                  <td class="text-right mono font-semibold">${count}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function reassignStudentSection(studentId, newSectionId) {
  const st = db.students.find(s => s.student_id === studentId);
  if (!st) return;
  st.section_id = newSectionId;

  db.enrollments = db.enrollments.filter(e => e.student_id !== studentId);
  const sectionSchedules = db.schedules.filter(sc => sc.section_id === newSectionId);
  sectionSchedules.forEach((sc, idx) => {
    const newEnrId = 'ENR-' + (Date.now() + idx).toString().slice(-5);
    db.enrollments.push({
      enrollment_id: newEnrId,
      student_id: studentId,
      schedule_id: sc.schedule_id,
      school_year: '2026-2027',
      semester: '1st Semester',
      status: 'Officially Enrolled'
    });
  });

  saveDatabase();
  showToast(`Assigned ${st.full_name} to new section and recalculated subject load & tuition.`, 'success');
  render();
}

function openStudentModal(studentId = null) {
  const existing = studentId ? db.students.find(s => s.student_id === studentId) : null;
  openModal(
    existing ? `Edit Student Profile: ${existing.student_id}` : 'Register New Student Profile',
    `
      <form id="student-form" onsubmit="saveStudentForm(event, '${studentId || ''}')">
        <div class="form-grid-2">
          <div class="form-group">
            <label>Student Number (PK)</label>
            <input name="student_id" value="${existing ? escapeHtml(existing.student_id) : '2026-' + Math.floor(10200 + Math.random()*800)}" ${existing ? 'readonly' : 'required'} />
          </div>
          <div class="form-group">
            <label>Assigned Class Section</label>
            <select name="section_id" required>
              ${db.sections.map(sec => `
                <option value="${sec.section_id}" ${existing && existing.section_id === sec.section_id ? 'selected' : ''}>
                  ${escapeHtml(sec.section_code)} — ${escapeHtml(sec.program)}
                </option>
              `).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Full Name (Last, First, M.I.)</label>
          <input name="full_name" value="${existing ? escapeHtml(existing.full_name) : ''}" placeholder="e.g., Maria Clara S. Alonzo" required />
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label>Degree Program</label>
            <select name="program">
              <option value="BS Information Technology" ${existing && existing.program === 'BS Information Technology' ? 'selected' : ''}>BS Information Technology</option>
              <option value="BS Computer Science" ${existing && existing.program === 'BS Computer Science' ? 'selected' : ''}>BS Computer Science</option>
              <option value="BS Accountancy" ${existing && existing.program === 'BS Accountancy' ? 'selected' : ''}>BS Accountancy</option>
              <option value="BS Business Administration" ${existing && existing.program === 'BS Business Administration' ? 'selected' : ''}>BS Business Administration</option>
            </select>
          </div>
          <div class="form-group">
            <label>Year Level</label>
            <select name="year_level">
              ${['1st Year', '2nd Year', '3rd Year', '4th Year'].map(yr => `
                <option value="${yr}" ${existing && existing.year_level === yr ? 'selected' : ''}>${yr}</option>
              `).join('')}
            </select>
          </div>
        </div>
        <div class="form-grid-2">
          <div class="form-group">
            <label>Institutional Email</label>
            <input name="email" type="email" value="${existing ? escapeHtml(existing.email) : ''}" placeholder="student@gnc.edu.ph" required />
          </div>
          <div class="form-group">
            <label>Contact Number</label>
            <input name="contact_no" value="${existing ? escapeHtml(existing.contact_no) : '0917-000-0000'}" required />
          </div>
        </div>
        <div class="form-group">
          <label>Home Address</label>
          <input name="address" value="${existing ? escapeHtml(existing.address) : ''}" placeholder="Barangay, Municipality, Province" required />
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('student-form').requestSubmit()">Save Student Record</button>
    `
  );
}

function saveStudentForm(e, editId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  if (editId) {
    const st = db.students.find(s => s.student_id === editId);
    if (st) {
      const sectionChanged = st.section_id !== data.section_id;
      Object.assign(st, data);
      const usr = db.users.find(u => u.user_id === st.user_id);
      if (usr) {
        usr.full_name = data.full_name;
        usr.username = data.email;
        usr.department_or_program = data.program;
      }
      if (sectionChanged) {
        reassignStudentSection(editId, data.section_id);
        closeModal();
        return;
      }
    }
    showToast('Student profile updated.', 'success');
  } else {
    if (db.students.some(s => s.student_id === data.student_id)) {
      showToast('Student ID already exists in database.', 'error');
      return;
    }
    const newUserId = 'USR-' + (db.users.length + 10);
    db.users.push({
      user_id: newUserId,
      username: data.email,
      password: 'password123',
      role: 'Student',
      full_name: data.full_name,
      department_or_program: data.program,
      status: 'Active'
    });
    db.students.push({
      ...data,
      user_id: newUserId,
      enrollment_status: 'Enrolled'
    });
    const secScheds = db.schedules.filter(sc => sc.section_id === data.section_id);
    secScheds.forEach((sc, idx) => {
      db.enrollments.push({
        enrollment_id: 'ENR-' + (Date.now() + idx).toString().slice(-5),
        student_id: data.student_id,
        schedule_id: sc.schedule_id,
        school_year: '2026-2027',
        semester: '1st Semester',
        status: 'Officially Enrolled'
      });
    });
    showToast(`Registered ${data.full_name} and auto-assessed tuition based on section subjects.`, 'success');
  }

  saveDatabase();
  closeModal();
  render();
}

function deleteStudent(studentId) {
  const st = db.students.find(s => s.student_id === studentId);
  if (!st) return;
  db.students = db.students.filter(s => s.student_id !== studentId);
  db.enrollments = db.enrollments.filter(e => e.student_id !== studentId);
  db.payments = db.payments.filter(p => p.student_id !== studentId);
  db.users = db.users.filter(u => u.user_id !== st.user_id);
  saveDatabase();
  showToast(`Deleted student ${studentId} and cascaded related enrollments/payments.`, 'success');
  render();
}

function openSectionModal() {
  const facultyUsers = db.users.filter(u => u.role === 'Faculty');
  openModal(
    'Create New Class Section',
    `
      <form id="section-form" onsubmit="saveSectionForm(event)">
        <div class="form-grid-2">
          <div class="form-group">
            <label>Section Code</label>
            <input name="section_code" placeholder="e.g., BSIT-4A" required />
          </div>
          <div class="form-group">
            <label>Year Level</label>
            <select name="year_level">
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Program</label>
          <input name="program" value="BS Information Technology" required />
        </div>
        <div class="form-group">
          <label>Class Adviser (Faculty FK)</label>
          <select name="adviser_user_id">
            ${facultyUsers.map(f => `<option value="${f.user_id}">${escapeHtml(f.full_name)}</option>`).join('')}
          </select>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('section-form').requestSubmit()">Create Section</button>
    `
  );
}

function saveSectionForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  const id = 'SEC-' + data.section_code.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  db.sections.push({
    section_id: id,
    section_code: data.section_code,
    program: data.program,
    year_level: data.year_level,
    adviser_user_id: data.adviser_user_id,
    school_year: '2026-2027',
    semester: '1st Semester'
  });
  saveDatabase();
  closeModal();
  showToast(`Class section ${data.section_code} created.`, 'success');
  render();
}

// --- Admin CRUD: Subjects, Class Schedules & Enrollments ---
function renderAdminAcademics() {
  return `
    <div class="two-col-grid">
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Master Class Schedules &amp; Faculty Loads</span>
          <button class="btn btn-sm btn-primary" onclick="openScheduleModal()">+ Assign Class Schedule</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Subject</th>
                <th>Assigned Faculty</th>
                <th>Day &amp; Time</th>
                <th>Room</th>
                <th class="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              ${db.schedules.map(sc => {
                const sec = db.sections.find(s => s.section_id === sc.section_id);
                const sub = db.subjects.find(s => s.subject_id === sc.subject_id);
                const fac = db.users.find(u => u.user_id === sc.faculty_user_id);
                return `
                  <tr>
                    <td class="mono font-semibold">${sec ? escapeHtml(sec.section_code) : sc.section_id}</td>
                    <td>
                      <div class="mono font-semibold">${sub ? escapeHtml(sub.subject_code) : ''}</div>
                      <div style="font-size:11.5px;">${sub ? escapeHtml(sub.subject_title) : ''}</div>
                    </td>
                    <td>${fac ? escapeHtml(fac.full_name) : 'Unassigned'}</td>
                    <td class="mono" style="font-size:11.5px;">
                      <div>${escapeHtml(sc.day_of_week)}</div>
                      <div class="text-muted">${escapeHtml(sc.time_slot)}</div>
                    </td>
                    <td class="mono">${escapeHtml(sc.room)}</td>
                    <td class="text-right">
                      <button class="btn btn-sm btn-danger" onclick="deleteSchedule('${sc.schedule_id}')">Remove</button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Subject Catalog (Tuition Unit Basis)</span>
          <button class="btn btn-sm" onclick="openSubjectModal()">+ Add Subject</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course Title</th>
                <th class="text-center">Units</th>
                <th class="text-center">Lab Fee</th>
              </tr>
            </thead>
            <tbody>
              ${db.subjects.map(sub => `
                <tr>
                  <td class="mono font-semibold">${escapeHtml(sub.subject_code)}</td>
                  <td>${escapeHtml(sub.subject_title)}</td>
                  <td class="text-center mono font-semibold">${sub.units}</td>
                  <td class="text-center">
                    ${sub.has_lab ? '<span class="badge badge-info">With Lab</span>' : '<span class="badge badge-neutral">Lecture</span>'}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Individual Student Subject Enrollments</span>
        <button class="btn btn-sm btn-accent" onclick="openEnrollmentModal()">+ Enroll Student in Subject</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Enrollment ID</th>
              <th>Student</th>
              <th>Subject</th>
              <th>Section</th>
              <th>Schedule</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${db.enrollments.map(enr => {
              const st = db.students.find(s => s.student_id === enr.student_id);
              const sc = db.schedules.find(s => s.schedule_id === enr.schedule_id);
              const sub = sc ? db.subjects.find(s => s.subject_id === sc.subject_id) : null;
              const sec = sc ? db.sections.find(s => s.section_id === sc.section_id) : null;
              return `
                <tr>
                  <td class="mono">${escapeHtml(enr.enrollment_id)}</td>
                  <td>${st ? escapeHtml(st.full_name) : enr.student_id} <span class="mono text-muted">(${enr.student_id})</span></td>
                  <td class="mono font-semibold">${sub ? `${escapeHtml(sub.subject_code)} — ${escapeHtml(sub.subject_title)} (${sub.units}u)` : ''}</td>
                  <td class="mono">${sec ? escapeHtml(sec.section_code) : ''}</td>
                  <td class="mono" style="font-size:11.5px;">${sc ? `${escapeHtml(sc.day_of_week)} ${escapeHtml(sc.time_slot)}` : ''}</td>
                  <td class="text-right">
                    <button class="btn btn-sm btn-danger" onclick="dropEnrollment('${enr.enrollment_id}')">Drop</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openSubjectModal() {
  openModal(
    'Add Subject to Curriculum Catalog',
    `
      <form id="subject-form" onsubmit="saveSubjectForm(event)">
        <div class="form-grid-2">
          <div class="form-group">
            <label>Subject Code</label>
            <input name="subject_code" placeholder="e.g., WEB-305" required />
          </div>
          <div class="form-group">
            <label>Credit Units</label>
            <input name="units" type="number" min="1" max="6" value="3" required />
          </div>
        </div>
        <div class="form-group">
          <label>Descriptive Subject Title</label>
          <input name="subject_title" placeholder="e.g., Full-Stack Web Application Development" required />
        </div>
        <div class="form-group">
          <label>Laboratory Requirement (Adds ${formatPHP(FEE_RATES.LAB_FEE_PER_LAB_SUBJECT)} Lab Fee)</label>
          <select name="has_lab">
            <option value="true">Yes — With Computer/Science Laboratory</option>
            <option value="false">No — Pure Lecture</option>
          </select>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('subject-form').requestSubmit()">Save Subject</button>
    `
  );
}

function saveSubjectForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  db.subjects.push({
    subject_id: 'SUB-' + (db.subjects.length + 10),
    subject_code: data.subject_code.toUpperCase(),
    subject_title: data.subject_title,
    units: Number(data.units),
    has_lab: data.has_lab === 'true'
  });
  saveDatabase();
  closeModal();
  showToast(`Added subject ${data.subject_code.toUpperCase()}.`, 'success');
  render();
}

function openScheduleModal() {
  const facultyUsers = db.users.filter(u => u.role === 'Faculty');
  openModal(
    'Create Class Schedule & Assign Faculty',
    `
      <form id="schedule-form" onsubmit="saveScheduleForm(event)">
        <div class="form-grid-2">
          <div class="form-group">
            <label>Class Section</label>
            <select name="section_id" required>
              ${db.sections.map(s => `<option value="${s.section_id}">${escapeHtml(s.section_code)}</option>`).join('')}
            </select>
          </div>
          <div class="form-group">
            <label>Subject</label>
            <select name="subject_id" required>
              ${db.subjects.map(s => `<option value="${s.subject_id}">${escapeHtml(s.subject_code)} — ${escapeHtml(s.subject_title)}</option>`).join('')}
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Assigned Faculty Instructor</label>
          <select name="faculty_user_id" required>
            ${facultyUsers.map(f => `<option value="${f.user_id}">${escapeHtml(f.full_name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-grid-3">
          <div class="form-group">
            <label>Days</label>
            <input name="day_of_week" value="Mon / Wed" required />
          </div>
          <div class="form-group">
            <label>Time Slot</label>
            <input name="time_slot" value="01:00 PM - 02:30 PM" required />
          </div>
          <div class="form-group">
            <label>Room</label>
            <input name="room" value="CCS Lab 1" required />
          </div>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('schedule-form').requestSubmit()">Save Schedule</button>
    `
  );
}

function saveScheduleForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  db.schedules.push({
    schedule_id: 'SCH-' + Date.now().toString().slice(-4),
    ...data
  });
  saveDatabase();
  closeModal();
  showToast('New class schedule created and assigned to faculty.', 'success');
  render();
}

function deleteSchedule(scheduleId) {
  db.schedules = db.schedules.filter(s => s.schedule_id !== scheduleId);
  db.enrollments = db.enrollments.filter(e => e.schedule_id !== scheduleId);
  saveDatabase();
  showToast('Schedule removed and affected student assessments updated.', 'success');
  render();
}

function openEnrollmentModal() {
  openModal(
    'Enroll Student in Class Schedule',
    `
      <form id="enrollment-form" onsubmit="saveEnrollmentForm(event)">
        <div class="form-group">
          <label>Select Student</label>
          <select name="student_id" required>
            ${db.students.map(st => `<option value="${st.student_id}">${escapeHtml(st.student_id)} — ${escapeHtml(st.full_name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Select Class Schedule</label>
          <select name="schedule_id" required>
            ${db.schedules.map(sc => {
              const sec = db.sections.find(s => s.section_id === sc.section_id);
              const sub = db.subjects.find(s => s.subject_id === sc.subject_id);
              return `<option value="${sc.schedule_id}">[${sec ? sec.section_code : ''}] ${sub ? sub.subject_code : ''} - ${sub ? sub.subject_title : ''} (${sc.day_of_week} ${sc.time_slot})</option>`;
            }).join('')}
          </select>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('enrollment-form').requestSubmit()">Confirm Enrollment</button>
    `
  );
}

function saveEnrollmentForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  const duplicate = db.enrollments.some(
    enr => enr.student_id === data.student_id && enr.schedule_id === data.schedule_id
  );
  if (duplicate) {
    showToast('Student is already enrolled in this class schedule.', 'error');
    return;
  }

  db.enrollments.push({
    enrollment_id: 'ENR-' + Date.now().toString().slice(-5),
    student_id: data.student_id,
    schedule_id: data.schedule_id,
    school_year: '2026-2027',
    semester: '1st Semester',
    status: 'Officially Enrolled'
  });
  saveDatabase();
  closeModal();
  showToast('Subject enrolled. Tuition assessment automatically recalculated.', 'success');
  render();
}

function dropEnrollment(enrollmentId) {
  db.enrollments = db.enrollments.filter(e => e.enrollment_id !== enrollmentId);
  db.grades = db.grades.filter(g => g.enrollment_id !== enrollmentId);
  saveDatabase();
  showToast('Subject dropped and student tuition recalculated.', 'success');
  render();
}

// --- Admin CRUD: Automated Tuition Calculator & Manual Payment Logging ---
function renderAdminTuitionLocal() {
  return `
    <div class="panel">
      <div class="panel-header">
        <div>
          <span class="panel-title">Automated Tuition Fee Assessment &amp; Balance Auditing</span>
          <div class="text-muted" style="font-size:11.5px;">
            Formula: (${formatPHP(FEE_RATES.TUITION_PER_UNIT)}/unit) + (${formatPHP(FEE_RATES.LAB_FEE_PER_LAB_SUBJECT)}/lab subject) + (${formatPHP(2650)} standard misc fees) − Logged OR Payments
          </div>
        </div>
        <button class="btn btn-accent" onclick="openPaymentModal()">+ Record Manual Payment (OR)</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th class="text-center">Units / Labs</th>
              <th class="text-right">Tuition Fee</th>
              <th class="text-right">Lab &amp; Misc</th>
              <th class="text-right">Total Assessment</th>
              <th class="text-right">Total Paid</th>
              <th class="text-right">Remaining Balance</th>
              <th>Status</th>
              <th class="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${db.students.map(st => {
              const fin = computeStudentAssessment(st.student_id);
              const badgeCls = fin.financialStatus === 'Fully Paid' ? 'badge-success' :
                               fin.financialStatus === 'Partially Paid' ? 'badge-warning' : 'badge-danger';
              return `
                <tr>
                  <td class="mono font-semibold">${escapeHtml(st.student_id)}</td>
                  <td>${escapeHtml(st.full_name)}</td>
                  <td class="text-center mono">${fin.totalUnits}u / ${fin.labSubjectsCount} lab</td>
                  <td class="text-right mono">${formatPHP(fin.tuitionFee)}</td>
                  <td class="text-right mono">${formatPHP(fin.laboratoryFee + fin.miscFee)}</td>
                  <td class="text-right mono font-semibold">${formatPHP(fin.totalAssessment)}</td>
                  <td class="text-right mono" style="color:var(--status-success);">${formatPHP(fin.totalPaid)}</td>
                  <td class="text-right mono font-bold" style="color:${fin.remainingBalance > 0 ? 'var(--status-danger)' : 'var(--status-success)'};">
                    ${formatPHP(fin.remainingBalance)}
                  </td>
                  <td><span class="badge ${badgeCls}">${fin.financialStatus}</span></td>
                  <td class="text-right">
                    <button class="btn btn-sm" onclick="openAssessmentSlipModal('${st.student_id}')">Assessment Form</button>
                    <button class="btn btn-sm btn-primary" onclick="openPaymentModal('${st.student_id}')">Log OR</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Official Receipt (OR) Manual Payment Ledger</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Official Receipt #</th>
              <th>Student</th>
              <th>Payment Description</th>
              <th>Date Logged</th>
              <th>Cashier / Admin</th>
              <th class="text-right">Amount Paid</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${db.payments.slice().reverse().map(p => {
              const st = db.students.find(s => s.student_id === p.student_id);
              return `
                <tr>
                  <td class="mono">${escapeHtml(p.payment_id)}</td>
                  <td class="mono font-semibold">${escapeHtml(p.or_number)}</td>
                  <td>${st ? escapeHtml(st.full_name) : p.student_id} <span class="mono text-muted">(${p.student_id})</span></td>
                  <td>${escapeHtml(p.payment_type)}</td>
                  <td class="mono">${escapeHtml(p.payment_date)}</td>
                  <td>${escapeHtml(p.recorded_by)}</td>
                  <td class="text-right mono font-semibold" style="color:var(--status-success);">${formatPHP(p.amount_paid)}</td>
                  <td class="text-right">
                    <button class="btn btn-sm btn-danger" onclick="voidPayment('${p.payment_id}')">Void</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openPaymentModal(preselectStudentId = '') {
  const targetId = preselectStudentId || (db.students[0] ? db.students[0].student_id : '');
  const calc = targetId ? computeStudentAssessment(targetId) : null;

  openModal(
    'Record Manual Cashier Payment (Official Receipt)',
    `
      <form id="payment-form" onsubmit="savePaymentForm(event)">
        <div class="form-group">
          <label>Select Student Account</label>
          <select name="student_id" id="pay-student-select" onchange="updatePaymentPreview(this.value)" required>
            ${db.students.map(st => {
              const fin = computeStudentAssessment(st.student_id);
              return `<option value="${st.student_id}" ${st.student_id === targetId ? 'selected' : ''}>
                ${escapeHtml(st.student_id)} — ${escapeHtml(st.full_name)} (Balance: ${formatPHP(fin.remainingBalance)})
              </option>`;
            }).join('')}
          </select>
        </div>

        <div id="payment-balance-banner" class="delimitation-strip" style="margin-bottom:12px;">
          Current Remaining Balance: <strong class="mono">${calc ? formatPHP(calc.remainingBalance) : '₱0.00'}</strong>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label>Official Receipt (OR) Number</label>
            <input name="or_number" value="OR-2026-${Math.floor(10000 + Math.random()*89999)}" required />
          </div>
          <div class="form-group">
            <label>Amount Paid (PHP)</label>
            <input name="amount_paid" type="number" step="0.01" min="1" value="${calc && calc.remainingBalance > 0 ? calc.remainingBalance.toFixed(2) : '2500.00'}" required />
          </div>
        </div>

        <div class="form-grid-2">
          <div class="form-group">
            <label>Payment Classification</label>
            <select name="payment_type">
              <option value="Downpayment & Prelim Installment">Downpayment &amp; Prelim Installment</option>
              <option value="Midterm Installment">Midterm Installment</option>
              <option value="Final Examination Balance Settlement">Final Examination Balance Settlement</option>
              <option value="Full Semester Cash Payment">Full Semester Cash Payment</option>
            </select>
          </div>
          <div class="form-group">
            <label>Payment Date</label>
            <input name="payment_date" type="date" value="2026-11-17" required />
          </div>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('payment-form').requestSubmit()">Post Official Receipt</button>
    `
  );
}

function updatePaymentPreview(studentId) {
  const calc = computeStudentAssessment(studentId);
  const banner = document.getElementById('payment-balance-banner');
  if (banner) {
    banner.innerHTML = `Current Remaining Balance: <strong class="mono">${formatPHP(calc.remainingBalance)}</strong>`;
  }
}

function savePaymentForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());

  db.payments.push({
    payment_id: 'PAY-' + Date.now().toString().slice(-5),
    student_id: data.student_id,
    or_number: data.or_number,
    amount_paid: parseFloat(data.amount_paid),
    payment_type: data.payment_type,
    payment_date: data.payment_date,
    recorded_by: currentUser.full_name
  });

  saveDatabase();
  closeModal();
  showToast(`Posted ${data.or_number} (${formatPHP(data.amount_paid)}). Student balance updated.`, 'success');
  render();
}

function voidPayment(paymentId) {
  db.payments = db.payments.filter(p => p.payment_id !== paymentId);
  saveDatabase();
  showToast('Payment receipt voided and account balance recalculated.', 'success');
  render();
}

// ==========================================================================
// FACULTY DASHBOARD & GRADE ENCODING MODULES
// ==========================================================================

function renderFacultyOverview() {
  const mySchedules = db.schedules.filter(s => s.faculty_user_id === currentUser.user_id);
  const myScheduleIds = mySchedules.map(s => s.schedule_id);
  const myEnrollments = db.enrollments.filter(e => myScheduleIds.includes(e.schedule_id));

  let gradedCount = 0;
  myEnrollments.forEach(enr => {
    const grd = db.grades.find(g => g.enrollment_id === enr.enrollment_id);
    if (grd && grd.final_rating !== null && grd.final_rating !== '') gradedCount++;
  });

  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Assigned Teaching Loads</div>
        <div class="kpi-value">${mySchedules.length}</div>
        <div class="kpi-sub">Active subjects this semester</div>
      </div>
      <div class="kpi-card accent">
        <div class="kpi-label">Total Handled Students</div>
        <div class="kpi-value">${myEnrollments.length}</div>
        <div class="kpi-sub">Across assigned class sections</div>
      </div>
      <div class="kpi-card success">
        <div class="kpi-label">Finalized Ratings</div>
        <div class="kpi-value">${gradedCount} / ${myEnrollments.length}</div>
        <div class="kpi-sub">Submitted to Registrar DB</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">Academic Term</div>
        <div class="kpi-value" style="font-size:17px;padding-top:4px;">2026–2027</div>
        <div class="kpi-sub">1st Semester • Grading Open</div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">My Assigned Teaching Schedule</span>
        <button class="btn btn-sm btn-primary" onclick="switchTab('grades')">Open Grade Encoding Sheet</button>
      </div>
      ${renderFacultyScheduleTable(mySchedules)}
    </div>
  `;
}

function renderFacultySchedules() {
  const mySchedules = db.schedules.filter(s => s.faculty_user_id === currentUser.user_id);
  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Official Faculty Teaching Load — AY 2026–2027</span>
      </div>
      ${renderFacultyScheduleTable(mySchedules)}
    </div>
  `;
}

function renderFacultyScheduleTable(schedules) {
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Schedule ID</th>
            <th>Section</th>
            <th>Subject Code</th>
            <th>Subject Title</th>
            <th>Day &amp; Time</th>
            <th>Room</th>
            <th class="text-center">Class Size</th>
            <th class="text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          ${schedules.map(sc => {
            const sec = db.sections.find(s => s.section_id === sc.section_id);
            const sub = db.subjects.find(s => s.subject_id === sc.subject_id);
            const count = db.enrollments.filter(e => e.schedule_id === sc.schedule_id).length;
            return `
              <tr>
                <td class="mono">${escapeHtml(sc.schedule_id)}</td>
                <td class="mono font-semibold">${sec ? escapeHtml(sec.section_code) : ''}</td>
                <td class="mono font-semibold">${sub ? escapeHtml(sub.subject_code) : ''}</td>
                <td>${sub ? escapeHtml(sub.subject_title) : ''}</td>
                <td class="mono">${escapeHtml(sc.day_of_week)} • ${escapeHtml(sc.time_slot)}</td>
                <td class="mono">${escapeHtml(sc.room)}</td>
                <td class="text-center mono font-semibold">${count}</td>
                <td class="text-right">
                  <button class="btn btn-sm btn-primary" onclick="openGradeSheetForSchedule('${sc.schedule_id}')">Encode Grades</button>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function openGradeSheetForSchedule(scheduleId) {
  selectedScheduleFilter = scheduleId;
  activeTab = 'grades';
  render();
}

function renderFacultyGradeEncoding() {
  const mySchedules = db.schedules.filter(s => s.faculty_user_id === currentUser.user_id);
  if (!mySchedules.length) {
    return `<div class="panel"><div class="panel-body">No teaching schedules assigned to your faculty account yet.</div></div>`;
  }

  if (!selectedScheduleFilter || !mySchedules.some(s => s.schedule_id === selectedScheduleFilter)) {
    selectedScheduleFilter = mySchedules[0].schedule_id;
  }

  const activeSched = mySchedules.find(s => s.schedule_id === selectedScheduleFilter);
  const activeSubj = db.subjects.find(s => s.subject_id === activeSched.subject_id);
  const activeSec = db.sections.find(s => s.section_id === activeSched.section_id);
  const classEnrollments = db.enrollments.filter(e => e.schedule_id === activeSched.schedule_id);

  return `
    <div class="panel">
      <div class="panel-header">
        <div class="flex items-center gap-3">
          <span class="panel-title">Digital Grade Encoding Module</span>
          <select style="width:auto;font-weight:600;" onchange="selectedScheduleFilter=this.value;render();">
            ${mySchedules.map(sc => {
              const sec = db.sections.find(s => s.section_id === sc.section_id);
              const sub = db.subjects.find(s => s.subject_id === sc.subject_id);
              return `<option value="${sc.schedule_id}" ${sc.schedule_id === selectedScheduleFilter ? 'selected' : ''}>
                [${sec ? sec.section_code : ''}] ${sub ? sub.subject_code : ''} — ${sub ? sub.subject_title : ''}
              </option>`;
            }).join('')}
          </select>
        </div>
        <span class="mono text-muted" style="font-size:11.5px;">Scale: 1.00 (Highest) to 3.00 (Passing) • 5.00 (Failed)</span>
      </div>

      <div class="panel-body" style="padding-bottom:0;">
        <div class="delimitation-strip">
          <strong>Class Sheet:</strong> ${activeSec ? activeSec.section_code : ''} |
          <strong>Subject:</strong> ${activeSubj ? `${activeSubj.subject_code} (${activeSubj.subject_title})` : ''} |
          <strong>Schedule:</strong> ${activeSched.day_of_week} ${activeSched.time_slot} (${activeSched.room})
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Full Name</th>
              <th style="width:100px;">Prelim</th>
              <th style="width:100px;">Midterm</th>
              <th style="width:100px;">Finals</th>
              <th class="text-center">Computed Final</th>
              <th>Remarks</th>
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            ${classEnrollments.map(enr => {
              const st = db.students.find(s => s.student_id === enr.student_id);
              const grd = db.grades.find(g => g.enrollment_id === enr.enrollment_id) || {
                prelim: '', midterm: '', finals: '', final_rating: null, remarks: 'In Progress'
              };
              const remarkCls = grd.remarks === 'Passed' ? 'badge-success' :
                                grd.remarks === 'Failed' ? 'badge-danger' : 'badge-warning';

              return `
                <tr>
                  <td class="mono font-semibold">${escapeHtml(enr.student_id)}</td>
                  <td class="font-semibold">${st ? escapeHtml(st.full_name) : enr.student_id}</td>
                  <td>
                    <input id="grd-pre-${enr.enrollment_id}" type="number" step="0.25" min="1.00" max="5.00"
                      value="${grd.prelim !== null && grd.prelim !== '' ? grd.prelim : ''}" placeholder="1.00" />
                  </td>
                  <td>
                    <input id="grd-mid-${enr.enrollment_id}" type="number" step="0.25" min="1.00" max="5.00"
                      value="${grd.midterm !== null && grd.midterm !== '' ? grd.midterm : ''}" placeholder="1.00" />
                  </td>
                  <td>
                    <input id="grd-fin-${enr.enrollment_id}" type="number" step="0.25" min="1.00" max="5.00"
                      value="${grd.finals !== null && grd.finals !== '' ? grd.finals : ''}" placeholder="1.00" />
                  </td>
                  <td class="text-center mono font-bold" style="font-size:13.5px;">
                    ${grd.final_rating !== null && grd.final_rating !== '' ? Number(grd.final_rating).toFixed(2) : '—'}
                  </td>
                  <td><span class="badge ${remarkCls}">${escapeHtml(grd.remarks)}</span></td>
                  <td class="text-right">
                    <button class="btn btn-sm btn-primary" onclick="saveEncodedGrade('${enr.enrollment_id}')">Save Rating</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function saveEncodedGrade(enrollmentId) {
  const preVal = document.getElementById(`grd-pre-${enrollmentId}`).value;
  const midVal = document.getElementById(`grd-mid-${enrollmentId}`).value;
  const finVal = document.getElementById(`grd-fin-${enrollmentId}`).value;

  const prelim = preVal !== '' ? parseFloat(preVal) : null;
  const midterm = midVal !== '' ? parseFloat(midVal) : null;
  const finals = finVal !== '' ? parseFloat(finVal) : null;

  let final_rating = null;
  let remarks = 'In Progress';

  if (prelim !== null && midterm !== null && finals !== null) {
    final_rating = parseFloat(((prelim + midterm + finals) / 3).toFixed(2));
    remarks = final_rating <= 3.00 ? 'Passed' : 'Failed';
  }

  let grd = db.grades.find(g => g.enrollment_id === enrollmentId);
  if (!grd) {
    grd = {
      grade_id: 'GRD-' + Date.now().toString().slice(-5),
      enrollment_id: enrollmentId
    };
    db.grades.push(grd);
  }

  grd.prelim = prelim;
  grd.midterm = midterm;
  grd.finals = finals;
  grd.final_rating = final_rating;
  grd.remarks = remarks;
  grd.encoded_by = currentUser.user_id;
  grd.updated_at = '2026-11-17 10:06';

  saveDatabase();
  showToast('Student grade record saved to centralized database.', 'success');
  render();
}

// ==========================================================================
// STUDENT SELF-SERVICE PORTAL MODULES
// ==========================================================================

function getLoggedInStudent() {
  return db.students.find(s => s.user_id === currentUser.user_id) || db.students[0];
}

function renderStudentOverview() {
  const student = getLoggedInStudent();
  const section = db.sections.find(s => s.section_id === student.section_id);
  const fin = computeStudentAssessment(student.student_id);
  const gwa = computeGWA(student.student_id);
  const expanded = getStudentEnrollmentsExpanded(student.student_id);

  return `
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">Student Number &amp; Section</div>
        <div class="kpi-value" style="font-size:18px;">${escapeHtml(student.student_id)}</div>
        <div class="kpi-sub">${section ? escapeHtml(section.section_code) : 'Unassigned'} • ${escapeHtml(student.year_level)}</div>
      </div>
      <div class="kpi-card accent">
        <div class="kpi-label">Enrolled Academic Load</div>
        <div class="kpi-value">${fin.totalUnits} Units</div>
        <div class="kpi-sub">${fin.enrolledCount} registered subjects</div>
      </div>
      <div class="kpi-card success">
        <div class="kpi-label">Cumulative GWA (Encoded)</div>
        <div class="kpi-value">${gwa}</div>
        <div class="kpi-sub">Philippine Collegiate Scale</div>
      </div>
      <div class="kpi-card ${fin.remainingBalance > 0 ? 'danger' : 'success'}">
        <div class="kpi-label">Remaining Tuition Balance</div>
        <div class="kpi-value">${formatPHP(fin.remainingBalance)}</div>
        <div class="kpi-sub">Status: ${fin.financialStatus}</div>
      </div>
    </div>

    <div class="two-col-grid">
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Current Class Schedule &amp; Grade Snapshot</span>
          <button class="btn btn-sm btn-primary" onclick="switchTab('grades')">Full Grade Report</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Schedule &amp; Room</th>
                <th>Instructor</th>
                <th class="text-center">Final</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${expanded.map(item => {
                const grd = item.grade;
                const rating = grd && grd.final_rating !== null ? Number(grd.final_rating).toFixed(2) : '—';
                const rem = grd ? grd.remarks : 'In Progress';
                const badgeCls = rem === 'Passed' ? 'badge-success' : rem === 'Failed' ? 'badge-danger' : 'badge-warning';
                return `
                  <tr>
                    <td>
                      <div class="mono font-semibold">${item.subject ? escapeHtml(item.subject.subject_code) : ''}</div>
                      <div style="font-size:11.5px;">${item.subject ? escapeHtml(item.subject.subject_title) : ''}</div>
                    </td>
                    <td class="mono" style="font-size:11.5px;">
                      <div>${item.schedule ? escapeHtml(item.schedule.day_of_week) : ''}</div>
                      <div class="text-muted">${item.schedule ? `${escapeHtml(item.schedule.time_slot)} (${escapeHtml(item.schedule.room)})` : ''}</div>
                    </td>
                    <td style="font-size:12px;">${item.faculty ? escapeHtml(item.faculty.full_name) : ''}</td>
                    <td class="text-center mono font-bold">${rating}</td>
                    <td><span class="badge ${badgeCls}">${rem}</span></td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Recent School Announcements</span>
          <button class="btn btn-sm" onclick="switchTab('announcements')">View All</button>
        </div>
        <div class="panel-body">
          ${db.announcements
            .filter(a => a.target_role === 'All' || a.target_role === 'Student')
            .slice(0, 3)
            .map(ann => `
              <div style="border-bottom:1px solid var(--border-light);padding-bottom:10px;margin-bottom:10px;">
                <div class="flex justify-between items-center mb-2">
                  <span class="badge badge-info">${escapeHtml(ann.target_role)}</span>
                  <span class="mono text-muted" style="font-size:10.5px;">${escapeHtml(ann.created_at)}</span>
                </div>
                <div class="font-semibold mb-1" style="font-size:13px;">${escapeHtml(ann.title)}</div>
                <div class="text-secondary" style="font-size:12px;">${escapeHtml(ann.content)}</div>
              </div>
            `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderStudentSchedule() {
  const student = getLoggedInStudent();
  const expanded = getStudentEnrollmentsExpanded(student.student_id);
  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Official Class Schedule — ${escapeHtml(student.full_name)} (${escapeHtml(student.student_id)})</span>
        <button class="btn btn-sm btn-primary" onclick="openAssessmentSlipModal('${student.student_id}')">Print Registration &amp; Assessment Form</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Course Description</th>
              <th class="text-center">Units</th>
              <th>Days</th>
              <th>Time Slot</th>
              <th>Room</th>
              <th>Faculty Instructor</th>
            </tr>
          </thead>
          <tbody>
            ${expanded.map(item => `
              <tr>
                <td class="mono font-semibold">${item.subject ? escapeHtml(item.subject.subject_code) : ''}</td>
                <td>${item.subject ? escapeHtml(item.subject.subject_title) : ''}</td>
                <td class="text-center mono font-semibold">${item.subject ? item.subject.units : 0}</td>
                <td class="mono">${item.schedule ? escapeHtml(item.schedule.day_of_week) : ''}</td>
                <td class="mono">${item.schedule ? escapeHtml(item.schedule.time_slot) : ''}</td>
                <td class="mono font-semibold">${item.schedule ? escapeHtml(item.schedule.room) : ''}</td>
                <td>${item.faculty ? escapeHtml(item.faculty.full_name) : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentGrades() {
  const student = getLoggedInStudent();
  const expanded = getStudentEnrollmentsExpanded(student.student_id);
  const gwa = computeGWA(student.student_id);

  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Encoded Academic Grades — 1st Semester, AY 2026–2027</span>
        <span class="badge badge-info" style="font-size:11.5px;">Computed GWA: ${gwa}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Subject Code</th>
              <th>Course Title</th>
              <th class="text-center">Units</th>
              <th class="text-center">Prelim</th>
              <th class="text-center">Midterm</th>
              <th class="text-center">Finals</th>
              <th class="text-center">Final Rating</th>
              <th>Remarks</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            ${expanded.map(item => {
              const g = item.grade || {};
              const rem = g.remarks || 'In Progress';
              const badgeCls = rem === 'Passed' ? 'badge-success' : rem === 'Failed' ? 'badge-danger' : 'badge-warning';
              return `
                <tr>
                  <td class="mono font-semibold">${item.subject ? escapeHtml(item.subject.subject_code) : ''}</td>
                  <td>${item.subject ? escapeHtml(item.subject.subject_title) : ''}</td>
                  <td class="text-center mono">${item.subject ? item.subject.units : 0}</td>
                  <td class="text-center mono">${g.prelim !== null && g.prelim !== undefined ? Number(g.prelim).toFixed(2) : '—'}</td>
                  <td class="text-center mono">${g.midterm !== null && g.midterm !== undefined ? Number(g.midterm).toFixed(2) : '—'}</td>
                  <td class="text-center mono">${g.finals !== null && g.finals !== undefined ? Number(g.finals).toFixed(2) : '—'}</td>
                  <td class="text-center mono font-bold" style="font-size:13.5px;">
                    ${g.final_rating !== null && g.final_rating !== undefined ? Number(g.final_rating).toFixed(2) : '—'}
                  </td>
                  <td><span class="badge ${badgeCls}">${rem}</span></td>
                  <td class="mono text-muted" style="font-size:11px;">${g.updated_at || 'Pending'}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderStudentAssessment() {
  const student = getLoggedInStudent();
  const fin = computeStudentAssessment(student.student_id);

  return `
    <div class="equal-col-grid">
      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Itemized Tuition &amp; Fee Assessment</span>
          <button class="btn btn-sm btn-primary" onclick="openAssessmentSlipModal('${student.student_id}')">Download / Print Official Form</button>
        </div>
        <div class="panel-body">
          <table>
            <tbody>
              <tr>
                <td>Tuition Fee (${fin.totalUnits} units × ${formatPHP(FEE_RATES.TUITION_PER_UNIT)})</td>
                <td class="text-right mono font-semibold">${formatPHP(fin.tuitionFee)}</td>
              </tr>
              <tr>
                <td>Laboratory Fee (${fin.labSubjectsCount} lab subjects × ${formatPHP(FEE_RATES.LAB_FEE_PER_LAB_SUBJECT)})</td>
                <td class="text-right mono font-semibold">${formatPHP(fin.laboratoryFee)}</td>
              </tr>
              <tr>
                <td>Registration &amp; Institutional Miscellaneous Fees</td>
                <td class="text-right mono font-semibold">${formatPHP(fin.miscFee)}</td>
              </tr>
              <tr style="background:#F0FDF4;">
                <td class="font-bold">TOTAL SEMESTER ASSESSMENT</td>
                <td class="text-right mono font-bold">${formatPHP(fin.totalAssessment)}</td>
              </tr>
              <tr>
                <td>Less: Total Verified Official Receipt Payments</td>
                <td class="text-right mono font-semibold" style="color:var(--status-success);">− ${formatPHP(fin.totalPaid)}</td>
              </tr>
              <tr style="background:#FEE2E2;">
                <td class="font-bold">REMAINING OUTSTANDING BALANCE</td>
                <td class="text-right mono font-bold" style="font-size:15px;color:${fin.remainingBalance > 0 ? 'var(--status-danger)' : 'var(--status-success)'};">
                  ${formatPHP(fin.remainingBalance)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel">
        <div class="panel-header">
          <span class="panel-title">Verified Official Receipt (OR) Payment History</span>
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>OR Number</th>
                <th>Description</th>
                <th>Date</th>
                <th class="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${fin.payments.length ? fin.payments.map(p => `
                <tr>
                  <td class="mono font-semibold">${escapeHtml(p.or_number)}</td>
                  <td>${escapeHtml(p.payment_type)}</td>
                  <td class="mono">${escapeHtml(p.payment_date)}</td>
                  <td class="text-right mono font-semibold" style="color:var(--status-success);">${formatPHP(p.amount_paid)}</td>
                </tr>
              `).join('') : `
                <tr><td colspan="4" class="text-center text-muted">No payments logged yet. Settle at GNC Accounting Office.</td></tr>
              `}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Printable Official Assessment Form Modal
function openAssessmentSlipModal(studentId) {
  const st = db.students.find(s => s.student_id === studentId);
  const sec = db.sections.find(s => s.section_id === st.section_id);
  const expanded = getStudentEnrollmentsExpanded(studentId);
  const fin = computeStudentAssessment(studentId);

  openModal(
    'Official Certificate of Registration & Tuition Assessment',
    `
      <div id="printable-assessment" class="assessment-paper">
        <div class="assessment-header">
          <div class="flex items-center justify-center gap-2 mb-1">
            <img src="images.jpg" alt="GNC Logo" style="width:32px;height:32px;object-fit:contain;" />
            <span style="font-size:14.5px;font-weight:700;letter-spacing:0.04em;color:var(--brand-primary);">GUAGUA NATIONAL COLLEGES</span>
          </div>
          <div style="font-size:11px;color:#4B5563;">Guagua, Pampanga, Philippines • Office of the Registrar &amp; Accounting</div>
          <div style="font-size:12px;font-weight:700;margin-top:4px;color:#1F2937;">OFFICIAL STUDENT ASSESSMENT FORM (AY 2026–2027, 1ST SEMESTER)</div>
        </div>

        <div class="form-grid-2 mb-3" style="font-size:12px;">
          <div>
            <div><strong>Student ID:</strong> <span class="mono">${escapeHtml(st.student_id)}</span></div>
            <div><strong>Student Name:</strong> ${escapeHtml(st.full_name)}</div>
            <div><strong>Program:</strong> ${escapeHtml(st.program)}</div>
          </div>
          <div>
            <div><strong>Year &amp; Section:</strong> ${escapeHtml(st.year_level)} — ${sec ? escapeHtml(sec.section_code) : 'N/A'}</div>
            <div><strong>Total Enrolled Units:</strong> <span class="mono">${fin.totalUnits}</span></div>
            <div><strong>Financial Status:</strong> <strong>${fin.financialStatus}</strong></div>
          </div>
        </div>

        <table class="mb-3" style="font-size:11.5px;">
          <thead>
            <tr>
              <th>Code</th>
              <th>Subject Title</th>
              <th class="text-center">Units</th>
              <th>Schedule</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            ${expanded.map(item => `
              <tr>
                <td class="mono font-semibold">${item.subject ? escapeHtml(item.subject.subject_code) : ''}</td>
                <td>${item.subject ? escapeHtml(item.subject.subject_title) : ''}</td>
                <td class="text-center mono">${item.subject ? item.subject.units : 0}</td>
                <td class="mono">${item.schedule ? `${item.schedule.day_of_week} ${item.schedule.time_slot}` : ''}</td>
                <td class="mono">${item.schedule ? item.schedule.room : ''}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <table style="font-size:12px;">
          <tbody>
            <tr>
              <td>Tuition Fee (${fin.totalUnits} units @ ${formatPHP(FEE_RATES.TUITION_PER_UNIT)})</td>
              <td class="text-right mono">${formatPHP(fin.tuitionFee)}</td>
            </tr>
            <tr>
              <td>Laboratory Fees (${fin.labSubjectsCount} lab courses @ ${formatPHP(FEE_RATES.LAB_FEE_PER_LAB_SUBJECT)})</td>
              <td class="text-right mono">${formatPHP(fin.laboratoryFee)}</td>
            </tr>
            <tr>
              <td>Miscellaneous &amp; Registration Fees</td>
              <td class="text-right mono">${formatPHP(fin.miscFee)}</td>
            </tr>
            <tr>
              <td class="font-bold">TOTAL ASSESSMENT</td>
              <td class="text-right mono font-bold">${formatPHP(fin.totalAssessment)}</td>
            </tr>
            <tr>
              <td>Less: Verified OR Payments</td>
              <td class="text-right mono">${formatPHP(fin.totalPaid)}</td>
            </tr>
            <tr>
              <td class="font-bold">NET REMAINING BALANCE</td>
              <td class="text-right mono font-bold">${formatPHP(fin.remainingBalance)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    `
      <button class="btn" onclick="closeModal()">Close</button>
      <button class="btn btn-primary" onclick="window.print()">Print / Save as PDF</button>
    `,
    true
  );
}

// ==========================================================================
// ANNOUNCEMENTS MODULE (CRUD FOR ADMIN, READ-ONLY FOR FACULTY/STUDENT)
// ==========================================================================

function renderAnnouncementsModule(canPost) {
  const visibleAnnouncements = db.announcements.filter(a => {
    if (currentUser.role === 'Admin') return true;
    return a.target_role === 'All' || a.target_role === currentUser.role;
  });

  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Institutional Bulletins &amp; Announcements</span>
        ${canPost ? `<button class="btn btn-sm btn-primary" onclick="openAnnouncementModal()">+ Post New Announcement</button>` : ''}
      </div>
      <div class="panel-body">
        ${visibleAnnouncements.map(ann => `
          <div style="border:1px solid var(--border-strong);padding:14px;margin-bottom:10px;background:var(--bg-subtle);">
            <div class="flex justify-between items-center mb-2">
              <div class="flex items-center gap-2">
                <span class="badge badge-info">Audience: ${escapeHtml(ann.target_role)}</span>
                <span class="mono text-muted" style="font-size:11px;">Posted on ${escapeHtml(ann.created_at)} by ${escapeHtml(ann.posted_by)}</span>
              </div>
              ${canPost ? `<button class="btn btn-sm btn-danger" onclick="deleteAnnouncement('${ann.announcement_id}')">Delete</button>` : ''}
            </div>
            <div style="font-size:14px;font-weight:700;margin-bottom:4px;">${escapeHtml(ann.title)}</div>
            <div style="color:var(--text-secondary);line-height:1.5;font-size:12.5px;">${escapeHtml(ann.content)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function openAnnouncementModal() {
  openModal(
    'Publish School-Wide Announcement',
    `
      <form id="announcement-form" onsubmit="saveAnnouncementForm(event)">
        <div class="form-group">
          <label>Announcement Headline</label>
          <input name="title" placeholder="e.g., Release of Prelim Examination Permits" required />
        </div>
        <div class="form-group">
          <label>Target Role Audience</label>
          <select name="target_role">
            <option value="All">All Users (Administrators, Faculty &amp; Students)</option>
            <option value="Student">Students Only</option>
            <option value="Faculty">Faculty Members Only</option>
          </select>
        </div>
        <div class="form-group">
          <label>Memorandum / Content</label>
          <textarea name="content" rows="4" placeholder="Enter official announcement details..." required></textarea>
        </div>
      </form>
    `,
    `
      <button class="btn" onclick="closeModal()">Cancel</button>
      <button class="btn btn-primary" onclick="document.getElementById('announcement-form').requestSubmit()">Publish Announcement</button>
    `
  );
}

function saveAnnouncementForm(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  db.announcements.unshift({
    announcement_id: 'ANN-' + Date.now().toString().slice(-4),
    title: data.title,
    content: data.content,
    target_role: data.target_role,
    posted_by: currentUser.full_name,
    created_at: '2026-11-17'
  });
  saveDatabase();
  closeModal();
  showToast('School announcement published to target dashboards.', 'success');
  render();
}

async function deleteAnnouncement(announcementId) {
  if (!confirm('Delete this announcement?')) return;

  if (typeof supabase === 'undefined') {
    db.announcements = db.announcements.filter(a => a.announcement_id !== announcementId);
    saveDatabase();
    showToast('Announcement deleted.', 'success');
    const workspace = document.getElementById('admin-workspace');
    if (workspace) {
      await renderAdminAnnouncements(workspace);
    } else {
      render();
    }
    return;
  }

  const { error } = await supabase
    .from('announcements')
    .delete()
    .eq('announcement_id', announcementId);

  if (error) {
    alert(`Error deleting announcement: ${error.message}`);
    return;
  }
  await renderAdminAnnouncements(document.getElementById('admin-workspace'));
}

// ==========================================================================
// RELATIONAL DATABASE SCHEMA & LIVE TABLE INSPECTOR (ADMIN ONLY)
// ==========================================================================

function renderDatabaseInspector() {
  const schemaDef = [
    {
      name: 'users',
      cols: [
        ['user_id', 'PK • VARCHAR'],
        ['username', 'UNIQUE • VARCHAR'],
        ['password', 'VARCHAR'],
        ['role', 'ENUM(Admin,Faculty,Student)'],
        ['full_name', 'VARCHAR']
      ]
    },
    {
      name: 'students',
      cols: [
        ['student_id', 'PK • VARCHAR'],
        ['user_id', 'FK → users.user_id'],
        ['section_id', 'FK → sections.section_id'],
        ['program', 'VARCHAR'],
        ['year_level', 'VARCHAR']
      ]
    },
    {
      name: 'sections',
      cols: [
        ['section_id', 'PK • VARCHAR'],
        ['section_code', 'VARCHAR'],
        ['adviser_user_id', 'FK → users.user_id'],
        ['school_year', 'VARCHAR'],
        ['semester', 'VARCHAR']
      ]
    },
    {
      name: 'subjects',
      cols: [
        ['subject_id', 'PK • VARCHAR'],
        ['subject_code', 'UNIQUE • VARCHAR'],
        ['subject_title', 'VARCHAR'],
        ['units', 'INT'],
        ['has_lab', 'BOOLEAN']
      ]
    },
    {
      name: 'schedules',
      cols: [
        ['schedule_id', 'PK • VARCHAR'],
        ['section_id', 'FK → sections.section_id'],
        ['subject_id', 'FK → subjects.subject_id'],
        ['faculty_user_id', 'FK → users.user_id'],
        ['day_of_week / room', 'VARCHAR']
      ]
    },
    {
      name: 'enrollments',
      cols: [
        ['enrollment_id', 'PK • VARCHAR'],
        ['student_id', 'FK → students.student_id'],
        ['schedule_id', 'FK → schedules.schedule_id'],
        ['school_year', 'VARCHAR'],
        ['status', 'VARCHAR']
      ]
    },
    {
      name: 'grades',
      cols: [
        ['grade_id', 'PK • VARCHAR'],
        ['enrollment_id', 'FK → enrollments.enrollment_id'],
        ['prelim / midterm / finals', 'DECIMAL(3,2)'],
        ['final_rating', 'DECIMAL(3,2)'],
        ['remarks', 'VARCHAR']
      ]
    },
    {
      name: 'payments',
      cols: [
        ['payment_id', 'PK • VARCHAR'],
        ['student_id', 'FK → students.student_id'],
        ['or_number', 'UNIQUE • VARCHAR'],
        ['amount_paid', 'DECIMAL(10,2)'],
        ['payment_date', 'DATE']
      ]
    },
    {
      name: 'announcements',
      cols: [
        ['announcement_id', 'PK • VARCHAR'],
        ['title', 'VARCHAR'],
        ['target_role', 'ENUM(All,Faculty,Student)'],
        ['posted_by', 'VARCHAR'],
        ['created_at', 'DATE']
      ]
    }
  ];

  const rows = db[schemaInspectorTable] || [];
  const cols = rows.length ? Object.keys(rows[0]) : [];

  return `
    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Normalized 3NF Relational Database Schema (ERD Architecture)</span>
        <span class="mono text-muted" style="font-size:11.5px;">9 Core Tables • Referential Integrity Enforced</span>
      </div>
      <div class="panel-body">
        <div class="erd-grid">
          ${schemaDef.map(tbl => `
            <div class="erd-table-card" style="cursor:pointer;${schemaInspectorTable === tbl.name ? 'outline:2px solid var(--brand-primary);' : ''}" onclick="schemaInspectorTable='${tbl.name}';render();">
              <div class="erd-table-head">
                <span>${tbl.name}</span>
                <span>${(db[tbl.name] || []).length} rows</span>
              </div>
              ${tbl.cols.map(([col, tag]) => `
                <div class="erd-col-row">
                  <span>${col}</span>
                  <span class="${tag.startsWith('PK') ? 'pk-tag' : tag.startsWith('FK') ? 'fk-tag' : 'text-muted'}">${tag}</span>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header">
        <span class="panel-title">Live Relational Table Records: <span class="mono" style="color:var(--brand-primary);">${schemaInspectorTable}</span></span>
        <select style="width:auto;" onchange="schemaInspectorTable=this.value;render();">
          ${schemaDef.map(t => `<option value="${t.name}" ${schemaInspectorTable === t.name ? 'selected' : ''}>Table: ${t.name} (${(db[t.name] || []).length})</option>`).join('')}
        </select>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${cols.map(c => `<th>${escapeHtml(c)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                ${cols.map(c => `<td class="mono" style="font-size:11.5px;">${escapeHtml(String(r[c] ?? 'NULL'))}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ==========================================================================
// MODAL & TOAST HELPERS
// ==========================================================================

function openModal(title, bodyHtml, footerHtml, large = false) {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
      <div class="modal-card ${large ? 'modal-lg' : ''}">
        <div class="modal-header">
          <span class="panel-title">${title}</span>
          <button class="btn btn-sm" onclick="closeModal()">✕</button>
        </div>
        <div class="modal-body">${bodyHtml}</div>
        <div class="modal-footer">${footerHtml}</div>
      </div>
    </div>
  `;
}

function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = message;
  container.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 3400);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Boot application
const savedSessionUser = localStorage.getItem('gnci_session_user');
if (savedSessionUser) {
  try {
    const sessionUser = JSON.parse(savedSessionUser);
    renderPortalByRole(sessionUser);
  } catch (error) {
    localStorage.removeItem('gnci_session_user');
    render();
  }
} else {
  render();
}

