import axios from "axios";
import {useState} from "react"
import { FcSpeaker } from "react-icons/fc";
function App() {

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en_US/";
  const [search, setSearch] = useState('');
  const [wordInfo, setWordInfo] = useState(null);


  const getWordInfo = async () => {
    try {
      const response = await axios.get(`${url}${search}`);
      setWordInfo(response.data[0]);
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  const playAudio = () => {
    const audio = new Audio(wordInfo.phonetics[0].audio);
    audio.play();
  }

  return (
    <>
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Dictionary App</h1>
        
        <div className="flex gap-x-4">
            <input
              type="text"
              placeholder="Search a word..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={getWordInfo}
              type="button"
              className="cursor-pointer px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Search
            </button>
        </div>

        {wordInfo && (
          <div className="bg-white shadow-lg p-4 rounded-lg">
            <div className="flex gap-2">
              <h2 className="text-xl font-bold mb-2">{wordInfo.word}</h2>
              <span className="text-gray-600">
                  <button onClick={playAudio} className="cursor-pointer"><FcSpeaker size="26px" /></button>
              </span>
            </div>
            {/* definitions */}
            <h4>Parts of Speech</h4>
            <p className="text-gray-600 mb-2">{wordInfo.meanings[0].partOfSpeech}</p>
            <h4>Meanings</h4>
            <p className="text-gray-600 mb-2">{wordInfo.meanings[0].definitions[0].definition}</p>
            
            <h4>Definitions</h4>
            <p className="text-gray-600 whitespace-pre-line">
              {wordInfo.meanings[0].definitions.map((definition) => definition.definition).join("\n")}
            </p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
