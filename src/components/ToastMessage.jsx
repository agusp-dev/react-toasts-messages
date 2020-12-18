import React, { Fragment, useEffect, useRef } from 'react'
import successIcon from '../assets/icon-success.png'
import infoIcon from '../assets/icon-info.png'
import errorIcon from '../assets/icon-error.png'
import closeIcon from '../assets/icon-close.png'
import './ToastMessage.css'

const ToastMessage = ({ type, title, description, onClose }) => {

	const toastRef = useRef(null)

	let toastId

	useEffect(() => {
		toastId = setTimeout(() => {
			onHandleCloseToast()
		}, 5000)
	}, [])

	const closeToast = () => {
		if (toastRef && toastRef.current) {
			toastRef.current.classList.remove('show')
			toastRef.current.classList.add('dismiss')	
		}
		setTimeout(() => {
			onClose(type)
		}, 200)
	}

	const onHandleCloseToast = () => {
		if (toastId) {
			clearTimeout(toastId)
		}
		closeToast()
	}

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
		<Fragment>
			<div 
				className={`flex flex-row bg-${ getBackgroundColor() }-500 border-l-4 border-${ getBackgroundColor() }-800 py-2 px-3 shadow-md mb-2 w-80 rounded show`}
				ref={ toastRef }>
				<div className='mr-3 flex-none'>
					<img width='24' src={ getIcon() } alt='success' />
				</div>
				<div className='flex-grow'>
					<h2 className='text-white font-bold max-w-xs'>{ title }</h2>
					<p className='text-gray-50 text-sm mt-1'>{ description }</p>
				</div>
				<div className='ml-3 flex-none'>
					<img
						className='cursor-pointer'
						width='24px' 
						src={ closeIcon } 
						alt='close'
						onClick={ onHandleCloseToast } />
				</div>
			</div>
		</Fragment>
	)
}

export { ToastMessage }