const textConfig = {
  landing: {
    title: "Happy belated Birthday, Sassy queen! 🎂✨",
    subtitle: "Thank you so much for being such a wonderful friend of mine... I've created something magical just for you💅...",
    lastLine: "Ready for your birthday surprise?",
    button: "Let's Gooo!",
    footer: "Made with endless love for your special year ( •̀  ω •́ )✧",
  },

  // ActivityPage/Letter configuration
  letter: {
    headerTitle: "A Birthday Letter 📨",
    headerSubtitle: "From my heart to the birthday queen",
    letterHeaderTitle: "To The Greatest Sassy Queen!",
    letterMessage: `My dearest birthday girl,

This year marks the first year of your incredible existence in my life, and I couldn't be more grateful to celebrate it with you.

You bring so much joy and laughter into this world... and into my life. You are truely the person who deserves all the blessing you get 🫶`,
    signature: "your dear friend",
    envelopeClickHint: "Click to open your birthday surprise",
    specialDeliveryText: "Birthday Special Delivery 🎂",
    continueButton: "Continue It ✨"
  },

  // Updated and complete Cake Cutting configuration
  cakeCutting: {
    heading: "It's Cake Time! 🎂",
    subheading: "Make your birthday wish come true!",
    instructions: "Draw a line across the middle of the cake to cut it ✂️",
    cuttingPrompt: "Cut your birthday cake, birthday girl! 🔪",
    dragHint: "Drag here to cut! ✂️",
    progressText: "Cutting Progress",
    encouragementText: "Almost there!",
    makeWishTitle: "Time to Make a Wish! ✨",
    wishPrompt: "Close your eyes and make your birthday wish! 🌟",
    wishInstructions: "Think of something wonderful for your new year!",
    wishButton: "I've Made My Wish! 💫",
    wishMadeText: "Wish Complete! 🎉",
    congratulations: "Perfect Cut! 🎉",
    celebrationMessage: "May this year bring you everything your heart desires! ✨",
    continueButton: "Continue Birthday Celebration 🎵",
    sparkleMessages: [
      
    ]
  },

  chillZone: {
    heading: "Birthday Vibes Playlist 🎵",
    subheading: "Songs to celebrate your special day",
    chooseTrackHint: "Choose your birthday soundtrack ✨",
    continueButton: "Continue to Birthday Surprises ✨",
    tracks: [
      { id: 1, title: "prettiest girl!", caption: "Because today is all about YOU, queen! 👑" },
      { id: 2, title: "Wildflower and Barley", caption: "Here's to making this year unforgettable 🌟" },
      { id: 2, title: "cheri cheri lady", caption: "Every beat celebrates your beautiful heart 🫀" },
    ]
  },

  cards: {
    heading: "Birthday Wishes Cards 🎁",
    subheading: "Click each card to reveal a birthday message!",
    tapLabel: "✨ Open!",
    progress: {
      start: "Start discovering your birthday surprises ✨",
      discovered: (n, total) => `${n} of ${total} birthday wishes unlocked! Keep going 🎉`,
      complete: "Amazing! All birthday wishes revealed! 🎂✨"
    },
    popup: {
      title: "All Birthday Wishes Unlocked!",
      message: "Each wish carries my love and hopes for your amazing new year ahead. ✨",
      openFinal: "Open Final Birthday Letter 🌟",
      stay: "Enjoy the wishes a bit longer"
    },
    cardMessages: [
      "Every 'shai baat hai', every 'badhiya hai',every 'Acha hai' you've ever said, literally 🤌.",
      "With your shyness and introvert nature like barley you do have a secret expressive and wild nature like wildflower! which is what makes you, YOU.",
      "May this new year bring you endless joy, love, and all the dreams your heart desires! 🌟💖"
    ]
  },

  finalLetter: {
    // Page header
    pageTitle: "Final Birthday Letter",
    pageSubtitle: "A special message.🐻‍❄️",
    
    // Letter content
    title: "Final Birthday Letter",
    letterIcon: "🤍",
    stickerAlt: "Letter",
    
    // Sealing animation
    sealingText: "Sealing your birthday wishes...",
    sealingEmoji: "🎀",
    
    // Buttons
    sealButton: "Seal The Letter 🎂",
    restartButton: "Experinece Again",
    
    // Sealed state
    sealedTitle: "Birthday Letter Sealed with friendship",
    sealedSubtitle: "Happy Birthday, Sassy queen 🎉",
    sealedEmoji: "🐻‍❄️",
    heartCount: 7,
    
    // Signature and actions
    typedDefault: "Your bestfriend, Happy Birthday! 🎂",
    experienceAgain: "Experience Birthday Magic Again ✨",
    sendKissButton: "Send Birthday Cakes 🎂",
    dateLocale: "en-US",
    
    // Decorative elements
    decorativeEmojis: {
      topRight: "✨",
      bottomLeft: "💫"
    },
    
    // Letter content
    letterGreeting: "My dearest birthday princess,",
    letterParagraphs: [
      "May this new year bring you everything your heart desires and more joy than you can imagine.",
      "Don't lose your uniqueness, stay happy stay blessed 🎂✨",
      "Once again, A very Happy Birthday!!! "
    ],
    sealingNote: "Sealing will complete your birthday experience."
  },

  common: {
    continue: "Continue Birthday Adventure ✨",
    close: "Close",
    ok: "OK"
  }
};

export default textConfig;