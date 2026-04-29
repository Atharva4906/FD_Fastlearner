const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
  PageBreak, LevelFormat, UnderlineType
} = require('docx');
const fs = require('fs');

// ── helpers ──────────────────────────────────────────────────────────────────
const BORDER = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
const NONE = { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } };

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, bold: true, size: 36, font: "Arial" })]
  });
}
function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, bold: true, size: 28, font: "Arial" })]
  });
}
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: "2E75B6" })]
  });
}
function h4(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 22, font: "Arial", color: "404040" })]
  });
}
function normal(text) {
  return new Paragraph({ children: [new TextRun({ text, size: 22, font: "Arial" })] });
}
function spacer() {
  return new Paragraph({ children: [new TextRun("")] });
}
function codeBlock(lines) {
  return lines.map(line =>
    new Paragraph({
      children: [new TextRun({ text: line, font: "Courier New", size: 18, color: "1F1F1F" })],
      shading: { fill: "F3F3F3", type: ShadingType.CLEAR },
      indent: { left: 360 }
    })
  );
}
function imagePlaceholder(label) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: {
              top: { style: BorderStyle.DASHED, size: 2, color: "999999" },
              bottom: { style: BorderStyle.DASHED, size: 2, color: "999999" },
              left: { style: BorderStyle.DASHED, size: 2, color: "999999" },
              right: { style: BorderStyle.DASHED, size: 2, color: "999999" }
            },
            width: { size: 9360, type: WidthType.DXA },
            shading: { fill: "FAFAFA", type: ShadingType.CLEAR },
            margins: { top: 200, bottom: 200, left: 200, right: 200 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "[ Screenshot Placeholder ]", bold: true, color: "888888", size: 22, font: "Arial" })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: label, color: "AAAAAA", size: 18, font: "Arial", italics: true })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "Insert screenshot here", color: "BBBBBB", size: 18, font: "Arial" })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}
function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTENT
// ═══════════════════════════════════════════════════════════════════════════════

const children = [];

// ── TITLE PAGE ────────────────────────────────────────────────────────────────
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 2400, after: 400 },
    children: [new TextRun({ text: "FD FastLearner", bold: true, size: 56, font: "Arial", color: "1A1A2E" })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text: "Full-Stack Development – Code Reference", size: 28, font: "Arial", color: "444444" })]
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [new TextRun({ text: "GitHub: github.com/Atharva4906/FD_Fastlearner", size: 20, font: "Arial", color: "888888", italics: true })]
  }),
  spacer(), spacer(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "Units 1–6  |  HTML · CSS · JavaScript · Bootstrap · jQuery · Node.js · MongoDB · Angular", size: 20, font: "Arial", color: "666666" })]
  }),
  pageBreak()
);

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 1
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 1 – HTML & CSS Fundamentals"), spacer());

// ── Unit 1 / Part 1 ──────────────────────────────────────────────────────────
children.push(h2("Part 1 – Flexbox & Semantic Tags"), spacer());
children.push(normal("Topic: Building a webpage layout using semantic HTML5 elements (header, nav, section, footer) and CSS Flexbox for horizontal navigation and card layout."), spacer());

children.push(h3("index.html"), spacer());
children.push(...codeBlock([
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
  '    <title>Flexbox semantic tags</title>',
  '    <link rel="stylesheet" href="style.css">',
  '</head>',
  '<body>',
  '    <header>',
  '        <h1>My Website</h1>',
  '    </header>',
  '    <nav>',
  '        <a href="#">Home</a>',
  '        <a href="#">About</a>',
  '        <a href="#">Contact</a>',
  '    </nav>',
  '    <section class="content">',
  '        <div class="card"><h2>Card 1</h2><p>This is sample content</p></div>',
  '        <div class="card"><h2>Card 2</h2><p>This is 2nd sample content</p></div>',
  '        <div class="card"><h2>Card 3</h2><p>This is 3rd sample content</p></div>',
  '    </section>',
  '    <footer>2026 @ My website | This is footer</footer>',
  '</body>',
  '</html>',
]));
children.push(spacer());

children.push(h3("style.css"), spacer());
children.push(...codeBlock([
  'body { margin: 0; font-family: Arial; }',
  '',
  'header { background: black; color: white; text-align: center; padding: 20px; }',
  '',
  'nav {',
  '    display: flex;',
  '    justify-content: center;',
  '    gap: 30px;',
  '    background: #333;',
  '    padding: 15px;',
  '}',
  'nav a { color: white; text-decoration: none; font-size: 18px; }',
  '',
  '.content {',
  '    display: flex;',
  '    justify-content: center;',
  '    gap: 20px;',
  '    padding: 40px;',
  '}',
  '.card {',
  '    background: #f4f4f4;',
  '    padding: 20px;',
  '    width: 200px;',
  '    text-align: center;',
  '    border-radius: 10px;',
  '}',
  'footer { background: black; color: white; text-align: center; padding: 15px; }',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 1 / Part 1"));
children.push(spacer());
children.push(imagePlaceholder("Unit 1 – Part 1: Flexbox & Semantic Tags webpage"));
children.push(spacer(), spacer());

// ── Unit 1 / Part 2 ──────────────────────────────────────────────────────────
children.push(h2("Part 2 – Responsive CSS Grid & Hover Animations"), spacer());
children.push(normal("Topic: CSS Grid with auto-fit columns, CSS transitions for hover effects (translateY + box-shadow), and full-height flex layout."), spacer());

children.push(h3("index.html"), spacer());
children.push(...codeBlock([
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <title>Responsive Grid & Animations</title>',
  '    <link rel="stylesheet" href="style.css">',
  '</head>',
  '<body>',
  '    <header class="header">',
  '        <h1>My Creative Grid</h1>',
  '        <p>Hover over the cards to see the transition effect.</p>',
  '    </header>',
  '    <main class="grid-container">',
  '        <div class="card">Card 1</div>',
  '        <div class="card">Card 2</div>',
  '        <div class="card">Card 3</div>',
  '        <div class="card">Card 4</div>',
  '        <div class="card">Card 5</div>',
  '        <div class="card">Card 6</div>',
  '    </main>',
  '    <footer class="footer"><p>&copy; 2026 Responsive Web Design</p></footer>',
  '</body>',
  '</html>',
]));
children.push(spacer());

children.push(h3("style.css"), spacer());
children.push(...codeBlock([
  '* { box-sizing: border-box; margin: 0; padding: 0; }',
  '',
  'body {',
  '    font-family: system-ui, -apple-system, sans-serif;',
  '    background-color: #f4f4f9;',
  '    display: flex;',
  '    flex-direction: column;',
  '    min-height: 100vh;',
  '}',
  '.header, .footer {',
  '    background-color: #2c3e50;',
  '    color: white;',
  '    text-align: center;',
  '    padding: 2rem 1rem;',
  '}',
  '.grid-container {',
  '    display: grid;',
  '    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));',
  '    gap: 2rem;',
  '    padding: 3rem 2rem;',
  '    max-width: 1200px;',
  '    margin: 0 auto;',
  '    width: 100%;',
  '}',
  '.card {',
  '    background-color: white;',
  '    border-radius: 12px;',
  '    padding: 4rem 2rem;',
  '    text-align: center;',
  '    font-size: 1.5rem;',
  '    font-weight: bold;',
  '    color: #2c3e50;',
  '    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);',
  '    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;',
  '}',
  '.card:hover {',
  '    transform: translateY(-10px);',
  '    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);',
  '    cursor: pointer;',
  '}',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 1 / Part 2"));
children.push(spacer());
children.push(imagePlaceholder("Unit 1 – Part 2: Responsive Grid & Hover Animations webpage"));
children.push(spacer(), pageBreak());

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 2
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 2 – JavaScript & ES6"), spacer());

// ── Unit 2 / Part 1 ──────────────────────────────────────────────────────────
children.push(h2("Part 1 – DOM Manipulation & Form Validation"), spacer());
children.push(normal("Topic: Capturing form submission events, email regex validation, password length checks, and dynamic error display using classList and textContent."), spacer());

children.push(h3("index.html"), spacer());
children.push(...codeBlock([
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '    <meta charset="UTF-8">',
  '    <title>Form Validation</title>',
  '    <link rel="stylesheet" href="style.css">',
  '</head>',
  '<body>',
  '    <div class="form-container">',
  '        <h2>Sign Up</h2>',
  '        <form id="registrationForm">',
  '            <div class="form-group">',
  '                <label for="email">Email Address</label>',
  '                <input type="text" id="email" placeholder="Enter your email">',
  '                <div id="emailError" class="error-message"></div>',
  '            </div>',
  '            <div class="form-group">',
  '                <label for="password">Password</label>',
  '                <input type="password" id="password" placeholder="Enter your password">',
  '                <div id="passwordError" class="error-message"></div>',
  '            </div>',
  '            <button type="submit">Submit</button>',
  '        </form>',
  '    </div>',
  '    <script src="script.js"></script>',
  '</body>',
  '</html>',
]));
children.push(spacer());

children.push(h3("script.js"), spacer());
children.push(...codeBlock([
  'const form = document.getElementById("registrationForm");',
  'const emailInput = document.getElementById("email");',
  'const passwordInput = document.getElementById("password");',
  'const emailError = document.getElementById("emailError");',
  'const passwordError = document.getElementById("passwordError");',
  '',
  'form.addEventListener("submit", function(event) {',
  '    event.preventDefault();',
  '    let isValid = true;',
  '    emailError.textContent = "";',
  '    passwordError.textContent = "";',
  '    emailInput.classList.remove("invalid");',
  '    passwordInput.classList.remove("invalid");',
  '',
  '    const emailValue = emailInput.value.trim();',
  '    const passwordValue = passwordInput.value.trim();',
  '',
  '    // Email Validation',
  '    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;',
  '    if (emailValue === "") {',
  '        emailError.textContent = "Email is required.";',
  '        emailInput.classList.add("invalid");',
  '        isValid = false;',
  '    } else if (!emailRegex.test(emailValue)) {',
  '        emailError.textContent = "Please enter a valid email address.";',
  '        emailInput.classList.add("invalid");',
  '        isValid = false;',
  '    }',
  '',
  '    // Password Validation',
  '    if (passwordValue === "") {',
  '        passwordError.textContent = "Password is required.";',
  '        passwordInput.classList.add("invalid");',
  '        isValid = false;',
  '    } else if (passwordValue.length < 8) {',
  '        passwordError.textContent = "Password must be at least 8 characters.";',
  '        passwordInput.classList.add("invalid");',
  '        isValid = false;',
  '    }',
  '',
  '    if (isValid) {',
  '        alert("Form successfully validated and ready to submit!");',
  '        form.reset();',
  '    }',
  '});',
]));
children.push(spacer());

children.push(h3("style.css (key rules)"), spacer());
children.push(...codeBlock([
  'input.invalid { border-color: #d9534f; background-color: #fdf0f0; }',
  '.error-message { color: #d9534f; font-size: 0.85em; margin-top: 5px; min-height: 15px; }',
  'button { width: 100%; padding: 10px; background-color: #5cb85c; color: white;',
  '         border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 2 / Part 1"));
children.push(spacer());
children.push(imagePlaceholder("Unit 2 – Part 1: Form Validation webpage"));
children.push(spacer(), spacer());

// ── Unit 2 / Part 2 ──────────────────────────────────────────────────────────
children.push(h2("Part 2 – ES6+ Features & Fetch API"), spacer());
children.push(normal("Topic: ES6 const/let, arrow functions, template literals, Array.map(), Promise chains (.then/.catch), and the Fetch API to load data from a public REST API."), spacer());

children.push(h3("index.html"), spacer());
children.push(...codeBlock([
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '    <meta charset="UTF-8"><title>ES6 Data Fetcher</title>',
  '    <link rel="stylesheet" href="style.css">',
  '</head>',
  '<body>',
  '    <div class="container">',
  '        <h1>User Directory</h1>',
  '        <button id="fetchBtn">Load Users</button>',
  '        <div id="userList" class="user-grid"></div>',
  '    </div>',
  '    <script src="app.js"></script>',
  '</body>',
  '</html>',
]));
children.push(spacer());

children.push(h3("app.js"), spacer());
children.push(...codeBlock([
  'const fetchBtn = document.getElementById("fetchBtn");',
  'const userList = document.getElementById("userList");',
  '',
  '// Arrow function as event handler',
  'fetchBtn.addEventListener("click", () => {',
  '    userList.innerHTML = "<p>Loading data...</p>";',
  '',
  '    // Fetch API returns a Promise',
  '    fetch("https://jsonplaceholder.typicode.com/users")',
  '        .then(response => {',
  '            if (!response.ok) throw new Error("Network response was not ok");',
  '            return response.json();',
  '        })',
  '        .then(users => { displayUsers(users); })',
  '        .catch(error => {',
  '            console.error("Error fetching data:", error);',
  '            userList.innerHTML = `<p class="error">Failed to load data.</p>`;',
  '        });',
  '});',
  '',
  '// Arrow function + Array.map() + Template Literals',
  'const displayUsers = (users) => {',
  '    const htmlString = users.map(user => `',
  '        <div class="user-card">',
  '            <h3>${user.name}</h3>',
  '            <p><strong>Username:</strong> ${user.username}</p>',
  '            <p><strong>Email:</strong> ${user.email}</p>',
  '            <p><strong>City:</strong> ${user.address.city}</p>',
  '        </div>',
  '    `).join("");',
  '    userList.innerHTML = htmlString;',
  '};',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 2 / Part 2"));
children.push(spacer());
children.push(imagePlaceholder("Unit 2 – Part 2: ES6 Fetch API User Directory webpage"));
children.push(spacer(), pageBreak());

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 3
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 3 – Bootstrap & jQuery"), spacer());

// ── Unit 3 / Part 1 ──────────────────────────────────────────────────────────
children.push(h2("Part 1 – Bootstrap 5 Responsive Dashboard"), spacer());
children.push(normal("Topic: Bootstrap 5 grid, Navbar with collapse, cards with flex column layout, responsive table with badges, and Bootstrap utility classes (shadow, border-0, align-middle)."), spacer());

children.push(h3("index.html – Key Sections"), spacer());
children.push(...codeBlock([
  '<!-- CDN Link -->',
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">',
  '',
  '<!-- Responsive Navbar -->',
  '<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">',
  '    <div class="container">',
  '        <a class="navbar-brand" href="#">SystemAdmin</a>',
  '        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"',
  '                data-bs-target="#navbarNav">',
  '            <span class="navbar-toggler-icon"></span>',
  '        </button>',
  '        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">',
  '            <ul class="navbar-nav">',
  '                <li class="nav-item"><a class="nav-link active" href="#">Dashboard</a></li>',
  '                <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>',
  '            </ul>',
  '        </div>',
  '    </div>',
  '</nav>',
  '',
  '<!-- 3-Column Card Grid -->',
  '<div class="row mb-5">',
  '    <div class="col-md-4 mb-3">',
  '        <div class="card h-100 shadow-sm border-0">',
  '            <img src="https://placehold.co/600x400/007bff/fff?text=Analytics"',
  '                 class="card-img-top" alt="Analytics">',
  '            <div class="card-body d-flex flex-column text-center">',
  '                <h5 class="card-title">User Analytics</h5>',
  '                <p class="card-text text-muted">View real-time traffic metrics.</p>',
  '                <a href="#" class="btn btn-outline-primary mt-auto">View Data</a>',
  '            </div>',
  '        </div>',
  '    </div>',
  '    <!-- Repeat col-md-4 for Revenue and Alerts -->',
  '</div>',
  '',
  '<!-- Responsive Table with Status Badges -->',
  '<table class="table table-hover table-bordered align-middle text-center mb-0">',
  '    <thead class="table-light">',
  '        <tr><th>Transaction ID</th><th>Customer</th><th>Amount</th><th>Status</th></tr>',
  '    </thead>',
  '    <tbody>',
  '        <tr>',
  '            <td>#TXN-8472</td><td>Alice Johnson</td><td>$120.50</td>',
  '            <td><span class="badge bg-success">Completed</span></td>',
  '        </tr>',
  '        <tr>',
  '            <td>#TXN-8473</td><td>Bob Smith</td><td>$45.00</td>',
  '            <td><span class="badge bg-warning text-dark">Pending</span></td>',
  '        </tr>',
  '    </tbody>',
  '</table>',
  '',
  '<!-- JS Bundle (includes Popper) -->',
  '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 3 / Part 1"));
children.push(spacer());
children.push(imagePlaceholder("Unit 3 – Part 1: Bootstrap 5 Dashboard webpage"));
children.push(spacer(), spacer());

// ── Unit 3 / Part 2 ──────────────────────────────────────────────────────────
children.push(h2("Part 2 – jQuery Dynamic Form"), spacer());
children.push(normal("Topic: jQuery DOM manipulation – dynamically adding/removing form fields with slideDown/slideUp animations, event delegation for dynamic elements, and serializeArray() for form data."), spacer());

children.push(h3("index.html – jQuery Script Block"), spacer());
children.push(...codeBlock([
  '<!-- Include jQuery from CDN -->',
  '<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>',
  '',
  '<script>',
  '$(document).ready(function() {',
  '',
  '    // 1. Add Field Logic – slideDown animation',
  '    $("#addFieldBtn").click(function(e) {',
  '        e.preventDefault();',
  '        const fieldHTML = `',
  '            <div class="input-group">',
  '                <div class="input-wrapper">',
  '                    <input type="text" name="members[]" placeholder="Enter name..." required>',
  '                    <button type="button" class="btn btn-remove">Remove</button>',
  '                </div>',
  '            </div>`,;',
  '        const $newField = $(fieldHTML);',
  '        $("#fieldWrapper").append($newField);',
  '        $newField.slideDown("fast");',
  '    });',
  '',
  '    // 2. Remove Field Logic – Event Delegation',
  '    $("#fieldWrapper").on("click", ".btn-remove", function() {',
  '        $(this).closest(".input-group").slideUp("fast", function() {',
  '            $(this).remove();',
  '        });',
  '    });',
  '',
  '    // 3. Form Submission with serializeArray()',
  '    $("#dynamicForm").submit(function(e) {',
  '        e.preventDefault();',
  '        const formData = $(this).serializeArray();',
  '        if (formData.length === 0) {',
  '            alert("Please add at least one member before submitting.");',
  '            return;',
  '        }',
  '        console.log("Form Data Submitted:", formData);',
  '        alert("Success! Check your browser console.");',
  '    });',
  '',
  '    // Auto-add first field on page load',
  '    $("#addFieldBtn").click();',
  '});',
  '</script>',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 3 / Part 2"));
children.push(spacer());
children.push(imagePlaceholder("Unit 3 – Part 2: jQuery Dynamic Form webpage"));
children.push(spacer(), pageBreak());

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 4
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 4 – Node.js / Express & MongoDB"), spacer());

// ── Unit 4 / Part 1 ──────────────────────────────────────────────────────────
children.push(h2("Part 1 – User Management CRUD App"), spacer());
children.push(normal("Topic: Full CRUD REST API with Express.js, Mongoose ODM, MongoDB, and a vanilla JS frontend. Covers POST, GET, PUT, DELETE routes with a live table UI."), spacer());

children.push(h3("models/User.js"), spacer());
children.push(...codeBlock([
  'const mongoose = require("mongoose");',
  '',
  'const userSchema = new mongoose.Schema({',
  '    name:  { type: String, required: true },',
  '    email: { type: String, required: true }',
  '});',
  '',
  'module.exports = mongoose.model("User", userSchema);',
]));
children.push(spacer());

children.push(h3("server.js"), spacer());
children.push(...codeBlock([
  'const express    = require("express");',
  'const mongoose   = require("mongoose");',
  'const cors       = require("cors");',
  'const bodyParser = require("body-parser");',
  'const User       = require("./models/User");',
  '',
  'const app = express();',
  'app.use(cors());',
  'app.use(bodyParser.json());',
  'app.use(express.static("public"));',
  '',
  'mongoose.connect("mongodb://127.0.0.1:27017/Assignment_9")',
  '    .then(() => console.log("MongoDB Connected"))',
  '    .catch(err => console.log(err));',
  '',
  '// CREATE',
  'app.post("/", async (req, res) => {',
  '    const user = new User(req.body);',
  '    await user.save();',
  '    res.json(user);',
  '});',
  '',
  '// READ ALL',
  'app.get("/users", async (req, res) => {',
  '    const users = await User.find();',
  '    res.json(users);',
  '});',
  '',
  '// READ ONE',
  'app.get("/users/:id", async (req, res) => {',
  '    const user = await User.findById(req.params.id);',
  '    res.json(user);',
  '});',
  '',
  '// UPDATE',
  'app.put("/:id", async (req, res) => {',
  '    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });',
  '    res.json(user);',
  '});',
  '',
  '// DELETE',
  'app.delete("/:id", async (req, res) => {',
  '    await User.findByIdAndDelete(req.params.id);',
  '    res.json({ message: "User deleted" });',
  '});',
  '',
  'app.listen(3000, () => console.log("Server running on port 3000"));',
]));
children.push(spacer());

children.push(h3("public/index.html – Frontend JS"), spacer());
children.push(...codeBlock([
  '// Load all users on page load',
  'window.onload = loadUsers;',
  '',
  'async function loadUsers() {',
  '    const res = await fetch("/users");',
  '    const users = await res.json();',
  '    userTable.innerHTML = "";',
  '    users.forEach(user => {',
  '        const row = document.createElement("tr");',
  '        row.innerHTML = `',
  '            <td>${user.name}</td>',
  '            <td>${user.email}</td>',
  '            <td class="actions">',
  '                <button onclick="editUser(\'${user._id}\',\'${user.name}\',\'${user.email}\')">Edit</button>',
  '                <button onclick="deleteUser(\'${user._id}\')">Delete</button>',
  '            </td>`;',
  '        userTable.appendChild(row);',
  '    });',
  '}',
  '',
  '// Submit handler – Create or Update',
  'form.addEventListener("submit", async function(e) {',
  '    e.preventDefault();',
  '    const id    = document.getElementById("userId").value;',
  '    const name  = document.getElementById("name").value;',
  '    const email = document.getElementById("email").value;',
  '    if (id) {',
  '        await fetch(`/${id}`, { method: "PUT",',
  '            headers: { "Content-Type": "application/json" },',
  '            body: JSON.stringify({ name, email }) });',
  '    } else {',
  '        await fetch("/", { method: "POST",',
  '            headers: { "Content-Type": "application/json" },',
  '            body: JSON.stringify({ name, email }) });',
  '    }',
  '    form.reset();',
  '    loadUsers();',
  '});',
  '',
  'async function deleteUser(id) {',
  '    await fetch(`/${id}`, { method: "DELETE" });',
  '    loadUsers();',
  '}',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 4 / Part 1"));
children.push(spacer());
children.push(imagePlaceholder("Unit 4 – Part 1: User Management CRUD App webpage"));
children.push(spacer(), spacer());

// ── Unit 4 / Part 2 ──────────────────────────────────────────────────────────
children.push(h2("Part 2 – Task Manager CRUD App"), spacer());
children.push(normal("Topic: Task management REST API with status tracking (Pending / Completed). Separate Task model with a status field default, cleaner route prefixes using /tasks."), spacer());

children.push(h3("models/Task.js"), spacer());
children.push(...codeBlock([
  'const mongoose = require("mongoose");',
  '',
  'const taskSchema = new mongoose.Schema({',
  '    title:  { type: String, required: true },',
  '    status: { type: String, default: "Pending" }  // "Pending" or "Completed"',
  '});',
  '',
  'module.exports = mongoose.model("Task", taskSchema);',
]));
children.push(spacer());

children.push(h3("server.js"), spacer());
children.push(...codeBlock([
  'const express    = require("express");',
  'const mongoose   = require("mongoose");',
  'const bodyParser = require("body-parser");',
  'const Task       = require("./models/Task");',
  '',
  'const app = express();',
  'app.use(bodyParser.json());',
  'app.use(express.static("public"));',
  '',
  'mongoose.connect("mongodb://127.0.0.1:27017/task_manager")',
  '    .then(() => console.log("MongoDB Connected"))',
  '    .catch(err => console.log(err));',
  '',
  '// CREATE Task',
  'app.post("/tasks", async (req, res) => {',
  '    const task = new Task(req.body);',
  '    await task.save();',
  '    res.json(task);',
  '});',
  '',
  '// READ ALL Tasks',
  'app.get("/tasks", async (req, res) => {',
  '    const tasks = await Task.find();',
  '    res.json(tasks);',
  '});',
  '',
  '// UPDATE Task',
  'app.put("/tasks/:id", async (req, res) => {',
  '    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });',
  '    res.json(task);',
  '});',
  '',
  '// DELETE Task',
  'app.delete("/tasks/:id", async (req, res) => {',
  '    await Task.findByIdAndDelete(req.params.id);',
  '    res.json({ message: "Task deleted" });',
  '});',
  '',
  'app.listen(3000, () => console.log("Task Manager running on http://localhost:3000"));',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 4 / Part 2"));
children.push(spacer());
children.push(imagePlaceholder("Unit 4 – Part 2: Task Manager CRUD App webpage"));
children.push(spacer(), pageBreak());

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 5
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 5 – Angular Framework"), spacer());

// ── Unit 5 / Part 1 ──────────────────────────────────────────────────────────
children.push(h2("Part 1 – Angular Routing & Services"), spacer());
children.push(normal("Topic: Angular standalone components, RouterLink / RouterOutlet, defining routes, Angular Dependency Injection with a shared Service, and RxJS BehaviorSubject for reactive state."), spacer());

children.push(h3("app.routes.ts"), spacer());
children.push(...codeBlock([
  "import { Routes } from '@angular/router';",
  "import { HomeComponent } from './home/home.component';",
  "import { About } from './about/about';",
  '',
  'export const routes: Routes = [',
  "  { path: '',      redirectTo: '/home', pathMatch: 'full' },",
  "  { path: 'home',  component: HomeComponent },",
  "  { path: 'about', component: About }",
  '];',
]));
children.push(spacer());

children.push(h3("app.ts – Root Component"), spacer());
children.push(...codeBlock([
  "import { Component, signal } from '@angular/core';",
  "import { RouterLink, RouterOutlet } from '@angular/router';",
  '',
  '@Component({',
  "  selector: 'app-root',",
  '  imports: [RouterLink, RouterOutlet],',
  "  templateUrl: './app.html',",
  "  styleUrl: './app.css'",
  '})',
  'export class App {',
  "  protected readonly title = signal('assignment_11');",
  '}',
]));
children.push(spacer());

children.push(h3("app.html – Router Template"), spacer());
children.push(...codeBlock([
  '<h1>Angular Routing Example</h1>',
  '<a routerLink="/home">Home</a> | <a routerLink="/about">About</a>',
  '<hr>',
  '<router-outlet></router-outlet>',
]));
children.push(spacer());

children.push(h3("service.ts – Shared Service"), spacer());
children.push(...codeBlock([
  "import { Injectable } from '@angular/core';",
  '',
  "@Injectable({ providedIn: 'root' })",
  'export class Service {',
  '  message = "Hello from Angular service, service.ts";',
  '  getMessage() { return this.message; }',
  '}',
]));
children.push(spacer());

children.push(h3("task.service.ts – BehaviorSubject Service"), spacer());
children.push(...codeBlock([
  "import { Injectable } from '@angular/core';",
  "import { BehaviorSubject, Observable } from 'rxjs';",
  '',
  'export interface Task { id: number; title: string; status: string; }',
  '',
  "@Injectable({ providedIn: 'root' })",
  'export class TaskService {',
  '  private tasks: Task[] = [];',
  '  private tasksSubject = new BehaviorSubject<Task[]>([]);',
  '',
  '  getTasks(): Observable<Task[]> { return this.tasksSubject.asObservable(); }',
  '',
  "  addTask(task: Omit<Task, 'id'>) {",
  '    const newTask = { ...task, id: Date.now() };',
  '    this.tasks.push(newTask);',
  '    this.tasksSubject.next([...this.tasks]);',
  '  }',
  '',
  '  updateTask(updatedTask: Task) {',
  '    const index = this.tasks.findIndex(t => t.id === updatedTask.id);',
  '    if (index !== -1) {',
  '      this.tasks[index] = updatedTask;',
  '      this.tasksSubject.next([...this.tasks]);',
  '    }',
  '  }',
  '',
  '  deleteTask(id: number) {',
  '    this.tasks = this.tasks.filter(t => t.id !== id);',
  '    this.tasksSubject.next([...this.tasks]);',
  '  }',
  '}',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 5 / Part 1"));
children.push(spacer());
children.push(imagePlaceholder("Unit 5 – Part 1: Angular Routing & Services app"));
children.push(spacer(), spacer());

// ── Unit 5 / Part 2 ──────────────────────────────────────────────────────────
children.push(h2("Part 2 – Angular Advanced (TypeScript, Generics, Decorators, Reactive Forms)"), spacer());
children.push(normal("Topic: TypeScript interfaces, custom method decorators (@LogAction), generic class repositories (DataRepository<T>), Angular Reactive Forms with FormBuilder/Validators, and ngFor/ngIf directives."), spacer());

children.push(h3("about.model.ts – Interfaces, Generics & Custom Decorator"), spacer());
children.push(...codeBlock([
  '// 1. INTERFACES',
  'export interface IEntity { id: number; }',
  '',
  'export interface TeamMember extends IEntity {',
  '  name: string;',
  '  role: string;',
  '  expertise: string;',
  '}',
  '',
  '// 2. CUSTOM DECORATOR',
  'export function LogAction(message: string) {',
  '  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {',
  '    const originalMethod = descriptor.value;',
  '    descriptor.value = function (...args: any[]) {',
  '      console.log(`[DECORATOR LOG] ${message} - Method: ${propertyKey}`);',
  '      return originalMethod.apply(this, args);',
  '    };',
  '    return descriptor;',
  '  };',
  '}',
  '',
  '// 3. GENERICS – Generic Repository',
  'export class DataRepository<T extends IEntity> {',
  '  private data: T[] = [];',
  '  constructor(initialData: T[] = []) { this.data = initialData; }',
  '  getAll(): T[] { return this.data; }',
  '  add(item: T): void { this.data.push(item); }',
  '  remove(id: number): void { this.data = this.data.filter(item => item.id !== id); }',
  '}',
]));
children.push(spacer());

children.push(h3("about.component.ts – Using Generics & Decorator"), spacer());
children.push(...codeBlock([
  "import { Component, OnInit } from '@angular/core';",
  "import { CommonModule } from '@angular/common';",
  "import { TeamMember, DataRepository, LogAction } from './about.model';",
  '',
  "@Component({ selector: 'app-about', standalone: true, imports: [CommonModule],",
  "             templateUrl: './about.component.html', styleUrls: ['./about.css'] })",
  'export class AboutComponent implements OnInit {',
  '  teamRepo: DataRepository<TeamMember>;',
  '  members: TeamMember[] = [];',
  '',
  '  constructor() {',
  '    this.teamRepo = new DataRepository<TeamMember>([',
  "      { id: 1, name: 'Alice Johnson', role: 'Lead Developer', expertise: 'Angular & TypeScript' },",
  "      { id: 2, name: 'Bob Smith',     role: 'UI/UX Designer',  expertise: 'Figma & CSS' }",
  '    ]);',
  '  }',
  '',
  '  ngOnInit() { this.refreshData(); }',
  '  refreshData() { this.members = this.teamRepo.getAll(); }',
  '',
  "  @LogAction('User clicked Add Member')",
  '  addNewMember() {',
  '    const newMember: TeamMember = {',
  '      id: Date.now(),',
  '      name: "New Hire " + Math.floor(Math.random() * 100),',
  "      role: 'Junior Dev', expertise: 'Learning Fast'",
  '    };',
  '    this.teamRepo.add(newMember);',
  '    this.refreshData();',
  '  }',
  '',
  "  @LogAction('User removed a member')",
  '  removeMember(id: number) {',
  '    this.teamRepo.remove(id);',
  '    this.refreshData();',
  '  }',
  '}',
]));
children.push(spacer());

children.push(h3("home.component.ts – Reactive Forms & TaskService"), spacer());
children.push(...codeBlock([
  "import { Component, OnInit } from '@angular/core';",
  "import { CommonModule } from '@angular/common';",
  "import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';",
  "import { TaskService, Task } from '../task.service';",
  '',
  "@Component({ selector: 'app-home', standalone: true,",
  '  imports: [CommonModule, ReactiveFormsModule],',
  "  templateUrl: './home.component.html', styleUrls: ['./home.css'] })",
  'export class HomeComponent implements OnInit {',
  '  taskForm: FormGroup;',
  '  tasks: Task[] = [];',
  '  editingTaskId: number | null = null;',
  '',
  '  constructor(private fb: FormBuilder, private taskService: TaskService) {',
  '    this.taskForm = this.fb.group({',
  "      title:  ['', Validators.required],",
  "      status: ['Pending', Validators.required]",
  '    });',
  '  }',
  '',
  '  ngOnInit() {',
  '    this.taskService.getTasks().subscribe(data => { this.tasks = data; });',
  '  }',
  '',
  '  onSubmit() {',
  '    if (this.taskForm.invalid) return;',
  '    if (this.editingTaskId) {',
  '      this.taskService.updateTask({ id: this.editingTaskId, ...this.taskForm.value });',
  '      this.editingTaskId = null;',
  '    } else {',
  '      this.taskService.addTask(this.taskForm.value);',
  '    }',
  "    this.taskForm.reset({ status: 'Pending' });",
  '  }',
  '',
  '  editTask(task: Task) {',
  '    this.editingTaskId = task.id;',
  '    this.taskForm.patchValue({ title: task.title, status: task.status });',
  '  }',
  '',
  '  deleteTask(id: number) { this.taskService.deleteTask(id); }',
  '}',
]));
children.push(spacer());

children.push(h3("home.component.html – Reactive Form Template"), spacer());
children.push(...codeBlock([
  '<div class="container">',
  '  <h2>Task Dashboard</h2>',
  '  <form [formGroup]="taskForm" (ngSubmit)="onSubmit()">',
  '    <input type="text" formControlName="title" placeholder="Task Name">',
  '    <select formControlName="status">',
  '      <option value="Pending">Pending</option>',
  '      <option value="Completed">Completed</option>',
  '    </select>',
  '    <button type="submit" [disabled]="taskForm.invalid">',
  "      {{ editingTaskId ? 'Update' : 'Add' }}",
  '    </button>',
  '  </form>',
  '',
  '  <table>',
  '    <tbody>',
  '      <tr *ngFor="let task of tasks">',
  '        <td>{{ task.title }}</td>',
  '        <td>{{ task.status }}</td>',
  '        <td>',
  '          <button (click)="editTask(task)">Edit</button>',
  '          <button (click)="deleteTask(task.id)">Delete</button>',
  '        </td>',
  '      </tr>',
  '      <tr *ngIf="tasks.length === 0">',
  '        <td colspan="3">No tasks found.</td>',
  '      </tr>',
  '    </tbody>',
  '  </table>',
  '</div>',
]));
children.push(spacer());

children.push(h4("Screenshot – Unit 5 / Part 2 – Task Dashboard"));
children.push(spacer());
children.push(imagePlaceholder("Unit 5 – Part 2: Angular Task Dashboard (Home component)"));
children.push(spacer());
children.push(h4("Screenshot – Unit 5 / Part 2 – About / Team Members"));
children.push(spacer());
children.push(imagePlaceholder("Unit 5 – Part 2: Angular About / Team Members (Generic Repository + Decorator)"));
children.push(spacer(), pageBreak());

// ══════════════════════════════════════════════════════════════════════════════
//  UNIT 6
// ══════════════════════════════════════════════════════════════════════════════
children.push(h1("Unit 6 – Additional / Advanced Topics"), spacer());
children.push(h2("Part 2 – (Reserved)"), spacer());
children.push(normal("Unit 6 / Part 2 contains only a package-lock.json (no source files committed yet)."), spacer());
children.push(normal("Add your code and screenshots here once the unit is complete."), spacer());

children.push(h4("Screenshot – Unit 6 / Part 2"));
children.push(spacer());
children.push(imagePlaceholder("Unit 6 – Part 2: Insert screenshot here once content is added"));
children.push(spacer());

// ── BUILD DOC ─────────────────────────────────────────────────────────────────
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Arial", size: 22 } }
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Arial", color: "1A1A2E" },
        paragraph: { spacing: { before: 480, after: 240 }, outlineLevel: 0,
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2E75B6", space: 1 } } }
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 30, bold: true, font: "Arial", color: "2E4057" },
        paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 1 }
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "2E75B6" },
        paragraph: { spacing: { before: 240, after: 80 }, outlineLevel: 2 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("FD_Fastlearner_Code_Reference.docx", buffer);
  console.log("✅ Document created successfully.");
});