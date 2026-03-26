// Compulsory Courses 
const compulsorySem1 = [
    { name: "Python Programming", code: "BCSE102E", sem: 1, credits: 4 },
    { name: "Calculus for Engineers", code: "BMAT101L", sem: 1, credits: 4 },
    { name: "Engineering Physics", code: "BPHY101L", sem: 1, credits: 3 },
    { name: "Technical English", code: "BENG101N", sem: 1, credits: 2 }
];

const compulsorySem2 = [
    { name: "Data Structures and Algorithms", code: "BCSE201L", sem: 2, credits: 4 },
    { name: "Digital Logic and Design", code: "BEEE201L", sem: 2, credits: 3 },
    { name: "Engineering Chemistry", code: "BCHM101L", sem: 2, credits: 3 }
];

const compulsorySem3 = [
    { name: "Web Development", code: "BCSE203E", sem: 3, credits: 3 },
    { name: "Database Management Systems", code: "BCSE205L", sem: 3, credits: 3 }
];

const compulsorySem4 = [
    { name: "Operating Systems", code: "BCSE301L", sem: 4, credits: 4 },
    { name: "Computer Networks", code: "BCSE302L", sem: 4, credits: 4 }
];

const mockUsers = [
    {
        registerNumber: "24BCE1305",
        password: "totallydifferentpassword",
        name: "Chhatrapati Kingshuk Sarkar",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 9.67,
        semesterGpa: [9.8, 9.4, 9.9, 9.67],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Internet of Things", code: "BCSE406E", sem: 4, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE5274",
        password: "password",
        name: "Arya Panwar",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 9.15,
        semesterGpa: [8.9, 9.2, 9.4, 9.15],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Blockchain Technologies", code: "BCSE405E", sem: 4, credits: 3 }
        ]
    },
    {
        registerNumber: "21BCE0001",
        password: "password123",
        name: "Ramanan Baskar",
        program: "B.Tech Computer Science",
        graduationYear: "2025",
        cgpa: 8.92,
        semesterGpa: [8.5, 8.6, 8.75, 8.7, 8.8, 8.85, 8.9, 8.92],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Software Engineering Principles", code: "BCSE303L", sem: 5, credits: 3 },
            { name: "Machine Learning Concepts", code: "BCSE401E", sem: 6, credits: 4 },
            { name: "Cloud Computing and Docker", code: "BCSE402E", sem: 6, credits: 3 },
            { name: "Information and Cyber Security", code: "BCSE403E", sem: 7, credits: 3 },
            { name: "Artificial Intelligence", code: "BCSE404E", sem: 7, credits: 4 },
            { name: "Capstone Project Phase I", code: "BCSE497L", sem: 8, credits: 4 },
            { name: "Capstone Project Phase II", code: "BCSE498L", sem: 8, credits: 8 }
        ]
    },
    {
        registerNumber: "24BCE1001",
        password: "password123",
        name: "Ramakrishna P H",
        program: "B.Tech Computer Science",
        graduationYear: "2028",
        cgpa: 8.85,
        semesterGpa: [8.5, 8.9, 9.1, 9.2, 9.0],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Theory of Computation", code: "BCSE304L", sem: 5, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE2001",
        password: "password123",
        name: "Priya Sharma",
        program: "B.Tech Electronics",
        graduationYear: "2028",
        cgpa: 9.10,
        semesterGpa: [9.0, 9.2, 9.1, 9.1, 9.1, 9.1],
        courses: [
            ...compulsorySem1, ...compulsorySem2,
            { name: "Electronic Circuits", code: "BEEE202L", sem: 3, credits: 3 },
            { name: "Signals and Systems", code: "BEEE301L", sem: 4, credits: 3 },
            { name: "Microprocessors", code: "BEEE302L", sem: 5, credits: 4 },
            { name: "Control Systems", code: "BEEE401L", sem: 6, credits: 3 }
        ]
    },
    {
        registerNumber: "24BCE1234",
        password: "password123",
        name: "Rahul Verma",
        program: "B.Tech Information Technology",
        graduationYear: "2028",
        cgpa: 7.85,
        semesterGpa: [7.5, 7.8, 8.1, 7.9, 7.7, 8.0, 8.2],
        courses: [
            ...compulsorySem1, ...compulsorySem2, ...compulsorySem3, ...compulsorySem4,
            { name: "Information Technology Infrastructure", code: "BITE101L", sem: 5, credits: 3 },
            { name: "Network Security", code: "BITE201L", sem: 6, credits: 3 },
            { name: "Human Computer Interaction", code: "BITE301L", sem: 7, credits: 3 }
        ]
    }
];

function getUserByRegNo(regNo) {
    if (!regNo) return null;
    return mockUsers.find(u => u.registerNumber.toUpperCase() === regNo.toUpperCase());
}

const commonMails = [
    {
        id: 101,
        sender: "'Dean SCOPE Chennai.'",
        senderEmail: "dean.scope.chennai@vit.ac.in",
        subject: "Fwd: Unlock New Skills with Infosys Springboard Virt...",
        body: "Dear Students, Please find forwarded the opportunity from Infosys Springboard to learn new skills virtually.",
        category: "Important",
        timestamp: "2026-03-26T11:37:00",
        read: false
    },
    {
        id: 102,
        sender: "'ProVC CC' via Comp.",
        senderEmail: "provc.cc@vit.ac.in",
        subject: "QS World University Rankings: by Subject 2026",
        body: "Very Esteemed Students, we are proud to announce our new QS World University Rankings...",
        category: "Important",
        timestamp: "2026-03-25T14:00:00",
        read: false
    },
    {
        id: 103,
        sender: "'Additional Registr.",
        senderEmail: "addl.registrar@vit.ac.in",
        subject: "QS Subject rank of VIT - Reg.",
        body: "Dear Chennai VITians, We are glad to share the recent QS rankings...",
        category: "Normal",
        timestamp: "2026-03-25T10:15:00",
        read: true
    },
    {
        id: 104,
        sender: "Deputy Director, Me. 3",
        senderEmail: "deputy.director.hostel@vit.ac.in",
        subject: "Senior Hostel Room Reservation Counselling for the AY 2...",
        body: "Please find the attached circular regarding hostel room reservation counselling.",
        category: "Important",
        timestamp: "2026-03-25T09:30:00",
        read: false,
        attachments: [{ name: "Circular_Hostel...", type: "pdf" }]
    },
    {
        id: 105,
        sender: "'VITCC Placement' v. 3",
        senderEmail: "placement.chennai@vit.ac.in",
        subject: "Fwd: JPMorganChase | Software Engineer Program | Sum...",
        body: "Students eligible for the JPMorgan Chase Software Engineer Program are requested to apply via the attached guidelines.",
        category: "Academic",
        timestamp: "2026-03-25T08:00:00",
        read: false,
        attachments: [
            { name: "2027 Software ...", type: "pdf" },
            { name: "Application Gui...", type: "pdf" }
        ]
    },
    {
        id: 106,
        sender: "NPTEL",
        senderEmail: "nptel@iitm.ac.in",
        subject: "NPTEL Newsletter: Only 2 Days Left \u2013 Don't Miss the Sust...",
        body: "Dear Learner, Only 2 days left to register for the upcoming NPTEL certification courses.",
        category: "Academic",
        timestamp: "2026-03-25T07:15:00",
        read: true
    },
    {
        id: 107,
        sender: "onlinecourses",
        senderEmail: "onlinecourses@nptel.iitm.ac.in",
        subject: "Exam Format - April, 2026!!",
        body: "Dear Candidate, ****This is a notification regarding the exam format for April 2026.",
        category: "Academic",
        timestamp: "2026-03-25T06:45:00",
        read: true
    },
    {
        id: 108,
        sender: "NPTEL Coordinator",
        senderEmail: "nptel.coord@vit.ac.in",
        subject: "(Reminder) Exciting Opportunity: NPTEL Post Baccalaure...",
        body: "Reminder for the NPTEL Post Baccalaureate programs.",
        category: "Normal",
        timestamp: "2026-03-24T16:20:00",
        read: true
    },
    {
        id: 109,
        sender: "'Director Student W.",
        senderEmail: "director.sw@vit.ac.in",
        subject: "Students Achievement - ST Microelectronics Innovation F...",
        body: "We are proud to announce the achievements of our students in the ST Microelectronics Innovation Fest.",
        category: "Events",
        timestamp: "2026-03-24T11:00:00",
        read: true
    }
];

function generatePersonalEmails(name) {
    const firstName = name.split(' ')[0];
    const firstInitial = firstName.charAt(0);
    const lastName = name.split(' ').length > 1 ? name.split(' ')[name.split(' ').length - 1] : '';

    // Pool of distinct tech/learning platforms for varieties
    const templates = [
        {
            sender: "GitHub",
            senderEmail: "noreply@github.com",
            subject: `[GitHub] A new vulnerability found in your repository`,
            body: `Hi ${firstName}, We found a potential security vulnerability in your latest push. Please review the Dependabot alerts.`,
            category: "Normal",
        },
        {
            sender: "LeetCode",
            senderEmail: "contact@leetcode.com",
            subject: "Weekly Contest 400 is starting soon!",
            body: `Hello ${firstName}, The Weekly Contest is exactly 24 hours away. Register now to improve your global ranking!`,
            category: "Events",
        },
        {
            sender: "Coursera",
            senderEmail: "no-reply@coursera.org",
            subject: "Your certificate is ready!",
            body: `Congratulations ${firstName}! You have successfully completed the 'Machine Learning Specialization'. View and share your certificate.`,
            category: "Academic",
        },
        {
            sender: "Vercel",
            senderEmail: "deploy@vercel.com",
            subject: "Deployment successful 🚀",
            body: `Your project 'student-dashboard-frontend' has been successfully deployed to production. Visit your dashboard to view the logs.`,
            category: "Normal",
        },
        {
            sender: "AWS",
            senderEmail: "aws-receivables@amazon.com",
            subject: "Action Required: Your AWS Cloud Credits are expiring",
            body: `Dear AWS Builder, you have $50 in cloud credits expiring in 7 days. Log in to the AWS console to manage your billing.`,
            category: "Normal",
        },
        {
            sender: "Codeforces",
            senderEmail: "noreply@codeforces.com",
            subject: "Codeforces Round 982 (Div. 2)",
            body: `Attention participants! The upcoming Codeforces Round 982 will take place this Sunday. Register your handle.`,
            category: "Events"
        },
        {
            sender: "Notion",
            senderEmail: "team@notion.so",
            subject: "You've been invited to a workspace",
            body: `Hi ${firstName}, your team 'WebDev Final Project' has invited you to collaborate on their Notion workspace.`,
            category: "Academic"
        },
        {
            sender: "Spotify",
            senderEmail: "no-reply@spotify.com",
            subject: "Your weekly coding mix is here",
            body: `Hit the zone with this week's curated focus beats. Fresh instrumental tracks carefully selected for ${firstName}.`,
            category: "Normal"
        },
        {
            sender: "Oracle",
            senderEmail: "no-reply@oracle.com",
            subject: "Your Oracle One-Time Passcode",
            body: `Hello ${firstName}, Your Oracle One-Time Passcode is ${Math.floor(100000 + Math.random() * 900000)}. Please do not share this code.`,
            category: "Normal"
        },
        {
            sender: "Kaggle",
            senderEmail: "noreply@kaggle.com",
            subject: "Competition Launch: ARC Prize 2026",
            body: `Hi Participant, Real intelligence is here. Join the new ARC Prize 2026 competition and stand a chance to win.`,
            category: "Events"
        },
        {
            sender: "LinkedIn",
            senderEmail: "messages-noreply@linkedin.com",
            subject: `${firstInitial}.${lastName}, see who's hiring`,
            body: "See the latest openings matching your profile. Apply now to kickstart your career.",
            category: "Normal"
        },
        {
            sender: "Claim Reward",
            senderEmail: "winner@freestuffnow.xyz",
            subject: "You have won a brand new iPhone 16 Pro Max!",
            body: `Dear user, your email has been randomly selected to win. Click here to claim your prize and enter your credit card for shipping.`,
            category: "Spam"
        },
        {
            sender: "Campus Admin",
            senderEmail: "admin@vlt-support-desk.com",
            subject: "ACTION REQUIRED: Verify your VIT Webmail",
            body: `Your student webmail quota is almost full. Click the link below and provide your password to upgrade your storage immediately.`,
            category: "Spam"
        },
        {
            sender: "Netflix Support",
            senderEmail: "billing@netflix-updates.net",
            subject: "Payment Declined",
            body: `Your last payment failed. Please update your billing information within 24 hours to avoid account suspension.`,
            category: "Spam"
        },
        {
            sender: "Crypto Alerts",
            senderEmail: "bot@crypto-scam.net",
            subject: "URGENT: Your wallet has been compromised!",
            body: `We detected an unauthorized login to your crypto wallet. Please verify your seed phrase immediately to secure your assets.`,
            category: "Spam"
        },
        {
            sender: "Amazon",
            senderEmail: "orders@amazon.com",
            subject: "Your order #124-4929420 has shipped",
            body: `Hi ${firstName}, your package is on the way. Track your order inside.`,
            category: "Normal"
        },
        {
            sender: "GeeksForGeeks",
            senderEmail: "newsletter@geeksforgeeks.org",
            subject: "Top 10 DSA Questions for Product Based Companies",
            body: `Master the essential data structures and algorithms favored by top tech companies.`,
            category: "Academic"
        }
    ];

    const shuffled = templates.sort(() => 0.5 - Math.random());
    const numEmails = Math.floor(Math.random() * 4) + 6; // Select 6 to 9 emails
    const selected = shuffled.slice(0, numEmails);

    return selected.map((t, i) => ({
        id: Math.floor(Math.random() * 10000) + 200 + i,
        sender: t.sender,
        senderEmail: t.senderEmail,
        subject: t.subject,
        body: t.body,
        category: t.category,
        timestamp: "2026-03-" + (26 - Math.floor(Math.random() * 3)) + "T10:00:00",
        read: Math.random() > 0.5
    }));
}

const mockEmailAccounts = [
    {
        email: "chhatrapati.kingshuk2024@vitstudent.ac.in",
        password: "mailpassword",
        ownerName: "Chhatrapati Kingshuk Sarkar",
        inbox: [...generatePersonalEmails("Chhatrapati Kingshuk Sarkar"), ...commonMails]
    },
    {
        email: "arya.panwar2024@vitstudent.ac.in",
        password: "mailpassword",
        ownerName: "Arya Panwar",
        inbox: [...generatePersonalEmails("Arya Panwar"), ...commonMails]
    },
    {
        email: "ramanan.baskar2021@vitstudent.ac.in",
        password: "mailpassword",
        ownerName: "Ramanan Baskar",
        inbox: [...generatePersonalEmails("Ramanan Baskar"), ...commonMails]
    }
];

function verifyMailLogin(email, password) {
    if (!email || !password) return null;
    return mockEmailAccounts.find(acc => acc.email.toLowerCase() === email.toLowerCase() && acc.password === password);
}
