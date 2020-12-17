import { useState } from 'react'
import { ToastMessage } from './components/ToastMessage'

function App() {

	const [successBtn, showSuccessBtn] = useState(false)



  return (
    <div className="App">
			<button 
				className='bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-1 m-5 rounded focus:outline-none'
				onClick={ () => showSuccessBtn(!successBtn) }
				>Show Success Toast
			</button>
      <div className='absolute right-0 top-0 m-5'>
				{successBtn && (
					<ToastMessage 
						type='success'
						title='SUCCESS!'
						description='This is a success message. Congrats!'/>
				)}

				{/* <ToastMessage 
					type='info'
					title='INFORMATION!'
					description='This is a info message. Warning!'/>

				<ToastMessage 
					type='error'
					title='ERROR!'
					description='This is an error message. Danger!'/> */}
			</div>
    </div>
  );
}

export default App;
