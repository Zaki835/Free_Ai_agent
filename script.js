// script.js

document.addEventListener("DOMContentLoaded", () => { const geminiInput = document.getElementById("geminiApi"); const userAgentInput = document.getElementById("userAgent"); const taskInput = document.getElementById("taskInput");

// Load from localStorage geminiInput.value = localStorage.getItem("geminiApi") || ""; userAgentInput.value = localStorage.getItem("userAgent") || "";

// Save Gemini API document.getElementById("saveGemini").addEventListener("click", () => { const value = geminiInput.value.trim(); if (value) { localStorage.setItem("geminiApi", value); alert("Gemini API key saved!"); } });

// Save User Agent document.getElementById("saveUserAgent").addEventListener("click", () => { const value = userAgentInput.value.trim(); if (value) { localStorage.setItem("userAgent", value); alert("User Agent saved!"); } });

// Run Task button handler (to be extended) document.getElementById("runTask").addEventListener("click", () => { const task = taskInput.value.trim(); if (!task) return alert("Please enter a task.");

const geminiApi = localStorage.getItem("geminiApi"); const userAgent = localStorage.getItem("userAgent"); if (!geminiApi || !userAgent) { return alert("Please make sure Gemini API and User Agent are saved."); } // Placeholder: show task and simulate browser behavior document.getElementById("browserView").textContent = `Running: ${task}...`; // هنا لاحقاً يتم الاتصال بـ backend أو playwright 

}); });

