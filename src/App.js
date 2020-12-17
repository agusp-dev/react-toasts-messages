import { useState } from 'react'
import { ToastMessage } from './components/ToastMessage'

function App() {

	const [successBtn, showSuccessBtn] = useState(false)
	const [infoBtn, showInfoBtn] = useState(false)
	const [errorBtn, showErrorBtn] = useState(false)

	const onHandleClose = type => {
		switch (type) {
			case 'success': return showSuccessBtn(false)
			case 'info': return showInfoBtn(false)
			case 'error': return showErrorBtn(false)
			default: return showErrorBtn(false)
		}
	}

  return (
    <div className="App">
			<div className='flex flex-col w-60'>
				<button 
					className='bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-1 m-5 rounded focus:outline-none'
					onClick={ () => showSuccessBtn(true) }
					>Show Success Toast
				</button>

				<button 
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-3 py-1 m-5 rounded focus:outline-none'
					onClick={ () => showInfoBtn(true) }
					>Show Info Toast
				</button>

				<button 
					className='bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 m-5 rounded focus:outline-none'
					onClick={ () => showErrorBtn(true) }
					>Show Error Toast
				</button>
			</div>

      <div className='absolute right-0 top-0 m-5'>
				{successBtn && (
					<ToastMessage 
						type='success'
						title='SUCCESS!'
						description='This is a success message. Congrats!'
						onClose={ onHandleClose }/>
				)}

				{infoBtn && (
					<ToastMessage 
						type='info'
						title='INFORMATION!'
						description='This is a info message. Warning!'
						onClose={ onHandleClose }/>
				)}

				{errorBtn && (
					<ToastMessage 
						type='error'
						title='ERROR!'
						description='This is an error message. Danger!'
						onClose={ onHandleClose }/>
				)}
			</div>
    </div>
  );
}

export default App;
