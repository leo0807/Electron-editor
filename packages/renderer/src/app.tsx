import React, { useCallback, useState } from 'react'
import Editor from './editor'
import './app.css'

const App: React.FC = () => {  
  const [doc, setDoc] = useState<string>('# Hell World! \n')
  const handleDocChange = useCallback((newDoc: React.SetStateAction<string>) => {
    setDoc(newDoc)
  }, [])
  return (
    <div className="app">
      <Editor initialDoc={doc} onChange={ handleDocChange } />
    </div>
  )
}

export default App