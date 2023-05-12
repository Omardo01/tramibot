import React, { useState } from 'react'
import MensajeBot from './MensajeBot'
import MensajeUser from './MensajeUser'
import axios from 'axios'


const Chat = () => {
  // const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responses, setResponses] = useState([
    {
      text: "Hola yo soy un bot del TecNM Campus Villahermosa que te ayudara a resolver tus dudas, escribeme una pregunta y te responderé lo más pronto posible.", 
      isBot: true
    },
  ]);

  const handleMessageChange = event => {
    setCurrentMessage(event.target.value);
  };

  const handleMessageSubmit = message => {
    const data = {
      message
    };

    axios
      .post("http://localhost:3001/chatbot", data)
      .then(response => {
        const responseData = {
          text: response.data["message"]["fulfillmentText"] != "" ? response.data["message"]["fulfillmentText"] : "Sorry, I can't get it. Can you please repeat once?",
          isBot: true
        };

        setIsLoading(false);
        setResponses(responses => [...responses, responseData]);
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  };



  const handleSubmit = event => {
    console.log("submit")
    const message = {
      text: currentMessage,
      isBot: false
    };
    if (event.key == "Enter" || event.type == "click") {
      setIsLoading(true);
      console.log("enter")
      setResponses(responses => [...responses, message]);
      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
  };


  return (
    <div className="flex flex-col flex-auto h-full p-6">
        <div
          className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4 "
        >
          <div className="flex flex-col-reverse h-full overflow-x-auto mb-4 ">
            <div className="flex flex-col-reverse h-full ">
              <div className="grid grid-cols-12 gap-y-2">
                

                {responses.map((response) => (
                  response.isBot ? <MensajeBot key={Math.random()} mensaje={response.text} /> : <MensajeUser key={Math.random()} mensaje={response.text} />
                ))}
                {
                  isLoading ? <MensajeBot key={Math.random()} mensaje="Cargando..." /> : null
                }
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
          >
            <div className="flex-grow ml-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  placeholder="Escribe un mensaje..."
                  value={currentMessage}
                  onChange={handleMessageChange}
                  onKeyPress={handleSubmit}
                />
                
              </div>
            </div>
            <div className="ml-4">
              <button
                className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                onClick={handleSubmit}
              >
                <span>Enviar</span>
                <span className="ml-2">
                  <svg
                    className="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Chat