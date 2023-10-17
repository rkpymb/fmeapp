import React from 'react'
import Image from 'next/image'
import styles from '@/app/page.module.css'
const page = () => {
  return (
      <div className={styles.container}>
          <div className={styles.AboutUsBox}>

              <div className={styles.AboutUsBoxItem}>
                  <div className={styles.AboutUsBoxItemContewnt}>
                      <h2>About <span style={{ color: '#0073e6' }}>flairmyevent</span></h2>

                      <p>Welcome to FlairMyEvent, your go-to platform for connecting with talented artists, vendors, and more for your special events! Whether you're planning a wedding, birthday party, corporate event, or any other occasion, we've got you covered.</p>
                      <div style={{ minHeight: 10 }}></div>

                      <div className={styles.FounderBox}>
                          <div className={styles.FounderBoxIMg}>
                              <Image src={`/ReeshabhSrivastavan.png`} alt="image"
                                  layout="responsive"
                                  width={100}
                                  height={100}
                              />
                          </div>

                          <div className={styles.FounderBoxContentabt}>
                              <p>
                                  Flairmyevent is a dynamic and visionary enterprise founded by Reeshab Srivastava, an MBA graduate in Marketing. With a diverse background and extensive experience in various sectors including Banking, Sales, and Accounting, Reeshab brings a wealth of knowledgewledge and expertise.
                              </p>
                              <p>
                                  In addition to achieving remarkable success in the import/export business of electronic and textile items, Reeshab has also established a strong reputation for providing exceptional virtual assistance services to his clients in the United States. However, his entrepreneurial spirit and ambition drove him to pursue something even greater.

                              </p>
                              <p>
                                  Driven by a deep-rooted passion for art and an unwavering belief in its transformative power, Reeshab embarked on a journey to materialize his big idea and make a significant impact on the business world. Thus,

                              </p>
                              <p>

                                  A DREAM BEHIND THE SKY FULL OF ART was born.

                              </p>
                              <div className={styles.FounderBoxContentabtgi}>
                                  <span>Reeshab Srivastava</span>
                                  <small>Founder & C.E.O</small>
                              </div>

                          </div>
                          
                      </div>
                      <h2>Our <span style={{ color: '#0073e6' }}>Mission</span></h2>

                      <p>At FlairMyEvent, we believe that every event deserves a touch of magic. Our mission is to make event planning easier and more delightful by connecting event organizers with a diverse community of skilled professionals. We're here to turn your vision into reality, making your event a memorable and extraordinary experience for both you and your guests.</p>
                      <div style={{ minHeight: 10 }}></div>
                      <h2>What we <span style={{ color: '#0073e6' }}>Offer ?</span></h2>
                      <p>FlairMyEvent offers a wide range of categories to choose from, including:</p>
                      <ul>
                          <li>Artists: From musicians and dancers to painters and performers, we have a collection of talented artists to add creativity and entertainment to your event.</li>
                          <li>Vendors: Discover reliable vendors for catering, decorations, photography, and everything else you need to make your event seamless and spectacular.</li>
                          <li>Event Planners: If you need assistance in organizing and managing your event, our experienced event planners are here to make the process stress-free.</li>
                      </ul>
                      <div style={{ minHeight: 10 }}></div>
                      <h2>How It <span style={{ color: '#0073e6' }}>Works ?</span></h2>

                      <ol>
                          <li>Create an account or log in if you're already a member.</li>
                          <li>Browse through our extensive list of artists and vendors.</li>
                          <li>Shortlist your favorites and check their availability for your event date.</li>
                          <li>Contact and communicate directly with your chosen professionals.</li>
                          <li>Book the perfect fit for your event and get ready for an unforgettable experience!</li>
                      </ol>


                      <div style={{ minHeight: 10 }}></div>
                      <h2>Join the <span style={{ color: '#0073e6' }}>FlairMyEvent</span><span> Community</span></h2>
                      <p>Whether you're an artist, vendor, or someone in need of exceptional services for your event, FlairMyEvent is the platform to connect, collaborate, and create lasting memories. Join our community today and let's add some flair to your event!</p>
                  </div>


                  <div>
                      
                    
</div>
                  

              </div>

             
          </div>
    </div>
  )
}

export default page
