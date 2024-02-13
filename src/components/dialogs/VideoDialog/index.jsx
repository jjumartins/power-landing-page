export const VideoDialog = ({ isVideoOpen, setIsVideoOpen }) => {
  return (<>
    {isVideoOpen && (
      <dialog open className='dialogBox'>
        <div className='dialogContent slide'>
          <button onClick={() => { setIsVideoOpen(false) }} type='button' className='button closeVideo'>Close</button>
          <iframe className='dialogVideo' src="https://www.youtube-nocookie.com/embed/2iHoeHVmw0Q?si=dw7D1iorscq5_3Ht" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </dialog>
    )}
  </>)
}