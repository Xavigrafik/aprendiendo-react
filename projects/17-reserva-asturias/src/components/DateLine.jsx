import '../scss/dateLine.scss'

const DateLine = ({ line }) => {
    console.log(line); 
    
    return (
        <li className="dateLine">
            <span className='date'>{line.dateIn}</span> &lt;--&gt; <span className='date'>{line.dateOut}</span> - <span className='user'>{line.user}</span>
        </li>
    )
}

export default DateLine
