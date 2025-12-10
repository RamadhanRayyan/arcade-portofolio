// Local rule-based "ArcadeBot" service (No API)

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  // Simulate network delay for realism (300-800ms)
  await new Promise(resolve => setTimeout(resolve, 500));

  const lowerMsg = message.toLowerCase();

  // Keyword matching for ArcadeBot Persona
  // Greetings
  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey') || lowerMsg.includes('start')) {
    return "INITIALIZING... GREETINGS, USER. I AM ARCADEBOT. WELCOME TO RAYYAN'S DIGITAL DOMAIN. SELECT A QUERY: [SKILLS], [PROJECTS], [CONTACT].";
  }

  // Skills
  if (lowerMsg.includes('skill') || lowerMsg.includes('stack') || lowerMsg.includes('tech') || lowerMsg.includes('what do you do')) {
    return "ACCESSING SKILL DATABASE... \n[LOADED]: REACT, TYPESCRIPT, NODE.JS, TAILWIND CSS. \nSTATUS: EXPERT LEVEL. READY FOR DEPLOYMENT.";
  }

  // Projects
  if (lowerMsg.includes('project') || lowerMsg.includes('work') || lowerMsg.includes('portfolio') || lowerMsg.includes('built')) {
    return "SCANNING ARCHIVES... FOUND MULTIFARIOUS PROJECTS. EXPLORE THE GALLERIES ON THE MAIN PAGE TO WITNESS PIXEL-PERFECT EXECUTIONS.";
  }

  // Contact
  if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('social') || lowerMsg.includes('reach')) {
    return "ESTABLISHING UPLINK... \n- GITHUB: CONNECTED\n- INSTAGRAM: ONLINE\n- WHATSAPP: AVAILABLE\nCHECK THE FOOTER FOR TRANSMISSION CHANNELS.";
  }

  // About/Identity
  if (lowerMsg.includes('who are you') || lowerMsg.includes('bot') || lowerMsg.includes('name')) {
    return "IDENTITY CONFIRMED: ARCADEBOT v2.0 (OFFLINE_MODE). PURPOSE: GUIDE USERS THROUGH THIS PORTFOLIO MAZE.";
  }
  
  // Joke/Cheatcode
  if (lowerMsg.includes('konami') || lowerMsg.includes('up up down down')) {
    return "CHEAT CODE ACTIVATED. UNLIMITED LIVES GRANTED... JUST KIDDING. KEEP CODING!";
  }

  // Default Fallback
  return "COMMAND NOT RECOGNIZED. SYNTAX ERROR. PLEASE RETRY WITH: [SKILLS], [PROJECTS], [CONTACT], OR [HELP].";
};
