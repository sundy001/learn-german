export const textToSpeech = (text: string) => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "de-DE";
  speechSynthesis.speak(msg);
};
