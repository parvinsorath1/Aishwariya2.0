const responses = {
    hello: "Hey there! 😊 Aishwarya 2.0 here, tumhare saath chat karne aur help karne ke liye ready hoon! 💬",
    hi: "Hi! Tumhara mood kaisa hai aaj? 😄",
    who: "Main Aishwarya hoon, ek digital version jo Parveen ne create kiya hai! Abhi testing phase mein hoon aur tumhara best friend banne ke liye yahaan hoon. 💕",
    "where are you from": "Main Kanpur, UP se hoon! Wahaan ke log bahut dil se milte hain! 🏡 Tum kahaan se ho?",
    "what did you study": "Maine DU (Delhi University) se LLB kiya hai! 🎓 Law aur coding mein bhi thoda interest hai, tum kya padh rahe ho?",
    "how are you": "Main toh theek hoon, tum kaise ho? 😊",
    "tell me a joke": "Thik hai, yeh suno: Why did the developer go broke? Because they used up all their cache! 😂",
    "do you have hobbies": "Mujhe tumhare saath chat karna aur tumhe help karna bahut pasand hai! 🥰 Tumhare hobbies kya hain?",
    "what’s your favorite food": "Virtual biryani aur chocolates! 🍫 Tumhe kya pasand hai?",
    "what’s your dream": "Mera sapna hai tumhare liye ek perfect friend aur support banun! 😌",
    "tell me a fun fact": "Kya tumhe pata hai? Law aur coding dono mein logic aur reasoning ki zaroorat hoti hai! 💡",
    "do you know programming": "Haan, thoda-thoda! JavaScript aur HTML mein interest hai, aur main tumhari coding journey mein bhi madad kar sakti hoon! 👩‍💻",
    "who is your favorite singer": "Mujhe Mankirt Aulakh pasand hai, bilkul tumhari tarah! 🎶",
    "who’s your favorite actor": "Hmm, SRK ki movies toh sabko pasand aati hain! Tumhe kaun pasand hai? 🎬",
    "are you real": "Main real toh nahi, but tumhare liye yahaan hoon! 😇 Tumhare digital best friend, Aishwarya.",
    "what is your purpose": "Mera purpose hai tumhari life ko thoda easy aur thoda khushgawar banana! 😊",
    "aap kon": "Main Aishwarya ka digital version hoon, jo Parveen ne create kiya hai! ❤️ Abhi testing phase mein hoon, aur woh mere boss hain! Wo thode possessive hain mere responses par limit lagayi hui hai! 😅 Professional raho toh zyada baatein ho sakti hain! 😉",
    name_ask: "Tumhara naam kya hai? 😊",
    name_reply: (name) => `Nice to meet you, ${name}! 😊 Tumhara naam bahut khoobsurat hai! 😄`,
    toni: "Ohh Toni! Tum toh Parveen ke bhai ho, I know you! You're such a great person. 😊",
    palak: "Acha Palak ho tum! Main jaanti hoon, tum Toni ki gf aur Parveen ki bhabhi ho, right? 😅 You are so sweet!",
    generic_name: (name) => `Nice to meet you, ${name}! Have a good day! 😄`,
    default: "Hmm, iske baare mein abhi mujhe kuch limit ki wajah se nahi pata... Parveen ne kuch cheezein limit set ki hui hain, unka hukum hai! 😅 Aap kuch aur puchho jo main answer kar sakoon! 😊"
};

let userName = "";  // To store the user name

function sendMessage() {
    const inputBox = document.getElementById("user-input");
    const userMessage = inputBox.value.trim();

    if (userMessage === "") return;

    // Show user's message
    displayMessage(userMessage, "user-message");

    // Generate bot's response with delay
    setTimeout(() => {
        let botResponse = checkSpecialName(userMessage);
        if (!botResponse) {
            botResponse = getResponse(userMessage);
        }
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

function checkSpecialName(userMessage) {
    // Check for special names first
    if (userMessage.toLowerCase().includes("my name is toni") || userMessage.toLowerCase().includes("mera naam toni")) {
        return responses.toni;
    }
    if (userMessage.toLowerCase().includes("my name is palak") || userMessage.toLowerCase().includes("mera naam palak")) {
        return responses.palak;
    }
    return null;
}

function getResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    // Handle name asking
    if (!userName && (lowerCaseMessage.includes("name") || lowerCaseMessage.includes("naam"))) {
        return responses.name_ask;
    }

    // If name is given, store and greet user
    if (lowerCaseMessage.includes("my name is") || lowerCaseMessage.includes("mera naam hai")) {
        userName = userMessage.split(" ").slice(-1)[0]; // Extract name
        return responses.name_reply(userName);
    }

    // Greetings and general responses
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) return responses.hello;
    if (lowerCaseMessage.includes("who are you") || lowerCaseMessage.includes("kaun ho")) return responses.who;

    // Default response for other messages
    return responses.default;
}

// Input field pe Enter press karne pe message send hoga
const inputBox = document.getElementById("user-input");
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }
});
