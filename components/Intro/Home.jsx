import classes from './Home.module.css'

function Home() {
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ marginRight: '15px' }}>
          <h1>Welcome to Crypto Monks!</h1>
          <p>
            Lorem ipsum dolor sit amet. Ut dicta facere sed magni blanditiis cum
            quae nostrum. Id aperiam magnam ut minima error et pariatur
            excepturi sit aperiam asperiores. Ad maiores ratione et aliquam
            tenetur sed ratione deleniti est labore dolorum ut ipsa beatae ut
            velit cupiditate cum neque commodi. Qui maiores facere ea eveniet
            illum id dignissimos iusto. Qui magni harum aut unde voluptas sed
            quia cupiditate eos commodi ducimus et cumque impedit At quaerat
            ullam quo laboriosam repudiandae. Aut illum accusantium vel numquam
            consequatur eum deleniti culpa id voluptas eveniet ab deleniti
            dolor. Sed tenetur Quis non voluptas dolorem in tempore eius. Ab
            iusto magni et odit nostrum ab voluptatem reiciendis ex beatae
            voluptatem ut dolor officiis aut voluptatem quam ab doloremque
            voluptas. Ut maiores molestiae vel voluptatem galisum eum
            perferendis nemo vel quae reprehenderit sed reiciendis veniam. Sed
            nemo tenetur ut dolorem quam et voluptatum architecto.
          </p>
        </div>
        <div className={classes.gallery}>
          <div className={classes.gallery__item}>
            <img src="monk-3.jpg" alt="Monk 1" />
          </div>
          <div className={classes.gallery__item}>
            <img src="monk-4.jpg" alt="Monk 2" />
          </div>
          <div className={classes.gallery__item}>
            <img src="monk-1.jpg" alt="Monk 3" />
          </div>
          <div className={classes.gallery__item}>
            <img src="monk-2.jpg" alt="Monk 2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
