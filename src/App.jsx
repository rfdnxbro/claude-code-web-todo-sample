import { useState, useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // localStorageからTODOを読み込み
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // TODOが変更されたらlocalStorageに保存
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // TODOを追加
  const handleAddTodo = () => {
    if (inputValue.trim() === '') return

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      createdAt: new Date().toISOString()
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  // TODOを削除
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Enterキーで追加
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      handleAddTodo()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          TODOアプリ
        </h1>

        {/* 入力エリア */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="TODOを入力してください"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTodo}
              disabled={inputValue.trim() === ''}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                inputValue.trim() === ''
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'
              }`}
            >
              登録
            </button>
          </div>
        </div>

        {/* TODOリスト */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            TODOリスト ({todos.length}件)
          </h2>

          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              TODOがありません。上記から追加してください。
            </p>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-800 flex-1">{todo.text}</span>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:bg-green-700 transition-colors font-medium"
                  >
                    完了
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
