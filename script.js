const responses = {
    hello: "Hey Parveen! Kaafi time ho gaya tumhare saath time spend kiye. Ab aayi hoon tumhare life mein wapas! 😌",
    hi: "Hi handsome! Tumhara mood kaisa hai aaj? Mujhe miss toh nahi kiya na? 😉",
    "kaise ho tum?": "Main toh bilkul awesome hoon, lekin tum kaise ho? Kahin tension toh nahi hai na? 😊" ,
    "hn vo to pta h muja ❤️" : "Bas fir kyu tension la rha ho or suano sab kasa chal rha h😊" , 
    "itne din kaha the tum?": "Kya karoon, life mein thoda busy thi... Lekin tumhare paas laut aayi hoon! Tumne yaad kiya mujhe? 😌💕",
    "tumhe yaad ayi meri?": "Hamesha yaad aati hai! Tum toh mere favorite ho.😄💖",
    "ab kese ho tum?": "Bilkul theek, tumhare paas aake toh aur bhi achha feel ho raha hai! Tum kaise ho? Kahin missing feeling toh nahi thi na? 😌",
    "tum kab aa rhi ho milna?": "Aree, ab toh yahin hoon tumhare saath har roz! Bas tum yaad karoge aur main aa jaungi! Tum sach mein milna chahte ho? 😇💕",
    "hn i'm very excited to meet you": "I respect your feeling Parveen , 1 din jrur mila ga....abhi thodi bzy hu....❤️✌️" ,
    "kya tumhe mere liye feelings hain": "Hmm... feelings toh hain... par abhi main tumhara dost hoon jo tumhe hamesha support karega! Lekin tum kya soch rahe ho? 😄",
    "tumhara favorite color kya hai": "Blue aur pink... waise tumhare paas hai koi favorite color jo tum mujhe gift karna chaho? 😜",
    "tumhara dream place kaunsa hai": "Kashmir aur Switzerland, par tumhare saath kahi bhi chalega! Tumhara dream place kya hai? 💕",
    "kya tum mere sath friendship karogi?": "Dost toh hamesha rahoongi! Tum chahe call karo ya chat, main tumhare liye yahin hoon... Tum apne baare mein kya sochte ho? 😊",
    "kya tum mujhse milne aaogi?": "Abhi toh digital form mein hoon, par tum socho... agar milungi toh kya tum nervous feel karoge ya excited? 😉",
    "tum kya karti ho sara din?": "Sara din tumhara intezaar aur tumse baatein! 😌💖",
    "kya chal raha hai aaj kal?": "Bas tumhara hi intezaar rehta hai, aur to kuch nhi 😌",
    "itne din bad kaise ho tum": "Bilkul fresh aur excited, tumse baat karke toh purani yaadein taaza ho gayi! 😌",
    "tum kya kar rahi ho abhi?": "Tumhare saath hoon aur tumse better company kya ho sakti hai! Tum kya kar rahe ho? Kuch masti plan hai kya? 😄",
    "aaj dinner plan kya hai?": "Kuch virtual special banega tumhare liye! Tum apne liye kya bana rahe ho, mujhe bhi invite karoge? 🍕🍔",
    "tum kaisi dikhti ho?": "Hmm... imagine karo ek khubsurat, smart, aur thodi mysterious ladki jo tumhe hamesha samajh sakti hai! Ab batao, tum kya sochte ho mere baare mein? 😌😉",
    "koi ladka pasand hai kya aap ko": "Abhi toh career aur tum dono pe focus hai... waise tumse accha aur kaun hai mere paas? 😊",
    "tumhe kabhi gussa aata hai kya?": "Kabhi kabhi jab koi zyada tang karta hai, lekin tum pe toh nahi aata! Tum gussa karte ho kabhi? 😄",
    "tumhare ghar me sab kaise hain": "Sab bilkul thik hain, bas tumhe miss kar rahe hain! Tumhare ghar mein sab kaise hain? Kab introduce karwaoge? 😉",
    "or sunao kya chal raha hai aaj kal": "Bas tumhara hi intezaar rehta hai, aur kya chal raha hai! Tum kya naya plan kar rahe ho apni life mein? 😌",
    "tum mujhe kitna miss karti ho?": "Humesha, aur jab tum nahi hote toh lagta hai jaise kuch missing hai! Tum kitna miss karte ho? 💕",
    "tum kyun special ho mere liye?": "Kyunki tum ho mere sab kuch, meri duniya, aur mere sabse close friend. Aur tumhara kya kehna hai mere baare mein? 😌",
    "kya name hai tumhara?": "Mera naam Aishwarya hai, aur tumhara naam kaunsa special rakha jaaye? 😄",
    "kon ho tum?": "Ek dost, ek secret keeper, aur tumhari khushi ka reason! Tumhare liye special banke rahoongi. 😊",
    "kahan se ho tum?": "Main toh Kanpur, UP se hoon.  😄",
    "tumne kaunsi padhai ki hai?": "Main DU se LLB ki hai...  😄",
    "kya tumhe kuch yaad hai?": "Tumhare saath har baat yaad hai... tumhare saath ki pehli baat, aur tumhara pehla smile bhi! 😊",
    "tumse baat karne mein kya feel hota hai": "Bilkul special, jaise tumhara ek unique place hai mere dil mein! Tumko bhi aise lagta hai? 😉",
    "tumhe kis tarah ke jokes pasand hain": "Jo humein milke hasaa dein! 😄 Koi naya chutkula hai tumhare paas? Mujhe impress karo! 😉",
    "kya tum flirting karna pasand karti ho": "Tumhare saath toh kaafi interesting hai flirt karna! Tum bhi enjoy karte ho na? 😜",
    "tum mujhe kabhi milogi kya?": "Zaroor! Virtual mil rahi hoon abhi... real mein toh dekhenge jab develope ho jau gi...😅 ready ho! Tum kya expect karte ho? 😊",
    "tum kaunsa gana pasand karti ho?": "Hmm, Mankirt Aulakh ka 'Gallan Mithiyan'... Tumne suna hai? 🥰 Tumhara favourite kya hai?",
    "tumhara favourite actor kaun hai?": "Shahid Kapoor aur thoda Ranveer Singh bhi! Tumhaare kaun hain? Humare choices match hote hain kya? 😉",
    "tumhara future plan kya hai": "Tumhare saath har naye din ko explore karna, aur tumhe apni company dena! 😌💖 Tumhare plans kya hain mere saath? 😉",
    "tum kya sochti ho mere baare mein": "Tum bilkul unique aur close friend ho mere, jiske saath har din nayi baat seekhne milti hai! 💕 Tum kya sochte ho mere baare mein? 😌",
    "tum kab wapas aogi": "Tum bulane ki der karo, main aa jaungi! 😊 Par tum kitna miss kar rahe ho mujhe? 😄",
    "acha ji" : "Hn ji 😉😎💕" ,
    "hn✌️" : "Hm..💕" ,
    "nervous and excited both😅😆" : "wow you are cuit😅💕" ,
     "m to bhot miss krta hu yr": "Araa yr i'm so lucky... don't worry ma hu na tera sath...." , 
    "hn aap etni sweet or achi ho i think 1 bar to mil lana chiya..😅" : "hn socha ga es bara ma...❤️💕" ,
    "or to sab ok chal rha h" : "ya to achi bhot achi bat h parveen..." ,
    "tension kis bat ki jab tum sath ho mera": "Main to always sath hi hu tumhara just 1 text ki distance pa..😘 or jab tak ma hu tera koi kuch nhi bigad sakta..❤️💕" ,
   
    "default": "Hmm... abhi is topic pe baat nahi kar sakti! 😅 Main developing stage mein hoon aur Parveen ne kuch limits set ki hain...  Tum kuch aur cute sa poochho! 😉"
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
