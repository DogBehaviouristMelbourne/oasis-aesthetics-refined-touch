import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function Blog() {
  return (
    <>
      {/* Metadata */}
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover tips, guides, and updates from Oasis Aesthetics. Stay informed on skincare, waxing, brows, and more."
        />
        <meta name="author" content="Oasis Aesthetics" />
        <meta name="keywords" content="skincare, aesthetics, brow care, waxing, beauty tips" />
        {/* Open Graph */}
        <meta property="og:title" content="Oasis Aesthetics Blog" />
        <meta property="og:description" content="Stay up to date with expert advice and insights from Oasis Aesthetics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.oasisaesthetics.com/blog" />
        <meta property="og:image" content="https://www.oasisaesthetics.com/images/og-image-blog.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Oasis Aesthetics Blog" />
        <meta name="twitter:description" content="Stay up to date with expert advice and insights from Oasis Aesthetics." />
        <meta name="twitter:image" content="https://www.oasisaesthetics.com/images/og-image-blog.jpg" />
        <title>Oasis Aesthetics | Blog</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>

      <Header isNavOpen={false} toggleNav={() => {}} handleKeyDown={() => {}} scrollY={0} />
      <main role="main">
        <section className="blog-hero">
          <h1>From Our Experts</h1>
          <p>Insights, tips, and news from Oasis Aesthetics.</p>
        </section>

        <section className="blog-posts">
          {/* Blog Post 1 */}
          <article className="post" itemScope itemType="http://schema.org/BlogPosting">
            <header className="post-header">
              <h2 itemProp="headline">How to Care for Your Brows After Waxing</h2>
              <p className="post-meta">
                <time dateTime="2025-06-02" itemProp="datePublished">
                  June 2, 2025
                </time>
                by <span itemProp="author">Vean Mikhael</span>
              </p>
            </header>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Woman applying soothing gel to eyebrows after waxing"
              className="post-image"
              itemProp="image"
            />
            <p className="image-attribution">
              Photo by Karolina Kaboompics on Unsplash
            </p>
            <div className="post-content" itemProp="articleBody">
              <p>
                After your brow waxing appointment at Oasis Aesthetics, proper aftercare is crucial to maintain the sleek, defined look you’ve just achieved. Waxing removes hair from the root, leaving your skin temporarily sensitive, so following these steps ensures a smooth recovery and long-lasting results.
              </p>
              <h3>Step 1: Keep the Area Clean</h3>
              <p>
                Immediately after waxing, avoid touching your brows with unwashed hands. Bacteria can easily irritate the open follicles, leading to redness or even small breakouts. Gently cleanse the area with a mild, fragrance-free cleanser and pat dry with a clean towel.
              </p>
              <h3>Step 2: Skip Makeup for 24 Hours</h3>
              <p>
                Your skin needs time to breathe post-waxing. Applying makeup, especially brow products like pencils or powders, can clog the follicles and cause irritation. If you must go out, embrace your natural look or use a light, non-comedogenic moisturizer to protect the skin.
              </p>
              <h3>Step 3: Apply a Calming Gel</h3>
              <p>
                If your brows feel tender or look red, apply a soothing gel like aloe vera or a post-wax calming lotion. These products help reduce inflammation and hydrate the skin. At Oasis Aesthetics, we recommend keeping a small tube of aloe vera gel in your bag for on-the-go relief.
              </p>
              <h3>Step 4: Avoid Heat and Sweating</h3>
              <p>
                For at least 24-48 hours, steer clear of activities that cause excessive sweating, such as hot yoga, saunas, or intense workouts. Heat can exacerbate redness and irritate the skin, delaying the healing process.
              </p>
              <h3>Step 5: Follow Up with Maintenance</h3>
              <p>
                To keep your brows looking their best between appointments, use a spoolie brush to groom them daily. If you notice stray hairs growing back, resist the urge to pluck them yourself—book your next appointment with us to maintain the shape. For more brow care tips, follow us on{' '}
                <a href="https://www.instagram.com/oasisaesthetics.co" target="_blank" rel="noopener">
                  Instagram
                </a>!
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;