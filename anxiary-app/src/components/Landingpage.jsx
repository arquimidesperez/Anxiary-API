import './stylesheets/landing.css'
  
export default function Landingpage() {
  
  return (
    <div>
      <h1 className='Anxiary'>Anxiary</h1>
        <div className='MarginSpacing'>
        <p className='LandingP'>
          <em>Anxiary</em> (Anxiety + Diary) is a web applications for users to journal about their anxieties
        </p>
        <br />
        <p className='LandingP'>
        A core issue with social media over the last decade has been how it has changed how we interact with it and each other.
        </p>
        <br />
        <p className='LandingP'>
        In recent years we have seen how prolonged social media use and conditioning has begun to negatively effect the mental health of young and old people alike.
        </p>
        <br />
        <p className='LandingP'>
          One of the most dangerous aspects of social media is how we are conditioned to mindlessly scroll through it even if we don't have a set goal.
        </p>
        <br />
        <p className='LandingP'>
          Anxiary seeks to change that by making users more conscious of their media useage and consumption through daily journaling to begin to assess how stressors impact their quality of life. 
        </p>
        <br />
        <p className='LandingP'>
          For more information on how social media negatively impacts mental health consider visting: <a href='https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm' target='_blank' rel='noreferrer'> Social Media and Mental Health</a>
        </p>
      </div>
    </div>
  )
  
}