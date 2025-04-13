document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');
    
    // إضافة رسالة إلى الدردشة
    function addMessage(message, isSent) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isSent ? 'sent' : 'received');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // إرسال رسالة
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            addMessage(message, true);
            messageInput.value = '';
            
            // محاكاة رد من الطرف الآخر
            setTimeout(() => {
                addMessage('تم استلام رسالتك: ' + message, false);
            }, 1000);
        }
    }
    
    // أحداث
    sendBtn.addEventListener('click', sendMessage);
    
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // رسالة ترحيبية
    setTimeout(() => {
        addMessage('مرحباً بك في الدردشة! كيف يمكنني مساعدتك؟', false);
    }, 500);
});
