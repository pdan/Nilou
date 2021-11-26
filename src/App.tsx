import React, { useEffect, useRef, useState } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import logo from './logo.svg';
import './App.css';
import jso from './sample.json'
import Board from './components/Board'
import { reducers } from './store/reducers';
import { Tile } from './models/tile';
import { Store } from './models/store';


function App() {

  const [level, setLevel] = useState<number>(1)
  const [onopen, setOnopen] = useState<boolean>(false)
  const [map, setMap] = useState<string[][]>([])
  const wsRef = useRef<WebSocket>()


  useEffect(() => {
    // wsRef.current = new WebSocket('wss://hometask.eg1236.com/game-pipes/');
    // wsRef.current.onopen = () => {
    //   setOnopen(true)
    // }
    // wsRef.current.onmessage = (message :MessageEvent<string>) => {
    //   console.log(message.data.split('\n'))
    //   // setMap(message.data.split('\n')[1])
    // }
    // return () => wsRef.current?.close()



    renderMap()
  })

  const newGame = (level: number) => {
    // setLevel(level)
    // console.log(wsRef)
    wsRef.current?.send(`new ${level}`)

    // if (wsRef && ref.current && ref.current.onmessage)
    //   ref.current.onmessage = (e: MessageEvent) => {
    //     console.log(e)
    //   }
  }

  const getMap = () => {
    wsRef.current?.send(`map`)
  }

  const renderMap = () => {
    jso.data.shift()
    jso.data.pop()
    console.log(jso)
    return [...jso.data]
  }

  const onRotate = (x: number, y: number) => {
    console.log(x, y)
    wsRef.current?.send(`rotate ${x} ${y}`)
  }

  const store = createStore(reducers, applyMiddleware(thunk))
  // if (!onopen) return (<></>)

  return (
    <Provider store={store}>
      <div className="bg-blue-300">
        <button onClick={() => newGame(1)}>Start game</button>
        <button onClick={() => getMap()}>Get map</button>
        <Board data={renderMap()} />
      </div>
    </Provider>
  );
}

export default App;
