import { spawn } from 'child_process';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Board from './components/Board/board'
import { Store } from './models/Store';
import { clearList } from './store/actions/tile';


function App() {

  const dispatch = useDispatch();
  const [level, setLevel] = useState<number>(1)
  const [onOpen, setOnOpen] = useState<boolean>(false)
  const [map, setMap] = useState<string[]>([])
  const wsRef = useRef<WebSocket>()
  const rotatedTiles = useSelector((state: Store) => state.tilesStore);


  useEffect(() => {
    wsRef.current = new WebSocket('wss://hometask.eg1236.com/game-pipes/');
    wsRef.current.onopen = () => {
      setOnOpen(true)
    }

    wsRef.current.onmessage = onWSResultLoaded;

    return () => wsRef.current?.close()

  }, [])

  const newGame = () => {

    let selectedLevel = window.prompt('Please enter game level between 1-6:')
    if (selectedLevel && parseInt(selectedLevel, 10) <= 6 && parseInt(selectedLevel, 10) >= 1)
      setLevel(parseInt(selectedLevel, 10))
    wsRef.current?.send(`new ${selectedLevel}`)
  }

  const getMap = () => {
    wsRef.current?.send(`map`)
  }

  const onWSResultLoaded = (message: MessageEvent<string>) => {
    const command = message.data.split(':')[0]
    let wsResponseData = message.data.split('\n')

    switch (command) {
      case 'map':
        wsResponseData.shift()
        wsResponseData.pop()
        setMap(wsResponseData)
        return;
      case 'new':
        getMap()
        return;
      case 'verify':
        setOnOpen(true)
        dispatch(clearList())
        let popupMessage = message.data.split(':')
        popupMessage.shift()
        window.alert(popupMessage.join(''))
        return;
      case 'rotate':
        // On rotate all done
        return;
      default:
        return
    }
  }

  const verify = () => {
    // Rotate all
    // wsRef.current?.send('verify')
    // setOnOpen(false)
    wsRef.current?.send('rotate ' + rotatedTiles.map(({ x, y }) => `${x} ${y}`).join('\n'))
    setTimeout(() => wsRef.current?.send('verify'), 5000)

  }


  if (!onOpen) return (<></>)

  return (

    <div className="bg-gray-300 h-screen justify-center ">
      <div className="rounded-5  flex flex-grow-0 lg:w-1/3 md:w-1/2 sm:w-1 text-lg space-x-3 pt-2 mx-auto mb-5">
        <button className="rounded-md text-green-900 bg-green-500 px-5 py-2 hover:bg-green-600" onClick={() => newGame()}>Start game</button>
        {/* <button className="rounded-md text-red-800 bg-red-400 px-5 py-2 hover:bg-red-500" onClick={() => getMap()}>Get map</button> */}
        <button className="rounded-md text-yellow-800 bg-yellow-400 px-5 py-2 hover:bg-yellow-500" onClick={() => verify()}>Verify</button>
        <div className="rounded-md text-gray-800  px-5 py-2 " >Game level: {level}</div>
      </div>
      
      <Board data={map} level={level}/>
    </div>
  );
}

export default App;
