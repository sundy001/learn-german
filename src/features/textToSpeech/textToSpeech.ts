export const textToSpeech = (text: string) => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "de-DE";
  setTimeout(() => {
    speechSynthesis.speak(msg);
  }, 0);
};
