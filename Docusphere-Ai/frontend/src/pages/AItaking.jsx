import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mic, Volume2, Brain } from 'lucide-react';
import { useTheme } from '../hooks/usetheme';
import  {  useEffect, useRef, useState } from "react"
import { getGeminiResponse } from '../services/operation/gemini';
import { useSelector } from 'react-redux';
import WavyBackground from '../components/ui/wave';
export const AITalkingAgent = () => {
  const { theme } = useTheme();
      const [listening, setListening] = useState(false)
    const [aiText,setAiText] = useState("")
    const [userText, setUserText] = useState("")
    const isSpeakingRef = useRef(false)
    const recognitionRef = useRef(null)
    const isRecognizingRef = useRef(false)
    const synth = window.speechSynthesis
      const { signupData} = useSelector((state) => state.auth);

//aitker
    const handleCommand = async (data)=>{
        const {response,type,userInput} = data
        speak(response);

        if(type === 'google_search'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.google.com/search?q=${query}`,'_blank');
        }

        if(type === 'youtube_search'|| type === 'youtube_play'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.youtube.com/results?search_query=${query}`,'_blank');
        }

        if(type === 'calculator_open'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.google.com/search?q=calculator`,'_blank');
        }

        if(type === 'instagram_open'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.instagram.com/`,'_blank');
        }

        if(type === 'facebook_open'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.facebook.com/`,'_blank');
        }

        if(type === 'weather_show'){
            const query=encodeURIComponent(userInput)
            window.open(`https://www.google.com/search?q=weather`,'_blank');
        }

    }
  const startRecognization = ()=>{
        if(!isSpeakingRef.current && !isRecognizingRef.current){
            try {
                recognitionRef.current?.start();
                console.log("Recognition requested to start");
                
            } catch (error) {
                if(error.name !== "InvalidStateError"){
                    console.error("start error:", error);
                    
                }
            }
        }
    }
 const speak = (text)=>{
        const uttrence = new SpeechSynthesisUtterance(text)
        isSpeakingRef.current = true

        uttrence.onend = ()=>{
            setAiText("")
            isSpeakingRef.current =false;
            setTimeout(()=>{
                startRecognization()
            },800)
            
        }
        synth.cancel()
        synth.speak(uttrence)
    }
       useEffect(()=>{
        const speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition

        const recognition =new speechRecognition()

        recognition.continuous = true;
        recognition.lang ='en-US'
        recognition.interimResults = false;

        recognitionRef.current = recognition

        let isMounted = true;

        const startTimeout = setTimeout(()=>{
            if(isMounted && !isSpeakingRef.current && !isRecognizingRef.current){
                try {
                    recognition.start();
                    console.log("Recognition requested to start");
                    
                } catch (error) {
                    if(error.name !== "InvalidStateError"){
                        console.error(error);
                        
                    }
                }
            }
        },1000);

       recognition.onstart= ()=>{
            console.log("Recognition started");
            isRecognizingRef.current = true;
            setListening(true);
       }


       recognition.onend= ()=>{
            console.log("Recognition ended");
            isRecognizingRef.current = false;
            setListening(false);

            if(isMounted && !isSpeakingRef.current ){
                setTimeout(() => {
                    if(isMounted){
                        try {
                            recognition.start();
                            console.log("Recognition restarted");
                            
                        } catch (error) {
                            if(error.name !== "InvalidStateError") console.error(error);
                            
                        }
                    }
                }, 3000);
            }
       }


       recognition.onerror= (event)=>{
            console.warn("Recognition error:", event.error);
            isRecognizingRef.current = false;
            setListening(false);

            if(event.error !== "aborted" && isMounted && !isSpeakingRef.current ){
                setTimeout(() => {
                    if (isMounted) {
                        try {
                            recognition.start();
                            console.log("Recognition restarted after error");
                            
                        } catch (error) {
                            if(error.name !== "InvalidStateError") console.error(error);
                            
                        }
                    }
                }, 3000);
            }
       }


        recognition.onresult=async (e)=>{
          
          const transcript = e.results[e.results.length-1][0].transcript.trim();
          console.log("Heard : ", transcript);
          try {
            // Ignore transcript if it is just "hey" or starts with "hey"
            if (
              transcript.toLowerCase() === "hey" ||
              transcript.toLowerCase().startsWith("hey ")
            ) {
              // Do nothing, skip processing "hey"
              return;
            }
            setAiText("");
            setUserText(transcript);
            recognition.stop();
            isRecognizingRef.current = false;
            setListening(false);

            if (!transcript) {
              console.warn("Transcript is empty, not sending request.");
              return;
            }

            // Intercept "what is docusphere" questions and reply directly
            if (
              /what\s+is\s+docusphere/i.test(transcript) ||
              /who\s+are\s+you/i.test(transcript) ||
              /about\s+docusphere/i.test(transcript)
            ) {
              console.log("Custom DocuSphere response triggered for:", transcript);
              const docuSphereMsg = `I am DocuSphere AI, an intelligent assistant created with passion and vision by Sufyaan and Rehaan. Together, they built the platform AI dashboard, a space where artificial intelligence becomes a true companion for everyone.

This platform is more than just a single tool — it is a dashboard of AI, you can explore everything here: ask questions, get clear answers, summarize documents, organize data, and even have natural conversations with AI.

My purpose is simple: to make your work easier, faster, and smarter. Whether you’re a student, a professional, or simply curious.

Sufyaan and Rehaan created this platform with the belief that AI should not be complicated or limited. Their mission is to build an environment where technology feels friendly, reliable, and accessible to everyone.

So whenever you ask.`;
              setUserText(transcript);
              setAiText(docuSphereMsg);
              speak(docuSphereMsg);
              recognition.stop();
              isRecognizingRef.current = false;
              setListening(false);
              return;
            }

            console.log("Sending to Gemini API:", { command: transcript });
            const data = await getGeminiResponse(transcript);
            console.log("Gemini response:", data);
            handleCommand(data);
            setAiText(data.response);
            setUserText("");
          } catch (error) {
            console.log("Gemini error:", error);
          }
        }

        const greeting = new SpeechSynthesisUtterance(`Hello ${signupData?.name}, What can I help you with?`);
        window.speechSynthesis.speak(greeting)

        return ()=>{
            isMounted = false;
            clearTimeout(startTimeout);
            recognition.stop()
            setListening(false)
            isRecognizingRef.current = false
        }
        
    },[])


  const capabilities = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in human-like conversations with advanced AI',
    },
    {
      icon: Mic,
      title: 'Voice Input',
      description: 'Speak naturally and AI will understand your commands',
    },
    {
      icon: Volume2,
      title: 'Voice Output',
      description: 'AI responds with natural, synthesized speech',
    },
    {
      icon: Brain,
      title: 'Context Awareness',
      description: 'Maintains conversation context for meaningful interactions',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-12">
       
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold mb-4"
          style={{ color: theme.text }}
        >
          AI Talking Agent
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
          style={{ color: theme.textSecondary }}
        >
          Experience natural, intelligent conversations with our advanced AI agent.
          Voice-enabled interactions for seamless communication.
        </motion.p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {capabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border backdrop-blur-sm text-center"
              style={{
                backgroundColor: `${theme.surface}80`,
                borderColor: theme.border,
              }}
            >
              <div
                className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center mx-auto"
                style={{ backgroundColor: theme.accent }}
              >
                <Icon size={20} color={theme.background} />
              </div>
              <h3 className="text-sm font-semibold mb-2" style={{ color: theme.text }}>
                {capability.title}
              </h3>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {capability.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Chat Interface Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="rounded-3xl border overflow-hidden"
        style={{
          backgroundColor: theme.surface,
          borderColor: theme.border,
        }}
      >
        {/* Chat Header */}
        <div
          className="p-6 border-b"
          style={{ borderColor: theme.border }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "white" }}
            >
              <Brain size={20} color={theme.background} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold" style={{ color: theme.text }}>
                AI Assistant
              </h3>
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "red" }}
                />
                <span className="text-xs" style={{ color: theme.textSecondary }}>
                  Ready to chat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
         <WavyBackground>
        <div className="p-6 space-y-4 min-h-[300px] flex flex-col justify-center">
        
          <div className="text-center">
            
              <div>
                <h2 className="w-full flex flex-wrap flex-col items-center justify-center mb-2 mt-2 pb-2">
                  <span className="flex flex-wrap items-center justify-center gap-3 text-3xl font-extrabold text-center">
                    <span className="inline-block animate-bounce text-4xl">🤖</span>
                <span className="flex flex-wrap justify-center">
                  <span className="rounded-xl text-white">Hi... I'm</span>
                  <span className="ml-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-black font-black">AI DOCUSPHERE</span>
                            </span>
                        </span>
                    </h2>
                    <h1 className=" text-amber-50 text-wrap ">{userText?userText:aiText?aiText:null}</h1>
                   </div>
         
          </div>
          
        </div>
        </WavyBackground>
      </motion.div>
    </motion.div>
  );
};
