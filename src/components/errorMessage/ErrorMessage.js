import error from './gif-marvel-24.gif';

const ErrorMessage = () => {
    return (
        <img src={error} alt='error' style={{display: 'block', width: "250px", height: "250px", objectFit:'contain', margin: '0 auto'}}/>
    )
}

export default ErrorMessage;