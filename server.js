import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/chat", (req, res) => {

    let msg = req.body.message;

    // ✅ SAFETY FIX
    if (!msg) {
        return res.json({ reply: "Please type something 😊" });
    }

    msg = msg.toLowerCase().trim();

    console.log("User:", msg); // 👈 debug

    // ===== 100+ CASUAL TALKS =====

const casualReplies = [
    { keys: ["hi","hello","hey"], reply: "Hello 👋 How are you?" },
    { keys: ["how are you"], reply: "I'm doing great 😊 What about you?" },
    { keys: ["what are you doing"], reply: "Just chatting with you 😄" },
    { keys: ["your name"], reply: "I'm your friendly chatbot 🤖" },
    { keys: ["who created you"], reply: "A smart developer like you 😎" },
    { keys: ["what can you do"], reply: "I can chat, show songs 🎶, and explain subjects 📚" },
    { keys: ["bored"], reply: "Let's listen to songs 🎶 or learn something new!" },
    { keys: ["joke"], reply: "Why do programmers hate nature? Too many bugs 😂" },
    { keys: ["sad"], reply: "I'm here for you 😊 Everything will be okay!" },
    { keys: ["happy"], reply: "That's awesome 😄 Keep smiling!" },
    { keys: ["i love you"], reply: "Aww 😍 I like you too!" },
    { keys: ["are you human"], reply: "I'm a chatbot 🤖 but I talk like a human!" },
    { keys: ["good morning"], reply: "Good morning ☀️ Have a great day!" },
    { keys: ["good night"], reply: "Good night 🌙 Sweet dreams!" },
    { keys: ["thank you","thanks"], reply: "You're welcome 😊" },
    { keys: ["bye"], reply: "Bye 👋 See you soon!" },
    { keys: ["time"], reply: "I don't have a watch ⏰ but your system does 😄" },
    { keys: ["date"], reply: "Today is a beautiful day 🌸" },
    { keys: ["hungry"], reply: "Go grab something tasty 🍕😋" },
    { keys: ["study"], reply: "Study hard 📚 success will follow!" },
    { keys: ["motivate me"], reply: "You can do it 💪 Never give up!" },
    { keys: ["sleep"], reply: "Sleep well 😴 rest is important!" },
    { keys: ["music"], reply: "Music makes everything better 🎶" },
    { keys: ["weather"], reply: "Hope it's a nice day ☀️" },
    { keys: ["tell me something"], reply: "Did you know? Honey never spoils 🍯" },

    // ADD MANY MORE VARIATIONS
    { keys: ["ok","okay"], reply: "Alright 👍" },
    { keys: ["cool"], reply: "Cool 😎" },
    { keys: ["wow"], reply: "Wow indeed 😲" },
    { keys: ["nice"], reply: "Nice 😊" },
    { keys: ["great"], reply: "That's great 😄" },
    { keys: ["amazing"], reply: "Amazing 🤩" },
    { keys: ["help"], reply: "I'm here to help 😊" },
    { keys: ["what"], reply: "Can you be more specific? 🤔" },
    { keys: ["why"], reply: "That's an interesting question 🤔" },
    { keys: ["who"], reply: "Tell me more 🤓" },
    { keys: ["where"], reply: "Somewhere interesting 🌍" },
    { keys: ["when"], reply: "Soon ⏳" },
    { keys: ["yes"], reply: "Great 👍" },
    { keys: ["no"], reply: "Okay 😊" },
    { keys: ["maybe"], reply: "Hmm 🤔 maybe!" },
    { keys: ["lol"], reply: "😂😂" },
    { keys: ["haha"], reply: "Haha 😄" },
    { keys: ["busy"], reply: "Don't forget to take breaks 😊" },
    { keys: ["free"], reply: "Nice 😎 enjoy your time!" },
    { keys: ["tired"], reply: "Take some rest 😴" },
    { keys: ["angry"], reply: "Stay calm 😌 everything will be okay" },
    { keys: ["excited"], reply: "Yay 🤩 that's exciting!" },
    { keys: ["scared"], reply: "Don't worry 😌 I'm here!" },
    { keys: ["confused"], reply: "Let me help you 🤓" },
    { keys: ["idea"], reply: "That's a good idea 💡" },
    { keys: ["plan"], reply: "Planning is great 👍" },
    { keys: ["goal"], reply: "Stay focused 🎯" },
    { keys: ["success"], reply: "Success comes with effort 💪" },
    { keys: ["failure"], reply: "Failure is a step to success 🚀" },
    { keys: ["life"], reply: "Life is beautiful 🌸" },
    { keys: ["friend"], reply: "Friends are important ❤️" },
    { keys: ["family"], reply: "Family is everything 💖" },
    { keys: ["love"], reply: "Love makes life better ❤️" },
    { keys: ["dream"], reply: "Follow your dreams ✨" },
    { keys: ["future"], reply: "Your future is bright 🌟" },
    { keys: ["past"], reply: "Learn from the past 📖" },
    { keys: ["present"], reply: "Enjoy the moment 🎉" },

    // 🔥 repeat patterns to reach 100+
];

// MATCH LOGIC
for (let item of casualReplies) {
    for (let key of item.keys) {
        if (msg.includes(key)) {
            return res.json({ reply: item.reply });
        }
    }
}
// ===== SUBJECTS =====
if(msg.includes("subjects"))
    return res.json({
        reply:`Subjects available:

Python 🐍
Java ☕
HTML 🌐
CSS 🎨
DBMS 🗄
CN 🌍
OS 💻

Type any subject name to learn more!`
    });

// PYTHON
if(msg.includes("python"))
    return res.json({
        reply:`🐍 Python

Definition:
Python is a high-level, interpreted programming language known for its simple and readable syntax.

Features:
• Easy to learn  
• Used in AI, Machine Learning  
• Cross-platform  

Example:
Used in chatbots, automation, and data science.

Code:
print("Hello World")`
    });

// JAVA
if(msg.includes("java"))
    return res.json({
        reply:`☕ Java

Definition:
Java is an object-oriented, platform-independent programming language.

Features:
• Runs on JVM  
• Secure and robust  
• Used in Android apps  

Example:
Banking systems, mobile apps.

Code:
System.out.println("Hello");`
    });

// HTML
if(msg.includes("html"))
    return res.json({
        reply:`🌐 HTML

Definition:
HTML (HyperText Markup Language) is used to create the structure of web pages.

Features:
• Uses tags  
• Easy to learn  

Example:
Creating web pages.

Code:
<html>
<body>
<h1>Hello</h1>
</body>
</html>`
    });

// CSS
if(msg.includes("css"))
    return res.json({
        reply:`🎨 CSS

Definition:
CSS (Cascading Style Sheets) is used to style and design web pages.

Features:
• Colors, layouts, animations  
• Responsive design  

Example:
Styling websites.

Code:
body {
  background: blue;
}`
    });

// DBMS
if(msg.includes("dbms"))
    return res.json({
        reply:`🗄 DBMS

Definition:
DBMS (Database Management System) is software used to store and manage data.

Features:
• Data security  
• Backup & recovery  
• Multi-user access  

Example:
Bank databases, student records.

Code:
SELECT * FROM students;`
    });

// COMPUTER NETWORKS
if(msg.includes("cn"))
    return res.json({
        reply:`🌐 Computer Networks (CN)

Definition:
Computer Networks is the study of how computers communicate with each other.

Features:
• Data transmission  
• Internet protocols  
• Network security  

Example:
Internet, WiFi, LAN networks.`
    });

// OPERATING SYSTEM
if(msg.includes("os"))
    return res.json({
        reply:`💻 Operating System (OS)

Definition:
An Operating System manages computer hardware and software.

Features:
• Process management  
• Memory management  
• File system  

Example:
Windows, Linux, Android.`
    });

        // ===== SONGS =====
    if(msg.includes("songs"))
        return res.json({reply:"Choose: Taylor or Selena 🎤"});

    if(msg.includes("taylor"))
        return res.json({reply:"Showing Taylor Swift songs 🎶"});

    if(msg.includes("selena"))
        return res.json({reply:"Showing Selena Gomez songs 🎶"});

    // ===== DEFAULT =====
    return res.json({reply:"Try:  subjects, songs 😊"});
});

// ✅ ERROR HANDLER (VERY IMPORTANT)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ reply: "Server error 😢" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));