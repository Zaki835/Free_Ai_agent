// عناصر الإدخال
const apiGeminiInput = document.getElementById('apiGemini');
const userAgentInput = document.getElementById('userAgent');
const ngrokKeyInput = document.getElementById('ngrokKey');
const customInput = document.getElementById('customInput');
const webview = document.getElementById('webview');

// تحميل البيانات المحفوظة
window.onload = () => {
  const savedApi = localStorage.getItem('apiGemini');
  const savedUserAgent = localStorage.getItem('userAgent');
  if (savedApi) apiGeminiInput.value = savedApi;
  if (savedUserAgent) userAgentInput.value = savedUserAgent;
};

// حفظ API
function saveApiGemini() {
  localStorage.setItem('apiGemini', apiGeminiInput.value.trim());
  alert('API Gemini Saved!');
}

// حفظ User Agent
function saveUserAgent() {
  localStorage.setItem('userAgent', userAgentInput.value.trim());
  alert('User Agent Saved!');
}

// لا يتم حفظ مفتاح ngrok
function noSaveNgrok() {
  alert('Ngrok key is not stored!');
}

// تنفيذ عند الضغط على INTER
function runInter() {
  const userAgent = localStorage.getItem('userAgent') || '';
  const input = customInput.value.trim();
  if (input === '') {
    alert('Please enter a URL or command.');
    return;
  }

  // فتح الرابط داخل iframe
  webview.src = input;

  // تعديل User Agent (تنبيه فقط لأن تغيير user agent من iframe يتطلب حلول متقدمة)
  console.log("Using User Agent: " + userAgent);
}
