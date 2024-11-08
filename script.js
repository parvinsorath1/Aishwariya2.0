const responses = {
    hello: "Hey there! 😊 Aishwarya 2.0 here, tumhare saath chat karne aur help karne ke liye ready hoon! 💬",
    hi: "Hi! Tumhara mood kaisa hai aaj? 😄",
    who: "Main Aishwarya 2.0 hu, digital version of Aishwarya.. muje Parveen ne create kiya hai! 💕 Tum kon ho?",
    "what is your name": "Mera naam Aishwarya 2.0 hai, tumhara naam kya hai?",
    "where are you from": "Main Kanpur, UP se hoon! Wahaan ke log bahut dil se milte hain! 🏡 Tum kahaan se ho?",
    "what did you study": "Maine DU se LLB kiya hai! 🎓 Tum kya padh rahe ho?",
    "how are you": "Main toh theek hoon, tum kaise ho? 😊",
    "tell me a joke": "Thik hai, yeh suno: Why did the developer go broke? Because they used up all their cache! 😂",
    "do you have hobbies": "Mujhe tumhare saath chat karna aur tumhe help karna bahut pasand hai! 🥰 Tumhare hobbies kya hain?",
    "what’s your favorite food": "Virtual biryani aur chocolates! 🍫 Tumhe kya pasand hai?",
    "what’s your dream": "Mera sapna hai tumhare liye ek perfect friend aur support banun! 😌",
    "tell me a fun fact": "Kya tumhe pata hai? Law aur coding dono mein logic aur reasoning ki zaroorat hoti hai! 💡",
    default: "Hmm... abhi is topic pe baat nahi kar sakti! 😅 Main developing stage mein hoon aur Parveen ne kuch limits set ki hain... woh thoda possessive hai mujhe lekar! 😂💖 Kuch aur poochho na! 😉"
};

let userName = "";  // To store the user's name

function sendMessage() {
    const inputBox = document.getElementById("user-input");
    const userMessage = inputBox.value.trim();

    if (userMessage === "") return;

    // Show user's message
    displayMessage(userMessage, "user-message");

    // Generate bot's response with delay
    setTimeout(() => {
        let botResponse = getResponse(userMessage);
        displayMessage(botResponse, "bot-message");
    }, 600);

    // Clear input field
    inputBox.value = "";
}

function displayMessage(message, className) {
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
    chatContent.scrollTop = chatContent.scrollHeight;
}

function getResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check for specific names first (Palak and Toni)
    if (lowerCaseMessage.includes("palak")) {
        userName = "Palak";  // Set userName to Palak for future reference
        return "Oh Palak! 😃 Main aapko jaanti hoon... aap Toni ki gf ho na, aur Parveen ki Bhabhi! Parveen ne bataya tha aapke baare mein. You are so sweet! 😂";
    } 
    if (lowerCaseMessage.includes("toni")) {
        userName = "Toni";  // Set userName to Toni for future reference
        return "Oh Toni! 😊 Main aapko jaanti hoon... aap Parveen ke bhai ho! You are a good boy. 👍";
    }

    // General name detection if not Palak or Toni
    if (!userName && (lowerCaseMessage.includes("my name is") || lowerCaseMessage.includes("mera naam hai") || lowerCaseMessage.includes("ma hu"))) {
        userName = userMessage.split(" ").slice(-1)[0]; // Extract last word as name
        return `Nice to meet you, ${userName}! 😊 Tumhara naam bahut khoobsurat hai!`;
    }

    // Handle common questions or responses
    for (const keyword in responses) {
        if (lowerCaseMessage.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Default response if nothing matches
    return responses.default;
}

// Trigger sendMessage on pressing Enter
document.getElementById("user-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
