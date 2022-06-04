function passwordGen() {

    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890'
      const randomlyGeneratedChars = [];
      for (let x = 0; x < 8; ++x) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        randomlyGeneratedChars.push(randomChar);
      }
      return randomlyGeneratedChars.join('');
    }