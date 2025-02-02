/* General Reset */
body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    color: #333;
}
body {
    line-height: 1.6;
}

/* Header */
header {
    background: #333;
    color: #fff;
    padding: 1em 0;
}
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    padding: 0 1em;
}
nav ul {
    display: flex;
    gap: 1em;
}
nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
}
nav ul li a:hover {
    color: #f0a500;
}

/* Sections */
section {
    padding: 2em 1em;
    max-width: 800px;
    margin: auto;
    text-align: center;
}
#home {
    background: #f0f0f0;
    padding: 4em 1em;
}
#home h1 span {
    color: #f0a500;
}
.btn {
    display: inline-block;
    padding: 0.5em 1.5em;
    margin-top: 1em;
    background: #f0a500;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
}
.btn:hover {
    background: #d78d00;
}

/* Footer */
footer {
    text-align: center;
    padding: 1em 0;
    background: #333;
    color: #fff;
}

/* Certifications Section */
.cert-list {
    list-style: none;
    padding: 0;
}
.cert-list li {
    margin: 1em 0;
}
.cert-list a {
    color: #f0a500;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}
.cert-list a:hover {
    color: #d78d00;
}

/* Modal Styles */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.modal-content {
    background: #fff;
    padding: 1em;
    border-radius: 10px;
    text-align: center;
    position: relative;
}
.modal-content img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.5em;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;
}
.close-btn:hover {
    color: #f0a500;
}

/* Modal Content */
.modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    padding: 1em;
    background: #fff;
    border-radius: 10px;
    text-align: center;
}
/* Modal for PDFs */
.cert-pdf-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 1em;
    max-width: 90%;
    max-height: 80vh;
    overflow-y: auto;
}

/* Certificate Image */
#cert-img {
    max-width: 100%;
    max-height: 300px; /* Adjust as needed */
    margin-bottom: 1em;
    border-radius: 5px;
}

.cert-pdf-container iframe {
    width: 100%;
    height: 200px; /* Adjust height as needed */
    border: none;
}


/* PDF Display */
#cert-pdf {
    width: 100%;
    height: 500px;
    border: none;
}
