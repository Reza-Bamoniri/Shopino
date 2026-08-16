type MessagePropType = {
    message: string
}

const Message = ({message}: MessagePropType) => {
  return (
    <div className='text-sm line-clamp-4 font-medium text-slate-600 text-justify ps-12'>
        {message}
    </div>
  )
}

export default Message