import './stylesheets/footer.css';

export default function FootBar() {
  return (
    <div className='FooterBar'>
      <div className='FooterDiv'>
        <a href='https://github.com/arquimidesperez'
            target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div className='FooterDiv'>
        <a href='https://www.linkedin.com/in/arquimides-perez-leyva-929880161/'
            target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>  
      </div>
      <div className='FooterDiv'>
        <p className='FooterParagraph'>Arquimides Perez-Leyva</p>
      </div>
    </div>
  )
}