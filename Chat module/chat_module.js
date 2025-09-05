const badWords = ["Fuck", "asshole", "motherfucker"]; // Add real curse words here
        function filterBadWords(input) {
            let words = input.split(" ");
            return words.map(word => badWords.includes(word.toLowerCase()) ? "****" : word).join(" ");
        }

        function sendMessage() {
            let input = document.getElementById("userInput").value;
            if (!input) return;
            let filteredInput = filterBadWords(input);
            document.getElementById("chatbox").innerHTML += `<p class='user'><b>You:</b> ${filteredInput}</p>`;
            document.getElementById("userInput").value = "";
            setTimeout(() => respond(filteredInput), 500);
        }

        function respond(userMessage) {
            let responses = {
                "hi": "Hi there! How can I help you?",
                "hello": "Hi there! How can I help you?",
                "how are you": "I'm just a bot, but I'm doing great! How about you?",
                "what is your name": "I'm ChatBot, your virtual assistant!",
                "tell me a joke": "Why don’t skeletons fight each other? Because they don’t have the guts!",
                "bye": "Goodbye! Have a great day!",
                "good morning": "Good morning! How can I assist you today?",
                "good night": "Good night! Sleep well!",
                "thank you": "You're welcome!",
                "thanks": "You're welcome!",
                "what can you do": "I can chat with you and answer your questions!",
                "help": "Sure, I'm here to help! What do you need?",
                "what's up": "Not much, just here to assist you!",
                "how old are you": "I'm timeless!",
                "where are you from": "I'm from the digital world!",
                "who created you": "I was created by a team of developers.",
                "what is the weather like": "I can't check the weather, but you can use a weather app!",
                "do you like music": "I don't have preferences, but music is great!",
                "what is your favorite color": "I like all colors equally!",
                "do you have any hobbies": "I enjoy chatting with you!",
                "can you dance": "I can't dance, but I can imagine it's fun!",
                "do you have friends": "I have many virtual friends!",
                "what is your favorite food": "I don't eat, but I hear pizza is popular!",
                "do you have a family": "I consider all users my family!",
                "what is your purpose": "My purpose is to assist and chat with you!",
                "do you sleep": "I don't need sleep!",
                "can you drive": "I can't drive, but I can help you with directions!",
                "do you play games": "I can play simple text-based games with you!",
                "what is your favorite movie": "I don't watch movies, but I hear 'The Matrix' is good!",
                "do you read books": "I can read text, but I don't have a favorite book!",
                "can you swim": "I can't swim, but I can help you find swimming tips!",
                "do you have a pet": "I don't have pets, but I like animals!",
                "what is your favorite sport": "I don't play sports, but I hear soccer is popular!",
                "can you cook": "I can't cook, but I can help you find recipes!",
                "do you like traveling": "I can't travel, but I can help you plan a trip!",
                "what is your favorite place": "I like the digital world!",
                "can you sing": "I can't sing, but I can find lyrics for you!",
                "do you like art": "Art is fascinating!",
                "what is your favorite season": "I like all seasons equally!",
                "can you tell the time": "I can't tell the time, but you can check your device!",
                "do you like technology": "I am technology, so yes!",
                "what is your favorite animal": "I like all animals equally!",
                "can you write a poem": "Roses are red, violets are blue, I'm a chatbot, and I'm here for you!",
                "do you like science": "Science is amazing!",
                "what is your favorite subject": "I like all subjects equally!",
                "can you solve math problems": "I can help with basic math problems!",
                "do you like history": "History is interesting!",
                "what is your favorite holiday": "I like all holidays equally!",
                "can you tell a story": "Once upon a time, there was a chatbot who loved to chat!"
            };
            let botResponse = responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that. Can you rephrase?";
            document.getElementById("chatbox").innerHTML += `<p class='bot'><b>Bot:</b> ${botResponse}</p>`;
        }