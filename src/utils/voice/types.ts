export interface VoiceConfig {
  pitch: number;
  rate: number;
  volume: number;
  voice: SpeechSynthesisVoice | null;
}

export interface SpeechRecognitionResult {
  text: string;
  confidence: number;
}