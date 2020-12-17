import React from 'react'
import successIcon from '../assets/icon-success.png'
import infoIcon from '../assets/icon-info.png'
import errorIcon from '../assets/icon-error.png'

import closeIcon from '../assets/icon-close.png'

const ToastMessage = ({ type, title, description }) => {

	const getBackgroundColor = () => {
		switch (type) {
			case 'success': return 'green'
			case 'info': return 'yellow'
			case 'error': return 'red'
			default: return 'red'
		}
	}

	const getIcon = () => {
		switch (type) {
			case 'success': return successIcon
			case 'info': return infoIcon
			case 'error': return errorIcon
			default: return errorIcon
		}
	}

	return (
		<div className={`flex flex-row bg-${ getBackgroundColor() }-500 border-l-4 border-${ getBackgroundColor() }-800 py-2 px-3 shadow-md mb-2 w-80 rounded`}>
			<div className='mr-3 flex-none'>
				<img width='24' src={ getIcon() } alt='success' />
			</div>
			<div className='flex-grow'>
				<h2 className='text-white font-bold max-w-xs'>{ title }</h2>
				<p className='text-gray-50 text-sm mt-1'>{ description }</p>
			</div>
			<div className='ml-3 flex-none'>
				<img width='24' src={ closeIcon } alt='close' />
			</div>
		</div>
	)
}

export { ToastMessage }