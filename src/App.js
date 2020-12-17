import successIcon from './assets/icon-success.png'
import closeIcon from './assets/icon-close.png'

function App() {
  return (
    <div className="App">
      <div className='absolute right-0 top-0 m-5'>
				<div className='flex flex-row bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2 w-80'>
					<div className='mr-3 flex-none'>
						<img width='24' src={ successIcon } alt='success' />
					</div>
					<div className='flex-grow'>
						<h2 className='text-white font-bold max-w-xs'>SUCCESS!</h2>
						<p className='text-gray-50 text-sm mt-1'>This is a success message. Congrats!</p>
					</div>
					<div className='ml-3 flex-none'>
						<img width='24' src={ closeIcon } alt='close' />
					</div>
				</div>
			</div>
    </div>
  );
}



export default App;
