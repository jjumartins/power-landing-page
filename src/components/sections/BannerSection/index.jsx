import banner from '../../../assets/banner.png'

export const BannerSection = () => {
  return (<>
    <section>
      <div className='container'>
        <div>
          <h1 className='title h1'>We Design Impactful Digital <span>Products</span></h1>
          <p className='paragraph'>Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.</p>
          <div>
            <button className='button'>Contact Us</button>
            <div>
              <a href='https://www.youtube.com/'>▶</a>
              <p className='paragraph'>Watch our introduction video</p>
            </div>
          </div>
        </div>
        <div>
          <img src={banner} alt='Banner' />
        </div>
      </div>
    </section>
  </>)
}