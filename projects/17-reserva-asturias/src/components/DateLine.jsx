import '../scss/dateLine.scss'

const DateLine = ({ line }) => {
    console.log(line); 
    
    return (
        <li className="dateLine">
            <span className='date'>{line.date}</span> - <span className='user'>{line.user}</span>
        </li>
    )
}

export default DateLine
