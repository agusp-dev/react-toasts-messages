import { ToastMessage } from './components/ToastMessage'

function App() {
  return (
    <div className="App">
      <div className='absolute right-0 top-0 m-5'>
				<ToastMessage 
					type='success'
					title='SUCCESS!'
					description='This is a success message. Congrats!'/>

				<ToastMessage 
					type='info'
					title='INFORMATION!'
					description='This is a info message. Warning!'/>

				<ToastMessage 
					type='error'
					title='ERROR!'
					description='This is an error message. Danger!'/>
			</div>
    </div>
  );
}

export default App;
